function start(){
    mapLoad();
}

function mapLoad(){
    var latLng = [41.789649, -87.599702];
    //set 
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibnljaGlwYXN1IiwiYSI6ImNsMDFuejJpaTA1ZXMzam1qOGs2MDdzeG4ifQ.vxLKFyZ3DnJfngaUmChCuQ';
    //
    var streets = L.tileLayer(mbUrl, {
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset:-1,
        attribution:mbAttr
    });
    //
    var map=L.map('map',{
        center:latLng,
        zoom:16,
        layers: [streets]
    });
    //
    var baseLayers={
        "Grayscale": grayscale,
        "Streets": streets
    };
    L.control.layers(baseLayers).addTo(map);
    L.marker(latLng).addTo(map).bindPopup("<b>UChicago<br>Campus</br>").openPopup();
    //
    var popup = L.popup();
    function onMapClick(e){
        popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at "+ e.latlng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);
    //
}




function wikiAPI(){
    var searchTerm = document.getElementById("searchTerm").value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;
    connect.open('GET',url);
    //define actions
    connect.onload = function(){
        var wikiObject = JSON.parse(this.response);
        // console.log(wikiObject);
        console.log(wikiObject.query.pages);
        var pages = wikiObject.query.pages;
        for (var i in pages){
            // var newDiv = document.createElement("div");
            // newDiv.setAttribute('class','row h4');
            // document.getElementById("wiki").appendChild(newDiv);
            // newDiv.innerText = pages[i].title;

             //Challenge:display links to the wiki html pages as results
            var pageURL = "https://en.wikipedia.org/?curid=";
            var newAnchor = document.createElement("a");
            newAnchor.href= pageURL+ pages[i].pageid;
            newAnchor.className ='d-block';
            newAnchor.innerText =pages[i].title;
            document.getElementById("wiki").appendChild(newAnchor);
        }
       

    }
    //send request
    connect.send();
}



//Get the button: Top button
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}