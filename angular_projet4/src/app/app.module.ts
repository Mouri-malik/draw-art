import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ProfilComponent } from './profil/profil.component';
import { MessageComponent } from './message/message.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexHeaderComponentComponent } from './index-header-component/index-header-component.component';
import { IndexSuggestionComponentComponent } from './index-suggestion-component/index-suggestion-component.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { DrawUserComponent } from './draw-user/draw-user.component';

const appRoutes: Routes = [
  {path: 'profil', component: ProfilComponent},
  {path: 'draw-user', component: DrawUserComponent},
  {path: 'message', component: MessageComponent},
  {path: 'search', component: SearchComponent},
  {path: '', component: IndexComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfilComponent,
    MessageComponent,
    SearchComponent,
    IndexHeaderComponentComponent,
    IndexSuggestionComponentComponent,
    DrawUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}