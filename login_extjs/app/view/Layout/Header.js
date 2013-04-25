Ext.define('SampleApp.view.layout.Header', {
  extend        : 'Ext.panel.Panel',
  alias         : 'widget.layoutheader',
  title         : 'North',
split       : true,
      height      : 100,
      minSize     : 100,
      maxSize     : 200,
      collapsible : true,
      margins     : '5',
      height      : 100,
      region:'north',
      layout:'fit'
});