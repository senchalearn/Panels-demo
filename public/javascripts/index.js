Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'App',

    launch: function() {
        var dimensions = [340,210,130,80,50,30,20,10];

        Ext.Viewport.add({
            fullscreen: true,
            items: [{
                width: dimensions[0],
                height: dimensions[1],
                cls: 'panel-1',
                items: [{
                    docked: 'right',
                    width: dimensions[2],
                    height: dimensions[1],
                    cls: 'panel-2',
                    items: [{
                        docked: 'top',
                        width: dimensions[2],
                        height: dimensions[3],
                        cls: 'panel-3',
                        items: [{
                            docked: 'left',
                            width: dimensions[4],
                            height: dimensions[3],
                            cls: 'panel-4',
                            items: [{
                                docked: 'bottom',
                                width: dimensions[4],
                                height: dimensions[5],
                                cls: 'panel-5',
                                items: [{
                                    docked: 'right',
                                    width: dimensions[6],
                                    height: dimensions[5],
                                    cls: 'panel-6'
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        });
    }
});
