<template>
  <div class="skills p-4" id="to-timeline">
    <div class="flex flex-initial">
      <h3 class="text-2xl mb-6 border-b-2 border-solid border-gray-400 text-gray-600 font-light mb-1">Skills
        and Expertize</h3>
    </div>

    <div class="text text-black">

      <div class="flex flex-wrap overflow-hidden">

        <div class="w-6/12 overflow-hidden mb-4" v-for="(skill, $index) in skills" :key="$index">
          <!-- Column Content -->

          <!-- skill begin -->
          <div class="mr-2 ml-2">
            <div class="items-center leading-none mb-1">
              <div class="">
                <font-awesome-icon
                    :icon="[skill.iconFontAwesome.type, skill.iconFontAwesome.name]"></font-awesome-icon>
                {{ skill.name }}
              </div>
            </div>

            <!--  https://tailwindcomponents.com/component/progress-bar-1 -->

            <div class="mt-0 bg-gray-600 bg-gray-700 rounded-full bg-opacity-30" style="height: 3px;">
              <div class="w-9/12 mt-0 bg-gray-700 py-1 rounded-full" :style="'height:3px; width:' + skill.level +'%;'"></div>
            </div>

          </div>
          <!-- skill end -->

        </div>

      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsAndExpertize",
  props: {
    skills: {
      type: Array,
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
