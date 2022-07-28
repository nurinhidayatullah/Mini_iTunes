import React, {PropsWithChildren} from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import textStyle from '../@constants/TextStyle';

const MyAppText: React.FC<PropsWithChildren<{type?: StyleProp<TextStyle>}>> = ({
  children,
  type = textStyle.md_normal,
}) => {
  return (
    <View >
      <Text style={type}>{children}</Text>
    </View>
  );
};

export default MyAppText;
