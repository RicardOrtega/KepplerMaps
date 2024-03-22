

export const configPoints ={
    version: 'v1',
    config: {
        visState:{
            layers:[
                {type:'point',
                id: 'point_map',
                    config: {
                    dataid: "test_trip_data",
                        label:"pointMap",
                        columns:{lat:"latitude",lng:"longitude"},
                        isVisible:true,
                        highlightColor:[255,0,0,255]
                    },
                    visualChannels:{
                    sizeField:{name:'Plan', type:'integer'}
                    }
                }
            ]
        }
    }

}


export const configHeatMap =  {
    version: "v1",
    config:{
        visState:{
            layers:[{
                id:'heatmap_layer',
                type: 'heatmap',
                config:{
                    dataId:"test_trip_data",
                    label:"Heatmap",
                    columns:{lat:"latitude",lng:"longitude"},
                    isVisible:true,
                    visConfig:{
                        opacity:0.8,
                        colorRange:{
                            name: "Global Warnming",
                            type: "sequential",
                            category: 'Uber',
                            colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300']
                        },
                        radius: 46.4
                    }
                },
                visualChannels:{weightfield: null, weightScale: 'linear'}

            }

            ],
            interactionConfig: {
                tooltip:{
                    fieldsToShow: {tree_data:[]},
                        compareMode: false,
                        compareType: 'absolute',
                        enabled:true

                }
            }

        }
    }}
