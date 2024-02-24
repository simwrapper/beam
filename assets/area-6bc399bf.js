import{d as g,g as f,U as m,B as h,S as d,n as p}from"./index-c7e5a57b.js";import{V as y}from"./VuePlotly-8171a665.js";import{b as x}from"./DashBoard-1ff96aca.js";import"./index-82870421.js";import"./HTTPFileSystem-8108f96f.js";import"./TopSheet-2b32f763.js";const S=g({name:"AreaChartPanel",components:{VuePlotly:y},props:{fileSystemConfig:{type:Object,required:!0},subfolder:{type:String,required:!0},files:{type:Array,required:!0},config:{type:Object,required:!0},cardTitle:{type:String,required:!0},cardId:String,datamanager:{type:Object,required:!0}},data:()=>({globalState:f.state,dataSet:{},id:"area-"+Math.floor(1e12*Math.random()),YAMLrequirementsArea:{dataset:"",x:""},data:[],layout:{height:300,margin:{t:8,b:0,l:0,r:0,pad:2},font:{color:"#444444",family:m},xaxis:{automargin:!0,autorange:!0,title:{text:"",standoff:12},animate:!0},yaxis:{automargin:!0,autorange:!0,title:{text:"",standoff:16},animate:!0,showgrid:!1},legend:{orientation:"v",x:1,y:1}},options:{displaylogo:!1,responsive:!0,automargin:!0,modeBarButtonsToRemove:["pan2d","zoom2d","select2d","lasso2d","zoomIn2d","zoomOut2d","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","resetScale2d","toggleSpikelines","resetViewMapbox"],toImageButtonOptions:{format:"png",filename:"area-chart",width:null,height:null}}}),async mounted(){this.updateLayout(),this.updateTheme(),this.options.toImageButtonOptions.filename=x(this.cardTitle,this.subfolder),this.dataSet=await this.loadData(),this.updateChart(),this.$emit("dimension-resizer",{id:this.cardId,resizer:this.changeDimensions}),this.$emit("isLoaded")},beforeDestroy(){var t;(t=this.datamanager)==null||t.removeFilterListener(this.config,this.handleFilterChanged)},watch:{"globalState.isDarkMode"(){this.updateTheme()}},methods:{changeDimensions(t){this.layout=Object.assign({},this.layout,t)},updateLayout(){this.layout.xaxis.title.text=this.config.xAxisTitle||this.config.xAxisName||"",this.layout.yaxis.title.text=this.config.yAxisTitle||this.config.yAxisName||""},updateTheme(){const t={paper_bgcolor:h[this.globalState.colorScheme],plot_bgcolor:h[this.globalState.colorScheme],font:{color:this.globalState.isDarkMode?"#cccccc":"#444444"}};this.layout=Object.assign({},this.layout,t)},handleFilterChanged(){if(!this.datamanager)return;const{filteredRows:t}=this.datamanager.getFilteredDataset(this.config);if(!t||!t.length)this.dataSet={allRows:{}};else{const e={},a=Object.keys(t[0]);a.forEach(i=>e[i]={name:i,values:[]}),t.forEach(i=>{a.forEach(s=>e[s].values.push(i[s]))}),this.dataSet={allRows:e}}this.updateChart()},async loadData(){if(!this.datamanager)return{};try{this.validateYAML();let t=await this.datamanager.getDataset(this.config);if(!this.config.filters)return t;this.datamanager.addFilterListener(this.config,this.handleFilterChanged);for(const[e,a]of Object.entries(this.config.filters)){const i={dataset:this.config.dataset,column:e,value:a,range:Array.isArray(a)};this.datamanager.setFilter(i)}return{allRows:{}}}catch(t){console.error(""+t)}return{allRows:{}}},validateYAML(){for(const t in this.YAMLrequirementsArea)t in this.config||this.$emit("error",{type:d.ERROR,msg:`Area chart missing required key: ${t}`,desc:`Required keys: ${Object.keys(this.YAMLrequirementsArea)}`})},updateChart(){try{this.config.groupBy?this.updateChartWithGroupBy():this.updateChartSimple()}catch(t){const e=""+t;this.$emit("error",{type:d.ERROR,msg:e})}},updateChartWithGroupBy(){},updateChartSimple(){var c;const t=this.dataSet.allRows||{},e=Object.keys(t);let a=!1,i=[];if(!e.length)return;let s=this.config.columns||this.config.usedCol;if(!s&&e.length&&(s=e.filter(o=>o!==this.config.x).sort()),this.config.legendName&&(this.config.legendTitles=this.config.legendName),(c=this.config.legendTitles)!=null&&c.length&&(a=!0),!t[this.config.x]){this.$store.commit("error",`${this.cardTitle}: "${this.config.dataset}" x column "${this.config.x}" missing`);return}const n={};i=t[this.config.x].values||[],this.config.skipFirstRow&&(i=i.slice(1));for(let o=0;o<s.length;o++){const l=s[o],u=a?this.config.legendTitles[o]??l:l;let r=t[l].values;this.config.skipFirstRow&&(r=r.slice(1)),this.config.convertToSeconds&&(r=this.convertToSeconds(r)),n[l]={name:u,x:i,y:r,stackgroup:"one",mode:"none"}}this.data=Object.values(n)},convertToSeconds(t){t=t.map(e=>{try{return e.split(":").reduce((s,n)=>parseInt(n,10)+s*60,0)}catch{return 0}})}}});var b=function(){var e=this,a=e._self._c;return e._self._setupProxy,a("VuePlotly",{staticClass:"myplot",attrs:{data:e.data,layout:e.layout,options:e.options,id:e.id}})},_=[];var v=p(S,b,_,!1,null,"cfc19abf",null,null);const D=v.exports;export{D as default};
//# sourceMappingURL=area-6bc399bf.js.map
