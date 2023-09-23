import { SwapHoriz } from '@mui/icons-material'
import { Button, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

const SwitchCurrency = () => {
  
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency
} = useContext(CurrencyContext)

  const handleSwitch = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <Grid item xs={12} md="auto">
      <Button onClick={handleSwitch} sx={{
        borderRadius: 1,
        height: "100%"
      }}>
        <SwapHoriz sx={{fontSize: 30}}/>
      </Button>
    </Grid>
  )
}

export default SwitchCurrency