import {StyleSheet} from 'react-native';
import {Heading} from 'native-base';

function LogoTitle() {
  return <Heading style={styles.logo}>Prodigy IoT</Heading>;
}

const styles = StyleSheet.create({
  logo: {
    fontFamily: 'AstroSpace',
    fontSize: 24,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textShadowColor: '#1a1a1a',
  },
});

export default LogoTitle;
