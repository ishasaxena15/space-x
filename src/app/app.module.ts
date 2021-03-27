import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ToggleFilterComponent } from './components/toggle-filter/toggle-filter.component';
import { ListFilterComponent } from './components/list-filter/list-filter.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LeftPanelComponent } from './pages/main-page/left-panel/left-panel.component';
import { RightPanelComponent } from './pages/main-page/right-panel/right-panel.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ToggleFilterComponent,
    ListFilterComponent,
    MainPageComponent,
    LeftPanelComponent,
    RightPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
