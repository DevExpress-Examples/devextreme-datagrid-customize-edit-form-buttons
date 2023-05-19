import DataGrid, { Editing, Paging, Popup } from "devextreme-react/data-grid";
import { ToolbarItem } from "devextreme-react/popup";
import { ClickEvent } from "devextreme/ui/button";
import { useCallback, useRef, useMemo } from "react";
import service from "../data";

import notify from "devextreme/ui/notify";

const employees = service.getData();

function EditingPopup(){
    const grid = useRef<DataGrid>(null);
    const saveButtonClick = useCallback((e:ClickEvent) => {
        grid.current!.instance.saveEditData();
    },[])
    const saveOptions = useMemo(() => {
        return {
            type: 'success',
            stylingMode: 'outlined',
            text:'Save',
            onClick: saveButtonClick,
        }
    }, [saveButtonClick])
    const cancelButtonClick = useCallback((e:ClickEvent)=>{
        grid.current!.instance.cancelEditData();
    }, [])
    const cancelOptions = useMemo(() => {
        return {
            type: 'danger',
            stylingMode: 'outlined',
            text:'Cancel',
            onClick: cancelButtonClick,
        }
    }, [cancelButtonClick]);
    const copyButtonClick = useCallback((e:ClickEvent) => {
        const gridInstance = grid.current!.instance;
        const rowKey = gridInstance.option("editing.editRowKey");
        const rowIndex = gridInstance.getRowIndexByKey(rowKey);
        const name = gridInstance.cellValue(rowIndex, "FirstName");
        const message = name ? name+"'s ":"";
        notify(`Copy ${message}data`);
    }, []);
    const copyOptions = useMemo(() => {
        return {
            text: "Copy Data",
            stylingMode: "outlined",
            onClick: copyButtonClick,
        }
    }, [copyButtonClick]);

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