import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
import Navbar from './components/Navbar';
import ExerciseList from './components/Exercise-list';
import EditExercise from './components/Edit-exercise';
import CreateExercise from './components/Create-exercise';
import CreateUser from './components/Create-user';


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
        <br/>
      <Switch>
        <Route path='/' exact component={ExerciseList} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create' component={CreateExercise} />
        <Route path='/user' component={CreateUser} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
