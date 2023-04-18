import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';



const AddIncomeModal = () => {
// useState section:
   const [show, setShow] = useState(false); // for modal

// modal helper functons:
  const handleClose = () => setShow(false); // closing the modal
  const handleShow = () => setShow(true); // opening the modal

// onSubmitForm button to add data to table
const onSubmitForm =  async(e) => {

}

   // jsx section:
  return (
    <div>
        <Button variant="success" onClick={handleShow}>
            Add Income
        </Button>
      
        <Modal show={show} onHide={handleClose}>
            <Modal.Header 
            closeButton>
            <Modal.Title style={{color: 'white'}}>Add New Stock</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                <div class="form-group row">
                </div>  
            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-success" onClick={onSubmitForm}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}


export default AddIncomeModal;