import React from 'react';
import { ScrollView, StyleSheet, View, Linking, Alert, TouchableOpacity } from 'react-native';
import {Text, Button, FormLabel, FormInput, Icon, List, ListItem } from 'react-native-elements';

export default class LendScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text> Hello this is a Lend screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
