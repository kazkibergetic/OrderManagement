import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryOrder} from 'ngx-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      { "image": false, "height": "2000px", "thumbnailsColumns": 6, "thumbnailsRows": 20, "width": "1200px", "thumbnailsArrows": false, "thumbnailsOrder": NgxGalleryOrder.Page},
      { "breakpoint": 700, "width": "100%", }
  ];

    this.galleryImages = [
      {
        small: 'assets/1-small.jpg',
        medium: 'assets/1-small.jpg',
        big: 'assets/1-small.jpg'
      },
      {
        small: 'assets/2-small.jpg',
        medium: 'assets/2-small.jpg',
        big: 'assets/2-small.jpg'
      },
      {
        small: 'assets/3-small.jpg',
        medium: 'assets/3-small.jpg',
        big: 'assets/3-small.jpg'
      },
      {
        small: 'assets/1-small.jpg',
        medium: 'assets/1-small.jpg',
        big: 'assets/1-small.jpg'
      },
      {
        small: 'assets/2-small.jpg',
        medium: 'assets/2-small.jpg',
        big: 'assets/2-small.jpg'
      },
      {
        small: 'assets/3-small.jpg',
        medium: 'assets/3-small.jpg',
        big: 'assets/3-small.jpg'
      },
      {
        small: 'assets/1-small.jpg',
        medium: 'assets/1-small.jpg',
        big: 'assets/1-small.jpg'
      },
      {
        small: 'assets/2-small.jpg',
        medium: 'assets/2-small.jpg',
        big: 'assets/2-small.jpg'
      },
      {
        small: 'assets/3-small.jpg',
        medium: 'assets/3-small.jpg',
        big: 'assets/3-small.jpg'
      },
      {
        small: 'assets/1-small.jpg',
        medium: 'assets/1-small.jpg',
        big: 'assets/1-small.jpg'
      },
      {
        small: 'assets/2-small.jpg',
        medium: 'assets/2-small.jpg',
        big: 'assets/2-small.jpg'
      },
      {
        small: 'assets/3-small.jpg',
        medium: 'assets/3-small.jpg',
        big: 'assets/3-small.jpg'
      },
      {
        small: 'assets/1-small.jpg',
        medium: 'assets/1-small.jpg',
        big: 'assets/1-small.jpg'
      },
      {
        small: 'assets/2-small.jpg',
        medium: 'assets/2-small.jpg',
        big: 'assets/2-small.jpg'
      },
      {
        small: 'assets/3-small.jpg',
        medium: 'assets/3-small.jpg',
        big: 'assets/3-small.jpg'
      },
      {
        small: 'assets/1-small.jpg',
        medium: 'assets/1-small.jpg',
        big: 'assets/1-small.jpg'
      },
      {
        small: 'assets/2-small.jpg',
        medium: 'assets/2-small.jpg',
        big: 'assets/2-small.jpg'
      },
      {
        small: 'assets/3-small.jpg',
        medium: 'assets/3-small.jpg',
        big: 'assets/3-small.jpg'
      },
    ];
  }
}
