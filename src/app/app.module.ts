import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { MainComponent } from './features/main/main.component';
import { HeaderComponent } from './core/components/header/header.component';

// Icons
// import { FastSvgModule } from '@push-based/ngx-fast-svg';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    MainComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FastSvgModule.forRoot({
    //   url: (name: string) => `/src/assets/icons/${name}.svg`,
    //   defaultSize: '32',
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
