import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';

const CourseList2nd=()=>
{
    const course=[
        {name:'CSE 4201',key:'1.'},
        {name:'SWE 4203',key:'2.'},
        {name:'CSE 4205',key:'3.'},
        {name:'HUM 4213',key:'4.'},
        {name:'HUM 4217',key:'5.'},
        {name:'CSE 4207',key:'6.'},
    ]
    return(
        <View>
            <Text style={styles.textStyle}>Second Semester</Text>
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

const styles=StyleSheet.create(
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

export default CourseList2nd;