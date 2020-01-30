import React from 'react'

/* function car() {
    return (
        <h2>This is car component</h2>
    )
} */

/* const car = ()=>{
    return(<div>This is car component</div>)
    
} */
/* const car =()=> <div>This is car component</div>
export default car */

export default props=> (
<div>
    <h3>Car name: {props.name}</h3>
    <p><strong>Year: {props.year}</strong></p>
    <button onClick = {props.onChangeTitle}> Click </button>
</div>
)