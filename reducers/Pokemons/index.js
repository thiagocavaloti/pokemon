import {
    POKEMONS_FETCHING,
    POKEMONS_FETCHED
} from '../../actions';

const INITIAL_STATE = {
  fetching: true,
  pokemons: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case POKEMONS_FETCHING:
    return {...state, fetching: true };
  case POKEMONS_FETCHED:
    return {...state, pokemons: action.payload, fetching: false };
  default:
    return state;
  }
}
