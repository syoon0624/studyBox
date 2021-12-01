import React, { useEffect, useState } from 'react'

const ChildUseCallback = (props) => {
    const { getItems } = props;
    const [items, setItems] = useState([]);

    useEffect(()=> {
        setItems(getItems());
        console.log('숫자가 변동 이루어짐.');
    },[getItems])

    return (
        <div>
            {items.map((item, i)=> {
                return (
                <div key={i}>
                    {item}
                    {i}
                </div>
                )
            })}
        </div>
    )
}

export default ChildUseCallback
