<template>

  <!--  <div class="resume w-full" style="padding: 24px;">-->
  <div class="resume" style="padding: 24px;">

    <div class="container mx-auto py-8 px-4">

      <div class="flex flex-wrap overflow-hidden">

        <div class="w-1/2 overflow-hidden" style="background-color: #f4b350; height: 72px;">
          <!-- Column Content -->
        </div>

        <div class="w-1/2 overflow-hidden" style="background-color: #e76e3c; height: 72px;">
          <!-- Column Content -->
        </div>

      </div>

    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500" style="background-color: #e76e3c; height: 72px;"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400" style="background-color: #e76e3c; height: 72px;"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500" style="background-color: #e76e3c; height: 72px;"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400" style="background-color: #e76e3c; height: 72px;"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-500" style="background-color: #e76e3c; height: 72px;"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400" style="background-color: #e76e3c; height: 72px;"></div>
    </div>


    <!--    <div class="grid grid-cols-2 justify-center items:center">-->
    <div class="flex justify-center items-center" style="height: 100%;">

      <div class="flex-wrap">

        <!--      col-1-->
        <div class="relative text-white " style="background-color: #424242!important;
    border-color: #424242!important;">

          <div class="text-center">
            <div class="bg-gray-300" style="height: 120px; width: 120px;">
              <!--      <img-->
              <!--          :src="'/img/apple-touch-icon-180x180.png'"-->
              <!--          alt="Amirrea Nasiri"-->
              <!--      />-->
              <img alt="Vue logo" src="../assets/logo.png"/>

            </div>
          </div>

          <div class="">
            <h1>{{ personal.name.firstName }} <span class="text-lightBlue-500">{{ personal.name.lastName }}</span></h1>
            <span>{{ personal.role }}</span>
          </div>

          <div class="">
            <h2>INFO</h2>

            <div>
              <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"/>
                  </svg>
                </span>
              <p class="ml-2">
                Customizing your
                <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file
              </p>
            </div>

            <!--          <div class="grid grid-cols-2">-->
            <div class="w-full">
              <div class="w-2/12">
                <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
                <!--              <font-awesome-icon :icon="personal.email.icon"></font-awesome-icon>-->
              </div>
              <div class="w-10/12">
                <div>Email</div>
                <p>{{ personal.email.text }}</p>
              </div>
            </div>

            <div class="w-full">
              <div class="w-2/12">
                <font-awesome-icon :icon="['fas', 'globe']"></font-awesome-icon>
                <!--              <font-awesome-icon :icon="personal.email.icon"></font-awesome-icon>-->
              </div>
              <div class="w-10/12">
                <div>Website</div>
                <p>{{ personal.website }}</p>
              </div>
            </div>

            <div class="w-full">
              <div class="w-2/12">
                <font-awesome-icon :icon="['fas', 'birthday-cake']"></font-awesome-icon>
                <!--              <font-awesome-icon :icon="personal.email.icon"></font-awesome-icon>-->
              </div>
              <div class="w-10/12">
                <div>Birth Date</div>
                <p>{{ personal.birthdate.fullDate }}</p>
              </div>
            </div>

            <div class="w-full">
              <div class="w-2/12">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']"></font-awesome-icon>
                <!--              <font-awesome-icon :icon="personal.email.icon"></font-awesome-icon>-->
              </div>
              <div class="w-10/12">
                <div>Habitation</div>
                <p>{{ personal.country }}</p>
              </div>
            </div>
          </div>

          <div class="">
            <h2>SOCIALS</h2>

            <!--          <div class="grid grid-cols-2">-->
            <div class="w-full">
              <div class="w-2/12">
                <font-awesome-icon :icon="['fas', 'github']"></font-awesome-icon>
                <!--              <font-awesome-icon :icon="personal.email.icon"></font-awesome-icon>-->
              </div>
              <div class="w-10/12">
                <div>Email</div>
                <p>{{ personal.email.text }}</p>
              </div>
            </div>

            <div class="w-full">
              <div class="w-2/12">
                <font-awesome-icon :icon="['fas', 'linkedin']"></font-awesome-icon>
                <!--              <font-awesome-icon :icon="personal.email.icon"></font-awesome-icon>-->
              </div>
              <div class="w-10/12">
                <div>Website</div>
                <p>{{ personal.website }}</p>
              </div>
            </div>

            <div class="w-full">
              <div class="w-2/12">
                <font-awesome-icon :icon="['fas', 'twitter']"></font-awesome-icon>
                <!--              <font-awesome-icon :icon="personal.email.icon"></font-awesome-icon>-->
              </div>
              <div class="w-10/12">
                <div>Birth Date</div>
                <p>{{ personal.birthdate.fullDate }}</p>
              </div>
            </div>

            <div class="w-full">
              <div class="w-2/12">
                <font-awesome-icon :icon="['fas', 'instagram']"></font-awesome-icon>
                <!--              <font-awesome-icon :icon="personal.email.icon"></font-awesome-icon>-->
              </div>
              <div class="w-10/12">
                <div>Habitation</div>
                <p>{{ personal.country }}</p>
              </div>
            </div>
          </div>


          <div class="w-full">
            <h2>HOBBIES</h2>

            <span class="chip items:center inline-flex align-middle m-1">
            <span class="chip-content rounded bg-blue-500 justify-between items:center inline-flex align-middle"
                  style="padding: 0 12px; height: 32px;">
              <div class="avatar justify-center align-text-bottom items:center"
                   style="border-radius:50%; display: inline-flex; width: 48px; height: 48px;">
              <font-awesome-icon :icon="['fas', 'biking']"></font-awesome-icon>
              </div>
              Cycling
            </span>
          </span>
          </div>


        </div>

        <!--      col 2-->
        <div class="">

          <div class="" style="background-color: #f5f5f5!important;  border-color: #f5f5f5!important; box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    text-decoration: none;">

            <div class="" style="padding: 16px; width: 100%;">

              <div class="whoami " style="">
                <div class="title">
                  <h3>Who am I?</h3>
                  <div class="spacer"></div>

                </div>

                <div>
                  I'm a developer born in Iran and founder of Delix.ir, Bytegate.ir and Bobet.ir and co-founder of
                  Smo.li.
                  I'm interested and skilled in different topics of Information Technology including programming, web
                  development, and computer and network security.
                </div>

              </div>


              <div class="v-card v-card--flat v-sheet theme--light">
                <div data-v-949f5c28="" class="v-card__title"><h3 data-v-949f5c28=""
                                                                  class="title font-weight-light mb-1">
                  What am I proud of?
                </h3>
                  <div data-v-949f5c28="" class="spacer"></div>
                </div>
                <div data-v-949f5c28="" class="v-card__text">
                  <div data-v-10b05ad4="" class="layout">
                    <div data-v-10b05ad4="" class="flex md1 xs3"><i data-v-10b05ad4="" aria-hidden="true"
                                                                    class="v-icon v-icon--right mdi mdi-help-rhombus-outline theme--light"></i>
                    </div>
                    <div data-v-10b05ad4="" class="flex md11 xs9"><p data-v-10b05ad4=""><strong data-v-10b05ad4="">Answered
                      10M+ questions!</strong><br data-v-10b05ad4=""><small data-v-10b05ad4="">(Bytegate.ir post
                      views)</small></p></div>
                  </div>
                  <div data-v-10b05ad4="" class="layout">
                    <div data-v-10b05ad4="" class="flex md1 xs3"><i data-v-10b05ad4="" aria-hidden="true"
                                                                    class="v-icon v-icon--right mdi mdi-library-music theme--light"></i>
                    </div>
                    <div data-v-10b05ad4="" class="flex md11 xs9"><p data-v-10b05ad4=""><strong data-v-10b05ad4="">Made
                      people enjoy and learn a new language for equivalent of 29+ years (older than myself!)</strong><br
                        data-v-10b05ad4=""><small data-v-10b05ad4="">(Bobet.ir and its channel downloads)</small></p>
                    </div>
                  </div>
                  <div data-v-10b05ad4="" class="layout">
                    <div data-v-10b05ad4="" class="flex md1 xs3"><i data-v-10b05ad4="" aria-hidden="true"
                                                                    class="v-icon v-icon--right mdi mdi-timer-sand theme--light"></i>
                    </div>
                    <div data-v-10b05ad4="" class="flex md11 xs9"><p data-v-10b05ad4=""><strong data-v-10b05ad4="">Saved
                      +110 days of time of students, writers and etc!</strong><br data-v-10b05ad4=""><small
                        data-v-10b05ad4="">(Delix.ir service usages)</small></p></div>
                  </div>
                  <div data-v-10b05ad4="" class="layout">
                    <div data-v-10b05ad4="" class="flex md1 xs3"><i data-v-10b05ad4="" aria-hidden="true"
                                                                    class="v-icon v-icon--right mdi mdi-account-multiple theme--light"></i>
                    </div>
                    <div data-v-10b05ad4="" class="flex md11 xs9"><p data-v-10b05ad4=""><strong data-v-10b05ad4="">Tried
                      to cover small part of 7 people expenses.</strong><br data-v-10b05ad4=""><small
                        data-v-10b05ad4="">(My
                      awesome colleagues)</small></p></div>
                  </div>
                </div>
              </div>

              <div data-v-949f5c28="" data-v-10b05ad4="" class="v-card v-card--flat v-sheet theme--light">
                <div data-v-949f5c28="" class="v-card__title"><h3 data-v-949f5c28=""
                                                                  class="title font-weight-light mb-1">
                  Education
                </h3>
                  <div data-v-949f5c28="" class="spacer"></div>
                </div>
                <div data-v-949f5c28="" class="v-card__text">
                  <div data-v-10b05ad4="" class="layout">
                    <div data-v-10b05ad4="" class="flex md4">
                      2015 - 2019 (not finished yet)
                    </div>
                    <div data-v-10b05ad4="" class="flex md8"><strong data-v-10b05ad4="">Bachelor's degree, Information
                      Technology</strong>
                      <div data-v-10b05ad4=""><i data-v-10b05ad4="">Seraj University</i></div>
                      <div data-v-10b05ad4="">
                        Became a member of University Academic Association of Computer Science
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-v-949f5c28="" data-v-10b05ad4="" class="v-card v-card--flat v-sheet theme--light"
                   id="to-timeline">
                <div data-v-949f5c28="" class="v-card__title"><h3 data-v-949f5c28=""
                                                                  class="title font-weight-light mb-1">
                  Skills and Expertize
                </h3>
                  <div data-v-949f5c28="" class="spacer"></div>
                </div>
                <div data-v-949f5c28="" class="v-card__text">
                  <div data-v-10b05ad4="" class="layout wrap">
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-language-php theme--light"
                                                                        style="font-size: 16px;"></i>
                          PHP
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="95" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 95%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-language-javascript theme--light"
                                                                        style="font-size: 16px;"></i>
                          JavaScript
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="80" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 80%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-laravel theme--light"
                                                                        style="font-size: 16px;"></i>
                          Laravel Framework
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="90" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 90%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-vuejs theme--light"
                                                                        style="font-size: 16px;"></i>
                          VueJS Framework
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="90" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 90%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md12 xs12 mb-4"></div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-ubuntu theme--light"
                                                                        style="font-size: 16px;"></i>
                          Ubuntu Server
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="70" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 70%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-linux theme--light"
                                                                        style="font-size: 16px;"></i>
                          CentOS Server
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="47" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 47%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-shield-lock theme--light"
                                                                        style="font-size: 16px;"></i>
                          Web Application Security
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="80" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 80%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-test-tube theme--light"
                                                                        style="font-size: 16px;"></i>
                          Test Driven Development
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="26" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 26%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-truck-fast theme--light"
                                                                        style="font-size: 16px;"></i>
                          Continuous Integration / Continuous Delivery
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="35" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 35%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-git theme--light"
                                                                        style="font-size: 16px;"></i>
                          Git
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="67" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 67%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md12 xs12 mb-4"></div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-chip theme--light"
                                                                        style="font-size: 16px;"></i>
                          Hardware Development
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="29" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 29%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-language-cpp theme--light"
                                                                        style="font-size: 16px;"></i>
                          C/C++
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="38" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 38%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-10b05ad4="" class="flex md12 xs12 mb-4"></div>
                    <div data-v-10b05ad4="" class="flex md6 xs12">
                      <div data-v-10b05ad4="" class="mr-2 ml-2">
                        <div data-v-10b05ad4="" class="align-center"><i data-v-10b05ad4="" aria-hidden="true"
                                                                        class="v-icon mdi mdi-text theme--light"
                                                                        style="font-size: 16px;"></i>
                          Content Marketing (+340 done)
                        </div>
                        <div data-v-10b05ad4="" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                             aria-valuenow="96" class="v-progress-linear progress" style="height: 3px;">
                          <div class="v-progress-linear__background secondary"
                               style="height: 3px; opacity: 0.3; width: 100%;"></div>
                          <div class="v-progress-linear__bar"><!---->
                            <div class="v-progress-linear__bar__determinate secondary" style="width: 96%;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>

        </div>

      </div>

    </div>
  </div>


  <!--  <div class="resume w-full">-->

  <!--    <div class="p-8 mx-auto">-->

  <!--      <div class="container w-10/12 ">-->

  <!--        <div class="flex">-->

  <!--          <div class="flex flex-wrap">-->

  <!--            <div class="w-4/12">-->

  <!--              <div class="bg-gray-800">-->
  <!--                <div class="card__text">-->
  <!--                  <avatar></avatar>-->

  <!--                  <div class="sm:text-center mb-4 mt-3">-->
  <!--                    <h1>{{ name.firstName }}<span class="text-lightBlue-500">{{ name.lastName }}</span></h1>-->
  <!--                  </div>-->
  <!--                </div>-->

  <!--              </div>-->

  <!--            </div>-->

  <!--            <div class="w-8/12">-->


  <!--            </div>-->

  <!--          </div>-->

  <!--          <div class="flex">-->


  <!--          </div>-->

  <!--        </div>-->

  <!--      </div>-->


  <!--    </div>-->
  <!--  </div>-->


