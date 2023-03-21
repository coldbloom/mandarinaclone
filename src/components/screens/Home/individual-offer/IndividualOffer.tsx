import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './IndividualOffer.scss'

const IndividualOffer = () => {
	const { t, i18n } = useTranslation()
	return (
		<div className='container-xxl individual_offer_container'>
			<div className='row'>
				<div className='col-12'>
					<div className='individual_offer_body'>
						<h3 className='individual_offer_title'>
							{t('mb_get_offer')}
						</h3>
						<p className='individual_offer_description'>
						{t('we_find_variant')}
						</p>
						<Link to='/get-offer'>
							<button className='btn_individual_offer hvr-event'>
							{t('get')}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IndividualOffer
