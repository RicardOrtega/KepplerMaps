import {processGeojson} from "@kepler.gl/processors"

export const config = {
    version: 'v1',
    config: {
        visState: {
            layers: [
                {
                    type: 'point',
                    id: 'point_layer',
                    config: {
                        dataId: 'PuntosBip',
                        label: 'Codigo',
                        color: [69, 138, 70],
                        columns: {lat: 'LATITUD', lng: 'LONGITUD', altitude: null},
                        isVisible: true,
                        highlightColor: [255, 0, 0, 255]
                    },
                    visualChannels: {
                        sizeField: {name: 'Plan', type: 'integer'}
                    }
                },
                {
                    id: 'heatmap_layer',
                    type: 'heatmap',
                    config: {
                        dataId: 'PuntosBip',
                        label: 'Codigo',
                        columns: {lat: 'LATITUD', lng: 'LONGITUD'},
                        isVisible: true,
                        visConfig: {
                            opacity: 0.8,
                            colorRange: {
                                name: 'Global Warming',
                                type: 'sequential',
                                category: 'Uber',
                                colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300']
                            },
                            radius: 22
                        }
                    },
                    visualChannels: {weightField: null, weightScale: 'linear'}
                }
            ],
            interactionConfig: {
                tooltip: {
                    fieldsToShow: {tree_data: []},
                    compareMode: false,
                    compareType: 'absolute',
                    enabled: true
                }
            }
        },
        mapState: {
            bearing: 0,
            dragRotate: false,
            latitude: -33.47971,
            longitude: -70.64659,
            pitch: 0,
            zoom: 12,
            isSplit: false
        }
    }
};


