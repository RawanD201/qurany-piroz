<template>
  <div
    dir="ltr"
    class="my-12 relative w-11/12 flex h-[350px] bg-white lg:w-full flex-col items-center justify-center overflow-hidden max-w-3xl mx-auto shadow-[inset_0_1px_1px_0_hsla(0,0%,100%,0.15)] rounded-xl border"
  >

    <div>
      <!-- Logo Image -->
      <img
        src="/images/logo.png"
        alt="logo"
        class="absolute z-50 mx-auto transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-105 hover:rotate-3 w-36 h-36 top-1/2 left-1/2 rounded-xl"
      >

      <!-- Glow Effects -->
      <div
        class="absolute bottom-0 left-0 w-full z-10 h-64 blur-xl ease transform bg-primary/60 opacity-70 shadow-[0_0_40px_20px_rgba(var(--primary-rgb),0.7)] animate-pulse-slow transition-all duration-700"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-full z-9 h-52 blur-3xl ease transform bg-primary/40 shadow-[0_0_70px_30px_rgba(var(--primary-rgb),0.4)] animate-glow transition-all duration-1000"
      ></div>
    </div>

    <!-- Marquee Section -->
    <div class="flex flex-col space-y-4">
      <!-- First Marquee -->
      <ClientOnly>
        <Marquee
          pause-on-hover
          class="[--duration:120s] rotate-6"
        >
          <ClientCard
            v-for="review in firstRow"
            :key="review.img"
            :img="review.img"
          />
        </Marquee>
      </ClientOnly>

      <!-- Second Marquee (Reverse) -->
      <ClientOnly>
        <Marquee
          reverse
          pause-on-hover
          class="[--duration:100s] rotate-6"
        >
          <ClientCard
            v-for="review in secondRow"
            :key="review.img"
            :img="review.img"
          />
        </Marquee>
      </ClientOnly>

      <!-- Third Marquee (Slower for Variety) -->
      <ClientOnly>
        <Marquee
          pause-on-hover
          class="[--duration:90s] rotate-6"
        >
          <ClientCard
            v-for="review in thirdRow"
            :key="review.img"
            :img="review.img"
          />
        </Marquee>
      </ClientOnly>
    </div>
  </div>
</template>


<script setup lang="ts">
import Marquee from '~/components/Marquee.vue';
import ClientCard from '~/components/ClientCard.vue';

// Reviews data
const reviews = Array.from({ length: 113 }, (_, i) => ({
  img: `/images/image${i + 1}.png`
}));
// Split reviews into two rows
// Split reviews into three parts
const firstRow = reviews.slice(0, Math.ceil(reviews.length / 3));
const secondRow = reviews.slice(Math.ceil(reviews.length / 3), Math.ceil(2 * reviews.length / 3));
const thirdRow = reviews.slice(Math.ceil(2 * reviews.length / 3));</script>
