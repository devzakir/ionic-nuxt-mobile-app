<template>
  <div class="p-6">
    <ion-list class="card-list flex flex-col gap-4 bg-transparent">
      <ion-item class="w-full">
        <div class="w-full">
          <label class="body-sm-400 block mb-2">Nationality</label>
          <ion-select
            interface="action-sheet"
            placeholder="Experience"
            class="select-box w-full"
          >
            <ion-select-option value="apples">Apples</ion-select-option>
            <ion-select-option value="oranges">Oranges</ion-select-option>
            <ion-select-option value="bananas">Bananas</ion-select-option>
          </ion-select>
        </div>
      </ion-item>
      <ion-item>
        <div class="w-full">
          <label for="" class="body-sm-400 block mb-2">Date of Birth</label>
          <ion-input
            v-model="selectedDate"
            readonly
            class="input-field w-full link border text-base rounded"
            @click="showDatePicker = true"
          ></ion-input>
          <ion-datetime
            v-if="showDatePicker"
            v-model="selectedDate"
            display-format="MM/DD/YYYY"
            :picker-options="{ showBackdrop: true }"
            :popover-options="{
              showBackdrop: true,
              cssClass: 'my-custom-class',
            }"
            :mode="'ios'"
            :cancel-text="'Cancel'"
            :done-text="'Done'"
            :is-open="showDatePicker"
            @click="showDatePicker = false"
            @ionCancel="showDatePicker = false"
            @ionDone="showDatePicker = false"
          ></ion-datetime>
        </div>
      </ion-item>
      <ion-item class="w-full">
        <div class="w-full">
          <label class="body-sm-400 block mb-2">Gender</label>
          <ion-select
            interface="action-sheet"
            placeholder="Experience"
            class="select-box"
          >
            <ion-select-option value="apples">Apples</ion-select-option>
            <ion-select-option value="oranges">Oranges</ion-select-option>
            <ion-select-option value="bananas">Bananas</ion-select-option>
          </ion-select>
        </div>
      </ion-item>
      <ion-item class="w-full">
        <div class="w-full">
          <label class="body-sm-400 block mb-2">Marital State</label>
          <ion-select
            interface="action-sheet"
            placeholder="Experience"
            class="select-box"
          >
            <ion-select-option value="apples">Apples</ion-select-option>
            <ion-select-option value="oranges">Oranges</ion-select-option>
            <ion-select-option value="bananas">Bananas</ion-select-option>
          </ion-select>
        </div>
      </ion-item>
      <ion-item class="w-full">
        <div class="w-full">
          <label class="body-sm-400 block mb-2">Education</label>
          <ion-select
            interface="action-sheet"
            placeholder="Experience"
            class="select-box"
          >
            <ion-select-option value="apples">Apples</ion-select-option>
            <ion-select-option value="oranges">Oranges</ion-select-option>
            <ion-select-option value="bananas">Bananas</ion-select-option>
          </ion-select>
        </div>
      </ion-item>
      <ion-item class="w-full">
        <div class="w-full">
          <label class="body-sm-400 block mb-2">Experience</label>
          <ion-select
            interface="action-sheet"
            placeholder="Experience"
            class="select-box"
          >
            <ion-select-option value="apples">Apples</ion-select-option>
            <ion-select-option value="oranges">Oranges</ion-select-option>
            <ion-select-option value="bananas">Bananas</ion-select-option>
          </ion-select>
        </div>
      </ion-item>
      <ion-item class="w-full">
        <div class="flex flex-col w-full">
          <label for="" class="body-sm-400 block mb-2">Personal Website</label>
          <label for="search" class="relative w-full">
            <ion-input
              id="search"
              type="text"
              placeholder="Links/url"
              class="input-field link border text-base rounded"
            />
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2">
              <ph-link-simple-horizontal :size="24" color="#0A65CC" />
            </span>
          </label>
        </div>
      </ion-item>
      <ion-item>
        <div class="w-full">
          <ion-label>Biography</ion-label>
          <ion-textarea
            class="input-field bg-white border text-base rounded"
            placeholder="Write down your biography here. Let the
    employers know who you are..."
          ></ion-textarea>
        </div>
      </ion-item>
      <ion-item>
        <div class="inline-flex w-auto">
          <ion-button class="primary-button">Save Changes</ion-button>
        </div>
      </ion-item>
    </ion-list>
  </div>
</template>
<script>
import { PhLinkSimpleHorizontal } from "@phosphor-icons/vue";
export default {
  components: {
    PhLinkSimpleHorizontal,
  },
};
</script>
