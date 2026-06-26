import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AccreditationBarComponent } from './components/accreditation-bar/accreditation-bar';
import { ValuePropositionComponent } from './components/value-proposition/value-proposition';
import { ProcessTimelineComponent } from './components/process-timeline/process-timeline';
import { BanksSectionComponent } from './components/banks-section/banks-section';
import { ServicesGridComponent } from './components/services-grid/services-grid';
import { LocalCtaComponent } from './components/local-cta/local-cta';
import { ContactSectionComponent } from './components/contact-section/contact-section';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AccreditationBarComponent,
    ValuePropositionComponent,
    ProcessTimelineComponent,
    BanksSectionComponent,
    ServicesGridComponent,
    LocalCtaComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
