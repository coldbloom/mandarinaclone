import React, { FC } from 'react'
import './InviteComp.scss'
import searchIcon from '@/assets/images/IconSearch.svg'
import MainForm from '../../../templates/main-form/MainForm'

const InviteComp2: FC<any> = ({ setTours, timeData, setTimeData }) => {
	return (
		<div className='inviteComp2 mt-[190px]'>
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
				/>
			</div>
		</div>
	)
}

export default InviteComp2
