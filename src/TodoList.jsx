import React, { Component } from 'react'
import TodoItem from './TodoItem'

 class TodoList extends Component {
  render() {
    const {items,clearList,handleDelete,handleEdit}=this.props
    return (

        <ul className=" list-group ">
          <h3 className='text-capitalize text-center'>emmanuel musya todo list</h3>
            {items.map(item => {
                          return<TodoItem key={items.id} title={item.item}
                                          handleDelete={this.handleDelete=()=> handleDelete(item.id)}
                                          handleEdit={this.handleEdit =() => handleEdit(item.id)}/>
                          })}                        
            <button type='button'  className=
                        ' btn btn-block btn-secondary mt-5 btn-sm btn-danger  btn-clearlist'
                        onClick={clearList}>Clear List</button> 
                         
         </ul>                   
    )
  }
}

export default TodoList