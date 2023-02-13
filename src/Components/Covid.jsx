import React, { useEffect,useState } from 'react';
import Nature from "./images/covid-cells.jpg";
// import Card from './Card';
// import {Grid} from '@mui/material';
import './Covid.css';
import './Card.css';
// import { Grid } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import Covidimage from './images/covid-cells.jpg';

function Covid() {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('	https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <div className='container'>
                <div className='card_top'>
                    <span className='top-bar'>🔴LIVE</span>
                    <span className='bottom-bar'>COVID-19 TRACKER</span>
                </div>
                <div className='card_main' >
                {/* <img src={Nature} alt="bg" /> */}

                    <div className='card'>
                        <h2>Our</h2>
                        <h1>Covid-19 Data</h1>
                        <h1>India</h1>
                    </div>

                    <div className='card'>
                        <h2>Total</h2>
                        <h1>Active</h1>
                        <h1>{data.active}</h1>

                    </div>

                    <div className='card'>
                        <h1>Total</h1>
                        <h2>Confirmed</h2>
                        <h1>{data.confirmed}</h1>

                    </div>

                    <div className='card'>
                        <h2>Total</h2>
                        <h1>Deaths</h1>
                        <h1>{data.deaths}</h1>

                    </div>

                    <div className='card'>
                        <h2>Total </h2>
                        <h1>Recovered</h1>
                        <h1>{data.recovered}</h1>

                    </div>

                    <div className='card' >
                        <h2>Last Updated</h2>
                        <h1>{data.lastupdatedtime}</h1>
                        {/* <h1>India</h1> */}
                    </div>
                </div>

            </div>

        </>
    );
}

export default Covid;