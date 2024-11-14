import axios from "axios";


let dataTemp = [{
    "CODIGO": 92341,
    "ENTIDAD": "fullcarga",
    "DIRECCION": "santa fe #1",
    "COMUNA": "san miguel",
    "HORARIO": "07:00-20:00",
    "LONGITUD": -70.625,
    "LATITUD": -33.475,

},
    {
        "CODIGO": 92342,
        "ENTIDAD": "fullcarga",
        "DIRECCION": "santa fe #2",
        "COMUNA": "san miguel",
        "HORARIO": "07:00-20:00",
        "LONGITUD": -70.680,
        "LATITUD": -33.515
    },
    {
        "CODIGO": 92341,
        "ENTIDAD": "fullcarga",
        "DIRECCION": "santa fe #1",
        "COMUNA": "san miguel",
        "HORARIO": "07:00-20:00",
        "LONGITUD": -70.65876,
        "LATITUD": -33.48794,

    },]


let Data = []

const proxyUrl = 'http://143.198.118.203:8027'
const path = '/reuqest_data_map/'
const url = `${proxyUrl}${path}`


let databd = await axios.get(url,

    {
        headers: {
            'Authorization': `Basic ${btoa('api_mapa@urban.cl:api_mapa@urban.cl')}`
        }, params: {
            port: ":8004"
        }
    }).then(res => {
    Data.push(res.data)
}).catch(err => {
    console.log(err)
})


export let solicitudes_Inicida = {
    fields: [
        {name: 'Id'},
        {name: 'Nombre_solicitud'},
        {name: 'Tipo_soliciud'},
        {name: 'Fecha_Solicitud'},
        {name: 'Fecha_derivacion'},
        {name: 'Fecha_Aceptacion'},
        {name: 'Fecha_Cierre'},
        {name: 'Fecha_Finalizacion'},
        {name: 'latitud'},
        {name: 'longitud'}
    ],
    rows: [],
}
export let solicitudes_Derivadas = {
    fields: [
        {name: 'Id'},
        {name: 'Nombre_solicitud'},
        {name: 'Tipo_soliciud'},
        {name: 'Fecha_Solicitud'},
        {name: 'Fecha_derivacion'},
        {name: 'Fecha_Aceptacion'},
        {name: 'Fecha_Cierre'},
        {name: 'Fecha_Finalizacion'},
        {name: 'latitud'},
        {name: 'longitud'}
    ],
    rows: [],
}
export let solicitudes_Proceso = {
    fields: [
        {name: 'Id'},
        {name: 'Nombre_solicitud'},
        {name: 'Tipo_soliciud'},
        {name: 'Fecha_Solicitud'},
        {name: 'Fecha_derivacion'},
        {name: 'Fecha_Aceptacion'},
        {name: 'Fecha_Cierre'},
        {name: 'Fecha_Finalizacion'},
        {name: 'latitud'},
        {name: 'longitud'}
    ],
    rows: [],
}
export let solicitudes_Cerrada = {
    fields: [
        {name: 'Id'},
        {name: 'Nombre_solicitud'},
        {name: 'Tipo_soliciud'},
        {name: 'Fecha_Solicitud'},
        {name: 'Fecha_derivacion'},
        {name: 'Fecha_Aceptacion'},
        {name: 'Fecha_Cierre'},
        {name: 'Fecha_Finalizacion'},
        {name: 'latitud'},
        {name: 'longitud'}
    ],
    rows: [],
}
export let solicitudes_Finalizada = {
    fields: [
        {name: 'Id'},
        {name: 'Nombre_solicitud'},
        {name: 'Tipo_soliciud'},
        {name: 'Fecha_Solicitud'},
        {name: 'Fecha_derivacion'},
        {name: 'Fecha_Aceptacion'},
        {name: 'Fecha_Cierre'},
        {name: 'Fecha_Finalizacion'},
        {name: 'latitud'},
        {name: 'longitud'}
    ],
    rows: [],
}


const innerData = Data["0"]

