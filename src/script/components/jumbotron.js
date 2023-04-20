import img from '../../assets/images/rain.svg'

class JumbotronHeroes extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <div class="container-fluid shadow rounded-4 px-4 py-4 my-3 text-center shadow" id="jumbotron" style="background-color: #c3eeff">
				<img class="d-block mx-auto mb-3" src="${img}" alt="logo CuacaQU" width="72" height="72" />
				<h1 class="display-5 fs-1 fw-semibold">CuacaQu | Weather App</h1>
				<div class="col-lg-6 mx-auto">
					<p class="lead text-center mb-2 fs-5 fw-normal">Website Penyedia Informasi Mengenai Prakiraan Cuaca di Seluruh Dunia dengan Menggunakan Public API <span class="fst-italic">(Application Programming Interface)</span></p>
				</div>
			</div>
    `
  }
}

customElements.define('jumbotron-heroes', JumbotronHeroes)
