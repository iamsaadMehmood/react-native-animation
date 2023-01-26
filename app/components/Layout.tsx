import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from '../utils/color';
import {heightToDp, widthToDp} from '../utils/responsive';

interface IProps {
  header: JSX.Element | null;
  children: React.ReactNode;
}
const Layout: FC<IProps> = props => {
  return (
    <SafeAreaView style={styles.screen}>
      {props.header}
      {props.children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    height: heightToDp(100),
    width: widthToDp(100),
    backgroundColor: Colors.backgroundPrimary,
  },
});
export default Layout;
