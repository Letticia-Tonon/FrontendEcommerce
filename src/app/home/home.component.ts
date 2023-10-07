import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  imagens = ['https://oceane.vtexassets.com/assets/vtex.file-manager-graphql/images/7c84b9af-0e95-4c0f-a48d-babb570371c9___de77b3fb6395b42816a684a320e4cb15.png',
'https://oceane.vtexassets.com/assets/vtex.file-manager-graphql/images/ee34534b-b07b-441b-87fc-f7b9ab4397ef___c949288538c31bea67b09bea42bf8c2e.jpg',
'https://oceane.vtexassets.com/assets/vtex.file-manager-graphql/images/cf7a1baa-b060-49d7-90fc-9b9a3ad87eb7___ff954c712ee101c5629f22d191eaf063.jpg']
  constructor(){}
  ngOnInit(): void {
    
  }
}
