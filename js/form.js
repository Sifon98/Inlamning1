$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('Clicked button')

        var name = $('.name').val()
        var email = $('.email').val()
        var message = $('.message').val()
        var status = $('.status')
        status.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            status.append('<div>Email is valid</div>')
        }
        else {
            status.append('<div>Email is not valid</div>')
        }

        if(name.length > 2) {
            status.append('<div>Name is valid</div>')
        }
        else {
            status.append('<div>Name is not valid</div>')
        }

        if(message.length > 10) {
            status.append('<div>Message is valid</div>')
        }
        else {
            status.append('<div>Message is not valid</div>')
        }
    })
})