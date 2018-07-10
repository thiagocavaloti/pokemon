import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { fetchPokemons } from '../actions/pokemons/fetch';
import CircularProgress from 'material-ui/CircularProgress';
import Link from 'next/link';
import { Button } from '@material-ui/core';

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
      this.getLoader = this.getLoader.bind(this);
  }

  componentDidMount(){
    this.props.fetchPokemons();
  }

  getUrlId(url){
    return /[^/]*$/.exec(url.replace(/\/$/, ""))[0];
  }

  getLoader(){
    return(
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress size={80} />
      </div>
    )
  }

  showPokemons() {
    const {pokemons, fetching} = this.props.pokemons;
    if (fetching) {
      return this.getLoader();  
    }

    return (
      <Paper>
        {!pokemons.next}
        {!pokemons.previous}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pokemons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons.results.map( index => {
              return (
                <TableRow key={index.url}>
                  <Link href={`/pokemon/?id=${this.getUrlId(index.url)}`}> 
                    <TableCell style={styles.anchor} component="th" scope="row">
                      <Typography gutterBottom variant="headline" color="primary" >
                      {index.name}
                      </Typography>
                    </TableCell>
                  </Link>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Button 
          onClick={() => this.props.fetchPokemons(pokemons.previous)}
          disabled={!pokemons.previous}
          variant="outlined" 
          size="small" 
          color="primary"
        >
          Previous
        </Button>
        <Button 
          onClick={() => this.props.fetchPokemons(pokemons.next)}
          disabled={!pokemons.next}
          variant="contained" 
          size="small" 
          color="primary"
        >
          Next
        </Button>
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
