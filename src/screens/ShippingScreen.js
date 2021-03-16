import React, { useState, useEffect } from 'react'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'


function ShippingScreen({ history }) {

	const [address, setAddress ] = useState('');
	const [city, setCity ] = useState('');
	const [postalCode, setPostalCode ] = useState('');
	const [country, setCountry] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('Submit!');

	}
	return (
		<FormContainer>
			<h1>Shipping</h1>
			<Form onSubmit={submitHandler}>
				{/* Field 1: address */}
				<Form.Group controlId='address'>
					<Form.Label>Address</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter Address'
						value={address ? address : ''}
						onChange={(e)=> setAddress(e.target.value)}
						>
						</Form.Control>
				</Form.Group>
				{/* Field 2: city */}
				<Form.Group controlId='city'>
					<Form.Label>City</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter City'
						value={city ? city : ''}
						onChange={(e)=> setCity(e.target.value)}
						>
						</Form.Control>
				</Form.Group>
				{/* Field 3: postal code */}
				<Form.Group controlId='postalCode'>
					<Form.Label>Postal Code</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter Postal Code'
						value={postalCode ? postalCode : ''}
						onChange={(e)=> setPostalCode(e.target.value)}
						>
						</Form.Control>
				</Form.Group>
				{/* Field 4: country */}
				<Form.Group controlId='country'>
					<Form.Label>Country</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter Country'
						value={country ? country : ''}
						onChange={(e)=> setCountry(e.target.value)}
						>
						</Form.Control>
				</Form.Group>
				{/* Form Button / Form flow control */}
				<Button type='submit' variant='primary'>
					Continue
				</Button>
				{/*  */}
			</Form>
		</FormContainer>
	)
}

export default ShippingScreen
