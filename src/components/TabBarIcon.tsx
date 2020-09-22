import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Colors from '../constants/Colors';

type BaseProps = {
  focused?: boolean;
  name: string;
};

const TabBarIcon: React.FC<BaseProps> = props => {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;
