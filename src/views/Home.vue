<!-- =========================================================================================
  Author: Hazem Ashraf
  Author URL: https://www.linkedin.com/in/hazem-ashraf-1242169b/
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <!-- ROW 4 -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <statistics-card-line
          class="md:mb-0 mb-base"
          icon="MonitorIcon"
          icon-right
          statistic="78.9k"
          statisticTitle="Count of working employees in last 4 months"
          :chartData="siteTraffic.series"
        />
      </div>

      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <statistics-card-line
          class="md:mb-0 mb-base"
          icon="UserCheckIcon"
          icon-right
          statistic="659.8k"
          statisticTitle="Active Users"
          :chartData="activeUsers.series"
          color="success"
        />
      </div>

      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <statistics-card-line
          icon="MailIcon"
          icon-right
          statistic="28.7k"
          statisticTitle="Newsletter"
          :chartData="newsletter.series"
          color="danger"
        />
      </div>
    </div>

    <div class="vx-row">
      <!-- CARD 4: SESSION -->
      <div class="vx-col w-full md:w-1/2 mb-base">
        <vx-card>
          <div class="vx-row flex-col-reverse md:flex-col-reverse sm:flex-row lg:flex-row">
            <!-- LEFT COL -->
            <div
              class="vx-col w-full md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col justify-between"
              v-if="salesBarSession.analyticsData"
            >
              <div>
                <h2 class="mb-1 font-bold">{{ salesBarSession.analyticsData.session  }}</h2>
                <span class="font-medium">Avg Sessions</span>

                <!-- Previous Data Comparison -->
                <p class="mt-2 text-xl font-medium">
                  <span
                    :class="salesBarSession.analyticsData.comparison.result >= 0 ? 'text-success' : 'text-danger'"
                  >
                    <span v-if="salesBarSession.analyticsData.comparison.result > 0">+</span>
                    <span>{{ salesBarSession.analyticsData.comparison.result }}</span>
                  </span>
                  <span>vs</span>
                  <span>{{ salesBarSession.analyticsData.comparison.str }}</span>
                </p>
              </div>
              <vs-button
                icon-pack="feather"
                icon="icon-chevrons-right"
                icon-after
                class="shadow-md w-full lg:mt-0 mt-4"
              >View Details</vs-button>
            </div>

            <!-- RIGHT COL -->
            <div
              class="vx-col w-full md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col lg:mb-0 md:mb-base sm:mb-0 mb-base  mt-6"
            >
              <change-time-duration-dropdown class="self-end" />
              <vue-apex-charts
                type="bar"
                height="200"
                :options="analyticsData.salesBar.chartOptions"
                :series="salesBarSession.series"
                v-if="salesBarSession.series"
              />
            </div>
          </div>
          <vs-divider class="my-6 mt-6"></vs-divider>
          <div class="vx-row">
            <div class="vx-col w-1/2 mb-5 mt-5">
              <p>Goal: $100000</p>
              <vs-progress class="block mt-1" :percent="50" color="primary"></vs-progress>
            </div>
            <div class="vx-col w-1/2 mb-3">
              <p>Users: 100K</p>
              <vs-progress class="block mt-1" :percent="60" color="warning"></vs-progress>
            </div>
            <div class="vx-col w-1/2 mb-3">
              <p>Retention: 90%</p>
              <vs-progress class="block mt-1" :percent="70" color="danger"></vs-progress>
            </div>
            <div class="vx-col w-1/2 mb-3">
              <p>Duration: 1yr</p>
              <vs-progress class="block mt-1" :percent="90" color="success"></vs-progress>
            </div>
          </div>
        </vx-card>
      </div>

      <!-- CARD 5: SUPPORT TRACKER -->
      <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
        <vx-card title="Support Tracker">
          <!-- CARD ACTION -->
          <template slot="actions">
            <change-time-duration-dropdown />
          </template>

          <div slot="no-body" v-if="supportTracker.analyticsData">
            <div class="vx-row text-center">
              <!-- Open Tickets Heading -->
              <div
                class="vx-col w-full lg:w-1/5 md:w-full sm:w-1/5 flex flex-col justify-between mb-4 lg:order-first md:order-last sm:order-first order-last"
              >
                <div class="lg:ml-6 lg:mt-6 md:mt-0 md:ml-0 sm:ml-6 sm:mt-6">
                  <h1 class="font-bold text-5xl">{{ supportTracker.analyticsData.openTickets }}</h1>
                  <small>Tickets</small>
                </div>
              </div>

              <!-- Chart -->
              <div
                class="vx-col w-full lg:w-4/5 md:w-full sm:w-4/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-6"
              >
                <vue-apex-charts
                  type="radialBar"
                  height="385"
                  :options="analyticsData.supportTrackerRadialBar.chartOptions"
                  :series="supportTracker.series"
                />
              </div>
            </div>

            <!-- Support Tracker Meta Data -->
            <div class="flex flex-row justify-between px-8 pb-4 mt-4">
              <p
                class="text-center"
                v-for="(val, key) in supportTracker.analyticsData.meta"
                :key="key"
              >
                <span class="block">{{ key }}</span>
                <span class="text-2xl font-semibold">{{ val }}</span>
              </p>
            </div>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import analyticsData from "./ui-elements/card/analyticsData.js";
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";
import VxTimeline from "@/components/timeline/VxTimeline";

export default {
  data() {
    return {
   
     
      salesBarSession: {
        series: [
          {
            name: "Sessions",
            data: [75, 125, 225, 175, 125, 75, 25],
          },
        ],
        analyticsData: {
          session: 2700,
          comparison: {
            str: "Last 7 Days",
            result: +5.2,
          },
        },
      },
      supportTracker: {
        analyticsData: {
          openTickets: 163,
          meta: {
            "New Tickets": 29,
            "Open Tickets": 63,
            "Response Time": "1d",
          },
        },
        series: [83],
      },

      // Line Charts
      siteTraffic: {
        series: [
             {
            name: "Count of Employee last ",
            data: [6000, 5000, 3000, 4000],
          },
        ],
      },
      activeUsers: {
        series: [
          {
            name: "Active Users",
            data: [750, 1000, 900, 1250, 1000, 1200, 1100],
          },
        ],
      },
      newsletter: {
        series: [
          {
            name: "Newsletter",
            data: [365, 390, 365, 400, 375, 400],
          },
        ],
      },

      analyticsData: analyticsData,
    };
  },
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown,
    VxTimeline,
  },
};
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user {
    position: relative;

    .decore-left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .decore-right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  @media (max-width: 576px) {
    .decore-left,
    .decore-right {
      width: 140px;
    }
  }
}
/*! rtl:end:ignore */
</style>
