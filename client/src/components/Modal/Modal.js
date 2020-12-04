import './Modal.scss';
import React from 'react'
import {Link} from 'react-router-dom';


//modal need to receive a props to check if it should show or not and also receive a function to toggle the state
export default function Modal({isVisible, email, date, price, distance, hideModal, number}) {
     
    const handleCancel = () => {
        hideModal();
    }

    const handleNeighbour = (event) =>{
        window.location.href = '/'
    }
    if(!isVisible) {
        return null;
    } else {
        return (
            <div className="modal">
                <div className="modal__contents">
                    <div>
                    <div className="cancel">
                        <button onClick={handleCancel}/>
                    </div>
                        <h1>Order # {number}</h1>
                        <p>We've sent your receipt to your email: <br/> {email}</p>
                    </div>
                    <div>
                        <h1>Your delivery will arrive <b>{date}</b></h1>
                    </div>
                    <div>
                        <h1>You saved ${price} and {distance} in delivery by sharing this delivery trip</h1>
                    </div>
                    <div className="modal-btn-tray">
                        <button className="btn btn-white btn-modal" onClick={handleCancel}>Cancel</button>
                        <button className="btn btn-red btn-modal" onClick={handleNeighbour} exact to = '/'>Get a Neighbour on Board</button>
                    </div>
                </div>
            </div>
        )
    }
}