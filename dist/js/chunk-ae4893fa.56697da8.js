(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae4893fa"],{"165e":function(e,t,a){"use strict";var n={items:[],itemsVacation:[],itemsMission:[],itemsExcuse:[]},i={SET_ITEMS:function(e,t){e.items=t},SET_ITEMSV:function(e,t){e.itemsVacation=t},SET_ITEMSM:function(e,t){e.itemsMission=t},SET_ITEMSE:function(e,t){e.itemsExcuse=t}},r=(a("7f7f"),a("bb36")),s={fetchItemsMainReport:function(e,t){var a=e.commit;return new Promise((function(e,n){r["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/main_report/"),{params:{start_date:t.start_date,end_date:t.end_date,category:t.category.name,company:t.company.name,department:t.department,job_title:t.job_title,employee_name:t.employee_name,employee_code:t.employee_code,reporting_to:t.reporting_to,city:t.city,area:t.area,area_name:t.area_name,Absenteeism_Days:t.Absenteeism_Days}}).then((function(t){a("SET_ITEMS",t.data.data),e(t)})).catch((function(e){n(e)}))}))},fetchItemsVacationReport:function(e,t){var a=e.commit;return new Promise((function(e,n){r["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/vacation_report/"),{params:{from:t.from,to:t.to,category:t.category.name,company:t.company.name,department:t.department,job_title:t.job_title,employee_name:t.employee_name,code:t.employee_code,reporting_to:t.reporting_to,city:t.city,area:t.area,status:t.status,annual_pool:t.annual_pool}}).then((function(t){a("SET_ITEMSV",t.data.data),e(t)})).catch((function(e){n(e)}))}))},fetchItemsExcuseReport:function(e,t){var a=e.commit;return new Promise((function(e,n){r["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/excuse_report/?"),{params:{from:t.from,to:t.to,category:t.category.name,company:t.company.name,department:t.department,job_title:t.job_title,employee_name:t.employee_name,code:t.employee_code,reporting_to:t.reporting_to,city:t.city,area:t.area,status:t.status}}).then((function(t){a("SET_ITEMSE",t.data.data),e(t)})).catch((function(e){n(e)}))}))},fetchItemsMissionReport:function(e,t){var a=e.commit;return new Promise((function(e,n){r["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/mission_report/?"),{params:{from:t.from,to:t.to,category:t.category.name,company:t.company.name,department:t.department,job_title:t.job_title,employee_name:t.employee_name,code:t.employee_code,reporting_to:t.reporting_to,city:t.city,area:t.area,status:t.status}}).then((function(t){a("SET_ITEMSM",t.data.result),e(t)})).catch((function(e){n(e)}))}))},fetchItemsAttendance:function(e,t){var a=e.commit;return t.start_date_ms=new Date(t.start_date_ms).getTime(),t.end_date_ms=new Date(t.end_date_ms).getTime(),new Promise((function(e,n){r["a"].get("".concat("https://hrattendence.gs-group.nl","/users/generate_hr_time_attendance"),{params:{start_date_ms:t.start_date_ms,end_date_ms:t.end_date_ms}}).then((function(t){a("SET_ITEMS",t.data.data),e(t)})).catch((function(e){n(e)}))}))},fetchItemsTimeAttendance:function(e,t){var a=e.commit;return t.start_date_ms=new Date(t.start_date_ms).getTime(),t.end_date_ms=new Date(t.end_date_ms).getTime(),new Promise((function(e,n){r["a"].get("".concat("https://hrattendence.gs-group.nl","/users/generate_erp_hr_time_attendance"),{params:{start_date_ms:t.start_date_ms,end_date_ms:t.end_date_ms}}).then((function(t){a("SET_ITEMS",t.data.data),e(t)})).catch((function(e){n(e)}))}))}},o={};t["a"]={isRegistered:!1,namespaced:!0,state:n,mutations:i,actions:s,getters:o}},"5cf5":function(e,t,a){"use strict";var n=a("ced1"),i=a.n(n);i.a},b4ca:function(e,t,a){},ced1:function(e,t,a){},e3d3:function(e,t,a){"use strict";var n=a("b4ca"),i=a.n(n);i.a},fd40:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"data-list"}},[a("vx-card",{ref:"filterCard",staticClass:"user-list-filters mb-8",attrs:{title:"Filters",actionButtons:""},on:{refresh:e.resetColFilters,remove:e.resetColFilters}},[a("form",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/4 sm:w-1/2 w-full"},[a("label",{staticClass:"text-sm opacity-75 mr-3"},[e._v("From")]),a("flat-pickr",{attrs:{config:e.configFromdateTimePicker,placeholder:"From Date"},on:{"on-change":e.onFromChange},model:{value:e.items.start_date_ms,callback:function(t){e.$set(e.items,"start_date_ms",t)},expression:"items.start_date_ms"}})],1),a("div",{staticClass:"vx-col md:w-1/4 sm:w-1/2 w-full"},[a("label",{staticClass:"text-sm opacity-75 mr-3"},[e._v("To")]),a("flat-pickr",{attrs:{config:e.configTodateTimePicker,placeholder:"To Date"},on:{"on-change":e.onToChange},model:{value:e.items.end_date_ms,callback:function(t){e.$set(e.items,"end_date_ms",t)},expression:"items.end_date_ms"}})],1),a("div",{staticClass:"vx-col md:w-1/4 sm:w-1/2 w-full"},[a("vs-button",{staticClass:" mb-2",attrs:{type:"filled"},on:{click:function(t){return t.preventDefault(),e.addNewUser(t)}}},[e._v("Filters")])],1)])])]),a("div",{staticClass:"vx-card p-6"},[a("div",{staticClass:"flex flex-wrap items-center"},[a("div",{staticClass:"flex-grow"},[a("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[a("span",{staticClass:"mr-2"},[e._v(e._s(e.currentPage*e.paginationPageSize-(e.paginationPageSize-1))+" - "+e._s(e.itemsData.length-e.currentPage*e.paginationPageSize>0?e.currentPage*e.paginationPageSize:e.itemsData.length)+" From "+e._s(e.itemsData.length))]),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(10)}}},[a("span",[e._v("10")])]),a("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(20)}}},[a("span",[e._v("20")])]),a("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(25)}}},[a("span",[e._v("25")])]),a("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(30)}}},[a("span",[e._v("30")])])],1)],1)],1),a("vs-input",{staticClass:"sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4",attrs:{placeholder:"Search..."},on:{input:e.updateSearchQuery},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),a("vs-button",{staticClass:"mb-4 md:mb-0",on:{click:function(t){return e.gridApi.exportDataAsCsv()}}},[e._v(" Export CSV")])],1),a("ag-grid-vue",{ref:"agGridTable",staticClass:"ag-theme-material w-100 my-4 ag-grid-table",attrs:{components:e.components,gridOptions:e.gridOptions,columnDefs:e.columnDefs,defaultColDef:e.defaultColDef,rowData:e.itemsData,rowSelection:"multiple",colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.paginationPageSize,suppressPaginationPanel:!0,enableRtl:e.$vs.rtl}}),a("vs-pagination",{attrs:{total:e.totalPages,max:7},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},i=[],r=(a("c5f6"),a("401b")),s=(a("4e06"),a("4a7a")),o=a.n(s),c=a("c38f"),l=a.n(c),m=(a("0952"),a("165e")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex items-center"},[a("vs-avatar",{staticClass:"flex-shrink-0 mr-2",attrs:{"icon-pack":"feather",icon:"icon-info",color:"success"},on:{click:function(t){return e.$router.push(e.url)}}}),a("router-link",{staticClass:"text-inherit hover:text-primary",attrs:{to:e.url},on:{click:function(e){e.stopPropagation(),e.preventDefault()}}},[e._v(e._s(e.params.value))])],1)},u=[],p={name:"CellRendererLink",computed:{url:function(){return"/ticket-settled/ticket-view/"+this.params.data.id}}},f=p,g=a("2877"),h=Object(g["a"])(f,d,u,!1,null,null,null),_=h.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vs-chip",{staticClass:"ag-grid-cell-chip",attrs:{color:e.chipColor(e.params.value)}},[a("span",[e._v(e._s(e.textStatus(e.params.value)))])])},w=[],y={name:"CellRendererStatus",computed:{chipColor:function(){return function(e){return 1===e?"success":0===e?"danger":"warring"}},textStatus:function(){return function(e){return 1===e?"نعم":0===e?"لا":"warring"}}}},C=y,b=(a("5cf5"),Object(g["a"])(C,v,w,!1,null,null,null)),S=b.exports,T={components:{AgGridVue:r["AgGridVue"],vSelect:o.a,flatPickr:l.a,CellRendererLink:_,CellRendererStatus:S},data:function(){return{configFromdateTimePicker:{minDate:null,maxDate:new Date},configTodateTimePicker:{minDate:null,maxDate:new Date},items:{start_date_ms:new Date,end_date_ms:new Date},searchQuery:"",gridApi:null,gridOptions:{},defaultColDef:{sortable:!1,resizable:!1,suppressMenu:!1},columnDefs:[{headerName:"Code",field:"code",width:175},{headerName:"Employee Name",field:"employeeName",width:200},{headerName:"Job Title",field:"jobTitle",width:125},{headerName:"Gov",field:"gov",width:150},{headerName:"Location",field:"location",width:150},{headerName:"Offical Time",children:[{headerName:"In",field:"timeIn",width:150},{headerName:"Out",field:"timeOut",width:150}]},{headerName:"Date",field:"date",width:150},{headerName:"Check In",field:"checkIn",width:150},{headerName:"Check Out",field:"checkOut",width:150},{headerName:"Phisical Working Hs",field:"phisicalWorkingHs",width:150},{headerName:"Over Time per min",field:"overTimePerMin",width:150},{headerName:"Latency per min",field:"latencyPerMin",width:150}],components:{CellRendererLink:_,CellRendererStatus:S}}},computed:{itemsData:function(){return this.$store.state.hrReportManagement.items},paginationPageSize:function(){return this.gridApi?this.gridApi.paginationGetPageSize():10},totalPages:function(){return this.gridApi?this.gridApi.paginationGetTotalPages():0},currentPage:{get:function(){return this.gridApi?this.gridApi.paginationGetCurrentPage()+1:1},set:function(e){this.gridApi.paginationGoToPage(e-1)}}},methods:{addNewUser:function(){var e=this;this.$validator.validateAll().then((function(t){t&&e.$store.dispatch("hrReportManagement/fetchItemsTimeAttendance",Object.assign({},e.items))}))},onFromChange:function(e,t){this.$set(this.configTodateTimePicker,"minDate",t)},onToChange:function(e,t){this.$set(this.configFromdateTimePicker,"maxDate",t)},setColumnFilter:function(e,t){var a=this.gridApi.getFilterInstance(e),n=null;"all"!==t&&(n={type:"equals",filter:t}),a.setModel(n),this.gridApi.onFilterChanged()},resetColFilters:function(){this.gridApi.setFilterModel(null),this.gridApi.onFilterChanged(),this.$refs.filterCard.removeRefreshAnimation()},updateSearchQuery:function(e){this.gridApi.setQuickFilter(e)},convertBool:function(e){return!0===e?"1":"all"}},mounted:function(){if(this.gridApi=this.gridOptions.api,this.$vs.rtl){var e=this.$refs.agGridTable.$el.querySelector(".ag-header-container");e.style.left="-"+String(Number(e.style.transform.slice(11,-3))+9)+"px"}},created:function(){m["a"].isRegistered||(this.$store.registerModule("hrReportManagement",m["a"]),m["a"].isRegistered=!0)}},P=T,k=(a("e3d3"),Object(g["a"])(P,n,i,!1,null,null,null));t["default"]=k.exports}}]);
//# sourceMappingURL=chunk-ae4893fa.56697da8.js.map