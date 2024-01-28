import {PokemonList, LoadMoreButton, ScrollToTopButton} from "../components/index.js";
import {Outlet} from "react-router-dom";

export const CatalogLayout = () => {
    return <div className='container-content'>
        <div className='left-section'>
            <PokemonList />
            <LoadMoreButton />
        </div>
        <div className='right-section'>
            <Outlet />
        </div>
        <ScrollToTopButton />
    </div>
}