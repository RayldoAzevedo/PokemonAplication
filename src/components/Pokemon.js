import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';



const Pokemon = ({pokemon, loading}) => {
  return (
    <>
    <div className='App'>
    {
        loading ? <h1>Baixando lista de pokemons...</h1> :
        pokemon.map( (e) => {
           
            return(
                
                <Card sx={{ maxWidth: 345 }} className="m-2">
                    <Typography gutterBottom variant="h5" component="div">
                            <span className='text-orange-400'>{e.id}</span>
                        </Typography>
                    <CardMedia
                        component="img"
                        height="200"
                        image={e.sprites.front_default}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <span className='text-orange-700 font-bold'>{e.name}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        detalhes adicionais
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Compartilhar</Button>
                        <Button size="small">Informações</Button>
                    </CardActions>
                </Card>

            )
        
        })
    }
    </div>
    </>
  )
}

export default Pokemon