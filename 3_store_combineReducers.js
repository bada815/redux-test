const redux = require('redux');
const reduxLogger= require('redux-logger');


const createStore = redux.createStore;  //store만들기위한 함수. 
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;  //apply multi reducers

//actions--type   //action type정의 
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'; 
const addSubscriber = () => {
    return {
        type: ADD_SUBSCRIBER
    }
};
 
//reducer 
const initialSubscriber = {    // 초기reducer stat 값
    subscriber : 300 
} 
const subscriberReducer = (state = initialSubscriber, action) =>{
    switch(action.type){
        case 'ADD_SUBSCRIBER':
            return {
                ...state,  //state값을 copy 
                subscriber: state.subscriber + 1
            }
        default: return state;

    }

};

const ADD_VIEW_COUNT = 'ADD_VIEW_COUNT';
const addViewCounter = () => {
    return {
        type: ADD_VIEW_COUNT
    }
}
const initialViewCount= {
    viewCount : 0
};
const viewReducer = (state = initialViewCount, action) =>{
    switch(action.type){
        case 'ADD_VIEW_COUNT':
            return{
                ...state, 
                viewCount: state.viewCount + 1 
            }
        default: return state;  // default is not define. generate as like Error: Reducer "viewcount" returned undefined during initialization. 
    }
}
const rootReducer = combineReducers({
    viewcount: viewReducer,
    subscribe: subscriberReducer
});

//store  // 저장공간.
const store=createStore(rootReducer, applyMiddleware(logger));  

 
// //subscribe 앞에 store.dispatch(addSubscriber()); 있으면 아래 코드 실행않됨. 
// store.subscribe(() => {
//     console.log('subscribe==>', store.getState());
// });
 
store.dispatch(addSubscriber());
// store.dispatch(addSubscriber()); 
store.dispatch(addViewCounter());

/*result*/
// % node store_applyMiddleware.js
//  action ADD_SUBSCRIBER @ 17:54:26.493
//    prev state { viewcount: { viewCount: 0 }, subscribe: { subscriber: 300 } }
//    action     { type: 'ADD_SUBSCRIBER' }
//    next state { viewcount: { viewCount: 0 }, subscribe: { subscriber: 301 } }
//  action ADD_VIEW_COUNT @ 17:54:26.504
//    prev state { viewcount: { viewCount: 0 }, subscribe: { subscriber: 301 } }
//    action     { type: 'ADD_VIEW_COUNT' }
//    next state { viewcount: { viewCount: 1 }, subscribe: { subscriber: 301 } }