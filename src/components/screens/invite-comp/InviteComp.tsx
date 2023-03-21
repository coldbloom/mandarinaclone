import React, { FC } from 'react'
import './InviteComp.scss'
import searchIcon from '@/assets/images/IconSearch.svg'
import MainForm from '../../../templates/main-form/MainForm'
import { useTranslation } from 'react-i18next'

const InviteComp:FC<any> = ({setTours,timeData,setTimeData}) => {
	const { t } = useTranslation()
	return (
		<div className='inviteComp pt-[151px] pb-[370px]'>
			<div className='container-xxl'>
				<div className='row'>
					<div className='col-12'>
						<h1 className='title-first-screen'>
							{t('get_travel_dream')}
						</h1>
					</div>
				</div>
				<MainForm setTours={setTours} timeData={timeData} setTimeData={setTimeData}/>
			</div>
		</div>
	)
}

export default InviteComp
