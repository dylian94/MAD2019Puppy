import {Component} from "react";
import React from "react";
import {StyleSheet, View, FlatList} from "react-native";
import PuppyDetailsComponent from './PuppyDetailsComponent'

export default class PuppyListComponent extends Component {


    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.props.puppies}
                          renderItem={({item}) => <PuppyDetailsComponent name={item.name} age={item.age}/>}
                          keyExtractor={({id}, index) => id} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'green',
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});