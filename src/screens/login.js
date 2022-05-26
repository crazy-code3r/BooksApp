
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, Pressable,Image  } from "react-native";



function Login(){
    return(

<View style={styles.container}> 

<View style={styles.topContainer}>
    <Image style={styles.logoImg}
source ={require('../../assets/slogop.png')}
    />
</View>
<View style={styles.midContainer}>


<Text style={styles.lables}>Email</Text>
<TextInput
placeholder="Enter your Email"
style = {styles.input}
onSubmitEditing={(InputDate)=>{
    alert(InputDate.nativeEvent.text)}}
keyboardType ={"email-address"}
/>

<Text style={styles.lables}>Password</Text>
<TextInput
placeholder="Enter your Password"
secureTextEntry={true}
style = {styles.input}
/>

<TouchableOpacity style={styles.button}>
    <Text> Login </Text>
</TouchableOpacity>

</View>
<View style={styles.bottomContainer}>
<TouchableOpacity style ={styles.lables}>
    <Text> Forget your password </Text>
</TouchableOpacity>
<TouchableOpacity>
    <Text style={styles.bottomLabels}> Don't have an account? SIGN UP! </Text>
</TouchableOpacity>
</View>
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
    
    alignItems:"center",
    justifyContent:"center",
        paddingTop:110,
        backgroundColor :"#FFD36E"

},

midContainer:{
    flex:2,
    padding:10,
    alignItems:"center",
    backgroundColor :"#FFD36E"
},

bottomContainer:{
    flex:1,
    backgroundColor :"#FFD36E",
    alignItems:"center",
    justifyContent:"center",

},
title:{
 
    fontWeight:"bold",
fontSize:35,
}, 

input:{
    borderWidth:1,
    height:40,
    width:300,
    padding:8,
    borderRadius:40,
    borderColor:"white",
    backgroundColor:"white",
    color:"black",

},

logoImg:{
    height:90,
    width:350,
    resizeMode:"contain",


    },
    
lables:{
    paddingTop:15,
    paddingBottom:15,

    
    },

    bottomLabels:{

        
        fontSize:15,
        color:"blue",

    },

    button:{
        backgroundColor:"white",
        padding:10,
borderRadius:10,
width:150,
height:40,
marginTop:30,
alignItems:"center"
    }

});

export  {Login};