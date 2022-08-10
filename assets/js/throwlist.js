const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

const bsCollapse = new bootstrap.Collapse('#collapseOuter', {})

document.querySelector('tagHook').addEventListener('click', (e) => {
    let anchor = e.target.closest('a');
    if(anchor !== null ) {

        bsCollapse.show();

    }
})