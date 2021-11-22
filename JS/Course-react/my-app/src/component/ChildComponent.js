import React, { useEffect, useState } from 'react';

const ChildComponent = props => {
    const { list } = props;
    const [stringData, setStringData] = useState("");
    const [numberData, setNumberData] = useState(0);

    // 화면이 열릴때 단 한번 호출됨
    useEffect(() => {
        console.log("화면이 열릴 때")
    },[])

    // 화면이 랜더될때마다 계속 호출
    useEffect(() => {
        console.log("화면이 랜더될때마다")
    })

    // list 값이 바뀔때마다 호출
    useEffect(() => {
        console.log(list)
    },[list])

    useEffect(() => {
        console.log(stringData)
    },[stringData])

    const handleChangeString = e => {
        setStringData(e.target.value);
    };

    const handleClick = () => {
        props.sendData(stringData);
    }

    const handleChangeNumber = e => {
        setNumberData(e.target.value);
    };

    const handleClickNumber = () => {
        props.sendDataNumber(numberData);
    }
    return(
        <>
        <div>
            <label>String 입력</label>
            <label>
                <input 
                onChange={handleChangeString}
                />
            </label>
            <button className="waves-effect waves-light btn" onClick={handleClick}>부모로 보내기</button>
        </div>
        <div>
        <label>Number 입력</label>
        <label>
            <input 
            onChange={handleChangeNumber}
            />
        </label>
        <button className="waves-effect waves-light btn" onClick={handleClickNumber}>부모로 보내기</button>
    </div>
    </>
    );
}

export default ChildComponent;