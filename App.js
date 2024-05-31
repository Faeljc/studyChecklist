import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import Tarefas from './src/Tarefas'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  const handleTasks = () => {
    let data = {
      key: Date.now(),
      item: text
    }

    if (text === ''){
      return
    }

    setTasks(oldArray => [data, ...oldArray])
    setText('')
  }

  const handleDelete = (item) =>{
    let filtraItem = tasks.filter((text)=>{
      return (text.item !== item)
    })

    setTasks(filtraItem)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#050530' barStyle={'light-content'} translucent={false}/>
      <View style={styles.header}>
        <Text style={styles.title}>Tarefas</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} value={text} onChangeText={(e) => setText(e)} />
          <TouchableOpacity style={styles.button} onPress={handleTasks}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style ={styles.body}>
        <FlatList
          style={styles.list}
          data={tasks}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <Tarefas data={item} deleteItem={()=>handleDelete(item.item)} />}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#050530',
    width: '100%',
    padding: 20
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    width: '85%',
    height: 42,
    fontSize: 14,
    fontWeight: 'bold'
  },
  title: {
    marginTop: 35,
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  button: {
    height: 42,
    backgroundColor: '#20b2aa',
    width: '15%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex:1,
    width: '100%',
    paddingStart: '4%',
    paddingEnd: '4%',
  }
});
