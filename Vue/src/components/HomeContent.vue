<script setup lang="ts">
  import "devextreme/dist/css/dx.material.blue.light.compact.css";

  import DxTabPanel, {DxItem} from 'devextreme-vue/tab-panel';
  import GridPopup from "./GridPopup.vue";
  import GridForm from "./GridForm.vue";

</script>
<template>
  <div>
    <DxTabPanel>
      <DxItem title="Popup">
        <grid-popup></grid-popup>
      </DxItem>
      <DxItem title="Form">
        <grid-form></grid-form>
      </DxItem>
    </DxTabPanel>
  </div>
</template>
