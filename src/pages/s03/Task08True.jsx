import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button } from 'react-bootstrap'
import Pic1 from '../../assets/numline_merge_color.png'
import Pic2 from '../../assets/numline_parallel_color.png'

function Task08True() {
	const handleLanjut = () => {
		window.location.href = '/s03/task09'
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
							style={{ maxWidth: '50%', height: 'auto' }}
						/>
					</Col>
					<Col style={{ display: 'flex', alignItems: 'center' }}>
						<MyBubbleChat>
							Yap! Untuk membandingkannya, kamu bisa lihat
							posisinya di garis bilangan.
						</MyBubbleChat>
					</Col>
				</Row>
				<Row className="middle-row ">
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							alignItems: 'center',
						}}
					>
						<Image src={Pic2} style={{ maxWidth: '400px' }}></Image>
						<Image src={Pic1} style={{ maxWidth: '600px' }}></Image>
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

export default Task08True
