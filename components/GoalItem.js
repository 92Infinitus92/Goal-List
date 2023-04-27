import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    marginRight: 8,
    paddingVertical: 8,
    paddingRight: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white',
    textAlign: 'center',
  },
});
