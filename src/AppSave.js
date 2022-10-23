import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
    //State to store valus from api vall
    const [game, setGame] = useState({})
    //Storage for Api key
    const options = {
        headers: {
            params: { platform: 'browser', category: 'Shooter', 'sort-by': 'release-date' },
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
        }
    }

    useEffect(() => {
        axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`, options)
            .then((response) => {
                console.log(response.data)
                setGames(response.data)
            })

            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <>
            {games.map((game, idx) => (
                <div className='container'>
                    <h3>{game.title}</h3>
                    <img key={idx} src={game.thumbnail} />
                    <p>{game.short_description}</p>
                </div>

            ))}
        </>
    )
}

export default App
