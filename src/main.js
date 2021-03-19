import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "@fontsource/roboto/100.css";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import "@fontsource/roboto/900.css";
import './assets/styles/index.css';
import "@fortawesome/fontawesome-free/js/all"

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faEnvelope, faGlobe, faBirthdayCake, faMapMarkerAlt, faBiking, faBullseye, faBiohazard,
    faLeaf, faTree, faMountain, faMagic, faHashtag, faCodeBranch, faPlane, faVial, faVials,
    faServer, faTruck, faIdCard, faIdCardAlt, faQuestion, faQuestionCircle, faHourglassStart, faHourglass,
    faUserFriends, faUniversity, faSchool, faGraduationCap, faAppleAlt, faLaptop, faDesktop,
    faLaptopCode, faCameraRetro, faCamera, faUsers, faBookOpen, faBug, faMusic, faChalkboard, faChalkboardTeacher,
    faCode,faSkiing
} from '@fortawesome/free-solid-svg-icons';

import {
    faIdCard as faIdCardregular, faHourglass as faHourglassRegular, faQuestionCircle as faQuestionCircleRegular,
} from '@fortawesome/free-regular-svg-icons';

import {
    faGithub, faLinkedin, faTwitter, faInstagram,
    faSass, faCss3, faCss3Alt, faHtml5, faGitAlt, faGitSquare, faGithubAlt, faGithubSquare,
    faGitlab, faGit, faBootstrap, faPhp, faLaravel, faAngular, faJava,
    faJsSquare, faJs, faStrava, faSpotify, faVuejs, faApple, faUbuntu, faWindows,
    faYarn, faChrome, faChromecast, faDocker, faEdge, faEdgeLegacy,
    faSlack, faSlackHash, faInstagramSquare, faJenkins,
    faLinux, faMarkdown, faMdb, faImdb, faWordpress, faWordpressSimple,
    faYoutube, faYoutubeSquare, faWaze, faWhatsappSquare, faWhatsapp,
    faNodeJs, faNpm, faPlaystation, faMicrosoft, faNode, faReact, faPython,
    faSkype, faStackExchange, faStackOverflow, faThemeco, faConfluence,
    faCodepen, faDev, faDropbox, faFontAwesome, faFontAwesomeAlt, faFontAwesomeFlag,
    faFacebookSquare, faAndroid

} from '@fortawesome/free-brands-svg-icons';

// Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faEnvelope, faGlobe, faBirthdayCake, faMapMarkerAlt, faBiking, faBullseye, faBiohazard,
    faLeaf, faTree, faMountain, faMagic, faHashtag, faCodeBranch, faPlane, faVial, faVials,
    faServer, faTruck, faIdCard, faIdCardAlt, faQuestion, faQuestionCircle, faHourglassStart, faHourglass,
    faUserFriends, faUniversity, faSchool, faGraduationCap, faAppleAlt, faLaptop, faDesktop,
    faLaptopCode, faCameraRetro, faCamera, faUsers, faBookOpen, faBug, faMusic, faChalkboard, faChalkboardTeacher,
    faCode,faSkiing
);
// library.add(faIdCardregular,faHourglassRegular,faQuestionCircleRegular);
library.add(faGithub, faLinkedin, faTwitter, faInstagram,
    faSass, faCss3, faCss3Alt, faHtml5, faGitAlt, faGitSquare, faGithubAlt, faGithubSquare,
    faGitlab, faGit, faBootstrap, faPhp, faLaravel, faAngular, faJava,
    faJsSquare, faJs, faStrava, faSpotify, faVuejs, faApple, faUbuntu, faWindows,
    faYarn, faChrome, faChromecast, faDocker, faEdge, faEdgeLegacy,
    faSlack, faSlackHash, faInstagramSquare, faJenkins,
    faLinux, faMarkdown, faMdb, faImdb, faWordpress, faWordpressSimple,
    faYoutube, faYoutubeSquare, faWaze, faWhatsappSquare, faWhatsapp,
    faNodeJs, faNpm, faPlaystation, faMicrosoft, faNode, faReact, faPython,
    faSkype, faStackExchange, faStackOverflow, faThemeco, faConfluence,
    faCodepen, faDev, faDropbox, faFontAwesome, faFontAwesomeAlt, faFontAwesomeFlag,
    faFacebookSquare, faAndroid);

