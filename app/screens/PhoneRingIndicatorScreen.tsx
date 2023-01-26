import {View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import AppBar from '../components/AppBar';
import Layout from '../components/Layout';
import {goBack, navigate} from '../services/navigation.service';
import {Colors} from '../utils/color';
import Feather from 'react-native-vector-icons/Feather';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
const _size = 100;
const PhoneRingIndicatorScreen = () => {
  return (
    <Layout
      header={
        <AppBar
          title={'Phone Ring Indicator'}
          isBack={true}
          onBack={() => goBack()}
          isForward={true}
          onForward={() => navigate('')}
        />
      }>
      <View style={styles.mainContainer}>
        <View style={[styles.center, styles.dot]}>
          {[...Array(5).keys()].map(index => {
            return (
              <MotiView
                from={{opacity: 0.7, scale: 1}}
                animate={{opacity: 0, scale: 4}}
                transition={{
                  type: 'timing',
                  duration: 2000,
                  easing: Easing.out(Easing.ease),
                  loop: true,
                  repeatReverse: false,
                  delay: index * 200,
                }}
                key={index}
                style={[StyleSheet.absoluteFillObject, styles.dot]}></MotiView>
            );
          })}
          <Feather
            name="phone-outgoing"
            size={32}
            color={Colors.backgroundPrimary}
          />
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: Colors.purple,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default PhoneRingIndicatorScreen;
