<script lang="ts">
	import Title from '$lib/components/Title.svelte';

	let isNavPanelShow = true;
	let isTitlesShow = true;
	let bgColor = 'bg-light';
	let textColor = 'text-dark';
	let fontFamily = 'Segoe UI';
	let fontSize = 1.2;
	let lineHeight = 1.25;
	let articleInterval = 0.75;
	let colors = [
		{ name: 'light', description: 'Белый' },
		{ name: '2', description: 'Светло-бежевый' },
		{ name: '3', description: 'Бежевый' },
		{ name: '4', description: 'Серый' },
		{ name: 'dark', description: 'Тёмный' }
	];
</script>

<Title
	title="Молитвы о воинах"
	isShow={isNavPanelShow}
	{bgColor}
	isTitlesButtonClicked={() => (isTitlesShow = true)}
	isSettingsButtonClicked={() => (isTitlesShow = false)}
/>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="{bgColor} {textColor} pb-1"
	style="font-size: {fontSize}em; padding: 0 .7em; font-family: {fontFamily}; line-height:{lineHeight}em; --article-interval:{articleInterval}em"
	on:click={() => (isNavPanelShow = !isNavPanelShow)}
>
	<div id="t1">
		<h5>МОЛИТВА О МИРЕ И ЕДИНСТВЕ РУССКОЙ ЦЕРКВИ И НАРОДА</h5>
		<p>
			Господи Боже сил, Боже спасения нашего, призри в милости на смиренныя рабы Твоя, услыши и
			помилуй нас: се бо брани хотящия ополчишася на Святую Русь, чающе разделити и погубити единый
			народ ея.
		</p>
		<p>Возстани, Боже, в помощь людем Твоим и подаждь нам силою Твоею победу.</p>
		<p>
			Верным чадам Твоим, о единстве Русския Церкви ревнующим, поспешествуй, в духе братолюбия
			укрепи их и от бед избави. Запрети раздирающим во омрачении умов и ожесточении сердец ризу
			Твою яже есть Церковь Живаго Бога, и замыслы их ниспровергни.
		</p>
		<p>Благодатию Твоею власти предержащия ко всякому благу настави и мудростию обогати!</p>
		<p>
			Воины и вся защитники Отечества нашего в заповедех Твоих утверди, крепость духа им низпосли,
			от смерти, ран и пленения сохрани!
		</p>
		<p>
			Лишенныя крова и в изгнании сущия в домы введи, алчущия напитай, недугующия и страждущия
			укрепи и исцели, в смятении и печали сущим надежду благую и утешение подаждь!
		</p>
		<p>
			Всем же во дни сия убиенным и от ран и болезней скончавшимся прощение грехов даруй и блаженное
			упокоение сотвори!
		</p>
		<p>
			Исполни нас яже в Тя веры, надежды и любве, возстави паки во всех странах Святой Руси мир и
			единомыслие, друг ко другу любовь обнови в людях Твоих, яко да единеми усты и единем сердцем
			исповемыся Тебе, Единому Богу в Троице славимому. Ты бо еси заступление, и победа, и спасение
			уповающим на Тя и Тебе славу возсылаем, Отцу и Сыну и Святому Духу, ныне и присно, и во веки
			веков. Аминь.
		</p>
	</div>
	<div id="t2">
		<h5>МОЛИТВА БОЖИЕЙ МАТЕРИ</h5>
		<p>
			О многострадальная Мати Божия, Превысшая всех дщерей земли, по чистоте Своей и по множеству
			страданий, Тобою на земли перенесенных, приими многоболезненныя воздыхания наша и сохрани нас
			под кровом Твоея милости. Иного бо прибежища и теплаго предстательства разве Тебе не вемы, но,
			яко дерзновение имущая ко Иже из Тебе рожденному, помози и спаси ны молитвами Своими, да
			непреткновенно достигнем Царствия Небеснаго, идеже со всеми святыми будем воспевать в Троице
			единому Богу ныне и присно, и во веки веков. Аминь.
		</p>
	</div>
	<div id="t3">
		<h5>МОЛИТВА ГОСПОДУ ИИСУСУ ХРИСТУ О ЗДРАВИИ ВОЕННОСЛУЖАЩЕГО</h5>
		<p>
			Господи Иисусе Христе, Сыне Божий, молитв ради Пречистыя Твоея Матери услыши мя, недостойную
			рабу (раба) (имя).
		</p>
		<p>
			Господи, в милостивой власти Твоей чада мои (чадо мое), рабы Твои (имена), помилуй и спаси их,
			Имени Твоего ради.
		</p>
		<p>Господи, прости им все согрешения вольные и невольные, совершенные ими пред Тобою.</p>
		<p>
			Господи, настави их на истинный путь Твоих заповедей, и разум просвети светом Христовым во
			спасение души и исцеление тела.
		</p>
		<p>
			Господи, благослови их службу в армии, на суше, воздухе и в море, в пути, летании и плавании и
			на каждом месте Твоего владычества.
		</p>
		<p>
			Господи, сохрани их силою Честного и Животворящего Креста Твоего под кровом Твоим святым от
			летящей пули, стрелы, меча, огня, от смертоносной раны, водного потопления и напрасной смерти.
		</p>
		<p>
			Господи, огради их от всяких видимых и невидимых врагов, от всякой беды, зол, несчастий,
			предательства и плена.
		</p>
		<p>
			Господи, исцели их от всякой болезни и раны, от всякия скверны и облегчи их душевные
			страдания.
		</p>
		<p>
			Господи, даруй им благодать Духа Твоего Святаго на многие годы жизни, здравия и целомудрия во
			всяком благочестии и любви в мире и единодушии с окружающими их начальствующими, ближними и
			дальними людьми.
		</p>
		<p>
			Господи, умножь и укрепи им умственные способности и телесные силы, здравы и благополучны
			возврати их в родительский дом.
		</p>
		<p>
			Всеблагий Господи, даруй мне, недостойной и грешной рабе Твоей (имя), родительское
			благословение на чад моих (имена) в настоящее время утра, дня, ночи, ибо Царствие Твое вечно,
			всесильно и всемогущественно.
		</p>
	</div>
	<div id="t4">
		<h5>МОЛИТВА ЗА РОССИЮ И ВОИНСТВО ЕЕ</h5>
		<p>
			Господи Боже наш, послушавый Моисеа, простерша к Тебе руце, и люди Израилевы укрепивый на
			Амалика, ополчивый Иисуса Навина на брань, и повелевый солнцу стати: Ты и ныне, Владыко
			Господи, услыши нас, молящихся Тебе: укрепи силою Твоею Родину нашу, умножи славу ея победами
			над супостаты: утверди всесильною десницею Твоею державу нашу, сохрани воинство ея, отыми от
			нас всяк глад и пагубу, и избави ны от огня и меча и нападения враг, и от всякаго востания
			противнаго: Посли, Господи, невидимо десницу Твою, раби Твоя заступающую во всех: яко Твоя
			держава, царство и сила, от Тебе помощь все приемлем, на Тя уповаем, и Тебе славу возсылаем,
			Отцу и Сыну и Святому Духу, ныне и присно, и во веки веков. Аминь.
		</p>
	</div>
	<div id="t5">
		<h5>МОЛИТВА ЗА НАРОД ПРАВОСЛАВНЫЙ</h5>
		<p>
			Господи Боже наш, великий и многомилостивый! Во умилении сердец наших смиренно молимся Тебе.
			Сохрани под кровом Твоея благости от всякаго злаго обстояния нас, христиан православных.
			Огради нас на всех путях наших святыми Твоими Ангелы, да ничтоже успеет враг на нас, и сын
			беззакония не приложит озлобити нас. Исполни нас долготою дней и крепостию сил, да совершим
			вся во славу Твою и во благо народа своего. Да всеблагому Твоему промышлению о нас радующеся,
			на всяк день и час благословим и прославим всесвятое имя Твое: Отца и Сына и Святаго Духа.
			Аминь.
		</p>
	</div>
	<div id="t6">
		<h5>ПОКАЯННАЯ МОЛИТВА, КОТОРУЮ ЧИТАЛИ В ЦЕРКВАХ В РОССИИ ВО ДНИ СМУТЫ</h5>
		<p>
			Господи Боже, Вседержителю, призри на нас, грешных и недостойных чад Твоих, согрешивших пред
			Тобою, прогневавших благость Твою, навлекших гнев Твой праведный на ны, падших во глубину
			греховную. Ты зриши, Господи, немощь нашу и скорбь душевную, веси растление умов и сердец
			наших, оскудение веры, отступление от заповедей Твоих, умножение нестроений семейных,
			разъединения и раздоры церковныя, Ты зриши печали и скорби наша, от болезней, гладов,
			потопления, нападения и междоусобныя брани происходящыя. Но, Премилостивый и Человеколюбивый
			Господи, вразуми, настави и помилуй нас, недостойных. Исправи жизнь нашу греховную, утоли
			раздоры и нестроения, собери расточенныя, соедини разсеянныя, подаждь мир стране нашей и
			благоденствие, избави ю от тяжких бед и несчастий. Всесвятый Владыко, просвети разум наш
			светом учения Евангельскаго, возгрей сердца наша теплотою благодати Твоея и направи я к
			деланию заповедей Твоих, да прославится в нас всесвятое и преславное имя Твое, Отца и Сына и
			Святаго Духа, ныне и во веки веков. Аминь.
		</p>
	</div>
	<div id="t7">
		<h5>МОЛИТВА СВЯТОМУ АРХИСТРАТИГУ БОЖИЮ АРХАНГЕЛУ МИХАИЛУ</h5>
		<p>
			Святый и великий Архистратиже Божий Михаиле, ниспровергий с небесе диавола и воинство его! К
			тебе с верою прибегаем и тебе с любовию молимся, буди щит несокрушим и забрало твердо Святей
			Церкви и православному Отечествию нашему, ограждая их молниеносным мечем твоим от всех враг
			видимых и невидимых. Буди Ангел хранитель, наставник премудр и споспешник предводителем нашим.
			Буди вождь и соратай непобедимь христолюбивому воинству нашему, венчая его славою и победами
			над супостаты, да познают вси противляющиися нам, яко с нами Бог и святии Ангелы Его. Аминь.
		</p>
	</div>
	<div id="t8">
		<h5>святому мученику Иоанну Воину</h5>
		<p>
			О, мучениче Христов Иоанне Воине! Храбрый во бранех, и скорый заступник православных христиан
			в бедах и напастях их, по данной благодати от Бога! Буди нам поборник крепок на вся видимыя и
			невидимыя враги наша. Воинству нашему на враги победу даруй, да смирятся противящиися нам и
			вразумятся, и Бога истиннаго познают и святую Его Церковь Православную. Мы же, грешнии, да
			сподобимся прославляти Господа Спаса нашего во Царствии Его вкупе с тобою во веки. Аминь.
		</p>
	</div>
	<div id="t9">
		<h5>Святому Георгию Победоносцу</h5>
		<p>
			О всехвальный, святый великомучениче и чудотворче Георгие! Умоли Человеколюбца Бога, скорый
			помощниче всех призывающих тя, да не осудит нас, грешных, по беззаконием нашым, но да сотворит
			с нами по велицей Своей милости и подаст православному Отечеству нашему и всему боголюбивому
			воинству на супостаты одоление; да укрепит государство Российское непременяемым миром и
			благословением; изряднее же да оградит нас святых Ангел Своих ополчением, во еже избавитися
			нам, по исходе нашем из жития сего, от козней лукаваго и тяжких воздушных мытарств его, и
			неосужденным предстати престолу Господа славы. Аминь.
		</p>
	</div>
	<div id="t10">
		<h5>Святым благоверным князьям Российским, страстотерпцам Борису и Глебу</h5>
		<p>
			О двоице священная, святии страстотерпцы Борисе и Глебе, от юности Христу верою, чистотою и
			любовию послужившии, и кровьми вашими яко багряницею украсившиися, и ныне со Христом
			царствующии! Будите нам теплии заступницы, оградите всех нас от всякий скорби, озлоблений и
			внезапныя смерти. Молим вас, христолюбивии страстотерпцы, споспешествуйте державе Российстей к
			победе на враги, якоже некогда благоверному князю Александру Невскому на Ледовом побоище
			Чудском и на брегах Невы. Да несут Российстии воини страх врагам, свободу угнетенным народам и
			мир на земли, да в тихом житии поживут людие и во всяком благочестии славят Бога Отца и Сына и
			Святаго Духа. Аминь.
		</p>
	</div>
	<div id="t11">
		<h5>Святому благоверному князю Александру Невскому</h5>
		<p>
			Скорый помощниче всех усердно к тебе прибегающих и теплый наш пред Господом предстателю,
			святый благоверный великий княже Александре! Призри милостивно на ны недостойныя, из глубины
			сердца к тебе взывающыя. Ты в житии твоем ревнитель и защитник православный веры был еси: и
			нас в ней теплыми твоими к Богу молитвами непоколебимы утверди. Ты великое возложенное на тя
			служение тщательно проходил еси: и нас твоею помощию пребывати коегождо, в неже призван есть,
			настави. Ты, победив полки супостатов, от пределов Российских отгнал еси: и на нас
			ополчающихся всех видимых и невидимых врагов низложи. Ты, оставив тленный венец царства
			земнаго, избрал еси безмолвное житие, и ныне праведно венцем нетленным увенчанный на небесех
			царствуеши: исходатайствуй и нам, смиренно молим тя, житие тихое и безмятежное, и к вечному
			Царствию шествие неуклонное. Предстоя же со всеми святыми престолу Божию, молися о всех
			православных христианех, да сохранит их Господь Бог Своею благодатию в мире, здравии,
			долгоденствии и всяком благополучии в должайшая лета, да присно славим Бога во Святей Троице,
			Отца и Сына и Святаго Духа. Аминь.
		</p>
	</div>
