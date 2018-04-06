import { Component, OnInit } from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

declare var google: any;
@Component({
  selector: 'app-map-content2',
  templateUrl: './map-content2.component.html',
  styleUrls: ['./map-content2.component.css']
})
export class MapContent2Component implements OnInit {


  constructor(public mapApiWrapper: GoogleMapsAPIWrapper) { }

  ngOnInit() {
    this.mapApiWrapper.getNativeMap()
      .then((map) => {

        // I have been manually updating core/services/google-maps-types.d.ts to include things they didn't include.
        console.log(map.getZoom());
        map.setOptions({mapTypeId : 'roadmap'});
        let myCoordinates = [
          new google.maps.LatLng(33.427704,7.735117),
          new google.maps.LatLng(33.464372,7.855966),
          new google.maps.LatLng(33.606315,8.070200),
          new google.maps.LatLng(33.716046,8.224008),
          new google.maps.LatLng(33.816509,8.394296),
          new google.maps.LatLng(33.862136,8.438242),
          new google.maps.LatLng(34.026189,8.625009),
          new google.maps.LatLng(34.062602,8.635995),
          new google.maps.LatLng(34.062602,8.355844),
          new google.maps.LatLng(34.117193,8.328378),
          new google.maps.LatLng(34.167203,8.322885),
          new google.maps.LatLng(34.203556,8.163583),
          new google.maps.LatLng(34.321593,8.048227),
          new google.maps.LatLng(34.406809,8.092741),
          new google.maps.LatLng(34.420404,8.076261),
          new google.maps.LatLng(34.547187,8.153165)
        ];
        var polyOptions = {
          path: myCoordinates,
          strokeColor: "#000000",
          strokeOpacity: 1,
          strokeWeight: 3
        }
        var it = new google.maps.Polyline(polyOptions);
        // it.setMap(map);
        let position = new google.maps.LatLng(45.521, -122.677);
        let cityCircle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
          center: position,
          radius: 10000
        });


        let ctaLayer1 = new google.maps.KmlLayer({
           url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/jerba3.kml',
           map: map
         });


        let ctaLayer2 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/mm.kml',
          map: map
        });


        map.addListener('click', function(e) {
          alert(e.latLng.lat());
        });



      });
  }

}
