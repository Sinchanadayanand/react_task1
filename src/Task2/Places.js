import React, { Component } from 'react';
import Place from './Place';

class Places extends Component {
    render() {
        return (
            <div>
                <h1>name and places</h1>
              < Place Name="mysore">sinchana</ Place>
              < Place Name="mandya">sharadhi</ Place>
              < Place Name="hassan">shranya</ Place>

            </div>
        );
    }
}

export default Places;