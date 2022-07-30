// Initialize all the collapsibile elements on the page
// Add an event listener 'input' to the searchbar
// On event, compare input text to list of collapsables and expand if input text matches collapsable element id

const collapseElementList = document.querySelectorAll('.collapse');
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl));

const searchBar = document.getElementById('searchbar');

searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase()
    collapseList.forEach(collapse => {
        const collapseId = collapse.element.id.toLowerCase()
        if (collapseId.includes(searchText)) {
            collapse.show()
        } else {
            collapse.hide()
        }
    }
    )
}
)