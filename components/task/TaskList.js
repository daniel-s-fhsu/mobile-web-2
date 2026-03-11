import React, { useState } from 'react';
import { Text, ScrollView, StyleSheet, Image, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import taskData from '../../data/taskData';
import Card from '../shared/Card';

const TaskList = () => {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState(() =>
    taskData.map((task) => ({ ...task, completed: false }))
  );

  const goToDetails = (task) => {
    navigation.navigate('Details', { task });
  };

  const toggleTaskCompleted = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      {tasks.map((task) => (
        <Card key={task.id} style={task.completed ? styles.cardCompleted : null}>
          <Image source={{ uri: task.image }} style={styles.image} />
          <Text style={[styles.title, task.completed ? styles.textCompleted : null]}>
            {task.title}
          </Text>
          <Text
            style={[styles.description, task.completed ? styles.textCompleted : null]}
          >
            {task.description}
          </Text>
          <View style={styles.actionRow}>
            <Pressable
              style={styles.detailsButton}
              onPress={() => goToDetails(task)}
            >
              <Text style={styles.detailsButtonText}>View Details</Text>
            </Pressable>
            <Pressable
              style={[
                styles.completeButton,
                task.completed ? styles.undoButton : null,
              ]}
              onPress={() => toggleTaskCompleted(task.id)}
            >
              <Text style={styles.completeButtonText}>
                {task.completed ? 'Undo' : 'Mark Complete'}
              </Text>
            </Pressable>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 6,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 14,
  },
  actionRow: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 10,
  },
  detailsButton: {
    flex: 1,
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#1e3a8a',
    fontWeight: '600',
    fontSize: 14,
  },
  completeButton: {
    flex: 1,
    backgroundColor: '#22c55e',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  undoButton: {
    backgroundColor: '#94a3b8',
  },
  completeButtonText: {
    color: '#f8fafc',
    fontWeight: '700',
    fontSize: 14,
  },
  cardCompleted: {
    backgroundColor: '#ecfdf3',
    borderColor: '#86efac',
  },
  textCompleted: {
    color: '#64748b',
    textDecorationLine: 'line-through',
  },
});
 
export default TaskList;
