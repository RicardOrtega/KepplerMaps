import React from 'react';
import {Icons} from "@kepler.gl/components";

function CustomSidePanelFactory(){
    const CustomPanel  = props =>{
         if (props.activeSidePanel === 'rocket'){
             return <div className="rocket-panel">Rocket</div>
         }else if (props.activeSidePanel=== 'chart'){
             return <div className="rocket-panel">Charts?</div>
         }
         return null;
    };


    CustomPanel.defaultProps = {
        panels: [ {
            id: 'rocket',
            label: 'rocket',
            iconComponent: Icons.Rocket
        },
            {id: 'chart',
            label:'chart',
            iconComponent:Icons.LineChart}

        ],
        getProps: props  => ({
            layers: props.layers
        })
    };
    return CustomPanel;
}

export default CustomSidePanelFactory;