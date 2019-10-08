export const stockDataReducer = (state = {}, action) =>{
    switch(action.type){
        case "RetriveData_PENDING":
            return ({
                fetching : true,
                cachedata : state.cache,
                currentChartData : [...state.currentChartData]
            })
        case "RetriveData_FULFILLED":
            return ({
                fetching : false,
                cachedata : [...state.cache,action.payload],
                currentChartData : state.currentChartData
            })
        case "RetriveData_REJECTED":
            return ({
                fetching : false,
                currentChartData : state.currentChartData,
                error : action.error
            })
        case "updateChartDataByData":
            var chartData = [...state.currentChartData,action.payload];
            chartData.sort()

            return({

            })
        default :
            return state;
    }
}

