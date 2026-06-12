import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Service, Employee } from './app.service';
import { DxTabPanelModule, DxDataGridModule, DxToolbarModule } from 'devextreme-angular';
import { GridFormComponent } from './grid-form/grid-form.component';
import { GridPopupComponent } from './grid-popup/grid-popup.component';

@Component({
  selector: 'app-root',
  imports: [DxTabPanelModule, DxDataGridModule, DxToolbarModule, GridFormComponent, GridPopupComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  employees: Employee[];

  constructor(service: Service) {
    this.employees = service.getEmployees();
  }
}
