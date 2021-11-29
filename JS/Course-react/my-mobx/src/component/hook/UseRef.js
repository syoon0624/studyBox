import React, { useRef,useEffect, useState } from 'react'
import { Container, Button } from 'reactstrap'

const UseRef = () => {
    const [age, setAge] = useState(20);
    const prevAgeRef = useRef(20);

    const prevAge = prevAgeRef.current;
    const text = age === prevAge ? "same" : age > prevAge ? "older" : "younger";

    useEffect(() => {
        prevAgeRef.current = age;
    }, [age])

    return (
        <Container>
            <p>
                { `age ${age} is ${text} than age ${prevAge}`}
            </p>
            <Button onClick ={() => {
                const age = Math.floor(Math.random() *50+1);
                setAge(age);
            }}>
                나이 랜덤 변경하기
            </Button>
        </Container>
    )
}

export default UseRef
