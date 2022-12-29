/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {NativeBaseProvider} from 'native-base';

import App from './App';
import {name as appName} from './app.json';

function Main() {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
