import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button } from 'react-bootstrap'

function Summary01() {
	const handleLanjut = () => {
		window.location.href = '/s02/nar06'
	}
	return (
		<MyBackground>
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
							Pecahan adalah lalala (terkait dengan pembagian).
							Pecahan adalah bilangan lalala (konsep yg lebih
							abstrak). Sebagaimana bilangan bulat, pecahan juga
							bisa dioperasikan seperti ditambah, dikurang, kali,
							dan bagi.
							<br />
							<br />
							Perhatikan contoh-contoh di bawah!
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
		</MyBackground>
	)
}

export default Summary01
