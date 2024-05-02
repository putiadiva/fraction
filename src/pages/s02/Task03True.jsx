import { React, useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Form, Button } from 'react-bootstrap'
import Pic1 from '../../assets/feedback03.png'
import Pic4 from '../../assets/112212.png'

function Task03True() {
	const [isNext, setIsNext] = useState(false)
	const handleLanjut = () => {
		window.location.href = '/s02/task04'
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
									Yay! Kamu berhasil menjawabnya!
									<br />
									<br />
									Pecahan memiliki penyebut dan pembilang.{' '}
									<span>Penyebut</span> ditulis di bawah, dan{' '}
									<span>pembilang</span> ditulis di atas.
									Penyebut adalah berapa bagian{' '}
									<span>keseluruhannya</span>. Pembilang
									adalah bagian{' '}
									<span>yang sedang kita hitung</span>.
								</MyBubbleChat>
							</Col>
						</Row>
						<Row className="middle-row my-center">
							<Image
								src={Pic1}
								style={{ maxWidth: '360px' }}
							></Image>
						</Row>
						<Row className="bottom-row">
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
							<Col>
								<MyBubbleChat>
									<span>
										Lihat bagian yang berwarna hijau!
									</span>{' '}
									Karena kamu mengambil 1 potong brownies dari
									12 potong yang ada, maka kamu mengambil 1/12
									brownies.
									<br />
									<br />
									<span>
										Lihat bagian yang berwarna merah muda!
									</span>{' '}
									Kawanmu mengambil 2 potong brownies dari 12
									potong yang ada, maka kawanmu mengambil 2/12
									brownies.
								</MyBubbleChat>
							</Col>
						</Row>
						<Row className="middle-row my-center">
							<Image
								src={Pic4}
								style={{ maxWidth: '360px' }}
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

export default Task03True
