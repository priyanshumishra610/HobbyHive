/**
 * @format
 * App entry point - registers the main App component
 */

import { AppRegistry } from 'react-native';
import App from './src/app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
