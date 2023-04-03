<script>
import {
  PhMapPinLine,
  PhMagnifyingGlassMinus,
  PhMagnifyingGlass,
  PhCrosshair,
} from "@phosphor-icons/vue";
import StatCard from "../components/cards/StatCard.vue";
import WorkCard from "../components/cards/WorkCard.vue";
import VacancyCard from "../components/cards/VacancyCard.vue";
import CategoryCard from "../components/cards/CategoryCard.vue";
import JobCard from "../components/cards/JobCard.vue";
import CompanyCard from "../components/cards/CompanyCard.vue";
import TestimonialCard from "../components/cards/TestimonialCard.vue";
import CtaCard from "../components/cards/CtaCard.vue";

export default {
  components: {
    StatCard,
    WorkCard,
    VacancyCard,
    CategoryCard,
    TestimonialCard,
    CtaCard,
    JobCard,
    CompanyCard,
    PhMapPinLine,
    PhMagnifyingGlassMinus,
    PhMagnifyingGlass,
    PhCrosshair,
  },
  data() {
    return {
      statCards: [
        {
          title: "Live Job",
          count: "1,75,324",
          icon: "ph-suitcase",
        },
        {
          title: "Companies",
          count: "97,376",
          icon: "ph-buildings",
        },
        {
          title: "Candidates",
          count: "38,47,154",
          icon: "ph-users",
        },
        {
          title: "New Jobs",
          count: "1,75,324",
          icon: "ph-trophy",
        },
      ],
      howWorks: [
        {
          title: "Create account",
          text: "Aliquam facilisis egestas sapien, nec tempor leo tristique at.",
          icon: "ph-user-plus",
        },
        {
          title: "Upload CV/Resume",
          text: "Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales",
          icon: "ph-cloud-arrow-up",
        },
        {
          title: "Find suitable job",
          text: "Phasellus quis eleifend ex. Morbi nec fringilla nibh.",
          icon: "ph-bag-simple",
        },
        {
          title: "Apply job",
          text: "Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.",
          icon: "ph-seal-check",
        },
      ],
      categories: [
        {
          title: "Graphics & Design",
          text: "357 Open position",
          icon: "ph-pen-nib",
        },
        {
          title: "Code & Programing",
          text: "312 Open position",
          icon: "ph-code",
        },
        {
          title: "Digital Marketing",
          text: "297 Open position",
          icon: "ph-megaphone",
        },
        {
          title: "Video & Animation",
          text: "247 Open position",
          icon: "ph-monitor-play",
        },
        {
          title: "Music & Audio",
          text: "204 Open position",
          icon: "ph-music-notes-simple",
        },
      ],
    };
  },
};
</script>
<template>
  <ion-page>
    <app-header />
    <ion-content :scroll-y="true">
      <div class="py-8 px-6">
        <ion-text>
          <h2 class="heading-03 text-gray-900 mt-0 mb-3">
            Find a job that suits your interest & skills.
          </h2>
        </ion-text>
        <p class="body-medium-400 text-gray-700 mt-0 mb-3">
          <ion-text
            >Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.</ion-text
          >
        </p>
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
          <ion-button class="primary-button">
            <ph-magnifying-glass-minus :size="24" color="#fff" />
            <span>Search</span>
          </ion-button>
        </form>
        <p
          class="text-xs text-gray-600 mt-0 mb-6 flex gap-1 whitespace-nowrap overflow-x-auto"
        >
          Suggestion:
          <ion-button fill="clear" href="#" class="anchor-button"
            ><span class="text-xs capitalize text-gray-900 hover:text-[#0A65CC]"
              >Designer,</span
            ></ion-button
          >
          <ion-button fill="clear" href="#" class="anchor-button"
            ><span class="text-xs capitalize text-gray-900 hover:text-[#0A65CC]"
              >Programing,</span
            >
          </ion-button>
          <ion-button fill="clear" href="#" class="anchor-button"
            ><span class="text-xs capitalize text-gray-900 hover:text-[#0A65CC]"
              >Digital Marketing,</span
            ></ion-button
          >
          <ion-button fill="clear" href="#" class="anchor-button"
            ><span class="text-xs text-gray-900 hover:text-[#0A65CC]"
              >Video,</span
            ></ion-button
          >
          <ion-button fill="clear" href="#" class="anchor-button"
            ><span class="text-xs capitalize text-gray-900 hover:text-[#0A65CC]"
              >Animation.</span
            ></ion-button
          >
        </p>
        <div class="h-[300px] mb-8">
          <img
            class="w-full h-full object-cover"
            src="/assets/images/hero-illustration.png"
            alt=""
          />
        </div>
        <div class="grid gap-4 grid-cols-2">
          <StatCard
            v-for="item in statCards"
            :key="item"
            :icon="item.icon"
            :title="item.title"
            :count="item.count"
          />
        </div>
      </div>
      <div class="popular-vacancy bg-white py-8 px-6">
        <ion-text>
          <h2 class="mt-0 mb-4 text-xl font-medium text-gray-900">
            Most Popular Vacancies
          </h2>
        </ion-text>
        <ion-list class="card-list flex flex-col gap-4">
          <ion-item
            v-for="item in 5"
            :key="item"
            class="py-0 bg-transparent px-0"
          >
            <ion-button>
              <VacancyCard
                title="Anesthesiologists"
                text="45,904 Open Positions"
              />
            </ion-button>
          </ion-item>
          <ion-item>
            <ion-button class="anchor-button">
              <span
                class="flex w-full justify-start capitalize text-base font-semibold text-[#0A65CC]"
                >Load more Category</span
              >
            </ion-button>
          </ion-item>
        </ion-list>
      </div>
      <!-- how works section -->
      <div class="how-works py-8 px-6">
        <ion-text>
          <h2 class="mt-0 mb-6 text-center text-xl font-medium text-gray-900">
            How jobpilot work
          </h2>
        </ion-text>
        <ion-list class="card-list flex flex-col gap-6 bg-transparent">
          <ion-item
            v-for="item in howWorks"
            :key="item"
            class="px-0 bg-transparent"
          >
            <work-card
              :title="item.title"
              :text="item.text"
              :icon="item.icon"
            />
          </ion-item>
        </ion-list>
      </div>
      <!-- category section -->
      <div class="category pb-8 px-6">
        <ion-text>
          <h2 class="mt-0 mb-5 text-xl font-medium text-gray-900">
            Popular Category
          </h2>
        </ion-text>
        <ion-list class="card-list flex flex-col gap-5 bg-transparent">
          <ion-item v-for="item in categories" :key="item">
            <category-card
              :icon="item.icon"
              :title="item.title"
              :text="item.text"
            />
          </ion-item>
          <ion-button class="anchor-button">
            <span
              class="flex w-full justify-start capitalize text-base font-semibold text-[#0A65CC]"
              >Load more Category</span
            >
          </ion-button>
        </ion-list>
      </div>
      <!-- featured job section -->
      <div class="bg-white py-8 px-6">
        <ion-text>
          <h2 class="mt-0 mb-5 text-xl font-medium text-gray-900">
            Featured Jobs
          </h2>
        </ion-text>
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
      <!-- top companies section -->
      <div class="py-8 px-6">
        <ion-text>
          <h2 class="mt-0 mb-5 text-xl font-medium text-gray-900">
            Top Companies
          </h2>
        </ion-text>
        <ion-list class="card-list flex flex-col gap-5 py-0 bg-transparent">
          <ion-item href="#" class="cursor-pointer">
            <CompanyCard
              title="Dribble"
              status="featured"
              location="Dhaka, Bangladesh"
            >
              <template #logo>
                <img
                  class="w-14 h-14 rounded object-cover"
                  src="/assets/images/company-logo.png"
                  alt=""
                />
              </template>
            </CompanyCard>
          </ion-item>
          <ion-item>
            <CompanyCard
              title="Dribble"
              status="featured"
              location="Dhaka, Bangladesh"
            >
              <template #logo>
                <img
                  class="w-14 h-14 rounded object-cover"
                  src="/assets/images/company-logo.png"
                  alt=""
                />
              </template>
            </CompanyCard>
          </ion-item>
          <ion-item>
            <CompanyCard
              title="Dribble"
              status="featured"
              location="Dhaka, Bangladesh"
            >
              <template #logo>
                <img
                  class="w-14 h-14 rounded object-cover"
                  src="/assets/images/company-logo.png"
                  alt=""
                />
              </template>
            </CompanyCard>
          </ion-item>
          <ion-item>
            <CompanyCard
              title="Dribble"
              status="featured"
              location="Dhaka, Bangladesh"
            >
              <template #logo>
                <img
                  class="w-14 h-14 rounded object-cover"
                  src="/assets/images/company-logo.png"
                  alt=""
                />
              </template>
            </CompanyCard>
          </ion-item>
          <ion-item>
            <ion-button class="anchor-button" href="/findjobs">
              <span
                class="flex w-full justify-start capitalize text-base font-semibold text-[#0A65CC]"
                >Load more Company</span
              >
            </ion-button>
          </ion-item>
        </ion-list>
      </div>
      <!-- testimonial section -->
      <div class="px-6 pb-8">
        <ion-text>
          <h2 class="mt-0 mb-5 text-xl font-medium text-gray-900">
            Client Testimonial
          </h2>
        </ion-text>
        <ion-list class="card-list py-0 bg-transparent flex flex-col gap-5">
          <ion-item>
            <TestimonialCard
              comment="“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”"
              name="Bessie Cooper"
              position="Creative Director"
              :star="4"
            >
              <template #avatar>
                <img
                  class="w-12 h-12 rounded-full object-cover"
                  src="/assets/images/testimonial-avatar.png"
                  alt=""
                />
              </template>
            </TestimonialCard>
          </ion-item>
          <ion-item>
            <TestimonialCard
              comment="“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”"
              name="Bessie Cooper"
              position="Creative Director"
              :star="5"
            >
              <template #avatar>
                <img
                  class="w-12 h-12 rounded-full object-cover"
                  src="/assets/images/testimonial-avatar.png"
                  alt=""
                />
              </template>
            </TestimonialCard>
          </ion-item>
          <ion-item>
            <TestimonialCard
              comment="“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”"
              name="Bessie Cooper"
              position="Creative Director"
              :star="3"
            >
              <template #avatar>
                <img
                  class="w-12 h-12 rounded-full object-cover"
                  src="/assets/images/testimonial-avatar.png"
                  alt=""
                />
              </template>
            </TestimonialCard>
          </ion-item>
          <ion-item>
            <ion-button class="anchor-button">
              <span
                class="flex justify-start w-full capitalize text-base font-semibold text-[#0A65CC]"
                >Load more testimonial</span
              >
            </ion-button>
          </ion-item>
        </ion-list>
      </div>
      <!-- cta section -->
      <div class="flex flex-col gap-2 pb-2">
        <CtaCard
          :candidate="true"
          title="Become a Candidate"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur."
        />
        <CtaCard
          title="Become a Employee"
          text="Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. "
        />
      </div>
    </ion-content>
  </ion-page>
</template>
