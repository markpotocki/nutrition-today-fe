// Document toggle switch
const TOGGLE_BUTTON_ID = 'toggle-btn';
const TARGET_ATTRIBUTE_VAL = 'data-toggle';
const HIDE_CLASS_NAME = 'hide';
document.getElementById(TOGGLE_BUTTON_ID).addEventListener('click', (e) => {
    console.debug('toggling nav menu');
    console.debug(e.target);
    const toggleID = e.target.getAttribute(TARGET_ATTRIBUTE_VAL);
    console.debug('toggling id', toggleID);
    const toggleElement = document.getElementById(toggleID);
    toggleElement.classList.contains(HIDE_CLASS_NAME) ? toggleElement.classList.remove(HIDE_CLASS_NAME) : toggleElement.classList.add(HIDE_CLASS_NAME);
})