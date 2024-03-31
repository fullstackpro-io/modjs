import React from 'react'
import {styled} from 'styled-components'

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  fill?: string
  height?: string
  width?: string
}

const ModInfrastructureIcon = styled.svg`
  fill: ${props => props.fill ? props.fill : ({theme}) => theme.color.primary};
  height: ${props => props.height ? props.height : ({theme}) => theme.icons.height.lg};
  width: ${props => props.width ? props.width : ({theme}) => theme.icons.width.lg};
`;

const InfrastructureIcon = ({ fill, height, width, ...props}: IconProps) => {
  return (
    <>
      <ModInfrastructureIcon 
        {...props} 
        xmlns='http://www.w3.org/2000/svg' 
        viewBox='0 0 1200 1200'
        height = {height}
        width = {width}
        >
        <title>Infrastructure Outlined Icon</title>
        <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackpro.io</metadata>
        <g transform='translate(100, 1070) scale(0.100000,-0.100000)' fill={fill} stroke='none'>
          <path
            d='M3720 8950 c-106 -14 -164 -25 -187 -38 -12 -7 -31 -12 -42 -12 -11
            0 -37 -7 -58 -16 -21 -9 -51 -22 -68 -29 -16 -6 -59 -26 -95 -43 -36 -18 -68
            -32 -72 -32 -4 0 -27 -13 -51 -30 -25 -16 -48 -30 -52 -30 -4 0 -24 -13 -45
            -30 -21 -16 -41 -30 -45 -30 -4 0 -22 -12 -40 -27 -17 -16 -52 -44 -76 -63
            -55 -44 -183 -172 -229 -230 -19 -23 -47 -58 -62 -75 -16 -18 -28 -36 -28 -39
            0 -4 -5 -12 -10 -19 -65 -74 -203 -356 -230 -467 -24 -99 -31 -110 -73 -110
            -38 0 -136 -17 -202 -35 -27 -8 -59 -16 -70 -19 -128 -30 -359 -159 -481 -269
            -100 -90 -169 -169 -233 -262 -46 -68 -141 -253 -141 -274 0 -6 -6 -25 -14
            -43 -99 -233 -99 -643 0 -876 8 -18 14 -37 14 -43 0 -32 128 -267 167 -307 7
            -7 13 -16 13 -20 0 -7 38 -51 102 -119 77 -82 196 -183 216 -183 6 0 12 -4 14
            -8 12 -30 257 -147 358 -172 19 -5 53 -13 75 -19 137 -35 160 -36 685 -36 289
            0 528 -4 531 -8 3 -5 4 -39 2 -75 -4 -54 -1 -76 18 -117 21 -47 128 -165 149
            -165 6 0 43 -20 83 -43 39 -24 79 -47 87 -50 8 -4 31 -17 50 -28 19 -12 55
            -32 80 -46 25 -13 59 -33 75 -43 17 -10 53 -31 80 -46 87 -48 99 -55 130 -74
            17 -10 50 -30 75 -43 25 -14 61 -34 80 -45 19 -12 59 -33 88 -47 28 -15 52
            -32 52 -38 0 -7 1 -119 3 -250 1 -153 -2 -237 -8 -237 -5 0 -561 0 -1235 0
            -1191 0 -1227 -1 -1288 -20 -116 -36 -227 -128 -271 -224 -50 -109 -52 -128
            -51 -407 1 -145 1 -272 0 -281 0 -10 -21 -27 -52 -43 -29 -14 -69 -35 -88 -47
            -19 -11 -55 -31 -80 -45 -25 -13 -58 -33 -75 -43 -16 -10 -50 -30 -75 -43 -25
            -14 -61 -34 -80 -46 -19 -11 -44 -25 -55 -31 -11 -6 -42 -24 -70 -41 -27 -16
            -63 -37 -80 -45 -16 -8 -43 -23 -60 -34 -32 -20 -110 -63 -160 -89 -48 -24
            -130 -113 -154 -165 -21 -48 -21 -58 -21 -646 0 -588 0 -598 21 -646 23 -50
            111 -147 151 -164 13 -6 50 -26 83 -45 33 -19 69 -40 80 -46 11 -5 29 -15 40
            -22 11 -7 52 -30 90 -52 39 -22 79 -45 90 -52 11 -7 27 -16 35 -20 19 -9 160
            -90 180 -103 8 -6 24 -14 35 -20 11 -5 47 -25 80 -45 126 -72 199 -105 237
            -105 21 0 38 -4 38 -10 0 -13 67 -13 75 0 3 6 24 10 45 10 43 0 190 71 325
            158 11 6 29 16 41 21 11 5 50 27 85 48 35 22 71 42 79 46 8 4 38 21 65 37 28
            17 64 37 80 45 17 9 44 24 60 35 17 11 39 24 50 30 11 5 47 26 80 45 33 19 70
            39 83 45 40 17 128 114 151 164 21 48 21 58 21 646 0 552 -1 601 -18 638 -22
            50 -81 127 -107 141 -11 6 -33 20 -50 31 -16 11 -39 24 -50 30 -11 5 -47 26
            -80 45 -33 19 -69 39 -80 45 -11 5 -47 26 -80 45 -33 19 -69 39 -80 44 -11 5
            -36 20 -55 33 -19 13 -55 34 -80 47 -25 12 -58 31 -75 42 -16 10 -39 23 -50
            29 -11 6 -47 26 -80 45 -33 19 -84 46 -112 61 -32 15 -53 32 -53 42 -1 9 -1
            132 0 272 0 283 3 297 66 338 l33 22 1227 0 1227 1 -2 -313 c0 -172 -1 -318
            -1 -325 0 -6 -24 -23 -52 -38 -29 -14 -80 -42 -113 -60 -33 -19 -69 -39 -80
            -45 -11 -6 -33 -19 -50 -30 -30 -19 -41 -25 -130 -74 -27 -15 -63 -36 -80 -46
            -16 -10 -52 -31 -80 -46 -88 -48 -99 -55 -130 -74 -36 -22 -61 -37 -135 -75
            -71 -38 -152 -118 -179 -179 -21 -48 -21 -58 -21 -646 0 -588 0 -598 21 -646
            23 -50 111 -147 151 -164 13 -5 31 -14 41 -20 9 -5 25 -15 35 -20 9 -6 26 -15
            37 -20 11 -6 34 -19 50 -30 17 -11 37 -23 45 -27 8 -4 47 -25 85 -48 39 -22
            77 -44 85 -48 8 -4 24 -13 35 -20 11 -7 52 -30 90 -52 39 -22 79 -45 90 -52
            11 -7 29 -17 40 -22 11 -6 47 -26 80 -46 125 -72 199 -105 236 -105 21 0 41
            -4 44 -10 8 -12 75 -13 75 -1 0 5 21 11 48 14 43 4 87 20 137 50 11 7 52 30
            90 52 39 22 79 45 90 52 11 7 31 17 44 23 13 6 35 19 50 29 14 10 49 31 76 45
            28 15 73 41 100 57 28 16 64 36 80 44 17 9 44 24 60 35 17 11 39 24 50 30 11
            5 47 26 80 45 33 19 70 39 83 45 40 17 128 114 151 164 21 48 21 58 21 646 0
            588 0 598 -21 646 -23 50 -111 147 -151 164 -13 6 -45 24 -73 41 -27 16 -63
            37 -80 45 -16 8 -37 19 -45 24 -23 15 -163 95 -180 103 -8 4 -37 21 -65 38
            -27 16 -63 37 -80 45 -16 8 -43 23 -60 34 -16 11 -39 24 -50 30 -11 6 -47 26
            -80 45 -33 19 -70 39 -82 45 -11 5 -24 14 -28 19 -3 6 -15 11 -25 11 -10 0
            -21 4 -24 9 -4 5 -7 154 -7 331 l-2 321 1227 -1 1227 0 33 -22 c63 -41 66 -55
            66 -338 1 -140 1 -263 0 -272 0 -10 -21 -27 -52 -43 -29 -14 -69 -35 -88 -47
            -19 -11 -55 -31 -80 -45 -25 -13 -58 -33 -75 -44 -16 -10 -37 -22 -45 -26 -18
            -8 -159 -89 -180 -103 -8 -6 -22 -13 -30 -17 -8 -4 -46 -25 -85 -48 -38 -22
            -77 -44 -85 -48 -8 -4 -31 -17 -50 -28 -19 -12 -53 -32 -75 -44 -85 -47 -101
            -59 -135 -103 -74 -96 -70 -56 -70 -722 0 -588 0 -598 21 -646 23 -52 106
            -141 154 -166 17 -9 53 -28 80 -42 28 -15 64 -36 80 -46 17 -11 37 -23 45 -27
            8 -4 47 -25 85 -48 39 -22 77 -44 85 -48 8 -4 24 -13 35 -20 11 -7 52 -30 90
            -52 39 -22 78 -44 87 -50 9 -5 39 -22 65 -36 26 -15 64 -36 83 -47 95 -57 176
            -92 212 -92 21 0 38 -4 38 -10 0 -12 67 -13 74 -1 3 4 27 11 53 14 44 4 88 20
            138 50 11 7 52 30 90 52 39 22 79 45 90 52 11 7 29 16 41 22 19 9 138 78 174
            101 8 6 22 13 30 17 14 6 149 84 180 103 8 6 24 14 35 20 11 5 47 26 80 45 33
            19 70 39 83 45 40 17 128 114 151 164 21 48 21 58 21 646 0 590 0 598 -22 646
            -20 46 -127 164 -148 164 -5 0 -40 18 -76 41 -37 22 -77 45 -88 50 -12 5 -28
            13 -36 19 -22 14 -162 95 -180 103 -8 4 -37 21 -65 38 -27 16 -63 37 -80 45
            -16 8 -43 23 -60 34 -16 11 -39 24 -50 30 -11 6 -36 20 -55 31 -19 12 -56 33
            -83 46 -26 14 -50 29 -53 34 -3 5 -14 9 -24 9 -10 0 -22 5 -25 10 -4 6 -6 135
            -5 287 1 292 -1 309 -51 419 -44 96 -155 188 -271 224 -61 19 -97 20 -1288 20
            -674 0 -1229 0 -1235 0 -10 0 -10 471 0 498 2 6 13 12 23 12 10 0 23 5 28 10
            11 11 77 50 129 76 17 8 44 23 60 34 17 11 39 24 50 30 11 6 47 26 80 45 33
            19 69 40 80 45 11 6 34 19 50 30 17 11 44 26 60 34 17 8 53 29 80 45 28 17 59
            35 71 40 11 5 51 28 88 50 36 23 71 41 76 41 6 0 38 28 73 63 76 76 102 139
            95 225 -3 32 -4 62 -2 67 3 7 181 9 516 7 531 -3 540 -3 703 39 22 6 56 14 75
            19 96 23 248 95 360 169 99 65 179 137 292 264 67 74 218 334 218 374 0 7 6
            27 14 45 99 233 99 643 0 876 -8 18 -14 38 -14 45 0 11 -87 190 -113 232 -61
            99 -162 213 -289 327 -104 93 -359 228 -463 245 -16 3 -35 10 -41 14 -6 5 -51
            14 -100 20 -112 14 -134 27 -134 77 0 66 -53 192 -132 312 -49 76 -140 168
            -218 221 -88 61 -252 139 -290 139 -10 0 -45 7 -77 15 -75 20 -245 20 -309 0
            -27 -8 -60 -15 -72 -15 -13 0 -36 -6 -50 -13 -15 -8 -42 -21 -60 -30 -46 -23
            -59 -21 -76 11 -24 45 -211 231 -291 289 -59 43 -141 99 -155 106 -8 4 -28 16
            -45 26 -16 11 -50 29 -75 41 -25 12 -52 26 -60 31 -8 5 -22 12 -30 15 -18 7
            -75 28 -127 48 -93 35 -233 65 -313 68 -98 4 -220 -2 -220 -10 0 -18 279 -132
            323 -132 41 0 235 -73 367 -137 179 -88 256 -143 448 -322 158 -147 202 -166
            322 -140 96 20 172 31 178 24 13 -12 -31 -35 -68 -35 -39 0 -168 -62 -235
            -113 -78 -60 -160 -141 -208 -204 -48 -64 -74 -73 -64 -24 3 14 32 71 64 126
            76 132 77 164 9 264 -68 100 -183 204 -331 303 -119 78 -268 158 -294 158 -6
            0 -30 9 -54 19 -69 31 -79 34 -152 48 -126 25 -208 32 -370 32 -173 1 -343
            -13 -359 -29 -6 -6 -27 -10 -48 -10 -21 0 -46 -4 -56 -9 -17 -9 -27 -13 -112
            -46 -133 -53 -232 -109 -394 -221 -62 -43 -167 -141 -241 -224 -168 -187 -325
            -478 -325 -600 0 -39 6 -53 48 -105 46 -57 117 -105 154 -105 9 0 29 -7 44
            -15 16 -8 37 -15 47 -15 27 0 119 -49 112 -60 -8 -13 -38 -13 -50 -1 -19 19
            -200 71 -279 81 -100 12 -374 15 -441 5 -27 -4 -55 -14 -63 -21 -7 -8 -20 -14
            -28 -14 -22 0 -196 -81 -265 -123 -20 -12 -74 -52 -120 -89 -219 -174 -360
            -401 -433 -696 -23 -90 -20 -362 4 -457 86 -337 272 -596 559 -778 19 -12 46
            -30 60 -39 14 -9 32 -17 38 -17 7 -1 41 -14 75 -30 35 -15 79 -32 98 -36 39
            -9 70 -26 70 -39 0 -20 -123 8 -192 45 -10 5 -28 9 -41 9 -13 0 -27 4 -33 9
            -5 6 -44 28 -86 50 -108 57 -171 103 -259 192 -173 173 -276 357 -318 569 -4
            19 -12 44 -18 55 -13 25 -16 451 -3 491 5 16 14 49 21 74 57 214 153 381 314
            544 123 125 326 253 431 271 21 4 53 13 69 20 43 18 142 43 198 50 90 12 178
            104 237 248 114 281 205 428 376 605 177 184 320 280 569 382 97 40 125 49
            160 55 22 3 49 10 60 14 11 4 54 19 95 32 86 27 250 100 250 111 0 5 -26 8
            -57 8 -32 0 -74 2 -93 4 -19 2 -64 0 -100 -4z m520 -271 c25 -6 68 -15 95 -19
            83 -14 186 -44 260 -76 58 -25 180 -86 210 -105 17 -10 37 -22 45 -26 67 -30
            360 -297 360 -328 0 -8 -14 -25 -31 -37 -36 -27 -86 -96 -149 -206 -36 -63
            -39 -116 -9 -166 62 -105 209 -99 264 10 77 151 159 236 290 302 93 46 161 62
            265 62 137 0 263 -44 370 -128 47 -37 122 -121 145 -163 44 -80 66 -134 63
            -157 -3 -26 -6 -27 -79 -33 -41 -4 -85 -11 -96 -18 -12 -6 -30 -11 -40 -11
            -10 0 -31 -7 -47 -15 -15 -8 -35 -15 -43 -15 -8 0 -27 -6 -41 -14 -15 -7 -45
            -22 -67 -32 -48 -23 -188 -103 -195 -113 -3 -3 -22 -17 -43 -31 -109 -72 -102
            -212 14 -271 63 -32 93 -24 199 55 86 64 163 104 280 145 172 61 504 63 650 3
            14 -5 45 -18 70 -27 52 -21 117 -51 145 -68 45 -28 173 -127 209 -163 52 -52
            138 -168 170 -228 14 -27 30 -54 35 -60 4 -6 11 -20 14 -31 3 -11 15 -45 27
            -75 42 -106 54 -186 55 -350 0 -152 -11 -229 -41 -312 -47 -127 -48 -130 -85
            -198 -26 -50 -123 -181 -162 -220 -71 -71 -183 -157 -247 -189 -25 -12 -52
            -26 -60 -30 -8 -5 -35 -17 -60 -26 -25 -9 -60 -23 -78 -31 -18 -8 -43 -14 -56
            -14 -12 0 -45 -7 -71 -15 -39 -11 -146 -14 -568 -16 l-520 -1 2 373 c2 365 2
            375 -20 424 -23 51 -111 148 -151 165 -13 6 -50 26 -83 45 -33 19 -69 40 -80
            45 -11 6 -33 19 -50 30 -16 11 -43 26 -60 35 -16 8 -52 28 -80 44 -27 16 -72
            42 -100 57 -27 14 -62 35 -76 45 -15 10 -37 23 -50 29 -13 5 -31 14 -39 20
            -22 14 -162 95 -180 103 -8 4 -28 16 -45 27 -16 11 -37 22 -45 26 -8 3 -30 12
            -48 20 -60 26 -143 18 -224 -21 -40 -20 -86 -44 -103 -55 -16 -11 -43 -26 -60
            -34 -16 -8 -52 -29 -80 -45 -27 -17 -61 -35 -74 -41 -13 -6 -35 -19 -50 -29
            -14 -10 -48 -31 -76 -45 -27 -15 -57 -31 -65 -36 -29 -19 -165 -96 -180 -103
            -8 -4 -28 -16 -45 -27 -16 -10 -52 -31 -80 -46 -27 -14 -63 -33 -80 -42 -49
            -25 -131 -115 -154 -167 -22 -49 -22 -59 -20 -424 l2 -373 -519 1 c-542 2
            -536 2 -694 48 -67 20 -183 73 -230 105 -19 13 -42 27 -50 30 -17 7 -165 135
            -195 170 -34 38 -85 105 -85 111 0 4 -12 23 -26 44 -49 73 -109 219 -124 304
            -5 26 -13 64 -19 85 -27 96 -10 313 36 459 27 87 97 238 120 257 7 6 13 15 13
            21 0 16 67 95 145 172 70 69 139 120 220 164 22 12 47 26 55 30 8 5 33 16 55
            24 22 8 58 21 80 30 84 31 162 42 315 42 177 0 294 -21 392 -71 14 -8 31 -14
            37 -14 5 0 33 -13 61 -30 81 -48 139 -40 211 28 21 20 24 32 24 92 0 85 -15
            104 -130 159 -130 64 -190 83 -317 104 -74 12 -81 20 -54 74 8 15 21 44 30 63
            28 66 88 185 107 215 10 17 22 37 26 45 17 37 130 176 204 249 73 74 212 187
            249 204 8 4 29 16 45 27 29 18 149 78 210 104 83 35 175 61 290 82 50 9 92 18
            94 20 10 9 329 3 371 -7z m1650 -439 c0 -5 -22 -10 -50 -10 -27 0 -50 5 -50
            10 0 6 23 10 50 10 28 0 50 -4 50 -10z m192 -26 c15 -8 35 -14 44 -14 22 0
            137 -63 189 -104 117 -92 196 -204 256 -361 30 -81 41 -98 109 -167 62 -62 83
            -77 115 -83 62 -10 127 -26 160 -40 17 -7 48 -16 69 -20 34 -6 82 -28 228
            -106 46 -24 109 -76 211 -174 70 -68 109 -115 154 -190 79 -132 117 -216 133
            -295 7 -36 19 -80 26 -99 8 -18 14 -43 14 -56 0 -12 3 -25 7 -29 9 -9 4 -293
            -7 -376 -23 -179 -77 -328 -169 -469 -96 -150 -239 -292 -369 -368 -52 -31
            -180 -93 -192 -93 -6 0 -20 -5 -33 -12 -47 -24 -57 -28 -74 -28 -10 0 -31 -7
            -47 -15 -28 -15 -66 -12 -66 4 0 5 28 18 63 31 118 42 225 93 293 138 23 15
            60 39 82 54 72 48 217 201 278 293 64 98 139 243 149 290 4 17 12 46 20 65 19
            53 36 154 42 255 6 100 -17 297 -40 342 -8 16 -18 44 -22 63 -11 51 -87 204
            -146 293 -50 77 -136 170 -234 255 -28 24 -57 49 -65 56 -8 8 -33 23 -55 35
            -22 12 -47 25 -55 31 -84 52 -193 99 -232 100 -9 0 -21 8 -27 18 -9 16 -33 17
            -290 17 -213 0 -281 3 -281 12 0 7 15 15 34 19 39 7 138 102 156 150 19 50 -6
            133 -77 254 -54 90 -232 242 -318 271 -22 7 -47 19 -56 26 -8 7 -29 13 -45 14
            -43 1 -77 13 -82 28 -4 11 8 12 59 6 35 -4 76 -14 91 -21z m208 -768 c0 -8
            -28 -22 -67 -35 -66 -21 -213 -91 -243 -116 -28 -23 -100 -59 -106 -53 -30 31
            174 160 295 187 24 5 48 14 54 20 16 16 67 14 67 -3z m-1730 -858 c35 -11 261
            -130 290 -154 8 -6 56 -33 105 -59 50 -26 97 -53 105 -60 8 -7 58 -35 110 -63
            52 -27 122 -64 155 -81 151 -80 219 -147 236 -232 4 -24 5 -170 2 -324 -4
            -191 -2 -293 5 -320 13 -46 97 -146 146 -173 31 -17 86 -18 894 -22 26 0 41
            -4 37 -10 -4 -6 -164 -10 -446 -10 -416 0 -442 -1 -478 -20 -71 -36 -161 -154
            -161 -212 0 -29 -35 -90 -72 -124 -36 -34 -169 -117 -206 -129 -13 -3 -55 -28
            -95 -54 -40 -25 -88 -54 -107 -64 -19 -10 -62 -34 -95 -54 -69 -41 -105 -62
            -201 -117 -120 -67 -208 -148 -249 -230 -24 -48 -25 -58 -25 -225 0 -97 5
            -193 11 -214 6 -23 33 -62 69 -100 48 -52 68 -65 107 -75 34 -8 395 -12 1238
            -14 1164 -3 1191 -3 1237 -23 61 -26 120 -82 148 -141 25 -52 38 -192 40 -429
            0 -125 13 -191 49 -249 33 -53 115 -122 198 -167 43 -23 85 -48 93 -55 8 -6
            59 -35 112 -63 53 -28 121 -66 150 -84 29 -19 71 -43 93 -54 169 -82 282 -157
            320 -211 27 -40 30 -52 35 -145 3 -56 3 -318 0 -582 -5 -527 -4 -514 -68 -571
            -35 -31 -180 -119 -212 -129 -14 -4 -34 -15 -45 -24 -29 -25 -136 -87 -163
            -96 -13 -4 -49 -24 -80 -44 -57 -38 -244 -153 -327 -201 -24 -14 -61 -39 -82
            -56 -47 -38 -76 -54 -98 -54 -9 0 -42 19 -73 43 -31 24 -75 54 -97 67 -22 13
            -62 38 -90 55 -27 17 -95 58 -150 90 -55 32 -107 64 -115 71 -8 7 -55 33 -105
            59 -49 26 -97 53 -105 60 -8 7 -56 34 -107 59 -50 26 -114 67 -143 93 -89 80
            -84 42 -85 678 0 517 1 562 18 592 29 54 77 103 130 131 27 15 70 39 96 53 25
            14 91 49 146 78 55 29 107 58 115 65 8 7 47 30 85 52 39 21 82 45 97 54 14 8
            52 29 85 47 143 78 240 171 265 255 9 30 13 114 13 273 0 224 -1 231 -24 278
            -34 66 -118 148 -183 180 l-56 27 -1172 0 -1173 0 -40 -23 c-22 -12 -63 -48
            -91 -81 l-51 -58 -3 -289 c-3 -265 -1 -293 16 -332 32 -72 115 -152 216 -208
            50 -28 141 -80 201 -114 61 -35 130 -75 155 -90 25 -14 52 -29 60 -34 8 -5 38
            -20 65 -34 236 -117 307 -178 326 -282 15 -82 6 -1054 -10 -1118 -9 -31 -25
            -60 -49 -83 -37 -36 -180 -126 -220 -138 -13 -4 -57 -30 -99 -58 -41 -27 -89
            -55 -106 -60 -17 -6 -55 -28 -86 -48 -51 -34 -215 -135 -325 -200 -23 -14 -68
            -44 -101 -67 -32 -24 -67 -43 -79 -43 -11 0 -45 19 -75 43 -58 44 -192 129
            -296 188 -58 32 -108 63 -151 93 -12 8 -61 35 -109 61 -48 25 -101 55 -118 67
            -16 11 -61 37 -101 56 -104 51 -180 114 -199 165 -14 36 -16 125 -19 602 l-3
            560 27 47 c15 25 45 59 65 76 37 28 170 104 323 184 41 22 82 46 90 53 8 7 51
            32 95 55 44 24 98 54 120 67 22 13 70 42 106 63 124 73 189 146 214 244 21 80
            22 511 1 559 -21 47 -102 135 -147 157 -38 20 -62 20 -1198 20 -638 0 -1163 1
            -1168 2 -4 1 -34 -10 -66 -26 -103 -51 -185 -151 -206 -253 -9 -40 -12 -125
            -9 -258 3 -179 6 -205 25 -247 39 -85 119 -157 260 -233 26 -14 73 -41 103
            -60 30 -18 75 -43 99 -55 25 -11 72 -38 105 -59 34 -21 79 -47 101 -58 22 -11
            60 -31 85 -45 190 -104 206 -116 248 -188 l27 -45 0 -560 c-1 -503 -2 -564
            -17 -596 -19 -39 -108 -125 -148 -142 -14 -6 -37 -19 -52 -29 -15 -10 -42 -24
            -60 -30 -18 -6 -42 -18 -53 -27 -31 -26 -137 -88 -165 -96 -14 -4 -34 -15 -45
            -24 -11 -10 -87 -58 -168 -107 -213 -128 -240 -145 -301 -188 -65 -45 -80 -44
            -152 12 -27 21 -67 49 -89 62 -22 13 -62 38 -90 55 -27 17 -95 58 -150 90 -55
            32 -109 66 -120 75 -11 9 -36 23 -55 31 -19 7 -62 31 -95 51 -54 34 -93 56
            -215 118 -53 27 -138 108 -158 149 -15 33 -17 88 -16 591 0 420 3 564 13 592
            19 58 93 114 279 215 93 51 173 93 178 93 4 0 16 8 27 17 10 10 60 41 110 68
            51 28 107 59 125 70 19 11 67 39 108 63 81 48 157 125 185 187 27 61 39 178
            39 378 0 100 5 198 10 217 16 56 65 127 109 155 92 58 23 55 1306 55 853 1
            1193 4 1228 12 39 10 59 23 107 75 36 38 63 77 69 100 6 21 11 117 11 213 0
            153 -3 181 -20 219 -38 82 -125 163 -255 237 -120 68 -220 128 -236 140 -8 7
            -54 33 -104 59 -49 25 -99 55 -110 64 -11 10 -35 23 -53 29 -18 6 -45 20 -60
            30 -15 10 -38 23 -52 29 -50 21 -136 109 -148 152 -7 23 -17 60 -24 82 -15 50
            -96 142 -149 170 -36 18 -62 19 -478 19 -282 0 -442 4 -446 10 -4 7 138 10
            419 10 265 0 444 4 475 11 43 9 59 20 110 75 34 35 63 74 66 87 2 12 6 173 7
            357 4 373 2 363 75 431 21 20 74 56 118 79 44 24 91 52 104 62 13 10 30 18 38
            18 14 0 74 34 188 105 28 17 70 42 95 55 62 32 79 41 130 75 25 16 99 57 165
            91 128 66 144 69 235 42z m-2319 -1484 c11 -14 9 -15 -21 -12 -18 2 -35 9 -38
            16 -6 18 43 15 59 -4z m4557 4 c-3 -7 -20 -14 -38 -16 -30 -3 -32 -2 -21 12
            16 19 65 22 59 4z'
          />
          <path
            d='M4375 6519 c-33 -17 -80 -43 -105 -59 -25 -15 -56 -31 -70 -35 -14
            -4 -34 -15 -45 -25 -11 -10 -60 -39 -109 -65 -49 -25 -98 -53 -110 -61 -12 -8
            -55 -37 -97 -64 -78 -50 -150 -125 -169 -175 -17 -44 35 -121 134 -196 43 -33
            86 -64 95 -67 9 -3 43 -21 76 -40 33 -19 78 -45 100 -57 22 -12 87 -49 145
            -81 115 -65 232 -114 270 -114 14 0 45 7 70 16 70 24 260 122 290 149 8 7 35
            23 60 34 47 22 186 103 255 148 53 36 112 99 136 146 18 34 18 41 6 67 -29 56
            -93 123 -167 171 -41 26 -86 56 -100 66 -14 10 -43 25 -65 34 -39 15 -94 48
            -145 87 -14 10 -40 24 -58 30 -18 6 -45 20 -60 30 -15 11 -60 36 -99 56 -95
            47 -153 49 -238 5z m186 -115 c30 -20 68 -43 84 -51 17 -7 44 -22 60 -33 17
            -11 39 -24 50 -30 11 -5 47 -26 80 -45 33 -19 69 -39 80 -45 11 -6 34 -19 50
            -30 17 -10 53 -31 80 -45 28 -15 70 -37 95 -51 25 -13 50 -24 56 -24 6 0 21
            -11 34 -25 l23 -24 -49 -21 c-27 -11 -56 -24 -64 -29 -8 -6 -35 -20 -60 -33
            -25 -12 -76 -41 -115 -63 -38 -23 -77 -44 -85 -48 -8 -4 -31 -17 -50 -28 -19
            -12 -53 -32 -75 -43 -39 -22 -100 -58 -140 -84 -11 -6 -27 -15 -35 -19 -8 -3
            -26 -15 -39 -25 -13 -10 -36 -18 -51 -18 -15 0 -38 8 -51 18 -13 10 -31 22
            -39 25 -8 4 -24 13 -35 19 -40 26 -101 62 -140 84 -22 11 -56 31 -75 43 -19
            11 -42 24 -50 28 -8 4 -36 19 -61 34 -41 24 -102 58 -189 105 -14 8 -47 23
            -74 34 l-49 21 23 24 c13 14 27 25 32 25 12 0 79 33 153 75 33 19 69 39 80 45
            11 6 34 19 50 30 17 10 53 31 80 45 28 14 64 34 80 45 17 10 53 30 80 45 28
            14 75 43 105 65 30 21 65 38 76 39 12 1 46 -15 75 -35z'
          />
          <path
            d='M3574 5820 c-17 -11 -46 -41 -65 -67 l-34 -48 0 -426 0 -426 44 -57
            c67 -86 93 -105 351 -247 52 -28 102 -58 110 -65 8 -6 73 -42 145 -78 136 -69
            173 -78 225 -51 46 24 98 95 110 151 7 33 10 183 8 420 l-3 369 -27 45 c-49
            84 -109 139 -218 200 -30 17 -77 44 -105 60 -27 17 -76 44 -107 60 -31 16 -59
            34 -62 39 -11 17 -231 119 -272 126 -21 4 -46 8 -54 11 -8 2 -29 -5 -46 -16z
            m56 -75 c7 -9 63 -45 124 -81 61 -36 118 -70 126 -75 8 -5 24 -13 35 -18 11
            -5 36 -20 55 -32 19 -13 55 -34 80 -47 25 -13 59 -32 75 -42 17 -11 53 -31 80
            -45 61 -32 117 -64 128 -74 12 -12 11 -905 -2 -909 -6 -2 -30 13 -54 32 -24
            20 -47 36 -50 36 -4 0 -37 18 -73 41 -37 22 -77 45 -88 50 -12 5 -28 13 -36
            19 -38 25 -155 93 -174 101 -12 5 -34 18 -51 29 -16 11 -52 31 -80 45 -27 14
            -68 37 -90 50 l-40 23 -5 448 c-3 247 -4 452 -2 457 5 12 29 8 42 -8z'
          />
          <path
            d='M5273 5815 c-83 -31 -149 -63 -163 -80 -6 -7 -23 -16 -37 -20 -15 -3
            -38 -15 -51 -26 -14 -10 -30 -19 -36 -19 -6 0 -31 -14 -56 -30 -25 -17 -58
            -38 -75 -46 -188 -95 -306 -201 -334 -299 -15 -56 -15 -712 1 -790 9 -49 19
            -66 64 -111 74 -76 100 -75 265 9 68 35 144 78 169 94 25 17 75 45 113 63 37
            18 70 36 73 41 2 5 35 25 72 46 37 20 82 48 100 61 41 31 120 134 126 164 3
            13 8 188 11 390 7 399 4 424 -45 492 -33 44 -91 86 -117 85 -10 0 -46 -11 -80
            -24z m118 -510 c-1 -247 -5 -453 -8 -458 -3 -5 -20 -15 -37 -23 -17 -8 -38
            -18 -46 -24 -37 -22 -166 -97 -180 -103 -8 -4 -37 -21 -65 -38 -27 -16 -63
            -37 -80 -45 -16 -8 -43 -23 -60 -34 -16 -11 -39 -24 -50 -29 -11 -5 -37 -21
            -58 -35 -21 -14 -42 -26 -46 -26 -4 0 -29 -16 -55 -36 -26 -19 -52 -34 -58
            -32 -12 4 -13 897 -1 909 8 7 39 25 132 76 25 13 60 33 76 43 17 11 53 31 80
            45 28 14 64 35 80 45 17 11 39 24 50 30 11 5 27 14 35 19 51 32 172 101 176
            101 9 0 69 45 77 58 5 7 16 12 24 10 14 -3 16 -51 14 -453z'
          />
          <path
            d='M1580 2483 c-47 -17 -139 -59 -162 -75 -15 -10 -42 -24 -59 -30 -18
            -6 -66 -33 -107 -60 -41 -28 -88 -55 -105 -61 -17 -5 -77 -41 -134 -79 -120
            -81 -193 -161 -193 -213 0 -50 71 -144 138 -184 15 -9 42 -25 61 -36 42 -25
            198 -115 316 -182 164 -94 254 -133 305 -133 48 0 189 61 315 137 106 63 267
            153 275 153 5 0 22 11 38 25 17 14 42 31 56 39 35 18 124 121 132 152 3 13 3
            35 0 48 -9 35 -92 133 -129 152 -18 9 -45 27 -60 40 -15 13 -47 32 -70 43 -23
            11 -51 26 -62 33 -11 7 -38 24 -60 37 -22 14 -60 36 -85 48 -25 13 -65 35 -90
            49 -154 90 -254 121 -320 97z m92 -101 c3 -8 149 -97 188 -115 8 -4 29 -16 45
            -27 17 -11 39 -24 50 -30 11 -5 47 -26 80 -45 33 -19 67 -38 75 -42 8 -3 32
            -17 53 -30 64 -40 166 -93 178 -93 17 0 49 -30 49 -47 0 -7 -6 -13 -13 -13
            -14 0 -118 -52 -177 -88 -19 -12 -42 -25 -50 -29 -8 -4 -48 -26 -88 -50 -41
            -24 -75 -43 -77 -43 -4 0 -201 -114 -225 -130 -8 -6 -22 -13 -30 -17 -8 -3
            -26 -15 -39 -25 -31 -23 -72 -23 -103 1 -13 11 -42 29 -63 41 -22 12 -53 30
            -70 40 -31 19 -43 26 -130 74 -27 15 -63 36 -80 46 -16 11 -52 31 -80 45 -27
            14 -66 36 -85 47 -63 38 -164 88 -177 88 -19 0 -16 24 5 42 9 8 37 23 62 33
            25 10 50 22 56 27 6 4 31 19 55 32 24 13 60 33 79 44 19 12 44 26 56 31 11 5
            51 28 88 50 36 23 68 41 70 41 3 0 39 20 80 45 42 25 79 45 82 45 8 0 69 44
            72 53 5 10 60 9 64 -1z'
          />
          <path
            d='M4400 2471 c-60 -24 -127 -57 -172 -84 -123 -73 -217 -125 -238 -132
            -45 -14 -231 -149 -270 -195 -60 -72 -66 -94 -35 -147 27 -44 94 -123 106
            -123 3 0 66 -36 140 -81 74 -45 163 -97 199 -116 36 -20 94 -52 130 -72 58
            -32 101 -52 178 -82 48 -19 112 -5 217 47 51 26 360 202 450 257 28 16 60 36
            73 42 32 17 121 121 128 151 3 13 3 35 0 48 -9 38 -94 134 -137 157 -22 11
            -48 28 -57 37 -10 9 -38 27 -62 40 -25 12 -67 36 -95 52 -27 17 -71 41 -97 54
            -26 12 -54 28 -62 35 -28 23 -172 97 -230 117 -52 19 -112 17 -166 -5z m122
            -89 c3 -8 151 -99 188 -115 8 -4 22 -11 30 -17 37 -24 155 -93 174 -101 12 -5
            35 -18 51 -29 17 -11 37 -23 45 -27 8 -4 35 -18 60 -33 25 -14 65 -34 90 -45
            25 -10 53 -25 63 -33 20 -18 23 -42 4 -42 -14 0 -118 -52 -177 -88 -19 -12
            -42 -25 -50 -29 -8 -4 -48 -26 -88 -50 -41 -24 -75 -43 -77 -43 -4 0 -201
            -114 -225 -130 -8 -6 -22 -13 -30 -17 -8 -3 -26 -15 -39 -25 -31 -23 -72 -23
            -103 1 -13 11 -42 29 -63 41 -22 12 -53 30 -70 40 -16 11 -43 26 -60 34 -16 8
            -52 29 -80 45 -27 17 -59 35 -70 41 -11 6 -33 18 -50 28 -107 65 -275 152
            -292 152 -19 0 -16 25 5 42 9 8 37 23 62 33 25 10 50 22 56 27 6 4 31 19 55
            32 24 13 60 33 79 44 19 12 49 28 65 36 17 8 53 29 80 45 28 17 57 34 65 38 8
            4 48 26 88 50 41 24 76 43 78 43 8 0 69 44 72 53 5 10 60 9 64 -1z'
          />
          <path
            d='M7235 2465 c-83 -36 -93 -41 -150 -75 -27 -17 -65 -37 -83 -46 -19
            -8 -57 -30 -85 -47 -61 -39 -72 -45 -155 -92 -191 -107 -274 -213 -229 -291
            16 -28 103 -124 113 -124 4 0 23 -12 42 -26 18 -15 63 -42 100 -61 36 -19 77
            -43 93 -53 15 -11 53 -32 86 -48 32 -15 72 -37 88 -49 75 -53 236 -123 285
            -123 38 0 154 49 265 111 279 157 343 194 380 219 22 15 45 29 52 31 20 7 113
            119 119 145 3 13 3 35 0 49 -8 31 -102 145 -120 145 -8 0 -33 16 -56 35 -23
            19 -60 44 -83 55 -23 11 -64 33 -92 50 -27 16 -75 43 -105 60 -30 17 -77 44
            -105 60 -27 17 -57 33 -65 36 -8 4 -39 18 -69 32 -78 37 -150 39 -226 7z m137
            -83 c3 -8 151 -99 188 -115 8 -4 22 -11 30 -17 38 -25 155 -93 174 -101 12 -5
            30 -15 41 -21 77 -50 224 -128 239 -128 15 0 46 -32 46 -47 0 -7 -6 -13 -13
            -13 -14 0 -118 -52 -177 -88 -19 -12 -42 -25 -50 -29 -8 -4 -46 -25 -85 -48
            -38 -22 -77 -44 -85 -48 -8 -4 -31 -17 -50 -28 -19 -12 -55 -32 -80 -46 -25
            -13 -58 -33 -75 -44 -16 -10 -37 -22 -45 -26 -8 -3 -26 -15 -39 -25 -31 -23
            -72 -23 -103 1 -13 11 -42 29 -63 41 -22 11 -47 25 -55 30 -78 48 -170 100
            -174 100 -3 0 -34 17 -68 38 -133 81 -305 172 -325 172 -19 0 -16 25 5 42 9 8
            42 25 72 38 30 12 57 25 60 29 3 4 16 12 30 18 14 7 48 26 75 42 28 17 64 37
            80 45 17 8 53 29 80 45 28 17 57 34 65 38 8 4 48 26 88 50 41 24 76 43 78 43
            8 0 69 44 72 53 5 10 60 9 64 -1z'
          />
          <path
            d='M722 1768 c-18 -13 -48 -45 -67 -72 l-35 -50 0 -409 c0 -360 2 -413
            17 -444 26 -55 131 -154 203 -192 36 -19 72 -39 80 -46 8 -7 56 -34 105 -60
            50 -25 97 -53 105 -60 8 -7 67 -39 130 -73 134 -70 198 -84 242 -54 48 32 97
            97 107 143 16 67 14 780 -1 811 -21 39 -85 122 -110 141 -13 9 -36 28 -53 41
            -16 13 -52 35 -80 50 -92 49 -160 88 -175 101 -8 7 -31 20 -50 29 -19 9 -57
            29 -85 46 -27 16 -57 33 -65 36 -8 3 -22 9 -30 14 -49 29 -125 60 -162 65 -35
            5 -49 2 -76 -17z m82 -93 c24 -19 46 -35 49 -35 4 0 37 -18 73 -41 37 -22 77
            -45 88 -50 12 -5 28 -13 36 -19 38 -25 155 -93 174 -101 12 -5 44 -23 71 -40
            28 -16 64 -37 80 -45 38 -18 98 -54 108 -63 4 -4 8 -209 8 -456 2 -476 1 -479
            -44 -437 -23 21 -145 97 -181 113 -12 5 -34 18 -51 29 -16 11 -39 24 -50 30
            -11 6 -29 16 -40 23 -11 7 -52 30 -90 52 -39 22 -78 44 -87 50 -9 5 -39 22
            -66 37 -102 56 -127 70 -135 77 -5 5 -13 847 -8 904 2 15 24 6 65 -28z'
          />
          <path
            d='M2445 1776 c-58 -18 -235 -106 -268 -133 -16 -13 -33 -23 -39 -23 -6
            0 -34 -14 -61 -32 -60 -38 -98 -60 -152 -86 -36 -17 -61 -35 -143 -99 -39 -31
            -100 -118 -111 -159 -14 -53 -14 -700 0 -782 10 -57 17 -69 64 -118 75 -76
            100 -75 271 12 71 36 135 71 143 77 13 11 143 85 286 164 77 42 182 141 208
            196 15 31 17 83 17 439 l0 404 -28 45 c-33 52 -101 109 -128 108 -11 0 -37 -6
            -59 -13z m96 -521 c-1 -247 -5 -453 -9 -457 -10 -9 -68 -43 -127 -73 -27 -14
            -63 -35 -80 -45 -16 -11 -39 -24 -50 -30 -11 -6 -47 -26 -80 -45 -33 -19 -69
            -39 -80 -45 -11 -6 -33 -19 -50 -30 -16 -11 -40 -24 -53 -30 -12 -5 -50 -28
            -83 -50 -33 -22 -64 -40 -68 -40 -4 0 -16 -9 -26 -20 -10 -12 -25 -19 -33 -18
            -13 3 -15 66 -13 453 l1 450 23 17 c12 10 26 18 31 18 5 0 41 19 80 43 39 24
            78 46 86 50 8 4 42 23 75 42 33 19 69 40 80 45 11 6 34 19 50 30 17 11 44 26
            60 34 17 8 53 29 80 45 28 17 59 35 70 40 11 5 36 23 55 40 65 57 63 74 61
            -424z'
          />
          <path
            d='M3574 1770 c-34 -22 -77 -78 -93 -123 -7 -18 -11 -171 -11 -424 0
            -347 2 -399 17 -430 26 -55 131 -154 208 -196 140 -77 273 -153 286 -163 8 -7
            67 -39 131 -72 135 -70 191 -83 237 -56 46 27 96 94 109 146 16 62 16 737 1
            792 -11 41 -73 129 -111 159 -74 58 -102 77 -121 83 -12 4 -40 19 -62 33 -53
            35 -68 44 -145 87 -36 19 -83 46 -105 59 -85 51 -230 116 -269 121 -31 4 -49
            0 -72 -16z m82 -95 c23 -19 45 -35 48 -35 3 0 36 -18 72 -41 37 -22 77 -45 88
            -50 12 -5 28 -13 36 -19 40 -25 155 -93 174 -101 12 -5 28 -13 36 -19 35 -23
            171 -100 178 -100 4 0 17 -8 30 -18 l22 -17 1 -450 c2 -477 1 -479 -44 -437
            -23 21 -145 97 -181 113 -12 5 -34 18 -51 29 -16 11 -39 24 -50 30 -11 5 -27
            14 -35 20 -22 14 -163 95 -180 103 -8 4 -31 17 -50 28 -19 12 -60 35 -90 51
            -30 17 -58 33 -62 37 -6 5 -13 845 -9 904 2 16 26 6 67 -28z'
          />
          <path
            d='M5295 1776 c-58 -19 -171 -74 -185 -91 -6 -7 -17 -12 -24 -9 -7 3
            -26 -6 -42 -19 -16 -13 -47 -33 -69 -44 -105 -54 -141 -75 -160 -93 -12 -11
            -28 -20 -37 -20 -14 0 -74 -40 -146 -97 -39 -31 -92 -109 -107 -160 -19 -62
            -22 -716 -4 -791 13 -53 67 -125 109 -147 52 -27 89 -18 224 49 71 36 136 71
            145 79 9 8 57 36 106 62 50 25 97 53 106 61 8 7 44 28 79 46 72 35 184 142
            206 195 11 25 14 117 14 432 0 242 -4 410 -10 426 -6 14 -34 51 -64 81 -59 58
            -72 62 -141 40z m96 -521 c-1 -247 -4 -452 -9 -456 -10 -10 -68 -44 -127 -74
            -27 -14 -63 -35 -80 -45 -16 -11 -39 -24 -50 -30 -11 -6 -47 -26 -80 -45 -33
            -19 -69 -40 -80 -45 -11 -6 -33 -19 -50 -30 -16 -11 -40 -24 -53 -30 -12 -5
            -50 -28 -83 -50 -33 -22 -64 -40 -68 -40 -4 0 -16 -9 -26 -20 -10 -12 -25 -19
            -33 -18 -13 3 -15 67 -13 451 0 247 3 452 6 456 2 4 33 22 67 40 35 18 77 41
            93 51 43 27 73 44 130 74 28 15 64 36 80 46 17 11 37 23 45 27 18 8 158 89
            180 103 8 6 24 14 35 19 11 5 36 23 55 40 65 57 63 73 61 -424z'
          />
          <path
            d='M6397 1739 c-39 -39 -58 -66 -67 -97 -8 -30 -10 -162 -8 -430 3 -386
            3 -387 27 -432 33 -62 115 -139 197 -184 147 -81 272 -152 285 -163 32 -25
            251 -132 284 -139 53 -10 81 2 131 53 71 75 73 91 71 503 -2 208 -7 372 -13
            397 -6 23 -25 61 -43 85 -37 50 -149 143 -206 169 -22 11 -62 32 -90 49 -27
            16 -76 43 -107 60 -31 16 -59 34 -62 39 -12 19 -258 132 -301 137 -41 6 -45 5
            -98 -47z m107 -64 c24 -19 46 -35 49 -35 4 0 37 -18 73 -41 37 -22 77 -45 88
            -50 12 -5 28 -13 36 -19 40 -25 155 -93 174 -101 12 -5 28 -13 36 -19 35 -23
            171 -100 178 -100 4 0 17 -8 30 -18 l22 -17 1 -450 c2 -477 1 -479 -44 -437
            -12 11 -58 41 -102 67 -44 25 -87 51 -95 56 -8 5 -24 14 -35 19 -11 6 -33 19
            -50 30 -16 11 -52 31 -80 45 -27 14 -63 35 -80 45 -16 11 -39 24 -50 30 -11 6
            -36 20 -55 31 -19 12 -62 36 -95 54 l-60 33 -5 448 c-3 247 -4 452 -2 457 6
            14 24 7 66 -28z'
          />
          <path
            d='M8123 1765 c-75 -28 -151 -64 -158 -75 -3 -4 -17 -11 -32 -15 -15 -3
            -40 -17 -56 -31 -16 -13 -33 -24 -39 -24 -6 0 -34 -14 -61 -32 -28 -18 -62
            -39 -78 -47 -15 -9 -45 -26 -66 -37 -145 -82 -238 -173 -262 -259 -15 -56 -15
            -712 1 -790 10 -50 19 -65 66 -113 54 -54 55 -54 105 -49 34 3 86 23 166 63
            64 32 124 65 134 73 16 14 139 84 292 167 42 24 97 66 138 108 99 101 98 93
            95 552 l-3 380 -39 58 c-41 59 -89 97 -122 95 -11 0 -47 -11 -81 -24z m118
            -510 l-1 -450 -22 -16 c-13 -9 -54 -34 -93 -54 -38 -21 -83 -47 -100 -57 -16
            -10 -39 -22 -50 -28 -11 -6 -47 -26 -80 -45 -33 -19 -69 -40 -80 -45 -11 -6
            -33 -19 -50 -30 -16 -11 -40 -24 -53 -30 -12 -5 -50 -28 -83 -50 -33 -22 -64
            -40 -68 -40 -4 0 -16 -9 -26 -20 -10 -12 -25 -19 -33 -18 -13 3 -15 68 -13
            452 0 248 4 453 8 457 5 4 33 20 63 37 30 16 71 39 90 51 19 11 42 24 50 28
            18 8 158 89 180 103 8 6 24 14 36 19 19 8 134 76 174 101 8 6 24 14 35 19 11
            5 36 23 55 40 65 57 63 74 61 -424z'
          />
        </g>
      </ModInfrastructureIcon>
    </>
  )
}

export default InfrastructureIcon
