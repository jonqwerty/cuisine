import * as React from "react"
import { Button, View } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import { createStackNavigator } from "@react-navigation/stack"
import AllCategoriesScreen from "../screens/AllCategoriesScreen/AllCategoriesScreen"
import FavouriteMealsScreen from "../screens/FavouriteMealsScreen/FavouriteMealsScreen"
import CategoryScreen from "../screens/CategoryScreen/CategoryScreen"
import "react-native-gesture-handler"
import { useSelector } from "react-redux"
import MealScreen from "../screens/MealScreen/MealScreen"

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

{
  /* Add Drawer.Navigation to a function.*/
}
function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="All Categories" component={AllCategoriesScreen} />
      <Drawer.Screen name="Favourites" component={FavouriteMealsScreen} />
    </Drawer.Navigator>
  )
}

export default function AppNavigation() {
  const category = useSelector((state) => state.main.nameOfCategory)
  const meal = useSelector((state) => state.main.meal)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen
          options={{
            title: `Meals for ${category} category`,
          }}
          name="CategoryScreen"
          component={CategoryScreen}
        />
        <Stack.Screen
          options={{
            title: `About the Meal`,
          }}
          name="MealScreen"
          component={MealScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
