(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d052f82"],{"20cf":function(t,e,a){"use strict";var n=a("2dba"),i=a.n(n);i.a},"2dba":function(t,e,a){},"7aeb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"data-list"}},[a("div",{staticClass:"vx-card p-6"},[a("div",{staticClass:"flex flex-wrap items-center"},[a("vs-button",{staticClass:"mb-4 md:mb-0",on:{click:function(e){return t.goToAddJob()}}},[a("span",{staticStyle:{"font-weight":"bold","font-size":"13px"}},[t._v("+")]),t._v(" Add job")]),a("hr"),a("vs-button",{staticClass:"mb-4 md:mb-0",attrs:{color:"dark"},on:{click:function(e){return t.openConfirm()}}},[a("span",{staticStyle:{"font-weight":"bold","font-size":"13px"}},[t._v("-")]),t._v(" Delete selected")])],1),a("br"),a("div",{staticClass:"flex flex-wrap items-center"},[a("div",{staticClass:"flex-grow"},[a("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[a("span",{staticClass:"mr-2"},[t._v(" "+t._s(t.currentPage*t.paginationPageSize-(t.paginationPageSize-1))+" - "+t._s(t.itemsData.length-t.currentPage*t.paginationPageSize>0?t.currentPage*t.paginationPageSize:t.itemsData.length)+" From "+t._s(t.itemsData.length)+" ")]),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(20)}}},[a("span",[t._v("20")])]),a("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(30)}}},[a("span",[t._v("30")])]),a("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(40)}}},[a("span",[t._v("40")])]),a("vs-dropdown-item",{on:{click:function(e){return t.gridApi.paginationSetPageSize(50)}}},[a("span",[t._v("50")])])],1)],1)],1),a("vs-input",{staticClass:"sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4",attrs:{placeholder:"Search..."},on:{input:t.updateSearchQuery},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),a("vs-button",{staticClass:"mb-4 md:mb-0",on:{click:function(e){return t.gridApi.exportDataAsCsv()}}},[t._v("Export CSV")])],1),a("ag-grid-vue",{ref:"agGridTable",staticClass:"ag-theme-material w-100 my-4 ag-grid-table",attrs:{components:t.components,gridOptions:t.gridOptions,columnDefs:t.columnDefs,defaultColDef:t.defaultColDef,rowData:t.itemsData,rowSelection:"multiple",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:t.paginationPageSize,suppressPaginationPanel:!0,enableRtl:t.$vs.rtl},on:{"row-double-clicked":t.onRowDoubleClicked}}),a("vs-pagination",{attrs:{total:t.totalPages,max:7},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])},i=[],r=(a("c5f6"),a("7f7f"),a("401b")),s=(a("4e06"),a("4a7a")),o=a.n(s),c=a("c38f"),l=a.n(c),d=(a("0952"),a("bb36")),u={items:[]},m={SET_ITEMS:function(t,e){t.items=e}},f={fetchItemsMainReport:function(t){var e=t.commit;return new Promise((function(t,a){d["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/job/")).then((function(a){e("SET_ITEMS",a.data.data),t(a)})).catch((function(t){a(t)}))}))},fetchItemsAttendance:function(t,e){var a=t.commit;return e.start_date_ms=new Date(e.start_date_ms).getTime(),e.end_date_ms=new Date(e.end_date_ms).getTime(),new Promise((function(t,n){d["a"].get("".concat("https://hrattendence.gs-group.nl","/users/generate_hr_time_attendance"),{params:{start_date_ms:e.start_date_ms,end_date_ms:e.end_date_ms}}).then((function(e){a("SET_ITEMS",e.data.data),t(e)})).catch((function(t){n(t)}))}))},fetchItemsTimeAttendance:function(t,e){var a=t.commit;return e.start_date_ms=new Date(e.start_date_ms).getTime(),e.end_date_ms=new Date(e.end_date_ms).getTime(),new Promise((function(t,n){d["a"].get("".concat("https://hrattendence.gs-group.nl","/users/generate_erp_hr_time_attendance"),{params:{start_date_ms:e.start_date_ms,end_date_ms:e.end_date_ms}}).then((function(e){a("SET_ITEMS",e.data.data),t(e)})).catch((function(t){n(t)}))}))}},g={},p={isRegistered:!1,namespaced:!0,state:u,mutations:m,actions:f,getters:g},h=a("b96c"),_=a("d20a"),v=a("41cb"),b={components:{AgGridVue:r["AgGridVue"],vSelect:o.a,flatPickr:l.a,CellRendererLink:h["a"],CellRendererStatus:_["a"]},data:function(){return{show:!1,categorys:[{name:"Operation"},{name:"Staff"}],companies:[{name:"Aman"},{name:"Cashless"},{name:"Go Plus"},{name:"WeFlyPlus"}],absenteeismDays:[{name:0},{name:1},{name:"All"}],cities:[],areas:[],area_names:[],job_titles:[],city:null,category:null,items:{start_date:null,end_date:null,category:null,company:null,job_title:null,employee_name:null,employee_code:null,reporting_to:null,city:null,area:null,area_name:null,Absenteeism_Days:null},configFromdateTimePicker:{allowInput:!0,minDate:null,maxDate:new Date},configTodateTimePicker:{minDate:null,maxDate:new Date},searchQuery:"",gridApi:null,gridOptions:{},defaultColDef:{resizable:!0},columnDefs:[{headerName:"ID",field:"id",sortable:!0,filter:!0,checkboxSelection:!0,width:200},{headerName:"NAME",field:"title",sortable:!0,filter:!0,width:200},{headerName:"Department",cellRenderer:function(t){return JSON.stringify(t.data.departments_list.map((function(t){return t.department_name})))},sortable:!0,filter:!0,width:500},{headerName:"COMPANY",cellRenderer:function(t){return JSON.stringify(t.data.departments_list.map((function(t){return t.comapny_info.company_title})))},sortable:!0,filter:!0,width:200}],components:{CellRendererLink:h["a"],CellRendererStatus:_["a"]}}},watch:{city:function(t){var e=this;this.items.area=this.items.area_name=null,d["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/main_report/city/areas?city=").concat(t)).then((function(t){e.areas=e.area_names=t.data.data}))},category:function(t){var e=this;d["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/main_report/category/jobs?category=").concat(t.name)).then((function(t){e.job_titles=t.data.data}))}},computed:{itemsData:function(){return this.$store.state.job.items},paginationPageSize:function(){return this.gridApi?this.gridApi.paginationGetPageSize():10},totalPages:function(){return this.gridApi?this.gridApi.paginationGetTotalPages():0},currentPage:{get:function(){return this.gridApi?this.gridApi.paginationGetCurrentPage()+1:1},set:function(t){this.gridApi.paginationGoToPage(t-1)}}},methods:{openConfirm:function(){var t=this.gridApi.getSelectedNodes(),e=t.map((function(t){return t.data})),a=e.map((function(t){return t.title}));this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure to delete this : ("+a+") with it's related data?",accept:this.goToDeleteJob})},goToAddJob:function(){v["a"].push("/Add/Job")},goToDeleteJob:function(){var t=this;this.$vs.loading();var e=this.gridApi.getSelectedNodes(),a=e.map((function(t){return t.data})),n=a.map((function(t){return t.id}));d["a"].delete("".concat("https://hrattendence.gs-group.nl","/dashboard/job/").concat(n,"/delete/")).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"success",text:"items deleted",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),document.location.reload(),e.data.status})).catch((function(){t.$vs.loading.close(),t.$vs.notify({title:"Error",text:"Can't delete this department",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},addNewFilter:function(){var t=this;this.$validator.validateAll().then((function(e){e&&(t.$vs.loading(),t.items.category=t.category,t.items.city=t.city,null!==t.items.Absenteeism_Days&&(t.items.Absenteeism_Days=t.items.Absenteeism_Days.name),t.$store.dispatch("employee/fetchItemsMainReport",Object.assign({},t.items)).then((function(e){t.$vs.loading.close(),404===e.data.status&&t.$vs.notify({title:"Error",text:"Make sure select the main filters ",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})})).catch((function(){t.$vs.loading.close(),t.$vs.notify({title:"Error",text:"Make sure select the main filters ",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})})))}))},onRowDoubleClicked:function(t){v["a"].push("/Update/Job?SID="+t.data.id)},onFromChange:function(t,e){this.$set(this.configTodateTimePicker,"minDate",e)},onToChange:function(t,e){this.$set(this.configFromdateTimePicker,"maxDate",e)},setColumnFilter:function(t,e){var a=this.gridApi.getFilterInstance(t),n=null;"all"!==e&&(n={type:"equals",filter:e}),a.setModel(n),this.gridApi.onFilterChanged()},resetColFilters:function(t){t.removeRefreshAnimation(500),this.items.start_date=this.items.end_date=this.items.category=this.category=this.items.company=this.items.job_title=this.items.employee_name=this.items.employee_code=this.items.reporting_to=this.items.city=this.city=this.items.area=this.items.area_name=this.items.Absenteeism_Days=null},updateSearchQuery:function(t){this.gridApi.setQuickFilter(t)},convertBool:function(t){return!0===t?"1":"all"}},mounted:function(){var t=this;if(this.gridApi=this.gridOptions.api,this.$vs.rtl){var e=this.$refs.agGridTable.$el.querySelector(".ag-header-container");e.style.left="-"+String(Number(e.style.transform.slice(11,-3))+9)+"px"}this.$store.dispatch("job/fetchItemsMainReport").then((function(e){t.$vs.loading.close(),404===e.data.status&&t.$vs.notify({title:"Error",text:"Make sure select the main filters ",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},created:function(){p.isRegistered||(this.$store.registerModule("job",p),p.isRegistered=!0)}},y=b,w=(a("ef2e"),a("2877")),S=Object(w["a"])(y,n,i,!1,null,null,null);e["default"]=S.exports},b96c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center"},[a("vs-avatar",{staticClass:"flex-shrink-0 mr-2",attrs:{"icon-pack":"feather",icon:"icon-info",color:"success"},on:{click:function(e){return t.$router.push(t.url)}}}),a("router-link",{staticClass:"text-inherit hover:text-primary",attrs:{to:t.url},on:{click:function(t){t.stopPropagation(),t.preventDefault()}}},[t._v(t._s(t.params.value))])],1)},i=[],r={name:"CellRendererLink",computed:{url:function(){return"/ticket-settled/ticket-view/"+this.params.data.id}}},s=r,o=a("2877"),c=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=c.exports},d20a:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-chip",{staticClass:"ag-grid-cell-chip",attrs:{color:t.chipColor(t.params.value)}},[a("span",[t._v(t._s(t.textStatus(t.params.value)))])])},i=[],r={name:"CellRendererStatus",computed:{chipColor:function(){return function(t){return 1===t?"success":0===t?"danger":"warring"}},textStatus:function(){return function(t){return 1===t?"نعم":0===t?"لا":"warring"}}}},s=r,o=(a("20cf"),a("2877")),c=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=c.exports},ef2e:function(t,e,a){"use strict";var n=a("f06c"),i=a.n(n);i.a},f06c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3d052f82.1378b609.js.map