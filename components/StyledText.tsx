import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

type BaseProps = {
  style?: StyleProp<TextStyle>;
};

export const MonoText: React.FC<BaseProps> = props => {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
};

export default MonoText;
