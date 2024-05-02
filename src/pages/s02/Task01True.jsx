import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Form, Button } from 'react-bootstrap'
import Equal from '../../assets/EQUAL.png'
import Perempat from '../../assets/pizza-perempat.png'

function Task01True() {
	const handleLanjut = () => {
		window.location.href = '/s02/nar02'
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
							Yey! Kamu berhasil membagi pizza menjadi 4 bagian
							yang sama besar. Kamu mendapatkan seperempat (1/4)
							bagian, kawanmu juga mendapatkan seperempat,
							seperempat, dan seperempat bagian.{' '}
							<span>Empat bagian seperempat</span> disatukan
							menjadi <span>satu</span>, yaitu satu pizza yang{' '}
							<span>utuh</span>.
						</MyBubbleChat>
					</Col>
				</Row>
				<Row className="middle-row my-center">
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							alignItems: 'center',
						}}
					>
						<div>
							<Image
								src={Equal}
								style={{
									height: '280px',
									width: 'auto',
									// flexGrow: '1',
								}}
							></Image>
						</div>
						<div>
							<Image
								src={Perempat}
								style={{
									height: '220px',
									width: 'auto',
									// flexGrow: '1',s
								}}
							></Image>
						</div>
					</div>
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

export default Task01True
