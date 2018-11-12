import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import { Card, Button, List, SearchBar} from 'react-native-elements';
import { Bars } from 'react-native-loader';

export class CardList extends React.Component {

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
    };

    showData() {
        const {data} = this.props;
        return (
            <FlatList data={data} ListHeaderComponent={this.renderHeader} numColumns={2} keyExtractor={(item, index)=> index.toString()} renderItem={({item, index}) =>
            { return (
                <View style={{backgroundColor: 'fff'}}>
                <Card key={index} containerStyle={styles.container}>
                    <Image
                        resiseMode='cover'
                        source={item.image}
                        style={styles.backgroundImage}
                    />
                </Card>
                </View>
                );
            }}
                />
        );
    }

    render() {

        const data = this.props.data;
        if (data && data.length > 0) {
            return this.showData();
        }
        else {
            return <View style={styles.container}>
                <Bars size={20} color="#000000" />
            </View>
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        height: 150,
        width: 150,
        borderRadius: 5,
        marginTop: 10,
        paddingTop: 5,
        backgroundColor: 'transparent',

    },
    backgroundImage: {
        width: 150,
        height: 150,
        borderRadius: 5,
        marginTop: -5,
    },
});
