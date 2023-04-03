<template>
  <div class="p-6">
    <h3 class="text-lg font-semibold mt-0 mb-4">Basic Information</h3>
    <ion-list class="card-list flex flex-col gap-4 bg-transparent">
      <ion-item>
        <div class="w-full">
          <label class="body-sm-400 block mb-2">Profile Picture</label>
          <label
            class="relative inline-flex cursor-pointer w-60 h-60 rounded-xl"
          >
            <input
              id="profile"
              ref="fileInput"
              type="file"
              hidden
              accept="image/*"
              @change="onFileChange"
            />

            <div v-if="preview" class="w-full h-full">
              <div class="w-full h-full overflow-hidden rounded-lg mb-3">
                <img
                  :src="preview"
                  class="w-full h-full object-cover"
                  alt="Preview"
                />
              </div>
              <div class="flex gap-3 items-center">
                <span class="text-xs text-gray-600">{{ imageSize }}</span>
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
                  A photo larger than 400 pixels work best. Max photo size 5 MB.
                </p>
              </div>
            </div>
          </label>
        </div>
      </ion-item>
      <ion-item>
        <div class="w-full">
          <label class="body-sm-400 block mb-2">Name</label>
          <div class="flex justify-between gap-3">
            <ion-input
              placeholder="First name"
              class="input-field border text-base rounded"
            ></ion-input>
            <ion-input
              placeholder="Last name"
              class="input-field border text-base rounded"
            ></ion-input>
          </div>
        </div>
      </ion-item>
      <ion-item>
        <div class="w-full">
          <label class="body-sm-400 block mb-2">Title/Headline</label>
          <ion-input
            placeholder="First name"
            class="input-field border text-base rounded"
          ></ion-input>
        </div>
      </ion-item>
      <ion-item class="w-full">
        <div class="w-full">
          <label class="body-sm-400 block mb-2">Experience</label>
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
      <ion-item class="w-full">
        <div class="w-full">
          <label class="body-sm-400 block mb-2">Educations</label>
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
        <div class="inline-flex w-auto">
          <ion-button class="primary-button">Save Changes</ion-button>
        </div>
      </ion-item>
    </ion-list>
    <h3 class="text-lg font-semibold mt-0 mb-4">Your Resume/CV</h3>
    <ion-list class="card-list flex flex-col gap-4 bg-transparent">
      <ion-item
        v-for="(item, index) in resumes"
        :key="index"
        class="w-full overflow-visible"
      >
        <div
          class="flex gap-3 items-center w-full bg-white p-5 rounded-md z-10"
        >
          <div class="flex gap-3 items-center w-full">
            <ph-file-text :size="32" color="#0a65cc" />
            <div>
              <h2 class="mt-0 body-sm-500 mb-0.5">{{ item.resumeTitle }}</h2>
              <p class="body-sm-400">{{ item.resumeSize }}</p>
            </div>
          </div>
          <div ref="dropdownMenu" class="inline-flex relative">
            <ion-button class="inline-button" @click="toggleMenu(index)">
              <ph-dots-three :size="32" color="#0a65cc" />
            </ion-button>
            <ul
              class="dropdown absolute shadow-[0px_12px_32px_rgba(24,25,28,0.08);] inline-flex flex-col z-50 border rounded-md right-0 top-full bg-white py-3 w-auto"
              :class="{ hidden: !item.isOpen }"
            >
              <li class="whitespace-nowrap">
                <ion-button class="inline-button w-full padding">
                  <div
                    class="w-full py-2.5 px-4 flex justify-center gap-2 items-center body-sm-500 text-gray-900 cursor-pointer hover:bg-[#E7F0FA]"
                  >
                    <ph-pencil-simple-line :size="20" color="#0a65cc" />
                    <span>Edit Resume</span>
                  </div>
                </ion-button>
              </li>
              <li class="whitespace-nowrap">
                <ion-button class="inline-button w-full padding">
                  <div
                    class="w-full py-2.5 px-4 flex justify-center gap-2 items-center body-sm-500 text-gray-900 cursor-pointer hover:bg-[#E7F0FA]"
                  >
                    <ph-trash :size="20" color="#0a65cc" />
                    <span>Delete Resume</span>
                  </div>
                </ion-button>
              </li>
            </ul>
          </div>
        </div>
      </ion-item>
    </ion-list>
    <ion-list class="card-list bg-transparent">
      <ion-item class="w-full">
        <ion-button href="/candidate/upload-resume">
          <div
            class="flex gap-3 items-center w-full border-2 border-dashed bg-white p-5 rounded-md"
          >
            <div class="flex gap-3 items-center w-full">
              <ph-file-text :size="32" color="#0a65cc" />
              <div>
                <h2 class="mt-0 body-sm-500 text-left mb-0.5 text-gray-900">
                  Add Cv/Resume
                </h2>
                <p class="body-sm-400 text-gray-600">
                  Browse file or drop here. only pdf
                </p>
              </div>
            </div>
          </div>
        </ion-button>
      </ion-item>
    </ion-list>
  </div>
</template>
<script>
import {
  PhCloudArrowUp,
  PhXCircle,
  PhPencilCircle,
  PhTrash,
  PhPencilSimpleLine,
  PhFileText,
  PhDotsThree,
  PhLinkSimpleHorizontal,
} from "@phosphor-icons/vue";
export default {
  components: {
    PhCloudArrowUp,
    PhXCircle,
    PhPencilCircle,
    PhFileText,
    PhDotsThree,
    PhLinkSimpleHorizontal,
    PhTrash,
    PhPencilSimpleLine,
  },
  data() {
    return {
      file: null,
      preview: null,
      selectedDate: new Date().toISOString(),
      showDatePicker: false,
      resumes: [
        {
          resumeTitle: "Professional Resume",
          resumeSize: "3.5 MB",
          isOpen: false,
        },
        {
          resumeTitle: "Professional Resume",
          resumeSize: "3.5 MB",
          isOpen: false,
        },
        {
          resumeTitle: "Professional Resume",
          resumeSize: "3.5 MB",
          isOpen: false,
        },
      ],
    };
  },
  computed: {
    imageSize() {
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
  },
  mounted() {
    document.addEventListener("click", this.outsideClickHandler);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.outsideClickHandler);
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
    toggleMenu(index) {
      this.resumes[index].isOpen = !this.resumes[index].isOpen;
    },
    outsideClickHandler(event) {
      if (
        this.$refs.dropdownMenu &&
        this.$refs.dropdownMenu.contains(event.target)
      ) {
        console.log("outside click");
        this.resumes.forEach((resume) => {
          resume.isOpen = false;
        });
      }
    },
  },
};
</script>
<style></style>
