import {
  MenuItemsType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  SwapVertIcon,
  HomeIcon,
  FarmIcon,
  PoolIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t, isDark, languageCode, chainId) =>
    [
      // {
      //   label: t('Dashboard'),
      //   icon: HomeIcon,
      //   fillIcon: HomeIcon,
      //   href: '/dashboard',
      //   showItemsOnMobile: false,
      //   items: [],
      // },
      {
        label: t('Swap'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/swap',
        showItemsOnMobile: false,
        items: [],
      },
      // {
      //   label: t('Liquidity'),
      //   icon: TrophyIcon,
      //   fillIcon: TrophyFillIcon,
      //   href: '/liquidity',
      //   showItemsOnMobile: false,
      //   items: [],
      // },
      // {
      //   label: t('DUBY-DEX'),
      //   icon: PoolIcon,
      //   fillIcon: PoolIcon,
      //   href: 'http://138.201.16.148:4000',
      //   showItemsOnMobile: false,
      //   items: [],
      // },
      // {
      //   label: t('Farming'),
      //   icon: FarmIcon,
      //   fillIcon: FarmIcon,
      //   href: '/farming',
      //   showItemsOnMobile: false,
      //   items: [],
      // },
      // {
      //   label: t('Staking'),
      //   icon: EarnIcon,
      //   fillIcon: EarnFillIcon,
      //   href: '/staking',
      //   showItemsOnMobile: false,
      //   items: [],
      // },
      // {
      //   label: t('Pool List'),
      //   icon: PoolIcon,
      //   fillIcon: PoolIcon,
      //   href: '/poollist',
      //   showItemsOnMobile: false,
      //   items: [],
      // },
      // {
      //   label: t('Exchange'),
      //   icon: SwapVertIcon,
      //   fillIcon: SwapVertIcon,
      //   href: '/exchange',
      //   showItemsOnMobile: false,
      //   items: [],
      // },
      // {
      //   label: t('Trade'),
      //   icon: SwapIcon,
      //   fillIcon: SwapFillIcon,
      //   href: '/swap',
      //   showItemsOnMobile: false,
      //   items: [
      //     {
      //       label: t('Swap'),
      //       href: '/swap',
      //     },
      //     {
      //       label: t('Limit'),
      //       href: '/limit-orders',
      //       supportChainIds: SUPPORT_ONLY_BSC,
      //       image: '/images/decorations/3d-coin.png',
      //     },
      //     {
      //       label: t('Liquidity'),
      //       href: '/liquidity',
      //     },
      //     {
      //       label: t('Perpetual'),
      //       href: `https://perp. /${perpLangMap(languageCode)}/futures/BTCUSDT?theme=${perpTheme(
      //         isDark,
      //       )}`,
      //       type: DropdownMenuItemType.EXTERNAL_LINK,
      //     },
      //     {
      //       label: t('Bridge'),
      //       href: 'https://bridge. /',
      //       type: DropdownMenuItemType.EXTERNAL_LINK,
      //     },
      //   ].map((item) => addMenuItemSupported(item, chainId)),
      // },
      // {
      //   label: t('Earn'),
      //   href: '/farms',
      //   icon: EarnIcon,
      //   fillIcon: EarnFillIcon,
      //   image: '/images/decorations/pe2.png',
      //   supportChainIds: SUPPORT_ONLY_BSC,
      //   items: [
      //     {
      //       label: t('Farms'),
      //       href: '/farms',
      //     },
      //     {
      //       label: t('Pools'),
      //       href: '/pools',
      //       supportChainIds: SUPPORT_ONLY_BSC,
      //     },
      //   ].map((item) => addMenuItemSupported(item, chainId)),
      // },
      // {
      //   label: t('Win'),
      //   href: '/prediction',
      //   icon: TrophyIcon,
      //   fillIcon: TrophyFillIcon,
      //   supportChainIds: SUPPORT_ONLY_BSC,
      //   items: [
      //     {
      //       label: t('Trading Competition'),
      //       href: '/competition',
      //       image: '/images/decorations/tc.png',
      //       hideSubNav: true,
      //     },
      //     {
      //       label: t('Prediction (BETA)'),
      //       href: '/prediction',
      //       image: '/images/decorations/prediction.png',
      //     },
      //     {
      //       label: t('Lottery'),
      //       href: '/lottery',
      //       image: '/images/decorations/lottery.png',
      //     },
      //     {
      //       label: t('Pottery (BETA)'),
      //       href: '/pottery',
      //       image: '/images/decorations/lottery.png',
      //     },
      //   ],
      // },
      // {
      //   label: t('NFT'),
      //   href: `${nftsBaseUrl}`,
      //   icon: NftIcon,
      //   fillIcon: NftFillIcon,
      //   supportChainIds: SUPPORT_ONLY_BSC,
      //   image: '/images/decorations/nft.png',
      //   items: [
      //     {
      //       label: t('Overview'),
      //       href: `${nftsBaseUrl}`,
      //     },
      //     {
      //       label: t('Collections'),
      //       href: `${nftsBaseUrl}/collections`,
      //     },
      //     {
      //       label: t('Activity'),
      //       href: `${nftsBaseUrl}/activity`,
      //     },
      //   ],
      // },
      // {
      //   label: '',
      //   // href: '/',
      //   icon: MoreIcon,
      //   hideSubNav: true,
      //   disabled: true,
      //   items: [
      //     // {
      //     //   label: t('Info'),
      //     //   href: '/info',
      //     //   supportChainIds: SUPPORT_ONLY_BSC,
      //     // },
      //     // {
      //     //   label: t('IFO'),
      //     //   href: '/ifo',
      //     //   supportChainIds: SUPPORT_ONLY_BSC,
      //     //   image: '/images/ifos/ifo-bunny.png',
      //     // },
      //     // {
      //     //   label: t('Voting'),
      //     //   href: '/voting',
      //     //   supportChainIds: SUPPORT_ONLY_BSC,
      //     //   image: '/images/voting/voting-bunny.png',
      //     // },
      //     // {
      //     //   type: DropdownMenuItemType.DIVIDER,
      //     // },
      //     // {
      //     //   label: t('Leaderboard'),
      //     //   href: '/teams',
      //     //   supportChainIds: SUPPORT_ONLY_BSC,
      //     //   image: '/images/decorations/leaderboard.png',
      //     // },
      //     // {
      //     //   type: DropdownMenuItemType.DIVIDER,
      //     // },
      //     // {
      //     //   label: t('Blog'),
      //     //   href: 'https://medium.com/pancakeswap',
      //     //   type: DropdownMenuItemType.EXTERNAL_LINK,
      //     // },
      //     // {
      //     //   label: t('Docs'),
      //     //   href: 'https://docs. ',
      //     //   type: DropdownMenuItemType.EXTERNAL_LINK,
      //     // },
      //   ].map((item) => addMenuItemSupported(item, chainId)),
      // },
    ].map((item) => addMenuItemSupported(item, chainId))

export default config
