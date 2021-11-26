import React from 'react'
import { Button, Container, Label, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { addCounter, minusCounter } from "../redux/counter/action"

const Counter = props => {
    return (
        <div>
            <Container>
                <Row>
                    <Label>{props.counterStore}</Label>
                </Row>
                <Row>
                    <Col md="6">
                        <Button onClick={() => props.addCounter()}>더하기</Button>
                        <Button onClick={() => props.minusCounter()}>빼기</Button>
                     </Col>
                </Row>
            </Container>
        </div>
    )
}

// @param mapStateToProps -> redux state 정보를 react props로 변환시켜준다.
// @param mapDispatchToProps -> redux dispatch > props 메소드 변환
const mapStateToProps = (state) => {
    console.log(state)
    return {
        counterStore: state.counterStore,
    }
}

const mapDispatchToProps = {
    addCounter,
    minusCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
