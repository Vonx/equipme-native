import React from 'react';
import { ScrollView, StyleSheet, View, Linking, Alert, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import { Card, Text, Button, FormLabel, FormInput, Icon, Avatar, Divider, List, ListItem } from 'react-native-elements';
import {CardList} from '../components/cardList';
import {NavBar} from '../components/NavBar';
import Guitar from '../assets/images/guitar.jpg';
import fav from '../assets/images/fav.jpg';
import settings from '../assets/images/settings.png';

import { MonoText } from '../components/StyledText';

const {height, width} = Dimensions.get('window');
const itemWidth = (width - 15) / 2;

const menuList = [
    {   title: 'Search Albums',
        subTitle: 'Search your favorite music',
        icon: 'music',
        navigateTo: 'AlbumScreen',
        image: Guitar,
        fontColor: '#000'
    },
    {   title: 'Favorite Collections',
        subTitle: 'Access your favorite albums',
        icon: 'play',
        navigateTo: 'FavoritesScreen',
        image: fav,
        fontColor: '#fff',
    },
    {   title: 'Settings',
        subTitle: 'Customize your App',
        icon: 'info',
        navigateTo: 'SettingsScreen',
        image: settings,
        fontColor: '#fff'
    },
    {   title: 'Favorite Collections',
        subTitle: 'Access your favorite albums',
        icon: 'play',
        navigateTo: 'FavoritesScreen',
        image: fav,
        fontColor: '#fff',
    },
    {   title: 'Search Albums',
        subTitle: 'Search your favorite music',
        icon: 'music',
        navigateTo: 'AlbumScreen',
        image: Guitar,
        fontColor: '#000'
    }
];

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            itemWidth: itemWidth,
            items: menuList,
            isFetching: false
        };
    }

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
                    <CardList data={this.state.items}
                    />



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
          justifyContent: 'center'
      },
      backgroundImage: {
          backgroundColor: '#000',
          opacity: 100
      },
      });
