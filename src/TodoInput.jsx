import { render } from '@testing-library/react';
import React, { Component } from 'react';
import TodoList from './TodoList';
class TodoInput extends Component{
  render()
  {
    const {item,handleChange,handleSubmit,editItem}=this.props
    return (
      <div class='card card-body mt-3 '>
        <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <div className='input-group-text bg-primary text-white'>
          <i className="fas fa-book"/>
          </div>
        <input type='text' 
              className='form-control text-capitalize'
               placeholder='enter Todo Item'
              value={item} onChange={handleChange} 
        />         
        </div>
         <div className='list-group'>
          <button type='submit' className={editItem ? 'btn-list btn-primary btn-success btn-mg-5 btn-block btn-sm' :
                'btn-list btn-primary btn-mg-5 btn-block btn-sm'}>
          {editItem ? 'edit Item': 'Add Item'}  </button>
          
        </div>
        </form>
      
      </div>
    )
}
}



export default TodoInput;