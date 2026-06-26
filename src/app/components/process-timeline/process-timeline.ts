import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-process-timeline',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './process-timeline.html',
})
export class ProcessTimelineComponent {
  steps = [
    {
      number: 1,
      title: 'Estudio gratuito personalizado',
      description: 'Analizamos tu situación financiera, ingresos, ahorros y objetivos para determinar tu capacidad real de financiación.',
      side: 'left',
      delay: '0ms',
    },
    {
      number: 2,
      title: 'Analizamos tu perfil financiero',
      description: 'Estudiamos tus ingresos, ahorros y capacidad de endeudamiento para determinar qué hipoteca puedes conseguir en El Prat de Llobregat y alrededores.',
      side: 'right',
      delay: '100ms',
    },
    {
      number: 3,
      title: 'Comparamos y negociamos con bancos',
      description: 'Presentamos tu perfil a distintas entidades y negociamos las mejores condiciones en tipo de interés, plazo y vinculaciones.',
      side: 'left',
      delay: '200ms',
    },
    {
      number: 4,
      title: 'Te explicamos cada detalle',
      description: 'Revisamos contigo la oferta, resolvemos dudas y analizamos la "letra pequeña" para que firmes con total tranquilidad.',
      side: 'right',
      delay: '300ms',
    },
    {
      number: 5,
      title: 'Firma y empieza a ahorrar',
      description: 'Te acompañamos hasta notaría y nos aseguramos de que todo esté correcto para que disfrutes de tu vivienda con la mejor financiación posible.',
      side: 'left',
      delay: '400ms',
    },
  ];
}
