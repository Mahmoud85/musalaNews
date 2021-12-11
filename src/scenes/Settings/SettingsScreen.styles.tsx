import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardStyle: theme => ({
    backgroundColor: theme.colors.cardBackground,
  }),
  borderStyle: theme => theme.colors.divider,
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '20%',
  },
  buttonsContainer:{paddingTop: 10, width:300},
  cardTitle: {textAlign:'left'}
});
