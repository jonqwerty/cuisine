import axios from "axios"
import React, { useEffect } from "react"
import { FlatList, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import CategoryItem from "../../components/CategoryItem/CategoryItem"
import { requestCategories, requestCategory, setCategory } from "../../redux/mainReducer"

const AllCategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.main.categories)

  const handleCategory = (item) => {
    dispatch(requestCategory(item.strCategory))
    navigation.navigate("CategoryScreen", item)
  }

 

  useEffect(() => {
    dispatch(requestCategories())
  }, [])

  return (
    <View style={{ backgroundColor: "brown" }}>
      <FlatList
        contentContainerStyle={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        data={categories}
        keyExtractor={(item) => item.idCategory}
        renderItem={({ item }) => (
          <CategoryItem category={item} handleCategory={handleCategory}  />
        )}
      />
    </View>
  )
}

export default AllCategoriesScreen
