function initMap(){
    let pos = {lat: 49.843426, lng: 24.010009};
    let opt = {
        center: pos,
        zoom: 11,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    };
    let myMap = new google.maps.Map(document.getElementById("map"), opt); 
    let marker = new google.maps.Marker({
        position: pos,
        map: myMap,
        title: "Click me to check more information about me!",
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
    let info = new google.maps.InfoWindow({
        content: '<h3>Working hours</h3> <p>Monday: 10:00 AM - 10:00 PM</p> <p>Tuesday: 10:00 AM - 10:00 PM</p> <p>Wednesday: 10:00 AM - 10:00 PM</p> <p>Thursday: 10:00 AM - 10:00 PM</p> <p>Friday: 10:00 AM - 10:00 PM</p> <p>Saturday: 10:00 AM - 10:00 PM</p> <p>Sunday: 10:00 AM - 08:00 PM</p>'
    });
    marker.addListener("click",function(){
        info.open(myMap, marker);
    });
}


function showMap(){
    let show = document.getElementById("aboutUsMain");
    let show1 = document.getElementById("aboutUs");
    let show2 = document.getElementById("map");       
    let show3 = document.getElementById("mail"); 
    show.style.display = "block";
    show1.style.display = "block";
    show2.style.display = "block";
    window.scrollTo(show1);
    show3.style.display = "block";

}
