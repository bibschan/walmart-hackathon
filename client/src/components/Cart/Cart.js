import './Cart.scss';
import React, { Component } from 'react';
import egg from '../../assets/egg.png';
import soy from '../../assets/soysauce.png';
import cucumber from '../../assets/cucumbers.jpeg';
import tropicana from '../../assets/tropicana.png';
import SingleItem from '../../components/SingleItem/SingleItem';
import Modal from '../../components/Modal/Modal'



export default class Cart extends Component {

    state = {
        inventory: [
            {
                image: egg,
                name: 'No Name Grade A Large White Eggs',
                description: '12 ct',
                amount: '1',
                price: '$2.69'
            },
            {
                image: soy,
                name: 'Kikkoman Organic Soy Sauce',
                description: '296 ml',
                amount: '1',
                price: '$5.29'
            },
            {
                image: cucumber,
                name: 'Mini Cucumber',
                description: '6 ct',
                amount: '1',
                price: '$5.49'
            },
            {
                image: tropicana,
                name: 'Tropicana Watermelon Fruit Beverage',
                description: '1.75 L',
                amount: '1',
                price: '$4.99'
            }
        ],
        isVisible = false, 
    }

    showModal = () => {
        this.setState({
            isVisible: true
        })
    }

    hideModal = () => {
        this.setState({
            isVisible:false
        })
    }
     
    // handleCancel = () => {
    //     hideModal();
    // }

    // handleNeighbour = (event) =>{
    //     event.preventDefault();
    //     hideModal();
    // }

    render() {
    return (
        <div>
        {this.state.inventory.map (i => {
            return (
                <SingleItem props = {i} />
            )
        })}
            <div className = 'button'>
                <h1>Order Now for Wednesday Arrival</h1>
                    <div>
                    <button onClick = {this.hideModal}>Cancel</button>
                    <button onClick = {this.showModal}>Reorder Now</button>
                    </div>
            </div>
            <Modal isVisible = {this.state.isVisible} />
        </div>
        )
    } 
}