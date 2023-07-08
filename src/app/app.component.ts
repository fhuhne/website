import { Component } from '@angular/core';

export interface Section {
  name: string;
  url: string;
  fab: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  folders: Section[] = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/Faketuan1',
      fab: 'fa-twitter',
      color: '#55acee'
    },
    {
      name: 'Mastodon',
      url: 'https://mstdn.animexx.de/@finn',
      fab: 'fa-mastodon',
      color: '#6364FF'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/finny_senpai/',
      fab: 'fa-instagram',
      color: '#ac2bac'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/fhuhne',
      fab: 'fa-github',
      color: '#333333'
    },
  ];
}
