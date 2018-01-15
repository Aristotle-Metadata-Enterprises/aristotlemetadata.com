var map;
jQuery(document).ready(function(){

    map = new GMaps({
        div: '#map',
        lat: 20, lng: 0,
        zoom: 2,
        disableDefaultUI: true,
        scrollwheel: false
    });
    // [lat,long,title,text]
    var contributors = [
        {lat: 43.653226, lng: -79.3831843, title:"Toronto", content:"Toronto - documentation & quality control"},
        {lat: -35.2819998, lng: 149.1286843 , title:"Canberra", content:"Canberra - development & documentation"},
        {lat: -33.867487, lng: 151.206990 , title:"Sydney", content:"Sydney - development & quality control"},
        {lat: 57.708870, lng: 11.974560 , title:"Gothenburg", content:"Gothenburg - localisation & quality control"},
        {lat: 51.165691, lng: 10.451526 , title:"Germany", content:"Germany - localisation"},
        {lat: 51.507351, lng: -0.127758 , title:"London", content:"London - development & documentation"},
        {lat: -31.953513, lng: 115.857047 , title:"Perth", content:"Perth - development"},
        {lat: 48.856614, lng: 2.352222 , title:"Paris", content:"Paris - localisation"},
        
        //{lat: , lng: , title:"", content:""}
    ]
    $.each(contributors, function( index, value ){
        map.addMarker({
            lat: value.lat, lng: value.lng,
            title: value.title,
            infoWindow: {
                content: value.content
            }
            
        });
    })

});