import React, {Component} from 'react';

class GoogleMap extends Component{
    //ref is from React - allows us to get a reference to an html element that's been rendered to the page
    // gives us access to this.refs.map

//runs immediately after component is mounted on the screen

//google.maps.Map creates an embedded google map in the document
//this.refs.map is where we want to place the map (check the render method)
//second parameter is an options object
componentDidMount() {
    const google = window.google;
    new google.maps.Map(this.refs.map, {
        zoom:12,
        center: {
            lat:this.props.lat,
            lng:this.props.lon
        }
    })
}

    render() {
        return <div ref="map" />
    }

}

export default GoogleMap;
