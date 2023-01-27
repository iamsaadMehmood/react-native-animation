import { View } from 'native-base';
import {StyleSheet} from 'react-native';
import AppBar from '../components/AppBar';
import Layout from '../components/Layout';
import LoadingIndicator from '../components/LoadinIndicator';
import {goBack} from '../services/navigation.service';

const LoadingAnimationScreen = () => {

  return (
    <Layout
      header={
        <AppBar
          title={'Loading Animation'}
          isBack={true}
          isForward={true}
          onForward={() => null}
        />
      }>
      <View style={styles.mainContainer}>
<LoadingIndicator size={100}/>
      </View>
    </Layout>
  );
};
export default LoadingAnimationScreen;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
});
