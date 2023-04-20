import '../components/cardWheather.js'

const renderCard = (data, cuaca) => {
  return `
  <div class="card-body">
    <h2 class="card-title" style="color:#06283d;" id="${data.name}">(${data.sys.country}) ${data.name}</h2>
    <h3 class="card-text" style="color:#206fa3;">${data.main.temp}&deg;C </h4>
    <h4 class="card-text" style="color:#06283d;">Cuaca: ${cuaca.description}</h4>
    <a href="#" class="btn w-100 mt-2 btn-primary fw-semibold modal-button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-cityid="${data.id}">Informasi Lanjut</a>
  </div>
  `
}

const renderCardEN = (data, cuaca) => {
  return `
  <div class="card-body">
    <h2 class="card-title" style="color:#06283d;" id="${data.name}">(${data.sys.country}) ${data.name}</h2>
    <h3 class="card-text" style="color:#206fa3;">${data.main.temp}&deg;C </h4>
    <h4 class="card-text" style="color:#06283d;">Wheather: ${cuaca.description}</h4>
    <a href="#" class="btn w-100 mt-2 btn-primary fw-semibold modal-button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-cityid="${data.id}">More Information</a>
  </div>
  `
}

export { renderCard, renderCardEN }
