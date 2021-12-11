/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// Dev Config
if (__DEV__) {
    import('./ReactotronConfig').then(() => {
    });
}

AppRegistry.registerComponent(appName, () => App);
