import React from "react";
import Pokemon from "./Pokemon";
import Details from "./Details";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home=() => {
    // fazendo uso dos hooks
    const [loading,setLoading] = useState(true);
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

    const [pokemonDate,setpokemonDate] = useState([]);
    const [pokemonDetails,setpokemonDetails] = useState();
    
    const [nextUrl,setNextUrl] = useState();
    const [prevUrl,setPrevUrl] = useState();

    // chamando a função de instancia dos dados 
    useEffect(()=>{
        pokeFun();
    },[url]);

    const pokeFun = async() =>{
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }

    const getPokemon = async(res) =>{
       res.map( async(item) =>{
          const result = await axios.get(item.url)
          setpokemonDate(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }

    return(
        <>
            <div className="container grid grid-cols-2">
                <div className="text-center">
                    
                    <Pokemon 
                        pokemon={pokemonDate} 
                        loading={loading} 
                        getInfo={poke=>setpokemonDetails(poke)}
                    />
                    
                    <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            setpokemonDate([])
                           setUrl(prevUrl) 
                        }}>Anterior</button>}

                        { nextUrl && <button onClick={()=>{
                            setpokemonDate([])
                            setUrl(nextUrl)
                        }}>Próximo</button>}

                    </div>
                </div>

                <div className="m-5 container">
                   <Details data={pokemonDetails}/>
                </div>
            </div>
        </>
    )
}
export default Home;