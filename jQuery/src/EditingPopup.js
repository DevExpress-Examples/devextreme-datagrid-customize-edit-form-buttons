$(() => {
  const grid = $('#gridPopup').dxDataGrid({
    dataSource: getEmployees(),
    keyExpr: 'ID',
    showBorders: true,
    paging: {
      enabled: false,
    },
    editing: {
      mode: 'popup',
      allowUpdating: true,
      allowDeleting: true,
      allowAdding: true,
      popup: {
        width: 500,
        height: 400,
        toolbarItems: [{
          toolbar: 'bottom',
          widget: 'dxButton',
          location: 'after',
          options: {
            type: 'success',
            stylingMode: 'outlined',
            text: 'Save',
            onClick() {
              grid.saveEditData();
            },
          },
        }, {
          toolbar: 'bottom',
          widget: 'dxButton',
          location: 'after',
          options: {
            type: 'danger',
            stylingMode: 'outlined',
            text: 'Cancel',
            onClick() {
              grid.cancelEditData();
            },
          },
        }, {
          toolbar: 'bottom',
          widget: 'dxButton',
          location: 'before',
          options: {
            text: 'Copy Data',
            stylingMode: 'outlined',
            onClick() {
              const rowKey = grid.option('editing.editRowKey');
              const rowIndex = grid.getRowIndexByKey(rowKey);
              const name = grid.cellValue(rowIndex, 'FirstName');
              const message = name ? `${name}'s ` : '';
              DevExpress.ui.notify(`Copy ${message}data`);
            },
          },
        }],
      },
    },
    columns: [{
      dataField: 'Prefix',
      caption: 'Title',
      width: 80,
    }, 'FirstName',
    'LastName', {
      dataField: 'Position',
      width: 130,
    }, 'Address', {
      dataField: 'BirthDate',
      dataType: 'date',
      width: 125,
    },
    ],
  }).dxDataGrid('instance');
});
