/**
 * Created by yufei on 2018/12/16.
 */
import React from 'react';
import { Tabs, Button, Spin } from 'antd';
import { GEO_OPTIONS,  API_ROOT, TOKEN_KEY } from '../constants';
import { Gallery } from './Gallery';

const TabPane = Tabs.TabPane;

const operations = <Button>Extra Action</Button>;

export class Home extends React.Component {
    componentDidMount() {
        if ("geolocation" in navigator) {
            this.setState({ isLoadingGeoLocation: true, error: '' });
            navigator.geolocation.getCurrentPosition(
                this.onSuccessLoadGeoLocation,
                this.onFailedLoadGeoLocation,
                GEO_OPTIONS
            );
        } else {
            this.setState({ error: 'Geolocation is not supported.'});
        }
    }
    onSuccessLoadGeoLocation = (position) => {
        // console.log(position);
        // const { latitude, longitude } = position.coords;
        // localStorage.setItem(POS_KEY, JSON.stringify({ lat: latitude, lon: longitude }));
        this.setState({ isLoadingGeoLocation: false });
        // this.loadNearbyPosts();
        console.log(position);
    }

    onFailedLoadGeoLocation = () => {
        this.setState({ isLoadingGeoLocation: false, error: 'Failed to load geolocation.' });
    }

    getImagePosts = () => {
        const { error, isLoadingGeoLocation, isLoadingPosts, posts } = this.state;
        if (error) {
            return <div>{error}</div>
        } else if(isLoadingGeoLocation) {
            return <Spin tip="Loading geo location..."/>
        } else if (isLoadingPosts) {
            return <Spin tip="Loading posts..." />
        // } else if (posts.length > 0) {
        //     const images = this.state.posts.map((post) => {
        //         return {
        //             user: post.user,
        //             src: post.url,
        //             thumbnail: post.url,
        //             caption: post.message,
        //             thumbnailWidth: 400,
        //             thumbnailHeight: 300,
        //         }
        //     });
        //
        //     return (<Gallery images={images}/>);
        } else {
            return 'No nearby posts.';
        }
        return <Gallery />;
    }


    render() {
        return (
            <Tabs tabBarExtraContent={operations} className="main-tabs">
                <TabPane tab="Posts" key="1">

                </TabPane>
                <TabPane tab="Map" key="2">
                    Map
                </TabPane>
            </Tabs>
        );
    }
}
