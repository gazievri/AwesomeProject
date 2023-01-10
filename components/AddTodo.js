import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';

export const AddTodo = ({handleAdd}) => {
  const [text, setText] = useState('');

  const onChange = (data) => {
    setText(data);
  };

  const handleClick = () => {
    handleAdd(text);
    setText('')
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Впишите задачу"
        value={text}
      />
      <Button title='Add' onPress={handleClick} />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        padding: 5,
        marginHorizontal: '20%',
        width: '60%',
        borderBottomWidth: 1,
        marginTop: 20,
    }
});
