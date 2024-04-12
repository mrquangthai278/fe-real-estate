
<template>
  <CommonInput v-bind="$attrs">
    <template v-for="slot in Object.keys($slots)">
      <slot :name="slot"></slot>
    </template>
  </CommonInput>
</template>

