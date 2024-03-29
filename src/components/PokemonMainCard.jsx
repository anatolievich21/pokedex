import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './index.js';
import { PokemonContext } from '../context/PokemonContext.jsx';
import { firstUppercaseLetter } from '../helper/helper.js';

export const PokemonMainCard = () => {
	const { allPokemons, loading } = useContext(PokemonContext);

	const { id } = useParams();
	const pokemon = allPokemons.find(p => p.id === +id);

	if (!pokemon) {
		return null
	}

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

							<div>
								{pokemon.stats.map((stat, index) => (
									<div key={index} className='stat-group'>
										<span>{firstUppercaseLetter(stat.stat.name)}</span>
										<span className='counter-stat'>{stat.base_stat}</span>
									</div>
								))}
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
