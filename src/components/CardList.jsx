import React from 'react'
import Card from './Card'

export default function CardList({robots}) {
   

    return (
        <div>
            {robots.map(eachR => {
                return <Card 
                key={eachR.id}
                robot={eachR}
                />
            })}
        </div>
    )
}
