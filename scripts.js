const API_URL = 'https://apis.is/company?name=';


const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked.');
});

const texti = document.querySelector('input');
    texti.addEventListener('input', () => {
      console.log('textarea inniheldur:', textarea.value);
    });

      
    function tomistrengur(e){
        
        const input = e.target.querySelector('input');
    
        if (input.length == 0) {
          showError('Lén verður að vera strengur');
        } else {
          search(input.value)
        }
      }

      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = () => {
        var data = JSON.parse(request.response);
      if (request.status >= 200 && request.status < 400) {
        showData(data.results[0]);
        console.log(request);
      };
      request.onerror = () => {
        showError('Villa kom upp!');
      }
      };

      function getvalue(){
      const text = document.getElementById('txt').value;
      function search(number) {
        const url = API_URL + number;
        const request = new XMLHttpRequest();
        
    
      if (text.lenght > 0){
        search(text);
        request.open('GET', url, true);
    request.onload = function() {
      let upplysingar = JSON.parse(request.response);
      if (request.status >= 200 && request.status < 400) {
        showData(data.results[0]);
      } else {
        showError('Villa kom upp: ' + data.error);
      }
    };
      }
      console.log(text);
      }
    }