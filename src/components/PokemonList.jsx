import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { PokemonCard } from './PokemonCard.jsx';
import { Loader } from './Loader';

export const PokemonList = () => {
	const { allPokemons, loading } =
		useContext(PokemonContext);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='card-list-pokemon container'>
							{allPokemons.map(pokemon => (
								<PokemonCard pokemon={pokemon} key={pokemon.id} />
							))}
				</div>
			)}
		</>
	);
};
