import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"

const contactsMenuButtons = [
    {
        type: "starred", 
        name: "starred",
    },
    {
        type: "contact",
        name: "Jessy The",
        photo: require("../assets/002-conjure.png")
    },
    {
        type: "contact",
        name: "Nazariy Dumanskyy",
        photo: require("../assets/003-qualm.png")
    },
    {
        type: "contact",
        name: "Rafeh Qazi",
        photo: require("../assets/004-brash.png")
    }
]

function ContactsMenu() {
  return (
    <View style={styles.container}>
        {contactsMenuButtons.map((contact, index) => 
            <View 
                key={index}
                style={styles.row}>

                {/* Image */}
                {contact.type == "starred" ? 
                (
                    <View style={styles.starredIcon}> 
                    <AntDesign name="star" size={30} color="#efefef"/>
                    </View>
                ): (
                    <Image source={contact.photo} style={styles.image}/>
                )}
        
                {/* Text */}
                <Text style={styles.text}>
                    {contact.name}
                </Text>
            </View>
        )}
    </View>
  )
}

export default ContactsMenu

const styles=StyleSheet.create({
    container:{},
    text:{
        color: "white",
        paddingLeft: 15,
        fontSize: 18,
    },
    row:{
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
    },
    starredIcon: {
        backgroundColor: "#333333",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20,
    },
})