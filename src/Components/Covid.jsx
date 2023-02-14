import React, { useEffect,useState } from 'react';
// import Nature from "./images/covid-cells.jpg";
// import Card from './Card';
// import {Grid} from '@mui/material';
import './Covid.css';
import RefreshIcon from '@mui/icons-material/Refresh';
import './Card.css';
// import { Grid } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import Covidimage from './images/covid-cells.jpg';

function Covid() {

    const [data, setData] = useState([]);
    function refreshPage() {
        window.location.reload(true);
      }
    const getCovidData = async () => {
        try {
            const res = await fetch('	https://data.covid19india.org/data.json');
            const actualData = await res.json();
            // console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            // console.log(err);
        }
    };

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
        <div className='covid-main'>
            <div className='c-container'>
            <div className='card_top'>
                    <span className='bottom-bar'>COVID-19 CASES TRACKER</span>
                    <RefreshIcon onClick={refreshPage} className="refresh"/> 
                </div>
                <div className='c-main'>
            <span className='data'> Active</span>
            <span className='data'> {data.active}</span>
            </div>
            <div className='c-main'>
            <span className='data'>Confirmed</span>
            <span className='data'>{data.confirmed}</span>
            </div>
            <div className='c-main'>
            <span className='data'>  Deaths</span>
            <span className='data'> {data.deaths}</span>
            </div>
            <div className='c-main'>
            <span className='data'>  Recovered</span>
            <span className='data'> {data.recovered}</span>
            </div>
            <div className='c-main'>
            <span className='data'>  Delta confirmed</span>
            <span className='data'> {data.deltaconfirmed}</span>
            </div>
            <div className='c-main'>
            <span className='data'>  Delta deaths</span>
            <span className='data'> {data.deltadeaths}</span>
            </div>
            <div className='c-main'>
            <span className='data'>  Delta recovered</span>
            <span className='data'> {data.deltarecovered}</span>
            </div>
            <div className='c-bottom'>
            <span className='data'> Last updated time</span>
            <span className='data'>{data.lastupdatedtime}</span>
            </div>
            
            </div>
        </div>


            

        </>
    );
}

export default Covid;