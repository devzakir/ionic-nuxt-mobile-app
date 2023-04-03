<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="/jobs/details"></ion-back-button>
    </ion-buttons>
    <ion-title>JobDescription</ion-title>
  </ion-toolbar>
  <ion-content>
    <div class="p-6 bg-[#F1F2F4]">
      <p class="text-base text-gray-600">
        Velstar is a Shopify Plus agency, and we partner with brands to help
        them grow, we also do the same with our people!
      </p>
      <br />
      <p class="text-base text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
        lectus sit amet leo rutrum facilisis finibus nec velit. Nullam mollis
        gravida tincidunt. Praesent auctor non est nec accumsan. Sed et ligula
        orci. Nam eu aliquam odio, quis laoreet nibh. Duis id auctor augue, in
        suscipit nisi. Nam quis malesuada ex, nec viverra libero. Aenean est
        nibh, placerat vitae sollicitudin in, tempus sit amet lacus. Cras
        sodales ex ultricies aliquam tincidunt. Proin semper neque scelerisque
        neque tincidunt, et pretium felis faucibus.
      </p>
      <br />
      <p class="text-base text-gray-600 mb-6">
        Maecenas feugiat arcu felis, vitae varius enim iaculis sit amet. Aenean
        vehicula scelerisque interdum. In consequat nunc at turpis placerat, eu
        pellentesque urna eleifend. Nullam semper congue ullamcorper. Nunc et
        risus non lorem tempor molestie. Nunc semper lorem vitae libero
        vulputate laoreet. Pellentesque efficitur elit quis sapien rhoncus
        viverra. Nam id gravida arcu. Duis viverra commodo elementum.
        Suspendisse non cursus tortor. Integer gravida neque justo, sit amet
        molestie libero lacinia quis. Donec vel orci eget mi elementum iaculis
        at non ipsum. Aenean ornare pellentesque felis a venenatis.
      </p>
      <h2 class="text-base font-medium text-gray-900 mt-0 mb-2">
        Requirements
      </h2>
      <ul class="list-disc px-4 text-base text-gray-600 mb-6">
        <li>
          Great troubleshooting and analytical skills combined with the desire
          to tackle challenges head-on
        </li>
        <li>
          3+ years of experience in back-end development working either with
          multiple smaller projects simultaneously or large-scale applications
        </li>
        <li>
          Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel
        </li>
        <li>
          Working regularly with APIs and Web Services (REST, GrapthQL, SOAP,
          etc)
        </li>
        <li>
          Have experience/awareness in Agile application development, commercial
          off-the-shelf software, middleware, servers and storage, and database
          management.
        </li>
        <li>
          Familiarity with version control and project management systems (e.g.,
          Github, Jira)
        </li>
        <li>
          Great troubleshooting and analytical skills combined with the desire
          to tackle challenges head-on Ambitious and hungry to grow your career
          in a fast-growing agency
        </li>
      </ul>
      <h2 class="text-base font-medium text-gray-900 mt-0 mb-2">Desirable</h2>
      <ul class="list-disc px-4 text-base text-gray-600 mb-6">
        <li>
          Working knowledge of eCommerce platforms, ideally Shopify but also
          others e.g. Magento, WooCommerce, Visualsoft to enable seamless
          migrations.
        </li>
        <li>Working knowledge of payment gateways</li>
        <li>API platform experience / Building restful APIs</li>
      </ul>
      <h2 class="text-base font-medium text-gray-900 mt-0 mb-2">Benefits</h2>
      <ul class="list-disc px-4 mb-6 text-base text-gray-600">
        <li>
          Early finish on Fridays for our end of week catch up (4:30 finish, and
          drink of your choice from the bar)
        </li>
        <li>
          28 days holiday (including bank holidays) rising by 1 day per year
          PLUS an additional day off on your birthday
        </li>
        <li>Generous annual bonus.</li>
        <li>Healthcare package</li>
        <li>Paid community days to volunteer for a charity of your choice</li>
        <li>
          £100 contribution for your own personal learning and development
        </li>
        <li>Free Breakfast on Mondays and free snacks in the office</li>
        <li>
          Access to Perkbox with numerous discounts plus free points from the
          company to spend as you wish.
        </li>
        <li>Cycle 2 Work Scheme</li>
        <li>Brand new MacBook Pro</li>
        <li>
          Joining an agency on the cusp of exponential growth and being part of
          this exciting story.
        </li>
      </ul>
      <div class="flex gap-3 w-full mb-6">
        <ion-button class="primary-button w-full gap-2">
          <span>Apply Now</span>
          <ph-arrow-right :size="24" color="#FFFFFF" />
        </ion-button>
        <ion-button class="inline-button max-w-max">
          <ph-bookmark-simple :size="24" color="#0A65CC" />
        </ion-button>
      </div>
    </div>
  </ion-content>
</template>
<script setup>
import { PhBookmarkSimple } from "@phosphor-icons/vue";
</script>
