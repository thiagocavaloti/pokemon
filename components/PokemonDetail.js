import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fetchPokemonDetail } from '../actions/pokemons/fetchDetail';

const styles = {
  card: {
    minWidth: 345,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


//export default withStyles(styles)(SimpleMediaCard);

class Pokemon extends React.Component {

  constructor(props){
    super(props);
    this.showPokemon = this.showPokemon.bind(this);
  }

  componentDidMount(){
    const data = this.props.fetchPokemonDetail();
  }

  toUpperCase(str){
    console.log(str);
    return str.toUpperCase();
  }


  showPokemon(props) {
    //const { classes } = props;
    const { pokemon, fetching } = this.props.pokemon;
    console.log( 'pokemon', pokemon);
    console.log(pokemon.sprites);

    return (
      <div>
        <Card >

          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {pokemon.name}
            </Typography>
            <Typography className="weight" color="textSecondary">
            peso: {pokemon.weight}
            </Typography>
            <Typography className="weight" color="textSecondary">
            altura: {pokemon.height}
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }

  render() {
    return ( 
      <div>
      {this.showPokemon()} 
      </div>
    ); 
  }

}

// Pokemon.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

const mapStateToProps = ({  pokemon }) => ({
    pokemon
});

//export default  withStyles(styles)(Pokemon);
 //export default connect(mapStateToProps, { fetchPokemonDetail })(withStyles(styles)(Pokemon));


export default connect(mapStateToProps, { fetchPokemonDetail })(Pokemon);
