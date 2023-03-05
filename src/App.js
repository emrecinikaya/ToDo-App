import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import TodoCard from './components/TodoCard';

function App() {
  const [counter, setCounter] = useState(0);

  const [list, setList] = useState([]);

  const [text, setText] = useState();

  function insertList() {
    setCounter(counter + 1);
    const newTodo = {
      item: text,
      isActive: true,
    };
    setList([newTodo, ...list]);
  }

  const renderList = ({item}) => (
    <TodoCard
      list={item}
      setList={setList}
      counter={counter}
      setCounter={setCounter}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>Yapılacaklar</Text>
        <Text style={styles.headerText}>{counter}</Text>
      </View>
      <FlatList data={list} renderItem={renderList} />
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => setText(text)}
          placeholder="Yapılacak..."
        />
        <TouchableOpacity onPress={insertList} style={styles.button}>
          <Text>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 40,
    color: '#d1af06',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  bottomContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    margin: 10,
    marginBottom: 40,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingTop: 15,
    paddingBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    margin: 20,
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#d1af06',
    borderRadius: 10,
  },
});

export default App;
