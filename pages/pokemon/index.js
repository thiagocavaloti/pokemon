import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../../utils/store';
import Layout from '../../components/Layout';
import Pokemon from '../../components/PokemonDetail';
import { Divider } from 'material-ui';


class Index extends React.Component {

  render() {
    return (
      <div>
        <Layout>
          <Pokemon/>
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = ({ pokemons }) => ({
  pokemons
});

export default withRedux(initStore, mapStateToProps)(Index);