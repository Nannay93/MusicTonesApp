import { Component } from '@angular/core';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  };
  data = [
    {
      title: 'Recently listened to',
      albums: recentlyPlayed
    },
    {
      title: 'Discovery',
      albums: heavyRotation
    },
    {
      title: 'New releases',
      albums: jumpBackIn
    }
  ];

opts = {
  slidesPerView: 2.4,
  slidesOffsetBefore: 20,
  spaceBetween: 20,
  freeMode: true
}

  constructor() {}
// helper function for image name
  dasherize(string) {
    return string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };
}
