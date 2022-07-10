import React from "react"
import { View, FlatList, Text } from "react-native"
import { useSelector } from "react-redux"
import MealItem from "../../components/MealItem/MealItem"

const CategoryScreen = () => {
  const categoryMeals = useSelector((state) => state.main.category)
  return (
    <View style={{ backgroundColor: "brown" }}>
      <FlatList
        contentContainerStyle={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        data={categoryMeals}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <MealItem meal={item} />}
      />
    </View>
  )
}

export default CategoryScreen
