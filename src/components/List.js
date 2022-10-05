import { React, useState } from 'react'
import data from "./ListData.json"
import {Link} from "react-router-dom";
function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul className='search-list'>
            {filteredData.map((item) => (
         <Link to={item.linkUrl }><li  key={item.id}>{item.text}</li></Link>
            ))}
        </ul>
    )
}

export default List
