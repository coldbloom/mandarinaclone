import React, { FC } from 'react'
//import useOnClickOutside from '../inputs-hidden-box/custom-function/useEvent'
import style from './SearchBox.module.scss'

const SearchBox: FC<any> = ({
	styleBox,
	state,
	children,
	index,
	setOpenForm,title,header
}) => {
	return (
		<div style={styleBox} className={`${style.searchBox} box-custom`}>
			<h5>{header}</h5>
			<p
				onClick={e =>setOpenForm(index)
				}
				className={style.input}
			>{title}</p>
			<div
				className={style.children}
			>
				{children}
			</div>
		</div>
	)
}

export default SearchBox
