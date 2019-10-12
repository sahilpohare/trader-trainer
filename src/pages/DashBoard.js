import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import './DashBoard.css'
import {connect} from 'react-redux';
import {store} from '../StateManagement/store'
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import * as stockDataActions from '../StateManagement/actions/stockDataActions'
import ChartComponent from '../components/ChartComponent';
export class DashBoard extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        store.dispatch(stockDataActions.retriveData({symbol : 'AAPL'}));
    }

    render() {
        return (
            <div id="dashboard" className="d-flex">
                <Sidebar/>           
                <div className="container p-4">
                    <div id="topDisplay" className="container">
                        <h1>{this.props.userName} </h1>
                        <h3>Credits : <span className="text-success">{this.props.credits}</span></h3>
                    </div>
                    <Card>
                        <ChartComponent></ChartComponent>
                        <ButtonGroup>
                            <Button onClick={(e)=>{store.dispatch(stockDataActions.move(9))}}>Move</Button>
                            <Button onClick={(e)=>{store.dispatch(stockDataActions.addEntry(1))}}>Add</Button>
                        </ButtonGroup>
                    </Card>
                </div>
            </div>
        )
    }
}

export default connect((state,ownProps) => 
({
    userName : state.auth.user ? state.auth.userName : 'SahilPohare',
    credits  : state.stockData.credits ? state.stockData.credits : '1000$'
}))(DashBoard);