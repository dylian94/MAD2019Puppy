import React from 'react';
import {StyleSheet, View} from 'react-native'
import PuppyPageComponent from './Components/PuppyPageComponent';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
        <PaperProvider>
            <View style={styles.container}>
                <Appbar.Header>
                    <Appbar.Content
                        title="Puppy app" />
                </Appbar.Header>
                <PuppyPageComponent />
            </View>
        </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
