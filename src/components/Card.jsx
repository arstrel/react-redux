import React from 'react'

export default function Card({ robot }) {
const {id, name, email, username} = robot

    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/test${id}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}
