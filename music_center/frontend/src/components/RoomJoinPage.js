import React, {Component} from 'react';
import {
    TextField,
    Button, 
    Grid,
    Typography,

} from "@material-ui/core";
import { Link } from "react-router-dom";


export default class RoomJoinPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            roomCode: "",
            error: ""
        };

        this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
    }

    render() {
        return(
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h4">
                        Join a Room
                    </Typography>
                </Grid>
                <Grid item xs={12}  align="center">
                    <TextField 
                        error={this.state.error}
                        label="code"
                        placeholder="Enter a Room Code"
                        value={this.state.roomCode}
                        helperText = {this.state.error}
                        variant="outlined"
                        onChange={this._handleTextFieldChange}
                    />
                </Grid>
                <Grid item xs={12}  align="center">
                <Button 
                        variant="contained"
                        color="primary"
                        onClick
                    >
                        Enter Room
                    </Button>
                </Grid>
                <Grid item xs={12}  align="center">
                <Button 
                        variant="contained"
                        color="secondary"
                        to="/"
                        component={Link}
                    >
                        Back
                    </Button>                    
                </Grid>
            </Grid>
        );
    }

    _handleTextFieldChange(e){
        this.setState({
            room: e.target.value
        });
    }
}


