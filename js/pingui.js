document.addEventListener('DOMContentLoaded', function(){ 

    sendHttpReq();

    setInterval(() => {
        sendHttpReq();
    }, 1000);
    
    function sendHttpReq() {
        var request = new XMLHttpRequest();
        request.open('GET', './core/core.pinger.php?status', true);

        request.onload = function() {
        if (request.status >= 200 && request.status < 400) {

            document.querySelector('#last-ping #received').innerHTML = request.responseText;
            if(request.responseText == "not-yet-ran") {
                document.querySelector('#moment-timeago').innerHTML = 'never';
                document.querySelector('#host-status').innerHTML = 'Waiting for first ping';
            } else {
                
                if ( moment(request.responseText).isAfter(moment().subtract(30, 'seconds')) == false ){
                    setOffline(request.responseText);
                } else {
                    setOnline();
                }
            }

        } else {
            console.log(request);
        }
        };

        request.onerror = function(error) {
            console.log(error);
        };

        request.send();
    }

    function setOffline(response){
        document.querySelector('#host-status').innerHTML = 'Offline';
        document.querySelector('#host-status').classList.remove('checking');
        document.querySelector('#host-status').classList.remove('online');
        document.querySelector('#host-status').classList.add('offline');
    }

    function setOnline(){
        document.querySelector('#host-status').innerHTML = 'Online';
        document.querySelector('#host-status').classList.remove('checking');
        document.querySelector('#host-status').classList.remove('offline');
        document.querySelector('#host-status').classList.add('online');
    }

}, false);