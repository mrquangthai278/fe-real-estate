<template>
  <div class="flex h-screen overflow-hidden bg-muted">
    <DashboardLayoutsSidebar class="bg-background" />

    <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
    >
      <DashboardLayoutsHeader class="bg-primary" />

      <main>
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <NuxtPage />
        </div>
      </main>
    </div>
  </div>
</template>
