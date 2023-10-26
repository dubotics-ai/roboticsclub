import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image';

import logo from './src/logo.png';

const RenderLastEditText: React.FC = (props: {timestamp: Date}) => {
  return <>
    <p>Última edição em {props.timestamp.getDate()} de {props.timestamp.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}.</p>
  </>;
}

const FeedBackButton: React.FC = () => {
  return <>
    <p>Dúvida? Dê-nos seu feedback →</p>
  </>;
}

const config: DocsThemeConfig = {
  faviconGlyph: `🐼`,
  nextThemes: {
    defaultTheme: 'dark'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Quero Assistir'
    }
  },  
  logo: <Image src={logo} alt="Quero Assistir" width={65} height={65} />,
  project: {
    link: 'https://queroassistir.com',
    icon: <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="-1 0 20 20"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11.623 16.015a7.011 7.011 0 0 1-7.446-5.431c-.731-3.227 1.499-6.555 4.8-6.574a5.01 5.01 0 0 1 4.965 4.171c.303 1.801-.794 3.642-2.607 3.832a3.005 3.005 0 0 1-3.328-2.99 1.002 1.002 0 1 1 2.001 0 1.002 1.002 0 1 0 2.002 0 3.005 3.005 0 0 0-3.328-2.991c-1.813.191-2.91 2.031-2.607 3.832a5.009 5.009 0 0 0 4.964 4.171c3.302-.019 5.532-3.347 4.8-6.573-.897-3.963-5.143-6.65-9.599-4.925a6.649 6.649 0 0 0-4.177 5.419c-.59 5.16 3.167 9.576 8.076 10.049.499.048.87.486.87.99 0 .597-.52 1.06-1.115 1C4.39 19.44.08 14.823.001 9.18-.06 4.914 2.915 1.061 7.087.199a9.022 9.022 0 0 1 10.848 7.616c.535 4.006-2.293 7.857-6.312 8.2"
    />
  </svg>
  },
  chat: {
    link: 'https://discord.gg/y2QX3W7mVR',
  },
  footer: {
    text: 'Quero Assistir',
  },
  toc: {
    title: "Nesta página",
    backToTop: true,
  },
  editLink: {
    text: "",
  },
  feedback: {
    content: FeedBackButton,
    useLink: () => 'https://www.tabnews.com.br/queroassistir'
  },
  themeSwitch: {
    component: ({ lite, className }) => {
      return (<></>)
    },
    useOptions() {
      return {
        light: 'Claro',
        dark: 'Escuro',
        system: 'Sistema'
      }
    }
  },
  search: {
    placeholder: "Pesquisar na documentação...",
  },
  gitTimestamp: RenderLastEditText,
  sidebar: {
    autoCollapse: true,
    toggleButton: true
  }
}

export default config
