var footballEvents = document.querySelectorAll('ul')

fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=136168')
    .then(function(response) {
        return response.json();
    })
    var obj = {
        'Alabama':'Crimson Tide'
    };
    for(let strName of Object.keys(obj)){
        var strAlternate = obj[strName];
        console.log(strName, strAlternate);
    }
    