const initialState = {
    cachedata : [],
    currentChartData : [],
    chartoptions : {
        animations : {
            enabled : true,
            easing : 'linear',
            dynamicAnimation: {
                speed: 1000
            },
        },
        xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
    },
    fetching : false,
    error : {},
    lowerIndex : 0,
    higherIndex : 30
}

export const stockDataReducer = (state = initialState, action) =>{
    switch(action.type){
        case "addEntry" : 
            state.higherIndex -= action.payload;
            state.lowerIndex -= action.payload;
            return({
                ...state,
                currentChartData : [...state.currentChartData,...state.cachedata.slice(state.lowerIndex,state.higherIndex)]
            })
        case "RetriveData_PENDING":
            return ({
                ...state,
                fetching : true,
                cachedata : state.cachedata,
                currentChartData : [...state.currentChartData]
            })
        case "RetriveData_FULFILLED":
            return ({
                ...state,
                fetching : false,
                cachedata : [...state.cachedata,...action.payload],
                currentChartData : state.cachedata.slice(action.payload.length - 30,action.payload.length),
                higherIndex : action.payload.length,
                lowerIndex : action.payload.length - 30,
            })
        case "RetriveData_REJECTED":
            return ({
                ...state,
                fetching : false,
                currentChartData : state.currentChartData,
                error : action.error
            })
        case "updateChartDataByData":
            return({
                ...state,
                currentChartData : state.cachedata.slice(0,30)
            })
        case "moveChart":
            state.lowerIndex  -= action.payload;
            state.higherIndex -= action.payload;
            return({
                ...state,
                currentChartData : [...state.cachedata.splice(state.lowerIndex,state.higherIndex)].reverse()
            })
        default :
            return state;
    }
}

