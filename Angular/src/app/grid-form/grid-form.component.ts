import { Component, Input, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { Employee } from '../app.service';

@Component({
  selector: 'grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.scss'],
})
export class GridFormComponent {
  @ViewChild('targetDataGrid', { static: false })
    dataGrid!: DxDataGridComponent;

  @Input() employees!: Employee[];

  successButtonOptions: object;

  cancelButtonOptions: object;

  copyButtonOptions: object;

  constructor() {
    this.successButtonOptions = {
      type: 'success',
      stylingMode: 'outlined',
      text: 'Save',
      onClick: (): void => {
        const instance = this.dataGrid?.instance;
        if (!instance) return;

        instance.saveEditData().catch((error: unknown) => {
          console.error('Save error:', error);
        });
      },
    };

    this.cancelButtonOptions = {
      type: 'danger',
      stylingMode: 'outlined',
      text: 'Cancel',
      onClick: (): void => {
        const instance = this.dataGrid?.instance;
        if (!instance) return;

        instance.cancelEditData();
      },
    };

    this.copyButtonOptions = {
      text: 'Copy Data',
      stylingMode: 'outlined',
      onClick: (): void => {
        const instance = this.dataGrid?.instance;
        if (!instance) return;

        const rowKey = instance.option('editing.editRowKey');
        const rowIndex = instance.getRowIndexByKey(rowKey);
        const name = instance.cellValue(rowIndex, 'FirstName');
        const message = name ? `${name}'s ` : '';
        notify(`Copy ${message}data`);
      },
    };
  }
}
