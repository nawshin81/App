import React from 'react';
import { View, StyleSheet, Button } from 'react-native';


const SemesterScreen = (props) => {
    return (
        <View>
            <View style={styles.viewStyle}>
                <Button title='1st'
                    onPress={function () {
                        props.navigation.navigate("First Semester Course List")
                    }} />
            </View>
            <View style={styles.viewStyle}>
                <Button title='2nd'
                    onPress={function () {
                        props.navigation.navigate("Second Semester Course List")
                    }} />
            </View>
            <View style={styles.viewStyle}>
                <Button title='3rd'
                    onPress={function () {
                        props.navigation.navigate("Third Semester Course List")
                    }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        viewStyle: {
            fontSize: 50,
            padding: 40,
        }
    }
)

export default SemesterScreen;