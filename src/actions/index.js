import fetch from 'cross-fetch';

export const JOKE_FAVORITED = 'JOKE_FAVORITED';
export const JOKE_UNFAVORITED = 'JOKE_UNFAVORITED';
export const REQUEST_CATEGORIES_ASYNC = 'REQUEST_CATEGORIES_ASYNC';
export const RECEIVE_CATEGORIES_ASYNC = 'RECEIVE_CATEGORIES_ASYNC';
export const REQUEST_JOKE_ASYNC = 'REQUEST_JOKE_ASYNC';
export const REQUEST_RANDOM_JOKE_ASYNC = 'REQUEST_RANDOM_JOKE_ASYNC';
export const RECEIVE_RANDOM_JOKE_ASYNC = 'RECEIVE_RANDOM_JOKE_ASYNC';
export const REQUEST_JOKE_FAILED = 'REQUEST_JOKE_FAILED';
export const RECEIVE_JOKE_ASYNC = 'RECEIVE_JOKE_ASYNC';
export const RECEIVED_ZERO_JOKE_ASYNC = 'RECEIVED_ZERO_JOKE_ASYNC';
export const SHARE_JOKE = "SHARE_JOKE";
export const SHARE_ANCHOR = "SHARE_ANCHOR";
export const MOBILE_TOOGLE = "MOBILE_TOOGLE";
export const DIALOG_OPEN = "DIALOG_OPEN";
export const DIALOG_CLOSE = "DIALOG_CLOSE";
export const DIALOG_TOOGLE = "DIALOG_TOOGLE";
export const SEARCH_TEXT_CHANGE = "SEARCH_TEXT_CHANGE";
export const SNACKBAR_TOOGLE = "SNACKBAR_TOOGLE";

/**FAVOURITES ACTION CREATORS**/
export const addToFavorites = state => ({ type: JOKE_FAVORITED, payload: state });

export const removeFromFavorites = state => ({ type: JOKE_UNFAVORITED, payload: state });


/**CATEGORIES ACTION CREATORS*/

export const requestCategories = () => ({ type: REQUEST_CATEGORIES_ASYNC });

export const receiveCategories = (data) => ({ type: RECEIVE_CATEGORIES_ASYNC, payload: data });

/**
 * FETCH CATEGORIES
 * @returns DISPATCH
 */
export const fetchCategories = () => {
  return dispatch => {
    dispatch(requestCategories())
    return fetch(`https://api.chucknorris.io/jokes/categories`)
      .then(response => response.json(), error => console.log('A fatal error occurred.', error))
      .then(data => dispatch(receiveCategories(data)))
  }
}

/**JOKE SEARCH ACTION CREATORS*/

export const requestJokes = () => ({ type: REQUEST_JOKE_ASYNC });

export const receiveJoke = (json) => ({ type: RECEIVE_JOKE_ASYNC, payload: json });

export const receivedZero = () => ({ type: RECEIVED_ZERO_JOKE_ASYNC });

/**
 * FREE TEXT JOKE SEARCH
 * @param {string} text 
 * @returns {function} DISPATCH
 */
export const fetchJokes = (text) => {
  return dispatch => {
    dispatch(requestJokes())
    return fetch(`https://api.chucknorris.io/jokes/search?query=${text}`)
      .then(response => response.json(), error => console.log('A fatal error occurred.', error))
      .then(
      data => {
        if (data.result.length > 0) {
          return dispatch(receiveJoke(data.result))
        }
        else {
          return dispatch(receivedZero());
        }
      }
      )
  }
}

/**RANDOM CATEGORY JOKE ACTION CREATORS*/

export const requestRandomJoke = (category) => ({ type: REQUEST_RANDOM_JOKE_ASYNC, payload: category });

export const receiveRandomJoke = (json) => ({ type: RECEIVE_RANDOM_JOKE_ASYNC, payload: json });

/**
 * FETCH RANDOM JOKE FROM A GIVEN CATEGORY
 * @param {string} category JOKE CATEGORY
 * @returns {function}
 */
export const fetchRandomJoke = (category) => {
  return dispatch => {
    dispatch(requestRandomJoke(category))
    return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(response => response.json(), error => {
        console.log('A fatal error occurred.', + error);
        dispatch(receiveJokeFailed());
      })
      .then(data => dispatch(receiveRandomJoke(data)))
  }
}

/**
 * FETCH RANDOM JOKE FROM A GIVEN CATEGORY
 * @param {string} category JOKE CATEGORY
 * @returns {function}
 */
export const fetchJokeByCategory = (category) => {
  return (dispatch) => {
    return dispatch(fetchRandomJoke(category));
  }
}

export const receiveJokeFailed = () => ({ type: REQUEST_JOKE_FAILED });

export const shareJoke = (joke) => ({
  type: SHARE_JOKE, payload: joke
});

export const shareAnchor = (anchorEl) => ({
  type: SHARE_ANCHOR, payload: anchorEl
});

export const dialogToogle = () => ({ type: DIALOG_TOOGLE });

export const mobileToogle = () => ({ type: MOBILE_TOOGLE });

export const searchTextOnChange = (text) => ({ type: SEARCH_TEXT_CHANGE, payload: text });

export const snackBarToogle = () => ({ type: SNACKBAR_TOOGLE });

