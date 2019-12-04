// lecture3.pdf slide 18
import React from 'react'
import {StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  text: {fontSize: 72},
})

// Make the Count as React.Component
class Count extends React.Component {
  // Use static here
  static propTypes = {
    // This will check the props.count to be exactly a number
    count: PropTypes.number.isRequired,
  }

  render() {
    return (
      <Text style={styles.text}>
        {this.props.count}
      </Text>
    )
  }
}

// Or we can use Stateless Functional Component to make the Count
// const Count = props => (
//   <Text style={styles.text}>
//     {props.count}
//   </Text>
// )
// Count.propTypes = {
//     count: PropTypes.number.isRequired,
// }

// import this by `import {num} from './Count.js'`
export const num = 50

// export default => set the default
// so when we `import Count from './Count.js'` the Count will be the default
// also we can use anyother custom name like CustomCount and will still work
export default Count
