import { React, useState } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import { Row, Image, Button } from 'react-bootstrap'
import PakDengklek from '../../assets/PAK_DENGKLEK.png'
import PakDengklek2 from '../../assets/PAK_DENGKLEK_7.png'
import Friends from '../../assets/friends_icon.png'

function Narration05() {
	const [isNext, setIsNext] = useState(false)
	const handleLanjut = () => {
		window.location.href = '/s03/task05'
	}
	const handleNext = () => {
		setIsNext(true)
	}
	return (
		<MyBackground>
			<div className="my-container" style={{ padding: '8px' }}>
				{!isNext && (
					<>
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
											Dari potongan-potongan brownies ini,
											kita bisa belajar matematika.
											Menyenangkan bukan?
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
										src={Friends}
										style={{ height: '60px' }}
									/>
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
											Ya! Banyak yang saya pelajari dari
											brownies ini!
										</div>
									</div>
								</div>
							</div>
						</Row>
						<Row className="bottom-row">
							<div className="d-grid gap-2">
								<Button size="lg" onClick={handleNext}>
									Lanjut!
								</Button>
							</div>
						</Row>
					</>
				)}

				{isNext && (
					<>
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
											Selain bisa dibandingkan, pecahan
											juga bisa dijumlahkan, lho!
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
										src={Friends}
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
												backgroundColor: '#ebbfb0',
												padding: '12px',
												marginLeft: '12px',
												borderRadius: '12px',
											}}
										>
											Wah, pecahan bisa dijumlahkan?
											Apakah penjumlahannya sama seperti
											penjumlahan bilangan bulat?
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
											Pertanyaan bagus! Yuk cari tahu!
										</div>
									</div>
								</div>
							</div>
						</Row>
						<Row className="bottom-row">
							<div className="d-grid gap-2">
								<Button size="lg" onClick={handleLanjut}>
									Ok, yuk!
								</Button>
							</div>
						</Row>
					</>
				)}
			</div>
		</MyBackground>
	)
}

export default Narration05
