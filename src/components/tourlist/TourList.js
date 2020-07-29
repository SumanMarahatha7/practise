import React,{Component} from 'react';
import Tour from '../tour';
import './tourlist.scss';
import {tourData} from '../../tourData.js';


export default class TourList extends Component{
    state = {
        tours : tourData
    };

    removeTour = (id) => {
        const {tours} = this.state;
        const sorted = tours.filter(tour => tour.id !== id);
        this.setState({
            tours:sorted
        })
    };

    render(){
        // console.log(this.state.tours);

        const {tours} = this.state;

        return(
            <section className = "tourlist">
            {tours.map(tour => (
                <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                ))}
            </section>
            );
    }
}
