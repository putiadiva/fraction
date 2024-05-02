import React from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import { Row, Image, Button } from 'react-bootstrap'
import PakDengklek from '../../assets/PAK_DENGKLEK_5.png'
import PakDengklek2 from '../../assets/PAK_DENGKLEK.png'
import Friends from '../../assets/friends_icon.png'

function Narration02() {
	const handleLanjut = () => {
		window.location.href = '/s03/task02'
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
									Tahukah kamu, sebesar apa pizza yang pernah
									ada?
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
									Hmm...
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
							<Image
								src={PakDengklek2}
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
									Pizza terbesar yang pernah ada berukuran
									sebesar dua lapangan tennis!
								</div>
							</div>
						</div>
						<div>
							Seru sekali belajar bersama Pak Dengklek. Setelah
							belajar hal baru bersama Pak Dengklek, kamu dan
							kawan-kawanmu menikmati pizza yang diberikan Pak
							Dengklek. Ayo lanjut belajar untuk melihat makanan
							apa lagi yang disediakan Pak Dengklek!
						</div>
					</div>
				</Row>
				<Row className="bottom-row">
					<div className="d-grid gap-2">
						<Button size="lg" onClick={handleLanjut}>
							Ok, lanjut!
						</Button>
					</div>
				</Row>
			</div>
		</MyBackground>
	)
}

export default Narration02
