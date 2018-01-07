import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
import { ShopComponent } from './components/shop/shop.component';
import { ShopitemComponent } from './components/shopitem/shopitem.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Agassou Studios' } },
    { path: 'resume', component: ResumeComponent },
    { path: 'unityGames', component: UnityGamesComponent },
    { path: 'gameJams', component: GamejamsComponent },
    { path: 'madlibs', component: MadlibsComponent },
    { path: 'shop', component: ShopComponent },
    { path: '**', component: PagePageNotFoundComponent }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { enableTracing: false }) ],
    exports: [ RouterModule ]
  })

  export class RoutingModule {}
