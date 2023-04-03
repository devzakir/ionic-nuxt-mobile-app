<script>
import {
  PhMapPinLine,
  PhFunnelSimple,
  PhMagnifyingGlassMinus,
  PhMagnifyingGlass,
  PhArrowLeft,
  PhArrowRight,
  PhCrosshair,
} from "@phosphor-icons/vue";
import JobCard from "../../components/cards/JobCard.vue";

export default {
  components: {
    JobCard,
    PhMapPinLine,
    PhMagnifyingGlassMinus,
    PhMagnifyingGlass,
    PhFunnelSimple,
    PhArrowLeft,
    PhArrowRight,
    PhCrosshair,
  },
};
</script>
<template>
  <ion-page>
    <app-header />
    <ion-content :scroll-y="true">
      <div class="py-8 px-6">
        <ion-text>
          <h2 class="mt-0 mb-4 text-xl font-medium text-gray-900">Find Jobs</h2>
        </ion-text>
        <form
          action="#"
          class="p-3 bg-white rounded-md flex flex-col gap-2 mb-4"
        >
          <label for="search" class="relative">
            <ion-input
              id="search"
              type="text"
              placeholder="Search..."
              class="custom-input"
            />
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2">
              <ph-magnifying-glass :size="24" color="#0a65cc" />
            </span>
          </label>
          <label for="location" class="relative">
            <ion-input
              id="location"
              type="text"
              placeholder="Location..."
              class="custom-input"
            />
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2">
              <ph-map-pin-line :size="24" color="#0a65cc" />
            </span>
            <ph-crosshair
              color="#5E6670"
              :size="24"
              class="absolute left-auto top-1/2 -translate-y-1/2 right-3"
            />
          </label>
          <ion-button href="/advance-filter" class="filter-button">
            <ph-funnel-simple :size="32" />Advance filter
          </ion-button>
          <ion-button class="primary-button">
            <ph-magnifying-glass-minus :size="24" color="#fff" />
            <span>Search</span>
          </ion-button>
        </form>
        <ion-text>
          <p>Popular searches:</p>
          <div class="flex flex-wrap items-center">
            <ion-button href="#" fill="clear" class="anchor-button">
              <span
                class="py-1 px-2 rounded text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-white"
                >Front-end</span
              >
            </ion-button>
            <ion-button href="#" fill="clear" class="anchor-button">
              <span
                class="py-1 px-2 rounded text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-white"
                >Back-end</span
              >
            </ion-button>
            <ion-button href="#" fill="clear" class="anchor-button">
              <span
                class="py-1 px-2 rounded text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-white"
                >Development</span
              >
            </ion-button>
            <ion-button href="#" fill="clear" class="anchor-button">
              <span
                class="py-1 px-2 rounded text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-white"
                >PHP</span
              >
            </ion-button>
            <ion-button href="#" fill="clear" class="anchor-button">
              <span
                class="py-1 px-2 rounded text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-white"
                >Laravel</span
              >
            </ion-button>
            <ion-button href="#" fill="clear" class="anchor-button">
              <span
                class="py-1 px-2 rounded text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-white"
                >Bootstrap</span
              >
            </ion-button>
            <ion-button href="#" fill="clear" class="anchor-button">
              <span
                class="py-1 px-2 rounded text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-white"
                >Developer</span
              >
            </ion-button>
            <ion-button href="#" fill="clear" class="anchor-button">
              <span
                class="py-1 px-2 rounded text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-white"
                >Team Lead</span
              >
            </ion-button>
            <ion-button href="#" fill="clear" class="anchor-button">
              <span
                class="py-1 px-2 rounded text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-white"
                >Javascript</span
              >
            </ion-button>
            <ion-button href="#" fill="clear" class="anchor-button">
              <span
                class="py-1 px-2 rounded text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-white"
                >Product Testing</span
              >
            </ion-button>
          </div>
        </ion-text>
      </div>
      <!-- featured job section -->
      <div class="pb-8 px-6">
        <div class="">
          <ion-list class="card-list py-0 bg-transparent flex flex-col gap-5">
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
                :highlight="true"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
                :highlight="true"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
            <ion-item>
              <JobCard
                title="Project Manager"
                salary="Salary: $20,000 - $25,000"
                job-type="Full-time"
                company-name="Google Inc."
                location="Dhaka, Bangladesh"
                :highlight="true"
              >
                <template #logo
                  ><img
                    class="w-12 h-12 rounded object-cover"
                    src="/assets/images/employers-logo.png"
                    alt=""
                /></template>
              </JobCard>
            </ion-item>
          </ion-list>
          <div class="flex justify-center gap-2">
            <button
              class="w-12 h-12 inline-flex justify-center items-center text-sm font-medium bg-transparent hover:bg-[#0A65CC] text-gray-600 hover:text-white transition-all duration-300 rounded-full"
            >
              <ph-arrow-left :size="24" />
            </button>
            <div class="flex justify-center">
              <button
                class="w-12 h-12 inline-flex justify-center items-center text-sm font-medium bg-transparent hover:bg-[#0A65CC] text-gray-600 hover:text-white transition-all duration-300 rounded-full"
              >
                01
              </button>
              <button
                class="w-12 h-12 inline-flex justify-center items-center text-sm font-medium bg-transparent hover:bg-[#0A65CC] text-gray-600 hover:text-white transition-all duration-300 rounded-full"
              >
                02
              </button>
              <button
                class="w-12 h-12 inline-flex justify-center items-center text-sm font-medium bg-transparent hover:bg-[#0A65CC] text-gray-600 hover:text-white transition-all duration-300 rounded-full"
              >
                03
              </button>
              <button
                class="w-12 h-12 inline-flex justify-center items-center text-sm font-medium bg-transparent hover:bg-[#0A65CC] text-gray-600 hover:text-white transition-all duration-300 rounded-full"
              >
                04
              </button>
              <button
                class="w-12 h-12 inline-flex justify-center items-center text-sm font-medium bg-transparent hover:bg-[#0A65CC] text-gray-600 hover:text-white transition-all duration-300 rounded-full"
              >
                05
              </button>
            </div>
            <button
              class="w-12 h-12 inline-flex justify-center items-center text-sm font-medium bg-transparent hover:bg-[#0A65CC] text-gray-600 hover:text-white transition-all duration-300 rounded-full"
            >
              <ph-arrow-right :size="24" />
            </button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
