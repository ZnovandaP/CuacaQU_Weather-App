import img from '../../assets/images/darkmode.svg'

class NavigasiBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark" style="background: linear-gradient(to right, #06283d, #256d85, #3698d9)">
				<div class="container">
					<a class="navbar-brand brand" href="#jumbotron">CuacaQu | Weather App</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav ms-auto fw-normal position-relative list-menu">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#prolog">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" href="#wheather">Current Weather</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" href="#about">About</a>
							</li>
							<li class="nav-link">
								<img class="rounded-circle dark-icon" src="${img}" alt="Dark Mode Icon" id="darkIcon" />
							</li>
						</ul>
					</div>
				</div>
			</nav>
    `
  }
}

customElements.define('navigasi-bar', NavigasiBar)
