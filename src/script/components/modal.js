class ModalId extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
						</div>
						<div class="modal-body"></div>
						<div class="modal-footer text-center">
							<p class="text-muted m-auto">&copy; CuacaQu | Wheather App</p>
						</div>
					</div>
				</div>
			</div>
    `
  }
}

customElements.define('modal-id', ModalId)
