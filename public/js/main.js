const $editButton = document.getElementById('editButton')
const $inputs = document.querySelectorAll('.forform')
const $editForm = document.getElementById('editForm')



$editButton?.addEventListener('click', async (event) => {
    event.preventDefault();
    $inputs.forEach(element => {
        element.style.display = "block"
    });
    const newButtonHtml = `<button type="submit" 
    class="btn btn-primary btn-lg" 
    id="submitButton">Save Changes</input>`
    $editButton.outerHTML = newButtonHtml

    $editForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const response = await fetch(`/profile/${event.target.dataset.entryid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.name.value,
                surname: event.target.surName.value,
                email: event.target.email.value,
            })
        })
        if(response.ok){
            window.location.href='/profile'
        }

        // const responseJson = await response.json();
        // console.log(responseJson)
        // if (responseJson.ok) {
        //    
        // }
        // if (!responseJson.isUpdateSuccessful) {
        //     const errorDiv = document.createElement('div');
        //     errorDiv.classList.add('error');
        //     errorDiv.innerText = responseJson.errorMessage;
        //     event.target.parentElement.append(errorDiv);
        //     return;
        // }
    });
})








