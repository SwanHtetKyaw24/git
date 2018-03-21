import React from 'react';
import { View, Text } from 'react-native';

const tObj = [];

class TestScreen extends React.Component {
    componentWillMount() {
        for(let v=1;v<25;v++){
            tObj.push(v);
        }
        console.log(tObj);
    }
    render() {

    }
}

export default TestScreen;