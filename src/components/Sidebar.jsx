import { AccountBox, CurrencyExchange, Home, Settings } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";

const Sidebar = () => {
    return (
        <Box 
            flex={1} 
            p={2} 
            // This is called a breakpoint, to make it such that the sidebar is not displayed in mobile view
            // In xs mode (mobile view), sidebar is set to none. Else, set to block 
            sx={{ display: { xs: "none", sm: "block" }}}
        >
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <CurrencyExchange />
                        </ListItemIcon>
                        <ListItemText primary="Currencies" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <AccountBox />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar