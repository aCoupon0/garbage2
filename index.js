document.getElementById('hora-promocion').innerHTML = new Date(new Date().setMinutes(new Date().getMinutes() > 30 ? 60 : 30)).toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit', hour12: true});
document.getElementById('hora-promocion2').innerHTML = document.getElementById('hora-promocion').innerHTML
