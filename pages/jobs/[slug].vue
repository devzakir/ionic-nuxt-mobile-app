<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/jobs"></ion-back-button>
      </ion-buttons>
      <ion-title>JobDetails</ion-title>
    </ion-toolbar>
    <ion-content class="border-t border-gray-100">
      <div class="p-6">
        <ion-list class="card-list bg-transparent">
          <ion-item>
            <div class="flex gap-3 items-center mb-6">
              <div>
                <img
                  class="w-14 h-14 rounded-full object-cover"
                  src="/assets/images/employers-logo.png"
                  alt=""
                />
              </div>
              <div>
                <h2 class="mt-0 mb-2 heading-05">Senior UX Designer</h2>
                <div class="flex flex-wrap gap-4 items-center">
                  <span class="body-medium-400">at Facebook</span>
                  <span
                    class="body-xs-500 py-1 px-2 rounded bg-[#0BA02C] text-white"
                    >FULL-TIME</span
                  >
                  <span
                    class="body-sm-500 py-0.5 px-2 rounded bg-[#FFEDED] text-[#E05151]"
                    >Featured</span
                  >
                </div>
              </div>
            </div>
          </ion-item>
          <ion-item>
            <div class="flex gap-3 w-full mb-6">
              <ion-button class="primary-button w-full gap-2">
                <span>Apply Now</span>
                <ph-arrow-right :size="24" color="#FFFFFF" />
              </ion-button>
              <ion-button class="inline-button max-w-max">
                <ph-bookmark-simple :size="24" color="#0A65CC" />
              </ion-button>
            </div>
          </ion-item>
          <ion-item>
            <div class="mb-6">
              <h2 class="heading-06 mt-0 mb-3">Job Description</h2>
              <div class="flex flex-col gap-3 text-gray-600 body-medium-400">
                <p>
                  Velstar is a Shopify Plus agency, and we partner with brands
                  to help them grow, we also do the same with our people!
                </p>
                <p>
                  Here at Velstar, we don't just make websites, we create
                  exceptional digital experiences that consumers love. Our team
                  of designers, developers, strategists, and creators work
                  together to push brands to the next level. From Platform
                  Migration, User Experience & User Interface Design, to Digital
                  Marketing, we have a proven track record in delivering
                  outstanding eCommerce solutions and...
                </p>
                <ion-nav-link
                  router-direction="forward"
                  class="w-full"
                  :component="JobDescription"
                >
                  <ion-button fill="clear" href="#" class="anchor-button">
                    <span class="inline-flex">Read Full Description</span>
                  </ion-button>
                </ion-nav-link>
              </div>
            </div>
          </ion-item>
          <ion-item>
            <div class="bg-white p-5 rounded-lg w-full mb-6">
              <div class="flex flex-col items-center">
                <h3 class="mt-0 text-base font-medium text-gray-900 mb-3">
                  Salary (USD)
                </h3>
                <h2 class="mt-0 text-[#0BA02C] text-xl font-semibold mb-1">
                  $100,000 - $120,000
                </h2>
                <p class="body-sm-400">Yearly salary</p>
              </div>
              <hr class="bg-[#E4E5E8] my-5" />
              <div class="flex flex-col items-center">
                <ph-map-trifold :size="32" color="#0a65cc" />
                <h3
                  class="mt-0 text-base font-medium text-center text-gray-900 mb-1"
                >
                  Job Location
                </h3>
                <p class="body-sm-400">Dhaka, Bangladesh</p>
              </div>
            </div>
          </ion-item>
          <ion-item>
            <div class="bg-white p-5 rounded-lg w-full mb-6">
              <h3 class="mt-0 text-base font-medium text-gray-900 mb-3">
                Job Benefits
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                  >401k Salary</span
                >
                <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                  >Async</span
                >
                <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                  >Learning Budget</span
                >
                <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                  >4 day workweek</span
                >
                <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                  >Profit Sharing</span
                >
                <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                  >Equity Compensation</span
                >
                <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                  >No politics at work</span
                >
                <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                  >Vision Insurance</span
                >
                <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                  >Free gym membership</span
                >
              </div>
            </div>
          </ion-item>
          <ion-item>
            <div class="bg-white p-5 rounded-lg w-full mb-6">
              <h3 class="mt-0 text-base font-medium text-gray-900 mb-5">
                Job Overview
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <ph-calendar-blank :size="32" color="#0a65cc" class="mb-2" />
                  <p class="text-xs mb-1">Job Posted:</p>
                  <h4 class="text-sm font-medium my-0">14 Jun, 2021</h4>
                </div>
                <div>
                  <ph-timer :size="32" color="#0a65cc" class="mb-2" />
                  <p class="text-xs mb-1">Job Posted:</p>
                  <h4 class="text-sm font-medium my-0">14 Jun, 2021</h4>
                </div>
                <div>
                  <ph-wallet :size="32" color="#0a65cc" class="mb-2" />
                  <p class="text-xs mb-1">Job Posted:</p>
                  <h4 class="text-sm font-medium my-0">14 Jun, 2021</h4>
                </div>
                <div>
                  <ph-briefcase :size="32" color="#0a65cc" class="mb-2" />
                  <p class="text-xs mb-1">Job Posted:</p>
                  <h4 class="text-sm font-medium my-0">14 Jun, 2021</h4>
                </div>
              </div>
              <hr class="h-0.5 bg-[#E7F0FA] my-5" />
              <div class="mb-5">
                <h3 class="body-sm-400 mt-0 mb-3">Share this job:</h3>
                <div class="flex flex-wrap gap-2 items-center">
                  <ion-button class="inline-button-bg max-w-max">
                    <div class="inline-flex gap-2 items-center">
                      <ph-link :size="32" color="#0a65cc" />
                      <span class="body-sm-500">Copy Links</span>
                    </div>
                  </ion-button>
                  <ion-button class="inline-button-bg"
                    ><ph-linkedin-logo :size="32" color="#0a65cc"
                  /></ion-button>
                  <ion-button class="inline-button-bg"
                    ><ph-facebook-logo :size="32" color="#0a65cc"
                  /></ion-button>
                  <ion-button class="inline-button-bg"
                    ><ph-twitter-logo :size="32" color="#0a65cc"
                  /></ion-button>
                  <ion-button class="inline-button-bg"
                    ><ph-envelope :size="32" color="#0a65cc"
                  /></ion-button>
                </div>
              </div>
              <div>
                <h3 class="body-sm-400 mt-0 mb-3">Job Tags</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                    >Backend</span
                  >
                  <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                    >PHP</span
                  >
                  <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                    >Laravel</span
                  >
                  <span class="body-sm-500 py-1 px-2.5 rounded bg-[#F1F2F4]"
                    >Development</span
                  >
                </div>
              </div>
            </div>
          </ion-item>
        </ion-list>
      </div>
      <div class="px-6 py-8 bg-white">
        <h2 class="body-xl-500 mt-0 mb-6">Related Jobs</h2>
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
            <ion-button class="anchor-button">
              <span
                class="flex w-full justify-start capitalize text-base font-semibold text-[#0A65CC]"
                >Load more Featured jobs</span
              >
            </ion-button>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  PhArrowRight,
  PhMapTrifold,
  PhBookmarkSimple,
  PhLink,
  PhLinkedinLogo,
  PhFacebookLogo,
  PhTwitterLogo,
  PhEnvelope,
  PhCalendarBlank,
  PhTimer,
  PhWallet,
  PhBriefcase,
} from "@phosphor-icons/vue";
import JobCard from "~/components/cards/JobCard.vue";
import JobDescription from "~~/components/JobDescription.vue";

export default {
  components: {
    PhArrowRight,
    PhBookmarkSimple,
    PhMapTrifold,
    PhCalendarBlank,
    PhLink,
    PhTimer,
    PhWallet,
    PhBriefcase,
    PhLinkedinLogo,
    PhFacebookLogo,
    PhTwitterLogo,
    PhEnvelope,
    JobCard,
  },
  data() {
    return {
      JobDescription,
    };
  },
};
</script>
