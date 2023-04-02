import React, { Fragment, useState } from 'react'
// import {HiSearch} from 'react-icons/hi'
import {HiSearchCircle} from 'react-icons/hi'
import {TbMovie} from 'react-icons/tb'
import { Routes, Route, } from 'react-router-dom'
import Movies from './Movies'
import '../Styles/NavbarStyle.css'

export const Container = React.createContext()

function Navbar() {
  const [toggle,] = useState(true)
  const [inputValue, setInputValue] = useState('')
  return (
    <Container.Provider value={{toggle, inputValue}} >
    <Fragment >
    <nav className={toggle ? '' : 'navBarColor'} >
      <div className='nav-options'>
      <TbMovie fontSize={29} color="#dc143c" id='logo'/>
      
        <h1>PremiereHD</h1>
        
      </div>
      <div className="input-group">
      <input type="text" placeholder='Search Movie'onChange={(e) => setInputValue (e.target.value)} /> 
      <HiSearchCircle fontSize={26} color="#dc143c" id='search'/>
      </div>
    </nav>
    <Routes>
      <Route path='' element={<Movies />} />
    </Routes>
    </Fragment>
    </Container.Provider>
  )
}

export default Navbar