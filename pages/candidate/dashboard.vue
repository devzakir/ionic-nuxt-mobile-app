<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title slot="start">
          <img src="/assets/svg/logo.svg" />
        </ion-title>
        <ion-buttons slot="end">
          <ion-button href="/auth/login">
            <ph-bell-simple-ringing :size="24" color="currentColor" />
          </ion-button>
          <ion-button href="/auth/login">
            <ion-avatar class="h-8 w-8">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </ion-avatar>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :scroll-y="true" class="">
      <div class="ion-content-scroll-host ion-padding py-8 bg-gray-50">
        <div class="px-6">
          <div class="mb-4">
            <h3 class="button mb-1 text-gray-900">Hello, Esther Howard</h3>
            <p class="body-sm-400 text-gray-700">
              Here is your daily activities and job alerts
            </p>
          </div>
          <ion-card
            v-for="item in 4"
            :key="item"
            class="m-0 mb-4 shadow-none rounded-md"
          >
            <ion-card-header class="p-4">
              <div class="flex justify-between">
                <div>
                  <h4
                    class="text-xl leading-6 font-semibold mb-1 text-gray-900 mt-0"
                  >
                    589
                  </h4>
                  <p class="body-medium-400 text-gray-700">Applied jobs</p>
                </div>
                <div class="p-3 bg-blue-100 rounded">
                  <ph-briefcase :size="32" class="text-blue-500" />
                </div>
              </div>
            </ion-card-header>
          </ion-card>
        </div>
        <ion-card class="m-0 mb-4 shadow-none rounded-none bg-red-700">
          <ion-card-header class="px-6 py-4">
            <div class="flex justify-between">
              <ion-avatar class="h-12 w-12 shrink-0">
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </ion-avatar>
              <div class="ml-3">
                <h4
                  class="text-base leading-6 font-semibold mb-1 text-white mt-0"
                >
                  Your profile editing is not completed.
                </h4>
                <p class="body-small-400 text-red-200">
                  Complete your profile editing & build your custom Resume
                </p>
              </div>
            </div>
            <ion-button
              fill="clear"
              class="primary-button mt-4 button rounded overflow-hidden"
            >
              Edit now
              <ph-arrow-right class="ml-2" :size="24" color="currentColor" />
            </ion-button>
          </ion-card-header>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  PhBellSimpleRinging,
  PhBriefcase,
  PhArrowRight,
} from "@phosphor-icons/vue";
export default {
  components: {
    PhBellSimpleRinging,
    PhBriefcase,
    PhArrowRight,
  },
};
</script>

<style></style>
