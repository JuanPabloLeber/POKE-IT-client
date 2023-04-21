import { useState } from 'react'

import { Box } from '@mui/system'

import LoginCard from '../../components/LoginCard/LoginCard'
import SignupCard from '../../components/SignupCard/SignupCard'

import loginBackground from '../../assets/backgrounds/login.jpg'
import signupBackground from '../../assets/backgrounds/signup.jpg'

import { Typography } from '@mui/material'

function Auth() {
  const [isLogin, setIsLogin] = useState(true)

  function toggleLoginSignup() {
    setIsLogin((oldState) => !oldState)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: `url(${isLogin ? loginBackground : signupBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        overflow: 'hidden'
      }}
    >
      <Typography variant="h1" color="white">
        POKE IT
      </Typography>
      {isLogin ? (
        <LoginCard changeToSignup={toggleLoginSignup} />
      ) : (
        <SignupCard changeToLogin={toggleLoginSignup} />
      )}
    </Box>
  )
}

export default Auth
