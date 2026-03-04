import { Image, StyleSheet, Text, View } from 'react-native';

export default function Profile({ name, avatarUri }) {
  return (
    <View style={styles.profile}>
      <Image style={styles.avatar} source={{ uri: avatarUri }} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#38bdf8',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#f8fafc',
  },
});
