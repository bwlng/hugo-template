const form = document.querySelector('[data-form]');

const onSuccess = (response) => {
    const node = document.createElement('div');
    node.classList.add('text-green-500');
    node.innerHTML = `Thank you for your message.`;
    form.appendChild(node);
}

const handleSubmit = event => {
    event.preventDefault()

    const formData = new FormData(form)
    const action = form.dataset.actionUrl

    // Send the form data to the API
    fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
    .then(response => {
        return response
    })
    .then(response => {
        if (response.ok) {
            onSuccess(response)
            // Clear the form
            form.reset()
        }
    })
    .catch(error => {
        console.error("Error:", error)
    })
}

form?.addEventListener("submit", handleSubmit)