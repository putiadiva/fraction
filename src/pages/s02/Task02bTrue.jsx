import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button } from 'react-bootstrap'
import Pic from '../../assets/task02btrue.png'

function Task02bTrue() {
	const handleLanjut = () => {
		window.location.href = '/s02/nar03'
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
							Yap! 1/4 pizza <span>tidak sama</span> dengan 1/4
							brownies. <span>Tidak sama</span> pula dengan 1/4
							pudding.
							<br />
							<br />
							Dalam menggunakan pecahan, kita harus{' '}
							<span>memperhatikan</span> bagian utuh yang sedang
							dibicarakan. Apakah itu bagian utuh pizza, bagian
							utuh brownies, dan lain-lain.
						</MyBubbleChat>
					</Col>
				</Row>
				<Row className="middle-row my-center">
					<Image src={Pic} style={{ width: '640px' }} />
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

export default Task02bTrue
