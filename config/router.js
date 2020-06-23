export default [
    // {
    //   path: '/user',
    //   component: '../layouts/UserLayout',
    //   routes: [
    //     {
    //       name: 'login',
    //       path: '/user/login',
    //       component: './user/login',
    //     },
    //   ],
    // },
    {
    //   path: '/',
    //   component: '../layouts/SecurityLayout',
    //   routes: [
        // {
          path: '/',
          component: '../layouts/BasicLayout',
        //   authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/index',
            },
            {
              path: '/index',
              name: 'index',
            //   icon: 'smile',
              component: './Home/index',
            },
            {
                name: 'list',
              //   icon: 'table',
                path: '/list',
                component: './Home/list',
              },
           
            {
              name: 'details',
            //   icon: 'table',
              path: '/details',
              component: './Home/details',
            },
            {
              component: './404',
            },
        //   ],
        // },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ]