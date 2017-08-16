import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NdaComponent } from './nda/nda.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { VisualDevelopmentComponent } from './visual-development/visual-development.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { StoryTreatmentComponent } from './story-treatment/story-treatment.component';
import { BiographyComponent } from './biography/biography.component';
import { ContactComponent } from './contact/contact.component';

import { NavBarComponent } from './sub-components/nav-bar/nav-bar.component';
import { EnLogoComponent } from './sub-components/en-logo/en-logo.component';
import { VisualDevelopmentModalComponent } from './sub-components/visual-development-modal/visual-development-modal.component';

const appRoutes: Routes = [
    {path: 'nda', component: NdaComponent},
    {path: 'home', component: HomeComponent},
    {path: 'presentation', component: PresentationComponent},
    {path: 'visual-development', component: VisualDevelopmentComponent},
    {path: 'inspiration', component: InspirationComponent},
    {path: 'story-treatment', component: StoryTreatmentComponent},
    {path: 'biography', component: BiographyComponent},
    {path: 'contact', component: ContactComponent},
    {path: '', redirectTo: '/nda', pathMatch: 'full'},
    {path: '**', redirectTo: '/home'}
];

@NgModule({
  declarations: [
    AppComponent,
    NdaComponent,
    HomeComponent,
    PresentationComponent,
    VisualDevelopmentComponent,
    InspirationComponent,
    StoryTreatmentComponent,
    BiographyComponent,
    ContactComponent,
    NavBarComponent,
    EnLogoComponent,
    VisualDevelopmentModalComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(
          appRoutes, {enableTracing: true}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
