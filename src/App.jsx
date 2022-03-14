import { render } from "@testing-library/react"; 
import React,{Component} from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import 'bootstrap/dist/css/bootstrap.min.css'

// const App = () =>
 class App extends Component {   
     state={
      items: [],
      item:"",
      id:0,
      editItem:false,
     }
    handleChange = e =>{
    this.setState({
      item : e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault();

    const newItem=
  {
    id : this.state.id,
    item:this.state.item
  }
  const updatedItems=[...this.state.items,newItem];
  this.setState({
    items:updatedItems,
    id:this.state.id+1,
    item:'',
    editItem:false,
  })
  }
  clearList= () =>
  {
  this.setState ({
    items:[],
  })
  }
  handleDelete=(id)=>
  {
    const sortedItems = this.state.items.filter(item=> item.id !==id);
    
    this.setState({
      items:sortedItems
     
    })
   
    }
    handleEdit= (id) =>
    {
    const filterItems=this.state.items.filter(item => item.id !==id);
    const selectedItem=this.state.items.find(item =>item.id ===id)
    this.setState({
       items:filterItems,
       item:selectedItem.item,
       editItem:true
          })
    }
      render(){
        return (
        <div className="container ">
        <div className="row">
            <div className="col-10 col-auto col-md-8 mt-4">
                
    <h1>TODO Input</h1>
    
    <TodoInput item={this.state.item} 
               handleChange={this.handleChange}
               handleSubmit={this.handleSubmit}
               editItem={this.state.editItem}
               
                />
    <TodoList items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete} 
              handleEdit={this.handleEdit}/>
    </div>
    </div>
    </div>
    )
  }
}


export default App;