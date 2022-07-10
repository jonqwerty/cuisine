import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"
import { requestMeal } from "../../redux/mainReducer"

const MealItem = ({ meal }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const handleMeal = (item) => {
    dispatch(requestMeal(item.idMeal))
    navigation.navigate("MealScreen", item)
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleMeal(meal)}>
      <Text style={styles.text}>{meal.strMeal}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `${meal.strMealThumb}`,
        }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,

    width: 350,
  },

  text: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
  },

  image: {
    borderRadius: 10,
    resizeMode: "cover",
    width: 330,
    height: 250,
  },
})

export default MealItem
