
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
