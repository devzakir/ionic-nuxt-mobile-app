<template>
  <ion-button href="/findjobs">
    <ion-card
      class="bg-white w-full shadow-[0px_2px_18px_rgba(24,25,28,0.03)] p-6 m-0 border border-gray-100 rounded-lg"
    >
      <ion-card-content class="p-0 mb-5">
        <div class="flex gap-4 items-center">
          <slot name="logo"></slot>
          <div class="w-full">
            <div
              class="flex gap-2 mb-1.5 items-center whitespace-nowrap overflow-hidden"
            >
              <h2 class="inline-flex my-0 text-gray-900 text-lg font-medium">
                {{ title }}
              </h2>
              <span
                class="py-[3px] px-3 rounded-[52px] bg-[#FCEEEE] text-sm text-[#E05151]"
                >{{ status }}</span
              >
            </div>
            <p class="text-gray-500 flex gap-1 items-center">
              <ph-map-pin :size="18" />{{ location }}
            </p>
          </div>
        </div>
      </ion-card-content>
      <button
        class="py-3 rounded-[3px] w-full bg-[#E7F0FA] text-[#0A65CC] text-base font-semibold"
      >
        Open Position (3)
      </button>
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
    status: {
      type: String,
      default: "salary range",
    },
    location: {
      type: String,
      default: "Company address",
    },
  },
};
</script>
