import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { Button } from 'react-native';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const addGoalHandler = (enteredGoalText) => {
    setGoals((currGoals) => [
      ...currGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((currGoals) => {
      return currGoals.filter((goal) => goal.id != goalId);
    });
  };
  return (
    <>
      <StatusBar style='inverted' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color={'#a065ec'}
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modalIsVisible}
            setCancel={endAddGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            alwaysBounceHorizontal={false}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    marginTop: 150,
    flex: 5,
  },
});
