import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback, Platform,  FlatList } from 'react-native';
import { Header } from './components/Header';
import { ListItem } from './components/ListItem';
import { useState } from 'react';
import { AddTodo } from './components/AddTodo';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {
      text: 'Купить молоко',
      id: 1,
      complete: false
    },
    {
      text: 'Купить хлеб',
      id: 2,
      complete: false
    },
    {
      text: 'Купить сахар',
      id: 3,
      complete: false
    },
  ]);

  const handleAdd = (text) => {
    if (!text || text.length === 0) return;
    setListOfItems(list => {
      return [
        {text, id: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  const handleDelete = (id) => {
    setListOfItems(listOfItems.filter(item => item.id !== id))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddTodo handleAdd={handleAdd} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => ( <ListItem item={item} handleDelete={handleDelete} />)} />
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});
