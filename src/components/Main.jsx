import React, {useState, useEffect} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'


export default function Main() {
    const [searchField, setSearchField] = useState('')
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
            return eachR.name.toLowerCase().includes(searchField.toLowerCase())
        })
    }

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchField={searchField} setSearchField={setSearchField} />
            {isLoading 
            ? <h1 className="f2">Loading...</h1>
            : <CardList robots={filterRobots()}/>}
        </div>
    )
}
