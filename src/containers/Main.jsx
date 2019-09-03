import React, {useState, useEffect} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import { setSearchInput} from '../action'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        // searchInput: state.searchRobots.searchInput
        searchInput: state.searchInput
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        onSearchChange: (event) => {
            console.log(event)
            dispatch(setSearchInput(event.target.value))}
    }
}

 function Main(props) {
    const { searchInput, onSearchChange } = props;
    const [robots, setRobots] = useState([])
    const [isLoading, setLoading] = useState(true)

    
    const fetchData = () => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
            setRobots(res)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
        })
        
    }
    
    useEffect(()=> {
        fetchData()
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
            {isLoading 
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