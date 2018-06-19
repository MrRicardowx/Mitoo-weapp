Component({
    externalClasses : ['mit-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        brandColor: {
            type: String,
            value: ''
        },
        scroll: {
            type: Boolean,
            value: false
        },
        isScroll: {
            type: Boolean,
            value: false
        }
    },
    data: {
    },
    relations: {
        '../Tabs-Cell/index': {
            type: 'child',
            linked(target) {
                let nodes = this.getRelationNodes('../Tabs-Cell/index');
                if (nodes.length > 6) {
                    this.setData({
                        'isScroll': true
                    })
                }
            }
        },

    },
    methods: {
    }
})