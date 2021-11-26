import React, { useEffect } from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { connect } from "react-redux"
import { getPost } from "../redux/thunk/action"

const RequestComponent = props => {
    useEffect(() => {
        props.getPost(props.counter);
    },[props.counter])
    return (   
        <div>
            <Row>
                <FormGroup>
                    <Label sm="2">
                        id
                    </Label>
                    <Col sm="10">
                        <Input id="id" type="text" value={props.request.data.id}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label sm="2">
                        title
                    </Label>
                    <Col sm="10">
                        <Input id="title" type="text" value={props.request.data.title}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label sm="2">
                        userid
                    </Label>
                    <Col sm="10">
                        <Input id="userId" type="text" value={props.request.data.userId}/>
                    </Col>
                </FormGroup>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counterStore,
        request: state.request,
    }
}

const mapDispatchToProps = {
    getPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestComponent);
