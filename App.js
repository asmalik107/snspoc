/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Platform, PushNotificationIOS, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import PushNotification from 'react-native-push-notification';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            token: ''
        };

        this.fcmSenderId = '1060337103079';
    }

    componentDidMount() {
        this.configure();
    }

    configure = () => {
        PushNotification.configure({

            // (optional) Called when Token is generated (iOS and Android)
            onRegister: (token) => {
                console.log('TOKEN:', token);
                this.setState({token: token.token})
            },

            // (required) Called when a remote or local notification is opened or received
            onNotification: (notification) => {
                console.log('NOTIFICATION:', notification);

                // process the notification

                // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
               notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            onError: (err) => {
                console.log(err);
            },

            // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
            senderID: this.fcmSenderId,

            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },

            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,

            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             */
            requestPermissions: true
        });
    };

    handlePerm = (perms) => {
        Alert.alert("Permissions", JSON.stringify(perms));
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Token</Text>
                <TextInput style={styles.instructions} value={this.state.token} multiline/>
                <TouchableOpacity onPress={() => PushNotification.checkPermissions(this.handlePerm)}>
                    <Text>Check Permissions</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 30
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
