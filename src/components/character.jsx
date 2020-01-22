import React, {useState, useEffect} from 'react'

export default props => {

    let [status, setStatus] = useState(false) // ideia é ser true se for a vez do cara

    return (
        <div>
            <h6 className='name'>Name</h6>
        </div>
    )
}