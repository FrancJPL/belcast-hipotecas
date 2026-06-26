import { Component } from '@angular/core';
import { AccreditationBarComponent } from '../../components/accreditation-bar/accreditation-bar';
import { BanksSectionComponent } from '../../components/banks-section/banks-section';
import { ContactSectionComponent } from '../../components/contact-section/contact-section';
import { HeroComponent } from '../../components/hero/hero';
import { LocalCtaComponent } from '../../components/local-cta/local-cta';
import { ProcessTimelineComponent } from '../../components/process-timeline/process-timeline';
import { ServicesGridComponent } from '../../components/services-grid/services-grid';
import { ValuePropositionComponent } from '../../components/value-proposition/value-proposition';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroComponent,
    AccreditationBarComponent,
    ValuePropositionComponent,
    ProcessTimelineComponent,
    BanksSectionComponent,
    ServicesGridComponent,
    LocalCtaComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.html',
})
export class HomepageComponent {}
