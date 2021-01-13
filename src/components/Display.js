import React from 'react'
import { connect } from 'react-redux'
import store from '../redux/store'

const Display = (props) => {
    return (
        <div>
            <p>구독자수:{ props.count }</p>
            
        </div>
    )
}
const mapStateToProps = ( state ) => {
    return {
        count : state.count
    }
}
export default connect(mapStateToProps)(Display)
