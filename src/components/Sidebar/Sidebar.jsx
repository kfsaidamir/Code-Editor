import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Box borderRight={"1px solid gray.800"} w={"12%"} margin={"40px"} > 
      <Link to='/code-editor' >
      <span>Code editor</span>
      </Link>
    </Box>
  )
}

export default Sidebar