for (const key in innerData) {

    const dataArray = innerData[key]["0"]

    if (dataArray.request_state === "Derivada") {
        const DerivadaObject = {
            id: key,
            nombre_solicitud: dataArray.request_name,
            Tipo_soliciud: dataArray.request_type,
            Fecha_Solicitud: dataArray.request_date,
            Fecha_derivacion: dataArray.request_delivery,
            Fecha_Aceptacion: dataArray.request_accept,
            Fecha_Cierre: dataArray.request_close,
            Fecha_Finalizacion: dataArray.request_finish,
            Latitude: dataArray.request_lat,
            Longitude: dataArray.request_lon

        };


        const row = [
            DerivadaObject.id,
            DerivadaObject.nombre_solicitud,
            DerivadaObject.Tipo_soliciud,
            DerivadaObject.Fecha_Solicitud,
            DerivadaObject.Fecha_derivacion,
            DerivadaObject.Fecha_Aceptacion,
            DerivadaObject.Fecha_Cierre,
            DerivadaObject.Fecha_Finalizacion,
            parseFloat(DerivadaObject.Latitude),
            parseFloat(DerivadaObject.Longitude),
        ]


        solicitudes_Derivadas.rows.push(row)

    }
    if (dataArray.request_state === "Iniciada") {
        const DerivadaObject = {
            id: key,
            nombre_solicitud: dataArray.request_name,
            Tipo_soliciud: dataArray.request_type,
            Fecha_Solicitud: dataArray.request_date,
            Fecha_derivacion: dataArray.request_delivery,
            Fecha_Aceptacion: dataArray.request_accept,
            Fecha_Cierre: dataArray.request_close,
            Fecha_Finalizacion: dataArray.request_finish,
            Latitude: dataArray.request_lat,
            Longitude: dataArray.request_lon

        };


        const row = [
            DerivadaObject.id,
            DerivadaObject.nombre_solicitud,
            DerivadaObject.Tipo_soliciud,
            DerivadaObject.Fecha_Solicitud,
            DerivadaObject.Fecha_derivacion,
            DerivadaObject.Fecha_Aceptacion,
            DerivadaObject.Fecha_Cierre,
            DerivadaObject.Fecha_Finalizacion,
            parseFloat(DerivadaObject.Latitude),
            parseFloat(DerivadaObject.Longitude),
        ]


        solicitudes_Inicida.rows.push(row)

    }
    if (dataArray.request_state === "Proceso") {
        const DerivadaObject = {
            id: key,
            nombre_solicitud: dataArray.request_name,
            Tipo_soliciud: dataArray.request_type,
            Fecha_Solicitud: dataArray.request_date,
            Fecha_derivacion: dataArray.request_delivery,
            Fecha_Aceptacion: dataArray.request_accept,
            Fecha_Cierre: dataArray.request_close,
            Fecha_Finalizacion: dataArray.request_finish,
            Latitude: dataArray.request_lat,
            Longitude: dataArray.request_lon

        };


        const row = [
            DerivadaObject.id,
            DerivadaObject.nombre_solicitud,
            DerivadaObject.Tipo_soliciud,
            DerivadaObject.Fecha_Solicitud,
            DerivadaObject.Fecha_derivacion,
            DerivadaObject.Fecha_Aceptacion,
            DerivadaObject.Fecha_Cierre,
            DerivadaObject.Fecha_Finalizacion,
            parseFloat(DerivadaObject.Latitude),
            parseFloat(DerivadaObject.Longitude),
        ]


        solicitudes_Proceso.rows.push(row)
        console.log(solicitudes_Proceso)
    }
    if (dataArray.request_state === "Cerrada") {
        const DerivadaObject = {
            id: key,
            nombre_solicitud: dataArray.request_name,
            Tipo_soliciud: dataArray.request_type,
            Fecha_Solicitud: dataArray.request_date,
            Fecha_derivacion: dataArray.request_delivery,
            Fecha_Aceptacion: dataArray.request_accept,
            Fecha_Cierre: dataArray.request_close,
            Fecha_Finalizacion: dataArray.request_finish,
            Latitude: dataArray.request_lat,
            Longitude: dataArray.request_lon

        };


        const row = [
            DerivadaObject.id,
            DerivadaObject.nombre_solicitud,
            DerivadaObject.Tipo_soliciud,
            DerivadaObject.Fecha_Solicitud,
            DerivadaObject.Fecha_derivacion,
            DerivadaObject.Fecha_Aceptacion,
            DerivadaObject.Fecha_Cierre,
            DerivadaObject.Fecha_Finalizacion,
            parseFloat(DerivadaObject.Latitude),
            parseFloat(DerivadaObject.Longitude),
        ]


        solicitudes_Cerrada.rows.push(row)

    }
    if (dataArray.request_state === "Finalizada") {
        const DerivadaObject = {
            id: key,
            nombre_solicitud: dataArray.request_name,
            Tipo_soliciud: dataArray.request_type,
            Fecha_Solicitud: dataArray.request_date,
            Fecha_derivacion: dataArray.request_delivery,
            Fecha_Aceptacion: dataArray.request_accept,
            Fecha_Cierre: dataArray.request_close,
            Fecha_Finalizacion: dataArray.request_finish,
            Latitude: dataArray.request_lat,
            Longitude: dataArray.request_lon

        };


        const row = [
            DerivadaObject.id,
            DerivadaObject.nombre_solicitud,
            DerivadaObject.Tipo_soliciud,
            DerivadaObject.Fecha_Solicitud,
            DerivadaObject.Fecha_derivacion,
            DerivadaObject.Fecha_Aceptacion,
            DerivadaObject.Fecha_Cierre,
            DerivadaObject.Fecha_Finalizacion,
            parseFloat(DerivadaObject.Latitude),
            parseFloat(DerivadaObject.Longitude),
        ]


        solicitudes_Finalizada.rows.push(row)

    }


}


