import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { MainLayout, CatalogLayout } from "../layouts/index";
import {PokemonMainCard} from "../components/index";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='pokemons' element={<CatalogLayout />}>
					<Route path=':id/*' element={<PokemonMainCard />} />
				</Route>
				<Route index element={<HomePage />} />
			</Route>

			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};
