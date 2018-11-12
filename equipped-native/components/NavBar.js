import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Button, Icon, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class NavBar extends React.Component {
    render() {

        const {screen} = this.props.screen;
        return (
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
        );
    }
}
export default withNavigation(NavBar);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    topNav: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
});
