import React, {Component} from "react";
import {connect} from "react-redux";

import {addDataToMap, wrapTo} from "@kepler.gl/actions";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import {
    SidebarFactory,
    PanelHeaderFactory,
    PanelToggleFactory,
    CustomPanelsFactory,
    MapPopoverFactory,
    injectComponents
} from "@kepler.gl/components";

import CustomPanelHeaderFactory from "../Components/panel-header";
import CustomSidebarFactory from "../Components/side-bar";
import CustomPanelToggleFactory from "../Components/panel-toggle";
import CustomSidePanelFactory from "../Components/custom-panel";
import CustomMapPopoverFactory from "../Components/custom-map-popover";

import styled from "styled-components";
import {theme} from "@kepler.gl/styles";
import {
    config,
    geoJson,
    solicitudes_Cerrada,
    solicitudes_Derivadas, solicitudes_Finalizada,
    solicitudes_Inicida,
    solicitudes_Proceso
} from "../Data/Data"
import {processGeojson, processKeplerglDataset, Processors} from "@kepler.gl/processors";
import "maplibre-gl/dist/maplibre-gl.css"


const KeplerGl = injectComponents([
        [SidebarFactory, CustomSidebarFactory],
        [PanelHeaderFactory, CustomPanelHeaderFactory],
        [PanelToggleFactory, CustomPanelToggleFactory],
        [CustomPanelsFactory, CustomSidePanelFactory],
        [MapPopoverFactory, CustomMapPopoverFactory]
    ]
)

const StyledMapConfigDisplay = styled.div`
    position: absolute;
    z-index: 100;
    bottom: 10px;
    right: 10px;
    background-color: ${theme.sidePanelBg};
    font-size: 11px;
    width: 300px;
    color: ${theme.textColor};
    word-wrap: break-word;
    min-height: 60px;
    padding: 10px;
`;

const localeMessages = {
    en: {
        mapLayers: {
            terrain: 'Terrain'
        }
    }
};


class App extends Component {


    componentDidMount() {

        this.props.dispatch(wrapTo("map1", addDataToMap({
            datasets: [
                {
                    info: {
                        label: 'Solicitudes Iniciadas',
                        id: "SolIniciada"
                    },
                    data: solicitudes_Inicida
                },
                {
                    info: {
                        label: 'Solicitudes derivadas',
                        id: "SolDerivada"
                    },
                    data: solicitudes_Derivadas
                },
                {
                    info: {
                        label: 'Solicitudes en proceso',
                        id: "SolProceso"
                    },
                    data: solicitudes_Proceso
                },
                {
                    info: {
                        label: 'Solicitudes Cerradas',
                        id: "SolCerrada"
                    },
                    data: solicitudes_Cerrada
                },
                {
                    info: {
                        label: 'Solicitudes Finalizadas',
                        id: "SolFinalizada"
                    },
                    data: solicitudes_Finalizada
                }
            ], config
        })))
    }


    render() {

        return (
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                <AutoSizer>
                    {({height, width}) => (
                        <KeplerGl id="map1" width={width} height={height}  localeMessages={localeMessages}/>
                    )}
                </AutoSizer>


            </div>
        );
    }
}


const mapStateToProPS = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProPS, dispatchToProps)(App);

