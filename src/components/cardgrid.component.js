import React, { Component } from 'react';
import AppCard from './card.component';


var Gridstyle = {
    padding: "3% 0"
}

class CardGrid extends Component {
    state = {
        
    }
    render() {
        return(
            <div style={Gridstyle}>
                <AppCard/>
            </div>
        )
    }
}

export default CardGrid;
