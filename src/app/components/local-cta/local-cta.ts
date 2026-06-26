import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-local-cta',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './local-cta.html',
})
export class LocalCtaComponent {}
