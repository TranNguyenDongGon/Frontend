document.addEventListener('DOMContentLoaded', function () {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItems = document.querySelectorAll('.tab-content-item');
    //select tab content item

    function selectItem(e) {
        removeBorder();
        removeShow();
        // add border to current tab
        this.classList.add('tab-border');
        const tabContentItem = document.querySelector(`#${this.id}-content`);

        tabContentItem.classList.add('show');
    }

    function removeShow(e) {
        tabContentItems.forEach(item => item.classList.remove('show'));
    }

    function removeBorder(e) {
        tabItems.forEach(item => item.classList.remove('tab-border'));
    }
    // listen for tab click
    tabItems.forEach(item => item.addEventListener('click', selectItem));
}, false);
