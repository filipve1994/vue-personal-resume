<template>
  <div class="text-white">
    <!-- Card contents -->

    <div class="text-left w-full">
      <!--              <div class="inline-flex items-center justify-center text-center align-middle relative">-->
      <div class="">
        <h2 class="border-gray-400 border-solid border-b-2 font-light leading-normal tracking-widest">
          HOBBIES</h2>
      </div>
    </div>

    <div class="py-4 flex flex-wrap text-white">

                 <span class="m-1 bg-gray-500 hover:bg-gray-600 rounded-full px-2  text-sm leading-loose cursor-pointer"
                       v-for="(hobby, $index) in hobbies" :key="$index"
                 >
<!--                   {{hobby}}-->
                  <span class="mr-1"> <font-awesome-icon
                      :icon="[hobby.iconFontAwesome.type, hobby.iconFontAwesome.name]"></font-awesome-icon> </span> {{
                     hobby.name
                   }}
                </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hobbies",
  props: {
    hobbies: {
      type: Array,
      default: 0
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">

</style>
