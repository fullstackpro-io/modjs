import React from 'react'
import {styled} from 'styled-components'

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  fill?: string
  height?: string
  width?: string
}

const ModFrontendIcon = styled.svg`
  fill: ${props => props.fill ? props.fill : ({theme}) => theme.color.primary};
  height: ${props => props.height ? props.height : ({theme}) => theme.icons.height.lg};
  width: ${props => props.width ? props.width : ({theme}) => theme.icons.width.lg};
`;

const FrontendIcon = ({ fill, height, width, ...props }: IconProps) => {
  return (
    <ModFrontendIcon 
      {...props} 
      xmlns='http://www.w3.org/2000/svg' 
      viewBox='0 0 350 350'       
      height = {height}
      width = {width}
    >
      <title>Frontend Outlined Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackpro.io</metadata>
      <g transform='translate(0,350) scale(0.100000,-0.100000)' fill={fill} stroke='none'>
        <path
          d='M314 2689 c-46 -13 -91 -69 -99 -121 -3 -24 -5 -378 -3 -788 3 -695
          4 -747 21 -778 10 -18 32 -42 50 -52 31 -19 59 -20 1217 -20 1158 0 1186 1
          1217 20 18 10 40 34 50 52 17 31 18 81 18 815 0 774 0 782 -21 809 -11 15 -33
          37 -48 48 -27 21 -33 21 -1199 23 -690 1 -1185 -2 -1203 -8z m2368 -96 c17
          -15 18 -53 18 -780 0 -750 0 -763 -20 -783 -20 -20 -33 -20 -1180 -20 -1147 0
          -1160 0 -1180 20 -20 20 -20 33 -20 782 0 694 1 763 17 780 15 17 65 18 1181
          18 1070 0 1167 -1 1184 -17z'
        />
        <path
          d='M360 1810 l0 -740 1140 0 1140 0 0 740 0 740 -1140 0 -1140 0 0 -740z
          m2228 688 c9 -9 12 -174 12 -683 0 -368 -4 -676 -8 -683 -7 -10 -233 -12
          -1098 -10 l-1089 3 -3 670 c-1 369 0 680 3 693 l5 22 1083 0 c829 0 1086 -3
          1095 -12z'
        />
        <path
          d='M1567 2250 c-26 -21 -45 -67 -71 -175 -29 -120 -125 -467 -130 -473
          -7 -7 -1 -16 -69 100 -31 53 -57 104 -57 112 0 9 22 51 48 94 26 42 54 92 61
          110 13 30 12 36 -6 60 -25 33 -67 40 -95 15 -12 -10 -36 -41 -54 -70 -19 -28
          -38 -54 -43 -57 -5 -3 -28 23 -50 59 -56 88 -93 105 -143 65 -25 -19 -26 -19
          -43 0 -26 29 -69 26 -94 -6 -19 -25 -21 -40 -21 -188 0 -140 -3 -165 -19 -192
          -40 -66 -125 -68 -168 -5 -22 32 -23 44 -23 196 0 149 -2 164 -21 189 -28 35
          -70 35 -98 0 -19 -25 -21 -40 -21 -203 0 -163 2 -180 24 -226 25 -55 81 -110
          132 -131 44 -19 136 -18 182 2 47 19 98 68 125 119 18 34 22 61 25 180 2 77 7
          144 12 149 8 8 58 -61 94 -132 l17 -33 -60 -103 c-34 -56 -61 -114 -61 -127 0
          -30 38 -69 66 -69 23 0 67 45 107 108 15 23 31 42 36 42 5 0 24 -25 41 -55 50
          -87 83 -105 144 -80 16 7 18 5 12 -10 -4 -11 -10 -39 -13 -62 -5 -37 -2 -48
          17 -68 38 -40 81 -30 110 26 6 10 35 110 65 221 29 112 74 280 99 373 25 94
          46 180 46 191 0 23 -45 74 -65 74 -7 0 -24 -9 -38 -20z m61 -32 c7 -9 -21
          -129 -97 -410 -58 -219 -111 -402 -117 -408 -12 -12 -40 -4 -47 13 -3 9 150
          598 203 780 11 38 37 50 58 25z m-1078 -328 c4 -157 8 -190 23 -213 59 -90
          191 -87 247 5 18 30 20 51 20 204 0 140 3 174 15 184 8 7 22 10 30 6 13 -4 15
          -34 15 -188 0 -156 -3 -189 -19 -223 -68 -150 -290 -153 -368 -6 -22 42 -23
          55 -23 226 0 100 3 185 7 189 4 4 16 6 28 4 19 -3 20 -11 25 -188z m536 83
          l62 -103 62 106 c52 86 67 104 84 102 38 -5 28 -41 -42 -154 l-69 -111 69
          -113 c38 -61 68 -119 66 -128 -2 -10 -13 -18 -24 -20 -18 -3 -33 16 -84 99
          l-63 101 -24 -38 c-13 -22 -40 -67 -60 -101 -28 -47 -43 -63 -59 -63 -42 0
          -35 30 37 147 l70 115 -72 119 c-61 101 -70 121 -59 134 24 29 44 11 106 -92z'
        />
        <path
          d='M2207 2090 l-34 -29 -23 24 c-31 33 -72 33 -99 -1 -19 -24 -21 -40
          -21 -181 0 -175 -9 -212 -60 -238 -44 -23 -92 -13 -124 26 -26 30 -26 33 -26
          190 0 121 -4 167 -15 188 -24 47 -69 55 -103 18 -21 -22 -22 -32 -22 -205 0
          -206 6 -231 68 -296 50 -52 104 -76 173 -76 95 0 166 42 217 129 26 44 27 52
          30 214 2 92 6 167 10 167 3 0 15 -8 26 -19 12 -10 35 -23 51 -28 l30 -10 0
          -154 0 -154 -27 -3 c-35 -4 -78 -45 -78 -75 0 -13 11 -34 25 -47 22 -21 38
          -24 115 -28 122 -6 177 3 206 35 13 14 24 32 24 40 0 24 -56 73 -84 73 l-26 0
          0 159 0 159 35 6 c35 7 75 46 75 73 0 8 -13 28 -29 44 -29 29 -30 29 -155 29
          -125 0 -125 0 -159 -30z m-439 -22 c8 -8 12 -63 12 -182 0 -153 2 -174 20
          -204 60 -98 196 -94 248 8 20 41 22 58 22 212 0 101 4 169 10 173 6 3 19 3 30
          0 19 -6 20 -15 20 -177 0 -194 -8 -232 -58 -284 -103 -106 -269 -80 -335 52
          -13 24 -16 70 -18 211 -1 100 2 186 5 192 9 14 29 14 44 -1z m740 -17 c5 -32
          -13 -41 -70 -34 l-48 6 0 -206 0 -206 58 -3 c53 -3 57 -5 57 -28 l0 -25 -141
          -3 c-124 -2 -142 0 -148 14 -11 28 13 44 65 44 l49 0 0 206 0 207 -45 -6 c-33
          -5 -48 -3 -60 9 -18 19 -19 26 -3 42 9 9 51 12 148 10 134 -3 135 -3 138 -27z'
        />
        <path
          d='M1370 655 l0 -215 130 0 130 0 0 215 0 215 -130 0 -130 0 0 -215z
          m215 -5 l0 -165 -85 0 -85 0 -3 155 c-1 85 0 160 3 167 3 10 26 13 87 11 l83
          -3 0 -165z'
        />
        <path
          d='M1288 544 c-3 -3 -114 -38 -246 -78 l-241 -72 39 -46 39 -46 163 50
          c90 27 187 56 216 64 l52 15 0 60 c0 53 -7 69 -22 53z m-28 -74 c0 -11 -316
          -110 -354 -110 -58 0 30 34 274 105 55 16 80 18 80 5z'
        />
        <path
          d='M1690 492 l0 -61 53 -15 c28 -8 125 -37 215 -64 l163 -50 39 46 39
          46 -237 72 c-130 40 -245 75 -254 79 -16 6 -18 0 -18 -53z m248 -63 c94 -29
          172 -56 172 -60 0 -15 -29 -10 -154 27 -185 54 -216 65 -216 75 0 15 18 11
          198 -42z'
        />
      </g>
    </ModFrontendIcon>
  )
}

export default FrontendIcon