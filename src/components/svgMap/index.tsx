import React, {FC} from 'react';
import {MapSvg, MapPath} from './SvgMapStyle';
import mapPaths from './map';

import {useCalcStoreContext} from '@store/calcStore';
import {setActiveDistrict} from '@store/calcStore/reducer';

const SvgMap: FC = () => {

    const {dispatch, activeDistrict} = useCalcStoreContext();

    const renderMap = Object.entries(mapPaths).map(([index, d]) => <MapPath active={Number(index) === activeDistrict} onClick={() => dispatch(setActiveDistrict(Number(index)))} key={`path-${index}`} d={d} id={index.toString()}/>)

    return(
        <MapSvg x="0px" y="0px" viewBox="0 0 1027.6028 929.83222" enableBackground="new 0 0 1782.318 916.094">
            <g transform="translate(-116.85442,139.76785)">
                {renderMap}
            </g>
        </MapSvg>
    )
}

export default SvgMap;
