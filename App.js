import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import GreetingButton from './components/GreetingButton';
import TaskList from './components/task/TaskList';

export default function App() {
  const [greeting, setGreeting] = useState('');
  const userName = 'Bob Jones';
  const avatarUri =
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80';

  const toggleGreeting = () => {
    setGreeting((current) =>
      current ? '' : 'Hello! Welcome to React Native'
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header title="User Profile" />
      <Profile name={userName} avatarUri={avatarUri} />
      <GreetingButton
        onPress={toggleGreeting}
        label="Toggle Greeting"
      />
      <Text style={styles.greeting}>{greeting}</Text>
      <TaskList></TaskList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
    color: '#e2e8f0',
    textAlign: 'center',
  },
});
