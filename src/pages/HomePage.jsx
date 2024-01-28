import { Link } from "react-router-dom";
import pokeballIcon from '../assets/pokeball-icon.png';

export const HomePage = () => {

	return (
		<div className='container-catalog-link'>
			<Link to='/pokemons' className='catalog-link'>
				<img src={pokeballIcon} alt="Pokeball" />
				<span>Open me</span>
			</Link>
		</div>
	);
};
