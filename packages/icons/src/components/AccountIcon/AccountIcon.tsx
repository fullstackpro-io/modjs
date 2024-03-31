import React from 'react'
import {styled} from 'styled-components'

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  fill?: string
  height?: string
  width?: string
}

const ModAccountIcon = styled.svg`
  fill: ${props => props.fill ? props.fill : ({theme}) => theme.color.primary};
  height: ${props => props.height ? props.height : ({theme}) => theme.icons.height.sm};
  width: ${props => props.width ? props.width : ({theme}) => theme.icons.width.sm};
`;

const AccountIcon = ({ fill, height, width, ...props  }: IconProps) => {
  return (
    <ModAccountIcon
      {...props}
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 900.000000 900.000000'
      preserveAspectRatio='xMidYMid meet'
      height = {height}
      width = {width}
    >
      <title>Account Outlined Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackpro.io</metadata>
      <g transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)' fill={fill} stroke='none'>
        <path
          d='M4180 8404 c-169 -32 -335 -78 -425 -118 -96 -43 -236 -113 -273
-138 -24 -15 -45 -28 -46 -28 -2 0 -28 -16 -57 -36 -191 -128 -412 -352 -535
-544 -40 -63 -52 -83 -61 -100 -4 -8 -19 -35 -33 -60 -65 -112 -158 -371 -189
-525 -49 -241 -49 -550 1 -795 28 -140 93 -328 165 -475 37 -76 44 -88 86
-153 15 -24 27 -45 27 -48 0 -3 35 -51 77 -107 78 -102 234 -267 328 -345 45
-37 201 -143 266 -181 42 -25 217 -111 225 -111 4 0 41 -13 83 -29 149 -56
207 -70 406 -101 257 -39 567 -18 805 56 194 60 255 86 440 185 63 34 213 140
291 206 172 145 294 291 446 538 30 49 143 302 143 321 0 7 6 28 14 46 47 112
96 423 96 603 -1 185 -49 484 -96 593 -8 18 -14 39 -14 47 0 8 -6 29 -14 47
-90 204 -125 273 -201 388 -190 289 -459 527 -765 676 -220 108 -327 143 -578
189 -110 20 -504 20 -612 -1z m600 -569 c306 -79 491 -180 686 -370 128 -125
211 -238 279 -379 135 -277 179 -543 136 -820 -12 -76 -24 -143 -28 -149 -3
-6 -10 -27 -14 -46 -35 -174 -208 -469 -355 -606 -232 -217 -435 -325 -723
-385 -124 -26 -408 -28 -521 -4 -201 42 -370 109 -496 194 -25 16 -47 30 -50
30 -3 0 -27 17 -52 38 -204 163 -354 357 -441 567 -18 44 -39 95 -47 113 -8
18 -14 42 -14 53 0 11 -5 29 -10 39 -15 28 -50 275 -50 355 0 118 32 295 82
450 31 99 122 276 188 366 151 206 407 405 625 485 123 45 236 75 315 85 111
13 418 3 490 -16z'
        />
        <path
          d='M2685 3904 c-197 -34 -374 -79 -487 -123 -87 -34 -119 -47 -168 -69
-287 -127 -514 -284 -746 -516 -208 -208 -363 -423 -476 -660 -21 -45 -44 -90
-50 -100 -6 -11 -14 -31 -18 -45 -5 -14 -18 -51 -30 -81 -62 -162 -96 -295
-135 -526 -23 -141 -20 -456 5 -554 51 -193 156 -358 302 -475 115 -91 203
-135 353 -176 68 -18 159 -19 3255 -19 3134 0 3186 1 3260 20 325 85 565 325
650 650 16 62 20 109 20 264 0 289 -48 549 -150 816 -12 30 -25 67 -30 81 -4
14 -12 34 -18 45 -6 10 -29 55 -50 100 -57 119 -153 277 -245 400 -104 141
-350 387 -491 491 -299 222 -648 381 -981 447 -247 48 -147 46 -1976 45 -1409
-1 -1728 -4 -1794 -15z m3605 -567 c179 -44 226 -58 354 -104 206 -74 474
-251 657 -433 182 -181 359 -451 434 -661 94 -264 118 -388 119 -614 l1 -180
-29 -53 c-34 -60 -85 -111 -148 -144 l-43 -23 -3145 0 -3145 0 -43 23 c-63 33
-114 84 -148 144 l-29 53 1 180 c1 227 26 355 121 619 74 206 251 475 433 656
206 207 518 401 735 459 17 5 41 13 55 19 61 25 275 70 355 76 28 1 802 2
1720 2 1583 -1 1674 -2 1745 -19z'
        />
      </g>
    </ModAccountIcon>
  )
}

export  default AccountIcon
