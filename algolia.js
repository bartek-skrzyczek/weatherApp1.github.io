var placesAutocomplete = places({
    appId: 'pl7P2THDO0LT',
    apiKey: '8f1cddd88c63e8a9e80762d03af4b1de',
    container: document.querySelector('#address-input')
});

placesAutocomplete.on('change', function(e) {
    console.log(e.suggestion.value);
    searchWeather("q=" + e.suggestion.value);
    forecastData("q=" + e.suggestion.value);
});

