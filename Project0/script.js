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
    const checkbox = document.createElement('input')
    checkbox.className = classNames.TODO_CHECKBOX
    checkbox.type = 'checkbox' // Checkbox is just one type of input in HTML. 
    checkbox.onchange = checkboxListener // The function will be invoke when change the checkbox status

    const span = document.createElement('span')
    span.className = classNames.TODO_TEXT
    span.textContent = contentText
    span.contentEditable = true // span.setAttribute('contenteditable', 'true')

    const li = document.createElement('li')
    li.className = classNames.TODO_ITEM
    li.appendChild(checkbox)
    li.appendChild(span)

    return li
}

// The function will be call when trigger any checkbox (changing status)
function checkboxListener() {
  if (this.checked) updateUncheckedCount(-1) // "this" here is the object which called it. i.e. checkbox
  else updateUncheckedCount(1)
}