import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const GetOne = () => {
    const [game, setGame] = useState({})
    const { id: _id } = useParams();
    const options = {
        params: { id: _id },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
        }
    }
    useEffect(() => {
        axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`, options)
            .then((response) => {
                setGame(response.data)
                console.log(response.data)
            })

            .catch((error) => {
                console.log(error)
            })
    })
    return (
        <section className="bg-white pt-16">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center">
                    <img className="object-fit object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={game.thumbnail} alt="" />

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">


                        <h1 className="text-2xl font-semibold text-gray-500 dark:text-black xl:text-4xl lg:w-96">
                            Description
                        </h1>

                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                            {game.description}
                        </p>
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-black xl:text-4xl lg:w-96 pt-3">
                            Minimum Requirements
                        </h1>
                        {
                            game && game.minimum_system_requirements ? (
                                <>
                                    <p className="max-w-lg mt-6 text-black dark:text-gray-400 ">
                                        Graphics: {game.minimum_system_requirements.graphics}
                                    </p>
                                    <p className="max-w-lg mt-6 text-black dark:text-gray-400 ">
                                        Processor: {game.minimum_system_requirements.processor}
                                    </p>
                                    <p className="max-w-lg mt-6 text-black dark:text-gray-400 ">
                                        Memory: {game.minimum_system_requirements.memory}
                                    </p>
                                    <p className="max-w-lg mt-6 text-black dark:text-gray-400 ">
                                        Os {game.minimum_system_requirements.os}
                                    </p>
                                    <p className="max-w-lg mt-6 text-black dark:text-gray-400 ">
                                        Storage:{game.minimum_system_requirements.storage}
                                    </p>
                                </>
                            ) : " "

                        }


                        <h3 className="mt-6 text-lg font-medium text-blue-500">Genre: {game.genre}</h3>
                        <p className="text-gray-600 dark:text-gray-300">Publisher: {game.publisher}</p>

                        <div className="flex items-center justify-between mt-12 lg:justify-start">
                            <a href={`${game.game_url}`} target="_blank" rel="noreferrer">
                                <button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-4 px-6 border border-black500 hover:border-transparent rounded">
                                    Play Game
                                </button>
                            </a>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetOne