import linkedin from  '.././../public/img/contact/linkedin.png';
import facebook from  '.././../public/img/contact/facebook.png';
import github from  '.././../public/img/contact/github.png';
import twitter from  '.././../public/img/contact/twitter.png';
import gitlab from  '.././../public/img/contact/gitlab.png';
import behance from  '.././../public/img/contact/behance.png';

import js from '.././../public/img/skill/js.png'
import html from '.././../public/img/skill/html.png'
import react from '.././../public/img/skill/react.png'
import next from '.././../public/img/skill/next.png'
import sass from '.././../public/img/skill/sass.png'
import typescript from '.././../public/img/skill/typescript.jpg'
import redux from '.././../public/img/skill/redux.png'
import routerdom from '.././../public/img/skill/routerdom.png'
import css from '.././../public/img/skill/css.png'
import tailwind from '.././../public/img/skill/tailwind.png'
import mu5 from '.././../public/img/skill/mu5.png'
import node from '.././../public/img/skill/node.png'
import api from '.././../public/img/skill/api.png'
import graphql from '.././../public/img/skill/graphql.png'
import bootstrap from '.././../public/img/skill/bootstrap.png'
import git from '.././../public/img/skill/git.png'

import photoshop from '.././../public/img/skill/photoshop.png'
import illustrator from '.././../public/img/skill/illustrator.png'
import figma from '.././../public/img/skill/figma.png'
import xd from '.././../public/img/skill/xd.png'


import gd from '.././../public/img/skill/gd.png'
import ux from '.././../public/img/skill/wd.png'

import nextjs1 from '.././../public/img/work/nextjs1.png'
import reactjs1 from '.././../public/img/work/reactjs1.png'
import reactjs2 from '.././../public/img/work/reactjs2.png'
import js1 from '.././../public/img/work/js1.png'

export const contact = [
  {logo: linkedin, link:'https://www.linkedin.com/in/karma-lama-0a2237235/'},
  {logo: github, link:'https://github.com/swornim-csit'},
  {logo: behance, link: 'https://www.behance.net/swornimkarma'},
  {logo: gitlab, link:'https://gitlab.com/nim_kar'},
  {logo: twitter, link:'https://twitter.com/nim_kar'},
  {logo: facebook, link:'https://facebook.com/nim_kar'},
]

export const work_category =[
  {icon: js, name: 'Vanilla JS', key: 'js'},
  {icon: react, name: 'React JS', key: 'react'},
  {icon: next, name: 'Next JS', key: 'next'},
  {icon: ux, name: 'UX/UI Design', key: 'ux'},
  {icon: gd, name: 'Graphic Design', key: 'gd'},
]

export const work = [
  {
    id:1,
    img: nextjs1,
    key: 'next',
    title: 'Digital Marketing Agency',
    link: 'https://nextjs-digital-agency-kgt.vercel.app/',
    desc: 'This application desing for Digital marketing agency which shows the all requirement advertisement and development. Using tools are Next JS, Html and CSS.',
    github: 'https://github.com/swornim-csit/nextjs-digital-agency-kgt.git',
  },
  {
    id: 2,
    img: reactjs1,
    key: 'react',
    title: 'Photographer Stunning Portfolio',
    link: 'https://capture-photographer-portfolio.netlify.app/',
    desc: 'This application is designed for photographer portfolio. It contains the various features. This is built by use of React JS library and core CSS.',
    github: 'https://github.com/swornim-csit/reactjs-photographer-portfolio-capture.git',
  },
  {
    id: 3,
    img: js1,
    key: 'js',
    title: 'Nikestore - Single Page Application',
    link: 'https://swornim-csit.github.io/vanillajs-nikestore-app/',
    desc:"This Applicatiion is a single page application which is built using pure JavaScript, HTML and CSS",
    github: 'https://github.com/swornim-csit/vanillajs-nikestore-app.git',
  },
  {
    id: 4,
    img: reactjs2,
    key: 'react',
    title: 'Royata - Restaurant Menu App',
    link: 'https://restaurant-menu-app101.netlify.app/',
    desc:"This Applicatiion is a single page application which is built using React JS, HTML and CSS. In there using react function component and Hooks",
    github: 'https://github.com/swornim-csit/reactjs-restaurant-menu-app.git',
  },

]

export const skills = [
  {
    id: 1,
    title: 'Web Development',
    tools: [react, next, redux, routerdom, html, css, js, mu5, bootstrap, tailwind, sass, typescript, node, graphql, git, api],
    desc: [
      "Completed more than 5 projects in web development uising React js, Tailwind CSS and Graphql.",
      "Competence in Next JS and Firebase.",
    ]
  },
  {
    id: 2,
    title: 'UI/UX Design',
    tools: [figma, xd],
    desc: [
      "Completed more than 5 projects in web development uising React js, Tailwind CSS and Graphql.",
      "Competence in Next JS and Firebase.",
    ]
  }, 
  {
    id: 3,
    title: 'Graphic Design',
    tools: [photoshop, illustrator],
    desc: [
      "Completed more than 5 projects in web development uising React js, Tailwind CSS and Graphql.",
      "Competence in Next JS and Firebase.",
    ]    
  }

]