import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const Task = ({ task, onDelete }) => {
  return (
    <View style={styles.task}>
        <Text>{task.text}</Text>
        <Button title={'remove'} onPress={() => onDelete(task.id)} />
    </View>
  )
}

const styles = StyleSheet.create({
    task: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        margin: 5,
        paddingTop: 10,
    }
});

export default Task
