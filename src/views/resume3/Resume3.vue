<template>

  <div class="resume">
    <div class="w-full 2xl:w-10/12 mx-auto px-4">

      <!-- Grid wrapper -->
      <div class="-mx-4 flex flex-wrap">

        <!-- Grid column 1 -->
        <div class="flex p-4 w-full xl:w-4/12 "
             style="background-color: #424242!important; border-color: #424242!important;">
          <!-- Column contents -->

          <!--          <div class="flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">-->
          <div class="flex-1 text-white">
            <!-- Card contents -->

            <!-- begin part 1 -->

            <div>

              <div class="text-center">
                <div class="inline-flex items-center justify-center text-center align-middle relative"
                     style="height: 120px; width: 120px;">
                  <img alt="Vue logo" src="../../assets/logo.png" class="rounded-full"/>
                  <!--                  <img :alt="images.logo.alt" :src="images.bgImages.path" class="rounded-full"/>-->
                </div>
              </div>

              <div>
                <div class="text-center mt-4 mb-6">
                  <h1 class="text-3xl">{{ person.firstname }} <span
                      class="text-lightBlue-500 font-bold">{{ person.lastname }}</span></h1>
                  <p>{{ person.subtitle }}</p>
                </div>
              </div>


            </div>

            <!-- end part 1 -->


            <!-- begin part 2 -->

            <Info :email="person.contactinfo.email"
                  :website="person.contactinfo.website"
                  :birth-date="person.birthDay.fullDate"
                  :location="person.contactinfo.location"

            ></Info>

            <!-- end part 2 -->

            <!-- begin part 3 -->

            <Socials :socials="socials"></Socials>

            <!-- end part 3 -->

            <!-- begin part 4 -->

            <Hobbies :hobbies="hobbies"></Hobbies>

            <!-- end part 4 -->

            <!-- begin part 5 -->

            <Languages></Languages>

            <!-- end part 5 -->

            <!-- begin part 6 -->


            <!-- end part 6 -->

          </div>

        </div>

        <!-- Grid column 2 -->
        <!--        <div class="flex flex-col p-4 w-8/12" style="background-color: #f5f5f5!important;border-color:#f5f5f5!important;">-->
        <div class="flex p-4 w-full xl:w-8/12"
             style="background-color: #f5f5f5!important;border-color:#f5f5f5!important;">

          <!-- Column contents -->
          <!--          <div class="flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">-->
          <div class="flex-1 bg-white rounded-lg shadow-lg">

            <Introduction></Introduction>

            <!--            -->

            <Accomplishments></Accomplishments>

            <!--            -->

            <Education></Education>

            <!--            -->

            <SkillsAndExpertize :skills="skills"></SkillsAndExpertize>

            <!-- Card contents -->
          </div>
        </div>

      </div>

      <div class="layout -mx-4 flex bg-warmGray-50">

        <div class="flex flex-wrap overflow-hidden  p-4">

          <div id="timeline" class="w-full mb-4 flex-auto bg-white rounded-lg shadow-lg" style="height:400px;">

            <div class="whoami p-4" id="to-portfolio">
              <div class="flex flex-initial" id="portfolio">
                <h3 class="text-2xl mb-6 border-b-2 border-solid border-gray-400 text-gray-600 font-light mb-1">
                  Portfolio</h3>
              </div>

              <div class="">
                <p>I'm a developer born in Iran and founder of Delix.ir, Bytegate.io and Bobet.ir and co-founder of
                  Smo.li.</p>
                <p>I'm interested and skilled in different topics of Information Technology, including programming, web
                  development, and computer and network security.</p>
              </div>
            </div>


          </div>

          <div class="w-full mb-4 flex-auto bg-white rounded-lg shadow-lg" style="height:400px;">

            <div class="whoami p-4">
              <div class="flex flex-initial">
                <h3 class="text-2xl mb-6 border-b-2 border-solid border-gray-400 text-gray-600 font-light mb-1">My Life
                  in a Nutshell</h3>
              </div>

              <div class="">
                <p>I'm a developer born in Iran and founder of Delix.ir, Bytegate.io and Bobet.ir and co-founder of
                  Smo.li.</p>
                <p>I'm interested and skilled in different topics of Information Technology, including programming, web
                  development, and computer and network security.</p>
              </div>
            </div>


          </div>

          <div class="w-full mb-4 flex-auto bg-white rounded-lg shadow-lg" style="height:400px;">

            <div class="whoami p-4">
              <div class="flex flex-initial">
                <h3 class="text-2xl mb-6 border-b-2 border-solid border-gray-400 text-gray-600 font-light mb-1">Who am
                  I?</h3>
              </div>

              <div class="">
                <p>I'm a developer born in Iran and founder of Delix.ir, Bytegate.io and Bobet.ir and co-founder of
                  Smo.li.</p>
                <p>I'm interested and skilled in different topics of Information Technology, including programming, web
                  development, and computer and network security.</p>
              </div>

            </div>


          </div>

        </div>

      </div>


    </div>

  </div>
</template>

<script>
// import LeaderLine from 'leader-line-new';
import datajsimport from "../resumedata";
import Info from "@/views/resume3/componentsresume3/Info";
import Socials from "@/views/resume3/componentsresume3/Socials";
import Hobbies from "@/views/resume3/componentsresume3/Hobbies";
import Languages from "@/views/resume3/componentsresume3/Languages";
import Education from "@/views/resume3/componentsresume3/Education";
import SkillsAndExpertize from "@/views/resume3/componentsresume3/SkillsAndExpertize";
import Introduction from "@/views/resume3/componentsresume3/Introduction";
import Accomplishments from "@/views/resume3/componentsresume3/Accomplishments";


export default {
  name: "Resume3",
  components: {Accomplishments, Introduction, SkillsAndExpertize, Education, Languages, Hobbies, Socials, Info},
  data() {

    return datajsimport
    // return {
    //   datajsimport,
    //
    //   users: usersData,
    //   datajs: datajsimport.data,
    //
    //
    //
    //
    // }
  },

  created() {

  },
  mounted() {


    // this.drawline();

    // this.drawline2();

  },
  methods: {

    // drawline() {
    //   // eslint-disable-next-line no-unused-vars
    //
    //   const start = document.getElementById('to-timeline');
    //   const end = document.getElementById('timeline');
    //   const line = new LeaderLine(
    //       {
    //         start: start,
    //         end: end,
    //         size: 2,
    //         // color     : this.$vuetify.theme.primary,
    //         color: '#1976D2',
    //         startLabel: LeaderLine.captionLabel('To the Journey ...'),
    //       });
    // },
    // drawline2() {
    //   // eslint-disable-next-line no-unused-vars
    //   const start = document.getElementById('to-portfolio');
    //   const end = document.getElementById('portfolio');
    //   const line = new LeaderLine(
    //       {
    //         start: start,
    //         end: end
    //       }
    //   );
    // }
  },
}
</script>

<style scoped lang="scss">
.resume, body {
  height: 100%;
  background: #66668d;
  background: -webkit-gradient(linear, right top, left top, from(#66668d), to(#4389a2));
  background: linear-gradient(
          270deg, #66668d, #4389a2);
  background-size: cover;

}

</style>