/*

https://fontawesome.com/icons/id-card?style=regular
https://fontawesome.com/icons/hourglass?style=regular
https://fontawesome.com/icons/question-circle?style=regular

https://fontawesome.com/icons/bullseye?style=solid
https://fontawesome.com/icons/biohazard?style=solid
https://fontawesome.com/icons/leaf?style=solid
https://fontawesome.com/icons/tree?style=solid
https://fontawesome.com/icons/mountain?style=solid
https://fontawesome.com/icons/magic?style=solid
https://fontawesome.com/icons/hashtag?style=solid
https://fontawesome.com/icons/code-branch?style=solid
https://fontawesome.com/icons/plane?style=solid
https://fontawesome.com/icons/vial?style=solid
https://fontawesome.com/icons/vials?style=solid
https://fontawesome.com/icons/server?style=solid
https://fontawesome.com/icons/truck?style=solid
https://fontawesome.com/icons/id-card?style=solid
https://fontawesome.com/icons/id-card-alt?style=solid
https://fontawesome.com/icons/question?style=solid
https://fontawesome.com/icons/question-circle?style=solid
https://fontawesome.com/icons/hourglass-start?style=solid
https://fontawesome.com/icons/hourglass?style=solid
https://fontawesome.com/icons/user-friends?style=solid
https://fontawesome.com/icons/university?style=solid
https://fontawesome.com/icons/school?style=solid
https://fontawesome.com/icons/graduation-cap?style=solid
https://fontawesome.com/icons/apple-alt?style=solid
https://fontawesome.com/icons/laptop?style=solid
https://fontawesome.com/icons/desktop?style=solid
https://fontawesome.com/icons/laptop-code?style=solid
https://fontawesome.com/icons/camera-retro?style=solid
https://fontawesome.com/icons/camera?style=solid
https://fontawesome.com/icons/users?style=solid
https://fontawesome.com/icons/book-open?style=solid
https://fontawesome.com/icons/bug?style=solid
https://fontawesome.com/icons/question-circle?style=solid
https://fontawesome.com/icons/music?style=solid
https://fontawesome.com/icons/chalkboard?style=solid
https://fontawesome.com/icons/chalkboard-teacher?style=solid
https://fontawesome.com/icons/code?style=solid
https://fontawesome.com/icons/skiing?style=solid

https://fontawesome.com/icons/github?style=brands
https://fontawesome.com/icons/sass?style=brands
https://fontawesome.com/icons/css3?style=brands
https://fontawesome.com/icons/css3-alt?style=brands
https://fontawesome.com/icons/html5?style=brands
https://fontawesome.com/icons/git-alt?style=brands
https://fontawesome.com/icons/git-square?style=brands
https://fontawesome.com/icons/github-alt?style=brands
https://fontawesome.com/icons/github-square?style=brands
https://fontawesome.com/icons/gitlab?style=brands
https://fontawesome.com/icons/git?style=brands
https://fontawesome.com/icons/bootstrap?style=brands
https://fontawesome.com/icons/php?style=brands
https://fontawesome.com/icons/laravel?style=brands
https://fontawesome.com/icons/angular?style=brands
https://fontawesome.com/icons/java?style=brands
https://fontawesome.com/icons/js-square?style=brands
https://fontawesome.com/icons/js?style=brands
https://fontawesome.com/icons/strava?style=brands
https://fontawesome.com/icons/vuejs?style=brands
https://fontawesome.com/icons/apple?style=brands
https://fontawesome.com/icons/spotify?style=brands
https://fontawesome.com/icons/ubuntu?style=brands
https://fontawesome.com/icons/windows?style=brands
https://fontawesome.com/icons/yarn?style=brands
https://fontawesome.com/icons/chromecast?style=brands
https://fontawesome.com/icons/chrome?style=brands
https://fontawesome.com/icons/docker?style=brands
https://fontawesome.com/icons/edge?style=brands
https://fontawesome.com/icons/edge-legacy?style=brands
https://fontawesome.com/icons/slack?style=brands
https://fontawesome.com/icons/slack-hash?style=brands
https://fontawesome.com/icons/instagram-square?style=brands
https://fontawesome.com/icons/jenkins?style=brands
https://fontawesome.com/icons/linux?style=brands
https://fontawesome.com/icons/markdown?style=brands
https://fontawesome.com/icons/mdb?style=brands
https://fontawesome.com/icons/imdb?style=brands
https://fontawesome.com/icons/wordpress?style=brands
https://fontawesome.com/icons/wordpress-simple?style=brands
https://fontawesome.com/icons/youtube?style=brands
https://fontawesome.com/icons/youtube-square?style=brands
https://fontawesome.com/icons/waze?style=brands
https://fontawesome.com/icons/whatsapp-square?style=brands
https://fontawesome.com/icons/whatsapp?style=brands
https://fontawesome.com/icons/node-js?style=brands
https://fontawesome.com/icons/node?style=brands
https://fontawesome.com/icons/npm?style=brands
https://fontawesome.com/icons/playstation?style=brands
https://fontawesome.com/icons/microsoft?style=brands
https://fontawesome.com/icons/react?style=brands
https://fontawesome.com/icons/python?style=brands
https://fontawesome.com/icons/skype?style=brands
https://fontawesome.com/icons/stack-exchange?style=brands
https://fontawesome.com/icons/stack-overflow?style=brands
https://fontawesome.com/icons/themeco?style=brands
https://fontawesome.com/icons/confluence?style=brands
https://fontawesome.com/icons/codepen?style=brands
https://fontawesome.com/icons/dev?style=brands
https://fontawesome.com/icons/dropbox?style=brands
https://fontawesome.com/icons/font-awesome?style=brands
https://fontawesome.com/icons/font-awesome-alt?style=brands
https://fontawesome.com/icons/font-awesome-flag?style=brands
https://fontawesome.com/icons/facebook-square?style=brands
https://fontawesome.com/icons/android?style=brands
 */

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);


app.use(store);
app.use(router);

app.mount("#app");