export const config = {
    version: 'v1',
    config: {
        visState: {
            layers: [
                {
                    type: 'point',
                    id: 'Iniciada',
                    config: {
                        dataId: "SolIniciada",
                        dataFormat: "json",
                        label: "Iniciada",
                        color: [137, 137, 137],
                        columns: {lat: 'latitud', lng: 'longitud', altitude: null},
                        isVisible: true,
                        highlightColor: [255, 0, 0, 255]
                    },
                    visualChannels: {
                        sizeField: {name: 'Plan', type: 'integer'}
                    }
                },
                {
                    type: 'point',
                    id: 'Derivada',
                    config: {
                        dataId: "SolDerivada",
                        dataFormat: "json",
                        label: ["Derivada"],
                        color: [250, 227, 0],
                        columns: {lat: 'latitud', lng: 'longitud', altitude: null},
                        isVisible: true,
                        highlightColor: [255, 0, 0, 255]
                    },
                    visualChannels: {
                        sizeField: {name: 'Plan', type: 'integer'}
                    }
                },
                {
                    type: 'point',
                    id: 'Proceso',
                    config: {
                        dataId: "SolProceso",
                        dataFormat: "json",
                        label: "Proceso",
                        color: [218, 0, 0],
                        columns: {lat: 'latitud', lng: 'longitud', altitude: null},
                        isVisible: true,
                        highlightColor: [218, 0, 0]
                    },
                    visualChannels: {
                        sizeField: {name: 'Plan', type: 'integer'}
                    }
                },
                {
                    type: 'point',
                    id: 'Cerrada',
                    config: {
                        dataId: "SolCerrada",
                        dataFormat: "json",
                        label: "Cerrada",
                        color: [44, 81, 190],
                        columns: {lat: 'latitud', lng: 'longitud', altitude: null},
                        isVisible: true,
                        highlightColor: [255, 0, 0, 255]
                    },
                    visualChannels: {
                        sizeField: {name: 'Plan', type: 'integer'}
                    }
                },
                {
                    type: 'point',
                    id: 'Finalizada',
                    config: {
                        dataId: "SolFinalizada",
                        dataFormat: "json",
                        label: "Finalizada",
                        color: [50, 138, 70],
                        columns: {lat: 'latitud', lng: 'longitud', altitude: null},
                        isVisible: true,
                        highlightColor: [255, 0, 0, 255]
                    },
                    visualChannels: {
                        sizeField: {name: 'Plan', type: 'integer'}
                    }
                },
            ],
            mapState: {
                bearing: 0,
                dragRotate: false,
                latitude: -33.4536269,
                longitude: -70.6129272,
                pitch: 0,
                zoom: 14,
                isSplit: false
            },
            options: {centerMap: true, readOnly: false}
        },
    }
}

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








