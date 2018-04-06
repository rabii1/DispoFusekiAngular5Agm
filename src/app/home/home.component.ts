import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {RestService} from '../services/rest.service';
//import {google} from '@agm/core/services/google-maps-types';
import { google } from "google-maps";
import {MapsAPILoader} from '@agm/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {} from '@types/google-maps';
import {FormControl} from '@angular/forms';
import {checkAndUpdateDirectiveDynamic} from '@angular/core/src/view/provider';
import {allSettled} from 'q';
import {UserService} from '../user.service';
import {GoogleMapsAPIWrapper} from '@agm/core';

declare var google: any;
import { MapTypeStyle } from '@agm/core';
import { } from '@types/googlemaps';
//import { google } from '@agm/core/services/google-maps-types';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  title = 'app';
  lat: any ;
  lng: any ;
  zoom: any = 7;
  control: any;
  L:any;
  map: google.maps.Map;

   // public src = 'https://sites.google.com/site/dhahbirouakmlkml/kmlkml/cc.kml';



  @ViewChild("search")
  API_KEY: string;
  API_URL: string;
  term: string;
  //title: string = 'My first AGM project';
  //lat: number ;
  //lng: number ;
  places : any=[];
  list:any;
  listes:any=[];
  //zoom: any ;
  arrs: any=[];
  colorspecia: any= [];
  public searchControl: FormControl;
  @ViewChild("search")
  public searchElementRef: ElementRef;

  select:any ;
  //sidebar

   etat: boolean=true;
  verif(){

    if (this.user.isUserLoggedIn==true) {
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate(['']);

    }
  }
  shows(){
    console.log(this.etat);
    this.etat=false;
  }

 //sidebar
  shows1(){
    console.log(this.etat);
    this.etat=true;
  }

  constructor(public rest:RestService, public user:UserService,public mapApiWrapper: GoogleMapsAPIWrapper, public http:HttpClient ,public  router: Router , private mapsAPILoader:MapsAPILoader, private ngZone:NgZone,public  rest1: RestService ) {
    // this.getAllDisponibilite();

    this.API_KEY = 'AIzaSyCN0WNdE20LrZPVbBwRs0m-YsE81oYPl8c'
    this.API_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${this.API_KEY}&address=`;
    ///this.findFromAddress('mahdia')

  }
  change(e) {
      console.log("select : "+this.select);
      this.cleaar();
    this.rest.getAllDisponibilite().subscribe(data => {

      console.log(data);
      this.list = data;
      console.log(this.list.length);
      this.places = [];
    // e.preventDefault();
      console.log(e);
     // var fonction=e.target.elements[this.select].value;
      console.log(this.list.length);
      for (let i = 0; i < this.list.length; i++) {
        this.rest.getAllPersonnePhyP(this.list[i].a_prestataire.value).subscribe(res => {
          if (res.personne.fonctionprofessionnel.value==this.select) {

            // this.getGeoLocation(Number(this.list[i].longitudeD.value),Number(this.list[i].latitudeD.value))
            this.places.push({
              'lng': Number(this.list[i].longitudeD.value),
              'lat': Number(this.list[i].latitudeD.value),
              'per': res
            });
          }
        });

      }

    });



  }

ville(e){
  console.log("select : "+this.select);
  this.cleaar();


  }



  /*change() {
      console.log("select : "+this.select);



       this.cleaar();
     /!* this.rest.getAllDisponibilite().subscribe(data => {

        this.list = data;


        for (let i = 0 ; i < this.list.length; i++) {
          this.rest.getAllPersonnePhyP(this.list[i].a_prestataire.value).subscribe(res => {



            console.log(this.select);

            if (res.personne.fonctionprofessionnel.value===this.select){

              console.log(res.personne.fonctionprofessionnel.value)
              console.log(this.select)
               this.arrs.push(this.list[i])
            }

           this.list=this.arrs;

          });


        }


      })*!/
  }*/


  // getGeoLocation(lat: number, lng: number) {
  //   if (navigator.geolocation) {
  //     let geocoder = new google.maps.Geocoder();
  //     let latlng = new google.maps.LatLng(lat, lng);
  //  ///   let request = { latLng: latlng };
  //     let request : any;
  //
  //     geocoder.geocode(request, (results, status) => {
  //       if (status == google.maps.GeocoderStatus.OK) {
  //         let result = results[0];
  //         let rsltAdrComponent = result.address_components;
  //         let resultLength = rsltAdrComponent.length;
  //         if (result != null) {
  //
  //           console.log(rsltAdrComponent[resultLength-8].short_name)
  //           console.log(rsltAdrComponent[resultLength-7].short_name)
  //        //   this.marker.buildingNum = rsltAdrComponent[resultLength-8].short_name;
  //         //  this.marker.streetName = rsltAdrComponent[resultLength-7].short_name;
  //         } else {
  //           alert("No address available!");
  //         }
  //       }
  //     });
  //   }
  // }

  private setCurrentPosition() {
    this.zoom = 8;
    var google : google;
    if ("geolocation" in navigator) {
      this.zoom = 8;
      navigator.geolocation.getCurrentPosition((position) => {

        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        // this.places.push( {lat:this.lat , lng:  this.lng ,per:{personne:{cin:{value:''},nompersonne:{value:''}}}})


      });
      this.places.push( {lat:this.lat , lng:this.lng,per:{personne:{cin:{value:''},nompersonne:{value:''},prenom:{value:''}}}})
    }

  }

  findFromAddress(address: string, postalCode?: string, place?: string, province?: string, region?: string, country?: string): any {

    let compositeAddress = [address];

    if (postalCode) compositeAddress.push(postalCode);
    if (place) compositeAddress.push(place);
    if (province) compositeAddress.push(province);
    if (region) compositeAddress.push(region);
    if (country) compositeAddress.push(country);

    let url = `${this.API_URL}${compositeAddress.join(',')}`;

    this.http.get(url).subscribe(response => {

      //this.places.push(response.results[0].geometry.location);
    });}

  ngOnInit() {


        //create search FormControl
    this.verif() ;
    this.searchControl = new FormControl();
    console.log('ng on init ');
    console.log(this.places);
    //set current position
    this.setCurrentPosition();
    this.getAllDisponibilite();
    console.log(this.places);
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 1;
        });
      });
    });



  }


  rest11() {

    this.router.navigate(["Projet1"])
  }
  rest2() {

    this.router.navigate(["Projet2"])
  }
  rest3() {

    this.router.navigate(["Projet3"])
  }

  getAllDisponibilite() {


    this.rest.getAllDisponibilite().subscribe(data => {
    /*  //ajouter
      var colorspecia = [];
      var colorArray =
        [
          '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
          '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
          '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
          '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
          '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
          '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
          '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
          '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
          '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
          '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
        ];
      var lstspec = document.getElementById("specialte-select");

      console.log('select'+lstspec)
      //var btfiltercontainer = document.getElementById("btfiltercontainer");
      //ajouter*/
      console.log("getalldiso");

      console.log(data);
      this.list = data;
      console.log(this.list.length);
      for (let i = 0 ; i < this.list.length; i++) {

        this.rest.getAllPersonnePhyP(this.list[i].a_prestataire.value).subscribe(res => {
            this.places.push({
              'lng': Number(this.list[i].longitudeD.value),
              'lat': Number(this.list[i].latitudeD.value),
              'per': res
            });

            if (! this.listes.includes(res.personne.fonctionprofessionnel.value)) {
            this.listes.push(res.personne.fonctionprofessionnel.value);
//ajouter

          }}


          )};

      })

  }
log(){
  this.router.navigate(['']);
}


  refresh(): void {
    window.location.reload();

  }

  cleaar(){this.places=null

  }
 /* filt1(){

    this.cleaar();
    this.rest.getAllDisponibilite().subscribe(data => {

      console.log(data);
      this.list = data;
      console.log(this.list.length);
      this.places = [];

      console.log(this.list.length);
      for (let i = 0; i < this.list.length; i++) {
        this.rest.getAllPersonnePhyP(this.list[i].a_prestataire.value).subscribe(res => {
          console.log("re pers");
          console.log(res.personne.nompersonne.value);
          if (res.personne.prenom.value=="roua") {
            //console.log("iffffffffff rua");
           // console.log(this.list[i].longitudeD.value);

            this.places.push({
              'lng': Number(this.list[i].longitudeD.value),
              'lat': Number(this.list[i].latitudeD.value),
              'per': res
            });
          }
        });

      }

    });


  }*/
  checc1(){
    this.cleaar();

    this.cleaar();
    this.rest.getAllDisponibilite().subscribe(data => {

      console.log(data);
      this.list = data;
      console.log(this.list.length);
      this.places = [];

      console.log(this.list.length);
      for (let i = 0; i < this.list.length; i++) {
        this.rest.getAllPersonnePhyP(this.list[i].a_prestataire.value).subscribe(res => {
          console.log("re pers");
         // console.log(res.personne.nompersonne.value);
          if (res.personne.genre.value=="Homme") {
            //console.log("iffffffffff rua");
            // console.log(this.list[i].longitudeD.value);

            this.places.push({
              'lng': Number(this.list[i].longitudeD.value),
              'lat': Number(this.list[i].latitudeD.value),
              'per': res
            });
          }
        });

      }

    });
  }


  checc2(){
    this.cleaar();

    this.rest.getAllDisponibilite().subscribe(data => {

      console.log(data);
      this.list = data;
      console.log(this.list.length);
      this.places = [];

      console.log(this.list.length);
      for (let i = 0; i < this.list.length; i++) {
        this.rest.getAllPersonnePhyP(this.list[i].a_prestataire.value).subscribe(res => {
          console.log("re pers");
        //  console.log(res.personne.nompersonne.value);
          if (res.personne.genre.value=="Femme") {
            //console.log("iffffffffff rua");
            // console.log(this.list[i].longitudeD.value);

            this.places.push({
              'lng': Number(this.list[i].longitudeD.value),
              'lat': Number(this.list[i].latitudeD.value),
              'per': res
            });
          }
        });

      }

    });
  }

ajout(e){
    console.log("select:"+this.select);
    this.cleaar();
  this.rest.getAllDisponibilite().subscribe(data => {

    console.log(data);
    this.list = data;
    console.log(this.list.length);
    this.places = [];
e.preventDefault();
console.log(e);
var nom=e.target.elements[0].value;
    console.log(this.list.length);
    console.log("roua");
    for (let i = 0; i < this.list.length; i++) {
      this.rest.getAllPersonnePhyP(this.list[i].a_prestataire.value).subscribe(res => {
        if (res.personne.prenom.value==nom) {
          this.places.push({
            'lng': Number(this.list[i].longitudeD.value),
            'lat': Number(this.list[i].latitudeD.value),
            'per': res
          });
        }
      });

    }

  });
}

listeselect(e){
  this.cleaar();
  this.rest.getAllDisponibilite().subscribe(data => {

    console.log(data);
    this.list = data;
    console.log(this.list.length);
    this.places = [];
    e.preventDefault();
    console.log(e);
    var nom=e.target.elements[0].value;
    console.log(this.list.length);
    console.log("roua");
    for (let i = 0; i < this.list.length; i++) {
      this.rest.getAllPersonnePhyP(this.list[i].a_prestataire.value).subscribe(res => {
        if (res.personne.prenom.value==nom) {
          this.places.push({
            'lng': Number(this.list[i].longitudeD.value),
            'lat': Number(this.list[i].latitudeD.value),
            'per': res
          });
        }
      });

    }

  });
}




}
