import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button } from 'react-bootstrap'

function Task08True() {
	const handleLanjut = () => {
		window.location.href = '/s02/task09'
	}
	return (
		<MyBackground>
			<div className="my-container">
				<Row className="top-row">
					<Col
						className="my-center"
						style={{
							maxWidth: '100px',
						}}
					>
						<Image
							src={Narrator}
							style={{ maxWidth: '100%', height: 'auto' }}
						/>
					</Col>
					<Col style={{ display: 'flex', alignItems: 'center' }}>
						<MyBubbleChat>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Debitis repellat fugiat officia tenetur
							maiores. Expedita distinctio ipsum debitis
							perspiciatis beatae tempore earum neque possimus
							tempora, fugit aliquam! Rem, quia possimus?
						</MyBubbleChat>
					</Col>
				</Row>
				<Row className="middle-row my-center">lalallalalala</Row>
				<Row className="bottom-row">
					<div className="d-grid gap-2">
						<Button size="lg" onClick={handleLanjut}>
							Mengerti, lanjut!
						</Button>
					</div>
				</Row>
			</div>
		</MyBackground>
	)
}

export default Task08True
