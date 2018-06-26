import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Test3 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>采集科技</Text>
                <Button title="go to Login" onPress={() => Actions.account()} />
                <Button title="go to wrongNotes" onPress={() => Actions.wrongNotes()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});