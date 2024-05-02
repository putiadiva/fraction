import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button } from 'react-bootstrap'
import Penjumlahan from '../../assets/penjumlahan.png'

function Task05True() {
	const handleLanjut = () => {
		window.location.href = '/s02/summary01'
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
							Kamu berhasil melakukan <span>penjumlahan</span>{' '}
							pada pecahan!
							<br />
							<br />
							Sebagaimana bilangan bulat, bilangan pecahan juga
							bisa <span>dijumlahkan</span>.
							<br />
							<br />
							Perhatikan contoh-contoh di bawah!
						</MyBubbleChat>
					</Col>
				</Row>
				<Row className="middle-row my-center">
					<Image
						src={Penjumlahan}
						style={{ maxWidth: '240px' }}
					></Image>
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

export default Task05True
