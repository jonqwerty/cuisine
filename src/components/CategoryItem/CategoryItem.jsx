import React from "react"
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native"

const CategoryItem = ({ category, handleCategory }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleCategory(category)}>
      <Text style={styles.text}>{category.strCategory}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `${category.strCategoryThumb}`,
        }}
      />
      <Text>{category.strCategoryDescription}</Text>
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
    minHeight: 250,
  },
})

export default CategoryItem
