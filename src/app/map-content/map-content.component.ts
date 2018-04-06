import { Component, OnInit } from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  styleUrls: ['./map-content.component.css']
})
export class MapContentComponent implements OnInit {

  constructor(public mapApiWrapper: GoogleMapsAPIWrapper) { }

  ngOnInit() {

    this.mapApiWrapper.getNativeMap()
      .then((map) => {

        // I have been manually updating core/services/google-maps-types.d.ts to include things they didn't include.
        console.log(map.getZoom());
        map.setOptions({mapTypeId : 'hybrid'});
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

       /* let ctaLayer26 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/ff.kml',
          map: map
        });*/
       /* let ctaLayer27 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/sss.kml',
          map: map
        });
        let ctaLayer28 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/z5.kml',
          map: map
        });*/
        let ctaLayer2 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Bizerte5.kml',
          map: map
        });
        let ctaLayer3 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Beja5.kml',
          map: map
        });
        let ctaLayer4 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/BenArous5.kml',
          map: map
        });

        let ctaLayer5 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Gabes5.kml',
          map: map
        });
       /* let ctaLayer66 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/G.kml',
          map: map
        });*/
        let ctaLayer6 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/rrrr5.kml',
          map: map
        });
        let ctaLayer7 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbiroukmlkml/kmlkml/jendouba5.kml',
          map: map
        });
        let ctaLayer8 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Kairouan5.kml',
          map: map
        });
        let ctaLayer9 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Kasserine5.kml',
          map: map
        });
        let ctaLayer10 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Kef5.kml',
          map: map
        });
        let ctaLayer11= new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Mahdia5.kml',
          map: map
        });
        let ctaLayer12 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Medenine5.kml',
          map: map
        });
        let ctaLayer13 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Monastir5.kml',
          map: map
        });
        let ctaLayer14 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Nabeul5.kml',
          map: map
        });
        let ctaLayer15 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Sfax5.kml',
          map: map
        });
        let ctaLayer16 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/SidiBouzid5.kml',
          map: map
        });
        let ctaLayer17 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Siliana5.kml',
          map: map
        });
        let ctaLayer18 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Sousse5.kml',
          map: map
        });
        let ctaLayer19 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Tebourba5.kml.kml',
          map: map
        });
        let ctaLayer20 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Tozeur5.kml',
          map: map
        });
        let ctaLayer21 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Tunis5.kml',
          map: map
        });
        let ctaLayer22 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Zaghouan5.kml',
          map: map
        });

        let ctaLayer23 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Kebili5.kml',
          map: map
        });
        let ctaLayer24 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Ariana11.kml',
          map: map
        });

        let ctaLayer25 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/M5.kml',
          map: map
        });
        let ctaLayer500 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Jerba500.kml',
          map: map
        });
        let ctaLayer60 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/Jendoubaa5.kml',
          map: map
        });
        ///
   /*   let ctaLayer601 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/suiteKef5.kml',
          map: map
        });
        let ctaLayer602 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/suiteTunis5.kml',
          map: map
        });
        let ctaLayer603 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/mer.kml',
          map: map
        });
*/
///
       let ctaLayer87 = new google.maps.KmlLayer({
            url: 'https://sites.google.com/site/roguistorage/kmlkml/tunisie3.kml',
            map: map
          });


        map.addListener('click', function(e) {
          alert(e.latLng.lat());
        });



      });

  }

}
