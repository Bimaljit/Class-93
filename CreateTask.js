import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import {Card} from "react-native-paper";
import {RFvalue} from "react-native-responsive-fontSize";
import DropDownPicker from "react-native-dropdown-picker";

export default class CreateTask extends Component{
   constructor() {
    super();
    this.state = {
        task:[],
        taskDescription:[],
    }
   }

   render(){

    return(
    <View style = {styles.container}>
    
      <Card style = {styles.card}>

        <Text style = {styles.txt}> New Task </Text>
        <Text style = {styles.txt}> Task Name </Text>
        <TextInput style = {styles.inputFont}
        onChangeText = {Task =>{this.setState({Task})}}>
        </TextInput>

        <Text style = {styles.txt}> Task Description </Text>
        <TextInput style = {styles.inputfont}
         onChangeText = {taskdescription => (this.setState({taskdecription}))}
        ></TextInput>
     
        <TouchableOpacity style = {styles.btn}
        onPress = {() => this.props.navigation.navigate
        ('displaytask', {task:this.state.task, taskdescription:this.state.taskdecription})}
        > Save </TouchableOpacity>

      </Card>
        
    </View>
    )

   }
}
const styles = styleSheet.create({
   container:{
    flex:1,
    backgroundColor:"#7FB5FF"
   }
})