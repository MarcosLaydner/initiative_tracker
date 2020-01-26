import React, {useState} from 'react'
import "../styles"

export default props => {

    let [id] = useState(props.id)
    let [name, setName] = useState(props.name)
    let [init, setInit] = useState(props.init)
    let [ac, setAc] = useState(props.ac)

    return (

        <tr key={id}>
            <td><input type="text" value={name} placeholder="name" onChange={e => setName(e.target.value)}/></td>
            <td><input type="text" value={init} placeholder="initiative" onChange={e => setInit(e.target.value)}/></td>
            <td><input type="text" value={ac} placeholder='ac' onChange={e => setAc(e.target.value)}/></td>
            <td>
            <button onClick={() => props.removeFunction(id)} >X</button>
            </td>
        </tr>
    )
}