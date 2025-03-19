<template>
  <div class="flex flex-row items-center gap-2">
    <img
      :src="img"
      class="w-32 rounded-xl"
      alt="image"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  img: string;
}

defineProps<Props>();
</script>
