import React, {useState} from 'react';
import { View, TextInput } from 'react-native';

import style from './InputText.sytles';

const Input = (props) => {
    const {
        placeholder,
        onChange
    } = props;

  return(
    <View style={style.contaienr}>
      <TextInput
        style={style.input}
        onChange={onChange}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;