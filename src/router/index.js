import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        name: 'OverView',
        component: () => import('../components/OverView.vue')
      },
      {
        path: '/candidates',
        name: 'Candidate',
        component: () => import('../components/Candidates.vue')
      },
      {
        path: '/commissions',
        name: 'Commissions',
        component: () => import('../components/Commissions.vue')
      },
      {
        path: '/studentunion',
        name: 'StudentUnion',
        component: () => import('../components/StudentUnion.vue')
      },
      {
        path: '/complaints',
        name: 'Complaints',
        component: () => import('../components/Complaints.vue')
      },
      {
        path: '/nominationrequest',
        name: 'NominationRequest',
        component: () => import('../components/NominationRequest.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('../components/Profile.vue')
      },
      {
        path: '/vote',
        name: 'Vote',
        component: () => import('../components/Vote.vue')
      },
      {
        path: '/posts',
        name: 'Posts',
        component: () => import('../components/Posts.vue')
      },
      {
        path: '/addComplaint',
        name: 'AddComplaint',
        component: () => import('../components/AddComplaint.vue')
      },
      {
        path: '/elections',
        name: 'Elections',
        component: () => import('../components/Elections.vue'),
        children: [
          {
            path: '/electionresults',
            name: 'ElectionResults',
            component: () => import('../components/ElectionResults.vue')
          },
          {
            path: '/electionManager',
            name: 'ElectionManager',
            component: () => import('../components/ElectionManager.vue'),
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
