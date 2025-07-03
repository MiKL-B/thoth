import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { LucideIconComponent } from "../../components/shared/lucide-icon/lucide-icon.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, LucideIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
