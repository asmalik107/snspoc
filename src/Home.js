import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    }
})

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}

export default Home;