</div>

<div
	class="sticky-bottom w-100 {bgColor != 'bg-dark'
		? 'bg-dark'
		: 'bg-4'} text-light px-3 pt-2 pb-3 {isNavPanelShow ? '' : 'collapse'}"
>
	<div />
	{#if isTitlesShow}
		<div class="d-flex align-items-center justify-content-between mb-2">
			<div class="d-flex align-items-center gap-2 mt-1">
				<i class="fa-regular fa-rectangle-list" />
				<b>Оглавление</b>
			</div>
			<button
				class="btn btn-sm bg-light text-dark position-absolute end-0 me-2"
				on:click={() => (isNavPanelShow = false)}
			>
				<i class="fa-solid fa-xmark" />
			</button>
		</div>
		<div class="d-flex flex-column gap-0">
			<a href="#t1"><h6>1. МОЛИТВА О МИРЕ И ЕДИНСТВЕ РУССКОЙ ЦЕРКВИ И НАРОДА</h6></a>
			<a href="#t2"><h6>2. МОЛИТВА БОЖИЕЙ МАТЕРИ</h6></a>
			<a href="#t3"><h6>3. МОЛИТВА ГОСПОДУ ИИСУСУ ХРИСТУ О ЗДРАВИИ ВОЕННОСЛУЖАЩЕГО</h6></a>
			<a href="#t4"><h6>4. МОЛИТВА ЗА РОССИЮ И ВОИНСТВО ЕЕ</h6></a>
			<a href="#t5"><h6>5. МОЛИТВА ЗА НАРОД ПРАВОСЛАВНЫЙ</h6></a>
			<a href="#t6"><h6>6. ПОКАЯННАЯ МОЛИТВА, КОТОРУЮ ЧИТАЛИ В ЦЕРКВАХ В РОССИИ ВО ДНИ СМУТЫ</h6></a
			>
			<a href="#t7"><h6>7. МОЛИТВА СВЯТОМУ АРХИСТРАТИГУ БОЖИЮ АРХАНГЕЛУ МИХАИЛУ</h6></a>
			<a href="#t8"><h6>8. Святому мученику Иоанну Воину</h6></a>
			<a href="#t9"><h6>9. Святому Георгию Победоносцу</h6></a>
			<a href="#t10"
				><h6>10. Святым благоверным князьям Российским, страстотерпцам Борису и Глебу</h6></a
			>
			<a href="#t11"><h6>11. Святому благоверному князю Александру Невском</h6></a>
		</div>
	{/if}
	{#if !isTitlesShow}
		<div class="d-flex align-items-center justify-content-between mb-2">
			<div class="d-flex align-items-center gap-2 mt-1">
				<i class="fa-solid fa-gear" />
				<b>Настройки</b>
			</div>
			<button
				class="btn btn-sm bg-light text-dark position-absolute end-0 me-2"
				on:click={() => (isNavPanelShow = false)}
			>
				<i class="fa-solid fa-xmark" />
			</button>
		</div>
		<div>
			<div class="d-flex flex-column gap-2 align-items-stretch">
				<div class="btn-group">
					<button class="btn bg-light bg-opacity-75 text-dark w-100">
						<div class="d-flex align-items-center gap-1 text-start">
							<i class="fa-solid fa-paint-roller pt-1" />
							<div class="badge {bgColor} {textColor} text-start">
								{colors.find((c) => c.name == bgColor.replace('bg-', ''))?.description}
							</div>
						</div>
						<div class=" text-start">Цвет фона</div>
					</button>
					<ul class="dropdown-menu">
						{#each colors as color}
							<li>
								<button
									class="dropdown-item"
									on:click={() => {
										bgColor = 'bg-' + color.name;
										if (textColor.replace('text-', '') == bgColor.replace('bg-', '')) {
											if (bgColor == 'bg-dark') textColor = 'text-light';
											else textColor = 'text-dark';
										}
									}}
								>
									<div class="d-flex align-items-center gap-2">
										<div class="border bg-{color.name}" style="width: 1.2em; height:1.2em" />
										<div>{color.description}</div>
									</div>
								</button>
							</li>
						{/each}
					</ul>
					<button class="btn btn-secondary" data-bs-toggle="dropdown">
						<i class="fa-solid fa-chevron-up m-2" style="font-size: .9em;" />
					</button>
				</div>
				<div class="btn-group">
					<button class="btn bg-light bg-opacity-75 text-dark w-100">
						<div class="d-flex align-items-center gap-1 text-start">
							<i class="fa-solid fa-paintbrush pt-1" />
							<div class="badge {textColor} text-start">
								{colors.find((c) => c.name == textColor.replace('text-', ''))?.description}
							</div>
						</div>
						<div class="text-start">Цвет шрифта</div>
					</button>
					<ul class="dropdown-menu">
						{#each colors as color}
							{#if color.name != bgColor.replace('bg-', '')}
								<li>
									<button class="dropdown-item" on:click={() => (textColor = 'text-' + color.name)}>
										<div class="d-flex align-items-center gap-2">
											<div class="border bg-{color.name}" style="width: 1.2em; height:1.2em" />
											<div>{color.description}</div>
										</div>
									</button>
								</li>
							{/if}
						{/each}
					</ul>
					<button class="btn btn-secondary" data-bs-toggle="dropdown">
						<i class="fa-solid fa-chevron-up m-2" style="font-size: .9em;" />
					</button>
				</div>
				<div class="btn-group">
					<button class="btn bg-light bg-opacity-75 text-dark w-100">
						<div class="d-flex flex-column justify-content-center">
							<div class="d-flex align-items-center gap-1 pt-1">
								<i class="fa-solid fa-font" />
								<div class="badge bg-dark text-light" style="font-family: {fontFamily};">
									{fontFamily}
								</div>
							</div>
							<div class="text-start">Название шрифта</div>
						</div>
					</button>
					<ul class="dropdown-menu">
						<li>
							<button class="dropdown-item" on:click={() => (fontFamily = 'Jost')}>
								<div class="d-flex align-items-center gap-2" style="font-family: 'Jost'">Jost</div>
							</button>
						</li>
						<li>
							<button class="dropdown-item" on:click={() => (fontFamily = 'Lora')}>
								<div class="d-flex align-items-center gap-2" style="font-family: 'Lora">Lora</div>
							</button>
						</li>
						<li>
							<button class="dropdown-item" on:click={() => (fontFamily = 'Roboto')}>
								<div class="d-flex align-items-center gap-2" style="font-family:'Roboto">
									Roboto
								</div>
							</button>
						</li>
					</ul>
					<button class="btn btn-secondary" data-bs-toggle="dropdown">
						<i class="fa-solid fa-chevron-up m-2" style="font-size: .9em;" />
					</button>
				</div>
				<div class="btn-group">
					<button class="btn bg-light bg-opacity-75 text-dark w-100">
						<div class="d-flex flex-column justify-content-center">
							<div class="d-flex align-items-center gap-1 pt-1">
								<i class="fa-solid fa-text-height" />
								<div class="badge bg-dark text-light">{Math.round(fontSize * 100) / 100}</div>
							</div>
							<div class="text-start">Размер шрифта</div>
						</div>
					</button>
					<button class="btn btn-secondary" on:click|stopPropagation={() => (fontSize += 0.05)}
						><i class="fa-solid fa-plus m-2" /></button
					>
					<button class="btn btn-secondary" on:click|stopPropagation={() => (fontSize -= 0.05)}
						><i class="fa-solid fa-minus m-2" /></button
					>
				</div>
				<div class="btn-group">
					<button class="btn bg-light bg-opacity-75 text-dark w-100">
						<div class="d-flex flex-column justify-content-center">
							<div class="d-flex align-items-center gap-1 pt-1">
								<i class="fa-solid fa-arrow-down-up-across-line" />
								<div class="badge bg-dark text-light">{Math.round(lineHeight * 100) / 100}</div>
							</div>
							<div class="text-start">Интервал строк</div>
						</div>
					</button>
					<button class="btn btn-secondary" on:click|stopPropagation={() => (lineHeight += 0.05)}
						><i class="fa-solid fa-plus m-2" /></button
					>
					<button class="btn btn-secondary" on:click|stopPropagation={() => (lineHeight -= 0.05)}
						><i class="fa-solid fa-minus m-2" /></button
					>
				</div>
				<div class="btn-group">
					<button class="btn bg-light bg-opacity-75 text-dark w-100">
						<div class="d-flex flex-column justify-content-center">
							<div class="d-flex align-items-center gap-1 pt-1">
								<i class="fa-solid fa-arrows-up-to-line" />
								<div class="badge bg-dark text-light">
									{Math.round(articleInterval * 100) / 100}
								</div>
							</div>
							<div class="text-start">Интервал абзацев</div>
						</div>
					</button>
					<button
						class="btn btn-secondary"
						on:click|stopPropagation={() => (articleInterval += 0.05)}
						><i class="fa-solid fa-plus m-2" /></button
					>
					<button
						class="btn btn-secondary"
						on:click|stopPropagation={() => (articleInterval -= 0.05)}
						><i class="fa-solid fa-minus m-2" /></button
					>
				</div>
			</div>
		</div>
	{/if}
	<div class="badge bg-primary bg-opacity-10 mt-2 text-wrap" hidden>
		Чтобы скрыть оглавление/настройки нажмите на экран с текстом молитв.
	</div>
</div>

<style>
	@font-face {
		font-family: 'Jost';
		src: local('Jost'), url(/fonts/Jost/static/Jost-Regular.ttf);
	}
	@font-face {
		font-family: 'Lora';
		src: local('Lora'), url(/fonts/Lora/static/Lora-Regular.ttf);
	}
	@font-face {
		font-family: 'Roboto';
		src: local('Roboto'), url(/fonts/Roboto/Roboto-Regular.ttf);
	}

	:global(p) {
		margin-bottom: var(--article-interval);
	}
	:root {
		--article-interval: 1;
	}

	a {
		text-decoration: none;
		color: var(--bs--text-light);
	}

	.active {
		color: var(--bs--text-light) !important;
	}

	.bg-1 {
		background: #f0ece2;
	}

	.bg-2 {
		background: #dfd3c3;
	}

	.bg-3 {
		background: #c7b198;
	}

	:global(.bg-4) {
		background: #596e79;
	}

	.text-1 {
		color: #f0ece2;
	}

	.text-2 {
		color: #dfd3c3;
	}

	.text-3 {
		color: #c7b198;
	}

	.text-4 {
		color: #596e79;
	}
</style>
