<template>
  <ClientOnly>
    <div class="flex h-screen overflow-hidden">
      <DashboardLayoutsSidebar class="bg-muted" />

      <div
        class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
      >
        <DashboardLayoutsHeader />

        <main>
          <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div class="mb-8">
              <CommonBreadcrumb />
            </div>

            <NuxtPage />
          </div>
        </main>
      </div>
    </div>
  </ClientOnly>
</template>
