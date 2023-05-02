$(function () {
    function createTabItemTemplate(contentID) {
        return $("<div>").attr("id", contentID).addClass("tab-item-content");
    }
    $("#tabPanel").dxTabPanel({
        deferRendering: false,
        items: [{
            title: "Popup",
            template: function() {
                return createTabItemTemplate("gridPopup");
            }
        }, {
            title: "Form",
            template: function() {
                return createTabItemTemplate("gridForm");
            }
        }]
    })
});