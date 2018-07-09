import React from 'react';
import Head from 'next/head';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from 'material-ui/CircularProgress';
import NProgress from 'nprogress';
import Router from 'next/router';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions/pokemons/fetch';
//import {indigo500, indigo700, redA200} from 'material-ui/styles/colors';
import {getUrlParams} from '../utils';
import Pokemons from '../components/Pokemons';

import Paper from 'material-ui/Paper';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = () => {
  NProgress.done();
  window.scrollTo(0,0);
}
Router.onRouteChangeError = () => NProgress.done();


if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }


  getLoader(){
    return(
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress style={{marginRight: 10}}/>
        <p>Loading...</p>
      </div>
    )
  }

  render() {

    return (
        <div>
          <Head>
            <title>{ this.props.title || 'Pokemons' }</title>
            <link rel="stylesheet" href="/static/css/nprogress.css" />
          </Head>
          <Pokemons/>
        </div>
    )
  }
}

const mapStateToProps = ({ pokemons }) => {
  return {
    pokemons
  }
};

export default connect(mapStateToProps, {fetchPokemons})(Layout);