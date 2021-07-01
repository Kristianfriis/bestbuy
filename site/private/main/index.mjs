import App from './App.js'
import Input from './Views/Input.js';
import Zones from './Views/Zones.js'
import Account from './Views/Account.js';
import UserProfile from './components/AccountComponents/UserProfile.js'
import UserNewUser from './components/AccountComponents/UserNewUser.js';

const routes = [
    { path: '*', component: Input},
    { path: '/zones', component: Zones },
    { path: '/home', component: Input},
    { path: '/account', component: Account, children: [
       {
         path: 'profile',
         component: UserProfile
       },
       {
        path: 'newuser',
        component: UserNewUser
      },
    ]}
  ]

const router = new VueRouter({
  routes // short for `routes: routes`
})

var app = new Vue({
    router,
    el: '#app',
    components: {
        App
    },
    data: {
    }
  })

