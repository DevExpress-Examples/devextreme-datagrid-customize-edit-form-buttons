import DataGrid, { Editing, Paging, Popup } from 'devextreme-react/data-grid';
import { ToolbarItem } from 'devextreme-react/popup';
import { useRef, useMemo } from 'react';
import type { DataGridRef } from 'devextreme-react/data-grid';
import notify from 'devextreme/ui/notify';
import service from '../data';

const employees = service.getData();

function EditingPopup(): JSX.Element {
  const grid = useRef<DataGridRef>(null);
  const saveOptions = useMemo((): object => ({
    type: 'success',
    stylingMode: 'outlined',
    text: 'Save',
    onClick: (): void => {
      if (grid.current) {
        grid.current.instance().saveEditData().catch((error: unknown) => {
          console.error('Save error:', error);
        });
      }
    },
  }), []);
  const cancelOptions = useMemo((): object => ({
    type: 'danger',
    stylingMode: 'outlined',
    text: 'Cancel',
    onClick: (): void => {
      if (grid.current) {
        grid.current.instance().cancelEditData();
      }
    },
  }), []);
  const copyOptions = useMemo((): object => ({
    text: 'Copy Data',
    stylingMode: 'outlined',
    onClick: (): void => {
      if (grid.current) {
        const gridInstance = grid.current.instance();
        const rowKey = gridInstance.option('editing.editRowKey');
        const rowIndex = gridInstance.getRowIndexByKey(rowKey);
        const name = gridInstance.cellValue(rowIndex, 'FirstName');
        const message = name ? `${name}'s ` : '';
        notify(`Copy ${message}data`);
      }
    },
  }), []);

  return (<DataGrid
    ref={grid}
    dataSource={employees}
    keyExpr='ID'
    showBorders={true}>
    <Paging enabled={true}>
    </Paging>
    <Editing
      mode="popup"
      allowUpdating={true}
      allowDeleting={true}
      allowAdding={true}>
      <Popup
        width={500}
        height={400}>
        <ToolbarItem
          toolbar="bottom"
          widget="dxButton"
          location="after"
          options={saveOptions}>
        </ToolbarItem>
        <ToolbarItem
          toolbar="bottom"
          widget="dxButton"
          location="after"
          options={cancelOptions}>
        </ToolbarItem>
        <ToolbarItem
          toolbar="bottom"
          widget="dxButton"
          location="before"
          options={copyOptions}>
        </ToolbarItem>
      </Popup>
    </Editing>
  </DataGrid>);
}

export default EditingPopup;
