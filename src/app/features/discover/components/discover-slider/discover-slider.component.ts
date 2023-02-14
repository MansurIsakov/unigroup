import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import KeenSlider, { KeenSliderInstance, TrackDetails } from 'keen-slider';

@Component({
  selector: 'app-discover-slider',
  templateUrl: './discover-slider.component.html',
  styleUrls: [
    '../../../../../../node_modules/keen-slider/keen-slider.min.css',
    './discover-slider.component.scss',
  ],
})
export class DiscoverSliderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  images: string[] = [
    'wiut-showcase.jpeg',
    'wut-showcase.jpeg',
    'iut-showcase.jpeg',
    'yeoju-showcase.webp',
    'mdist-showcase.jpeg',
    'turin-showcase.jpeg',
    'aut-showcase.webp',
  ];

  details: TrackDetails | undefined;
  slider: KeenSliderInstance | null = null;
  currentSlide = 1;
  dotHelper: Array<number> = [];

  scaleStyle(idx: any) {
    if (!this.details) return {};
    const slide = this.details.slides[idx];
    const scaleSize = 0.7;
    const scale = 1 - (scaleSize - scaleSize * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        detailsChanged: s => {
          this.details = s.track.details;
        },
        initial: 0,
        rtl: true,
        slides: {
          perView: 3,
          spacing: 10,
        },
      });
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
