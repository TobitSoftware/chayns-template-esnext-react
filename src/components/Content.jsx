/**
 * Created by PHugenroth on 13.02.2017.
 */
import React from 'react';

import ToDoInput from './user_view/ToDoInput';
import ToDoList from './user_view/ToDoList';


export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            inputValue: '',
            items: []
        };

        this.inputOnChange = this.inputOnChange.bind(this);
        this.inputOnBlur = this.inputOnBlur.bind(this);
    }

    inputOnChange(event){
        this.setState({
            inputValue: event.target.value
        })
    }

    inputOnBlur(){
        if(this.state.inputValue) {
            let items = this.state.items;
            items.push(this.state.inputValue);
            this.setState({
                items: items,
                inputValue: ''
            })
        }
    }

    render(){
        return(
            <div className="tapp__content content">
                <ToDoInput
                    value={this.state.inputValue}
                    onBlur={this.inputOnBlur}
                    onChange={this.inputOnChange}
                />
                <ToDoList
                    items={this.state.items}
                />
            </div>
        );
    }
}