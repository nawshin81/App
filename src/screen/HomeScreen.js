import React from 'react';
import { Text, StyleSheet, Button, View, Image, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
    //console.log(props);
    return (
        <View style={styles['viewStyle']}>
            <Image
                style={styles.logo}
                source={require('./../../assets/iutlogo.png')} />
            <Text style={styles['textStyle']}>Department of CSE</Text>
            <Text style={styles['textStyle']}>Programme:SWE</Text>
            <TouchableOpacity style={styles.touchable}
                onPress={function () {
                    props.navigation.navigate('Profile');
                }}>
                <Text>My Profile</Text>
            </TouchableOpacity>
            <Button
                title='Semester wise course list'
                onPress={function () {
                    props.navigation.navigate("Semesters");
                }}></Button>
            <Button
                title='List of Faculty Members'
                onPress={function () {
                    props.navigation.navigate('Faculty List');
                }} />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 20,
            color: 'blue',
            marginBottom:5
        },
        viewStyle: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        touchable: {
            backgroundColor: "#DDDDDD",
            padding: 10,
            fontSize: 20
        },
        logo: {
            marginTop:10,
            marginBottom:10,
            height: 315,
            width: 190,
        },

    }
);
export default HomeScreen;
