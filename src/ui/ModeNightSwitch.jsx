import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import React from 'react'
import { useStore, useStoreDispatch } from '../store/store';

export const ModeNightSwitch = () => {
  const { ui } = useStore()
  const {night} = ui 
  const {setNight} = useStoreDispatch()
  const handleClick = () =>{
    setNight(!night)
  }
  return (
    <IconButton aria-label="mode-switch" onClick={handleClick}>
        {night ? <DarkModeIcon/> : <LightModeIcon/>}
      </IconButton>
  )
}
