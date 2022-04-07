import React,{useState} from 'react';
import {StyleSheet,Button,TextInput,View,Text} from'react-native';

export default function Calculator(){
    const [input1,setInput1]=useState('')
    const [input2,setInput2]=useState('')
    const [result,setResult]=useState('0')
    const changeHandler=(changedtext)=>{
        console.log(input2)
        setInput2(changedtext)
        
    }
    const addition=()=>{
        var a=parseInt(input1);
        var b=parseInt(input2);
        var c=a+b;
        var b=c.toString();
        setResult(b);
    }
    const subtraction=()=>{
        var a=parseInt(input1);
        var b=parseInt(input2);
        var c=a-b;
        var b=c.toString();
        setResult(b);
    }
    const multiplication=()=>{
        var a=parseInt(input1);
        var b=parseInt(input2);
        var c=a*b;
        var b=c.toString();
        setResult(b);
    }
    const division=()=>{
        var a=parseInt(input1);
        var b=parseInt(input2);
        var c=a/b;
        var b=c.toString();
        setResult(b);
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={{fontWeight:'bold',color:'white'}}>Calculator</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={{borderWidth:1,padding:10,marginBottom:5,marginLeft:10}} keyboardType='numeric' placeholder='input element1' onChangeText={(newtext)=>{setInput1(newtext)}}></TextInput>
                <TextInput style={{borderWidth:1,marginLeft:10,padding:10}} placeholder='input element2' onChangeText={changeHandler}></TextInput>
            </View>
            <View style={styles.button}>
                <Button onPress={addition} title='Add'></Button>
                <Button onPress={subtraction} title='Sub'></Button>
                <Button onPress={multiplication} title='Mul'></Button>
                <Button onPress={division} title='Div'></Button>
            </View>
            <View style={styles.output}>
                <Text style={{fontWeight:'bold',flex:1,alignItems:'center'}} >Result : {result}</Text>
            </View> 
              
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      borderWidth:1,
      borderColor:'black',
      margin:20,
    },
    header:{
      backgroundColor:'blue',
      padding:20,
      alignItems:'center',
      borderBottomWidth:1,
      borderColor:'black'
    },  
    input:{
      padding:20,
      width:'100%',
      borderBottomWidth:1,
      
      borderBottomColor:'gray', 
      alignItems:'center'
    },
    button:{
        flexDirection:'row',
        padding:40,
        marginHorizontal:20,
        justifyContent:'space-between'
    },
    output:{
        borderWidth:1,
        borderColor:'green',
        padding:20,
        margin:20

    }
});
