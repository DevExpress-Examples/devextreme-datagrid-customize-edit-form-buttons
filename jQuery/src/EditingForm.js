$(function () {
    const grid = $("#gridForm").dxDataGrid({
        dataSource: getEmployees(),
        keyExpr: 'ID',
        showBorders: true,
        paging: {
          enabled: false,
        },
        editing: {
          mode: 'form',
          allowUpdating: true,
          allowDeleting: true,
          allowAdding: true,
          form: {
            colCount: 2,
            items: [
              "Prefix", "FirstName", "LastName", "Position", "Address", "BirthDate",
              {
                itemType: "simple",
                colSpan: 2,
                template: function(data, container) {
                  const toolbarContainer = $("<div>");
                  container.append(toolbarContainer);
                  toolbarContainer.dxToolbar({
                    items: [{
                      widget: "dxButton",
                      location: "after",
                      options: {
                        type: "success",
                        stylingMode: "outlined",
                        text: "Save",
                        onClick() {
                          grid.saveEditData();
                        }
                      }
                    }, {
                      widget: "dxButton",
                      location: "after",
                      options: {
                        type: "danger",
                        stylingMode: "outlined",
                        text: "Cancel",
                        onClick() {
                          grid.cancelEditData();
                        }
                      }
                    }, {
                      widget: "dxButton",
                      location: "before",
                      options: {
                        text: "Copy Data",
                        stylingMode: "outlined",
                        onClick() {
                          const rowKey = grid.option("editing.editRowKey");
                          const rowIndex = grid.getRowIndexByKey(rowKey);
                          const name = grid.cellValue(rowIndex, "FirstName");
                          const message = name ? name + "'s " : "";
                          DevExpress.ui.notify(`Copy ${message}data`);
                        }
                      }
                    }]
                  });
                }
              }
            ]
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
        ]
    }).dxDataGrid("instance");
});