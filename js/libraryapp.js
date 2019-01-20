
$.get("http://127.0.0.1:8000/book/").done(response => { 
    response
        .map(book => $("<li id='"+book.id+"' >" + book.title + "</li>"))
        .forEach(e => $("#books-list").append(e))
        $("li").addClass("bigFont")
    $("li").after($("<div class='hidden'>"))

    $("li").on("click", function(evt){
        var li = $(this)
        var id = li.attr("id")
        var div = li.next()
        $.get("http://127.0.0.1:8000/book/"+id).done(response => {
            div.html("<br>autor: "+response.author+"<br></br>isbn: "+response.isbn+"<br></br>publisher: "+response.publisher+"<br></br>")
            div.toggleClass('hidden')
        })
        
    })
})
function isValidISBN (isbn) {
    isbn = isbn.replace(/[^\dX]/gi, '');
    if(isbn.length != 10){
      return false;
    }
    var chars = isbn.split('');
    if(chars[9].toUpperCase() == 'X'){
      chars[9] = 10;
    }
    var sum = 0;
    for (var i = 0; i < chars.length; i++) {
      sum += ((10-i) * parseInt(chars[i]));
    };
    return ((sum % 11) == 0);
  }
  jQuery.validator.addMethod("isbnNo", function(value, element) {
    return isValidISBN(value);
}, "Please enter valid ISBN number");

