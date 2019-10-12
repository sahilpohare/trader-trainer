import thunk from 'redux-thunk';
import axios from 'axios';

export const retriveData = (query) => (dispatch) => {
	fetch(
		"https://api.worldtradingdata.com/api/v1/history?limit=30&symbol=AAPL&sort=newest&api_token=b76nfqO2l18cKV7sc7KyTW0noQePusgPlIx0uX7qQdprV2UbVf8pbeyzRsZi"
	)
	.then((res) => {
			res.json().then((value) => {
			var history = value['history'];
            var FormattedData = Object.keys(history).map((val, i) => ({ x : val, y : [history[val].open, history[val].high, history[val].low, history[val].close]}));
            console.log(JSON.stringify(FormattedData));
            console.log(res.url);
            dispatch({
                type : 'RetriveData_FULFILLED',
                payload : FormattedData.reverse()
            })    

		}).catch((err)=>console.log(err));
	})
	.catch((err) => console.log('failed'));
};

export const updateChartDataByIndex = (indexstart,indexend) => (dispatch) => {
    dispatch({
        type : "updateChartDataByIndex",
        indexStart : indexstart,
        indexEnd : indexend,
    })
}

export const updateChartDataByData = (data) => (dispatch) => {
    dispatch({
        type : "updateChartDataByData",
        payload : data
    })
}

export const move = (Amt) => (dispatch) =>{
    dispatch({
        type : "moveChart",
        payload : Amt
    })
}

export const addEntry = (data) => (dispatch) =>{
    dispatch({
        type : "addEntry",
        payload : data
    })
}