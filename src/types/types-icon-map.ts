
import angular from "../../public/assets/icons/technology/angular.svg"
import astro from "../../public/assets/icons/technology/astro.svg"
import cScharp from "../../public/assets/icons/technology/c_scharp.svg"
import css from "../../public/assets/icons/technology/css.svg"
import django from "../../public/assets/icons/technology/django.svg"
import docker from "../../public/assets/icons/technology/docker.svg"
import figma from "../../public/assets/icons/technology/figma.svg"
import firebase from "../../public/assets/icons/technology/firebase.svg"
import git from "../../public/assets/icons/technology/git.svg"
import gsap from "../../public/assets/icons/technology/gsap.png"
import html from "../../public/assets/icons/technology/html.svg"
import javascript from "../../public/assets/icons/technology/javascript.svg"
import python from "../../public/assets/icons/technology/python.svg"
import sass from "../../public/assets/icons/technology/sass.svg"
import typescript from "../../public/assets/icons/technology/typescript.svg"
import unity from "../../public/assets/icons/technology/unity.svg"

export interface technology {
    src: string,
    alt: string,
}

export const iconMap: Record<string, technology> = {
    angular:    {src:angular.src,      alt:"Angular Logo" },
    astro:      {src:astro.src,        alt:"Astro Logo" },
    cscharp:    { src: cScharp.src,    alt: "C# Logo" },
    css:        { src: css.src,        alt: "CSS Logo" },
    django:     { src: django.src,     alt: "Django Logo" },
    docker:     { src: docker.src,     alt: "Docker Logo" },
    figma:      { src: figma.src,      alt: "Figma Logo" },
    firebase:   { src: firebase.src,   alt: "Firebase Logo" },
    git:        { src: git.src,        alt: "Git Logo" },
    gsap:       { src: gsap.src,       alt: "GSAP Logo" },
    html:       { src: html.src,       alt: "HTML Logo" },
    javascript: { src: javascript.src, alt: "JavaScript Logo" },
    python:     { src: python.src,     alt: "Python Logo" },
    sass:       { src: sass.src,       alt: "Sass Logo" },
    typescript: { src: typescript.src, alt: "TypeScript Logo" },
    unity:      { src: unity.src,      alt: "Unity Logo" },
};
