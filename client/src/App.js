import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// import memories from './images/memories.png';

const App = () => {
    return (
        <Container maxidth={"lg"}>
            <AppBar position={"static"} color={"inherit"}>
                <Typography variant={"h2"} align={"center"}>
                    Time tracking
                </Typography>
            </AppBar>
        </Container>
    );
}

export default App;
