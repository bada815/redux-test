import React from 'react';
import {connect} from 'react-redux';
import { addSubscriber } from '../redux/subscriber/action'
 

// const Subscribers = (props) => {
//     return (
//         <div className="items">
//             <p>Subscribers : {props.count}</p> 
//             <button onClick={ () => props.addSubscriber()} >구독하기</button>
//         </div>
//     )
// }
const Subscribers = ({count, addSubscriber}) => {
    return (
        <div className="items">
            <p>Subscribers : {count}</p> 
            <button onClick={ () => addSubscriber()} >구독하기</button>
        </div>
    )
}



//https://react-redux.js.org/api/connect
const mapStateToProps =  (state) => {
    return {
        count: state.count
    }
           
}
//pass function          
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

//pass object
const mapDispatchToProps ={ 
        addSubscriber 
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)

