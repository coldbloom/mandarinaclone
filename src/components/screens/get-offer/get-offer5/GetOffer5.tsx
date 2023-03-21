import SearchBox from '@/templates/main-form/SearchBox'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import GetOfferButton from '../ui/get-offer-button/GetOfferButton'
import GetOfferSearchBox from '../ui/get-offer-search-box/GetOfferSearchBox'
import { PropsGetOfferState } from './get-offer5.interface'
import style from './GetOffer5.module.scss'

const GetOffer5: FC<PropsGetOfferState> = ({ state, setState }) => {
	const handlerClick = () => {
		setState(state => ({ ...state, step: state.step + 1 }))
	}
	const { t } = useTranslation()
	return (
		<div className={style.getOffer5}>
			<div className={style.header}>
				<h1>{t('suggestions_and_comments')}</h1>
				<h2>
					{t(
						'if_you_have_any_additional_requests_or_comments_in_connection_with_the_trip_write_to_us'
					)}
				</h2>
			</div>
			<div className={style.textarea}>
				<textarea
					value={state.comment}
					placeholder={t('hotel_room_type_catering_other') || ''}
					onChange={e =>
						setState(state => ({
							...state,
							comment: e.target.value
						}))
					}
				/>
			</div>
			<GetOfferButton onClick={() => handlerClick()}>
				{t('next_step')}
			</GetOfferButton>
		</div>
	)
}

export default GetOffer5
