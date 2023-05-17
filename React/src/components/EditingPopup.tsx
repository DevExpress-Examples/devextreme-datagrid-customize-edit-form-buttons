import DataGrid, { Editing, Paging, Popup } from "devextreme-react/data-grid";
import { ToolbarItem } from "devextreme-react/popup";
import { ClickEvent } from "devextreme/ui/button";
import { useCallback, useRef } from "react";
import service from "../data";

import notify from "devextreme/ui/notify";

const employees = service.getData();

function EditingPopup(){
    const grid = useRef(null);
    const saveButtonClick = useCallback((e:ClickEvent) => {
        (grid.current as any).instance.saveEditData();
    },[])
    const saveOptions = {
        type: 'success',
        stylingMode: 'outlined',
        text:'Save',
        onClick: saveButtonClick,
    }
    const cancelButtonClick = useCallback((e:ClickEvent)=>{
        (grid.current as any).instance.cancelEditData();
    }, [])
    const cancelOptions = {
        type: 'danger',
        stylingMode: 'outlined',
        text:'Cancel',
        onClick: cancelButtonClick,
    }
    const copyButtonClick = useCallback((e:ClickEvent) => {
        const gridInstance = (grid.current as any).instance;
        const rowKey = gridInstance.option("editing.editRowKey");
        const rowIndex = gridInstance.getRowIndexByKey(rowKey);
        const name = gridInstance.cellValue(rowIndex, "FirstName");
        const message = name ? name+"'s ":"";
        notify(`Copy ${message}data`);
    }, []);
    const copyOptions = {
        text: "Copy Data",
        stylingMode: "outlined",
        onClick: copyButtonClick,
    }

    return(<DataGrid
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
        </DataGrid>)
}

export default EditingPopup;