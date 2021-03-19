<template>
  <div class="text-white">
    <!-- Card contents -->

    <div class="text-left w-full">
      <!--              <div class="inline-flex items-center justify-center text-center align-middle relative">-->
      <div class="">
        <h2 class="border-gray-400 border-solid border-b-2 font-light leading-normal tracking-widest">
          SOCIALS</h2>
      </div>
    </div>

    <div v-for="(social, $index) in socials" :key="$index">
      <!--                <p>{{social}}</p>-->
      <!--              <div class="flex items-center">-->
      <div class="flex py-4">
        <div
            class="inline-flex flex-shrink-0 items-center justify-center leading-none align-text-bottom text-white mr-6 text-xl">
          <font-awesome-icon
              :icon="[social.iconFontAwesome.type, social.iconFontAwesome.name]"></font-awesome-icon>
        </div>
        <div>
          <p><a href="#" target="_blank" class="font-normal text-gray-500">github.com/AmirrezaNasiri</a></p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Socials",
  props: {
    socials: {
      type: Array,
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">

</style>
