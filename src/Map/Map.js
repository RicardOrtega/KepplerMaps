import React from "react";
import keplerGlReducer from "@kepler.gl/reducers";
import {taskMiddleware} from "react-palm/tasks";
import {Provider,useDispatch} from "react-redux";
import KeplerGl from "@kepler.gl/components";
import {addDataToMap} from "@kepler.gl/actions";
import useSwr from "swr"
import {combineReducers} from "redux";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import {configPoints,configHeatMap} from "../ConfigMaps/ConfigMaps";

const MAPBOX_TOKEN = "pk.eyJ1Ijoicm9ydCIsImEiOiJjbHM0MmI5NDEwNHBxMnBucno4b2N3NjVxIn0.SERm613fkXbX-sjncK3g8A";


const sampleTripData = {
    fields: [
        {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
        {name: 'pickup_longitude', format: '', type: 'real'},
        {name: 'pickup_latitude', format: '', type: 'real'}
    ],
    rows: [
        ['2015-01-15 19:05:39 +00:00', -73.99389648, 40.75011063],
        ['2015-01-15 19:05:39 +00:00', -73.97642517, 40.73981094],
        ['2015-01-15 19:05:40 +00:00', -73.96870422, 40.75424576]
    ]

};

export default function Map(){

    const dispatch = useDispatch();
    const {data} = useSwr("dumy",async () => {
        const response  = await fetch (  "https://gist.githubusercontent.com/leighhalliday/a994915d8050e90d413515e97babd3b3/raw/a3eaaadcc784168e3845a98931780bd60afb362f/covid19.json");
    const data = await response.json();
    return data;

    });

    React.useEffect(()=>{
        if(data){
            dispatch(addDataToMap({datasets:{
                info:{
                    label:"dumy",
                    id: "test_trip_data"
                },
                    data
                },options:{
                centerMap:true,
                    readOnly:true,
                }, config: configHeatMap

            }))
        }


    }, [dispatch,data]);



    return (
    <AutoSizer>
        {({height, width}) => (
            <KeplerGl id = "Default" mapboxApiAccessToke = {MAPBOX_TOKEN} width={width} height={height}/>
        )}
    </AutoSizer>
    )
}