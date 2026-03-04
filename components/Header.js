import { StyleSheet, Text, View } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#e2e8f0',
    letterSpacing: 0.5,
  },
});
