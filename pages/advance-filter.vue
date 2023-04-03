<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/jobs"></ion-back-button>
      </ion-buttons>
      <ion-title>Advance Filter</ion-title>
    </ion-toolbar>
    <ion-content class="bg-white border-t border-gray-100">
      <ion-list class="card-list bg-white">
        <ion-item>
          <div class="w-full border-b border-gray-100 py-6 px-7">
            <p class="body-sm-500 text-gray-500 mb-2">Active Filters:</p>
            <ul class="flex flex-wrap gap-2 items-center">
              <li
                v-for="(item, index) in searchFilters"
                :key="index"
                class="py-1 px-3 inline-flex gap-1.5 items-center rounded-3xl body-sm-400 text-gray-700 bg-gray-100"
              >
                {{ item.title }}
                <span
                  class="bg-white p-[2px] rounded-full"
                  @click="hideParent($event)"
                  ><ph-x :size="18" color="#767F8C"
                /></span>
              </li>
            </ul>
          </div>
        </ion-item>
        <ion-item>
          <div class="w-full border-b border-gray-100 py-6 px-3">
            <h2 class="body-sm-600 text-[#0A65CC] px-4 my-0 mb-3">Industry</h2>
            <ul>
              <li v-for="item in 10" :key="item">
                <ion-button fill="clear" href="#" class="anchor-button">
                  <span
                    class="flex py-2 px-3 bg-transparent hover:bg-[#E7F0FA] w-full text-left body-sm-500 text-gray-900 hover:text-[#0A65CC]"
                    >All Category</span
                  >
                </ion-button>
              </li>
            </ul>
          </div>
        </ion-item>
        <ion-item>
          <div class="w-full border-b border-gray-100 py-6 px-7">
            <ion-list class="card-list">
              <ion-radio-group v-model="jobType">
                <ion-list-header class="px-0">
                  <ion-label>Job Type</ion-label>
                </ion-list-header>

                <ion-item>
                  <ion-label>Full Time</ion-label>
                  <ion-radio slot="start" class="mr-2" value="full"></ion-radio>
                </ion-item>

                <ion-item>
                  <ion-label>Part Time</ion-label>
                  <ion-radio slot="start" class="mr-2" value="part"></ion-radio>
                </ion-item>

                <ion-item>
                  <ion-label>Internship</ion-label>
                  <ion-radio
                    slot="start"
                    class="mr-2"
                    value="internship"
                  ></ion-radio>
                </ion-item>

                <ion-item>
                  <ion-label>Temporary</ion-label>
                  <ion-radio
                    slot="start"
                    class="mr-2"
                    value="temporary"
                  ></ion-radio>
                </ion-item>

                <ion-item>
                  <ion-label>Contract</ion-label>
                  <ion-radio
                    slot="start"
                    class="mr-2"
                    value="contract"
                  ></ion-radio>
                </ion-item>
              </ion-radio-group>
            </ion-list>
          </div>
        </ion-item>
        <ion-item>
          <div class="w-full border-b border-gray-100 py-6 px-7">
            <ion-radio-group v-model="jobType">
              <ion-list class="card-list">
                <ion-list-header class="px-0">
                  <ion-label>Salary (yearly)</ion-label>
                </ion-list-header>
                <ion-item class="range-item">
                  <ion-range
                    class="p-0 border-none"
                    :dual-knobs="true"
                    :value="{ lower: 20, upper: 80 }"
                  ></ion-range>
                </ion-item>
                <div class="flex justify-between items-center">
                  <p class="body-sm-400 text-gray-500">Min: $70,00</p>
                  <p class="body-sm-400 text-gray-500">Max: $120,00</p>
                </div>
                <ion-item>
                  <ion-label>$10 - $100</ion-label>
                  <ion-radio slot="start" class="mr-2" value="100"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>$100 - $1,000</ion-label>
                  <ion-radio slot="start" class="mr-2" value="1000"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>$1,000 - $10,000</ion-label>
                  <ion-radio
                    slot="start"
                    class="mr-2"
                    value="10000"
                  ></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>$10,000 - $100,000</ion-label>
                  <ion-radio
                    slot="start"
                    class="mr-2"
                    value="100000"
                  ></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>$100,000 Up</ion-label>
                  <ion-radio
                    slot="start"
                    class="mr-2"
                    value="100000up"
                  ></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>Custom</ion-label>
                  <ion-radio
                    slot="start"
                    class="mr-2"
                    value="custom"
                  ></ion-radio>
                </ion-item>
              </ion-list>
            </ion-radio-group>
          </div>
        </ion-item>
        <div>
          <div class="py-6 px-7 w-full flex justify-between items-center">
            <div class="inline-flex items-center">
              <ion-toggle id="toggle" slot="start"></ion-toggle>
              <ion-label for="toggle">Remote Job</ion-label>
            </div>
            <div>
              <ion-button class="primary-button">Apply Filter</ion-button>
            </div>
          </div>
        </div>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
<script>
import { PhX } from "@phosphor-icons/vue";
import { ref } from "vue";

export default {
  components: {
    PhX,
  },
  setup() {
    const searchFilters = ref([
      { id: 1, title: "Search: UI/UX" },
      { id: 2, title: "Prague, Czech" },
      { id: 3, title: "Design" },
      { id: 3, title: "Fulltime" },
      { id: 3, title: "Salary $70,000 - $120,000" },
    ]);

    const hideParent = (event) => {
      event.target.closest("li").style.display = "none";
    };

    return {
      searchFilters,
      hideParent,
    };
  },
};
</script>
