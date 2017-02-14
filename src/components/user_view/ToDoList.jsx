import React from 'react';

const ToDoList = ({items})=>{
    return(
        <ul className="todo-list list list--square">
            {
                items.map((item, index)=>{
                    "use strict";
                    return (
                        <li key={index} className="todo-item">
                            {item}
                        </li>
                    )
                })
            }
        </ul>
    );
};

ToDoList.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default ToDoList;