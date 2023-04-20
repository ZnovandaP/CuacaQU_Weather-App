import img from '../../assets/images/author.JPG'

class AboutCuacaqu extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <article id="about">
				<div class="d-flex container-fluid align-items-center justify-content-around row position-relative overflow-hidden py-3 py-md-4 m-0 mt-3 text-center" style="background-color: #c3eeff" id="background-about">
					<h1 class="text-center mb-3 title-about">About Author</h1>
					<img class="col-md-4 px-0 mb-3 my-0 rounded-3 mw-50 mh-50 border border-3 border-white shadow" style="object-fit: cover; object-position: center;" src="${img}" alt="Photo Author" loading="lazy">

					<div class="col-md-7">
						<p class="text-start fw-normal fs-6 paragraph">
						Hallo Reviewer <a href="https://www.dicoding.com/">Dicoding</a>, pertama-tama saya ucapkan Terimakasih karena telah berkunjung ke Website buatan saya. Perkenalkan nama saya Zidane Novanda Putra, saya sering dipanggil Zidan. Saya lahir di Kabupaten Purbalingga, Jawa
						Tengah pada Tanggal 17 November 2003. Pada Project kali ini saya membuat sebuah website app yang bertujan untuk memberikan informasi mengenai perkiraan cuaca hari ini dari berbagai kota di seluruh dunia. untuk menampilakan data/informasi tersebut saya memanfaatkan public API dari <a href="https://openweathermap.org/api">OpenWeather</a>. Semoga dengan project ini saya dapat mendapatkan beasiswa Front-end Web Development ke tahap Expert. 
					</p>
					<!-- kumpulan link sosmed author -->
					<div aria-label="breadcrumb text-center">
						<ol class="breadcrumb text-dark link-group">
							<li class="breadcrumb-item"><a href="https://github.com/ZnovandaP">Github</a></li>
							<li class="breadcrumb-item"><a href="https://www.linkedin.com/in/zidane-novanda-putra-58a9b3227/">LinkedIn</a></li>
							<li class="breadcrumb-item"><a href="https://www.instagram.com/znovanda_p/">Instagram</a></li>
							<li class="breadcrumb-item"><a href="https://m.facebook.com/zidane.n.putra.3">Facebook</a></li>
						</ol>
					</div>
			</article>
    `
  }
}

customElements.define('about-cuacaqu', AboutCuacaqu)
