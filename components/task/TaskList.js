import React from 'react';
import { Text, ScrollView, StyleSheet, Image } from 'react-native'
import taskData from '../../data/taskData';
import Card from '../shared/Card';

const TaskList = () => {
    return (
        <ScrollView style={styles.container}>
            {taskData.map(task => (
                <Card key={task.id}>
                    <Image source={{ uri: task.image }} style={styles.image} />
                    <Text style={styles.title}>{task.title}</Text>
                    <Text style={styles.description}>{task.description}</Text>
                </Card>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});
 
export default TaskList;
