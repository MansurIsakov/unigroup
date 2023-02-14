import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { MainComponent } from './features/main/main.component';
import { HeaderComponent } from './core/components/header/header.component';

// Icons
import { FastSvgModule } from '@push-based/ngx-fast-svg';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MainCardComponent } from './features/main/components/main-card/main-card.component';
import { BaseButtonComponent } from './shared/components/base-button/base-button.component';
import { DiscoverComponent } from './features/discover/discover.component';
import { BlogComponent } from './features/blog/blog.component';
import { DiscoverSearchComponent } from './features/discover/components/discover-search/discover-search.component';
import { DiscoverSliderComponent } from './features/discover/components/discover-slider/discover-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    MainComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    MainCardComponent,
    BaseButtonComponent,
    DiscoverComponent,
    BlogComponent,
    DiscoverSearchComponent,
    DiscoverSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FastSvgModule.forRoot({
      url: (name: string) => `/assets/icons/${name}.svg`,
      defaultSize: '32',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
