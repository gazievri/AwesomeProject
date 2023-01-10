import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

export const ListItem = ({ item, handleDelete }) => {
  return (
    <TouchableWithoutFeedback key={item.id} onPress={() => handleDelete(item.id)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    width: '60%',
    marginTop: 20,
    marginLeft: '20%',
  },
});
