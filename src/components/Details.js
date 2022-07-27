import React from "react";

const Details = ({ data }) => {
   
    return (
        <>
        {
            (!data) ? "" : (
                <>
                    <h1 className="text-orange-800 font-bold text-xl">{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt={data.id} />
                    <div className="abilities w-28">
                        {
                            data.abilities.map((poke, index)=>{
                                return(
                                    <>
                                     <div className="">
                                        <span className="font-bold">habilidade: {index+1 }</span>
                                        <h2 className="text-red-800 font-bold">{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3 className="m-2 text-lime-700 font-bold">{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </div>
                </>
            )
        }

        </>
    )
}
export default Details