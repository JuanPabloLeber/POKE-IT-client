import { useState, useEffect } from 'react'

import './Home.css'

import { Box, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

import { getResources } from '../../services/pokeApiResources'

import ResourceCard from '../../components/ResourceCard/ResourceCard'

import { Link } from 'react-router-dom'

import ability from '../../assets/homeCardImages/abilities.png'
import pokemon from '../../assets/homeCardImages/Pokemons.png'
import type from '../../assets/homeCardImages/types.webp'
import pokedex from '../../assets/homeCardImages/pokedex.png'
import berry from '../../assets/homeCardImages/berries.png'
import pokeAPI from '../../services/pokeApiConfig'

function Home() {
  const [elements, setElements] = useState([
    'pokemon',
    'type',
    'pokedex',
    'ability',
    'berry'
  ])

  const [images, setImages] = useState({
    ability,
    pokemon,
    type,
    pokedex,
    berry
  })

  const [resources, setResources] = useState([])

  useEffect(() => {
    async function refreshResources() {
      const pokeApiResponse = await getResources()
      setResources(pokeApiResponse.data)
    }
    refreshResources()
  }, [])

  function getCards() {
    const cards = []
    for (const resource in resources) {
      if (elements.includes(resource)) {
        cards.push(
          <Link to={`/resource/${resource}`}>
            <ResourceCard
              key={resource}
              title={resource}
              image={images[resource]}
            ></ResourceCard>
          </Link>
        )
      }
    }
    return cards
  }

  return (
    <Box className="home-container">
      <Box
        className="home-content"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography
          variant="h1"
          textAlign="center"
          color={blue[700]}
          sx={(theme) => ({
            marginTop: '40px',
            textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
            [theme.breakpoints.down('sm')]: {
              fontSize: '3.5rem'
            }
          })}
        >
          Welcome to
        </Typography>
        <Typography
          variant="h1"
          fontWeight="bold"
          color={blue[900]}
          sx={(theme) => ({
            marginTop: '40px',
            textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
            [theme.breakpoints.down('sm')]: {
              fontSize: '3.5rem'
            }
          })}
        >
          POKE IT
        </Typography>
        <Typography
          variant="h2"
          sx={(theme) => ({
            alignSelf: 'flex-start',
            marginTop: '100px',
            padding: '20px',
            [theme.breakpoints.down('sm')]: {
              fontSize: '1.7rem',
              fontWeight: 'bold',
              marginTop: '50px',
              padding: '10px'
            }
          })}
        >
          Select a resource to see its content:
        </Typography>
        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            gap: '30px',
            flexWrap: 'wrap',
            marginTop: '40px',
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '10px',
            [theme.breakpoints.down('sm')]: {
              padding: '15px',
              marginTop: '20px'
            }
          })}
        >
          {getCards()}
        </Box>
      </Box>
    </Box>
  )
}

export default Home
