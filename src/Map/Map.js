import React from "react";
import {useDispatch} from "react-redux";
import KeplerGl from "@kepler.gl/components";
import {addDataToMap} from "@kepler.gl/actions";
import useSwr from "swr"
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import {configPoints} from "../ConfigMaps/ConfigMaps";

const MAPBOX_TOKEN = "pk.eyJ1Ijoicm9ydCIsImEiOiJjbHM0MmI5NDEwNHBxMnBucno4b2N3NjVxIn0.SERm613fkXbX-sjncK3g8A";




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
                }, config: configPoints

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