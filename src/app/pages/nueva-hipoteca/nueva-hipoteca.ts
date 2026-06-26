import { Component } from '@angular/core';
import { AccreditationBarComponent } from '../../components/accreditation-bar/accreditation-bar';
import { BanksSectionComponent } from '../../components/banks-section/banks-section';
import { ContactSectionComponent } from '../../components/contact-section/contact-section';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-nueva-hipoteca-page',
  standalone: true,
  imports: [RevealDirective, ContactSectionComponent, AccreditationBarComponent, BanksSectionComponent],
  templateUrl: './nueva-hipoteca.html',
})
export class NuevaHipotecaPageComponent {
  mortgageTypes = [
    {
      icon: 'lock',
      title: 'Hipoteca Fija',
      description:
        'Cuota estable durante toda la vida del préstamo. Ideal si buscas seguridad y estabilidad financiera a largo plazo.',
      badge: 'Más popular',
      delay: '0ms',
    },
    {
      icon: 'show_chart',
      title: 'Hipoteca Variable',
      description:
        'Cuota vinculada al euríbor. Puede ser interesante si buscas pagar menos intereses a corto y medio plazo.',
      badge: null,
      delay: '100ms',
    },
    {
      icon: 'balance',
      title: 'Hipoteca Mixta',
      description:
        'Combina un tramo fijo inicial y otro variable posterior, ofreciendo equilibrio entre estabilidad y flexibilidad.',
      badge: 'Equilibrio ideal',
      delay: '200ms',
    },
  ];

  assessmentFactors = [
    {
      icon: 'payments',
      title: 'Nivel de ingresos',
      description: 'Los bancos calculan la cuota máxima en base a tus ingresos netos mensuales.',
      delay: '0ms',
    },
    {
      icon: 'work',
      title: 'Estabilidad laboral',
      description: 'Un contrato indefinido o antigüedad demostrable mejora significativamente tu perfil.',
      delay: '100ms',
    },
    {
      icon: 'account_balance_wallet',
      title: 'Endeudamiento actual',
      description: 'Tus deudas existentes (préstamos, tarjetas) se incluyen en el análisis de riesgo.',
      delay: '200ms',
    },
    {
      icon: 'home',
      title: 'Tipo de vivienda',
      description: 'La localización y tipología del inmueble influyen en el porcentaje de financiación aprobado.',
      delay: '300ms',
    },
  ];

  keyAspects = [
    {
      icon: 'shield',
      title: 'Productos vinculados',
      description:
        'Revisa bien los seguros, nóminas o tarjetas que el banco puede exigirte como condición para la hipoteca.',
    },
    {
      icon: 'calculate',
      title: 'Comisión por amortización anticipada',
      description: 'Conoce el coste de devolver el préstamo antes de tiempo, ya sea de forma total o parcial.',
    },
    {
      icon: 'swap_horiz',
      title: 'Condiciones de subrogación futura',
      description: 'Comprueba si podrás cambiar de banco en el futuro sin penalizaciones excesivas.',
    },
  ];

  whyBelcaItems = [
    {
      icon: 'search',
      title: 'Estudio gratuito y sin compromisos',
      description: 'Analizamos tu caso sin coste y te decimos lo que puedes conseguir antes de comprometerte.',
      delay: '0ms',
    },
    {
      icon: 'compare',
      title: 'Comparativa real entre bancos',
      description: 'Tenemos acuerdos con más de 20 entidades y negociamos la mejor oferta para tu perfil.',
      delay: '100ms',
    },
    {
      icon: 'manage_accounts',
      title: 'Gestión integral del proceso',
      description: 'Nos encargamos de toda la documentación, negociación y seguimiento hasta la firma.',
      delay: '200ms',
    },
    {
      icon: 'handshake',
      title: 'Acompañamiento hasta notaría',
      description: 'Estamos contigo desde el primer contacto hasta que firmas ante notario.',
      delay: '300ms',
    },
  ];
}
