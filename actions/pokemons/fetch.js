import fetch from 'isomorphic-unfetch';
import { POKEMONS_FETCHING, POKEMONS_FETCHED } from '../../actions';

export function fetchPokemons(url = 'https://pokeapi.co/api/v2/pokemon/') {

  return async dispatch => {
    dispatch({ type: POKEMONS_FETCHING});
    const response = await fetch(url);
    const json = await response.json();

    if(json.results){
      dispatch({ type: POKEMONS_FETCHED, payload: json });
    }
    else{
      dispatch({ type: POKEMONS_FETCHED, payload: response});
    }

  };
}