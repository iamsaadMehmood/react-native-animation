import React from 'react';
import {HStack, Pressable, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {heightToDp, responsiveFontSize, widthToDp} from '../utils/responsive';
import {Colors} from '../utils/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface IProps {
  title: string;
  isBack: boolean;
  onBack: Function;
  isForward: boolean;
  onForward: Function;
}
const AppBar = (props: IProps) => {
  return (
    <HStack style={styles.appBar}>
      {props.isBack && (
        <Pressable>
          <Ionicons name="arrow-back" size={30} color={Colors.title} />
        </Pressable>
      )}
      <Text style={styles.title}>{props.title}</Text>
      {props.isForward && (
        <Pressable>
          <Ionicons name="arrow-forward" size={30} color={Colors.title} />
        </Pressable>
      )}
    </HStack>
  );
};
export default AppBar;
const styles = StyleSheet.create({
  appBar: {
    width: widthToDp(100),
    height: heightToDp(10),
    backgroundColor: Colors.backgroundPrimary,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.title,
    fontSize: responsiveFontSize(20),
    lineHeight: 20,
  },
});
