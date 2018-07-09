import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchPokemons } from '../actions/pokemons/fetch';
import CircularProgress from 'material-ui/CircularProgress';
import Link from 'next/link';

const styles = {
    anchor: {
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer'
    }
};

class Pokemons extends React.Component {

  constructor(props){
    super(props);
    this.showPokemons = this.showPokemons.bind(this);
  }

  componentDidMount(){
    const data = this.props.fetchPokemons();
  }

  getUrlId(url){
    console.log(/[^/]*$/.exec(url)[0]);

   return /[^/]*$/.exec(url.replace(/\/$/, ""))[0];

  }

  showPokemons() {

    const { pokemons, fetching } = this.props.pokemons;

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons.map( index => {
              return (
                <TableRow key={index.url}>
                  <Link href={`/pokemon/?id=${this.getUrlId(index.url)}`}> 
                  <TableCell style={styles.anchor} component="th" scope="row">
                    {index.name}
                  </TableCell>
                  </Link>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  render() {
    return ( 
      <div>
      {this.showPokemons()} 
      </div>
    ); 
  }

}


const mapStateToProps = ({  pokemons }) => ({
    pokemons
});

export default connect(mapStateToProps, {fetchPokemons})(Pokemons);
