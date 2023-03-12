import Button from '@/components/ui/button/Button'
import React from 'react'
import './MailingComp.scss'

const MailingComp = () => {
	return (
		<div className='subscribe_offers_container mt_block'>
			<div className='mailing-comp'>
				<div className='container-xxl'>
					<div className='row subscribe_offers_row'>
						<div className='col-12 col-lg-7'>
							<div className='subscribe_offers_title'>
								Получайте новости на свою электронную почту
							</div>
							<div className='subscribe_offers_descr'>
								Отличные предложения, идеи и советы для
								успешного путешествия
							</div>
						</div>
						<div className='col-12 col-lg-5'>
							<form action=''>
								<div className='subscribe_input_wrap'>
									<input
										type='email'
										name='email'
										placeholder='Ваша э-почта'
									/>
									<Button type='submit' className='hvr-event'>
										Подписаться
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className='circle_subsc'></div>
				<div className='circle_subsc2'></div>
				<div className='circle_subsc3'></div>
			</div>
		</div>
	)
}

export default MailingComp
