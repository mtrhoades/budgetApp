import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { CiEdit } from 'react-icons/ci'




const AddBankAccountModal = ( { account } ) => {
// vanilla js section:
    let defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate())
// useState section:
   const [show, setShow] = useState(false); // for modal

   const [account_name, setAccount_name] = useState(''); // for bank account name
   const [account_type, setAccount_type] = useState(''); // for bank account type
   const [balance, setBalance] = useState(''); // for balance input
   const [account_date, setAccount_date] = useState(defaultDate); // for current date

// modal helper functons:
  const handleClose = () => setShow(false); // closing the modal
  const handleShow = () => setShow(true); // opening the modal

// date functions for current date
    const findCurrentDate = (e) => {
        setAccount_date(new Date(e.target.value))
    }

// onSubmitForm button to add data to table
    const onSubmitForm =  async (e) => {
    e.preventDefault();
    try {
        const body = { account_name, account_type, balance, account_date };
        const response = await fetch("http://localhost:3027/bankaccount", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        });

        console.log(response)

        window.location = '/';

    } catch (err) {
        console.error(err.message);
    }
};


// jsx section:
  return (
    <div>
        <span onClick={handleShow}>
            <CiEdit style={{width: '20px', height: '20px', cursor: 'pointer'}} />
        </span>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header
                closeButton>
            <Modal.Title>Update Bank Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Group className="mb-3 accountName">
                        <Form.Label>Bank Account Name:</Form.Label>
                        <Form.Control type="text" name="nameTextBox" id="nameTextBox" required
                        value={ account_name }
                        onChange={e => setAccount_name(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3, accountType">
                        <Form.Label>Bank Account Type:</Form.Label>
                        <select class="custom-select"
                            id="inputGroupSelect01"
                            value={ account_type }
                            onChange={e => setAccount_type(e.target.value)} required>
                                <option selected>Choose...</option>
                                <option value="Checking">Checking</option>
                                <option value="Savings">Savings</option>
                                <option value="Credit Card">Credit Card</option>
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3 balance">
                        <Form.Label for="currency-field">Enter Balance Amount:</Form.Label>
                        <Form.Control
                        type="Text"
                        name="currency-field"
                        id="currency-field"
                        prefix={'$'} 
                        value={ balance }
                        onChange={e => setBalance(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 date">
                        <Form.Label>Current Date:</Form.Label>
                        <Form.Control type="date" name="dateTextBox" id="dateTextBox" value={account_date.toLocaleDateString('en-CA')} onChange={findCurrentDate} />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={onSubmitForm}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>    
    </div>
  )
}


export default AddBankAccountModal;