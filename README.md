# Harvard CS50M: CS50's Mobile App Development with React Native

Notes and practice projects about Mobile Application of Harvard University CS50 course. (Spring 2018)

## Lecture

| Lecture                                                           | Title / Contents     | Materials                                                                | Project / Exercise                                      |
| ----------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------- |
| [Lecture 0](https://video.cs50.net/mobile/2018/spring/lectures/0) | Overview, JavaScript | [slides](Lectures/Lecture0/lecture0.pdf), [code](Lectures/Lecture0/src0) | -                                                       |
| [Lecture 1](https://video.cs50.net/mobile/2018/spring/lectures/1) | JavaScript, ES6      | [slides](Lectures/Lecture1/lecture1.pdf), [code](Lectures/Lecture1/src1) | [Project 0 - TODO App](#project-0-todo-app)             |
| [Lecture 2](https://video.cs50.net/mobile/2018/spring/lectures/2) | React, Props, State  | [slides](Lectures/Lecture2/lecture2.pdf), [code](Lectures/Lecture2/src2) | -                                                       |
| [Lecture 3](https://video.cs50.net/mobile/2018/spring/lectures/3) | React Native         | [slides](Lectures/Lecture3/lecture3.pdf), [code](Lectures/Lecture3/src3) | [Project 1 - Pomodoro Timer](#project-1-pomodoro-timer) |
| [Lecture 4](https://video.cs50.net/mobile/2018/spring/lectures/4) | React Native         | [slides](Lectures/Lecture4/lecture4.pdf), [code](Lectures/Lecture4/src4) | [exercise](Lectures/Lecture4/exercises4)                |

## Projects

### Project 0: TODO App

* [Project 0](https://docs.cs50.net/mobile/2018/x/projects/0/project0.html) ([backup](Projects/Project0.md), [Github Classroom Repository](https://github.com/mobile50/project0-daviddwlee84))

> TODO: demo screenshot

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

> My publish: [https://exp.host/@daviddwlee84/pomodoro-timer](https://exp.host/@daviddwlee84/pomodoro-timer)

* [Project 1](https://docs.cs50.net/mobile/2018/x/projects/1/project1.html)

> TODO: demo screenshot

```sh
# install dependencies
npm install

# install expo cli tool
npm install expo-cli --global

# start debuging
expo start
```

* Picker
  * [Picker · React Native](https://facebook.github.io/react-native/docs/picker)
  * [React Native - Picker - Tutorialspoint](https://www.tutorialspoint.com/react_native/react_native_picker.htm)
  * [Understanding of How Picker works in React Native - About React](https://aboutreact.com/react-native-picker/)
* TouchableOpacity (replacement of Button)
  * [TouchableOpacity · React Native](https://facebook.github.io/react-native/docs/touchableopacity.html)
* InputText
  * [Handling Text Input · React Native](https://facebook.github.io/react-native/docs/handling-text-input)
* [javascript - Understanding unique keys for array children in React.js - Stack Overflow](https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js)
* [reactjs - React-Native Button style not work - Stack Overflow](https://stackoverflow.com/questions/43585297/react-native-button-style-not-work)
* [react native - How to prevent layout from overlapping with iOS status bar - Stack Overflow](https://stackoverflow.com/questions/42599850/how-to-prevent-layout-from-overlapping-with-ios-status-bar)
  * not sure why `Constants.statusBarHeight` still can't work even install [`expo-constants`](https://docs.expo.io/versions/latest/sdk/constants/)
* [Attempt to invoke virtual method 'android.graphics.drawable.Drawable android.graphics.drawable.Drawable$ConstantState.newDrawable(android.content.res.Resources)' on a null object reference · Issue #2924 · react-native-community/react-native-maps](https://github.com/react-native-community/react-native-maps/issues/2924)

> Example
>
> * Example
>   * [Ex1](https://github.com/mohaned2014/Pomodoro-Timer-React-Native) - Highly inspired
>     * [snack](https://snack.expo.io/@git/github.com/mohaned2014/Pomodoro-Timer-React-Native)
>   * [Ex2](https://github.com/eemoir/Pomodoro-With-React-Native) - there is bug in its timer
>   * [Ex3](https://github.com/jonidelv/focustimeapp) - facebook login????
> * Demos
>   * [demo1](https://www.youtube.com/watch?v=9blGoGyKZPg)
>   * [demo2](https://www.youtube.com/watch?v=tFRSpPtLwiM)
> * Other
>   * [App from Scratch: Building a Pomodoro Timer in React and Deploying it to Heroku - YouTube](https://www.youtube.com/watch?v=3gPbn5LaU_8)

## Links

* [**Mobile App Development with React Native - Spring 2018**](https://cs50.github.io/mobile/) (link broken)
* [edx - CS50's Mobile App Development with React Native](https://www.edx.org/course/cs50s-mobile-app-development-with-react-native)
* [Youtube playlist](https://www.youtube.com/playlist?list=PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR)

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

### Tutorial

Flexbox

* [React Native Tutorial 8: Stylesheets and Flexbox Layouts - YouTube](https://www.youtube.com/watch?v=JlDp07xuH1k)
* [Aligning Children using Flexbox in React Native - Modus Create](https://moduscreate.com/blog/aligning-children-using-flexbox-in-react-native/)

### Tools

For React

* [**CodeSandbox**: Online Code Editor Tailored for Web Application Development](https://codesandbox.io/) - Test React in the sandbox

For React Native

* [Expo](https://expo.io/) - Suite of tools to accelerate the React Native development - [Expo — Learn how | Getting Started](https://expo.io/learn)
  * [Snack](https://snack.expo.io/) - Test React Native in the browser
  * XDE
* [Appetize.io - Run native mobile apps in your browser](https://appetize.io/)

### Third-party Components

* [react-native-community/react-native-slider: React Native component used to select a single value from a range of values](https://github.com/react-native-community/react-native-slider)
* [oblador/react-native-vector-icons: Customizable Icons for React Native with support for NavBar/TabBar/ToolbarAndroid, image source and full styling.](https://github.com/oblador/react-native-vector-icons)
* [yamill/react-native-orientation: Listen to device orientation changes in react-native and set preferred orientation on screen to screen basis.](https://github.com/yamill/react-native-orientation)

### Documents

* React Native
  * [**Components and APIs · React Native**](https://facebook.github.io/react-native/docs/components-and-apis.html)
  * [Layout with Flexbox · React Native](https://facebook.github.io/react-native/docs/flexbox)
* Expo ([github](https://github.com/expo/expo))
  * [Constants - Expo Documentation](https://docs.expo.io/versions/latest/sdk/constants/)
  * [Upgrading Expo SDK Walkthrough - Expo Documentation](https://docs.expo.io/versions/latest/workflow/upgrading-expo-sdk-walkthrough/)
    * `expo update 35.0.0` (2019/12)
  * [Building Standalone Apps - Expo Documentation](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/)
    * `expo login`
    * `expo build:android -t apk`
* Babel
  * [Config Files · Babel](https://babeljs.io/docs/en/config-files)
  * [.babelrc · Babel](https://babeljs.io/docs/en/6.26.3/babelrc)
* Flexbox
  * Cheatsheet
    * [Flexbox Cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
    * [FLEX: A simple visual cheatsheet for flexbox](http://flexbox.malven.co/)

---

* Copy a file's contents to clipboard: `cat file.js | pbcopy`
* Babel plugin problem
  * [Build fails after eject: Cannot find module '@babel/plugin-transform-react-jsx' · Issue #6099 · facebook/create-react-app](https://github.com/facebook/create-react-app/issues/6099)
    * `rm -rf node_modules && yarn`
  * [babel-plugin-transform-react-jsx-source - npm](https://www.npmjs.com/package/babel-plugin-transform-react-jsx-source)
    * `npm install --save-dev babel-plugin-transform-react-jsx-source`
  * [App.js: Cannot read property 'filename' of undefined after update sdk to 31.0.0 · Issue #2576 · expo/expo](https://github.com/expo/expo/issues/2576)
