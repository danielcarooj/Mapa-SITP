function iniciarMap(){
    var coord = {lat:4.55863969742,lng: -74.1363854289};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}