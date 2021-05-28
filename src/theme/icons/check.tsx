import { createIcon } from './createIcon'
export const Check = createIcon({
  displayName: 'Check',
  viewBox: '0 0 24 24',
  path: (
    <path
      d="M22 5.5L8.7 20 2 13.6 3.6 12l5 4.8L20.3 4 22 5.5z"
      fill="currentColor"
    />
  ),
})

export const SuccessCheck = createIcon({
  displayName: 'SuccessCheck',
  viewBox: '0 0 60 60',
  path: (
    <>
      <g filter="url(#filter0_dd)">
        <path fill="#558C46" d="M10 28a20 20 0 1140 0 20 20 0 01-40 0z" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M40 21.5L26.7 36 20 29.6l1.6-1.6 5 4.8L38.3 20l1.7 1.5z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd"
          width="60"
          height="60"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius="2"
            result="effect1_dropShadow"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3.5" />
          <feColorMatrix values="0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.168627 0 0 0 0.06 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius="2"
            result="effect2_dropShadow"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.138889 0 0 0 0 0.490196 0 0 0 0.02 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
        </filter>
      </defs>
    </>
  ),
})
