console.log('burger.js connected')

$('#submit_burger').on('click', function(event){
    event.preventDefault()
    var displayAlert = false
    var burgerSubmitVal = $('#burger_textarea').val().trim()
    console.log(burgerSubmitVal)

    if (burgerSubmitVal === "") {
        if (displayAlert === false) {
            $('#alert').css('display', 'block')
            dispayAlert = true
        } 
    } else {
        if (displayAlert) {
            $('#alert').css('display', 'none')
            dispayAlert = false
        }
        
        $.post('api/burgers', {burger_name: burgerSubmitVal}).then(() => {
            console.log("new burger added")
            location.reload()
        })
    }
    
})

$('.devour').on('click', function(event){
    var id = $(this).data('id')

    $.ajax({
        url: '/api/burgers/' + id,
        type: 'PUT'
    }).then(() => {
        console.log("burger with " + id + 'should be updated')
        location.reload()
    })
    
})