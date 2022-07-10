import React from "react"
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Icon from "react-native-vector-icons/AntDesign"
import { requestMeal, setFavourites } from "../../redux/mainReducer"
import { useNavigation } from "@react-navigation/native"

const FavouriteMealsScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const favourites = useSelector((state) => state.main.favourites)

  const handleMeal = (item) => {
    dispatch(requestMeal(item.idMeal))
    navigation.navigate("MealScreen", item)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.flex}>
        {favourites.map((meal) => (
          <TouchableOpacity
            key={meal.idMeal}
            style={styles.wrapper}
            onPress={() => handleMeal(meal)}
          >
            <View style={styles.circle}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(setFavourites(favourites.filter((item) => item.idMeal !== meal.idMeal)))
                }}
              >
                <Icon name="hearto" size={30} color="#900" />
              </TouchableOpacity>
            </View>

            <Image
              style={styles.image}
              source={{
                uri: `${meal?.strMealThumb}`,
              }}
            />

            <Text style={styles.name}>{meal?.strMeal}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "brown",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: 350,
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
    width: 330,
    height: 300,
    // resizeMode: "contain",
  },
})

export default FavouriteMealsScreen
