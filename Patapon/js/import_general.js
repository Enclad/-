document.getElementById('head').innerHTML = `
	<header class="header_area">
		<a href="../main_page.html"> Главная страница </a>
		<a href=""> Мои обращения </a>
		<a href=""> Чат </a>
	</header>
	
	<section class="task_bar_area">
		<div class="task_bar_body">
			<div class="box">
				<h2> Введите ваш вопрос </h2>
				<div class="task_bar">
					<form action="search.html" method="get">
						<input type="search" id="searchbox" autocomplete="off" name="taskbar" placeholder="Поиск...">
						<button type="submit" id="search_confirm"> Поиск </button>
					</form>
				</div>
			</div>
		</div>
	</section>`;