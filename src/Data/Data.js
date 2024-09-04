import {processGeojson} from "@kepler.gl/processors"
import axios from "axios";

import {useState} from "react";


export const config = {
    version: 'v1', config: {
        visState: {
            layers: [{
                type: 'point', id: 'point_layer', config: {
                    dataId: 'PuntosBip',
                    label: 'Codigo',
                    color: [69, 138, 70],
                    columns: {lat: 'LATITUD', lng: 'LONGITUD', altitude: null},
                    isVisible: true,
                    highlightColor: [255, 0, 0, 255]
                }, visualChannels: {
                    sizeField: {name: 'Plan', type: 'integer'}
                }
            }, {
                id: 'heatmap_layer', type: 'heatmap', config: {
                    dataId: 'PuntosBip',
                    label: 'Codigo',
                    columns: {lat: 'LATITUD', lng: 'LONGITUD'},
                    isVisible: true,
                    visConfig: {
                        opacity: 0.8, colorRange: {
                            name: 'Global Warming',
                            type: 'sequential',
                            category: 'Uber',
                            colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300']
                        }, radius: 22
                    }
                }, visualChannels: {weightField: null, weightScale: 'linear'}
            }], interactionConfig: {
                tooltip: {
                    fieldsToShow: {tree_data: []}, compareMode: false, compareType: 'absolute', enabled: true
                }
            }
        }, mapState: {
            bearing: 0, dragRotate: false, latitude: -33.47971, longitude: -70.64659, pitch: 0, zoom: 12, isSplit: false
        }
    }
};


let dataTemp = [{
    "CODIGO": 92341,
    "ENTIDAD": "fullcarga",
    "DIRECCION": "santa fe #1",
    "COMUNA": "san miguel",
    "HORARIO": "07:00-20:00",
    "LONGITUD": -70.625,
    "LATITUD": -33.475,

}, {
    "CODIGO": 92342,
    "ENTIDAD": "fullcarga",
    "DIRECCION": "santa fe #2",
    "COMUNA": "san miguel",
    "HORARIO": "07:00-20:00",
    "LONGITUD": -70.680,
    "LATITUD": -33.515
}, {
    "CODIGO": 92341,
    "ENTIDAD": "fullcarga",
    "DIRECCION": "santa fe #1",
    "COMUNA": "san miguel",
    "HORARIO": "07:00-20:00",
    "LONGITUD": -70.65876,
    "LATITUD": -33.48794,

},]


let Data = []

let databd = await axios.get("https://cors-anywhere.herokuapp.com/http://143.198.118.203:8000/reuqest_data_map",
    {
    auth: {
        username: "api_mapa@urban.cl", password: "api_mapa@urban.cl"
    }
}).
then(res => {
    Data.push(res.data)
}).
catch(err => {
        console.log(err)
    })

export let Derivada = []


const innerData = Data["0"]

for (const key in innerData) {
    const dataArray = innerData[key]["0"]

    if (dataArray.request_state === "Derivada") {
        const DerivadaObject = {
            id: dataArray.request_name,
            Fecha: dataArray.request_date
        };

        Derivada.push(DerivadaObject)
    }


}
console.log(Derivada)


export let geoJson = {
    type: "FeatureCollection", features: dataTemp.map(item => {
        return {
            id: item.id, type: "Feature", properties: {
                placeID: item.CODIGO, name: item.DIRECCION, comuna: item.COMUNA
            }, geometry: {
                type: "Point", coordinates: [item.LONGITUD, item.LATITUD]
            }
        }
    })
}








