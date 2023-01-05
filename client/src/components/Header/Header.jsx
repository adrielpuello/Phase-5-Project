import React, {useState} from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles';
import { useNavigate, NavLink } from 'react-router-dom'
import './Header.css'

const Header = ({ setCoordinates}) => {
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
        fetch('/logout', {
          method:"DELETE"
        })
        .then(res => {
          if(res.ok){
            sessionStorage.clear()
          }
        })
        navigate('/landingpage')
      }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <div className="dropdown">
                <button className="dropbtn">Adventure Awaits</button>
                    <div className="dropdown-content">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/bookmarks'>Bookmarks</NavLink>
                        <NavLink to='/trips'>Routes</NavLink>
                        <NavLink onClick={handleLogOut}>Log Out</NavLink>
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