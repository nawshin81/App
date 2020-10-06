import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import SemesterScreen from './src/screen/SemesterScreen';
import CourseList1st from './src/screen/FirstSemCourseScreen';
import CourseList2nd from './src/screen/SecondSemCourseScreen';
import CourseList3rd from './src/screen/ThirdSemCourseScreen';
import FacultyListScreen from './src/screen/FacultyListScreen';

const stack=createStackNavigator();

function App()
{
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={HomeScreen}/>
        <stack.Screen name='Profile' component={ProfileScreen}/>
        <stack.Screen name='Semesters' component={SemesterScreen}/>
        <stack.Screen name='First Semester Course List' component={CourseList1st}/>
        <stack.Screen name='Second Semester Course List' component={CourseList2nd}/>
        <stack.Screen name='Third Semester Course List' component={CourseList3rd}/>
        <stack.Screen name="Faculty List" component={FacultyListScreen}/>
        
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;