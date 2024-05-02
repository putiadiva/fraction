import { React, useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button, Modal } from 'react-bootstrap'
import VerticalFraction from './VerticalFraction'
import Pic9 from '../../assets/hint06.png'
import Pic10 from '../../assets/feedback03.png'
import Pic11 from '../../assets/numline_parallel.png'

function Task10() {
	const [A, setA] = useState('')
	const [B, setB] = useState('')
	const [C, setC] = useState('')
	const [D, setD] = useState('')
	const [E, setE] = useState('')
	const [F, setF] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [showHint1, setShowHint1] = useState(false)
	const [showHint2, setShowHint2] = useState(false)

	const handleCek = () => {
		if (D === '>' && E === '>' && F === '<') {
			window.location.href = '/s03/task10-true'
		} else {
			setShowModal(true)
		}
	}

	const handleClose = () => {
		setShowModal(false)
	}

	const handleShowHint1 = () => {
		setShowModal(false)
		setShowHint1(true)
	}

	const handleCloseHint1 = () => {
		setShowModal(false)
		setShowHint1(false)
	}

	const handleShowHint2 = () => {
		setShowModal(false)
		setShowHint1(false)
		setShowHint2(true)
	}

	const handleCloseHint2 = () => {
		setShowModal(false)
		setShowHint1(false)
		setShowHint2(false)
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
							Sekarang, tanpa bantuan gambar atau garis bilangan,
							coba bandingkan pecahan-pecahan berikut ini!
							<br />
							<br />
							Isilah kotak-kotak di bawah ini dengan{' '}
							<span>{'='}</span>, <span>{'<'}</span>, atau{' '}
							<span>{'>'}</span>!
						</MyBubbleChat>
					</Col>
				</Row>
				<Row className="middle-row my-center">
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
						}}
					>
						{/* kanan */}
						<div
							style={{
								textAlign: 'center',
							}}
						>
							{/* q04 */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<VerticalFraction
									numerator={1}
									denominator={12}
									fontSize={'22px'}
								/>

								<input
									type="text"
									style={{
										fontSize: '20px',
										width: '60px',
										marginLeft: '6px',
										marginRight: '6px',
									}}
									onChange={(e) => setD(e.target.value)}
								/>
								<VerticalFraction
									numerator={1}
									denominator={14}
									fontSize={'22px'}
								/>
							</div>
							{/* e o q04 */}

							{/* q05 */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<VerticalFraction
									numerator={1}
									denominator={2}
									fontSize={'22px'}
								/>

								<input
									type="text"
									style={{
										fontSize: '20px',
										width: '60px',
										marginLeft: '6px',
										marginRight: '6px',
									}}
									onChange={(e) => setE(e.target.value)}
								/>
								<VerticalFraction
									numerator={1}
									denominator={8}
									fontSize={'22px'}
								/>
							</div>
							{/* e o q05 */}

							{/* q06 */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<VerticalFraction
									numerator={1}
									denominator={2}
									fontSize={'22px'}
								/>

								<input
									type="text"
									style={{
										fontSize: '20px',
										width: '60px',
										marginLeft: '6px',
										marginRight: '6px',
									}}
									onChange={(e) => setF(e.target.value)}
								/>
								<VerticalFraction
									numerator={1}
									denominator={1}
									fontSize={'22px'}
								/>
							</div>
							{/* e o q06 */}
						</div>
						{/* e o kanan */}
					</div>
				</Row>
				<Row className="bottom-row">
					<div className="d-grid gap-2">
						<Button
							size="lg"
							onClick={handleCek}
							disabled={D === '' || E === '' || F === ''}
						>
							Cek
						</Button>
					</div>
				</Row>

				<Modal
					show={showModal}
					onHide={handleClose}
					centered
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>
							<b>Belum tepat!</b>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>Belum tepat. Coba lagi!</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleClose}>
							Saya akan coba lagi
						</Button>
						<Button variant="secondary" onClick={handleShowHint1}>
							Saya butuh bantuan
						</Button>
					</Modal.Footer>
				</Modal>

				{/* Hint 1 */}
				<Modal
					show={showHint1}
					onHide={handleCloseHint1}
					centered
					backdrop="static"
					keyboard={false}
					size="lg"
				>
					<Modal.Header closeButton>
						<Modal.Title>Hint 1</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Perhatikan garis-garis bilangan berikut!
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<Image src={Pic11} style={{ width: '400px' }} />
						</div>
						<br />
						Pada garis-garis bilangan di atas, kita bisa melihat
						beberapa <span>&quot;unit fractions&quot;</span>{' '}
						(pecahan yang pembilangnya adalah 1). Perhatikan bahwa
						1/2 terletak lebih kanan dari 1/3. 1/3 terletak lebih
						kanan dari 1/4.
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleCloseHint1}>
							Ok. Saya akan coba lagi
						</Button>
						<Button variant="secondary" onClick={handleShowHint2}>
							Pembilang & Penyebut ?
						</Button>
					</Modal.Footer>
				</Modal>

				{/* Hint 2 */}
				<Modal
					show={showHint2}
					onHide={handleCloseHint2}
					centered
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Hint 2</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="my-center">
							<Image src={Pic10} style={{ width: '220px' }} />
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleCloseHint2}>
							Ok. Saya akan coba lagi
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</MyBackground>
	)
}

export default Task10
