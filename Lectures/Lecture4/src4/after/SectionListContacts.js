import React from 'react'
import { SectionList, Text } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const renderItem = ({item}) => <Row {...item} />

const renderSectionHeader = ({section}) => <Text>{section.title}</Text>

const SectionListContacts = props => {
  // Reduce to an object
  // {'A': [Axxxx, ...],
  //  'B': [Bxxxx, ...],
  //  ...]
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj, // cloning all of the keys in obj
      // overriding the one where the key is the first letter that we have extracted
      // and add that contact at the end
      // use (obj[firstLetter] || []) to make sure when obj[firstLetter] is empty will still work
      // i.e. obj is an empty object
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})

  const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    data: contactsByLetter[letter],
    title: letter, // the fist character of the name as the section title
  }))

  return <SectionList sections={sections} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
}
// <SectionList
//   renderItem={renderItem}
//   renderSectionHeader={renderSectionHeader}
//   sections={[{
//     title: 'A',
//     data: props.contacts
//   }]} />

SectionListContacts.propTypes = {
  contacts: PropTypes.array,
}

export default SectionListContacts
