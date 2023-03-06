import React, { FC } from 'react'
import './InviteComp.scss'
import searchIcon from '@/assets/images/IconSearch.svg'
import MainForm from '../../../templates/main-form/MainForm'

const InviteComp:FC<any> = ({setTours,timeData,setTimeData}) => {
	return (
		<div className='inviteComp'>
			<div className='container-xxl'>
				<div className='row'>
					<div className='col-12'>
						<h1 className='title-first-screen'>
							Найдите путешествие своей мечты с “Mandarina”
						</h1>
					</div>
				</div>
				<MainForm setTours={setTours} timeData={timeData} setTimeData={setTimeData}/>
			</div>
		</div>
	)
}

export default InviteComp
