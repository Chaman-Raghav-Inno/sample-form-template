import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, ToggleButtonGroup, ToggleButton, Row, Button, Card, Link } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  // state variables for the input fields
  const [form, setForm] = useState({
    tripType: '',
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    travellers:'',
  });

  // handler functions for the input fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const resetButton = () => {
    setForm({
      tripType: '',
      from: '',
      to: '',
      departDate: '',
      returnDate: '',
      travellers:'',
    });
  }

  const submitButton = (e) => {
    e.preventDefault();
    console.log(form);
    resetButton();
  }

  return (
    <div className='m-5' style={{ paddingLeft: '150px', paddingRight: '150px' }}>
      <Card className='ms-5 me-5 p-2'>
        <Card.Body>
          <form className="container mt-3 mb-3">
            <Row className="mb-3">
              <Form.Group controlId="formRadio1" className="col-4">
                <Form.Check
                  inline
                  label="Round Trip"
                  name="formRadio1"
                  type="radio"
                  id="inline-radio-1"
                />
              </Form.Group>
              <Form.Group controlId="formRadio2" className="col-4">
                <Form.Check
                  inline
                  label="One Way"
                  name="formRadio2"
                  type="radio"
                  id="inline-radio-2"
                />
              </Form.Group>
              <a href="#" className="col-4">
                Multi-city/Stopovers &#8250;
              </a>
            </Row>
            <Row className="mb-3">
              <Form.Group className="col-6">
                <Form.Label htmlFor="fromDetails">From</Form.Label>
                <Form.Control
                  type="text"
                  id="fromDetails"
                />
              </Form.Group>
              <Form.Group className="col-6">
                <Form.Label htmlFor="toDetails">To</Form.Label>
                <Form.Control
                  type="text"
                  id="toDetails"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="col-6">
                <Form.Label htmlFor="departDate">Depart Date</Form.Label>
                <Form.Control
                  type="date"
                  id="departDate"
                />
              </Form.Group>
              <Form.Group className="col-6">
                <Form.Label htmlFor="returnDate">Return Date</Form.Label>
                <Form.Control
                  type="date"
                  id="returnDate"
                />
              </Form.Group>
            </Row>
            <Row className="mb-5">
              <Form.Group className="col">
                <Form.Label htmlFor="travellers">Traveller(s)</Form.Label>
                <Form.Control
                  type="text"
                  id="travellers"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formGridCheckbox" className="col d-grid gap-1">
                <Button variant="primary" size="lg" onClick={submitButton}>Search Flights</Button>
              </Form.Group>
            </Row>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
