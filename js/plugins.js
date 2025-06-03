// Check if elements exist before loading optional dependencies
const hasToastList = document.querySelectorAll("[toast-list]").length > 0;
const hasChoices = document.querySelectorAll("[data-choices]").length > 0;
const hasDatePicker = document.querySelectorAll("[data-provider]").length > 0;

// Only load scripts if their functionality is needed
if (hasToastList) {
    import('https://cdn.jsdelivr.net/npm/toastify-js');
}

if (hasChoices) {
    import('./libs/choices.js/public/assets/scripts/choices.min.js');
}

if (hasDatePicker) {
    import('./libs/flatpickr/flatpickr.min.js');
}