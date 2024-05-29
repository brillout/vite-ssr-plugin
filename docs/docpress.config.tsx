import type { Config } from '@brillout/docpress'
import { headings } from './headings'
import { headingsDetached } from './headingsDetached'
import { projectInfo } from './utils'
import vikeIcon from './images/icons/vike-square-gradient.svg'
import React from 'react'
import { NavHeader, NavHeaderMobile, navHeaderWrapperStyle } from './NavHeader'

export default {
  projectInfo,
  faviconUrl: vikeIcon,
  navHeader: <NavHeader />,
  navHeaderWrapperStyle,
  navHeaderMobile: <NavHeaderMobile />,
  headings,
  headingsDetached,
  tagline: '🔨 Flexible, lean, community-driven, dependable, fast Vite-based frontend framework.',
  twitterHandle: '@vike_js',
  websiteUrl: 'https://vike.dev',
  sponsorGithubAccount: 'vikejs',
  algolia: {
    appId: 'YMV9Y4B58S',
    apiKey: '9ac178c1a29ba00e8afb98365015f677',
    indexName: 'vike'
  },
  bannerUrl: 'https://vike.dev/banner.png',
  i18n: true,
  pressKit: true
} satisfies Config
