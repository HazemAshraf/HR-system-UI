<!-- =========================================================================================
  Author: Hazem Ashraf
  Author URL: https://www.linkedin.com/in/hazem-ashraf-1242169b/
========================================================================================== -->

<template>
  <div id="data-list">
    <div class="vx-card p-6">
      <div class="flex flex-wrap items-center">
        <!-- ITEMS PER PAGE -->
        <div class="flex-grow">
          <vs-dropdown vs-trigger-click class="cursor-pointer">
            <div
              class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
            >
              <span class="mr-2">
                {{
                currentPage * paginationPageSize - (paginationPageSize - 1)
                }}
                -
                {{
                itemsData.length - currentPage * paginationPageSize > 0
                ? currentPage * paginationPageSize
                : itemsData.length
                }}
                From {{ itemsData.length }}
              </span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                <span>20</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(30)">
                <span>30</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(40)">
                <span>40</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(50)">
                <span>50</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
        <vs-input
          class="sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4"
          v-model="searchQuery"
          @input="updateSearchQuery"
          placeholder="Search..."
        />
        <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export CSV</vs-button>
      </div>

      <!-- AgGrid Table -->
      <ag-grid-vue
        ref="agGridTable"
        :components="components"
        :gridOptions="gridOptions"
        class="ag-theme-material w-100 my-4 ag-grid-table"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="itemsData"
        rowSelection="multiple"
    
        :animateRows="true"
        :floatingFilter="false"
        :pagination="true"
        :paginationPageSize="paginationPageSize"
        :suppressPaginationPanel="true"
        :enableRtl="$vs.rtl"
      ></ag-grid-vue>

      <vs-pagination :total="totalPages" :max="7" v-model="currentPage" />
    </div>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import "@/assets/scss/vuexy/extraComponents/agGridStyleOverride.scss";
import vSelect from "vue-select";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import axios from "@/axios.js";
// Store Module
import moduleHrReportManagement from "@/store/get-all-employees/moduleHrReportManagement.js";

// Cell Renderer
import CellRendererLink from "../hr-report/main-report/cell-renderer/CellRendererLink.vue";
import CellRendererStatus from "../hr-report/main-report/cell-renderer/CellRendererStatus.vue";

