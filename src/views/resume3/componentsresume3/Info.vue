<template>
  <div class="text-white">
    <!-- Card contents -->

    <div class="text-left w-full">
      <!--              <div class="inline-flex items-center justify-center text-center align-middle relative">-->
      <div class="">
        <h2 class="border-gray-400 border-solid border-b-2 font-light leading-normal tracking-widest">
          INFO</h2>
      </div>
    </div>


    <div>
      <!--              <div class="flex items-center">-->
      <div class="flex py-4">
        <div
            class="inline-flex flex-shrink-0 items-center justify-center leading-none align-text-bottom text-white mr-6 text-xl">
          <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
        </div>
        <div>
          <!--                  <span class="block text-base font-bold">Email: <span class="block text-gray-500">filipve@outlook.com</span></span>-->
          <span class="block text-base ">Email: <span
              class="font-normal text-gray-500">
                      <a :href="'mailto:'+email">{{ email }}</a></span>
                    </span>
        </div>
      </div>
    </div>

    <div>
      <!--              <div class="flex items-center">-->
      <div class="flex py-4">
        <div
            class="inline-flex flex-shrink-0 items-center justify-center leading-none align-text-bottom text-white mr-6 text-xl">
          <font-awesome-icon :icon="['fas', 'globe']"></font-awesome-icon>
        </div>
        <div>
                    <span class="block text-base ">Website: <span
                        class="font-normal text-gray-500">
                      <a :href="website">{{ website }}</a>
                    </span>
                    </span>
        </div>
      </div>
    </div>

    <div>
      <!--              <div class="flex items-center">-->
      <div class="flex py-4">
        <div
            class="inline-flex flex-shrink-0 items-center justify-center leading-none align-text-bottom text-white mr-6 text-xl">
          <font-awesome-icon :icon="['fas', 'birthday-cake']"></font-awesome-icon>
        </div>
        <div>
                    <span class="block text-base ">Birth Date: <span
                        class="font-normal text-gray-500">{{ birthDate }}</span></span>
        </div>
      </div>
    </div>

    <div>
      <!--              <div class="flex items-center">-->
      <div class="flex py-4">
        <div
            class="inline-flex flex-shrink-0 items-center justify-center leading-none align-text-bottom text-white mr-6 text-xl">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']"></font-awesome-icon>
        </div>
        <div>
                    <span class="block text-base ">Location: <span
                        class="font-normal text-gray-500">{{ location }}</span></span>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
export default {
  name: "Info",
  props: {
    email: {
      type: String,
      default: "john.doe@email.com",
      required: true
    },
    website: {
      type: String,
      default: "johndoe.com",
      required: true
    },
    birthDate: {
      type: String,
      default: "20/04/1994",
      required: true
    },
    location: {
      type: String,
      default: "Belgium",
      required: true
    },
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped lang="scss">

</style>
