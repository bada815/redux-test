const redux = require('redux');
const reduxLogger= require('redux-logger');


const createStore = redux.createStore;  //store만들기위한 함수. 
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

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

const reducer = (state = initialSubscriber, action) =>{
    switch(action.type){
        case 'ADD_SUBSCRIBER':
            return {
                ...state,  //state값을 copy 
                subscriber: state.subscriber + 1
            }
        default: return state;

    }

};


//store  // 저장공간.
const store=createStore(reducer, applyMiddleware(logger));  

 
// //subscribe 앞에 store.dispatch(addSubscriber()); 있으면 아래 코드 실행않됨. 
// store.subscribe(() => {
//     console.log('subscribe==>', store.getState());
// });
 
store.dispatch(addSubscriber());
store.dispatch(addSubscriber()); 
store.dispatch(addSubscriber());

/*result*/

// action ADD_SUBSCRIBER @ 17:25:33.319
// prev state { subscriber: 300 }
// action     { type: 'ADD_SUBSCRIBER' }
// next state { subscriber: 301 }
// action ADD_SUBSCRIBER @ 17:25:33.328
// prev state { subscriber: 301 }
// action     { type: 'ADD_SUBSCRIBER' }
// next state { subscriber: 302 }
// action ADD_SUBSCRIBER @ 17:25:33.329
// prev state { subscriber: 302 }
// action     { type: 'ADD_SUBSCRIBER' }
// next state { subscriber: 303 }

