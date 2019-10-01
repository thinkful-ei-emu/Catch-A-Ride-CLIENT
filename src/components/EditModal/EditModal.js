import React from 'react';
import RideContext from '../../context/RideContext';

export default class Modal extends React.Component{

    static contextType = RideContext

    render(){

      const {starting, destination, description} = this.context.ride;
      const {timeFormat, dateFormat, handleEditForm, closeEditForm} = this.props;
    
      return (
        <div>
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
          <button type="submit" onClick={() => handleEditForm()}>Enter</button>
          <button type="button" onClick={() => closeEditForm()}>Close</button>     
        </div>
      );
    }
}