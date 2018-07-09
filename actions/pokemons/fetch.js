import fetch from 'isomorphic-unfetch';
import { POKEMONS_FETCHING, POKEMONS_FETCHED } from '../../actions';

export function fetchPokemons() {

  return async dispatch => {
    dispatch({ type: POKEMONS_FETCHING});
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const json = await response.json();

    if(json.results){
      dispatch({ type: POKEMONS_FETCHED, payload: json.results });
    }
    else{
      dispatch({ type: POKEMONS_FETCHED, payload: response});
    }

  };
}