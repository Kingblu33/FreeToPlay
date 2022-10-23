import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiFillHeart } from 'react-icons/ai'

const ShowCategory = () => {
    const [games, setGames] = useState([])
    const [category1, setCategory1] = useState('mmorpg')
    const [isActive, setIsActive] = useState(false);
    //Storage for Api key
    const options = {
        params: { category: category1, 'sort-by': 'popularity' },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
        }
    }

    const handleClick = () => {
        setIsActive(current => !current);
        console.log(isActive)
    };

    const handleSelect = (e) => {
        e.preventDefault();
        setCategory1(e.target.value.trim().toLowerCase())
    }
    useEffect(() => {
        axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, options)
            .then((response) => {
                let data = response.data
                let slicedData = data.slice(0, 60)
                setGames(slicedData)
            })

            .catch((error) => {
                console.log(error)
            })
    }, [category1])

    return (
        <div className='pt-20'>
            <section className="bg-white py-8 pt-20">

                <div className="container mx-auto flex items-center flex-wrap pt-0 pb-12">

                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/showone">
                                All Games
                            </a>

                            <div className="flex items-center" id="store-nav-ShowCategory">
                                {/* ******************Drop Down Menu******************** */}
                                <div className="pl-3 inline-block no-underline hover:text-black">
                                    <div className="relative w-full lg:max-w-sm">
                                        <select onChange={handleSelect} className="w-full p-2.5 text-gray-500 bg-white border rounded-md border-black shadow-sm outline-none appearance-none focus:border-black-600">
                                            <option>MMORPG</option>
                                            <option>Shooter</option>
                                            <option>Anime</option>
                                            <option>Battle Royale</option>
                                            <option>Strategy</option>
                                            <option>Fantasy</option>
                                            <option>Racing</option>
                                            <option>Fighting</option>
                                            <option>sports</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {

                        games.map((games, idx) => (
                            <div key={idx} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                                <a href={`/showone/${games.id}`}>
                                    <img className="hover:grow hover:shadow-lg" src={games.thumbnail} alt="game thubmnail" />
                                </a>
                                <div className="pt-3 flex items-center justify-between">
                                    <p className="">{games.title}</p>
                                    <AiFillHeart className={isActive ? "h-6 w-6 fill-gray text-red-500 hover:text-grey-500" : "h-6 w-6 fill-gray text-gray-500 hover:text-red-500"} onClick={handleClick} />
                                </div>
                                <p className="pt-1 text-gray-900">Free</p>

                            </div>
                        ))}

                </div>

            </section>
        </div>
    )
}

export default ShowCategory