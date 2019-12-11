import React from 'react';
const LanguageList = (props) => (
<li onClick={() => {props.selectLanguage(props.greeting)}}>{props.title}</li>
);
export default LanguageList;