import { Pressable, StyleSheet, Text } from 'react-native';

export default function GreetingButton({ onPress, label }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#60a5fa',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#0b1220',
    fontSize: 16,
    fontWeight: '700',
  },
});
