import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MOUSHY SWAP',
  description:
    'MOUSHY SWAP là nền tảng số hóa và chia sẽ cơ hội đầu tư vào ngành bất động sản tại các thành phố lớn và ở khắp các tỉnh thành tại Việt Nam.',
  image: '/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MOUSHY SWAP')}`,
      }
    case '/swap':
      return {
        title: `${t('Swap')} | ${t('MOUSHY SWAP')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MOUSHY SWAP')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MOUSHY SWAP')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MOUSHY SWAP')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MOUSHY SWAP')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MOUSHY SWAP')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MOUSHY SWAP')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MOUSHY SWAP')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MOUSHY SWAP')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MOUSHY SWAP')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MOUSHY SWAP')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MOUSHY SWAP')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MOUSHY SWAP')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MOUSHY SWAP')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MOUSHY SWAP')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MOUSHY SWAP')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MOUSHY SWAP')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MOUSHY SWAP Info & Analytics')}`,
        description: 'View statistics for MOUSHY SWAP exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MOUSHY SWAP Info & Analytics')}`,
        description: 'View statistics for MOUSHY SWAP exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('MOUSHY SWAP Info & Analytics')}`,
        description: 'View statistics for MOUSHY SWAP exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('MOUSHY SWAP')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('MOUSHY SWAP')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('MOUSHY SWAP')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('MOUSHY SWAP')}`,
      }
    default:
      return null
  }
}
