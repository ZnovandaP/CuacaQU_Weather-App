const renderModalHeaderID = (data) => {
  return `
	<h1 class="modal-title fs-5" id="exampleModalLabel">Detail Informasi Cuaca di ${data.name} (${data.sys.country})</h1>
	<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	`
}

const renderModalBodyID = (cuaca, data) => {
  return `
  <ul class="list-group text-start">
		<li class="list-group-item">
			<strong class="text-primary">Cuaca:</strong> ${cuaca.main}
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Deskripsi Cuaca:</strong> ${cuaca.description}
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Temperatur:</strong> ${data.main.temp}&deg;C
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Temperatur Minimum:</strong> ${data.main.temp_min}&deg;C
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Temperatur Maximum:</strong> ${data.main.temp_max}&deg;C
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Tekanan:</strong> ${data.main.pressure}mbar
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Kelembaban:</strong> ${data.main.humidity}%
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Jarak Pandang:</strong> ${data.visibility}Nm
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Kecepatan Angin:</strong> ${data.wind.speed}Km/j
		</li>
	</ul>
  `
}

const renderModalHeaderEN = (data) => {
  return `
	<h1 class="modal-title fs-5" id="exampleModalLabel">Detail Information Wheather in ${data.name} (${data.sys.country})</h1>
	<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	`
}

const renderModalBodyEN = (cuaca, data) => {
  return `
  <ul class="list-group text-start" style="background-color:#dedede;">
		<li class="list-group-item">
			<strong class="text-primary">Wheather:</strong> ${cuaca.main}
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Wheather Description:</strong> ${cuaca.description}
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Temperature:</strong> ${data.main.temp}&deg;C
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Temperature Minimum:</strong> ${data.main.temp_min}&deg;C
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Temperature Maximum:</strong> ${data.main.temp_max}&deg;C
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Pressure:</strong> ${data.main.pressure}mbar
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Humidity:</strong> ${data.main.humidity}%
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Visibility:</strong> ${data.visibility}Nm
		</li>
		<li class="list-group-item">
			<strong class="text-primary">Wind Velocity:</strong> ${data.wind.speed}Km/j
		</li>
	</ul>
  `
}

export { renderModalHeaderID, renderModalBodyID, renderModalHeaderEN, renderModalBodyEN }
