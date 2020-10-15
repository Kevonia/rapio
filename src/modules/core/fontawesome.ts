import Vue from 'vue';

import {
    faCheck, faCheckCircle,
    faInfoCircle,
    faExclamationTriangle,
    faExclamationCircle,
    faArrowUp, faAngleRight,
    faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown,
    faCaretUp, faUpload,
    faMapMarked, faLock, faPhone,
    faUser, faEnvelope, faBars,
    faTimes, faTachometerAlt,
    faFileInvoice, faUserFriends,
    faUserPlus, faCogs, faShippingFast,
    faWallet, faPlus,
    faSignOutAlt, faCog, faDesktop,
    faShoppingCart,
    faTruckMoving, faMoneyBill,
    faTrophy,
    faBell, faBox, faHome,
    faSignInAlt, faAddressBook,
    faUserTimes, faSearch, faGlobe,
    faBacon, faBreadSlice, faPizzaSlice,
    faIceCream, faUtensils,
    faHamburger, faCoffee, faBeer,
    faCar, faThumbsUp, faQuoteLeft, faStar, faStarHalf,
} from '@fortawesome/free-solid-svg-icons';


import {
    faFacebook, faTwitter, faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';

import Buefy from 'buefy';

library.add(faCheck, faCheckCircle,
    faInfoCircle,
    faExclamationTriangle,
    faExclamationCircle,
    faArrowUp, faAngleRight,
    faAngleLeft, faAngleDown,
    faEye, faEyeSlash,
    faCaretDown, faCaretUp,
    faUpload, faMapMarked,
    faLock, faPhone, faUser,
    faEnvelope, faBars,
    faTimes, faTachometerAlt,
    faFileInvoice,
    faUserFriends, faUserPlus,
    faCogs, faShippingFast,
    faWallet, faPlus,
    faSignOutAlt,
    faCog, faDesktop,
    faShoppingCart,
    faTruckMoving, faMoneyBill,
    faTrophy, faBell, faBox, faHome,
    faSignInAlt, faAddressBook,
    faUserTimes, faSearch,
    faGlobe, faBacon, faBreadSlice,
    faPizzaSlice, faIceCream,
    faUtensils, faHamburger,
    faCoffee, faBeer, faCar,
    faThumbsUp, faQuoteLeft,
    faStar, faStarHalf, faFacebook, faTwitter, faInstagram,

);

Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
});
