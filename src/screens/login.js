
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, Pressable  } from "react-native";



function Login(){
    return(

<View style={styles.container}> 

<View style={styles.topContainer}>
<Text style={styles.title}>Swade[i]</Text>
</View>
<View style={styles.midContainer}>


<Text>Email</Text>
<TextInput
placeholder="Enter your Email"
style = {styles.input}
onSubmitEditing={(InputDate)=>{
    alert(InputDate.nativeEvent.text)}}
keyboardType ={"email-address"}
/>

<Text>Password</Text>
<TextInput
placeholder="Enter your Password"
secureTextEntry={true}
style = {styles.input}
/>


</View>
<View style={styles.BottomContainer}></View>

</View>
    );
}


const styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:"#fff",
},

topContainer:{
    flex:1,
    backgroundColor:"pink",
    alignItems:"center",
    justifyContent:"center",


},

midContainer:{
    flex:2,
    padding:10,
    alignItems:"center"
   
},

BottomContainer:{
    flex:1,
    backgroundColor:"green",
    alignItems:"center",
    justifyContent:"center",

},

title:{
    color:"blue",
    fontWeight:"bold",
fontSize:25,
}, 

input:{
borderWidth:1,
height:30,
width:300,
padding:8,
borderRadius:12,
},

});

export default Login;