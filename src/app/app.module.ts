import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChatModule } from './modules/chat/chat.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
import { ModalComponent } from './components/modal/modal.component';
import { ShopListItemComponent } from './components/shop-list-item/shop-list-item.component';
import { JobHistoryComponent } from './components/job-history/job-history.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

// Servics
import { MenuService } from './services/menu/menu.service';
import { ShopService } from './services/shop/shop.service';
import { MadlibService } from './services/madlibs/madlib.service';

// Routes
import { RoutingModule } from './routing.module';




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
    MenuitemComponent,
    ShopComponent,
    ShopitemComponent,
    ModalComponent,
    ShopListItemComponent,
    JobHistoryComponent,
    ProjectsComponent,
    SkillsComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RoutingModule,
    ChatModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    MenuService,
    ShopService,
    MadlibService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
