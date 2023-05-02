<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/635287424/22.2.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1163556)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DataGrid for DevExtreme - How to customize built-in Edit Form buttons and add a custom button

This example demonstrates how to display the customized **Save** and **Cancel** buttons in [Form](https://js.devexpress.com/Documentation/Guide/UI_Components/DataGrid/Editing/#User_Interaction/Form_Mode) and [Popup](https://js.devexpress.com/Documentation/Guide/UI_Components/DataGrid/Editing/#User_Interaction/Popup_Mode) editing modes. This solution also adds a custom button.

| Popup | Form |
| ------------- | ------------- |
| ![CustomButtons-Popup](https://user-images.githubusercontent.com/13280527/235660079-40328312-a4aa-45d9-a938-52f50f967de5.png)  | ![CustomButtons-Form](https://user-images.githubusercontent.com/13280527/235659846-246a4c15-0acf-4f55-8d0f-ba279604483c.png)  |

## Implementation details
It is necessary to replace the built-in Save and Cancel buttons. The solutions for Popup and Form editing modes are different.

**Popup**: use the [DataGrid.Editing.Popup.toolbarItems](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/) array to define all the required buttons. These items will overwrite the built-in Save and Cancel buttons.

**Form**: add a [SimpleItem](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/) with a template. Place the [Toolbar component](https://js.devexpress.com/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/) in this template and define the required buttons in this toolbar. Use CSS to hide the built-in Save and Cancel buttons:
```css
#gridForm .dx-datagrid-form-buttons-container {  
    display: none  
}
```

## Files to Review

- **jQuery**
	- [EditingForm.js](jQuery/src/EditingForm.js)
	- [EditingPopup.js](jQuery/src/EditingPopup.js)
- **NetCore**    
	- [DataGridForm.cshtml](<ASP.NET Core/Views/PartialViews/DataGridForm.cshtml>)
	- [DataGridPopup.cshtml](<ASP.NET Core/Views/PartialViews/DataGridPopup.cshtml>)
	- [Index.cshtml](<ASP.NET Core/Views/Home/Index.cshtml>)

## Documentation

- [DataGrid Form](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#form)
