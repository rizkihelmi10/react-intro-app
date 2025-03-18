import { useState } from 'react'
import PropTypes from 'prop-types'

function Message({name, color = "blue"} = props){
    return (
        <div>
            <h1 style={{color: color}}>Hello {name}</h1>
        </div>
    )


}
Message.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Message;