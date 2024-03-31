import React from 'react'
import {styled} from 'styled-components'

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  fill?: string
  height?: string
  width?: string
}

const ModJavascriptIcon = styled.svg`
  fill: ${props => props.fill ? props.fill : ({theme}) => theme.color.primary};
  height: ${props => props.height ? props.height : ({theme}) => theme.icons.height.lg};
  width: ${props => props.width ? props.width : ({theme}) => theme.icons.width.lg};
`;

const JavascriptIcon = ({  fill, height, width, ...props }: IconProps) => {
  return (
    <ModJavascriptIcon 
      {...props} 
      xmlns='http://www.w3.org/2000/svg' 
      viewBox='-50 -50 980 900'
      height = {height}
      width = {width}
      >
      <title>Javascript Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackpro.io</metadata>
      <path
        fill='transparent'
        opacity='1.000000'
        stroke='none'
        d='M861.000000,316.000000 
      C861.000000,487.999908 861.000000,659.499817 861.000000,830.999817 
      C574.333496,830.999878 287.667053,830.999878 1.000430,830.999939 
      C1.000287,554.333618 1.000287,277.667267 1.000143,1.000690 
      C287.666229,1.000460 574.332458,1.000460 860.999390,1.000230 
      C861.000000,105.833336 861.000000,210.666672 861.000000,316.000000 
      M746.495239,41.000069 
      C531.135315,41.000069 315.775421,41.000069 100.238159,41.000069 
      C101.843140,58.604027 103.405418,75.339798 104.887627,92.082664 
      C107.706848,123.928207 110.439934,155.781418 113.282982,187.624817 
      C116.777374,226.763565 120.380463,265.892609 123.874886,305.031342 
      C126.717926,336.874481 129.431854,368.729187 132.272797,400.572510 
      C135.439041,436.062347 138.718414,471.542084 141.884750,507.031921 
      C144.725739,538.875183 147.449570,570.729004 150.280914,602.573120 
      C153.495529,638.727661 156.837952,674.871094 159.924057,711.036499 
      C160.245880,714.808105 161.398972,716.350891 165.144928,717.385254 
      C251.005173,741.092285 336.829773,764.928772 422.620392,788.886536 
      C427.921448,790.366943 432.695740,790.568054 438.100128,789.058899 
      C524.052246,765.057556 610.051575,741.225037 696.088135,717.528137 
      C700.412781,716.336975 701.799866,714.464355 702.104309,710.111328 
      C703.242798,693.835205 704.806519,677.588318 706.266357,661.335449 
      C709.468872,625.681091 712.734863,590.032349 715.919128,554.376343 
      C718.748047,522.698975 721.476929,491.012665 724.294983,459.334290 
      C727.526062,423.013519 730.815063,386.697876 734.063171,350.378632 
      C736.495667,323.179474 738.890320,295.976959 741.325562,268.778076 
      C744.532837,232.956680 747.761536,197.137238 750.984741,161.317276 
      C753.208069,136.608704 755.453918,111.902161 757.658752,87.191948 
      C759.016174,71.979118 760.315247,56.761078 761.688049,41.000069 
      C756.749146,41.000069 752.120789,41.000069 746.495239,41.000069 z'
      />
      <path
        fill='#D4B830'
        opacity='1.000000'
        stroke='none'
        d='M746.993896,41.000069 
      C752.120789,41.000069 756.749146,41.000069 761.688049,41.000069 
      C760.315247,56.761078 759.016174,71.979118 757.658752,87.191948 
      C755.453918,111.902161 753.208069,136.608704 750.984741,161.317276 
      C747.761536,197.137238 744.532837,232.956680 741.325562,268.778076 
      C738.890320,295.976959 736.495667,323.179474 734.063171,350.378632 
      C730.815063,386.697876 727.526062,423.013519 724.294983,459.334290 
      C721.476929,491.012665 718.748047,522.698975 715.919128,554.376343 
      C712.734863,590.032349 709.468872,625.681091 706.266357,661.335449 
      C704.806519,677.588318 703.242798,693.835205 702.104309,710.111328 
      C701.799866,714.464355 700.412781,716.336975 696.088135,717.528137 
      C610.051575,741.225037 524.052246,765.057556 438.100128,789.058899 
      C432.695740,790.568054 427.921448,790.366943 422.620392,788.886536 
      C336.829773,764.928772 251.005173,741.092285 165.144928,717.385254 
      C161.398972,716.350891 160.245880,714.808105 159.924057,711.036499 
      C156.837952,674.871094 153.495529,638.727661 150.280914,602.573120 
      C147.449570,570.729004 144.725739,538.875183 141.884750,507.031921 
      C138.718414,471.542084 135.439041,436.062347 132.272797,400.572510 
      C129.431854,368.729187 126.717926,336.874481 123.874886,305.031342 
      C120.380463,265.892609 116.777374,226.763565 113.282982,187.624817 
      C110.439934,155.781418 107.706848,123.928207 104.887627,92.082664 
      C103.405418,75.339798 101.843140,58.604027 100.238159,41.000069 
      C315.775421,41.000069 531.135315,41.000069 746.993896,41.000069 
      M690.984375,214.349091 
      C691.652283,206.758698 692.354492,199.171143 692.980469,191.577301 
      C694.055908,178.529556 694.977966,165.468323 696.158081,152.430283 
      C697.665527,135.775818 699.464294,119.147484 700.932251,102.489784 
      C701.499512,96.053009 701.243347,96.017761 695.018799,96.017555 
      C609.030945,96.014717 523.043091,96.053169 437.055450,95.914322 
      C432.332031,95.906693 430.890930,97.040512 430.893799,101.936150 
      C431.015900,310.406586 430.998199,518.877075 431.008881,727.347595 
      C431.008972,729.104797 431.161713,730.862061 431.259979,732.981873 
      C432.989838,732.736328 434.131927,732.701172 435.201111,732.403870 
      C461.747833,725.022644 488.273590,717.565796 514.830139,710.220276 
      C558.661072,698.096680 602.516663,686.062317 646.326965,673.864685 
      C647.741882,673.470703 649.559448,671.866272 649.835022,670.543884 
      C650.607056,666.839050 650.676575,662.986877 651.008728,659.191650 
      C651.745789,650.772522 652.442444,642.349792 653.212830,633.933777 
      C654.450378,620.413391 655.778381,606.901184 656.983154,593.377991 
      C657.792053,584.298279 658.380066,575.198914 659.199280,566.120239 
      C660.404480,552.763672 661.775818,539.422058 662.983826,526.065735 
      C663.789978,517.152649 664.378723,508.220001 665.165649,499.305023 
      C666.403381,485.284363 667.741577,471.272644 669.007080,457.254395 
      C669.767029,448.837250 670.430542,440.411316 671.207336,431.995789 
      C672.440125,418.641754 673.785400,405.297943 674.982178,391.940765 
      C676.106018,379.397888 677.055969,366.839478 678.161621,354.294891 
      C679.397339,340.273987 680.747375,326.263184 681.999023,312.243652 
      C682.780090,303.494995 683.407349,294.732391 684.217285,285.986572 
      C685.423340,272.963501 686.742065,259.950897 687.989746,246.931656 
      C689.000916,236.381027 689.977966,225.827133 690.984375,214.349091 
      M386.499939,173.129501 
      C332.414764,173.129501 278.329620,173.129501 223.842270,173.129501 
      C226.453262,201.186142 228.992889,228.475815 231.576935,256.242859 
      C263.236420,256.242859 294.300446,256.242859 325.396149,256.242859 
      C325.396149,350.186127 325.396149,443.589600 325.396149,537.633240 
      C309.912445,535.377197 294.832153,533.179871 279.546783,530.952759 
      C277.557068,508.844330 275.605835,487.164001 273.634796,465.263092 
      C245.873810,465.263092 218.487335,465.263092 190.964172,465.263092 
      C190.964172,467.041412 190.851181,468.521332 190.980652,469.979675 
      C194.501480,509.638153 198.141846,549.286499 201.461960,588.961670 
      C201.852692,593.630981 203.342728,595.290283 207.921539,596.181274 
      C258.919922,606.104187 309.870453,616.273132 360.831909,626.385742 
      C376.643097,629.523193 392.448273,632.690979 408.400818,635.873657 
      C408.400818,481.413544 408.400818,327.391754 408.400818,173.129547 
      C401.150421,173.129547 394.325134,173.129547 386.499939,173.129501 z'
      />
      <path
        fill='#FCD83C'
        opacity='1.000000'
        stroke='none'
        d='M690.977295,214.811890 
      C689.977966,225.827133 689.000916,236.381027 687.989746,246.931656 
      C686.742065,259.950897 685.423340,272.963501 684.217285,285.986572 
      C683.407349,294.732391 682.780090,303.494995 681.999023,312.243652 
      C680.747375,326.263184 679.397339,340.273987 678.161621,354.294891 
      C677.055969,366.839478 676.106018,379.397888 674.982178,391.940765 
      C673.785400,405.297943 672.440125,418.641754 671.207336,431.995789 
      C670.430542,440.411316 669.767029,448.837250 669.007080,457.254395 
      C667.741577,471.272644 666.403381,485.284363 665.165649,499.305023 
      C664.378723,508.220001 663.789978,517.152649 662.983826,526.065735 
      C661.775818,539.422058 660.404480,552.763672 659.199280,566.120239 
      C658.380066,575.198914 657.792053,584.298279 656.983154,593.377991 
      C655.778381,606.901184 654.450378,620.413391 653.212830,633.933777 
      C652.442444,642.349792 651.745789,650.772522 651.008728,659.191650 
      C650.676575,662.986877 650.607056,666.839050 649.835022,670.543884 
      C649.559448,671.866272 647.741882,673.470703 646.326965,673.864685 
      C602.516663,686.062317 558.661072,698.096680 514.830139,710.220276 
      C488.273590,717.565796 461.747833,725.022644 435.201111,732.403870 
      C434.131927,732.701172 432.989838,732.736328 431.259979,732.981873 
      C431.161713,730.862061 431.008972,729.104797 431.008881,727.347595 
      C430.998199,518.877075 431.015900,310.406586 430.893799,101.936150 
      C430.890930,97.040512 432.332031,95.906693 437.055450,95.914322 
      C523.043091,96.053169 609.030945,96.014717 695.018799,96.017555 
      C701.243347,96.017761 701.499512,96.053009 700.932251,102.489784 
      C699.464294,119.147484 697.665527,135.775818 696.158081,152.430283 
      C694.977966,165.468323 694.055908,178.529556 692.980469,191.577301 
      C692.354492,199.171143 691.652283,206.758698 690.977295,214.811890 
      M570.500000,173.119690 
      C531.757751,173.119690 493.015533,173.119690 454.384705,173.119690 
      C454.384705,257.015839 454.384705,340.071716 454.384705,423.755341 
      C491.993256,423.755341 529.221985,423.755341 566.272949,423.755341 
      C566.539246,424.690338 566.728149,425.007965 566.700500,425.305450 
      C563.621033,458.464508 560.370117,491.609009 557.586731,524.792725 
      C557.133972,530.190002 554.867432,531.384277 550.191406,532.207092 
      C519.696289,537.572876 489.268677,543.321838 458.776642,548.705750 
      C455.032379,549.366882 453.889557,550.598938 453.913666,554.386292 
      C454.077271,580.047180 453.993439,605.709534 454.014404,631.371460 
      C454.015564,632.762268 454.239960,634.153015 454.356384,635.497314 
      C455.166534,635.497314 455.507202,635.559021 455.817902,635.488586 
      C514.103516,622.265808 572.382446,609.013733 630.683167,595.857788 
      C633.755371,595.164551 634.586731,593.509155 634.828247,590.687439 
      C636.859131,566.961487 638.966797,543.242065 641.091492,519.524231 
      C643.513306,492.489807 645.967529,465.458282 648.423889,438.426971 
      C651.241821,407.415955 654.082397,376.407043 656.889099,345.395020 
      C657.016052,343.992279 656.905396,342.568054 656.905396,340.606873 
      C617.892822,340.606873 579.490662,340.606873 541.099243,340.606873 
      C541.099243,312.164215 541.099243,284.275848 541.099243,255.907928 
      C582.413086,255.907928 623.328613,255.907928 664.649719,255.907928 
      C667.107727,228.204681 669.526306,200.945770 671.995239,173.119781 
      C638.072266,173.119781 604.786133,173.119781 570.500000,173.119690 z'
      />
      <path
        fill='#010100'
        opacity='1.000000'
        stroke='none'
        d='M386.999878,173.129517 
      C394.325134,173.129547 401.150421,173.129547 408.400818,173.129547 
      C408.400818,327.391754 408.400818,481.413544 408.400818,635.873657 
      C392.448273,632.690979 376.643097,629.523193 360.831909,626.385742 
      C309.870453,616.273132 258.919922,606.104187 207.921539,596.181274 
      C203.342728,595.290283 201.852692,593.630981 201.461960,588.961670 
      C198.141846,549.286499 194.501480,509.638153 190.980652,469.979675 
      C190.851181,468.521332 190.964172,467.041412 190.964172,465.263092 
      C218.487335,465.263092 245.873810,465.263092 273.634796,465.263092 
      C275.605835,487.164001 277.557068,508.844330 279.546783,530.952759 
      C294.832153,533.179871 309.912445,535.377197 325.396149,537.633240 
      C325.396149,443.589600 325.396149,350.186127 325.396149,256.242859 
      C294.300446,256.242859 263.236420,256.242859 231.576935,256.242859 
      C228.992889,228.475815 226.453262,201.186142 223.842270,173.129501 
      C278.329620,173.129501 332.414764,173.129501 386.999878,173.129517 z'
      />
      <path
        fill='#4E4E4D'
        opacity='1.000000'
        stroke='none'
        d='M571.000000,173.119736 
      C604.786133,173.119781 638.072266,173.119781 671.995239,173.119781 
      C669.526306,200.945770 667.107727,228.204681 664.649719,255.907928 
      C623.328613,255.907928 582.413086,255.907928 541.099243,255.907928 
      C541.099243,284.275848 541.099243,312.164215 541.099243,340.606873 
      C579.490662,340.606873 617.892822,340.606873 656.905396,340.606873 
      C656.905396,342.568054 657.016052,343.992279 656.889099,345.395020 
      C654.082397,376.407043 651.241821,407.415955 648.423889,438.426971 
      C645.967529,465.458282 643.513306,492.489807 641.091492,519.524231 
      C638.966797,543.242065 636.859131,566.961487 634.828247,590.687439 
      C634.586731,593.509155 633.755371,595.164551 630.683167,595.857788 
      C572.382446,609.013733 514.103516,622.265808 455.817902,635.488586 
      C455.507202,635.559021 455.166534,635.497314 454.356384,635.497314 
      C454.239960,634.153015 454.015564,632.762268 454.014404,631.371460 
      C453.993439,605.709534 454.077271,580.047180 453.913666,554.386292 
      C453.889557,550.598938 455.032379,549.366882 458.776642,548.705750 
      C489.268677,543.321838 519.696289,537.572876 550.191406,532.207092 
      C554.867432,531.384277 557.133972,530.190002 557.586731,524.792725 
      C560.370117,491.609009 563.621033,458.464508 566.700500,425.305450 
      C566.728149,425.007965 566.539246,424.690338 566.272949,423.755341 
      C529.221985,423.755341 491.993256,423.755341 454.384705,423.755341 
      C454.384705,340.071716 454.384705,257.015839 454.384705,173.119690 
      C493.015533,173.119690 531.757751,173.119690 571.000000,173.119736 z'
      />
    </ModJavascriptIcon>
  )
}

export default JavascriptIcon
