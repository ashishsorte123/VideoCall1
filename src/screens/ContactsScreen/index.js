import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, TextInput} from 'react-native';
import dummyContacts from '../../../assets/data/contacts.json';
import styles from './styles';

const ContactsScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);
  //   console.log(searchTerm);

  useEffect(() => {
    const newContacts = dummyContacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setFilteredContacts(newContacts);
  }, [searchTerm]);
  return (
    <View style={styles.page}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
        placeholder="Search..."
      />
      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <Text style={styles.contactName}>{item.user_display_name}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ContactsScreen;
