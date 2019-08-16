import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ExerciseList extends Component{
    constructor(props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = {
            exercises:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({
                    exercises:response.data
                })
            })
    }

    render(){
        return(
            <div>
                <p>this is exercise list component</p>
            </div>
        )
    }
} 

export default ExerciseList;