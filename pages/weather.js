import React, { useState, useEffect } from 'react'

const weather = () => {
    const [query, setQuery] = useState()
    const [hyderabad, sethyderabad] = useState()
    const [london, setlondon] = useState()
    const [nyc, setnyc] = useState()
    const [weather, setWeather] = useState()


    const fetchWeather = async (query) => {
        // return{
        //     "location": {
        //         "name": "New York",
        //         "region": "New York",
        //         "country": "United States of America",
        //         "lat": 40.71,
        //         "lon": -74.01,
        //         "tz_id": "America/New_York",
        //         "localtime_epoch": 1685097876,
        //         "localtime": "2023-05-26 6:44"
        //     },
        //     "current": {
        //         "last_updated_epoch": 1685097000,
        //         "last_updated": "2023-05-26 06:30",
        //         "temp_c": 11.7,
        //         "temp_f": 53.1,
        //         "is_day": 1,
        //         "condition": {
        //             "text": "Sunny",
        //             "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
        //             "code": 1000
        //         },
        //         "wind_mph": 3.8,
        //         "wind_kph": 6.1,
        //         "wind_degree": 20,
        //         "wind_dir": "NNE",
        //         "pressure_mb": 1025,
        //         "pressure_in": 30.27,
        //         "precip_mm": 0,
        //         "precip_in": 0,
        //         "humidity": 56,
        //         "cloud": 0,
        //         "feelslike_c": 10.3,
        //         "feelslike_f": 50.5,
        //         "vis_km": 16,
        //         "vis_miles": 9,
        //         "uv": 4,
        //         "gust_mph": 11.4,
        //         "gust_kph": 18.4
        //     }
        // }
        let weather = await fetch("http://api.weatherapi.com/v1/current.json?key=f934f9b39b1e4356bf082448232505&q=" + query)
        let response = await weather.json()
    
        console.log(response)
        return response
    }
    useEffect(() => {
        async function fetchData() {
            let hyderabad = await fetchWeather("Hyderabad")
            sethyderabad(hyderabad)
            let london = await fetchWeather("london")
            setlondon(london)
            let nyc = await fetchWeather("New York")
            setnyc(nyc)

        }
        fetchData();

    }, [])
    const handleChange = (e) => {
        setQuery(e.target.value)
if (e.target.length <= 0){
            setWeather(undefined)
        }
        
    }


    const handleClick = async (e) => {
        console.log(query)
        let w = await fetchWeather(query)
        setWeather(w)
    }
    return (
        <div className="container flex flex-wrap px-0 py-0 mx-auto items-center">
            {/* <i className="fa fa-search" aria-hidden="true"></i> */}
            <section className="text-gray-600 body-font">
                <div className="container px-3 py-12 mx-auto">
                    <div className="flex flex-col">
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-24 h-full bg-indigo-500"></div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-0">
                            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Weather-App</h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Search For a Location and we will fetch the weather   </p>
                            <input value={query} onChange={handleChange} className="w-full border rounded-xl mx-1 border-indigo-800 py-1 m-3" type="text" name="search" id="search"></input>
                            <button onClick={handleClick} className="flex mx-3 fa fa-se text-white bg-indigo-700 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-0">Search</button>
                        </div>
                        {(weather && query.length > 0) && <div className=' p-2 mb-2 flex mx-0 m-0 fa fa-se'>   The  Weather of  {query} is {weather && weather.current.temp_c} &#8451;  and windspeed is {weather.current.wind_mph} mph </div>}
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/09/15144355/Untitled-design-2-4-1600x900.jpg?tr=w-1920" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Hyderabad ({hyderabad && hyderabad.current.temp_c} &#8451; )</h2>
                            <div className="text-base leading-relaxed mt-2"> {hyderabad && <div> the weather in hyderabad is {hyderabad.current.temp_c} and the wind is {hyderabad.current.wind_mph} mph </div>} </div>
                            <p className="text-base leading-relaxed mt-2"> Hyderabad is the capital city of the Indian state of Telangana and is also known for its rich history, architecture, and cuisine.
                                Hyderabad is often referred to as the "City of Pearls" due to its historical association with the pearl trade. </p>
                            <a href="https://en.wikipedia.org/wiki/Hyderabad" className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg?w=2000&t=st=1685040012~exp=1685040612~hmac=ce0dd37936a0583a5a8a77f3ded5ad97064249f984055f5d4888096288918891" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">New York ({nyc && nyc.current.temp_c} &#8451; )</h2>
                            <div className="text-base leading-relaxed mt-2"> {nyc && <div> the weather in nyc is {nyc.current.temp_c} and the wind is {nyc.current.wind_mph} mph </div>} </div>
                            <p className="text-base leading-relaxed mt-2">New York City, often referred to as NYC, is the most populous city in the United States and a global center for finance, culture, and entertainment.
                                The city is made up of five boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. </p>
                            <a href="https://en.wikipedia.org/wiki/New_York_City" className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src=" https://secretldn.com/wp-content/uploads/2022/01/shutterstock_533946907-2-1024x683.jpg" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">London ({london && london.current.temp_c} &#8451; )</h2>
                            <div className="text-base leading-relaxed mt-2"> {london && <div> the weather in London is {london.current.temp_c} and the wind is {london.current.wind_mph} mph </div>} </div>
                            <p className="text-base leading-relaxed mt-2"> London is the capital city of both England and the United Kingdom. It is known for its rich history, iconic landmarks, and cultural diversity.
                                The city is home to numerous famous landmarks, including the Tower of London, Buckingham Palace, Big Ben, the British Museum, and the London Eye. </p>
                            <a href="https://en.wikipedia.org/wiki/London" className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default weather