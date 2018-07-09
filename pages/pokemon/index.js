import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../../utils/store';
import Layout from '../../components/Layout';
import Pokemon from '../../components/PokemonDetail';


class Index extends React.Component {

  render() {
    return (
      <Pokemon/>
    );
  }
}
const mapStateToProps = ({ pokemons }) => ({
  pokemons
});

export default withRedux(initStore, mapStateToProps)(Index);