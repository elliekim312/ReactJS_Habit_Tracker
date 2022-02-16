import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits : [
        { id: 1, name: 'Cooking', count: 0 },
        { id: 2, name: 'Coding', count: 0 },
        { id: 3, name: 'Playing Game', count: 0 },
    ],
  };

  // Not recommend to edit state object directly

  handleIncrement = (habit) => {

      //Plan A
      // //1. make a new array with a spread operator(copying each item of the state habits array into the new array)
      // const habits = [...this.state.habits];
      // //2. find which index is for the item of the array 
      // const index = habits.indexOf(habit);
      // //3. increase count by index
      // habits[index].count++;
      // //4. update state
      // this.setState({ habits });

      const habits = this.state.habits.map(item => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count+1 };
        }
        return item;
      });
      this.setState({habits});

  };

  handleDecrement = (habit) => {
      // const habits = [...this.state.habits];
      // const index = habits.indexOf(habit);
      // const count = habits[index].count-1;
      // habits[index].count = count < 0 ? 0 : count;
      // this.setState({ habits });

      const habits = this.state.habits.map(item => {
        if (item.id === habit.id) {
          const count =  habit.count -1;
          return { ...habit, count: count < 0 ? 0: count };
        }
        return item;
      });
      this.setState({habits});
  };

  handleDelete = (habit) => {
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits});
  };
  
  handleAdd = (name) => {
    const habits = [...this.state.habits, {id:Date.now(), name , count: 0}];

    this.setState({habits});
  }
  
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0 ) {
        return { ...habit, count: 0 };
      }
      return habit;
    });

    this.setState({habits});

  }

  render() {
    return(
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits 
          habits={this.state.habits} 
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} 
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}/>
      </>
    )
  }
}

export default App;
