class CardWheather extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <div class="card col-md-9 text-center m-auto shadow mb-4 card-wheather">
    <div class="card-header py-3">
      <form class="d-flex" role="search">
        <input class="form-control" id="search-input" type="search" placeholder="Masukan Nama Kota ..." aria-label="Search" />
        <button type="button" class="btn btn-primary fw-semibold" id="button-submit">Cari</button>
      </form>
    </div>

    <div class="body-card"></div>

    <div class="card-footer">
      <div class="btn-group btn-group-sm m-auto w-75" role="group" aria-label="Small button group">
        <button type="button" class="btn active btn-outline-success button-lang" data-lang="id">Bahasa Indonesia</button>
        <button type="button" class="btn btn-outline-success button-lang" data-lang="en">English</button>
      </div>
      <p class="text-center text-muted mb-0 mt-2">&copy; CuacaQu | Wheather App</p>
    </div>
  </div>
</div>
    `
  }
}

customElements.define('wheather-card', CardWheather)
