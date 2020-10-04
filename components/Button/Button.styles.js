import { StyleSheet } from 'react-native';

import Color from '../../style/Color';


export default StyleSheet.create({
  button: {
    backgroundColor: Color.gray,
    borderRadius: 25,
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginStart: 65,
    marginEnd: 65,
    borderColor: Color.black,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    color: Color.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});