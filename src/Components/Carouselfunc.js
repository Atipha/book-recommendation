import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carouselfunc.css'

const Carouselfunc = () => {
	return (
		<div>
			<Carousel>
			  <Carousel.Item>
			    <img
			      className=""
			      src="https://images.squarespace-cdn.com/content/v1/5202d1b3e4b099a0812c51a3/1483134090134-QOJK8Q9CL5DMFN99XWQO/ke17ZwdGBToddI8pDm48kFjiq_0Ek1NItql1dLmsgNNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGQiKALUW-YxfFfP4p0PvHcTla7NnOOvQwSGt9YLKLGBhEym7bB5Y8EAaW-uC2HxJQ/Before-Sunrise.jpg"
			      alt="First slide"
			    />
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className=""
			      src="https://images2.penguinrandomhouse.com/cover/9781524763138"
			      alt="Second slide"
			    />
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className=""
			      src="https://i.pinimg.com/564x/c7/a3/ef/c7a3efd338f2a023d81cecb0a2dbb175.jpg"
			      alt="Third slide"
			    />
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className=""
			      src="https://www.portersquarebooks.com/sites/portersquarebooks.com/files/thegoldfinch.jpg"
			      alt="Fourth slide"
			    />
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className=""
			      src="https://www.katemorton.com/wp-content/uploads/2019/05/TCD-UK-PB.jpg"
			      alt="Fifth slide"
			    />
			  </Carousel.Item>
			</Carousel>
		</div>
		);
}

export default Carouselfunc;