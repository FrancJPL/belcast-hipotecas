import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-value-proposition',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './value-proposition.html',
})
export class ValuePropositionComponent {
  services = [
    {
      icon: 'home_work',
      title: 'Gestión de hipotecas',
      description: 'Tramitación integral y profesional de todo el proceso hipotecario desde el inicio hasta la firma.',
      delay: '0ms',
    },
    {
      icon: 'fact_check',
      title: 'Estudio gratuito',
      description: 'Analizamos tu situación financiera sin coste inicial para ofrecerte la viabilidad de tu operación.',
      delay: '100ms',
    },
    {
      icon: 'tune',
      title: 'Financiación a medida',
      description: 'Condiciones personalizadas según tu perfil, negociando directamente con las entidades bancarias.',
      delay: '200ms',
    },
  ];
}