</template>

<script>
import Avatar from "@/components/profile/Avatar";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Resume",
  components: {Avatar},
  data() {
    return {
      personal: {
        name: {
          firstName: 'Filip',
          lastName: 'Vanden Eynde'
        },
        role: 'A challenge-loving web developer',
        email: {
          text: 'hi@filipve.com',
          icon: faEnvelope,
        },
        website: 'filipve.com',
        birthdate: {
          day: '20',
          month: '04',
          year: '1994',
          fullDate: '20/04/1994',
        },
        country: 'Belgium'
      },
      socials: {
        github: 'github.com/filipve1994',
        linkedin: 'linkedin.com/filipve',
        twitter: '',
        instagram: '',
      },
      skills: [
        {
          name: '',
          icon: '',
          score: '',
        },
        {
          name: '',
          icon: '',
          score: '',
        },
        {
          name: '',
          icon: '',
          score: '',
        },
        {
          name: '',
          icon: '',
          score: '',
        },
        {
          name: '',
          icon: '',
          score: '',
        },
        {
          name: '',
          icon: '',
          score: '',
        },
        {
          name: '',
          icon: '',
          score: '',
        },
      ],
      languages: [
        {
          language: 'English',
          writing: '',
          speaking: '',
          understanding: '',
          score: '',
        },
        {
          language: 'French',
          writing: '',
          speaking: '',
          understanding: '',
          score: '',
        },
        {
          language: 'Dutch',
          writing: 'mothertongue',
          speaking: 'mothertongue',
          understanding: 'mothertongue',
          score: '90',
        },
      ],
      hobbies: [
        {
          name: 'challenges',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },
        {
          name: '',
          icon: '',
        },

      ]
    }
  },
}
</script>

<style scoped lang="scss">
.resume {
  height: 100%;
  background: #66668d;
  background: -webkit-gradient(linear, right top, left top, from(#66668d), to(#4389a2));
  background: linear-gradient(
          270deg, #66668d, #4389a2);
  background-size: cover;

}
</style>
