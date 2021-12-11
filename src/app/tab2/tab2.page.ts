import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  

  private selectedSegment: string = 'Playlists'
  
  constructor() {}

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  

  segmentChanged(event: any){
    console.log(event.target.value);
    this.selectedSegment = event.target.value
  }
}
