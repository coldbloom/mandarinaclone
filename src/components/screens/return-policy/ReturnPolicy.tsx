import AboutTable from '@/templates/about-table/AboutTable'
import React, { FC } from 'react'
import Footer from '../footer/Footer'
import Header from '../Home/header/Header'
import MailingComp from '../Home/mailing-comp/MailingComp'
import { ReturnPolicyData } from './return-policy.data'
import style from './ReturnPolicy.module.scss'

const ReturnPolicy:FC<any> = ({lang,setLang}) => {
	return (
		<>
			<div className='bg-gray-wrapper'>
				<Header lang={lang} setLang={setLang}/>
			</div>
			<div className={style.content}>
				<h1>Noteikumu par atteikuma tiesību izmantošanu</h1>
				<div>
					<AboutTable>
						<h2>
							<p>1 <span>_3223</span></p>
							<div>
								IZMANTOJOT MANDARINA TRAVEL, SIA “ISYTC”,
								REĢISTRĀCIJAS NR. 40103282473, JURIDISKĀ ADRESE
								KATRINAS DAMBIS 24B-12, RĪGA, LV-1045, LATVIJA,
								(TURPMĀK – MANDARINA.LV) KĀ STARPNIEKA SNIEGTOS
								PAKALPOJUMUS, JUMS IR TIESĪBAS ATTEIKTIES NO
								PAKALPOJUMA, KURU IEGĀDĀJĀTIES AR MĀJAS LAPAS
								WWW.MANDARINA.LV STARPNIECĪBU ŠĀDOS GADĪJUMOS UN
								KĀRTĪBĀ:
							</div>
						</h2>
						<div>
							<ol>
								<li>
									<span>1. </span>
									Klientam ir tiesības atgūt 100% no
									iemaksātās pasūtījuma cenas, ja: Klients ir
									veicis apmaksu par pakalpojumu, bet
									pakalpojums vairs nav pieejams vai to
									iegādājies cits Klients, kura pieprasījums
									jau ticis apstrādāts; Klients veicis
									pakalpojuma priekšapmaksu, bet pakalpojuma
									cenai ir notikusi svārstība – tā ir
									palielinājusies vai samazinājusies;
								</li>
								<li>
									<span>2. </span>
									Gadījumā, ja Klients ir veicis pilnu samaksu
									par pakalpojumu, bet ir nolēmis atteikties
									no pakalpojuma un nav piepildījušies
									1.punktā norādītie nosacījumi, atteikuma
									tiesības īstenojamas saskaņā ar tūrisma
									pakalpojuma sniedzēja noteikumiem par
									atteikuma tiesību īstenošanu, ar kuriem
									Klients varēs iepazīties, iegādājoties
									attiecīgo tūrisma pakalpojumu.
								</li>
								<li>
									<span>3. </span>
									Klientam nav tiesību saņemt atmaksu par
									pakalpojumu, ja Klients patvaļīgi pārtrauc
									tūrisma pakalpojumu vai atsakās no kāda
									apmaksātā papildpakalpojuma tūrisma
									pakalpojuma izmantošanas laikā. Kompensācija
									par neizmantoto pakalpojuma daļu netiek
									atgriezta.
								</li>
								<li>
									<span>4. </span>
									Lai izmantotu atteikuma tiesības, Klientam
									ir pienākums informēt par to Mandarina.lv,
									nosūtot rakstveida iesniegumu uz
									Mandarina.lv juridisko adresi vai ē-pasta
									adresi info@mandarina.lv, izmantojot
									Mandarina.lv atteikuma veidlapu vai
									noformējot iesniegumu brīvā formā, kurā
									iekļauta šāda informācija: Vārds, uzvārds;
									Adrese; Telefons; Bankas konts; Iegādātais
									pakalpojums; Pakalpojuma pilna cena un tās
									samaksas datums;
								</li>
								<li>
									<span>5. </span>
									Naudas atgriešana par anulētu tūrisma
									pakalpojumu tiks veikta tādā maksājuma
									formā, kāda izmantota veicot pasūtījumu.
									Nauda tiks atgriezta personai, kas veikusi
									sākotnējo maksājumu uz to norēķinu kontu, no
									kura tika veikts maksājums.
								</li>
								<li>
									<span>6. </span>
									Mandarina.lv ir tiesības pārliecināties par
									klienta identitāti, pieprasot iesniegt
									personu apliecinošus dokumentus
								</li>
							</ol>
						</div>
					</AboutTable>
				</div>
			</div>
			<MailingComp />
			<Footer />
		</>
	)
}

export default ReturnPolicy
