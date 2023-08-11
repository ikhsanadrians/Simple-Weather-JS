const API_KEY = "crkH1iAOmrnAauO5fC1QHg==6OWtaIGIPWZGUdKi"

$('#city').keypress(function (e) {
    let searchVal = $(this).val()
    if (e.which == 13) {
        $('.location__not__found').addClass('hide')
        $('.lds-ellipsis').removeClass('hide')
        $('.location__data').addClass('hide')

        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/weather?city=' + $(this).val(),
            headers: { 'X-Api-Key': API_KEY },
            contentType: 'application/json',
            success: function (response) {
                $('.lds-ellipsis').addClass('hide')
                $('.location__data').removeClass('hide')
                const rawTimeSunrise = new Date(response.sunrise * 1000)
                const rawTimeSunset = new Date(response.sunset * 1000)
                
                const timeSunrise = rawTimeSunrise.toLocaleTimeString('de-DE', {
                  hour: '2-digit',
                  minute: '2-digit',
                })

                const timeSunset = rawTimeSunset.toLocaleTimeString('de-DE', {
                  hour: '2-digit',
                  minute: '2-digit',
                })
                
                $('#location__id').text(searchVal.toUpperCase());
                $('#temp__id').text(`${response.temp} ° C`)
                $('#wind__id').text(response.wind_speed)
                $('#sunsrise__id').text(timeSunrise)
                $('#sunset__id').text(timeSunset)
            },
            error: function (error) {
                $('.lds-ellipsis').addClass('hide')
                $('.location__not__found').removeClass('hide')
            }

        });
    }
});








