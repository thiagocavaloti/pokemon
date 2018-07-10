import React from 'react';
import Head from 'next/head';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from 'material-ui/CircularProgress';
import NProgress from 'nprogress';
import Router from 'next/router';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions/pokemons/fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

  render() {

    const { pokemons, fetching } = this.props.pokemons;
    console.log('Layout props', this.props);
    return (
      <MuiThemeProvider>
        <div>
          <Head>
            <title>{'Pokemons'}</title>
            <link rel="stylesheet" href="/static/css/nprogress.css" />
          </Head>
          {this.props.children}
        </div>
        </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ pokemons }) => {
  return {
    pokemons
  }
};

export default connect(mapStateToProps, {})(Layout);