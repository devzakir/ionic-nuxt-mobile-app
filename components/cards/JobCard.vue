<template>
  <ion-button href="/jobs/details">
    <ion-card
      class="shadow-[0px_2px_18px_rgba(24,25,28,0.03)] w-full p-5 m-0 border border-gray-100 rounded-lg"
      :class="{ highlighted: highlight }"
    >
      <ion-card-header class="p-0 mb-5">
        <ion-card-title class="mb-1.5 text-left">{{ title }}</ion-card-title>
        <ion-card-subtitle
          class="mt-0 text-sm text-gray-500 flex items-center gap-2"
        >
          <span
            class="py-1 px-2 bg-[#E7F6EA] rounded-[3px] font-semibold text-xs uppercase text-[#0BA02C]"
            >{{ jobType }}</span
          >
          {{ salary }}
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content class="p-0">
        <div class="flex justify-between items-center">
          <div class="flex gap-3 items-center">
            <slot name="logo"></slot>
            <div class="w-full">
              <h2 class="flex">{{ companyName }}</h2>
              <p class="text-gray-500 flex gap-1 items-center">
                <ph-map-pin :size="18" />{{ location }}
              </p>
            </div>
          </div>
          <div>
            <ion-button href="#" class="anchor-button inner-button">
              <span><ph-bookmark-simple :size="24" color="black" /></span>
            </ion-button>
          </div>
        </div>
      </ion-card-content>
    </ion-card>
  </ion-button>
</template>
<script>
import { PhMapPin, PhBookmarkSimple } from "@phosphor-icons/vue";
export default {
  components: {
    PhMapPin,
    PhBookmarkSimple,
  },
  props: {
    title: {
      type: String,
      default: "job title",
    },
    jobType: {
      type: String,
      default: "job type",
    },
    salary: {
      type: String,
      default: "salary range",
    },
    companyName: {
      type: String,
      default: "Company name",
    },
    location: {
      type: String,
      default: "Company address",
    },
    highlight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.highlighted {
  background: linear-gradient(90deg, #fff6e6 0%, #ffffff 100%), #ffffff;
}
</style>
