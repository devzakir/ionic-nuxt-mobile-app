<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/candidate/setting"></ion-back-button>
        </ion-buttons>
        <ion-title>Setting</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="p-6">
        <ion-list class="card-list flex flex-col gap-4 bg-transparent">
          <ion-item>
            <div class="w-full">
              <label class="body-sm-400 block mb-2">Cv/Resume Name</label>
              <ion-input
                placeholder=""
                class="input-field border text-base rounded"
              ></ion-input>
            </div>
          </ion-item>
          <ion-item>
            <div class="w-full">
              <label class="body-sm-400 block mb-2"
                >Upload your Cv/Resume</label
              >
              <label
                class="relative inline-flex cursor-pointer w-full h-40 rounded-xl"
              >
                <input
                  id="profile"
                  ref="fileInput"
                  type="file"
                  hidden
                  accept="application/pdf"
                  @change="onFileChange"
                />

                <!-- <div v-if="preview" class="w-full h-full">
                  <div class="w-full h-full rounded-lg flex flex-col justify-center items-center overflow-hidden mb-3">
                    <ph-file-pdf :size="32" color="#0a65cc" />
                
                  </div>
                  <div class="flex items-center">
                    <span class="text-xs text-gray-600">{{ fileSize }}</span>
                    <button class="mr-2 focus:outline-none" @click="preview = null">
                      Remove
                    </button>
                    <button class="focus:outline-none" @click="$refs.fileInput.click()">
                      Replace
                    </button>
                  </div>
                </div>
                <div
                  v-else
                  class="absolute border-2 border-dashed border-[#C8CCD1]/70 rounded-lg top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center"
                >
                  <div class="flex px-5 flex-col items-center">
                    <ph-cloud-arrow-up :size="48" color="#ADB2BA" />
                    <p
                      class="text-sm mb-2 text-center font-medium font-display text-gray-900"
                    >
                      Browse photo or drop here
                    </p>
                    <p class="text-xs text-center text-gray-500">
                      Only PDF format available . Max file size 12 MB.
                    </p>
                  </div>
                </div> -->
                <div v-if="preview" class="w-full h-full pb-6">
                  <div
                    class="w-full h-full bg-gray-50 overflow-hidden rounded-lg mb-3"
                  >
                    <div
                      class="flex flex-col justify-center items-center w-full h-full"
                    >
                      <ph-file-pdf :size="32" color="#0a65cc" />
                      <h3 class="text-center body-sm-500">{{ fileName }}</h3>
                      <span class="text-xs text-gray-600">{{ fileSize }}</span>
                    </div>
                  </div>
                  <div class="flex gap-3 items-center">
                    <span class="text-xs text-gray-600">{{ fileSize }}</span>
                    <button
                      class="focus:outline-none text-xs"
                      @click="preview = null"
                    >
                      Remove
                    </button>
                    <button
                      class="focus:outline-none text-xs"
                      @click="$refs.fileInput.click()"
                    >
                      Replace
                    </button>
                  </div>
                </div>
                <div
                  v-else
                  class="absolute border-2 border-dashed border-[#C8CCD1]/70 rounded-lg top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center"
                >
                  <div class="flex px-5 flex-col items-center">
                    <ph-cloud-arrow-up :size="48" color="#ADB2BA" />
                    <p
                      class="text-sm mb-2 text-center font-medium font-display text-gray-900"
                    >
                      Browse photo or drop here
                    </p>
                    <p class="text-xs text-center text-gray-500">
                      A photo larger than 400 pixels work best. Max photo size 5
                      MB.
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </ion-item>
          <ion-item>
            <ion-button class="primary-button">
              <div class="flex gap-2 items-center">
                <ph-plus-circle :size="32" color="#fff" />
                <span>Add Resume</span>
              </div>
            </ion-button>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { PhCloudArrowUp, PhPlusCircle, PhFilePdf } from "@phosphor-icons/vue";
export default {
  components: {
    PhCloudArrowUp,
    PhPlusCircle,
    PhFilePdf,
  },
  data() {
    return {
      file: null,
      preview: null,
    };
  },
  computed: {
    fileSize() {
      if (this.file) {
        const sizeInBytes = this.file.size;
        if (sizeInBytes < 1024) {
          return sizeInBytes + " B";
        } else if (sizeInBytes < 1024 * 1024) {
          return (sizeInBytes / 1024).toFixed(1) + " KB";
        } else {
          return (sizeInBytes / (1024 * 1024)).toFixed(1) + " MB";
        }
      }
      return "";
    },
    fileName() {
      if (this.file) {
        const fileName = this.file.name;
        return fileName;
      }
      return "";
    },
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file;
        this.preview = URL.createObjectURL(file);
      } else {
        this.file = null;
        this.preview = null;
      }
    },
    removeImage() {
      this.file = null;
      this.preview = null;
      this.$refs.fileInput.value = "";
    },
    replaceImage() {
      this.$refs.fileInput.click();
    },
  },
};
</script>
