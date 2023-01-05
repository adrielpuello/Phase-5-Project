import React, { useState, useEffect } from "react"; 
import { Grid } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import Header from "../Header/Header";
import List from "../List/List";
import Map from "../Map/Map";

const Home = ({getPlacesData}) => {

    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
            setCoordinates({ lat: latitude, lng: longitude})
        })
    }, []);

    useEffect(() => {
        if(bounds.sw && bounds.ne) {

        setIsLoading(true);

        getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                setIsLoading(false);
                setFilteredPlaces([])
                setRating(0)
            })
        }
    }, [type, bounds]);

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating)

        setFilteredPlaces(filteredPlaces)
    }, [rating]);

    return (
        <>
        <CssBaseline />
        <Header setCoordinates={setCoordinates}/>
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        isLoading={isLoading}   
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>

    </>
    )
}

export default Home