const formData = {
    email: "",
    message: "",
}
const form = document.querySelector(".feedback-form");

const localStorageKey = "feedback-form-state";

const textarea = form.elements.message;

textarea.value = localStorage.getItem(localStorageKey) ?? "";

const email = form.elements.email;

email.value = localStorage.getItem(localStorageKey) ?? "";


form.addEventListener("input", (event) => {
    localStorage.setItem(localStorageKey, event.target.value);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`Email: ${form.elements.email.value}, Message: ${form.elements.message.value}`);
    localStorage.removeItem(localStorageKey);
    form.reset();
});


