import React,{useState} from 'react';
import {StyleSheet,Button,TextInput,View,Text} from'react-native';

export default function TodoAdd(){
    const [add,setAdd]=useState();
    const [listAdd,setListAdd]=useState([])

    const changeHandler=(changedtext)=>{
        setAdd(changedtext);
    }

    const addhandler=()=>{
        setListAdd((currentList)=>[...currentList,add])
    }
    return(
        <View styles={styles.container}>
            <View style={styles.input}>
                <TextInput style={{marginRight:20,width:"80%",borderWidth:1,padding:10}} placeholder='Add todos' onChangeText={changeHandler}></TextInput>
                <Button onPress={addhandler} title='Add'></Button>
            </View>    
            <View style={styles.list}> <Text style={{marginBottom:5,fontWeight:'bold'}}>List of Text</Text>
                <View style={{flex:1,borderWidth:1}}> 
                    {listAdd.map(list=><Text style={{marginLeft:5}} key={list}>{list}</Text>)}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    input:{
        flexDirection:'row',
        padding: 20,
        marginBottom:20,
        borderBottomWidth:2,
        marginLeft:5,
        marginRight:5,
        borderBottomColor:'gray',
        alignItems:'center'
    },
    list:{
        paddingHorizontal:20,
        paddingBottom:5
   
    }
});
