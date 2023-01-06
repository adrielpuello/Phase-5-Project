import React, {useState} from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles';
import axios from "axios";
import { useNavigate, NavLink } from 'react-router-dom'
import './Header.css'

const Header = ({ setCoordinates, loggedIn, setLoggedIn }) => {
    const classes = useStyles()
    const [autocomplete, setAutocomplete] = useState(null)

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng })
    }

    const navigate = useNavigate()

    const handleLogOut = () => {
        setLoggedIn({...loggedIn, user: {}});
        setLoggedIn({...loggedIn, loggedInStatus: 'NOT_LOGGED_IN'});
        navigate('/');
      }
    
    const handleLogOutClick = () => {
        axios.delete("http://localhost:3000/logout", { withCredentials: true})
        .then(res => {
            handleLogOut();
        }).catch(errors => {
            console.log(errors)
        })
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <div className="dropdown">
                <button className="dropbtn">Adventure Awaits</button>
                    <div className="dropdown-content">
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/locations'>Your Locations</NavLink>
                        <NavLink to='/locations/new'>Add Locations</NavLink>
                        <NavLink onClick={handleLogOutClick}>Log Out</NavLink>
                    </div>
                </div>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}/>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;