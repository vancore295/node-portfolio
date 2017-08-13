import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PagePageNotFoundComponent } from './components/page-page-not-found/page-page-not-found.component';
import { UnityGamesComponent } from './components/unity-games/unity-games.component';
import { ResumeComponent } from './components/resume/resume.component';
import { GamejamsComponent } from './components/gamejams/gamejams.component';
import { MadlibsComponent } from './components/madlibs/madlibs.component';

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
    MadlibsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
