import Toolbar, { Item as ToolbarItem } from "devextreme-react/toolbar";
import DataGrid, { Editing, Form, Paging } from "devextreme-react/data-grid";
import { Item } from 'devextreme-react/form';
import { ClickEvent } from "devextreme/ui/button";
import notify from "devextreme/ui/notify";
import { useCallback, useRef } from "react";
import service from "../data";

const employees = service.getData();

function EditingForm(){
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

    const formToolbar = () => {
        return(<Toolbar>
            <ToolbarItem
                widget="dxButton"
                location="after"
                options={saveOptions}>
            </ToolbarItem>
            <ToolbarItem
                widget="dxButton"
                location="after"
                options={cancelOptions}>
            </ToolbarItem>
            <ToolbarItem
                widget="dxButton"
                location="before"
                options={copyOptions}>
            </ToolbarItem>
        </Toolbar>);
    }

    return(<DataGrid
        ref={grid}
        id="gridForm"
        dataSource={employees}
        keyExpr='ID'
        showBorders={true}>
            <Paging enabled={true}>
            </Paging>
            <Editing
                mode="form"
                allowUpdating={true}
                allowDeleting={true}
                allowAdding={true}>
                <Form colCount={2} >
                    <Item dataField="Prefix"></Item>
                    <Item dataField="FirstName"></Item>
                    <Item dataField="LastName"></Item>
                    <Item dataField="Position"></Item>
                    <Item dataField="Address"></Item>
                    <Item dataField="BirthDate"></Item>
                    <Item colSpan={2} itemType="simple" render={formToolbar}></Item>
                </Form>
            </Editing>
        </DataGrid>)
}

export default EditingForm;