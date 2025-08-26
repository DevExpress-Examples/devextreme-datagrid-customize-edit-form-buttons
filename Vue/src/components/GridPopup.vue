<script setup lang="ts">
import { ref } from 'vue';
import { employees } from './../data';
import DxDataGrid, { DxEditing, DxPopup } from 'devextreme-vue/data-grid';
import { DxToolbarItem } from 'devextreme-vue/popup';

import notify from 'devextreme/ui/notify';

const dataGridRef = ref<DxDataGrid | null>(null);
const successButtonOptions = {
  type: 'success',
  stylingMode: 'outlined',
  text: 'Save',
  onClick: (): void => {
    if (dataGridRef.value?.instance) {
      dataGridRef.value.instance.saveEditData().catch((error: unknown) => {
        console.error('Save error:', error);
      });
    }
  }
};
const cancelButtonOptions = {
  type: 'danger',
  stylingMode: 'outlined',
  text: 'Cancel',
  onClick: (): void => {
    if (dataGridRef.value?.instance) {
      dataGridRef.value.instance.cancelEditData();
    }
  }
};
const copyButtonOptions = {
  text: 'Copy Data',
  stylingMode: 'outlined',
  onClick: (): void => {
    if (dataGridRef.value?.instance) {
      const rowKey = dataGridRef.value.instance.option('editing.editRowKey');
      const rowIndex = dataGridRef.value.instance.getRowIndexByKey(rowKey);
      const name = dataGridRef.value.instance.cellValue(rowIndex, 'FirstName');
      const message = name ? `${name}'s ` : '';
      notify(`Copy ${message}data`);
    }
  }
};
</script>

<template>
  <DxDataGrid
    ref="dataGridRef"
    :data-source="employees"
  >
    <DxEditing
      mode="popup"
      :allow-updating="true"
      :allow-adding="true"
      :allow-deleting="true"
    >
      <DxPopup
        :width="500"
        :height="400"
      >
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
      </DxPopup>
    </DxEditing>
  </DxDataGrid>
</template>
