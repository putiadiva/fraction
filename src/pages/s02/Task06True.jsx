import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button } from 'react-bootstrap'
import Pic5 from '../../assets/numline_parallel.png'

function Task06True() {
	const handleLanjut = () => {
		window.location.href = '/s02/task07'
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
					<Col>
						<MyBubbleChat>
							Kamu telah mempelajari <span>letak</span> pecahan di
							garis bilangan!
							<br />
							<br />
							Sebagaimana bilangan bulat bisa kita letakkan di
							garis bilangan, bilangan pecahan juga bisa kita
							letakkan di garis bilangan.
							<br />
							<br />
							Perhatikan garis bilangan di bawah ini!
						</MyBubbleChat>
					</Col>
				</Row>
				<Row className="middle-row my-center">
					<Image src={Pic5} style={{ maxWidth: '380px' }}></Image>
				</Row>
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

export default Task06True
