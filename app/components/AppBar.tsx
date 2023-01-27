import React from 'react';
import {HStack, Pressable, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {heightToDp, responsiveFontSize, widthToDp} from '../utils/responsive';
import {Colors} from '../utils/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {goBack} from '../services/navigation.service';
interface IProps {
  title: string;
  isBack: boolean;

  isForward: boolean;
  onForward: Function;
}
const AppBar = (props: IProps) => {
  return (
    <HStack style={styles.appBar}>
      {props.isBack ? (
        <Pressable onPress={() => goBack()}>
          <Ionicons name="arrow-back" size={30} color={Colors.title} />
        </Pressable>
      ) : (
        <View />
      )}
      <Text style={styles.title}>{props.title}</Text>
      {props.isForward ? (
        <Pressable onPress={() => props.onForward()}>
          <Ionicons name="arrow-forward" size={30} color={Colors.title} />
        </Pressable>
      ) : (
        <View />
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
