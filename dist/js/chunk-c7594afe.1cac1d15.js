(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7594afe"],{"165e":function(t,e,a){"use strict";var n={items:[],itemsVacation:[],itemsMission:[],itemsExcuse:[]},i={SET_ITEMS:function(t,e){t.items=e},SET_ITEMSV:function(t,e){t.itemsVacation=e},SET_ITEMSM:function(t,e){t.itemsMission=e},SET_ITEMSE:function(t,e){t.itemsExcuse=e}},o=(a("7f7f"),a("bb36")),s={fetchItemsMainReport:function(t,e){var a=t.commit;return new Promise((function(t,n){o["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/main_report/"),{params:{start_date:e.start_date,end_date:e.end_date,category:e.category.name,company:e.company.name,department:e.department,job_title:e.job_title,employee_name:e.employee_name,employee_code:e.employee_code,reporting_to:e.reporting_to,city:e.city,area:e.area,area_name:e.area_name,Absenteeism_Days:e.Absenteeism_Days}}).then((function(e){a("SET_ITEMS",e.data.data),t(e)})).catch((function(t){n(t)}))}))},fetchItemsVacationReport:function(t,e){var a=t.commit;return new Promise((function(t,n){o["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/vacation_report/"),{params:{from:e.from,to:e.to,category:e.category.name,company:e.company.name,department:e.department,job_title:e.job_title,employee_name:e.employee_name,code:e.employee_code,reporting_to:e.reporting_to,city:e.city,area:e.area,status:e.status,annual_pool:e.annual_pool}}).then((function(e){a("SET_ITEMSV",e.data.data),t(e)})).catch((function(t){n(t)}))}))},fetchItemsExcuseReport:function(t,e){var a=t.commit;return new Promise((function(t,n){o["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/excuse_report/?"),{params:{from:e.from,to:e.to,category:e.category.name,company:e.company.name,department:e.department,job_title:e.job_title,employee_name:e.employee_name,code:e.employee_code,reporting_to:e.reporting_to,city:e.city,area:e.area,status:e.status}}).then((function(e){a("SET_ITEMSE",e.data.data),t(e)})).catch((function(t){n(t)}))}))},fetchItemsMissionReport:function(t,e){var a=t.commit;return new Promise((function(t,n){o["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/mission_report/?"),{params:{from:e.from,to:e.to,category:e.category.name,company:e.company.name,department:e.department,job_title:e.job_title,employee_name:e.employee_name,code:e.employee_code,reporting_to:e.reporting_to,city:e.city,area:e.area,status:e.status}}).then((function(e){a("SET_ITEMSM",e.data.result),t(e)})).catch((function(t){n(t)}))}))},fetchItemsAttendance:function(t,e){var a=t.commit;return e.start_date_ms=new Date(e.start_date_ms).getTime(),e.end_date_ms=new Date(e.end_date_ms).getTime(),new Promise((function(t,n){o["a"].get("".concat("https://hrattendence.gs-group.nl","/users/generate_hr_time_attendance"),{params:{start_date_ms:e.start_date_ms,end_date_ms:e.end_date_ms}}).then((function(e){a("SET_ITEMS",e.data.data),t(e)})).catch((function(t){n(t)}))}))},fetchItemsTimeAttendance:function(t,e){var a=t.commit;return e.start_date_ms=new Date(e.start_date_ms).getTime(),e.end_date_ms=new Date(e.end_date_ms).getTime(),new Promise((function(t,n){o["a"].get("".concat("https://hrattendence.gs-group.nl","/users/generate_erp_hr_time_attendance"),{params:{start_date_ms:e.start_date_ms,end_date_ms:e.end_date_ms}}).then((function(e){a("SET_ITEMS",e.data.data),t(e)})).catch((function(t){n(t)}))}))}},r={};e["a"]={isRegistered:!1,namespaced:!0,state:n,mutations:i,actions:s,getters:r}},"423e":function(t,e,a){},c006:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"data-list"}},[a("vx-card",{ref:"filterCard",staticClass:"user-list-filters mb-8",attrs:{title:"Updating company","collapse-action":"","refresh-content-action":""},on:{refresh:t.resetColFilters}},[a("form",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 sm:w-1/2 w-full mb-2"},[a("label",{staticClass:"text-sm opacity-75"},[a("span",{staticClass:"text-primary"},[t._v("*")]),t._v("COMPANY NAME")]),a("vs-input",{staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-terminal","icon-no-border":""},model:{value:t.company_name,callback:function(e){t.company_name=e},expression:"company_name"}})],1),a("div",{staticClass:"vx-col md:w-1/2 sm:w-1/2 w-full mb-2"},[a("label",{staticClass:"text-sm opacity-75"},[a("span",{staticClass:"text-primary"},[t._v("*")]),t._v("COMPANY CODE")]),a("vs-input",{staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-hash","icon-no-border":""},model:{value:t.company_code,callback:function(e){t.company_code=e},expression:"company_code"}})],1)]),a("vs-button",{staticClass:"mb-2",attrs:{disabled:null==t.company_name,type:"filled"},on:{click:function(e){return t.openConfirm()}}},[t._v("UPDATE")])],1)])],1)},i=[],o=(a("c5f6"),a("7f7f"),a("401b")),s=(a("4e06"),a("4a7a")),r=a.n(s),c=a("c38f"),m=a.n(c),l=(a("0952"),a("bb36")),d=a("165e"),u={components:{AgGridVue:o["AgGridVue"],vSelect:r.a,flatPickr:m.a},data:function(){return{company_name:this.$route.query.SID,company_code:null,employee:{company:null,job_title:null},show:!1,categorys:[{name:"Operation"},{name:"Staff"}],companies:[{name:"Aman"},{name:"Cashless"},{name:"Go Plus"},{name:"WeFlyPlus"}],absenteeismDays:[{name:0},{name:1},{name:"All"}],cities:[],areas:[],area_names:[],job_titles:[],city:null,category:null,items:{start_date:null,end_date:null,category:null,company:null,job_title:null,employee_name:null,employee_code:null,reporting_to:null,city:null,area:null,area_name:null,Absenteeism_Days:null},configFromdateTimePicker:{allowInput:!0,minDate:null,maxDate:new Date},configTodateTimePicker:{minDate:null,maxDate:new Date},searchQuery:"",gridApi:null,gridOptions:{},defaultColDef:{resizable:!0}}},watch:{city:function(t){var e=this;this.items.area=this.items.area_name=null,l["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/main_report/city/areas?city=").concat(t)).then((function(t){e.areas=e.area_names=t.data.data}))},category:function(t){var e=this;l["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/main_report/category/jobs/?category=").concat(t.name)).then((function(t){e.job_titles=t.data.data}))}},computed:{itemsData:function(){return this.$store.state.hrReportManagement.items},paginationPageSize:function(){return this.gridApi?this.gridApi.paginationGetPageSize():10},totalPages:function(){return this.gridApi?this.gridApi.paginationGetTotalPages():0},currentPage:{get:function(){return this.gridApi?this.gridApi.paginationGetCurrentPage()+1:1},set:function(t){this.gridApi.paginationGoToPage(t-1)}}},methods:{openConfirm:function(){this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure to update this data?",accept:this.updateCompany})},updateCompany:function(){var t=this;this.$vs.loading();var e=new FormData;e.append("title",this.company_name),l["a"].post("".concat("https://hrattendence.gs-group.nl","/dashboard/company/").concat(this.$route.query.SID,"/update/"),e).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"success",text:"company updated",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),200===e.data.status&&t.$vs.notify({title:"success",text:"company updated",iconPack:"feather",icon:"icon-alert-circle",color:"success"})})).catch((function(){t.$vs.loading.close(),t.$vs.notify({title:"Error",text:"Can't delete this company",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},addNewFilter:function(){var t=this;this.$validator.validateAll().then((function(e){e&&(t.$vs.loading(),t.items.category=t.category,t.items.city=t.city,null!==t.items.Absenteeism_Days&&(t.items.Absenteeism_Days=t.items.Absenteeism_Days.name),t.$store.dispatch("hrReportManagement/fetchItemsMainReport",Object.assign({},t.items)).then((function(e){t.$vs.loading.close(),404===e.data.status&&t.$vs.notify({title:"Error",text:"Make sure select the main filters ",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})})).catch((function(){t.$vs.loading.close(),t.$vs.notify({title:"Error",text:"Make sure select the main filters ",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})})))}))},onFromChange:function(t,e){this.$set(this.configTodateTimePicker,"minDate",e)},onToChange:function(t,e){this.$set(this.configFromdateTimePicker,"maxDate",e)},setColumnFilter:function(t,e){var a=this.gridApi.getFilterInstance(t),n=null;"all"!==e&&(n={type:"equals",filter:e}),a.setModel(n),this.gridApi.onFilterChanged()},resetColFilters:function(t){t.removeRefreshAnimation(500),this.items.start_date=this.items.end_date=this.items.category=this.category=this.items.company=this.items.job_title=this.items.employee_name=this.items.employee_code=this.items.reporting_to=this.items.city=this.city=this.items.area=this.items.area_name=this.items.Absenteeism_Days=null},updateSearchQuery:function(t){this.gridApi.setQuickFilter(t)},convertBool:function(t){return!0===t?"1":"all"}},mounted:function(){var t=this;if(this.gridApi=this.gridOptions.api,this.$vs.rtl){var e=this.$refs.agGridTable.$el.querySelector(".ag-header-container");e.style.left="-"+String(Number(e.style.transform.slice(11,-3))+9)+"px"}l["a"].get("".concat("https://hrattendence.gs-group.nl","/dashboard/company/").concat(this.$route.query.SID,"/")).then((function(e){t.company_name=e.data.data.title}))},created:function(){d["a"].isRegistered||(this.$store.registerModule("hrReportManagement",d["a"]),d["a"].isRegistered=!0)}},p=u,h=(a("d0a8"),a("2877")),_=Object(h["a"])(p,n,i,!1,null,null,null);e["default"]=_.exports},d0a8:function(t,e,a){"use strict";var n=a("423e"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-c7594afe.1cac1d15.js.map