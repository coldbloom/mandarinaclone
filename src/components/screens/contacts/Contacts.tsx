import React, { useState } from 'react'
import './Contacts.scss'

import partners1 from '@/assets/images/contacts/partners/image partners.png'
import partners2 from '@/assets/images/contacts/partners/image partners2.png'
import partners3 from '@/assets/images/contacts/partners/image partners3.png'
import partners4 from '@/assets/images/contacts/partners/image partners4.png'
import partners5 from '@/assets/images/contacts/partners/image partners5.png'
import partners6 from '@/assets/images/contacts/partners/image partners6.png'

import headphones from '@/assets/images/contacts/headphones.svg'
import questionMark from '@/assets/images/contacts/question-mark.svg'
import Header from '../Home/header/Header'
import IndividualOffer from '../Home/individual-offer/IndividualOffer'
import MailingComp from '../Home/mailing-comp/MailingComp'
import { PropsSendUs } from '@/services/post-query/post-query.interface'
import { useMutation } from 'react-query'
import { PostQueryService } from '@/services/post-query/PostQuery'
import { toast } from 'react-toastify'

const Contacts = () => {
	const [value, setValue] = useState<PropsSendUs>({
		email: '',
		first_name: '',
		last_name: '',
		phone: '',
		txt_question: ''
	})
	const sendContacts = useMutation(
		'send-contacts',
		() => PostQueryService.sendUs(value),
		{
			onSuccess: () => {
				toast.success('Ваш запрос успешно зарегистрирован')
			}
		}
	)
	const onSubmit = (e: any) => {
		e.preventDefault()
		sendContacts.mutate()
	}
	return (
		<>
			<div className='bg-gray-wrapper'>
				<Header />
			</div>
			<main>
				<div className='contacts'>
					<div className='container-xxl'>
						<div className='row'>
							<div className='col-12'>
								<h1 className='block_title center_title contact_title'>
									Контакты компании Mandarina
								</h1>
								<div className='block_description blog_desc'>
									Контактная информация и реквизиты
								</div>
							</div>
						</div>
						<div className='row contacts_row'>
							<div className='col-12 col-lg-7'>
								<div className='form_contact_wrapper'>
									<form onSubmit={onSubmit}>
										<div className='form_name'>
											Свяжитесь с нами
										</div>
										<div className='input_wpap_contact first'>
											<label htmlFor=''>Имя</label>
											<input
												type='text'
												required
												value={value.first_name}
												onChange={e =>
													setValue(state => ({
														...state,
														first_name:
															e.target.value
													}))
												}
											/>
										</div>
										<div className='input_wpap_contact'>
											<label htmlFor=''>Фамилия</label>
											<input
												type='text'
												required
												value={value.last_name}
												onChange={e =>
													setValue(state => ({
														...state,
														last_name:
															e.target.value
													}))
												}
											/>
										</div>
										<div className='input_wpap_contact'>
											<label htmlFor=''>Э-почта</label>
											<input
												type='email'
												required
												value={value.email}
												onChange={e =>
													setValue(state => ({
														...state,
														email: e.target.value
													}))
												}
											/>
										</div>
										<div className='input_wpap_contact'>
											<label htmlFor=''>
												Номер телефон
											</label>
											<input
												type='text'
												required
												value={value.phone}
												onChange={e =>
													setValue(state => ({
														...state,
														phone: e.target.value
													}))
												}
											/>
										</div>
										<div className='input_wpap_contact'>
											<label htmlFor=''>Ваш запрос</label>
											<textarea
												typeof='text'
												placeholder='Здесь Вы можете задать вопрос или описать ситуацию, с которой Вы столкнулись.'
												value={value.txt_question}
												onChange={e =>
													setValue(state => ({
														...state,
														txt_question:
															e.target.value
													}))
												}
											/>
										</div>
										<button className='send_contact hvr-event'>
											Отправить
										</button>
									</form>
								</div>
							</div>
							<div className='col-12 col-lg-5'>
								<div className='contact_information'>
									<h2 className='requisites_title_txt'>
										Реквизиты
									</h2>
									iSYTC, SIA
									<br />
									<br />
									<span className='fw500'>
										PTAC лицензия:
									</span>
									<a href='/docs/licence.pdf' target='_blank'>
										T-2019-265
									</a>
									<br />
									<span className='fw500'>Юр. адрес:</span>
									Katrīnas dambis 24B - 12, Rīga, LV-1045
									<br />
									<span className='fw500'>Рег. номер:</span>
									40103282473
									<br />
									<span className='fw500'>AS SEB banka:</span>
									LV23UNLA0050015289965
									<br />
									<br />
									<span className='fw500'>SWIFT:</span>
									UNLALV2X
									<br />
								</div>
							</div>
						</div>
					</div>
					<IndividualOffer />
					<div className='container-xxl container_partners'>
						<div className='row'>
							<div className='col-12 row__partners'>
								<img src={partners1} alt='' />
								<img src={partners2} alt='' />
								<img src={partners3} alt='' />
								<img src={partners4} alt='' />
								<img src={partners5} alt='' />
								<img src={partners6} alt='' />
							</div>
						</div>
					</div>
					<div className='container-xxl questions_block'>
						<div className='row'>
							<div className='col-12'>
								<div className='still_questions_title'>
									Остались какие-то вопросы?
								</div>
								<div className='block_description still_questions_description'>
									Свяжитесь с нами удобным для Вас способом.
								</div>
							</div>
						</div>
						<div className='row card_contacts_row'>
							<div className='col-12 col-lg-5'>
								<div className='body_card_contacts for_sale'>
									<img src={headphones} alt='' />
									<div className='body_card_contacts_title'>
										Отдел продаж
									</div>
									<div className='body_card_contacts_description'>
										Для вопросов о сотрудничестве:
									</div>
									<a
										href='mailto:sales@mandarina.lv'
										className='body_card_contacts_a'
									>
										sales@mandarina.lv
									</a>
									<a
										href='tel:+371 26 619 971'
										className='body_card_contacts_a'
									>
										+371 26 619 971
									</a>
								</div>
							</div>
							<div className='col-12 col-lg-5'>
								<div className='body_card_contacts for_help'>
									<img src={questionMark} alt='' />
									<div className='body_card_contacts_title'>
										Отдел помощи
									</div>
									<div className='body_card_contacts_description'>
										Для вопросов о путешествиях:
									</div>
									<a
										href='mailto:info@mandarina.lv'
										className='body_card_contacts_a'
									>
										info@mandarina.lv
									</a>
									<a
										href='tel:+371 26 619 971'
										className='body_card_contacts_a'
									>
										+371 26 619 971
									</a>
								</div>
							</div>
						</div>
					</div>
					<MailingComp />
				</div>
			</main>
		</>
	)
}

export default Contacts
