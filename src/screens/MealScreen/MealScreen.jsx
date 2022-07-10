import React from "react"
import { Text, View, StyleSheet, Image, ScrollView, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Icon from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from "react-native-gesture-handler"
import { setFavourites } from "../../redux/mainReducer"

const MealScreen = () => {
  const dispatch = useDispatch()
  const meal = useSelector((state) => state.main.meal)
  const favourites = useSelector((state) => state.main.favourites)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.circle}>
        <TouchableOpacity
          onPress={() => {
            const ids = favourites.map((item) => item.idMeal)

            if (ids && !ids.includes(meal[0]?.idMeal)) {
              dispatch(setFavourites([...favourites, meal[0]]))
            }
          }}
        >
          <Icon name="hearto" size={30} color="#900" />
        </TouchableOpacity>
      </View>

      <Image
        style={styles.image}
        source={{
          uri: `${meal[0]?.strMealThumb}`,
        }}
      />

      <Text style={styles.name}>{meal[0]?.strMeal}</Text>
      <Text style={styles.instructions}>Сooking instructions</Text>
      <Text style={styles.text}>{meal[0]?.strInstructions}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "brown",
  },

  name: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  circle: {
    position: "absolute",
    left: "85%",
    top: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    zIndex: 2,
  },
  instructions: {
    fontSize: 36,
    fontWeight: "400",
    textAlign: "center",
  },

  text: {
    fontSize: 14,
    fontWeight: "700",
    paddingHorizontal: 10,
  },

  image: {
    width: "100%",
    height: 300,
    // resizeMode: "contain",
  },
})

export default MealScreen
