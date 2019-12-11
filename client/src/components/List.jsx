import React from 'react';
import ListItem from './ListItem.jsx';
const List = (props) => {
    return (
        <ul className="listNames">
            {props.list.map((name, index) => <ListItem key={index} element={name} string={props.string}/>)}
        </ul>
    );
};
export default List;