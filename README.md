# Harvard CS50M: CS50's Mobile App Development with React Native

Notes and practice projects about Mobile Application of Harvard University CS50 course. (Spring 2018)

## Lecture

| Lecture                                                           | Title / Contents     | Materials                                                                | Project                                                 |
| ----------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------- |
| [Lecture 0](https://video.cs50.net/mobile/2018/spring/lectures/0) | Overview, JavaScript | [slides](Lectures/Lecture0/lecture0.pdf), [code](Lectures/Lecture0/src0) | -                                                       |
| [Lecture 1](https://video.cs50.net/mobile/2018/spring/lectures/1) | JavaScript, ES6      | [slides](Lectures/Lecture1/lecture1.pdf), [code](Lectures/Lecture1/src1) | [Project 0 - TODO App](#project-0-todo-app)             |
| [Lecture 2](https://video.cs50.net/mobile/2018/spring/lectures/2) | React, Props, State  | [slides](Lectures/Lecture2/lecture2.pdf), [code](Lectures/Lecture2/src2) | -                                                       |
| [Lecture 3](https://video.cs50.net/mobile/2018/spring/lectures/3) | React Native         | [slides](Lectures/Lecture3/lecture3.pdf), [code](Lectures/Lecture3/src3) | [Project 1 - Pomodoro Timer](#project-1-pomodoro-timer) |

## Projects

### Project 0: TODO App

* [Project 0](https://docs.cs50.net/mobile/2018/x/projects/0/project0.html) ([backup](Projects/Project0.md), [Github Classroom Repository](https://github.com/mobile50/project0-daviddwlee84))

Notes:

* JavaScript Property
  * innerHTML:
    * HTMLDOMObject.innertHTML
    * The Element property innerHTML gets or sets the HTML or XML markup contained within the element.
  * children:
    * It will return a "HTMLCollection" and it can be accessed like an array.
    * [Best way to get child node -- Stackoverflow](https://stackoverflow.com/questions/10381296/best-way-to-get-child-nodes)
  * parentNode:
    * Return its parent node element
  * appendChild

* Delete Element
  * Traditional way
    * `element.parentNode.removeChild(element)`
  * jQuery (DOM Library)
    * `$('#some_element').remove()`
    * [jQuery Remove Element](https://www.w3schools.com/jquery/jquery_dom_remove.asp)

* console.log(Object) will show the object detail on browser's console. (If not familar with the object property it's a good way to find out)

> Example:
>
> * [Ex1](https://github.com/GeekNabil/Todo-VanillaJS/blob/master/script.js)
> * [Ex2](https://github.com/jhhayashi/react-native-course/tree/master/project0/solution)

### Project 1: Pomodoro Timer

* [Project 1](https://docs.cs50.net/mobile/2018/x/projects/1/project1.html)

## Links

* [**Mobile App Development with React Native - Spring 2018**](https://cs50.github.io/mobile/) (link broken)
* [edx - CS50's Mobile App Development with React Native](https://www.edx.org/course/cs50s-mobile-app-development-with-react-native)

> * [Harvard Extension Course](https://www.extension.harvard.edu/)
>   * [Search result for CS50](https://www.extension.harvard.edu/course-catalog/courses?keyword=cs50)
>     * Spring 2019
>       * [CSCI E-33A Web Programming with Python and JavaScript](https://www.extension.harvard.edu/course-catalog/courses/web-programming-with-python-and-javascript/25184?keyword=cs50)
>       * [CSCI E-23A Introduction to Game Development](https://www.extension.harvard.edu/course-catalog/courses/introduction-to-game-development/25183?keyword=cs50)
>       * [CSCI E-1B Computer Science for Business Professionals](https://www.extension.harvard.edu/course-catalog/courses/computer-science-for-business-professionals/25393?keyword=cs50)

* [CS50 Github](https://github.com/cs50)
  * [Mobile50 Github](https://github.com/mobile50) - It will including your private project repository when you use *Github Classroom*. Just fork it to your account.
* Others' Project
  * [dillon/cs50-mobile](https://github.com/dillon/cs50-mobile)
