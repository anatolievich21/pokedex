import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { firstUppercaseLetter } from '../helper/helper';

export const PokemonPage = () => {
	const { getPokemonByID } = useContext(PokemonContext);

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

	const { id } = useParams();

	const fetchPokemon = async id => {
		const data = await getPokemonByID(id);
		setPokemon(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchPokemon(id);
	}, [id]);

	return (
		<main className='container main-pokemon'>
			{loading ? (
				<Loader />
			) : (
				<>

					<div className='container-img-pokemon'>
						<img
							src={pokemon.sprites.other.dream_world.front_default}
							alt={`Pokemon ${pokemon?.name}`}
						/>
					</div>

					<div className='container-info-pokemon'>
						<h1>{firstUppercaseLetter(pokemon.name)}</h1>
						<span className='number-pokemon'>#{pokemon.id.toString().padStart(3, '0')}</span>
					</div>


					<div className='container-stats'>

						<div className='stats'>
							<div className='stat-group'>
								<span>Type</span>
								<span className='counter-stat'>
									{pokemon.types.map(type => (
										<p key={type.type.name} >
										{firstUppercaseLetter(type.type.name)}
									</p>))}
										</span>

							</div>
							<div className='stat-group'>
								<span>Attack</span>
								<span className='counter-stat'>
									{pokemon.stats[1].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Defense</span>
								<span className='counter-stat'>
									{pokemon.stats[2].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>HP</span>
								<span className='counter-stat'>
									{pokemon.stats[0].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Attack</span>
								<span className='counter-stat'>
									{pokemon.stats[3].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Defense</span>
								<span className='counter-stat'>
									{pokemon.stats[4].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Speed</span>
								<span className='counter-stat'>
									{pokemon.stats[5].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Weight</span>
								<span className='counter-stat'>
									{pokemon.weight}
								</span>
							</div>
							<div className='stat-group'>
								<span>Total moves</span>
								<span className='counter-stat'>
									{pokemon.moves.length}
								</span>
							</div>
						</div>
					</div>

				</>
			)}
		</main>
	);
};
