const tabItems = document.querySelectorAll('.tab-item'); 
const tabContentItems = document.querySelectorAll('.tab-content-item');


// This will select tab content item
function selectItem(e) {

// Remove border from all tabs
removeBorder();
removeShow();
//Add border to current tab
this.classList.add('tab-border');

// Grab content from the DOM
const tabContentItem = document.querySelector(`#${this.id}-content`);
// Add show class
tabContentItem.classList.add('show');

}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));


console.log(this.id);
