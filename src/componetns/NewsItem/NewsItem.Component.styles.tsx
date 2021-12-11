import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    marginVertical:10,
    height:80,
    borderBottomColor:'gray'    
  },
  smallThumb:{
      height:75,
      width:75
  },
  contentText: theme =>{
    return {
      color:theme.colors.defaultText
    }
  },
  contentTextContiner:{
    flex:3,
  },
  imageContainer: {flex:1.5},
  divider: { backgroundColor: 'gray', height:0.3, flex:1}
});