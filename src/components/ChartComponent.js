import React, { Component } from 'react'
import ApexCharts from 'react-apexcharts';
import { store } from '../StateManagement/store';
import {connect} from 'react-redux';

class ChartComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartoptions : {

            }
        }
    }
    render() {
        return (
            <div>
                <ApexCharts type='candlestick' series={[{data : this.props.visibleData}]} options={this.props.chartoptions}></ApexCharts>
            </div>
        )
    }
}

export default connect((state,props) => ({
    visibleData : state.stockData.currentChartData,
    chartoptions : state.stockData.chartoptions,
}))(ChartComponent)