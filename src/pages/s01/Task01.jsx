import { React, useState } from 'react'
import '../../App.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Pizza1 from '../../assets/PIZZA_SLICE_1.png'
import Pizza2 from '../../assets/PIZZA_SLICE_2.png'
import Pizza3 from '../../assets/PIZZA_SLICE_3.png'
import Loyang from '../../assets/PIZZA_ON_LOYANG.png'
import PakDengklek from '../../assets/PAK_DENGKLEK.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyBackgroundS01 from './MyBackgroundS01'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Form } from 'react-bootstrap'

function Task01() {
	const [isMulai, setIsMulai] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [userinfo, setUserInfo] = useState({
		languages: [],
		response: [],
	})

	const handleMulai = () => {
		setIsMulai(true)
	}

	const handleCek = () => {
		console.log(userinfo.languages)
		console.log(userinfo.response)

		let arr = userinfo.languages

		if (arr.includes('a') && !arr.includes('b') && !arr.includes('c')) {
			console.log('benar !!!!!')
			window.location.href = '/s01/task02'
		} else {
			console.log('salah !!!!!')
			setShowModal(true)
		}
	}

	const handleChange = (e) => {
		// Destructuring
		const { value, checked } = e.target
		const { languages } = userinfo

		console.log(`${value} is ${checked}`)

		// Case 1 : The user checks the box
		if (checked) {
			setUserInfo({
				languages: [...languages, value],
				response: [...languages, value],
			})

			console.log(userinfo.response)
		}

		// Case 2  : The user unchecks the box
		else {
			setUserInfo({
				languages: languages.filter((e) => e !== value),
				response: languages.filter((e) => e !== value),
			})
			console.log(userinfo.response)
		}
	}

	const handleClose = () => {
		setShowModal(false)
	}

	return (
		<MyBackgroundS01>
			<div className="my-container">
				<Row className="top-row">
					<Col
						className="my-center"
						style={{
							maxWidth: '100px',
						}}
					>
						<Image src={Narrator} style={{ maxHeight: '120px' }} />
					</Col>
					<Col style={{ display: 'flex', alignItems: 'center' }}>
						<MyBubbleChat>
							Pak Dengklek membuat satu loyang pizza yang besar.
							Pak Dengklek ingin <span>membagikannya</span> kepada
							kamu dan tiga orang temanmu.
							<br />
							<br />
							Ayo bantu Pak Dengklek untuk{' '}
							<span>memotong pizza</span> sehingga kamu dan tiga
							orang kawanmu mendapatkan bagian yang{' '}
							<span>sama besar</span>!
						</MyBubbleChat>
					</Col>
				</Row>

				{!isMulai && (
					<Row className="my-center middle-row">
						<Image
							src={PakDengklek}
							style={{
								height: '200px',
								width: 'auto',
								// flexGrow: '1',
							}}
						></Image>
						<Image
							src={Loyang}
							style={{
								height: '200px',
								width: 'auto',
								// flexGrow: '1',
							}}
						></Image>
					</Row>
				)}

				{isMulai && (
					<>
						<Row className="middle-row">
							<Form>
								<Row>
									<Col>
										<Form.Group>
											<Col className="my-center">
												<Image
													src={Pizza1}
													style={{ height: '200px' }}
												/>
											</Col>
											<Col className="my-center">
												<Form.Check
													inline
													name="group1"
													style={{
														transform: 'scale(1.5)',
													}}
													onChange={handleChange}
													value="a"
												/>
											</Col>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group>
											<Col className="my-center">
												<Image
													src={Pizza2}
													style={{ height: '200px' }}
												/>
											</Col>
											<Col className="my-center">
												<Form.Check
													inline
													name="group1"
													style={{
														transform: 'scale(1.5)',
													}}
													onChange={handleChange}
													value="b"
												/>
											</Col>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group>
											<Col className="my-center">
												<Image
													src={Pizza3}
													style={{ height: '200px' }}
												/>
											</Col>
											<Col className="my-center">
												<Form.Check
													inline
													name="group1"
													style={{
														transform: 'scale(1.5)',
													}}
													onChange={handleChange}
													value="c"
												/>
											</Col>
										</Form.Group>
									</Col>
								</Row>
							</Form>
						</Row>
					</>
				)}

				{isMulai && (
					<Row className="bottom-row">
						<div className="d-grid gap-2">
							<Button
								size="lg"
								disabled={userinfo.response.length == 0}
								onClick={handleCek}
							>
								Cek
							</Button>
						</div>
					</Row>
				)}

				{!isMulai && (
					<Row className="bottom-row">
						<div className="d-grid gap-2">
							<Button size="lg" onClick={handleMulai}>
								Mulai
							</Button>
						</div>
					</Row>
				)}

				<Modal
					show={showModal}
					onHide={handleClose}
					centered
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Belum tepat!</Modal.Title>
					</Modal.Header>
					{/* className="test-bg" */}
					<Modal.Body>Ayo coba lagi!</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleClose}>
							Saya akan coba lagi!
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</MyBackgroundS01>
	)
}

export default Task01
