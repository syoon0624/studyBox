import React, {useEffect} from 'react'
import { Button, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

const User = ({userStore, count, ...props}) => {
    useEffect(() => {
        console.log(toJS(userStore.user));
    }, [userStore.user])

    useEffect(() => {
        console.log(`User count: ${count.counter}`);
    },[count.counter])
    return (
        <Container>
            <Row>
                <FormGroup>
                    <Label sm="2">ID</Label>
                    <Col sm="10">
                        <Input 
                        id="id"
                        type="text"
                        value={userStore.user.id}
                        readOnly
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label sm="2">Title</Label>
                    <Col sm="10">
                        <Input 
                        id="title"
                        type="text"
                        value={userStore.user.title}
                        readOnly
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label sm="2">UserID</Label>
                    <Col sm="10">
                        <Input 
                        id="userId"
                        type="text"
                        value={userStore.user.userId}
                        readOnly
                        />
                    </Col>
                </FormGroup>
            </Row>
            <Button
                onClick= {() => {
                    userStore.getUser(count.counter);
                }}
            >api 호출</Button>
        </Container>
    )
}

export default observer(User);
