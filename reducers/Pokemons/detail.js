import {
    POKEMON_FETCHING,
    POKEMON_FETCHED
} from '../../actions';

const INITIAL_STATE = {
  fetching: true,
  pokemon: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case POKEMON_FETCHING:
    return {...state, pokemon: [], fetching: true };
  case POKEMON_FETCHED:
    return {...state, pokemon: action.payload, fetching: false };
  default:
    return state;
  }
}
