import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, Pressable, Image  } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


function SignUp(){
    return(

<View style={styles.container}> 

<View style={styles.topContainer}>
<Image style = {styles.logoImg}
source ={require('../../assets/swadeiLogo.png')}
    />
<Text style={styles.title}>Swade[i]</Text>
<Text >___________________________________</Text>
</View>


<View style={styles.midContainer}>

<Text style={styles.scTitle}>Sign Up</Text>

<Text style={styles.lables}>Full Name</Text>
<TextInput
placeholder="Enter your Full Name"
style = {styles.input}
onSubmitEditing={(InputDate)=>{
    alert(InputDate.nativeEvent.text)}}

/>

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
    
    alignItems:"center",
    justifyContent:"center",
        padding:60,
        backgroundColor :"#FF8C00"

},

midContainer:{
    flex:2,
    padding:10,
    alignItems:"center",
   backgroundColor :"#FF8C00"
},

BottomContainer:{
    flex:1,
    backgroundColor :"#FF8C00",
    alignItems:"center",
    justifyContent:"center",

},

title:{
    
    fontWeight:"bold",
fontSize:40,
}, 

input:{
borderWidth:1,
height:40,
width:300,
padding:8,
borderRadius:40,
},

scTitle:{
    

fontSize:21,
paddingBottom:20,
paddingTop:40,
},

lables:{
    paddingTop:13,
    paddingBottom:4,
    },

logoImg:{
        height:190,
        width:190,
        paddingBottom:0,
        marginTop:20
        
    
},

});

export default SignUp;