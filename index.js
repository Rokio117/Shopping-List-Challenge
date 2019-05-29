
$(function() {
  $("#js-shopping-list-form").submit(function(event){
    event.preventDefault();
    let newFood = $(this).find('input').val()
    let newItem = (`<li><span class="shopping-item">${newFood}</span>${listProperties}</li>`)
    $(".shopping-list").prepend(newItem)
  })
})

const listProperties = `
<div class="shopping-item-controls">
  <button class="shopping-item-toggle">
    <span class="button-label">Check</span>
  </button>
  <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
</div>`


$("ul").on('click', '.shopping-item-delete', (function(event){
    $(this).parentsUntil(".shopping-list").remove()
    
  })
  )
$("ul").on('click', '.shopping-item-toggle', (function(event){
  
$(this).parentsUntil(".shopping-list").toggleClass("shopping-item__checked")
})
)

