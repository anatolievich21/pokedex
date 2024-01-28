import React from 'react';
import { Link } from 'react-router-dom';
import {firstUppercaseLetter} from "../helper/helper.js";

export const CardPokemon = ({ pokemon }) => {
	return (
		<Link to={`/pokemons/${pokemon.id}`} className='card-pokemon'>
			<div className='card-img'>
				<img
					src={pokemon.sprites.other.dream_world.front_default}
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>
			<div className='card-info'>
				<h3>{firstUppercaseLetter(pokemon.name)}</h3>
				<div className='card-types'>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{firstUppercaseLetter(type.type.name)}
						</span>
					))}
				</div>
			</div>
		</Link>
	);
};
