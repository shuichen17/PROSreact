import React from 'react';
const ListItem = (props) => (
    <li>
        <span>{props.string}&nbsp;{props.element}</span>
    </li>
);
export default ListItem;