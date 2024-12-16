function getLocation() {
    const output = document.getElementById('output');

    if (navigator.geolocation) {
        output.textContent = 'Fetching location...';

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                output.innerHTML = `
                    <p><strong>Latitude:</strong> ${latitude.toFixed(6)}</p>
                    <p><strong>Longitude:</strong> ${longitude.toFixed(6)}</p>
                    <p>
                        <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">
                            View on Google Maps
                        </a>
                    </p>
                `;
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        output.textContent = 'User denied the request for Geolocation.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        output.textContent = 'Location information is unavailable.';
                        break;
                    case error.TIMEOUT:
                        output.textContent = 'The request to get user location timed out.';
                        break;
                    case error.UNKNOWN_ERROR:
                        output.textContent = 'An unknown error occurred.';
                        break;
                }
            }
        );
    } else {
        output.textContent = 'Geolocation is not supported by this browser.';
    }
}