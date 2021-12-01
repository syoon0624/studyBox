import React, { useCallback, useState } from 'react'
import ChildUseCallback from './ChildUseCallback';

const UseCallback = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    //useCallback: 필요한 것 만 작동되도록(usememo는 state, useCallback은 함수)
    const getItems = useCallback(() => {
        // [1, 2, 3]
        return [number, number+1, number+2];
    },[number]);

    const theme = {
        backgroundColor: dark? '#333' : '#fff',
        color: dark? '#fff' : '#333',
    }


    return (
        <>
        <div style={theme}>
            <input 
            type="number"
            value={number}
            onChange={(e) => {
                setNumber(e.target.value)
            }}
            />
        </div>
        <button
        onClick={() => setDark(!dark)}>
            색 변경
        </button>
        <ChildUseCallback getItems={getItems}/>
        </>
    )
}

export default UseCallback
