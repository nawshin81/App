import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const CourseList1st = () => {
    const course = [
        { name: 'CSE 4305', key: '1.' },
        { name: 'CSE 4307', key: '2.' },
        { name: 'SWE 4301', key: '3.' },
        { name: 'SWE 4303', key: '4.' },
        { name: 'CSE 4311', key: '5.' },
        { name: 'MATH 4317', key: '6.' },
    ]
    return (
        <View>
            <Text style={styles.textStyle}>First Semester</Text>
            <FlatList
                data={course}
                renderItem={function ({ item }) {
                    return (<Text style={styles.listStyle}>
                        <Text style={styles.listStyle}>{item.key}</Text>
                        {item.name}</Text>)
                }}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 30,
            textAlign: 'center',
            marginTop:20,
            marginBottom:40
        },
        listStyle:{
            textAlign:'left',
            fontSize:20,
            marginBottom:15,
        }
    }
)

export default CourseList1st;