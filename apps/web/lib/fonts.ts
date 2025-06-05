import localFont from 'next/font/local'

export const NeueHaas = localFont({
    src: [
      { path: '../app/fonts/NeueHaasDisplayThin.ttf', weight: '100', style: 'normal' },
      { path: '../app/fonts/NeueHaasDisplayLight.ttf', weight: '300', style: 'normal' },
      { path: '../app/fonts/NeueHaasDisplayRoman.ttf', weight: '400', style: 'normal' },
      { path: '../app/fonts/NeueHaasDisplayMedium.ttf', weight: '500', style: 'normal' },
      { path: '../app/fonts/NeueHaasDisplayBold.ttf', weight: '700', style: 'normal' },
    ],
    variable: '--font-neue-haas',
    display: 'swap',
  })
  