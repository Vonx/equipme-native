import React from 'react';
import { ScrollView, StyleSheet, View, Linking, Alert, TouchableOpacity } from 'react-native';
import { Card, Text, Button, FormLabel, FormInput, Icon, Avatar, Divider, List, ListItem } from 'react-native-elements';
import { WebBrowser } from 'expo';
import {NavBar} from '../components/NavBar';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topNav}>
                    <Icon onPress={() => {}}
                          raised
                          name='play'
                          type='font-awesome'
                          color='#f58'
                          size={30}/>
                    <Icon onPress={() => {{this.props.navigation.navigate('LendScreen')}}}
                          raised
                          name='info'
                          type='font-awesome'
                          color='#f58'
                          size={30}/>
                </View>
              <Text> Hello world</Text>
            </View>
        );
    }
}

  const styles = StyleSheet.create({
          container: {
              flex: 1,
          },
      topNav: {
          flexDirection: 'row',
          justifyContent: 'space-between'
      }
      });
