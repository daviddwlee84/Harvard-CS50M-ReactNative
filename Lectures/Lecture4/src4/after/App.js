import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo'

import contacts, { compareNames } from './contacts'
import ScrollViewContacts from './ScrollViewContacts'
import FlatListContacts from './FlatListContacts'
import SectionListContacts from './SectionListContacts'
import AddContactForm from './AddContactForm'

export default class App extends React.Component {
  state = {
    showContacts: true,
    showForm: false,
    contacts: contacts,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  // This is unused in the end
  sort = () => {
    // sort is a built-in function of every JS array, we can pass a function
    this.setState(prevState => ({contacts: prevState.contacts.sort(compareNames)}))
    // to force "creating" new array => to cause "immutability"
    // so that the FlatList will notice the array is changed
    // this.setState(prevState => ({contacts: [...prevState.contacts].sort(compareNames)}))
  }

  showForm = () => {
    this.setState({showForm: true})
  }

  render() {
    if (this.state.showForm) return <AddContactForm />
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="add contact" onPress={this.showForm} />
        {this.state.showContacts && <SectionListContacts contacts={this.state.contacts} />}
      </View>
    );
    // or we can also do something like this
    // {this.state.showContacts ? <ContactsComponent /> : null}
    // or just use && like that (if first thing is true then return next; or just return false)
    // null and false in react rendering are the same
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
