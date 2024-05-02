import { React } from 'react'
import '../../App.css'
import MyBackground from './MyBackground'
import { Row, Image, Button } from 'react-bootstrap'
import PakDengklek2 from '../../assets/PAK_DENGKLEK_7.png'
import Friends from '../../assets/friends_icon.png'

function Narration06() {
	const handleLanjut = () => {
		window.location.href = '/s03/task06'
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
							Setelah menyimak penjelasan Pak Dengklek, kamu dan
							kawan-kawanmu beristirahat sebentar sambil menikmati
							udara Taman Matematika. Pak Dengklek mengeluarkan
							papan dan kapur dan berkata...
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
									Apakah teman-teman ingat garis bilangan?
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
									Hmm... Sepertinya saya ingat saya pernah
									meletakkan bilangan-bilangan 0, 1, 2, 3, dan
									seterusnya pada sebuah garis...
								</div>
							</div>
						</div>
					</div>
				</Row>
				<Row className="bottom-row">
					<div className="d-grid gap-2">
						<Button size="lg" onClick={handleLanjut}>
							Hmm...
						</Button>
					</div>
				</Row>
			</div>
		</MyBackground>
	)
}

export default Narration06
