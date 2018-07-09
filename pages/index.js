import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../utils/store';
import Layout from '../components/Layout';
import Pokemons from '../components/Pokemons';


class Index extends React.Component {

  render() {
    return (
      <Layout>
      <Pokemons/>
      </Layout>
    );
  }
}
const mapStateToProps = ({ pokemons }) => ({
  pokemons
});

export default withRedux(initStore, mapStateToProps)(Index);
