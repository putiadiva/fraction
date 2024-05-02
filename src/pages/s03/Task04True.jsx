import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button } from 'react-bootstrap'
import Pic1 from '../../assets/112212.png'

function Task04True() {
	const handleLanjut = () => {
		window.location.href = '/s03/nar05'
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
							Kamu berhasil <span>membandingkan</span> pecahan!
							<br />
							<br />
							Dapat dilihat pada gambar bahwa bagian temanmu (yang
							berwarna merah muda) lebih banyak daripada bagianmu
							(yang berwarna hijau). Bisa kita tuliskan{' '}
							<span>2/12 {'>'} 1/12</span>
						</MyBubbleChat>
					</Col>
				</Row>
				<Row className="middle-row my-center">
					<Image src={Pic1} style={{ maxWidth: '380px' }}></Image>
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

export default Task04True
