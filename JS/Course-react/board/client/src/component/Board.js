import React from 'react'

const Board = (props) => {

    const {title, content, insert_user, insert_date } = props.items;
    return (
        <tr>
            <th scope="row">
                {title}
            </th>
            <td>{content}</td>
            <td>{insert_user}</td>
            <td>{insert_date}</td>
        </tr>
    )
}

export default Board
