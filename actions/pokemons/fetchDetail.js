import fetch from 'isomorphic-unfetch';
import { POKEMON_FETCHING, POKEMON_FETCHED } from '../../actions';

export function fetchPokemonDetail() {

  return async dispatch => {
    dispatch({ type: POKEMON_FETCHING });
    const href     = window.location.href; //window.location.href
    const url      = new URL(href);
    const id       = url.searchParams.get("id");
    const apiUrl   = 'https://pokeapi.co/api/v2/pokemon/' + id;
    const response = await fetch(apiUrl);
    const json     = await response.json();

    console.log('json response === ', json);

    if(json){
      dispatch({ type: POKEMON_FETCHED, payload: json });
    }
    else{
      dispatch({ type: POKEMON_FETCHED, payload: [] });
    }


  };
}