export default {
  components: {
    AgGridVue,
    vSelect,
    flatPickr,
    // Cell Renderer
    CellRendererLink,
    CellRendererStatus,
  },
  data() {
    return {
      show: false,
      categorys: [{ name: "Operation" }, { name: "Staff" }],
      companies: [
        { name: "Aman" },
        { name: "Cashless" },
        { name: "Go Plus" },
        { name: "WeFlyPlus" },
      ],
      absenteeismDays: [{ name: 0 }, { name: 1 }, { name: "All" }],
      cities: [],
      areas: [],
      area_names: [],
      job_titles: [],
      city: null,
      category: null,
      items: {
        start_date: null,
        end_date: null,
        category: null,
        company: null,
        job_title: null,
        employee_name: null,
        employee_code: null,
        reporting_to: null,
        city: null,
        area: null,
        area_name: null,
        Absenteeism_Days: null,
      },
      configFromdateTimePicker: {
        allowInput: true,
        minDate: null,
        maxDate: new Date(),
      },
      configTodateTimePicker: {
        minDate: null,
        maxDate: new Date(),
      },

      searchQuery: "",

      // AgGrid
      gridApi: null,
      gridOptions: {},
      defaultColDef: {
        
        resizable: true,
      },
      columnDefs: [
        {
          headerName: "National ID",
          field: "national_id",
          width: 200,
        },
         {
          headerName: "Username",
          field: "username",
          width: 200,
        },
        {
          headerName: "Employee Name",
          field: "name",
          width: 300,
        },
        {
          headerName: "Start Date",
          field: "start_date",
          width: 150,
        },

        {
          headerName: "Leave Date",
          field: "leave_date",
          width: 150,
        },
        {
          headerName: "Employee Code",
          field: "employee_code",
          width: 150,
        },
      ],

      // Cell Renderer Components
      components: {
        CellRendererLink,
        CellRendererStatus,
      },
    };
  },
  watch: {
    city(obj) {
      this.items.area = this.items.area_name = null;
      axios
        .get(
          `${process.env.VUE_APP_BASE_URI}/dashboard/main_report/city/areas?city=${obj}`
        )
        .then((response) => {
          this.areas = this.area_names = response.data.data;
        });
    },
    category(obj) {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URI}/dashboard/main_report/category/jobs?category=${obj.name}`
        )
        .then((response) => {
          this.job_titles = response.data.data;
        });
    },
  },
  computed: {
    itemsData() {
      return this.$store.state.employee.items;
    },
    paginationPageSize() {
      if (this.gridApi) return this.gridApi.paginationGetPageSize();
      else return 10;
    },
    totalPages() {
      if (this.gridApi) return this.gridApi.paginationGetTotalPages();
      else return 0;
    },
    currentPage: {
      get() {
        if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1;
        else return 1;
      },
      set(val) {
        this.gridApi.paginationGoToPage(val - 1);
      },
    },
  },
  methods: {
    addNewFilter() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$vs.loading();
          this.items.category = this.category;
          this.items.city = this.city;
          
          if (this.items.Absenteeism_Days !== null) {
            this.items.Absenteeism_Days = this.items.Absenteeism_Days.name
          }
          this.$store
            .dispatch(
              "employee/fetchItemsMainReport",
              Object.assign({}, this.items)
            )
            .then( response => {
              this.$vs.loading.close();
              if ( response.data.status === 404) {
                 this.$vs.notify({
                  title: "Error",
                  text: "Make sure select the main filters ",
                  iconPack: "feather",
                  icon: "icon-alert-circle",
                  color: "danger",
              });
              }
            })
            .catch(() => {
              this.$vs.loading.close();
              this.$vs.notify({
                title: "Error",
                text: "Make sure select the main filters ",
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "danger",
              });
            });
        } else {
          // form have errors
        }
      });
    },
    onFromChange(selectedDates, dateStr) {
      this.$set(this.configTodateTimePicker, "minDate", dateStr);
    },
    onToChange(selectedDates, dateStr) {
      this.$set(this.configFromdateTimePicker, "maxDate", dateStr);
    },
    setColumnFilter(column, val) {
      const filter = this.gridApi.getFilterInstance(column);
      let modelObj = null;

      if (val !== "all") {
        modelObj = { type: "equals", filter: val };
      }

      filter.setModel(modelObj);
      this.gridApi.onFilterChanged();
    },
    resetColFilters(card) {
      card.removeRefreshAnimation(500);
      this.items.start_date = this.items.end_date = this.items.category = this.category = this.items.company = this.items.job_title = this.items.employee_name = this.items.employee_code = this.items.reporting_to = this.items.city = this.city = this.items.area = this.items.area_name = this.items.Absenteeism_Days = null;

      // Reset Grid Filter
      // this.gridApi.setFilterModel(null);
      // this.gridApi.onFilterChanged();
      // this.$refs.filterCard.removeRefreshAnimation();
    },
    updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val);
    },
    convertBool(val) {
      return val === true ? "1" : "all";
    },
  },
  mounted() {
    this.gridApi = this.gridOptions.api;

    /* =================================================================
      NOTE:
      Header is not aligned properly in RTL version of agGrid table.
      However, we given fix to this issue. If you want more robust solution please contact them at gitHub
    ================================================================= */
    if (this.$vs.rtl) {
      const header = this.$refs.agGridTable.$el.querySelector(
        ".ag-header-container"
      );
      header.style.left =
        "-" + String(Number(header.style.transform.slice(11, -3)) + 9) + "px";
    }
    axios
      .get(`${process.env.VUE_APP_BASE_URI}/dashboard/main_report/cities`)
      .then((response) => {
        this.cities = response.data.data;
      });

          this.$store
            .dispatch(
              "employee/fetchItemsMainReport"
            )
            .then( response => {
              this.$vs.loading.close();
              if ( response.data.status === 404) {
                 this.$vs.notify({
                  title: "Error",
                  text: "Make sure select the main filters ",
                  iconPack: "feather",
                  icon: "icon-alert-circle",
                  color: "danger",
              });
              }
            });
           
  },
  created() {
    if (!moduleHrReportManagement.isRegistered) {
      this.$store.registerModule(
        "employee",
        moduleHrReportManagement
      );
      moduleHrReportManagement.isRegistered = true;
    }
    // this.$store.dispatch("hrReportManagement/fetchItemsMainReport").catch(err => {
    //   console.error(err);
    // });
  },
};
</script>

<style lang="scss">
#data-list {
  .user-list-filters {
    .vs__actions {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-58%);
    }
  }
}

[dir="rtl"] .ag-theme-material .ag-rtl {
  text-align: right;
}
[dir="rtl"] .ag-rtl {
  direction: rtl;
}
</style>
