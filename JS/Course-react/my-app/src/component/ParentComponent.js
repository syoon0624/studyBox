import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const list = [
        {id: '1', value: "바나나"},
        {id: '2', value: "사과"},
        {id: '3', value: "포도"},
    ]

    const childDataString = (child) => {
        console.log(child);
    }

    const childDataNumber = childNumber => {
        console.log(childNumber)
    }

    return(
        <div>
            <ChildComponent list={list} 
            sendDataNumber ={childDataNumber}
            sendData={childDataString}
            />
        </div>
    )
}

export default ParentComponent;


// import React from 'react';

// const ParentComponent = () => {
//     return(
//         <div>

//         </div>
//     )
// }

// export default ParentComponent;