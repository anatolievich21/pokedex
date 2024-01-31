import {useEffect, useState} from 'react';
import {useForm} from '../hook/useForm';
import {PokemonContext} from './PokemonContext';

export const PokemonProvider = ({ children }) => {
	const [allPokemons, setAllPokemons] = useState([]);
	const [globalPokemons, setGlobalPokemons] = useState([]);
	const [offset, setOffset] = useState(0);

	const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: '',
	});

	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState(false);

	
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

	const getPokemonByID = async id => {
		const existingPokemon = allPokemons.find(p => p.id === id);

		if (existingPokemon) {
    			return existingPokemon;
 		} else {
			const baseURL = 'https://pokeapi.co/api/v2/';
			const res = await fetch(`${baseURL}pokemon/${id}`);
			return await res.json();
		}
	};

	useEffect(() => {
		getAllPokemons(12);
	}, []);

	const onClickLoadMore = () => {
		setOffset(offset + 12);
		getAllPokemons();
	};

	const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	});

	const [filteredPokemons, setfilteredPokemons] = useState([]);

	const handleCheckbox = e => {
		setTypeSelected({
			...typeSelected,
			[e.target.name]: e.target.checked,
		});

		if (e.target.checked) {
			const filteredResults = globalPokemons.filter(pokemon =>
				pokemon.types
					.map(type => type.type.name)
					.includes(e.target.name)
			);
			setfilteredPokemons([...filteredPokemons, ...filteredResults]);
		} else {
			const filteredResults = filteredPokemons.filter(
				pokemon =>
					!pokemon.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setfilteredPokemons([...filteredResults]);
		}
	};

	return (
		<PokemonContext.Provider
			value={{
				valueSearch,
				onInputChange,
				onResetForm,
				allPokemons,
				getPokemonByID,
				onClickLoadMore,
				loading,
				setLoading,
				handleCheckbox,
				filteredPokemons,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};
