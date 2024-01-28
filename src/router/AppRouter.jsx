import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, PokemonPage } from '../pages/index.js';
import { MainLayout, CatalogLayout } from "../layouts/index.js";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='pokemons' element={<CatalogLayout />}>
					<Route path=':id/*' element={<PokemonPage />} />
				</Route>
				<Route index element={<HomePage />} />
			</Route>

			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};
