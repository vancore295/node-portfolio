import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PagePageNotFoundComponent } from './components/page-page-not-found/page-page-not-found.component';
import { UnityGamesComponent } from './components/unity-games/unity-games.component';
import { ResumeComponent } from './components/resume/resume.component';
import { GamejamsComponent } from './components/gamejams/gamejams.component';
import { MadlibsComponent } from './components/madlibs/madlibs.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { ProverbsComponent } from './components/proverbs/proverbs.component';
import { WarComponent } from './components/war/war.component';
import { MenuitemComponent } from './components/menuitem/menuitem.component';

// Servics
import { MenuService } from './services/menu.service';
const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Agassou Studios' } },
  { path: 'resume', component: ResumeComponent },
  { path: 'unityGames', component: UnityGamesComponent },
  { path: 'gameJams', component: GamejamsComponent },
  { path: 'madlibs', component: MadlibsComponent },
  { path: '**', component: PagePageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagePageNotFoundComponent,
    UnityGamesComponent,
    ResumeComponent,
    GamejamsComponent,
    MadlibsComponent,
    GreetingsComponent,
    ProverbsComponent,
    WarComponent,
    MenuitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [
    MenuService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
