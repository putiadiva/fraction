import { React, useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button } from 'react-bootstrap'
import Sama from '../../assets/sama.png'
import Pic1 from '../../assets/seper12.png'

function Task02True() {
	const [isNext, setIsNext] = useState(false)
	const handleLanjut = () => {
		window.location.href = '/s02/task02b'
	}
	const handleNext = () => {
		setIsNext(true)
	}
	return (
		<MyBackground>
			<div className="my-container">
				{!isNext && (
					<>
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
							<Col
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<MyBubbleChat>
									Yey! Kamu sudah mengetahui cara memotong
									yang benar. Brownies berhasil dipotong
									menjadi <span>12 bagian</span>.
									Masing-masing bagian menjadi{' '}
									<span>1/12</span>.
								</MyBubbleChat>
							</Col>
						</Row>
						<Row className="middle-row my-center">
							<Image src={Pic1} style={{ maxWidth: '280px' }} />
						</Row>
						<Row style={{ flex: '0 0 auto' }}>
							<div className="d-grid gap-2">
								<Button size="lg" onClick={handleNext}>
									Selanjutnya
								</Button>
							</div>
						</Row>
					</>
				)}

				{isNext && (
					<>
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
							<Col
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<MyBubbleChat>
									Walaupun{' '}
									<span>cara memotongnya berbeda</span>, 1/12
									bagian pada gambar A <span>sama</span>{' '}
									dengan 1/12 bagian pada gambar B.
								</MyBubbleChat>
							</Col>
						</Row>
						<Row className="middle-row my-center">
							<Image
								src={Sama}
								style={{
									height: '300px',
									width: 'auto',
									// flexGrow: '1',
								}}
							></Image>
						</Row>
						<Row className="bottom-row">
							<div className="d-grid gap-2">
								<Button size="lg" onClick={handleLanjut}>
									Mengerti, lanjut!
								</Button>
							</div>
						</Row>
					</>
				)}
			</div>
		</MyBackground>
	)
}

export default Task02True
