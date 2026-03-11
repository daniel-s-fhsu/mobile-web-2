import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function TaskDetailsScreen({ route }) {
  const task = route?.params?.task;

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Task not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: task.image }} style={styles.image} />
      <View style={[styles.statusPill, task.completed ? styles.donePill : styles.pendingPill]}>
        <Text style={styles.statusText}>
          {task.completed ? 'Completed' : 'Pending'}
        </Text>
      </View>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: 360,
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
  },
  statusPill: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  donePill: {
    backgroundColor: '#166534',
  },
  pendingPill: {
    backgroundColor: '#475569',
  },
  statusText: {
    color: '#f8fafc',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#dbeafe',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#bfdbfe',
    textAlign: 'center',
  },
});
