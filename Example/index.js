import React from 'react';
import {
  View,
} from 'react-native';
import SvgUri from '../src/components/Svg';
import CIcon from '../src/components/Icon';

const Example = () => (
  <View>
    <SvgUri height="20" width="20" source="examBook" />
    <CIcon style={{ fontSize: 20, color: '#000' }} name="suo" size={25} />
  </View>
);

export default Example;
