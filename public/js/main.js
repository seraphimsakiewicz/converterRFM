const $editButton = document.getElementById('editButton')
const inputs = document.querySelectorAll('.forform')

$editButton?.addEventListener('click', async (event) => {
  event.preventDefault();
  inputs.forEach(element => {
    element.style.display = "block"
  });
})

const $upload = document.querySelector("[data-type-upload]")

$upload?.addEventListener('submit', async (event) => {
  event.preventDefault();
  $upload.insertAdjacentHTML('beforeend', `<div class="flexbox">

  <div>
    <div class="cm-spinner"></div>
  </div>
</div>`)
const $file = document.querySelector("[data-type-input]")
const formData = new FormData(event.target);
// formData.append('file', $file[0]);
  let response = await fetch('/', {
    method: "POST",
    body: formData

  })

  if (response.ok){
    window.location.href = 'http://localhost:3000/profile'
  } else {
    alert('Ошибка при загрузке файла')
  }
})
