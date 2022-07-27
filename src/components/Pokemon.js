import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';



const Pokemon = ({pokemon, loading, getInfo}) => {
  return (
    <>
    <div className='App grid grid-cols-3'>
    {
        loading ? <h1>Baixando lista de pokemons...</h1> :
        pokemon.map( (e) => {
           
            return(
                <div className="">
                    <Card sx={{ maxWidth: 400 }} className="m-2">
                        <Typography gutterBottom variant="h5" component="div">
                                <span className='text-orange-400'>{e.id}</span>
                            </Typography>
                        <CardMedia
                            component="img"
                            height="200"
                            image={e.sprites.front_default}
                            alt={e.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <span className='text-orange-700 font-bold'>{e.name}</span>
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small">Compartilhar</Button>
                            <Button size="small" onClick={ ()=>getInfo(e) }>Informações</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        
        })
    }
    </div>
    </>
  )
}

export default Pokemon