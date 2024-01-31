import {useEffect, useState} from 'react';
import {PokemonContext} from './PokemonContext';

export const PokemonProvider = ({ children }) => {
	const [allPokemons, setAllPokemons] = useState([]);
	const [offset, setOffset] = useState(0);
	const [loading, setLoading] = useState(true);

	const getAllPokemons = async (limit = 12) => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(
			`${baseURL}pokemon?limit=${limit}&offset=${offset}`
		);
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const existingPokemon = allPokemons.find(p => p.id === pokemon.id);

			if (existingPokemon) {
				return existingPokemon;
			} else {
				const res = await fetch(pokemon.url);
				return await res.json();
			}
		});
		const results = await Promise.all(promises);

		if (offset === 0) {
			setAllPokemons(results);
		} else {
			setAllPokemons([...allPokemons, ...results]);
		}

		setLoading(false);
	};

	useEffect(() => {
			console.log(offset + 12, "useEffect");
			getAllPokemons();
	}, [offset]);

	const onClickLoadMore = () => {
		setOffset((prevOffset) => prevOffset + 12);
	};

	return (
		<PokemonContext.Provider
			value={{
				allPokemons,
				onClickLoadMore,
				loading,
				setLoading,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};
