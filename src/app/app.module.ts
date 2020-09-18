import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { CollapseComponent } from './components/collapse/collapse.component'
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { HeaderComponent } from './components/header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CarouselCollapseComponent } from './components/carousel-collapse/carousel-collapse.component';
import { GameCarouselComponent } from './components/game-carousel/game-carousel.component';
import { GameCarouselModule } from './components/game-carousel/game-carousel.module';
import { InfoPaneComponent } from './components/info-pane/info-pane.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    CollapseComponent,
    HeaderComponent,
    CarouselCollapseComponent,
    GameCarouselComponent,
    InfoPaneComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    AppRoutingModule,
    NzAutocompleteModule,
    NzGridModule,
    NzCollapseModule,
    NzCarouselModule,
    NzDividerModule,
    NzCardModule,
    NzTableModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
    NzLayoutModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    GameCarouselModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
