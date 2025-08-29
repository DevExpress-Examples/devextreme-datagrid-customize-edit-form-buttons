<script setup lang="ts">
import { ref } from 'vue';
import { employees } from './../data';
import DxDataGrid, { DxEditing, DxForm } from 'devextreme-vue/data-grid';
import { DxItem } from 'devextreme-vue/form';
import DxToolbar, { DxItem as DxToolbarItem } from 'devextreme-vue/toolbar';

import notify from 'devextreme/ui/notify';

const elementAttr = {
  id: 'gridForm'
};
const dataGridRef = ref<DxDataGrid | null>(null);
const successButtonOptions = {
  type: 'success',
  stylingMode: 'outlined',
  text: 'Save',
  onClick: (): void => {
    const instance = dataGridRef.value?.instance;
    if (!instance) return;

    instance.saveEditData().catch((error: unknown) => {
      console.error('Save error:', error);
    });
  }
};
const cancelButtonOptions = {
  type: 'danger',
  stylingMode: 'outlined',
  text: 'Cancel',
  onClick: (): void => {
    const instance = dataGridRef.value?.instance;
    if (!instance) return;

    instance.cancelEditData();
  }
};
const copyButtonOptions = {
  text: 'Copy Data',
  stylingMode: 'outlined',
  onClick: (): void => {
    const instance = dataGridRef.value?.instance;
    if (!instance) return;

    const rowKey = instance.option('editing.editRowKey');
    const rowIndex = instance.getRowIndexByKey(rowKey);
    const name = instance.cellValue(rowIndex, 'FirstName');
    const message = name ? `${name}'s ` : '';
    notify(`Copy ${message}data`);
  }
};
</script>

<template>
  <DxDataGrid
    ref="dataGridRef"
    :data-source="employees"
    :element-attr="elementAttr"
  >
    <DxEditing
      mode="form"
      :allow-updating="true"
      :allow-adding="true"
      :allow-deleting="true"
    >
      <DxForm :col-count="2">
        <DxItem data-field="Prefix"/>
        <DxItem data-field="FirstName"/>
        <DxItem data-field="LastName"/>
        <DxItem data-field="Position"/>
        <DxItem data-field="Address"/>
        <DxItem data-field="BirthDate"/>
        <DxItem
          item-type="simple"
          :col-span="2"
        >
          <DxToolbar>
            <DxToolbarItem
              toolbar="bottom"
              widget="dxButton"
              location="after"
              :options="successButtonOptions"
            />
            <DxToolbarItem
              toolbar="bottom"
              widget="dxButton"
              location="after"
              :options="cancelButtonOptions"
            />
            <DxToolbarItem
              toolbar="bottom"
              widget="dxButton"
              location="before"
              :options="copyButtonOptions"
            />
          </DxToolbar>
        </DxItem>
      </DxForm>
    </DxEditing>
  </DxDataGrid>
</template>
