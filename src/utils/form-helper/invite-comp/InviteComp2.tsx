import React, { FC } from 'react'
import './InviteComp.scss'
import searchIcon from '@/assets/images/IconSearch.svg'
import MainForm from '../../../templates/main-form/MainForm'
import bgImg from '@/assets/images/BG Image.jpg'

const InviteComp2: FC<any> = ({ setTours, timeData, setTimeData,searchToursMain }) => {
	return (
		<div className={`inviteComp2 mt-[190px] mainBg2`} >
			<div className='container-xxl'>
				<div className='row'>
					<div className='col-12'>
						<h1 className='title-first-screen'>
							Поиск по путешествию
						</h1>
					</div>
				</div>
				<MainForm
					setTours={setTours}
					timeData={timeData}
					setTimeData={setTimeData}
					searchToursMain={searchToursMain}
				/>
			</div>
		</div>
	)
}

export default InviteComp2
