import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Main.css"

const Main = ({children}) => {
  return (
    <Box>
      <Header/>
      <Sidebar/>
      <Box mt={10} className='main-element' >
        {children}
      </Box>
    </Box>
  )
}

export default Main
