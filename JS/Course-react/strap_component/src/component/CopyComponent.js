import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'

const RequestComponent = () => {
    const request = useSelector((state)=> state.request)
    const dispatch = useDispatch();

    return (   
        <div>
            <Row>
                <FormGroup>
                    <Label sm="2">
                        id
                    </Label>
                    <Col sm="10">
                        <Input id="id" type="text" value={request.data.id}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label sm="2">
                        title
                    </Label>
                    <Col sm="10">
                        <Input id="title" type="text" value={request.data.title}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label sm="2">
                        userid
                    </Label>
                    <Col sm="10">
                        <Input id="userId" type="text" value={request.data.userId}/>
                    </Col>
                </FormGroup>
            </Row>
        </div>
    )
}


export default RequestComponent;
