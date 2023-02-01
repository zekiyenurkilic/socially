import { StyleSheet, Text } from 'react-native';

const StyledText = ({ fontWeight, fontSize, text, style, color }) => {
  return (
    <Text
      style={{
        fontFamily: fontWeight,
        color,
        fontSize: fontSize,
        ...style,
        ...styles.textStyle,
      }}>
      {text}
    </Text>
  );
};

export default StyledText;

const styles = StyleSheet.create({
  textStyle: {},
});
