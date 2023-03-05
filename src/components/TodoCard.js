import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './TodoCard.style';

const ProductCard = ({list, setList, counter, setCounter}) => {
  function decreaseCounter() {
    list.isActive = false;
    setCounter(counter - 1);
  }

  return list.isActive ? (
    <TouchableOpacity style={styles.activeContainer} onPress={decreaseCounter}>
      <Text>{list.item}</Text>
    </TouchableOpacity>
  ) : (
    <View style={styles.passiveContainer}>
      <Text style={styles.passiveText}>{list.item}</Text>
    </View>
  );
};

export default ProductCard;
