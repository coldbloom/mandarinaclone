import React, { FC } from 'react'
import style from './AboutTable.module.scss'

interface PropsTable {
	children: React.ReactNode
}

const AboutTable: FC<PropsTable> = ({ children }) => {
	return <div className={style.table}>{children}</div>
}

export default AboutTable
