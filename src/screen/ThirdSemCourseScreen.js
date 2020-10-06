import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';

const CourseList3rd=()=>
{
    const course=[
        {name:'CSE 4101',key:'1.'},
        {name:'CSE 4103',key:'2.'},
        {name:'SWE 4107',key:'3.'},
        {name:'MATH 4117',key:'4.'},
        {name:'HUM 4109',key:'5.'},
        {name:'HUM 4113',key:'6.'},]
    return(
        <View>
            <Text style={styles.textStyle}>Third Semester</Text>
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

export default CourseList3rd;