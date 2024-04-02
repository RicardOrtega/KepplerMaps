import {PanelHeaderFactory} from "@kepler.gl/components";

export function CustomPanelHeaderFactory(){
    const PanelHeader = PanelHeaderFactory();

    PanelHeader.defaultProps = {
        ...PanelHeader.defaultProps,
        actionItems:[]
    };
    return PanelHeader;
}
export default CustomPanelHeaderFactory;