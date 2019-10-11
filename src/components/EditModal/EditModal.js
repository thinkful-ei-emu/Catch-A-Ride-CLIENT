import React from 'react';
import RideContext from '../../context/RideContext';
import './EditModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindowClose,faSave } from '@fortawesome/free-solid-svg-icons';

export default class Modal extends React.Component{

    static contextType = RideContext

    render(){

      const {starting, destination, description} = this.context.ride;
      const {timeFormat, dateFormat, handleEditForm, closeEditForm} = this.props;
    
      return (
        <div className='modal'>
          <form className='editForm' aria-label='Edit this ride'>
            <p>Edit Whichever Details As Needed</p>
            <label htmlFor='newStarting'>Starting</label>
            <input type='text' id='newStarting' aria-label='Edit Starting input' defaultValue={starting}></input>
            <label htmlFor='newDestination'>Destination</label>
            <input type='text' id='newDestination' aria-label='Edit Destination input' defaultValue={destination}></input>
            <label htmlFor='newDescription'>Description</label>
            <textarea className='newDescription' type='text' id='newDescription' aria-label='Edit Description input' defaultValue={description}></textarea>
            <label htmlFor='newDate'>Date</label>
            <input type='text' id='newDate' aria-label='Edit Date input' defaultValue={dateFormat}></input>
            <label htmlFor='newTime'>Time</label>
            <input type='text' id='newTime' aria-label='Edit Time input' defaultValue={timeFormat}></input>
          </form>
          <button type="submit" onClick={() => handleEditForm()}>Save <FontAwesomeIcon icon={faSave} /></button>
          <button type="button" onClick={() => closeEditForm()}>Close <FontAwesomeIcon icon={faWindowClose} /></button>     
        </div>
      );
    }
}