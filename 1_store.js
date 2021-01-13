const redux = require('redux'); 
const createStore = redux.createStore;   


//actions--type   //defining action type
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


//store space
const store=createStore(reducer);  

 
//if subscribe in front of store.dispatch(addSubscriber()); ,결과값을 볼수 없었음.   
store.subscribe(() => {
    console.log('subscribe==>', store.getState());
});
 
store.dispatch(addSubscriber());
store.dispatch(addSubscriber()); 
store.dispatch(addSubscriber());

