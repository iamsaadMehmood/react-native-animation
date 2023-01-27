import React from 'react';
import {View} from 'native-base';
import {MotiView} from 'moti';
import {Colors} from '../utils/color';
interface IProps {
  size: number;
}
const LoadingIndicator = (props: IProps) => {
  const {size} = props;
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 0,
        shadowOpacity: 0.5,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: (size + 20) / 2,
        borderWidth: size / 10,
        shadowOpacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        loop: true,
        // repeatReverse: false,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: Colors.purple,
        shadowColor: Colors.purple,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    />
  );
};
export default LoadingIndicator;
