import { combineReducers } from 'redux'

import {
  JOKE_FAVORITED,
  JOKE_UNFAVORITED,
  REQUEST_CATEGORIES_ASYNC,
  RECEIVE_CATEGORIES_ASYNC,
  REQUEST_JOKE_ASYNC,
  REQUEST_JOKE_FAILED,
  RECEIVE_JOKE_ASYNC,
  RECEIVED_ZERO_JOKE_ASYNC,
  RECEIVE_RANDOM_JOKE_ASYNC,
  REQUEST_RANDOM_JOKE_ASYNC,
  SHARE_JOKE,
  SHARE_ANCHOR,
  MOBILE_TOOGLE,
  DIALOG_TOOGLE,
  SEARCH_TEXT_CHANGE,
  SNACKBAR_TOOGLE
} from '../actions'


/**
 * Returns the Favourites State {state.favourites}*
 * @param {Array} [favourites]
 * @param {const} action
 * @returns
 */
const jokesByFavouried = (state = [], action) => {
  switch (action.type) {
    case JOKE_FAVORITED:
      return [...state, action.payload]
    case JOKE_UNFAVORITED:
      return state.filter((joke) => joke.id !== action.payload)
    default:
      return state
  }
}

/**
 *Returns Categories State {state.categories}*
 * @param {*} [state={isFetching: initialState.isFetching, categories: initialState.categories }]
 * @param {*} action
 * @returns
 */
const jokeCategories = (state = { isCategoriesFetching: false, categories: [] }, action) => {
  console.log(action.type);
  switch (action.type) {
    case REQUEST_CATEGORIES_ASYNC:
      return {
        ...state,
        isCategoriesFetching: true,
      }
    case RECEIVE_CATEGORIES_ASYNC:
      return {
        ...state,
        isCategoriesFetching: false,
        categories: action.payload
      }
    default:
      return state
  }
}
/**
 *Returns a piece of Jokes State {state.searchResult}*
 * @param {*} [state={isFetching: initislState.isFetching, searchResult: initialState.searchResult, selectedCategory: initialState.selectedCategory}]
 * @param {*} action
 * @returns
 */
const jokeRequests = (state = { isFetching: false, isRandomFetching: false, searchResult: [], selectedCategory: null, dialogJoke: null, searchText: undefined, searchResultIsEmpty: false }, action) => {
  switch (action.type) {
    case REQUEST_JOKE_ASYNC:
      return {
        ...state,
        isFetching: true,
        searchResultIsEmpty: false,
        searchResult: [],
      }
    case RECEIVE_JOKE_ASYNC:
      return {
        ...state,
        isFetching: false,
        searchResultIsEmpty: false,
        searchResult: action.payload
      }
    case RECEIVED_ZERO_JOKE_ASYNC:
      return {
        ...state,
        searchResultIsEmpty: true,
        iFetching: false,
        searchResult: [],
      }
    case REQUEST_RANDOM_JOKE_ASYNC:
      return {
        ...state,
        isRandomFetching: true,
        selectedCategory: action.payload
      }
    case RECEIVE_RANDOM_JOKE_ASYNC:
      return {
        ...state,
        isRandomFetching: false,
        dialogJoke: action.payload
      }

    case REQUEST_JOKE_FAILED:
      return {
        ...state,
        isFetching: false,
        isRandomFetching: false,
        searchResult: [],
      }
    case SEARCH_TEXT_CHANGE:
      return {
        ...state,
        isFetching: false,
        searchText: action.payload,
        searchResult: [],
        searchResultIsEmpty: false,
      }
    default:
      return state
  }
}

const jokeDialogToogle = (state = { dialogOpen: false }, action) => {
  switch (action.type) {
    case DIALOG_TOOGLE:
      return {
        ...state,
        dialogOpen: !state.dialogOpen
      }
    default:
      return state
  }
}

const alium = (state = { mobileOpen: false }, action) => {
  switch (action.type) {
    case MOBILE_TOOGLE:
      return {
        ...state,
        mobileOpen: !state.mobileOpen
      }
    default:
      return state
  }
}

const share = (state = { anchorEl: null, shareJoke: null}, action) => {
  switch (action.type) {
    case SHARE_JOKE:
      return {
        ...state,
        shareJoke: action.payload
      }
      case SHARE_ANCHOR:
      return {
         ...state,
        anchorEl: action.payload,
      }
    default:
      return state
  }
}

const appSnackBar = (state = { snackbarOpen: false }, action) => {
  switch (action.type) {
    case SNACKBAR_TOOGLE:
      return {
        ...state,
        snackbarOpen: !state.snackbarOpen
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  jokesByFavouried,
  jokeCategories,
  jokeRequests,
  jokeDialogToogle,
  alium,
  share,
  appSnackBar
})

export default rootReducer