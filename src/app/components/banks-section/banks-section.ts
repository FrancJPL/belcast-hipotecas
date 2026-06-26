import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-banks-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './banks-section.html',
})
export class BanksSectionComponent {
  banks = [
    'Sabadell', 'bankinter.', 'Santander', 'BBVA',
    'CaixaBank', 'ING', 'Deutsche Bank', 'Abanca',
    'Unicaja', 'EVO', 'Ibercaja', 'Kutxabank',
  ];
}
