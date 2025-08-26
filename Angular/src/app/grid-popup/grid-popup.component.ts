import { Component, Input, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { Employee } from '../app.service';

@Component({
  selector: 'grid-popup',
  templateUrl: './grid-popup.component.html',
  styleUrls: ['./grid-popup.component.scss'],
})
export class GridPopupComponent {
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
        if (this.dataGrid) {
          this.dataGrid.instance.saveEditData().catch((error: unknown) => {
            console.error('Save error:', error);
          });
        }
      },
    };

    this.cancelButtonOptions = {
      type: 'danger',
      stylingMode: 'outlined',
      text: 'Cancel',
      onClick: (): void => {
        if (this.dataGrid) {
          this.dataGrid.instance.cancelEditData();
        }
      },
    };

    this.copyButtonOptions = {
      text: 'Copy Data',
      stylingMode: 'outlined',
      onClick: (): void => {
        if (this.dataGrid) {
          const rowKey = this.dataGrid.instance.option('editing.editRowKey');
          const rowIndex = this.dataGrid.instance.getRowIndexByKey(rowKey);
          const name = this.dataGrid.instance.cellValue(rowIndex, 'FirstName');
          const message = name ? `${name}'s ` : '';
          notify(`Copy ${message}data`);
        }
      },
    };
  }
}
