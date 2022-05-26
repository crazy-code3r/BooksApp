import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, Pressable, Image,ScrollView  } from "react-native";



function SignUp(){
    return(
   <View style={styles.container}>  
<ScrollView horizontal={false}
  showsHorizontalScrollIndicator={true}>
<View style={styles.container}> 

<View style={styles.topContainer}>
<Image style = {styles.logoImg}
source ={require('../../assets/slogop.png')}
    />
<Text >___________________________________</Text>
</View>


<View style={styles.midContainer}>

<Text style={styles.scTitle}>Sign Up</Text>

<Text style={styles.lables}>Full Name</Text>
<TextInput
placeholder="Full Name"
style = {styles.input}  
onSubmitEditing={(InputDate)=>{
    alert(InputDate.nativeEvent.text)}}

/>

<Text style={styles.lables}>Email</Text>
<TextInput
placeholder="Email"
style = {styles.input}
onSubmitEditing={(InputDate)=>{
    alert(InputDate.nativeEvent.text)}}
keyboardType ={"email-address"}
/>

<Text style={styles.lables}>Password</Text>
<TextInput
placeholder="Password"
secureTextEntry={true}
style = {styles.input}
/>

<Text style={styles.lables}>Password</Text>
<TextInput
placeholder="Confirm Password"
secureTextEntry={true}
style = {styles.input}
/>


<TouchableOpacity style={styles.button}>
    <Text> Login </Text>
</TouchableOpacity>


</View>
<View style={styles.BottomContainer}></View>
<TouchableOpacity>
    <Text style={styles.bottomLabels}> Do you have account already? SIGN IN </Text>
</TouchableOpacity>
</View>
</ScrollView>
</View>   
    );
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor :"#FFD36E"
    },
    
    topContainer:{
        flex:1,
        
        alignItems:"center",
        justifyContent:"center",
            paddingTop:90,
            paddingBottom:30,
            backgroundColor :"#FFD36E"
    
    },
    
    midContainer:{
        flex:2,
        padding:10,
        alignItems:"center",
        backgroundColor :"#FFD36E",
        marginHorizontal: 20,
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
    

    scTitle:{
        fontWeight:"bold",
        fontSize:30,
        
    },

    input:{
        borderWidth:1,
        height:40,
        width:300,
        padding:10,
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
        paddingBottom:5,
    
        
        },
    
        button:{
            backgroundColor:"white",
            padding:10,
    borderRadius:10,
    width:150,
    height:40,
    marginTop:30,
    alignItems:"center"
        },
        button:{
            backgroundColor:"white",
            padding:10,
    borderRadius:10,
    width:150,
    height:40,
    marginTop:30,
    alignItems:"center"
        },

        bottomLabels:{

        paddingTop:20,
        alignSelf:"center",
            fontSize:15,
            color:"blue",
    
        },

    });

export  {SignUp};