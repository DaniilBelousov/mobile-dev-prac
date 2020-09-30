import React, { useState } from 'react';
import { View, Button as ButtonRN } from 'react-native';

import style from './Button.styles';

const Button = (props) => {
    const {
        title,
        onPress,
        color
    } = props;

  return(
    <View style={style.contaienr}>
      <ButtonRN
        title={title}
        color={color}
        onPress={onPress}
      />
    </View>
  );
};

export default Button;