export const bip = {
    data:
        {
            fields: [
                {name: "CODIGO"},
                {name: "ENTIDAD",},
                {name: "DIRECCION"},
                {name: "COMUNA"},
                {name: "HORARIO"},
                {name: "ESTE"},
                {name: "NORTE"},
                {name: "LONGITUD"},
                {name: "LATITUD"},

            ],
            rows: [


                [
                    92341,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.649,
                    -33.48003
                ],
                [
                    92442,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65621,
                    -33.47769
                ],
                [
                    92354,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65876,
                    -33.4899
                ],
                [
                    92535,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65061,
                    -33.48643
                ],
                [
                    92937,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65361,
                    -33.47908
                ],
                [
                    92272,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64721,
                    -33.482
                ],
                [
                    92713,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65003,
                    -33.48468
                ],
                [
                    92956,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65349,
                    -33.48958
                ],
                [
                    92445,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6593,
                    -33.4852
                ],
                [
                    92980,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65884,
                    -33.48387
                ],
                [
                    92834,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65082,
                    -33.48352
                ],
                [
                    92712,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65351,
                    -33.48794
                ],
                [
                    92853,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65351,
                    -33.48479
                ],
                [
                    92828,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64879,
                    -33.47759
                ],
                [
                    92907,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64843,
                    -33.479
                ],
                [
                    92629,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65553,
                    -33.48314
                ],
                [
                    92848,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65922,
                    -33.48139
                ],
                [
                    92403,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65342,
                    -33.48921
                ],
                [
                    92420,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65756,
                    -33.48777
                ],
                [
                    92551,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65821,
                    -33.48748
                ],
                [
                    92935,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65251,
                    -33.48251
                ],
                [
                    92477,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65033,
                    -33.4883
                ],
                [
                    92897,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64696,
                    -33.488
                ],
                [
                    92467,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65905,
                    -33.48301
                ],
                [
                    92750,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64655,
                    -33.47857
                ],
                [
                    92929,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65034,
                    -33.48347
                ],
                [
                    92988,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65736,
                    -33.48468
                ],
                [
                    92621,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65986,
                    -33.47689
                ],
                [
                    92971,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64905,
                    -33.47792
                ],
                [
                    92558,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65463,
                    -33.48189
                ],
                [
                    92639,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65356,
                    -33.48007
                ],
                [
                    92998,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64743,
                    -33.48435
                ],
                [
                    92215,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65749,
                    -33.48988
                ],
                [
                    92583,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65275,
                    -33.48377
                ],
                [
                    92623,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65135,
                    -33.48226
                ],
                [
                    92278,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64941,
                    -33.48676
                ],
                [
                    92281,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65248,
                    -33.48195
                ],
                [
                    92530,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64884,
                    -33.47749
                ],
                [
                    92554,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64716,
                    -33.48788
                ],
                [
                    92552,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64646,
                    -33.47877
                ],
                [
                    92248,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64777,
                    -33.48015
                ],
                [
                    92304,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65219,
                    -33.47798
                ],
                [
                    92950,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65551,
                    -33.48412
                ],
                [
                    92405,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65214,
                    -33.48755
                ],
                [
                    92995,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65923,
                    -33.4818
                ],
                [
                    92506,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65193,
                    -33.48509
                ],
                [
                    92301,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65251,
                    -33.48981
                ],
                [
                    92940,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65502,
                    -33.4771
                ],
                [
                    92404,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65224,
                    -33.48705
                ],
                [
                    92344,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65231,
                    -33.48212
                ],
                [
                    92610,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65369,
                    -33.48039
                ],
                [
                    92599,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65153,
                    -33.48249
                ],
                [
                    92414,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64853,
                    -33.48699
                ],
                [
                    92981,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65678,
                    -33.47841
                ],
                [
                    92272,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6458,
                    -33.48545
                ],
                [
                    92349,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64949,
                    -33.48488
                ],
                [
                    92209,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65846,
                    -33.48558
                ],
                [
                    92777,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65157,
                    -33.47998
                ],
                [
                    92807,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65853,
                    -33.48803
                ],
                [
                    92904,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65032,
                    -33.48937
                ],
                [
                    92303,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6507,
                    -33.4892
                ],
                [
                    92596,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65836,
                    -33.47714
                ],
                [
                    92612,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65275,
                    -33.47964
                ],
                [
                    92252,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65006,
                    -33.48263
                ],
                [
                    92230,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65801,
                    -33.48747
                ],
                [
                    92912,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65718,
                    -33.48373
                ],
                [
                    92901,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64694,
                    -33.48175
                ],
                [
                    92270,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65135,
                    -33.48435
                ],
                [
                    92519,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65748,
                    -33.48226
                ],
                [
                    92729,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65833,
                    -33.48315
                ],
                [
                    92541,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64665,
                    -33.48757
                ],
                [
                    92595,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6573,
                    -33.48769
                ],
                [
                    92891,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65747,
                    -33.48238
                ],
                [
                    92288,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64671,
                    -33.48664
                ],
                [
                    92747,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65175,
                    -33.47951
                ],
                [
                    92499,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65378,
                    -33.48554
                ],
                [
                    92788,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65258,
                    -33.48585
                ],
                [
                    92317,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64698,
                    -33.48666
                ],
                [
                    92838,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64821,
                    -33.48487
                ],
                [
                    92703,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64874,
                    -33.48503
                ],
                [
                    92323,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65262,
                    -33.48606
                ],
                [
                    92209,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64801,
                    -33.48211
                ],
                [
                    92727,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65735,
                    -33.48774
                ],
                [
                    92659,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65167,
                    -33.47925
                ],
                [
                    92678,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65617,
                    -33.47691
                ],
                [
                    92417,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65057,
                    -33.48977
                ],
                [
                    92235,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65447,
                    -33.48713
                ],
                [
                    92776,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65747,
                    -33.48425
                ],
                [
                    92678,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65561,
                    -33.4777
                ],
                [
                    92992,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64658,
                    -33.48591
                ],
                [
                    92831,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6458,
                    -33.48806
                ],
                [
                    92699,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64887,
                    -33.48266
                ],
                [
                    92866,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64693,
                    -33.4879
                ],
                [
                    92528,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65987,
                    -33.4887
                ],
                [
                    92625,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6469,
                    -33.48744
                ],
                [
                    92442,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65338,
                    -33.48346
                ],
                [
                    92499,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64852,
                    -33.48614
                ],
                [
                    92658,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64774,
                    -33.47737
                ],
                [
                    92732,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6532,
                    -33.48364
                ],
                [
                    92722,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6495,
                    -33.48035
                ],
                [
                    92962,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65517,
                    -33.48442
                ],
                [
                    92873,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64625,
                    -33.48009
                ],
                [
                    92273,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65813,
                    -33.48478
                ],
                [
                    92883,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65175,
                    -33.48352
                ],
                [
                    92344,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64618,
                    -33.48384
                ],
                [
                    92979,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6552,
                    -33.48714
                ],
                [
                    92424,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65999,
                    -33.47837
                ],
                [
                    92393,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65531,
                    -33.48624
                ],
                [
                    92487,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65978,
                    -33.4851
                ],
                [
                    92959,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65289,
                    -33.48711
                ],
                [
                    92514,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64766,
                    -33.47991
                ],
                [
                    92818,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65578,
                    -33.4869
                ],
                [
                    92471,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65759,
                    -33.48142
                ],
                [
                    92524,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65431,
                    -33.48886
                ],
                [
                    92485,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65142,
                    -33.48106
                ],
                [
                    92877,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64793,
                    -33.47975
                ],
                [
                    92493,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65153,
                    -33.48253
                ],
                [
                    92552,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6504,
                    -33.48124
                ],
                [
                    92935,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64652,
                    -33.48104
                ],
                [
                    92502,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65063,
                    -33.47713
                ],
                [
                    92873,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65598,
                    -33.47767
                ],
                [
                    92478,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65804,
                    -33.47915
                ],
                [
                    92691,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65307,
                    -33.48399
                ],
                [
                    92328,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64937,
                    -33.48785
                ],
                [
                    92858,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65791,
                    -33.48242
                ],
                [
                    92700,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65611,
                    -33.48268
                ],
                [
                    92368,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64743,
                    -33.4869
                ],
                [
                    92889,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64727,
                    -33.48583
                ],
                [
                    92581,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65138,
                    -33.48842
                ],
                [
                    92955,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65691,
                    -33.4843
                ],
                [
                    92900,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64917,
                    -33.47872
                ],
                [
                    92346,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65689,
                    -33.48892
                ],
                [
                    92865,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64902,
                    -33.48191
                ],
                [
                    92591,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64855,
                    -33.48826
                ],
                [
                    92229,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65377,
                    -33.48287
                ],
                [
                    92635,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65734,
                    -33.48485
                ],
                [
                    92348,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65744,
                    -33.47808
                ],
                [
                    92379,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65774,
                    -33.48851
                ],
                [
                    92677,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64772,
                    -33.48078
                ],
                [
                    92257,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6465,
                    -33.4811
                ],
                [
                    92651,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65078,
                    -33.48922
                ],
                [
                    92451,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65015,
                    -33.47887
                ],
                [
                    92488,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65623,
                    -33.48535
                ],
                [
                    92266,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64932,
                    -33.48556
                ],
                [
                    92675,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65245,
                    -33.48918
                ],
                [
                    92893,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65468,
                    -33.48793
                ],
                [
                    92817,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65639,
                    -33.4884
                ],
                [
                    92542,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65964,
                    -33.48975
                ],
                [
                    92637,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65221,
                    -33.47699
                ],
                [
                    92369,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65943,
                    -33.48254
                ],
                [
                    92208,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65231,
                    -33.48436
                ],
                [
                    92808,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64583,
                    -33.48917
                ],
                [
                    92808,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.658,
                    -33.48097
                ],
                [
                    92874,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65733,
                    -33.4842
                ],
                [
                    92347,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65499,
                    -33.47715
                ],
                [
                    92429,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65536,
                    -33.48163
                ],
                [
                    92267,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64997,
                    -33.48982
                ],
                [
                    92198,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65739,
                    -33.48744
                ],
                [
                    92299,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64915,
                    -33.47782
                ],
                [
                    92457,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64889,
                    -33.4804
                ],
                [
                    92818,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65669,
                    -33.48838
                ],
                [
                    92274,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64984,
                    -33.48304
                ],
                [
                    92641,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65696,
                    -33.48076
                ],
                [
                    92944,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65367,
                    -33.47683
                ],
                [
                    92655,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65748,
                    -33.47766
                ],
                [
                    92742,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65021,
                    -33.48648
                ],
                [
                    92949,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64947,
                    -33.48276
                ],
                [
                    92682,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65759,
                    -33.47673
                ],
                [
                    92760,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64628,
                    -33.48717
                ],
                [
                    92617,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65564,
                    -33.48641
                ],
                [
                    92428,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6541,
                    -33.48505
                ],
                [
                    92852,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65922,
                    -33.48653
                ],
                [
                    92214,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64995,
                    -33.47748
                ],
                [
                    92448,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65709,
                    -33.48986
                ],
                [
                    92306,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64962,
                    -33.48521
                ],
                [
                    92426,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65763,
                    -33.48762
                ],
                [
                    92850,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64816,
                    -33.48892
                ],
                [
                    92940,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65782,
                    -33.48986
                ],
                [
                    92900,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64717,
                    -33.477
                ],
                [
                    92325,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65983,
                    -33.48304
                ],
                [
                    92888,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65716,
                    -33.48443
                ],
                [
                    92333,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65403,
                    -33.48164
                ],
                [
                    92908,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64937,
                    -33.48181
                ],
                [
                    92643,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65875,
                    -33.4892
                ],
                [
                    92362,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65812,
                    -33.48357
                ],
                [
                    92938,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65403,
                    -33.48623
                ],
                [
                    92827,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65542,
                    -33.47998
                ],
                [
                    92739,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64909,
                    -33.48662
                ],
                [
                    92307,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.6539,
                    -33.47747
                ],
                [
                    92238,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65432,
                    -33.48125
                ],
                [
                    92629,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65169,
                    -33.48009
                ],
                [
                    92687,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65943,
                    -33.47931
                ],
                [
                    92715,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64859,
                    -33.48867
                ],
                [
                    92322,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64815,
                    -33.47958
                ],
                [
                    92767,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65512,
                    -33.47866
                ],
                [
                    92548,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65079,
                    -33.4865
                ],
                [
                    92852,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64636,
                    -33.48205
                ],
                [
                    92539,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65894,
                    -33.47882
                ],
                [
                    92921,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.65937,
                    -33.48641
                ],
                [
                    92641,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64802,
                    -33.48301
                ],
                [
                    92355,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64904,
                    -33.48414
                ],
                [
                    92657,
                    "FULLCARGA",
                    "santa fe int(744)",
                    "San Miguel",
                    "Lun a Sab 08:00 a 21:00 Dom y Festivos 09:00 a 14:00",
                    344838,
                    6303385,
                    -70.64989,
                    -33.477
                ]
            ]


        }

}


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

    },
]

export let geoJson = {
    type: "FeatureCollection",
    features: dataTemp.map(item => {
        return {
            id: item.id,
            type: "Feature",
            properties: {
                placeID: item.CODIGO,
                name: item.DIRECCION,
                comuna: item.COMUNA
            },
            geometry: {
                type: "Point",
                coordinates: [item.LONGITUD, item.LATITUD]
            }
        }
    })
}








