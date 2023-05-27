import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Composant Modal.
 * @param {Object} props - Les propriétés du composant.
 * @param {boolean} props.isOpen - Indique si le modal est ouvert ou fermé.
 * @returns {JSX.Element|null} - Le composant Modal.
 */

export const Modal = (props) => {
  const isOpen = props.isOpen
  const navigate = useNavigate()

  if(isOpen) console.log("salut")
       return (
          <div className="modal" style={{display: isOpen ? 'flex' : 'none'}}>
              <div className='modal-content'>
                  <h3 className='modal-header'>HRNET</h3>
                  <p className=''> Nouvelle utilisateur crée !! </p>
                  <button className="modal-button" onClick={ () => { navigate('./Employe')}}> ok </button>
              </div>
          </div>
     
  );
 
};
  
   
