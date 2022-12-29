import {
  StyleSheet,
  Image,
  Text,
  View,
TextInput,

  ImageBackgroun,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Blog = () => {
  return (
    <>
      {/* Header part */}
      <ScrollView>
      <View style={styles.heder}>
        <View style={styles.blogstopIconArea}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            style={styles.blogsBackIcon}
          />
          <Text style={styles.blogstoptext}> Help & Support</Text>
          <AntDesign
            name="close"
            size={24}
            color="white"
            style={styles.blogsXIcon}
          />
        </View>
        <View style={styles.imageHeader}>
          <Image
            style={styles.headerRightImage}
            source={require("../../assets/Ellipse50.png")}
          />
          <Image
            style={styles.headerLeftImage}
            source={require("../../assets/Ellipse49.png")}
          />
        </View>
      </View>

      {/* Complete Headr part */}

      {/* contact part */}

      <View style={styles.imageNew}>
        <Image
          style={styles.ViewImage}
          source={require("../../assets/Rectangle867.png")}
        />
        <Text style={styles.contactView}>Contact Us</Text>
      </View>
      <View style={styles.contactBoxBackground}>
        <View style={styles.contactPage}>
          
            <View style={styles.phoneIcon}>
              <Text style={styles.circle}><Feather name="phone-call" size={20}  /></Text>
              <Text style={{paddingLeft:35,color:("#102C56"),}}>+21-789456123</Text>
            </View>
          
          
            <View style={styles.phoneIcon}>
              <Text style={styles.circle} ><Fontisto name="email" size={20}  /></Text>
              <Text style={{paddingLeft:35,color:"#102C56",}}>salonnz12@info.com</Text>
            </View>
        
          
            <View style={styles.phoneIcon}>
              <Text style={styles.circle}><EvilIcons name="location" size={20}  /></Text>
              <Text style={{paddingLeft:35, color:"#102C56",}}>Salonnz, 29 Houston RD, TX 52014</Text>
            </View>
            
         
          
            <View style={styles.phoneIcon}>
              <Text style={styles.circle}><MaterialCommunityIcons name="web" size={20}  /></Text>
              <Text style={{paddingLeft:30, color:"#102C56",}}>www.salonnz.com </Text>
            </View>
            
          
        </View>
      </View>

        {/* form start */} 
        <View style={styles.help}>
        <Text style={{alignSelf:"center",fontSize:20,paddingTop:12,}}>Need Help ?</Text>
        </View>
         <View style={styles.form}>
         <Text style={styles.inputName}>Name</Text>
         <TextInput
         style={styles.Input}
         keyboardType="numeric"
         backgroundColor="#D9D9D9"
      />
      <Text style={styles.inputName}>Email</Text>
         <TextInput
         style={styles.Input}
         keyboardType="numeric"
         backgroundColor="#D9D9D9"
      />
      <Text style={styles.inputName}>Phone</Text>
         <TextInput
         style={styles.Input}
         keyboardType="numeric"
         backgroundColor="#D9D9D9"
      />
      <Text style={styles.inputName}>Message</Text>
         <TextInput
         style={styles.Input}
         placeholder="Write the message here"
         keyboardType="numeric"
         backgroundColor="#D9D9D9"
         numberOfLines={9}
         multiline={true}
      />
      <TouchableOpacity>
        <View style={styles.Submit}>
          <Text style={{alignSelf:"center",color:"#FFFFFF",paddingTop:8,}}>Submit</Text>
        </View>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  // hedear styles  Start.........

  heder: {
    // flex:1,
    width: "100%",
    height: 175,
    backgroundColor: "#102C56",
    // paddingLeft:555,



  },
  blogstopIconArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  blogsBackIcon: {
    fontSize: 30,
  },
  blogstoptext: {
    fontSize: 25,
    color: "#FFFFFF",
  },
  blogsXIcon: {
    fontSize: 30,
  },
  imageHeader: {
    flexDirection: "row",
  },
  imageHeader: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerLeftImage: {
    position: "absolute",
    bottom: 86,
    marginLeft: 340,
  },
  headerRightImage: {
    position: "absolute",
    bottom: 32,
  },
  //    Hader Styles end.......................

  imageNew: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginTop: 5,
  },
  ViewImage: {
    alignSelf: "center",
    height: 200,
    width: 330,
  },
  contactView: {
    alignSelf: "center",
    paddingTop: 30,
    color: "#102C56",
    fontSize: 20,
    fontSize: 20,
  },
  contactBoxBackground: {
    backgroundColor: "#FFFFFF",
  },
  contactPage: {
    backgroundColor: "#FFFFFF",
    height: 235,
    width: 360,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
    shadowOpacity: 18,
    elevation: 9,
    marginBottom:10,
  },
  
  phoneIcon:{
    flexDirection:"row",
    paddingLeft:20,
    paddingTop:15,
  },
  circle:{
    backgroundColor:"#102C56",
    color:"#FFFFFF",
    height:40,
    width:40,
    justifyContent:"center",
    borderRadius:30,
    elevation:15,
    textAlign:"center",
    paddingTop:8,
  },


// Form work start
help:{
  backgroundColor:"#FFFFFF",
  alignSelf:"center",
  width:"100%",
},
  form:{
 backgroundColor:"#FFFFFF",
 height:"100%",
  },
  inputName:{
    paddingLeft:20,
  },
  
Input:{
alignSelf:"center",
borderWidth:1,
width:385,
height:40,
borderRadius: 4,
},
Submit:{
marginTop:12,
  alignSelf:"center",
  fontSize:18,
  borderRadius:30,
  height:40,
  width:199,
  backgroundColor:"#ED0046",
  color:"#FFFFFF",
},

});

export default Blog;
