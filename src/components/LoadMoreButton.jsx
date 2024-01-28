import React, {useContext} from 'react';
import {PokemonContext} from '../context/PokemonContext';

export const LoadMoreButton = () => {
    const { onClickLoadMore } = useContext(PokemonContext);

    return <div className={"container-load-more-button"}>
        <button className={"load-more-button"} onClick={onClickLoadMore}>Load More</button>
    </div>
};
