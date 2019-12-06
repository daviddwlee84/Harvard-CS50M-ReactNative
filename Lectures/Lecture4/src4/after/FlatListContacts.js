// This is unused in the end
import React from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

// the usage is written in the React document
const renderItem = ({item}) => <Row {...item} />
// {item} will extract the exact key for you
// or we can do
// const renderItem = (obj) => <Row {...(obj.item)} />
// and also equivalent to
// const renderItem = (obj) => <Row name={obj.item.name} phone={obj.item.phone} />

const FlatListContacts = props => (
  <FlatList renderItem={renderItem} data={props.contacts} />
)

FlatListContacts.propTypes = {
  contacts: PropTypes.array,
}

export default FlatListContacts
