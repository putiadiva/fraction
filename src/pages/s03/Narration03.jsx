import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import { Row, Image, Button } from 'react-bootstrap'
import PakDengklek from '../../assets/PAK_DENGKLEK.png'
import Friends from '../../assets/friends_icon.png'

function Narration03() {
	const handleLanjut = () => {
		window.location.href = '/s03/task03'
	}
	return (
		<MyBackground>
			<div className="my-container" style={{ padding: '8px' }}>
				<Row className="middle-row">
					<div
						style={{
							justifyContent: 'space-around',
							padding: '40px',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginBottom: '12px',
							}}
						>
							<Image
								src={PakDengklek}
								style={{ width: '120px' }}
							/>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<div
									style={{
										backgroundColor: '#badec4',
										padding: '12px',
										marginLeft: '12px',
										borderRadius: '12px',
									}}
								>
									Silakan ambil browniesnya!
								</div>
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginBottom: '12px',
							}}
						>
							<Image src={Friends} style={{ height: '60px' }} />
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<div
									style={{
										backgroundColor: '#ebbfb0',
										padding: '12px',
										marginLeft: '12px',
										borderRadius: '12px',
									}}
								>
									Asik! Kelihatannya enak sekali!
								</div>
							</div>
						</div>
						<div style={{ marginBottom: '12px' }}>
							Kemudian kamu mengambil satu potong brownies dan
							seorang kawanmu mengambil 2 potong.
						</div>
					</div>
				</Row>
				<Row className="bottom-row">
					<div className="d-grid gap-2">
						<Button size="lg" onClick={handleLanjut}>
							Lanjut!
						</Button>
					</div>
				</Row>
			</div>
		</MyBackground>
	)
}

export default Narration03
