import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Footer } from "../components/Footer";

export default function Lab2({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Image
            style={styles.notif}
            source={require("../assets/header-icons/notif.png")}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "First",
      completed: true,
    },
    {
      id: 2,
      task: "Second",
      completed: false,
    },
  ]);

  const [textInput, setTextInput] = useState();
  useEffect(() => {
    getTodo();
  }, []);

  const addTodo = () => {
    if (textInput == "") {
      Alert.alert("Error", "Please input todo");
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTextInput("");
    }
  };

  useEffect(() => {
    saveTodo(todos);
  }, [todos]);

  const deleteTodo = (todoId) => {
    const newTodo = todos.filter(
      (item) => item.id != todoId
    );
    setTodos(newTodo);
  };

  const saveTodo = async () => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem("todos", stringifyTodos);
    } catch (e) {
      console.log(e);
    }
  };

  const getTodo = async () => {
    try {
      const todos = await AsyncStorage.getItem("todos");
      if (todos != null) {
        setTodos(JSON.parse(todos));
      }
    } catch (e) {
      console.log(error);
    }
  };
  const setStatus = (todoId) => {
    var newTodo = todos.map((element) => {
      if (element.id == todoId) {
        element = {
          id: element.id,
          task: element.task,
          completed: true,
        };
        console.log("success");
      }
      return element;
    });
    setTodos(newTodo);
  };

  const ListItem = ({ todo }) => {
    return (
      <View style={styles.listenItem}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "#1f145c",
              textDecorationLine: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            {todo.task}
          </Text>
        </View>

        {!todo?.completed && (
          <TouchableOpacity
            style={[styles.actionIcon]}
            onPress={() => setStatus(todo.id)}
          >
            <Icon name="check" size={20} color={"#fff"} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[
            styles.actionIcon,
            { backgroundColor: "red" },
          ]}
          onPress={() => deleteTodo(todo?.id)}
        >
          <Icon name="trash-o" size={20} color={"#fff"} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 20,
            paddingBottom: 100,
          }}
          data={todos}
          renderItem={({ item }) => (
            <ListItem todo={item} />
          )}
        />

        <View style={styles.inpadd}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Новая тудушка"
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
            />
          </View>
          <TouchableOpacity onPress={addTodo}>
            <View style={styles.iconContainer}>
              <Icon name="plus" color={"#fff"} size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Footer navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
    marginTop: 8,
  },
  inpadd: {
    position: "absolute",
    bottom: 0,
    color: "#fff",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 3,
  },
  inputContainer: {
    backgroundColor: "#fff",
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: "#055c05",
    borderRadius: 25,
    elevation: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  listenItem: {
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  footer: {
    height: 64,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  notif: {
    width: 24,
    height: 24,
    marginRight: 21,
    resizeMode: "contain",
  },
});
