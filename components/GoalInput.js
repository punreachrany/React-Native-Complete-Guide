import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }



  return (
    <Modal visible={props.isVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: "80%",
    marginBottom: 10,
  },
});

export default GoalInput;
