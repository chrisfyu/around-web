/**
 * Created by yufei on 2019/1/7.
 */
import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

export class AroundMarker extends React.Component {

    render() {
        const { user, message, url, location } = this.props.post;
        const { lat, lon: lng } = location;
        return (
            <Marker>
                <InfoWindow>
                    <div>
                        <img src={url} alt={message} className="around-marker-image"/>
                        <p>{`${user}: ${message}`}</p>
                    </div>
                </InfoWindow>
            </Marker>
        )
    }
}
