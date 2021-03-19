<template>
  <div class="resume">
    <div class="w-full 2xl:w-10/12 mx-auto px-4">

      <!-- Grid wrapper -->
      <div class="-mx-4 flex flex-wrap">

        <!-- Grid column 1 -->
        <!--        <div class="flex p-4 w-full xl:w-6/12">-->
        <div class="flex p-4 w-6/12">

          <div class="flex-1">

            <h2>My Education</h2>

            <div class="bg-white rounded-full border-solid border border-gray-500">

            </div>

          </div>

        </div>

        <!-- Grid column 2 -->
        <!--        <div class="flex p-4 w-full xl:w-6/12">-->
        <div class="flex p-4 w-6/12">

          <div class="flex-1">

            <h2>My Experience</h2>

            <!-- https://tailwindcss.com/docs/border-radius -->
            <div class="flex flex-wrap items-center p-4 mb-4 rounded-md bg-white border-gray-200 border-solid border">
              <!--              <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75 flex items-center flex-shrink-0 h-8 w-8" style="">-->
              <!--                <font-awesome-icon class=" text-white" :icon="['fas','university']"></font-awesome-icon>-->
              <!--              </div>-->

              <div class="bg-coolGray-300 text-emerald-700 text-center  font-extrabold
              rounded-full h-16 w-16 flex items-center justify-center ...">
                <font-awesome-icon class=" text-emerald-700" size="2x" :icon="['fas','university']"></font-awesome-icon>
              </div>


              <div class="mx-5">
                <div>
                  <h3 class="text-2xl font-semibold text-gray-700">Master In Computer Science</h3>
                </div>
                <!--                <div class="flex flex-none flex-auto flex-initial ">-->
                <div class="flex">
                  <p class="p-1 text-white badge rounded-md bg-emerald-700 text-center align-baseline ">New York
                    University / 2000 - 2004</p>
                </div>
                <!--                <div class="text-gray-500">New York University / 2000 - 2004</div>-->
              </div>

              <p class="flex mt-4 leading-6">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet diam nonummy.
              </p>
            </div>

            <!--            -->


          </div>

        </div>

      </div>


      <div class="flex flex-wrap -mx-3">

        <div class="my-3 px-3 overflow-hidden w-1/3" v-for="n in 6">
          <div class="mb-5 text-center bg-blueGray-100 hover:bg-emerald-700 shadow-md"
               style="    padding: 25px 20px;">

            <div class="mb-5 inline-flex bg-white text-emerald-700 text-center  font-extrabold
              rounded-full h-16 w-16 flex items-center justify-center ...">
              <font-awesome-icon class=" text-emerald-700" size="2x" :icon="['fas','university']"></font-awesome-icon>
            </div>
            <h3 class="text-2xl">Export Presets</h3>
            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>

          </div>
        </div>


      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Resume5",
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">

</style>
