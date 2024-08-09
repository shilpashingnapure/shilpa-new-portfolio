import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent implements OnInit, AfterContentInit {
  @ContentChildren('sliderCard') contentTemplates!: QueryList<TemplateRef<any>>;
  carouselContents: TemplateRef<any>[] = [];
  currentIndex = 0;

  

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.carouselContents = this.contentTemplates.toArray();
    this.updateCarousel();
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0
        ? this.currentIndex - 1
        : this.carouselContents.length - 1;
    this.updateCarousel();
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.carouselContents.length - 1
        ? this.currentIndex + 1
        : 0;
    this.updateCarousel();
  }

  updateCarousel() {
    const carouselWrapper = document.querySelector(
      '.carousel-wrapper'
    ) as HTMLElement;
    if (carouselWrapper) {
      carouselWrapper.style.transform = `translateX(-${
        this.currentIndex * 100
      }%)`;
    }
  }
}
