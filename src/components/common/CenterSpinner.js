import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const styles = {
    viewStyle: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    }
};

const CenterSpinner = () => {
    return (
        <View style={styles.viewStyle}>
            <ActivityIndicator size="large" />
        </View>
    );
};

export {CenterSpinner};