Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'App',

    launch: function() {
        var goldenSpiral = {},
        dimensions = [340,210,130,80,50,30,20,10],
        cycleEdges = ['bottom', 'right', 'top', 'left'];

        for (var i = dimensions.length; i >= 0; i--) {
            goldenSpiral = {
                width:  dimensions[ ( i%2 === 0) ? i : i+1 ],
                height: dimensions[ ( i%2 !== 0) ? i : i+1 ],
                docked: cycleEdges[ i % cycleEdges.length ],
                cls:    "panel-" + (i+1),
                items:  goldenSpiral
            };
        }

        Ext.Viewport.add({items: goldenSpiral});
    }
});
