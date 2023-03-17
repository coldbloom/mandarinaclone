import Button from '@/components/ui/button/Button'
import { PostQueryService } from '@/services/post-query/PostQuery'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import './MailingComp.scss'

const MailingComp = () => {
	const [value, setValue] = useState('')
	const sendMailQuery = useMutation(
		'send-mail',
		(mail: string) => PostQueryService.subscribeNews(mail),
		{
			onSuccess: () => {
				toast.success('Вы успешно подписались')
			}
		}
	)
	const sendMail = (e: any) => {
		e.preventDefault()
		if (sendMailQuery.isLoading || !value) return
		sendMailQuery.mutate(value)
	}
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
							<form>
								<div className='subscribe_input_wrap'>
									<input
										type='email'
										name='email'
										value={value}
										onChange={e => setValue(e.target.value)}
										placeholder='Ваша э-почта'
										required
									/>
									<Button
										type='submit'
										className='hvr-event'
										onClick={e => sendMail(e)}
									>
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
