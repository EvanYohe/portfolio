// Search a collapsed container of elements for an element matching input
const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

let tagList = document.getElementById('hideTagList');
const tags = tagList.querySelectorAll('#collapse');

Array.from(tags).forEach((tag) => 
  new bootstrap.Collapse(

    '#collapse',

    {
      parent: hideTagList,
      toggle: false
    }
  )
)

document.querySelector('#searchbar').addEventListener('input', () => {

    const input = document.getElementById('searchbar').value.toLowerCase();

    tags.forEach(tag => {

        let tagText = tag.id;
        if (tagText == input){
            
            tag.collapse("show");

        }
})
});