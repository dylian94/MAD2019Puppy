import {Component} from "react";
import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from "react-native-paper";

export default class PuppyDetailsComponent extends Component {

    data = {
        name: this.props.name,
        age: this.props.age
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Puppy</Text>
                <Text>Name: {this.data.name}</Text>
                <Text>Age: {this.data.age}</Text>
                <Button />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'red',
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold'
    }
});