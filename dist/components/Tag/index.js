Component({properties:{text:{type:String,value:0},borderColor:{type:String,value:""},backgroundColor:{type:String,value:""},selectable:{type:Boolean,value:!1}},methods:{select(e){if(this.properties.selectable&&this.properties.borderColor&&this.properties.backgroundColor){let e=this.properties.borderColor,r=this.properties.backgroundColor;this.setData({borderColor:r,backgroundColor:e})}this.triggerEvent(e)}}});