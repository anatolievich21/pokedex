import { Link } from 'react-router-dom';

export const Header = () => {

	return (
		<>
			<header className='container'>
				<Link to='/' className='logo'>
					<img
						src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
						alt='Logo Pokedex'
					/>
				</Link>
			</header>

		</>
	);
};
