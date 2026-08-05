<script setup>
import { inject } from 'vue';

const __ = inject('locale');
</script>

<template>
  <div class="py-8 lg:py-16">
    <h1
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 800,
          ease: 'easeOut'
        }
      }"
      class="w-full py-10 text-2xl text-center lg:text-4xl"
    >
      سەرنجەکان
    </h1>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- Card 1 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 100,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round "
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            Rebin Rafiq Salih
          </span>
          <span class="text-xs lg:text-sm">
            If this is not the best app, it is definitely one of the best, so I suggest you download this app,
            enshallah♥️
          </span>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 150,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round"
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            Ali.abdullah.100
          </span>
          <span class="text-xs lg:text-sm">
            جزاك الله خيرا
          </span>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 200,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round"
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            Rabie Jubraeel N.
          </span>
          <span class="text-xs lg:text-sm">
            لە باشترین ئەپلیکێیشنەکانی قورئان بۆ ئایفون، چونکە زۆر خزمەتگوزاری بە سودی تێدایە
          </span>
        </div>
      </div>

      <!-- Card 4 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 250,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round"
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            Lawand Abdulla
          </span>
          <span class="text-xs lg:text-sm">
            This is the best iPhone Quran app ever, I never see like this amazing app before. I recommend anyone to use
            this app and see its feature. Jazakallah❤️
          </span>
        </div>
      </div>

      <!-- Card 5 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 300,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round"
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            barzy yasin
          </span>
          <span class="text-xs lg:text-sm">
            Such an amazing app, that is really helpful for us. Thank you for developing it…
          </span>
        </div>
      </div>

      <!-- Card 6 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 350,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round"
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            Rabie Jubraeel N.
          </span>
          <span class="text-xs lg:text-sm">
            لە باشترین ئەپلیکێیشنەکانی قورئان بۆ ئایفون، چونکە زۆر خزمەتگوزاری بە سودی تێدایە
          </span>
        </div>
      </div>

      <!-- Card 7 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 400,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round"
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            عبدالمالیك
          </span>
          <span class="text-xs lg:text-sm">
            جزاک اللە خیرا
          </span>
        </div>
      </div>

      <!-- Card 8 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 450,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round"
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            camran salihi
          </span>
          <span class="text-xs lg:text-sm">
            بارک اللە فیک ، باشترین بەرنامەیە خودا جەزای خێرتان بداتەوە
          </span>
        </div>
      </div>

      <!-- Card 9 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 500,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round"
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            Galvan.S
          </span>
          <span class="text-xs lg:text-sm">
            باشترین بەرنامێ تەفسیرا قورئانێ، سەرکەفتی بن و خودێ خێرا هەوە مەزن بکەت ان شاءالله 🌹🌹❤️❤️
          </span>
        </div>
      </div>

      <!-- Card 10 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 550,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round"
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            HudaHuda32
          </span>
          <span class="text-xs lg:text-sm">
            Alhamdulillah ka shteki awa basudtan danawa Xwa letan razi be 😍
          </span>
        </div>
      </div>

      <!-- Card 11 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 600,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round"
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            Bilal Jabari
          </span>
          <span class="text-xs lg:text-sm">
            دەستان خۆش بێت کارێکی زۆر جوانە
          </span>
        </div>
      </div>

      <!-- Card 12 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 650,
            ease: 'easeOut'
          }
        }"
        class="flex items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-3 rounded-full bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-user-round"
          >
            <circle
              cx="12"
              cy="8"
              r="5"
            />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </div>
        <div class="flex flex-col w-full gap-4 text-center">
          <span>
            Aubedsay
          </span>
          <span class="text-xs lg:text-sm">
            sarkawtw bn xwda padashttan bdatawa
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
