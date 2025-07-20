<script setup lang="ts">
    import { ref } from 'vue';
    import { employees } from './../data';
    import DxDataGrid, { DxEditing, DxForm } from 'devextreme-vue/data-grid';
    import { DxItem } from 'devextreme-vue/form';
    import DxToolbar, {DxItem as DxToolbarItem} from 'devextreme-vue/toolbar';

    import notify from 'devextreme/ui/notify';

    const elementAttr = {
        id: "gridForm"
    }
    const dataGridRef = ref<DxDataGrid>();
    const successButtonOptions = {
        type: 'success',
        stylingMode: 'outlined',
        text: 'Save',
        onClick: () => {
            dataGridRef.value?.instance?.saveEditData();
        }
    }
    const cancelButtonOptions = {
        type: "danger",
        stylingMode: "outlined",
        text: "Cancel",
        onClick: () => {
            dataGridRef.value?.instance?.cancelEditData();
        }
    }
    const copyButtonOptions = {
        text: "Copy Data",
        stylingMode: "outlined",
        onClick: () => {
            const rowKey = dataGridRef.value?.instance?.option('editing.editRowKey');
            const rowIndex = dataGridRef.value?.instance?.getRowIndexByKey(rowKey);
            const name = dataGridRef.value?.instance?.cellValue(rowIndex!, 'FirstName');
            const message = name ? name + "'s " : '';
            notify(`Copy ${message}data`);
        }
    }
</script>

<template>
    <DxDataGrid ref="dataGridRef" :data-source="employees" :element-attr="elementAttr">
        <DxEditing
            mode="form"
            :allowUpdating="true"
            :allowAdding="true"
            :allowDeleting="true">
            <DxForm :col-count="2">
                <DxItem data-field="Prefix"></DxItem>
                <DxItem data-field="FirstName"></DxItem>
                <DxItem data-field="LastName"></DxItem>
                <DxItem data-field="Position"></DxItem>
                <DxItem data-field="Address"></DxItem>
                <DxItem data-field="BirthDate"></DxItem>
                <DxItem item-type="simple" :colSpan="2">
                    <DxToolbar>
                        <DxToolbarItem
                            toolbar="bottom"
                            widget="dxButton"
                            location="after"
                            :options="successButtonOptions"></DxToolbarItem>
                        <DxToolbarItem
                            toolbar="bottom"
                            widget="dxButton"
                            location="after"
                            :options="cancelButtonOptions"></DxToolbarItem>
                        <DxToolbarItem
                            toolbar="bottom"
                            widget="dxButton"
                            location="before"
                            :options="copyButtonOptions"></DxToolbarItem>
                    </DxToolbar>
                </DxItem>
            </DxForm>
        </DxEditing>
    </DxDataGrid>
</template>