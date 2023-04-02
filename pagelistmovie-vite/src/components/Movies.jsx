import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {BsFillPlayBtnFill} from 'react-icons/bs';
import NoImg from './NoImage.png'
import { Container } from './Navbar';
import '../Styles/Videos.css'

function Movies() {
  
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const [movieData, setMoviesData] = useState([])
  const Show = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Show}/movie`
  const Images = 'https://image.tmdb.org/t/p/w500'

  const MovieCall = async () => {
    const data = await axios.get(Api,{
      params: {
        api_key: '229a6a0f891df5bf1176a4668af885c6',
        query: input
      }
    })
    const results = data.data.results
    setMoviesData(results)
    
  }
  useEffect(() => {
    MovieCall()
  }, [input])
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className="movies-container" >
      {movieData.map((movie) => {
        return (
        <Fragment>
          <div id='container' >
          <BsFillPlayBtnFill color='#dc143c' fontSize={25} id="playIcon"/>
          <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt=''  />
          <h3 id={movie.title.length > 25 ? 'smaller-Text' : ''} >{movie.title}</h3>
          </div>
        </Fragment>
        )
      })}
      </div>
      </div>
    </Fragment>
  )
}

export default Movies