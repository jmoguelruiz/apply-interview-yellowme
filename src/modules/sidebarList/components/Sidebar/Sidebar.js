import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { Loading } from 'common-ui'
import PokemonList from '../PokemonList'
import TopBar from '../TopBar'

const Sidebar = ({ pokemons, isFetching, redirectToPokemon, activePokemonId}) => (
    <div className={styles.container}>
        <TopBar />
        {
            isFetching
                ? <Loading />
                : <PokemonList 
                    pokemons={pokemons} 
                    redirectToPokemon={redirectToPokemon}
                    activePokemonId = {activePokemonId}
                />
        }
    </div>
)

const styles = {
    container: css({
        width: "100%",
        backgroundColor: "#565252",
        height: "100vh",
        overflowY: "scroll",
        position: 'relative'
    })
};

Sidebar.propTypes = {
    /** List of pokemons */
    pokemons: PropTypes.array.isRequired,

    /** Flag to indicate fetching data */
    isFetching: PropTypes.bool.isRequired,

    /** Function to redirect page */
    redirectToPokemon : PropTypes.func,

    /** Active pokemon id */
    activePokemonId : PropTypes.number
}

export default Sidebar;

