import React from 'react'
import './PrincipleWork.scss'
import AdvantagesCard from './AdvantagesCard'

import iconbox1 from '@/assets/images/icon box.png'
import iconbox2 from '@/assets/images/icon box2.png'
import iconbox3 from '@/assets/images/icon box3.png'
import { useTranslation } from 'react-i18next'

const PrincipleWork = () => {
	const { t, i18n } = useTranslation()
	return (
		<div className='container-xxl mt_block principle-work'>
			<div className='row'>
				<div className='col-12'>
					<h3 className='block_title text-center'>
						{t('principle_operation')}
					</h3>
					<p className='block_description text-center'>
						{t('Mandarina aplikācijai ir vairākas priekšrocības')}
					</p>
				</div>
				<div className='col-12'>
					<div className='advantages'>
						<AdvantagesCard
							image={iconbox1}
							title={t('compliance_with_deadlines')}
							description={t('compliance_with_deadlines_desc')}
						/>
						<AdvantagesCard
							image={iconbox2}
							title={t('quality_assurance')}
							description={t('quality_assurance_desc')}
						/>
						<AdvantagesCard
							image={iconbox3}
							title={t('favorable_prices')}
							description={t('favorable_prices_desc')}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PrincipleWork
