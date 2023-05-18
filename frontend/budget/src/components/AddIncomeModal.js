import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';



const AddIncomeModal = () => {

// vanilla js section:
  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate())

// useState section:
  const [show, setShow] = useState(false); // for modal

  const [income_source, setIncome_source] = useState(''); // for income source
  const [income_amount, setIncome_amount] = useState(''); // for income amount
  const [income_date, setIncome_date] = useState(defaultDate); // for date received


// modal helper functons:
  const handleClose = () => setShow(false); // closing the modal
  const handleShow = () => setShow(true); // opening the modal

// date functions for current date (allows user to change date from current date)
  const findCurrentDate = (e) => {
    setIncome_date(new Date(e.target.value))
}


// onSubmitForm button to add data to table
const onSubmitForm =  async(e) => {
  e.preventDefault();
  try {
      const body = { income_source, income_amount, income_date };
      const response = await fetch("http://localhost:3027/income", {
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
        <Button variant="success" onClick={handleShow}>
            Add Income
        </Button>
      
        <Modal show={show} onHide={handleClose}>
            <Modal.Header 
              closeButton>
            <Modal.Title>Add Income</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>

              <Form.Group className="mb-3 income">
                  <Form.Label>Income Source:</Form.Label>
                  <Form.Control type="text" name="income" id="income" required
                  value={ income_source }
                  onChange={e => setIncome_source(e.target.value)}
                  />
              </Form.Group>

              <Form.Group className="mb-3 amount">
                  <Form.Label for="currency-field">Enter Income Amount:</Form.Label>
                  <Form.Control
                  type="Text"
                  name="currency-field"
                  id="currency-field"
                  prefix={'$'} 
                  value={ income_amount }
                  onChange={e => setIncome_amount(e.target.value)}
                  />
              </Form.Group>

              <Form.Group className="mb-3 date">
                  <Form.Label>Date Received:</Form.Label>
                  <Form.Control type="date" name="dateTextBox" id="dateTextBox" value={income_date.toLocaleDateString('en-CA')} onChange={findCurrentDate} />
              </Form.Group>

            </Form>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="success" onClick={onSubmitForm}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}


export default AddIncomeModal;