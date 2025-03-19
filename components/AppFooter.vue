<script setup>
import { navigations } from '~/assets/contents/main.json';
import { inject, ref, onMounted } from 'vue';
const navigation = inject('navigation');
const currentYear = new Date().getFullYear();
const __ = inject('locale');

// Animation refs
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <footer class="relative px-4 pt-12 overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden opacity-80">
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :visible="{ opacity: 0.4, scale: 1, transition: { duration: 1500, ease: 'easeOut' } }"
        class="absolute top-0 rounded-full left-1/4 w-96 h-96 bg-primary/10 blur-3xl animate-float-slow"
      ></div>
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :visible="{ opacity: 0.3, scale: 1, transition: { duration: 1500, delay: 200, ease: 'easeOut' } }"
        class="absolute bottom-0 rounded-full right-1/4 w-80 h-80 bg-yellow-400/10 blur-3xl animate-float"
      ></div>
    </div>

    <!-- Original decorative SVG with animation -->
    <svg
      width="675"
      height="251"
      viewBox="0 0 675 251"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute lg:inset-0 bottom-0 mx-auto -rotate-180 dark:fill-[#F4F4F5] fill-primary animate-pulse-slow"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 0.2, y: 0, transition: { duration: 1200, ease: 'easeOut' } }"
    >
      <g filter="url(#filter0_f_3324_13395)">
        <path
          d="M440 -139.746L577.136 154L106.517 56.1495L97.9305 19.9494L440 -139.746Z"
          fill="currentColor"
          fill-opacity="0.15"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_f_3324_13395"
          x="0.930542"
          y="-236.746"
          width="673.205"
          height="487.746"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix"
          ></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="48.5"
            result="effect1_foregroundBlur_3324_13395"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_3324_13395"
          x1="508.568"
          y1="7.12694"
          x2="159.672"
          y2="170.009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F4F4F5"></stop>
          <stop
            offset="1"
            stop-color="#F4F4F5"
            stop-opacity="0"
          ></stop>
        </linearGradient>
      </defs>
    </svg>

    <div class="relative z-10">
      <div class="relative flex flex-col items-center justify-center gap-8 py-12">
        <!-- Logo with animation -->
        <NuxtLink to="/">
          <span class="text-xl">{{ __.translate(navigations.title) }}</span>
        </NuxtLink>

        <!-- Description with animation -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
          class="max-w-md text-lg font-light text-center"
        >
          سیانزە تەفسیری کوردی!
        </p>

        <!-- App store buttons with animation -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300, ease: 'easeOut' } }"
          class="flex flex-wrap justify-center gap-4"
        >
          <NuxtLink
            to="https://apps.apple.com/us/app/%D9%82%D9%88%D8%B1%D8%A6%D8%A7%D9%86%DB%8C-%D9%BE%DB%8C%D8%B1%DB%86%D8%B2-%D9%BE%DB%95%DA%95%D8%AA%D9%88%D9%88%DA%A9%DB%8C-%D8%AE%D9%88%D8%AF%D8%A7/id1240368293?ign-itscg=30200&ign-itsct=apps_box_link&mttnsubad=1240368293"
            class="transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-xl"
          >
            <img
              class="w-40 h-12 rounded-xl"
              src="/images/app-store-badge.jpg"
              alt="App Store"
            >
          </NuxtLink>
          <!-- <NuxtLink
            to="/"
            class="transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-xl"
          >
            <img
              class="w-40 h-12 rounded-xl"
              src="/images/play-store-badge.png"
              alt="Google Play Store"
            >
          </NuxtLink> -->
          <a
            href="/qurany-piroz108.apk"
            download
            class="transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-xl"
          >
            <div class="flex items-center justify-around w-40 h-12 bg-black rounded-xl px-1.5">
              <span class="font-sans text-xs font-semibold">Download (APK)</span>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#ffffff"
                    d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6"
                  />
                </svg>
              </div>
            </div>
          </a>

        </div>

        <!-- Social media icons -->
        <!-- <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400, ease: 'easeOut' } }"
          class="flex gap-4 mt-2"
        >
          <a
            href="#"
            class="footer-social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="footer-social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="footer-social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="footer-social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              />
            </svg>
          </a>
        </div> -->
      </div>

      <!-- Copyright section with animated divider -->
      <div
        class="relative text-center custom-screen border-primary"
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1, transition: { duration: 800, delay: 500, ease: 'easeOut' } }"
      >
        <div class="absolute inset-x-0 top-0 flex justify-center">
          <div class="w-4/5 h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent"></div>
        </div>

        <!-- Animated separator -->
        <div class="absolute inset-x-0 top-0 w-full h-1 overflow-hidden">
          <div class="shimmering-line"></div>
        </div>

        <div class="py-8">
          <p class="text-sm font-light">
            © {{ currentYear }} قورئانی پیرۆز — پەڕتووکی خودا. هەموو مافەکان پارێزراوە.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Social media icons */
.footer-social-icon {
  @apply flex items-center justify-center w-10 h-10 rounded-full bg-gray-100/10 text-gray-600 dark:text-gray-300 transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:scale-110 hover:shadow-lg;
}

/* Animation for the floating divs */
@keyframes float {
  0% {
    transform: translateY(0px) translateX(0px);
  }

  50% {
    transform: translateY(-10px) translateX(5px);
  }

  100% {
    transform: translateY(0px) translateX(0px);
  }
}

@keyframes float-slow {
  0% {
    transform: translateY(0px) translateX(0px);
  }

  50% {
    transform: translateY(-15px) translateX(-8px);
  }

  100% {
    transform: translateY(0px) translateX(0px);
  }
}

@keyframes pulse-slow {
  0% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 0.2;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

/* Shimmering line animation */
.shimmering-line {
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, transparent, var(--primary-color, #262e3b), transparent);
  position: absolute;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

:root {
  --primary-color: #3b82f6;
}
</style>
