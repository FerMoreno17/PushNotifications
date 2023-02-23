/* eslint-disable comma-dangle */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import messaging from '@react-native-firebase/messaging';

function App(): JSX.Element {
  const [pushToken, setPushToken] = useState('No token');

  useEffect(() => {
    getFirebasePermissions();
  }, []);

  const getFirebasePermissions = async () => {
    messaging()
      .requestPermission({
        carPlay: false,
      })
      .then(authStatus => {
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        if (enabled) {
          getToken();
        }
      })
      .catch(error => {
        if (error.code !== 'messaging/unregistered') {
          throw error;
        }
        getToken();
      });
  };

  const getToken = async () => {
    try {
      console.log('try');
      await messaging().requestPermission(); // IMPORTANT!
      await messaging().registerDeviceForRemoteMessages(); // IMPORTANT!
      let token = await messaging().getToken();
      console.log(token);
      setPushToken(token);
    } catch (error) {
      throw error;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Prueba push notification IOS</Text>
      <Text style={styles.text}>{pushToken}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default App;
