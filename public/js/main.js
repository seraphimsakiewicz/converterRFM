const $editButton = document.getElementById('editButton')
const inputs = document.querySelectorAll('.forform')

$editButton?.addEventListener('click',async(event)=>{
    event.preventDefault();
    inputs.forEach(element => {
        element.style.display="block"
    });
})