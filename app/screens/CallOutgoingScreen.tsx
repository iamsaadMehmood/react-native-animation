import {View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import AppBar from '../components/AppBar';
import Layout from '../components/Layout';
import {goBack, navigate} from '../services/navigation.service';
import {Colors} from '../utils/color';
import Feather from 'react-native-vector-icons/Feather';
const _size = 100;
const CallOutgoingScreen = () => {
  return (
    <Layout
      header={
        <AppBar
          title={'Call Outgoing'}
          isBack={true}
          onBack={() => goBack()}
          isForward={true}
          onForward={() => navigate('')}
        />
      }>
      <View style={styles.mainContainer}>
        <View style={[styles.center, styles.dot]}>
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
export default CallOutgoingScreen;
