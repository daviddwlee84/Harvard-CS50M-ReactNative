import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  increaseCount() {
    // This will only increase by 1, because setState() calls are batched and run asynchronously
    // this.setState({count: this.count + 1})
    // this.setState({count: this.count + 1})

    // Use updater function instead
    this.setState(prevState => ({count: prevState.count + 1}))
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log(this.state.count) // to prove asynchronous
  }

  render() {
    // click the button then invode increaseCount()
    // Bind "this"
    // this.increaseCount.bind(this)
    // or use arrow notation
    // () => this.increaseCount()
    // or define in the constructor
    // ...
    return (
      <div style={styles}>
        <div>
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
