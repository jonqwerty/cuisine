import axios from "axios"
// import { options } from "../api/api"

const SET_CATEGORIES = "SET_CATEGORIES"
const SET_CATEGORY = "SET_CATEGORY"
const SET_NAME_OF_CATEGORY = "SET_NAME_OF_CATEGORY"
const SET_MEAL = "SET_MEAL"
const SET_FAVOURITES = "SET_FAVOURITES"

const initialState = {
  categories: [],
  category: [],
  nameOfCategory: null,
  meal: [],
  favourites: [],
}
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return { ...state, categories: action.payload }
    }
    case SET_CATEGORY: {
      return { ...state, category: action.payload }
    }
    case SET_NAME_OF_CATEGORY: {
      return { ...state, nameOfCategory: action.payload }
    }
    case SET_MEAL: {
      return { ...state, meal: action.payload }
    }
    case SET_FAVOURITES: {
      return { ...state, favourites: action.payload }
    }

    default:
      return state
  }
}

export const setCategories = (payload) => ({
  type: SET_CATEGORIES,
  payload,
})
export const setCategory = (payload) => ({
  type: SET_CATEGORY,
  payload,
})
export const setNameOfCategory = (payload) => ({
  type: SET_NAME_OF_CATEGORY,
  payload,
})
export const setMeal = (payload) => ({
  type: SET_MEAL,
  payload,
})
export const setFavourites = (payload) => ({
  type: SET_FAVOURITES,
  payload,
})

export const requestCategories = () => {
  return async (dispatch, getState) => {
    let res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    dispatch(setCategories(res.data.categories))
  }
}
export const requestCategory = (category) => {
  return async (dispatch, getState) => {
    let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    dispatch(setCategory(res.data.meals))
    dispatch(setNameOfCategory(category))
  }
}
export const requestMeal = (mealId) => {
  return async (dispatch, getState) => {
    let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    dispatch(setMeal(res.data.meals))
  }
}

export default mainReducer
