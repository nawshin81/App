import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';


const FacultyListScreen = () => {
    const faculty = [{ name: 'Anamul Islam', key: '1.' },
    { name: 'Mamun Ahmed', key: '2.' },
    { name: 'Sara Rahman', key: '3.' },
    { name: 'Mostafizul Houqe', key: '4.' },
    { name: 'Jannatul Mawa', key: '5.' },
    ]

    return(
        <View>
            <FlatList
                data={faculty}
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
        listStyle:{
            textAlign:'left',
            fontSize:20,
            marginBottom:15,
        }
    }
)

export default FacultyListScreen;