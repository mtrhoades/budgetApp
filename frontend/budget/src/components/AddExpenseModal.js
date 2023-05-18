import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';



const AddExpenseModal = () => {
// vanilla js section:
let defaultDate = new Date();
defaultDate.setDate(defaultDate.getDate())


// useState section:
  const [show, setShow] = useState(false); // for modal

  const [expense_expense, setExpense_expense] = useState(''); // for expense
  const [expense_amount, setExpense_amount] = useState(''); // for expense amount
  const [expense_date, setExpense_date] = useState(defaultDate); // for expense date

// modal helper functons:
  const handleClose = () => setShow(false); // closing the modal
  const handleShow = () => setShow(true); // opening the modal

// date functions for current date (allows user to change date from current date)
const findCurrentDate = (e) => {
  setExpense_date(new Date(e.target.value))
}


// onSubmitForm button to add data to table
const onSubmitForm =  async(e) => {
  e.preventDefault();
  try {
      const body = { expense_expense, expense_amount, expense_date };
      const response = await fetch("http://localhost:3027/expense", {
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
        <Button variant="danger" onClick={handleShow}>
            Add Expense
        </Button>
      
        <Modal show={show} onHide={handleClose}>
            <Modal.Header 
            closeButton>
            <Modal.Title>Add Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                
                <Form.Group className="mb-3 expense">
                    <Form.Label>Expense:</Form.Label>
                    <Form.Control type="text" name="expense" id="expense" required
                    value={ expense_expense }
                    onChange={e => setExpense_expense(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3 amount">
                  <Form.Label for="currency-field">Enter Expense Amount:</Form.Label>
                  <Form.Control
                  type="Text"
                  name="currency-field"
                  id="currency-field"
                  prefix={'$'} 
                  value={ expense_amount }
                  onChange={e => setExpense_amount(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3 date">
                    <Form.Label>Date Due:</Form.Label>
                    <Form.Control type="date" name="dateTextBox" id="dateTextBox" value={expense_date.toLocaleDateString('en-CA')} onChange={findCurrentDate} />
                </Form.Group>

              </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={onSubmitForm}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}


export default AddExpenseModal;