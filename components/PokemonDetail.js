import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from 'material-ui/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';
import { fetchPokemonDetail } from '../actions/pokemons/fetchDetail';
import Link from 'next/link';

const styles = {
  card: {
    minWidth: 345,
    float: 'left'
  },
  img: {
    display: 'block',
    margin: '0 auto'
  },
  progress:{
    float: 'left'
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  }
};


class Pokemon extends React.Component {

  constructor(props){
    super(props);
    this.showPokemon = this.showPokemon.bind(this);
  }

  componentDidMount(){
   this.props.fetchPokemonDetail();
  }

  getLoader(){
    return(
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress size={80}/>
      </div>
    )
  }


  showPokemon(props) {

    const {pokemon, fetching} = this.props.pokemon;
    if (fetching) {
      return this.getLoader();  
    }
  
    console.log('pokemon detail', pokemon);

    return (
      <div>
        
        <Card style={styles.card} raised={true}>
        <img alt={pokemon.name} title={pokemon.name}  src={pokemon.sprites.front_default} style={styles.img}/>
          <CardContent>
            <Typography gutterBottom variant="display1" color="primary" >
              {pokemon.name}
            </Typography>
        
            <Typography gutterBottom variant="headline"  color="default">
            weight: {pokemon.weight}
            </Typography>

            <Typography variant="headline"  color="default">
            height: {pokemon.height}
            </Typography>
            <br/>
            <Typography gutterBottom variant="headline"  color="default">
            type:
            </Typography>
            {pokemon.types.map( index => {
              return (
                <Chip
                  label={index.type.name}
                />
              )
            })}
            <br/><br/>
            <Typography gutterBottom variant="headline"  color="default">
            abilities:
            </Typography>
            {pokemon.abilities.map( index => {
              return (
                <Chip
                  label={index.ability.name}
                />
              )
            })}
            <br/><br/>
            <Typography gutterBottom variant="headline"  color="default">
            stats:
            </Typography>
            {pokemon.stats.map( index => {
              return (
                <div>   
                  <Typography gutterBottom variant="subheading"   color="default">
                  {index.stat.name}
                  </Typography>
                  <LinearProgress variant="determinate" value={index.base_stat} />
                  <br/></div>
              )
            })}
          </CardContent>
          <CardActions>
          <Link href="/"> 
            <Button variant="contained" size="small" color="primary" fullWidth={true}>
              Back
            </Button>

          </Link>  
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
