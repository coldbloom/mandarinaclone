import AboutTable from '@/templates/about-table/AboutTable'
import React from 'react'
import Header from '../Home/header/Header'
import MailingComp from '../Home/mailing-comp/MailingComp'
import { CookiePageData } from './cookie-page.data'
import style from './CookiePage.module.scss'

const CookiePage = () => {
	return (
		<>
			<div className='bg-gray-wrapper'>
				<Header />
			</div>
			<div className={style.content}>
				<h1>SIA “iSYTC” sīkdatņu izmantošanas politika</h1>
				<div>
					{CookiePageData.map((el, key) => (
						<AboutTable key={key}>
							<h2>
								<p>{key + 1}</p>
								{el.header}
							</h2>
							<div>
								<ol>
									{el.text.map((el, key) => (
										<li key={key}>
											<span>{key + 1}. </span>
											{el}
										</li>
									))}
								</ol>
							</div>
						</AboutTable>
					))}
				</div>
			</div>
			<MailingComp />
		</>
	)
}

export default CookiePage
