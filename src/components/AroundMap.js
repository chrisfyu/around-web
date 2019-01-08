/**
 * Created by yufei on 2019/1/7.
 */
import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
// import { AroundMarker } from './AroundMarker';
import { POS_KEY } from '../constants';

class NormalAroundMap extends React.Component {

    render() {
        return <div> <GoogleMap /></div>
    }
}

export const AroundMap = withScriptjs(withGoogleMap(NormalAroundMap));