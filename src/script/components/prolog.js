import img from '../../assets/images/ilustrasi.svg'

class Prolog extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <article id="prolog">
      <div class="container-fluid justify-content-around row position-relative overflow-hidden py-5 py-md-5 m-0 my-3 text-center" id="background-prolog" style="background-color: #c3eeff">

        <div class="col-md-6 p-lg-0 mx-auto my-5 mt-5">
          <h1 class="display-4 fw-semibold fs-1">CuacaQu</h1>
          <p class="lead fw-normal px-lg-2 fs-6">
            CuacaQu Merupakan Website Weather App yang memanfaatkan public API <span class="fst-italic">(Application Programming Interface)</span> dari Website <a href="https://openweathermap.org/api">OpenWeather</a>, yang mana WebApp ini dapat menyajikan data yang
            dinamis. Data tersebut merupakan data prakiraan cuaca dari berbagai Kota diseluruh dunia
          </p>
          <a class="btn btn-primary shadow px-5" id="button-started" href="#wheather">Get Started</a>
        </div>

        <div class="col-md-6 mt-5">
          <img class="img-fluid mw-75 mh-50" src="${img}" alt="Ilustrasi Animasi Orang Sedang Menujukan Papan Tulis" />
        </div>
      </div>
    </article>
    `
  }
}

customElements.define('prolog-cuacaqu', Prolog)
