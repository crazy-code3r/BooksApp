import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";


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
    alert(InputDate.nativeEvent.text)
}}
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
},

});

export default Login;