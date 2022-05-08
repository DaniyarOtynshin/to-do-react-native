import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const Header = ({ title = 'Task Tracker', onAdd, showAdd }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Button title={showAdd ? 'Close' : 'Add'} onPress={onAdd} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24
  }
});

export default Header
