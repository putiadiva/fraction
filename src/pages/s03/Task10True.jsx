import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import MyBubbleChat from './MyBubbleChat'
import Narrator from '../../assets/narrator_icon.png'
import { Col, Row, Image, Button } from 'react-bootstrap'
import VerticalFraction from './VerticalFraction'

function Task10True() {
	const handleLanjut = () => {
		window.location.href = '/s03/'
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
							Kamu berhasil membandingkan pecahan!
						</MyBubbleChat>
					</Col>
				</Row>
				<Row className="middle-row my-center">
					<div>
						{/* q01 */}
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
							<span
								style={{
									fontSize: '24px',
									color: 'black',
									marginLeft: '10px',
									marginRight: '10px',
								}}
							>
								{'<'}
							</span>
							<VerticalFraction
								numerator={1}
								denominator={14}
								fontSize={'22px'}
							/>
						</div>
						{/* e o q01 */}

						{/* q02 */}
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

							<span
								style={{
									fontSize: '24px',
									color: 'black',
									marginLeft: '10px',
									marginRight: '10px',
								}}
							>
								{'<'}
							</span>
							<VerticalFraction
								numerator={1}
								denominator={8}
								fontSize={'22px'}
							/>
						</div>
						{/* e o q02 */}

						{/* q03 */}
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

							<span
								style={{
									fontSize: '24px',
									color: 'black',
									marginLeft: '10px',
									marginRight: '10px',
								}}
							>
								{'>'}
							</span>
							<VerticalFraction
								numerator={1}
								denominator={1}
								fontSize={'22px'}
							/>
						</div>
						{/* e o q03 */}
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

export default Task10True
