import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput ,Button} from 'react-native';
import Form from 'react-native-form';
import FlatListDemo from './Components/FlatListDemo';
import ListViewDemo from './Components/ListViewDemo';
import TextInputDemo from './Components/TextInputDemo';
import TouchanbleDemo from './Components/TouchableDemo';
import Hello from './Hello';
import Header from './TodoApp/Components/Header';
import TodoItem from './TodoApp/Components/TodoItem';
import TodoAdd from './TodoApp/Components/TodoAdd';
import Calculator from './TodoApp/Components/Calculator';
import CalculatorClass from './TodoApp/Components/CalculatorClass';
import Sample from './TodoApp/Components/Sample';

export default function App() {
  // const [todos, setTodos] = useState([
  //   { text: 'create an app', key: '1' },
  //   { text: 'play cricket', key: '2' },
  //   { text: 'call your friend', key: '3' }
  // ])

  return (
    // <View style={styles.container}>
    //   <Header />
    //   <View style={ styles.content }>
    //             <TextInput style={{marginRight:20,width:"80%",borderWidth:1,padding:10}} placeholder='Add todos' onChangeText={changeHandler}></TextInput>
    //             <Button onPress={addhandler} title='Add'></Button>
            
    //     {/* to form */}
    //     <View style={ styles.list }>
    //       <FlatList 
    //       data={ todos }
    //       renderItem={({ item }) =>(
    //         <TodoItem item={ item} />
    //       ) }
    //       />
    //     </View>
    //   </View>
    // </View>
    
    // <TodoAdd></TodoAdd>
    <Calculator></Calculator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    padding: 40
  },
  list: {
    marginTop: 20
  },
  input:{

    flexDirection: 'row',
    justifyContent:'space-around'
    

  }
  
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header:{
//     backgroundColor: 'green',
//     padding: 20
//   },
//   boldText:{
//     fontWeight: 'bold'
//   },
//   body:{
//     backgroundColor: 'yellow',
//     padding: 20
//   }
// });
