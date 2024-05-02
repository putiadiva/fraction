import React from 'react'
import '../../App.css'
import MyBackgroundS01 from './MyBackgroundS01'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Form, Button } from 'react-bootstrap'

function Bridging01() {
	const handleLanjut = () => {
		window.location.href = '/s01/task06'
	}
	return (
		<MyBackgroundS01>
			<div className="my-container">
				<Row style={{ flex: '0 0 auto' }}>
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
					<Col>
						<MyBubbleChat>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Praesentium pariatur dolorem similique
							aspernatur labore assumenda obcaecati voluptatum
							provident commodi numquam, laboriosam, veniam nihil
							eveniet, voluptates porro ad voluptas incidunt at.
						</MyBubbleChat>
					</Col>
				</Row>
				<Row
					className="my-center"
					style={{
						display: 'flex',
						alignItems: 'center',
						flexGrow: '1',
					}}
				>
					{/* <Image src={Sama} style={{ maxWidth: '360px' }}></Image> */}
				</Row>
				<Row style={{ flex: '0 0 auto' }}>
					<div className="d-grid gap-2">
						<Button size="lg" onClick={handleLanjut}>
							Mengerti, lanjut!
						</Button>
					</div>
				</Row>
			</div>
		</MyBackgroundS01>
	)
}

export default Bridging01
