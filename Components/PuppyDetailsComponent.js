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
                <Text style={styles.titleText}>Puppy</Text>
                <Text style={styles.infoText}>Name: {this.data.name}</Text>
                <Text style={styles.infoText}>Age: {this.data.age}</Text>
                <Button title="Alert" />
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
        fontSize: 30
    },
    titleText: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 54,
    },
});