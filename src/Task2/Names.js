import React, { Component } from 'react';
import Name from './Name';
import Places from './Places';
import Dobs from './Dobs';

class Names extends Component {
    render() {
        return (
            <div>
                <h1>list of names</h1>
              <Name age="21">sinchana</Name>
              <Name age="22">sharadhi</Name>
              <Name age="23">shranya</Name>
            <Places/>
            <Dobs/>
            </div>
        );
    }
}

export default Names;