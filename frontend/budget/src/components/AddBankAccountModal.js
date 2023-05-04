import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';



const AddBankAccountModal = () => {
// vanilla js section:
    let defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate())
// useState section:
   const [show, setShow] = useState(false); // for modal

   const [account_name, setAccount_name] = useState(''); // for bank account name
   const [account_type, setAccount_type] = useState(''); // for bank account type
   const [account_balance, setAccount_balance] = useState(''); // for balance input
   const [date, setDate] = useState(defaultDate); // for current date

// modal helper functons:
  const handleClose = () => setShow(false); // closing the modal
  const handleShow = () => setShow(true); // opening the modal

// date functions for current date
    const findCurrentDate = (e) => {
        setDate(new Date(e.target.value))
    }

// onSubmitForm button to add data to table
const onSubmitForm =  async(e) => {
    e.preventDefault();
    try {
        const body = { account_name, account_type, account_balance };
        const response = await fetch("http://localhost:3027/budget", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        });

        console.log(response)

        window.location = '/';

    } catch (err) {
        console.error(err.message);
    }
}

   // jsx section:
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Add Bank Account
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Group className="mb-3">
                        <Form.Label>Bank Account Name:</Form.Label>
                        <input type="text" name="nameTextBox" id="nameTextBox" required
                        value={ account_name }
                        onChange={e => setAccount_name(e.target.value)}
                        ></input>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Bank Account Type:</Form.Label>
                        <select class="custom-select" id="inputGroupSelect01" required>
                            <option selected>Choose...</option>
                            <option value="1">Checking</option>
                            <option value="2">Savings</option>
                            <option value="3">Credit Card</option>
                            value={ account_type }
                            onChange={e => setAccount_type(e.target.value)}
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label for="currency-field">Enter Balance Amount:</Form.Label>
                        <CurrencyInput
                        type="text"
                        name="currency-field" id="currency-field"
                        value={ account_balance }
                        // onValueChange={(value, name) => console.log(value, name)} prefix={'$'} 
                        onChange={e => setAccount_balance(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Current Date:</Form.Label>
                        <input type="date" name="dateTextBox" id="dateTextBox" value={date.toLocaleDateString('en-CA')} onChange={findCurrentDate} ></input>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={onSubmitForm}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>    
    </div>
  )
}


export default AddBankAccountModal;