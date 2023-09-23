import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import InputAmount from "./InputAmount";
import SelectCountry from "./SelectCountry";
import SwitchCurrency from "./SwitchCurrency";
import { CurrencyContext } from "../context/CurrencyContext";
import axios from "axios";

const CurrencyConverter = () => {

    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
    } = useContext(CurrencyContext)

    const [resultCurrency, setResultCurrency] = useState(0);
    const codeFromCurrency = fromCurrency.split(" ")[1]
    const codeToCurrency = toCurrency.split(" ")[1]

    console.log(resultCurrency)
    console.log(codeFromCurrency)

    useEffect(() => {
        if(firstAmount) {
            axios("https://api.freecurrencyapi.com/v1/latest", {
                params: {
                    apikey: process.env.REACT_APP_API_KEY,
                    base_currency: codeFromCurrency,
                    currencies: codeToCurrency
                }
            })
                .then(response => setResultCurrency(response.data.data[codeToCurrency]))
                .catch(error => console.log(error))
        }
    }, [firstAmount, fromCurrency, toCurrency, codeFromCurrency, codeToCurrency])

    const boxStyles = {
        background: "white",
        marginTop: "10rem",
        maxWidth:"90%",
        textAlign: "center",
        color: "#222",
        minHeight: "20rem",
        borderRadius: 2,
        padding: "4rem 2rem",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        position: "relative"
    }

    return (
        <Box flex={5} p={2}>
            <Container
                sx={boxStyles}
            >
                <Typography variant="h5" sx={{ marginBottom: "2rem" }}>Currency Converter</Typography>

                <Grid container gap={2}>
                    <InputAmount />
                    <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From"/>
                    <SwitchCurrency />
                    <SelectCountry value={toCurrency} setValue={setToCurrency} label="To"/>
                </Grid>

                { firstAmount ? (
                    <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
                        <Typography>{firstAmount} {fromCurrency} =</Typography>
                        <Typography variant="h6" sx={{marginTop: "5px", fontWeight: "bold"}}>{resultCurrency * firstAmount} {toCurrency}</Typography>
                    </Box>
                ): ""}
            </Container>
        </Box>
    )
}

export default CurrencyConverter
