import React from 'react';
import { Text, StyleSheet, View,Image} from 'react-native';

const ProfileScreen = () => {
    return (<View style={styles.viewStyle}>
        <Image 
        style={styles.image}
        source={require('./../../assets/myPicture.jpg')}></Image>
        <Text style={styles.textStyle}>Name: Nawshin Ulfat</Text>
        <Text style={styles.textStyle}>Student ID: 170042081</Text>
        <Text style={styles.textStyle}>Room No: 104,FHR</Text>
        <Text style={styles.textStyle}>Email: nawshinulfat@iut-dhaka.edu</Text>
    </View>
    )
};

const styles=StyleSheet.create(
    {
        viewStyle:{
            borderColor:'blue'
        },
        image:{
            marginTop:30,
            marginBottom:30,
            height:300,
            width:200,
            marginLeft:80
        },
        textStyle:{
            fontSize:20,
            textAlign:'left'
        }
    }
);

export default ProfileScreen;