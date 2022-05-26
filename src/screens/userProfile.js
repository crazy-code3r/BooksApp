import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, Pressable, Image,ScrollView  } from "react-native";

function UserProfile(){
    return(
   <View style={styles.container}>  
<ScrollView horizontal={false} showsHorizontalScrollIndicator={true}>

<View style={styles.container}> 

<View style={styles.topContainer}></View>
    
<View style={styles.picContainer}>
<Image style = {styles.logoImg} source ={require('../../assets/pic.jpg')}/>
</View>

    
<View style={styles.midContainer}>
<Text style={styles.scTitle}>NEOND LAL</Text>

<Text style={styles.lablesVlaue}> amman7222@gmail.com</Text>


<View style={{padding:10, backgroundColor:"white",width:300,height:50, borderRadius:20,alignItems:"center", marginTop:30,}}>

<View style={{flexDirection:"row", flexWrap:"wrap",}}>
<Image style = {{height:50,width:50,resizeMode:"contain", }} source ={require('../../assets/email-logo-png-1114.png')}/>
<Text style={styles.lables}> My Books</Text> 
</View>
 
</View>

</View>


<View style={styles.BottomContainer}></View>


</View>
</ScrollView>
</View>   
    );
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor :"#FFD36E",

    },
    
    topContainer:{
        flex:1,
        
        alignItems:"center",
        justifyContent:"center",
        padding:90,
            backgroundColor :"#FCF69C",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
    },
    
    midContainer:{
        flex:2,
        padding:5,
        alignItems:"center",
        backgroundColor :"#FFD36E",
        marginHorizontal: 20,
        borderTopLeftRadius:30,
    },
    
    bottomContainer:{
        flex:1,
        backgroundColor :"#FFD36E",
        alignItems:"center",
        justifyContent:"center",
    
    },
    picContainer:{

        marginTop : -100,    
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
    height:150,
    width:350,
    marginBottom:10,
    resizeMode:"contain",
    borderRadius:180,
    borderColor:"#FFF56D",
   
    },

    lableImg:{
        height:20,
        width:350,
        marginBottom:10,
        resizeMode:"contain",
       
        },
    
    lables:{
        color:"black",
        fontSize:20,
    
        
        },

        lablesVlaue:{   
         color:"#8D8DAA"
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

export default UserProfile;