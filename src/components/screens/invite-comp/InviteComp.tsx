import React from 'react'
import './InviteComp.scss'
import searchIcon from '@/assets/images/IconSearch.svg'
import MainForm from '../../../templates/main-form/MainForm'

const InviteComp = () => {
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
				<MainForm />
			</div>
		</div>
	)
}

export default InviteComp
