import { React, useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button } from 'react-bootstrap'
import Pic1 from '../../assets/numline_merge_color.png'
import Pic2 from '../../assets/numline_parallel_color.png'
import Pic3 from '../../assets/numline_0_2a.png'
import VerticalFraction from './VerticalFraction'
import Tepung from '../../assets/tepung.png'
import Sirup from '../../assets/sirup.png'
import Menara from '../../assets/menara.png'
import Bayi from '../../assets/bayi.png'

function Task07True() {
	const [isNext, setIsNext] = useState(false)
	const handleLanjut = () => {
		window.location.href = '/s02/nar08'
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
							<Col>
								<MyBubbleChat>
									Kamu berhasil menempatkan pecahan di garis
									bilangan!
									<br />
									<br />
									Perhatikan garis bilangan di sebelah kanan!
									Garis bilangan di sebelah <span>
										kanan
									</span>{' '}
									adalah <span>gabungan</span> dari keempat
									garis bilangan di sebelah <span>kiri</span>.
								</MyBubbleChat>
							</Col>
						</Row>
						<Row className="middle-row">
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-evenly',
									alignItems: 'center',
								}}
							>
								<Image
									src={Pic2}
									style={{ maxWidth: '400px' }}
								></Image>
								<Image
									src={Pic1}
									style={{ maxWidth: '600px' }}
								></Image>
							</div>
						</Row>
						<Row className="bottom-row">
							<div className="d-grid gap-2">
								<Button size="lg" onClick={handleNext}>
									Lanjut
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
									Pecahan adalah <span>bilangan</span>,
									sehingga bisa kita letakkan di{' '}
									<span>garis bilangan</span>.
									<br />
									<br />
									Mari kita lihat bagaimana kita menggunakan
									pecahan di kehidupan kita!
								</MyBubbleChat>
							</Col>
						</Row>
						<Row className="middle-row">
							<Row className="my-center">
								<Image src={Pic3} style={{ width: '900px' }} />
							</Row>
							<Row
								style={{
									paddingLeft: '80px',
									paddingRight: '80px',
								}}
							>
								<Col>
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
										}}
									>
										<Image
											src={Tepung}
											style={{ height: '80px' }}
										/>
										<div
											style={{
												marginLeft: '18px',
												display: 'flex',
												alignItems: 'center',
											}}
										>
											Kakak membeli{' '}
											<VerticalFraction
												numerator={1}
												denominator={2}
											/>{' '}
											kg tepung.
										</div>
									</div>
								</Col>
								<Col>
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
										}}
									>
										<Image
											src={Sirup}
											style={{ height: '80px' }}
										/>
										<div
											style={{
												marginLeft: '18px',
												display: 'flex',
												alignItems: 'center',
											}}
										>
											Ibu membawa{' '}
											<VerticalFraction
												numerator={1}
												denominator={2}
											/>{' '}
											liter sirup.
										</div>
									</div>
								</Col>
							</Row>
							<Row
								style={{
									paddingLeft: '80px',
									paddingRight: '80px',
								}}
							>
								<Col>
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
										}}
									>
										<Image
											src={Menara}
											style={{ height: '80px' }}
										/>
										<div
											style={{
												marginLeft: '18px',
												display: 'flex',
												alignItems: 'center',
											}}
										>
											Tinggi menara itu adalah 6{' '}
											<VerticalFraction
												numerator={3}
												denominator={4}
											/>{' '}
											meter.
										</div>
									</div>
								</Col>
								<Col>
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
										}}
									>
										<Image
											src={Bayi}
											style={{ height: '80px' }}
										/>
										<div
											style={{
												marginLeft: '18px',
												display: 'flex',
												alignItems: 'center',
											}}
										>
											Berat bayi ini adalah 3{' '}
											<VerticalFraction
												numerator={1}
												denominator={4}
											/>
											{'  '}
											kg.
										</div>
									</div>
								</Col>
							</Row>
						</Row>
						<Row className="bottom-row">
							<div className="d-grid gap-2">
								<Button size="lg" onClick={handleLanjut}>
									Mengerti. Lanjut!
								</Button>
							</div>
						</Row>
					</>
				)}
			</div>
		</MyBackground>
	)
}

export default Task07True
