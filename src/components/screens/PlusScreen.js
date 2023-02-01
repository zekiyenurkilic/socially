import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import StyledText from '../StyledText';

const PlusScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <StyledText
        text={'Plus Screen'}
        fontSize={30}
        fontWeight="700"
        color={COLORS.white}
      />
    </View>
  );
};

export default PlusScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.black,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
