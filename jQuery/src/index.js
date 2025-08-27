$(() => {
  function createTabItemTemplate(contentID) {
    return $('<div>').attr('id', contentID).addClass('tab-item-content');
  }
  $('#tabPanel').dxTabPanel({
    deferRendering: false,
    items: [{
      title: 'Popup',
      template() {
        return createTabItemTemplate('grid-popup');
      },
    }, {
      title: 'Form',
      template() {
        return createTabItemTemplate('grid-form');
      },
    }],
  });
});
