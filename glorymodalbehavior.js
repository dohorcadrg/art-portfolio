const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const modelimgsrc = button.getAttribute('src')
    const modeltitle = button.getAttribute('data-bs-modeltitle')
    const modelimgdescrip = button.getAttribute('data-bs-modeldescript')
    const modelpicdate = button.getAttribute('data-bs-picdate')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body img')
    const modalDescrip = exampleModal.querySelector('.modelimgdescrip')
    const modalDateDisplay = exampleModal.querySelector('.picdate')

    modalTitle.textContent = modeltitle
    modalBodyInput.src = modelimgsrc
    modalDescrip.textContent = modelimgdescrip
    modalDateDisplay.textContent = modelpicdate

  })
}