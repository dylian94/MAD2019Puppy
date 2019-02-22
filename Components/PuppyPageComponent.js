import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import PuppyListComponent from "./PuppyListComponent";

export default class PuppyPageComponent extends Component {

    puppies = [
        {
            id: 0,
            name: "Joep",
            age: 1
        },
        {
            id: 1,
            name: "Tommy",
            age: 2
        }
    ];

    render() {
        return (
            <View style={styles.container}>
                <PuppyListComponent puppies={this.puppies} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'yellow',
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
