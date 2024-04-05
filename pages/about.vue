

<template>
  <div class="h-screen">
    <p class="text-primary" @click="setLocale('en')">{{ $t("welcome") }}</p>

    <p class="text-primary" @click="setLocale('fr')">{{ $t("welcome") }}</p>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
</script>