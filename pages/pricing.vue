<template>
  <ion-page>
    <app-header />
    <ion-content :scroll-y="true" class="">
      <div class="py-8 px-6 bg-gray-50">
        <h3 class="text-2xl font-semibold mb-2 text-gray-900">
          Buy Premium Subscription to Post a Job
        </h3>
        <p class="text-base text-gray-600 font">
          Pay only for a single job creation, and you can also highlight or
          featured them
        </p>
        <ion-button fill="clear" class="button text-blue-500 mt-3">
          <ph-arrow-bend-left-down :size="24" color="currentColor" />
          Choose A Pricing Plan From Below.
        </ion-button>

        <ion-card class="mt-8 m-0 shadow-none bg-gray-100">
          <ion-card-header class="px-4 pt-4 pb-2">
            <ion-card-title class="button uppercase"
              >OR PAY PER JOB POST</ion-card-title
            >
          </ion-card-header>

          <ion-card-content>
            <p class="body-sm-400">
              Pay only for a single job creation, and you can also highlight or
              featured them.
            </p>
            <ion-button fill="clear" class="mt-4 primary-button"
              >Pay Per Job</ion-button
            >
          </ion-card-content>
        </ion-card>
        <h3 class="button text-center">Choose Pricing Plan</h3>

        <ion-card class="rounded-lg border border-blue-500 m-0">
          <ion-card-header class="p-6 border-b border-blue-500">
            <ion-card-title class="body-sm-500 mb-2 uppercase text-gray-900"
              >STANDARD</ion-card-title
            >
            <p class="body-sm-400 text-gray-500">
              Praesent eget pulvinar orci. Duis ut pellentesque ligula convalis.
            </p>
            <div class="pricing flex items-end mt-4">
              <div class="heading-02 text-blue-500">$39</div>
              <div class="body-medium-400 text-gray-400">/Monthly</div>
            </div>
          </ion-card-header>

          <ion-card-content class="px-6 !py-2">
            <ion-list lines="none" class="pricing-list py-0">
              <ion-item v-for="item in 5" :key="item" class="py-2">
                <ph-check-circle :size="24" color="#0A65CC" weight="duotone" />
                <ion-label class="ml-2 body-sm-400 my-0"
                  >3 Active Jobs</ion-label
                >
              </ion-item>
            </ion-list>
          </ion-card-content>

          <div class="px-4 pb-4">
            <ion-button
              fill="clear"
              expand="full"
              class="primary-button button rounded overflow-hidden"
            >
              Choose Plan
              <ph-arrow-right class="ml-2" :size="24" color="currentColor" />
            </ion-button>
          </div>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  PhArrowRight,
  PhCheckCircle,
  PhArrowBendLeftDown,
} from "@phosphor-icons/vue";
export default {
  components: {
    PhArrowRight,
    PhCheckCircle,
    PhArrowBendLeftDown,
  },
};
</script>

<style></style>
