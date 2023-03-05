import React from 'react'
import logoBlue from '@/assets/images/header/header-logo.svg'

import Hamburger from 'hamburger-react'
import MobileMenu from './MobileMenu/MobileMenu'

const HeaderMobile = () => {
	const [isOpen, setOpen] = React.useState(false)
	React.useEffect(() => {
		isOpen
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'scroll')
	}, [isOpen])

	return (
		<>
			<header className='header-mobile'>
				<div className='container-xxl'>
					<div className='header-container px-15px'>
						<img
							src={logoBlue}
							alt='Mandarina'
							className='logoBlue'
						/>

						<div className='block md:hidden flex flex-row'>
							<div className='flex items-center box-border'>
								<Hamburger
									toggled={isOpen}
									toggle={setOpen}
									size={20}
									duration={0.3}
									color='black'
								/>
							</div>
						</div>
					</div>
				</div>
			</header>
			{isOpen && <MobileMenu closed={() => setOpen(false)} />}
		</>
	)
}

export default HeaderMobile
