$(function () {
  $('#addbutton').click(handlebtnClick)
  $('#todos li').click(removeMe)
  $('#todos').on('click', 'li', fadeOut)
  $('#addbtn').click(addnewrow)
  // $('#table td').click(removeMe)
  $('#table').on('click', 'td', fadeOut)
})

function handlebtnClick() {
  // alert('Add btn');
  var newtodo = $('#newtodo').val()

  if (!newtodo) {
    $('#newtodo').addClass('error')
    return
  }

  $('#todos').append('<li>' + newtodo + '</li>')
}

function removeMe() {
  $(this).remove()
}
function fadeOut() {
  $(this).fadeOut()
}

function addnewrow() {
  var newrow = $('#newrow').val()
  if (!newrow) {
    $('#newrow').addClass('error')
    return
  }
  console.log(newrow)
  $('#table').append('<td>' + newrow + '</td>')
}
