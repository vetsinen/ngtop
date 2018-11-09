import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  url = 'https://vetsinen.github.io/photobase/base.json';
  res;
  photos=[];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.res = res;
      this.photos = res['default'];
      console.log(res);
    });
  }
  protos = [
    {
      "size": 24540,
      "url": "https://vetsinen.github.io/photobase/photos/firdaus-roslan-596541-unsplash.jpg",
      "modified": 1541726107,
      "name": "firdaus-roslan-596541-unsplash.jpg"
    },
    {
      "size": 28664,
      "url": "https://vetsinen.github.io/photobase/photos/taner-ardali-807-unsplash.jpg",
      "modified": 1541726152,
      "name": "taner-ardali-807-unsplash.jpg"
    },
    {
      "size": 33211,
      "url": "https://vetsinen.github.io/photobase/photos/sergio-souza-973845-unsplash.jpg",
      "modified": 1541726148,
      "name": "sergio-souza-973845-unsplash.jpg"
    },
    {
      "size": 33876,
      "url": "https://vetsinen.github.io/photobase/photos/aziz-acharki-415788-unsplash.jpg",
      "modified": 1541726095,
      "name": "aziz-acharki-415788-unsplash.jpg"
    },
    {
      "size": 33886,
      "url": "https://vetsinen.github.io/photobase/photos/joe-anderson-692009-unsplash.jpg",
      "modified": 1541726124,
      "name": "joe-anderson-692009-unsplash.jpg"
    },
    {
      "size": 34768,
      "url": "https://vetsinen.github.io/photobase/photos/jason-blackeye-260266-unsplash.jpg",
      "modified": 1541726118,
      "name": "jason-blackeye-260266-unsplash.jpg"
    },
    {
      "size": 37063,
      "url": "https://vetsinen.github.io/photobase/photos/jc-gellidon-386376-unsplash.jpg",
      "modified": 1541726121,
      "name": "jc-gellidon-386376-unsplash.jpg"
    },
    {
      "size": 38200,
      "url": "https://vetsinen.github.io/photobase/photos/max-libertine-758736-unsplash.jpg",
      "modified": 1541726138,
      "name": "max-libertine-758736-unsplash.jpg"
    },
    {
      "size": 38265,
      "url": "https://vetsinen.github.io/photobase/photos/pablo-bustos-783267-unsplash.jpg",
      "modified": 1541726141,
      "name": "pablo-bustos-783267-unsplash.jpg"
    },
    {
      "size": 38594,
      "url": "https://vetsinen.github.io/photobase/photos/aziz-acharki-290990-unsplash.jpg",
      "modified": 1541726091,
      "name": "aziz-acharki-290990-unsplash.jpg"
    },
    {
      "size": 38676,
      "url": "https://vetsinen.github.io/photobase/photos/kendrew-schexnider-1124076-unsplash.jpg",
      "modified": 1541726130,
      "name": "kendrew-schexnider-1124076-unsplash.jpg"
    },
    {
      "size": 40423,
      "url": "https://vetsinen.github.io/photobase/photos/thomas-young-637673-unsplash.jpg",
      "modified": 1541726153,
      "name": "thomas-young-637673-unsplash.jpg"
    },
    {
      "size": 41124,
      "url": "https://vetsinen.github.io/photobase/photos/felix-mittermeier-700275-unsplash.jpg",
      "modified": 1541726103,
      "name": "felix-mittermeier-700275-unsplash.jpg"
    },
    {
      "size": 42304,
      "url": "https://vetsinen.github.io/photobase/photos/hans-vivek-196584-unsplash.jpg",
      "modified": 1541726110,
      "name": "hans-vivek-196584-unsplash.jpg"
    },
    {
      "size": 44556,
      "url": "https://vetsinen.github.io/photobase/photos/cosmic-timetraveler-595614-unsplash.jpg",
      "modified": 1541726097,
      "name": "cosmic-timetraveler-595614-unsplash.jpg"
    },
    {
      "size": 46858,
      "url": "https://vetsinen.github.io/photobase/photos/rawpixel-769313-unsplash.jpg",
      "modified": 1541726147,
      "name": "rawpixel-769313-unsplash.jpg"
    },
    {
      "size": 49261,
      "url": "https://vetsinen.github.io/photobase/photos/ian-romie-ona-625146-unsplash.jpg",
      "modified": 1541726114,
      "name": "ian-romie-ona-625146-unsplash.jpg"
    },
    {
      "size": 49732,
      "url": "https://vetsinen.github.io/photobase/photos/kym-ellis-475359-unsplash.jpg",
      "modified": 1541726131,
      "name": "kym-ellis-475359-unsplash.jpg"
    },
    {
      "size": 51893,
      "url": "https://vetsinen.github.io/photobase/photos/patrick-fore-381122-unsplash.jpg",
      "modified": 1541726142,
      "name": "patrick-fore-381122-unsplash.jpg"
    },
    {
      "size": 53190,
      "url": "https://vetsinen.github.io/photobase/photos/eric-ward-315923-unsplash.jpg",
      "modified": 1541726102,
      "name": "eric-ward-315923-unsplash.jpg"
    },
    {
      "size": 54048,
      "url": "https://vetsinen.github.io/photobase/photos/ian-romie-ona-511329-unsplash.jpg",
      "modified": 1541726112,
      "name": "ian-romie-ona-511329-unsplash.jpg"
    },
    {
      "size": 55443,
      "url": "https://vetsinen.github.io/photobase/photos/daniel-chekalov-721786-unsplash.jpg",
      "modified": 1541726100,
      "name": "daniel-chekalov-721786-unsplash.jpg"
    },
    {
      "size": 59888,
      "url": "https://vetsinen.github.io/photobase/photos/jakob-owens-696095-unsplash.jpg",
      "modified": 1541726117,
      "name": "jakob-owens-696095-unsplash.jpg"
    },
    {
      "size": 60755,
      "url": "https://vetsinen.github.io/photobase/photos/felix-rostig-1102758-unsplash.jpg",
      "modified": 1541726105,
      "name": "felix-rostig-1102758-unsplash.jpg"
    },
    {
      "size": 61880,
      "url": "https://vetsinen.github.io/photobase/photos/amanda-klamrowski-1045376-unsplash.jpg",
      "modified": 1541726089,
      "name": "amanda-klamrowski-1045376-unsplash.jpg"
    },
    {
      "size": 61888,
      "url": "https://vetsinen.github.io/photobase/photos/ian-valerio-574881-unsplash.jpg",
      "modified": 1541726115,
      "name": "ian-valerio-574881-unsplash.jpg"
    },
    {
      "size": 64064,
      "url": "https://vetsinen.github.io/photobase/photos/mauro-paillex-585839-unsplash.jpg",
      "modified": 1541726136,
      "name": "mauro-paillex-585839-unsplash.jpg"
    },
    {
      "size": 65648,
      "url": "https://vetsinen.github.io/photobase/photos/dan-gold-743939-unsplash.jpg",
      "modified": 1541726099,
      "name": "dan-gold-743939-unsplash.jpg"
    },
    {
      "size": 66000,
      "url": "https://vetsinen.github.io/photobase/photos/jc-gellidon-341849-unsplash.jpg",
      "modified": 1541726120,
      "name": "jc-gellidon-341849-unsplash.jpg"
    },
    {
      "size": 66834,
      "url": "https://vetsinen.github.io/photobase/photos/nathan-waters-794936-unsplash.jpg",
      "modified": 1541726139,
      "name": "nathan-waters-794936-unsplash.jpg"
    },
    {
      "size": 67180,
      "url": "https://vetsinen.github.io/photobase/photos/slim-emcee-ug-the-poet-truth_from_africa_photography-495920-unsplash.jpg",
      "modified": 1541726150,
      "name": "slim-emcee-ug-the-poet-truth_from_africa_photography-495920-unsplash.jpg"
    },
    {
      "size": 67364,
      "url": "https://vetsinen.github.io/photobase/photos/jonathan-ford-328712-unsplash.jpg",
      "modified": 1541726128,
      "name": "jonathan-ford-328712-unsplash.jpg"
    },
    {
      "size": 68197,
      "url": "https://vetsinen.github.io/photobase/photos/joel-stylis-574669-unsplash.jpg",
      "modified": 1541726125,
      "name": "joel-stylis-574669-unsplash.jpg"
    },
    {
      "size": 72174,
      "url": "https://vetsinen.github.io/photobase/photos/jc-gellidon-422578-unsplash.jpg",
      "modified": 1541726123,
      "name": "jc-gellidon-422578-unsplash.jpg"
    },
    {
      "size": 74015,
      "url": "https://vetsinen.github.io/photobase/photos/martin-adams-551630-unsplash.jpg",
      "modified": 1541726133,
      "name": "martin-adams-551630-unsplash.jpg"
    },
    {
      "size": 78732,
      "url": "https://vetsinen.github.io/photobase/photos/john-cameron-746367-unsplash.jpg",
      "modified": 1541726127,
      "name": "john-cameron-746367-unsplash.jpg"
    },
    {
      "size": 81271,
      "url": "https://vetsinen.github.io/photobase/photos/aditya-saxena-639216-unsplash.jpg",
      "modified": 1541726088,
      "name": "aditya-saxena-639216-unsplash.jpg"
    },
    {
      "size": 82043,
      "url": "https://vetsinen.github.io/photobase/photos/patrick-hendry-373352-unsplash.jpg",
      "modified": 1541726144,
      "name": "patrick-hendry-373352-unsplash.jpg"
    },
    {
      "size": 82219,
      "url": "https://vetsinen.github.io/photobase/photos/aziz-acharki-294787-unsplash.jpg",
      "modified": 1541726093,
      "name": "aziz-acharki-294787-unsplash.jpg"
    },
    {
      "size": 97772,
      "url": "https://vetsinen.github.io/photobase/photos/matt-botsford-980244-unsplash.jpg",
      "modified": 1541726134,
      "name": "matt-botsford-980244-unsplash.jpg"
    },
    {
      "size": 161590,
      "url": "https://vetsinen.github.io/photobase/photos/paulo-mergulhao-1121662-unsplash.jpg",
      "modified": 1541726145,
      "name": "paulo-mergulhao-1121662-unsplash.jpg"
    }
  ];

}
