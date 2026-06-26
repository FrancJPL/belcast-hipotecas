import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-accreditation-bar',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './accreditation-bar.html',
})
export class AccreditationBarComponent {}
