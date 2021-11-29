import React, { useState } from 'react'
import { Col, Container, Input, Label, Row } from 'reactstrap'
import MemoChild from './MemoChild';

const Memo = () => {
    const [color, setColor] = useState("");
    const [movie, setMovie] = useState("");

    const onChangeHandle = e => {
        if( e.target.id === "color") {
            setColor(e.target.value);
        } else {
            setMovie(e.target.value);
        }
        
    }
    return (
        <Container>
            <Col>
            <Label>가장 좋아하는 색은?</Label>
            <Input id="color" value={color} onChange={onChangeHandle}/>
            </Col>
            <Row>
                가장 좋아하는 스트리밍 서비스는?
                <Label>
                    <Input
                        type="radio"
                        name="movie"
                        value="tving"
                        onChange={onChangeHandle}
                    />
                    Tving
                </Label>
                <Label>
                    <Input
                        type="radio"
                        name="movie"
                        value="netflix"
                        onChange={onChangeHandle}
                    />
                    Netflix
                </Label>
                <Label>
                    <Input
                        type="radio"
                        name="movie"
                        value="disney"
                        onChange={onChangeHandle}
                    />
                    Disney +
                </Label>
            </Row>
            <MemoChild color={color} movie={movie} />
        </Container>
    )
}

export default Memo
