import React,{Component} from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar.js';
import TourList from './components/tourlist/TourList.js';

class App extends Component{
    render(){
        return(
            <React.Fragment>
            <Navbar />
            <TourList />
            </React.Fragment>
        )
    }
};



export default App;
