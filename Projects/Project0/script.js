const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0
let uncheckedCount = 0

function updateItemCount(diff) {
  itemCount += diff
  itemCountSpan.innerHTML = itemCount
}

function updateUncheckedCount(diff) {
  uncheckedCount += diff
  uncheckedCountSpan.innerHTML = uncheckedCount
}

function newTodo() {
  const contentText = prompt("Add a new todo", "")
  if (contentText) {
    const todo = createTodo(contentText)
    list.appendChild(todo)
    updateItemCount(1)
    updateUncheckedCount(1)
  }
}

function createTodo(contentText) {
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'X'
    deleteButton.className = classNames.TODO_DELETE
    deleteButton.onclick = removeTodo // The function will be invoke when press the button

    const checkbox = document.createElement('input')
    checkbox.className = classNames.TODO_CHECKBOX
    checkbox.type = 'checkbox' // Checkbox is just one type of input in HTML. 
    checkbox.onchange = checkboxListener // The function will be invoke when change the checkbox status

    const span = document.createElement('span')
    span.className = classNames.TODO_TEXT
    span.textContent = contentText
    span.contentEditable = true // same as => span.setAttribute('contenteditable', 'true')

    // The parenet of all three element above
    const li = document.createElement('li')
    li.className = classNames.TODO_ITEM
    li.appendChild(deleteButton)
    li.appendChild(checkbox)
    li.appendChild(span)

    return li
}

// The function will be call when trigger any checkbox (changing status)
function checkboxListener() {
  if (this.checked) updateUncheckedCount(-1) // "this" here is the object which called it. i.e. checkbox
  else updateUncheckedCount(1)
}

function removeTodo() {
  const todo = this.parentNode // this.parentNode is the "li" of the deleteButton
  updateItemCount(-1)
  if (!todo.children[1].checked) { // the second element of "li" is checkbox
    updateUncheckedCount(-1) // update unchecked count only when it's unchecked
  }
  list.removeChild(todo) // Remove that todo
}