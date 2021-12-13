import {StyleSheet, ViewStyle} from 'react-native';

export default StyleSheet.create({
  title: theme => ({
    color: theme.colors.title,
  }),
  cardStyle: theme => ({
    backgroundColor: theme.colors.cardBackground,
    borderWidth: 0.1,
    borderColor: theme.colors.divider,
  }),
  borderStyle: theme => theme.colors.divider,
  contentText: theme => ({
    color: theme.colors.title,
  }),
  container: {flex: 1, justifyContent: 'space-between'},
  flexOne: {flex: 1},
  image: {height: 200, width: '100%'},
  subHeaderContainer: {paddingTop: 10},
  authorText: theme => ({marginBottom: 10, color: theme.colors.title}),
  publishTimeText: theme => ({
    marginBottom: 10,
    fontSize: 11,
    color: theme.colors.title,
  }),
});
