import React, { Component } from 'react'
import ApexChars from 'react-apexcharts';
class ChartComponent extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect((state,props) => ({
    visibleData : state.stockData.data,
    chartoptions : state.stockData.chartoptions,
}))(ChartComponent)