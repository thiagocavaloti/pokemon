import {
    POKEMONS_FETCHING,
    POKEMONS_FETCHED
} from '../../actions';

const INITIAL_STATE = {
  fetching: false,
  pokemons: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case POKEMONS_FETCHING:
    return {...state, pokemons: [], fetching: true };
  case POKEMONS_FETCHED:
    return {...state, pokemons: action.payload, fetching: false };
  default:
    return state;
  }
}
