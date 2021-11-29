import React, { useMemo } from 'react'
import { Col, Row } from 'reactstrap'

const getColorFetch = color => {
    console.log("색깔: ", color);
    return `[${color}]`;
}
const getMovieFetch = movie => {
    console.log("MOVIE: ", movie);
    return `[${movie}]`;
}
const MemoChild = ({color, movie}) => {
    //useMemo 사용(단일 state 변화 감지)
    const colorFetch = useMemo(() => getColorFetch(color), [color]);
    const movieFetch = useMemo(() => getMovieFetch(movie), [movie]);
    return (
        <Row>
            <Col>
                제가 좋아하는 색은 {colorFetch} 이고, <br />
                즐겨보는 스트리밍은 {movieFetch} 입니다.
            </Col>
        </Row>
    )
}

export default MemoChild