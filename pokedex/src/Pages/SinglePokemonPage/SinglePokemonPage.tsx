import React from 'react'
import { RouteComponentProps} from 'react-router-dom'

type TParams = {
    pokemonName: string;
}


export const SinglePokemonPage = ({match} : RouteComponentProps<TParams>) => {
        return (
            <>
                <h1>Single Pokemon Page Here</h1>
                <h4>Pokemon name: {match.params.pokemonName})</h4>
            </>
        );
}