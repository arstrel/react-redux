import React, {useState, useEffect} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import { setSearchInput, requestRobots} from '../action'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        // searchInput: state.searchRobots.searchInput
        searchInput: state.searchRobots.searchInput,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        onSearchChange: (event) => {
            dispatch(setSearchInput(event.target.value))},
            
        //same as dispatch(requestRobots())
        onRequestRobots: () => dispatch(requestRobots())
    }
}

 function Main(props) {
    const { searchInput, onSearchChange, onRequestRobots, robots, isPending } = props;
 

    
    useEffect(()=> {
        onRequestRobots()
    },[])

    const filterRobots = () => {
        return robots.filter(eachR => {
            return eachR.name.toLowerCase().includes(searchInput.toLowerCase())
        })
    }

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchInput={searchInput} onSearchChange={onSearchChange} />
            {isPending 
            ?   <h1 className="f2">Loading...</h1>
            :   <Scroll> 
                    <ErrorBoundry>
                        <CardList robots={filterRobots()}/>
                    </ErrorBoundry>
                </Scroll>}
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);