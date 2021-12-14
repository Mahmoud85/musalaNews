import {Appearance} from 'react-native-appearance';

export default modeListener = callBack =>
  Appearance.addChangeListener(({colorScheme}) => {
    callBack(colorScheme);
  });
