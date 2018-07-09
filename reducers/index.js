import { combineReducers } from 'redux';
import pokemons from './Pokemons';
import pokemon from './Pokemons/detail';

export default combineReducers({
  pokemons,
  pokemon
});