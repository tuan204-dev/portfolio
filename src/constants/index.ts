import c from '/assets/imgs/tools/c.svg'
import css from '/assets/imgs/tools/css.svg'
import express from '/assets/imgs/tools/express.svg'
import git from '/assets/imgs/tools/git.svg'
import html from '/assets/imgs/tools/html.svg'
import js from '/assets/imgs/tools/javascript.svg'
import nodejs from '/assets/imgs/tools/nodejs.svg'
import postman from '/assets/imgs/tools/postman.svg'
import reactJs from '/assets/imgs/tools/reactjs.svg'
import redux from '/assets/imgs/tools/redux.svg'
import scss from '/assets/imgs/tools/scss.svg'
import tailwind from '/assets/imgs/tools/tailwind.svg'
import ts from '/assets/imgs/tools/typescript.svg'
import cpp from '/assets/imgs/tools/c++.png'
import nextJs from '/assets/imgs/tools/next.png'
import mui from '/assets/imgs/tools/mui.png'
import prisma from '/assets/imgs/tools/prisma.png'
import firebase from '/assets/imgs/tools/firebase.svg'
import mongodb from '/assets/imgs/tools/mongodb.svg'

import { BsFacebook } from 'react-icons/bs'
import { FaGithub, FaInstagram } from 'react-icons/fa'

import spotifyIcon from '/assets/imgs/projects/spotify.png'
import fitnessIcon from '/assets/imgs/projects/fitness.png'
import techBlog from '/assets/imgs/projects/blog.png'

export const tools = [
  {
    name: 'ReactJS',
    icon: reactJs,
  },
  {
    name: 'Sass',
    icon: scss,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'Material UI',
    icon: mui,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'NextJs',
    icon: nextJs,
  },
  {
    name: 'TypeScript',
    icon: ts,
  },
  {
    name: 'JavaScript',
    icon: js,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'ExpressJs',
    icon: express,
  },
  {
    name: 'Postman',
    icon: postman,
  },
  {
    name: 'Prisma',
    icon: prisma,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'HTML5',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'C++',
    icon: cpp,
  },
] as const

export const socialNetworkLinks = [
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/tuan204.dev',
    icon: BsFacebook,
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/tuan204.dev/',
    icon: FaInstagram,
  },
  {
    title: 'Github',
    link: 'https://github.com/tuan204-dev',
    icon: FaGithub,
  },
] as const

export interface ProjectItem {
  thumb: string
  name: string
  desc: string
  repo: string
  deploy: string
}

export const projects: ProjectItem[] = [
  {
    name: 'Spotify Clone',
    desc: 'Spotify clone with Vite - React - TS . Using Spotify API, Rapid API and Youtube API.',
    thumb: spotifyIcon,
    repo: 'https://github.com/tuan204-dev/spotify-react-typescript',
    deploy: 'https://spotify-clone-204.netlify.app/',
  },
  {
    name: 'Tech Blog',
    desc: 'Tech blog using React TypeScript, MD, MDX, MongoDB, Firebase and Prisma',
    thumb: techBlog,
    repo: 'https://github.com/tuan204-dev/tech_blog',
    deploy: 'https://tech-blog-204.vercel.app/',
  },
  {
    name: 'Fitness Gym',
    desc: 'Fitness Gym website provides a lot of exercises',
    thumb: fitnessIcon,
    repo: 'https://github.com/tuan204-dev/fitness',
    deploy: 'https://fitness-gym-204.netlify.app/',
  },
]

export const contacts = [
  {
    title: 'Email',
    content: 'contact.tuandang@gmail.com',
  },
  {
    title: 'Address',
    content: 'Ha Dong - Ha Noi',
    href: 'https://www.google.com/maps/place/H%C3%A0+%C4%90%C3%B4ng,+Hanoi/@20.9529115,105.7523281,13z/data=!3m1!4b1!4m6!3m5!1s0x3134532bef4bcdb7:0xbcc7a679fcba07f6!8m2!3d20.955835!4d105.7563658!16zL20vMGdmYzV6?entry=ttu',
  },
] as const

export enum INFO {
  EMAIL = 'contact.tuandang@gmail.com'
}
