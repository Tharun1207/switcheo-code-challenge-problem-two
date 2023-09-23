import { CurrencyBitcoin } from "@mui/icons-material";
import { AppBar, Avatar, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "purple"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "50%"
})) 

const Icons = styled(Box)(({ theme }) => ({
    // Display nothing in small screen
    display: "none",
    gap: "20px",
    alignItems: "center",
    // Displays only when screen is sm dimensions or above, hence the use of "up"
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    // Only displays in small screen
    display: "flex",
    gap: "10px",
    alignItems: "center",
    // Displays nothing when screen is sm dimensions or above
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return(
        <AppBar position="sticky">
            <StyledToolbar>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open = {open}
                    onClose={(e) => setOpen(false)}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>

                <CurrencyBitcoin sx={{display: {xs: "flex", sm:"none"}}}/>

                <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>Welcome, Tharun</Typography>

                <Search>
                    <InputBase placeholder="Search tokens..."/>
                </Search>

                {/* PC Version View */}
                <Icons>
                    <Avatar 
                        sx={{width: 30, height: 30}} 
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        onClick = {e => setOpen(true)}
                    />
                </Icons>

                {/* Mobile version view */}
                <UserBox onClick = {e => setOpen(true)}>
                    <Avatar 
                        sx={{width: 30, height: 30}} 
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                    <Typography variant="span">Tharun</Typography>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    ) 
}

export default Navbar