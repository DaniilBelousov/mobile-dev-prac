import React, { useState } from 'react';
import { Text, Button as ButtonRN, TouchableOpacity } from 'react-native';

import style from './Button.styles';

const Button = (props) => {
    const {
        onPress,
        title,
        activeOpacity = 0.8,
    } = props;

  return(
    <TouchableOpacity
      onPress={onPress}
      style={style.button}
      activeOpacity={activeOpacity}
    >
      <Text style={style.buttonText}>
        {title}
      </Text>
     </TouchableOpacity>
  );
};

export default Button;