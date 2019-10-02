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
          <form className='editForm'>
            <p>Edit Whichever Details As Needed</p>
            <label htmlFor='newStarting'>Starting</label>
            <input type='text' id='newStarting' defaultValue={starting}></input>
            <label htmlFor='newDestination'>Destination</label>
            <input type='text' id='newDestination' defaultValue={destination}></input>
            <label htmlFor='newDescription'>Description</label>
            <input type='text' id='newDescription' defaultValue={description}></input>
            <label htmlFor='newDate'>Date</label>
            <input type='text' id='newDate' defaultValue={dateFormat}></input>
            <label htmlFor='newTime'>Time</label>
            <input type='text' id='newTime' defaultValue={timeFormat}></input>
          </form>
          <button type="submit" onClick={() => handleEditForm()}>Save <FontAwesomeIcon icon={faSave} /></button>
          <button type="button" onClick={() => closeEditForm()}>Close <FontAwesomeIcon icon={faWindowClose} /></button>     
        </div>
      );
    }
}