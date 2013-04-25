Ext.define('SampleApp.view.layout.Left', {
  extend        : 'Ext.panel.Panel',
  alias         : 'widget.layoutleft',
  title         : 'Left',
  split       : true,
      minSize     : 100,
      maxSize     : 200,
      collapsible : true,
      margins     : '0 5 0 5',
      width      : 100,
      region:'west',
      layout:'fit'
});