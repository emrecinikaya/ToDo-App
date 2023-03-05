import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  activeContainer: {
    flex: 1,
    backgroundColor: '#d1af06',
    margin: 6,
    padding: 10,
    borderRadius: 5,
  },
  passiveContainer: {
    flex: 1,
    backgroundColor: 'lightgrey',
    margin: 6,
    padding: 10,
    borderRadius: 5,
  },
  passiveText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'white',
  },
});
