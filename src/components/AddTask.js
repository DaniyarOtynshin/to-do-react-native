import { useState } from 'react'
import { Button, View, Text, TextInput } from 'react-native'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')

  const onSubmit = () => {
      if (!text) return

        onAdd({ text })

        setText('')
  }

  return (
      <View>
          <View>
              <Text>Task</Text>
              <TextInput
                  placeholder='Add Task'
                  value={text}
                  onChangeText={(text) => setText(text)}
              />
          </View>
          <Button title='Add' onPress={onSubmit} />
      </View>
  )
}

export default AddTask
