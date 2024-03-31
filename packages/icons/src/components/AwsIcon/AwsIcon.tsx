import React from 'react'
import {styled} from 'styled-components'

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  fill?: string
  height?: string
  width?: string
}

const ModAwsIcon = styled.svg`
  fill: ${props => props.fill ? props.fill : ({theme}) => theme.color.primary};
  height: ${props => props.height ? props.height : ({theme}) => theme.icons.height.lg};
  width: ${props => props.width ? props.width : ({theme}) => theme.icons.width.lg};
`;

const AwsIcon = ({ fill, height, width, ...props }: IconProps) => {
  return (
    <ModAwsIcon 
      {...props} 
      xmlns='http://www.w3.org/2000/svg' 
      viewBox='-100 -100 1224 600'
      height = {height}
      width = {width}
      >
      <title>Amazon Web Services (AWS) Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackpro.io</metadata>
      <path
        fill='transparent'
        opacity='1.000000'
        stroke='none'
        d='M661.000000,614.000000 
      C440.666718,614.000000 220.833466,614.000000 1.000147,614.000000 
      C1.000098,409.666779 1.000098,205.333588 1.000049,1.000284 
      C342.333099,1.000190 683.666199,1.000190 1024.999512,1.000095 
      C1024.999634,205.333054 1024.999634,409.666107 1024.999756,613.999573 
      C903.833313,614.000000 782.666687,614.000000 661.000000,614.000000 
      M680.151123,15.422264 
      C673.726868,19.051722 672.746765,25.815344 671.086304,31.943556 
      C664.961853,54.546726 659.064331,77.212364 653.219971,99.890198 
      C640.783020,148.149414 628.438904,196.432526 616.026123,244.697998 
      C615.497681,246.752808 614.662354,248.728683 613.698059,251.531540 
      C613.181091,250.165161 613.029968,249.868469 612.955200,249.553635 
      C605.280273,217.244110 597.602295,184.935303 589.943848,152.621887 
      C579.987488,110.612930 570.006897,68.609634 560.137085,26.580339 
      C558.391541,19.147026 554.379517,13.834158 546.583008,13.504846 
      C533.957275,12.971550 521.282837,12.999352 508.650604,13.428090 
      C500.937653,13.689869 496.305786,18.546453 494.498871,26.006384 
      C491.880463,36.816826 489.256256,47.626003 486.686493,58.448063 
      C476.482391,101.420540 466.284027,144.394394 456.113434,187.374802 
      C451.281464,207.794434 446.516541,228.229904 441.451294,249.808151 
      C440.674042,247.785767 440.243958,246.929214 440.011169,246.022018 
      C435.677094,229.130203 431.341644,212.238663 427.055847,195.334564 
      C415.909973,151.372803 404.835571,107.392838 393.627655,63.446926 
      C390.263184,50.254951 386.601868,37.137676 382.983459,24.011843 
      C380.771393,15.987681 374.666504,13.178445 367.089752,13.055900 
      C355.426392,12.867256 343.757355,12.944475 332.091553,13.027612 
      C325.433685,13.075060 322.051300,17.282156 323.220367,23.865534 
      C323.539093,25.660397 324.047028,27.429308 324.573212,29.178513 
      C330.985718,50.496288 337.412384,71.809814 343.846313,93.121132 
      C353.402008,124.772758 362.958893,156.424026 372.530243,188.070923 
      C378.060913,206.357727 383.577606,224.648926 389.179535,242.913940 
      C395.075684,262.138550 400.984955,281.359955 407.060211,300.528320 
      C409.103699,306.975769 413.072571,311.774567 420.461578,312.068390 
      C431.419830,312.504150 442.386353,312.862091 453.351868,312.955200 
      C466.813507,313.069519 471.826447,309.018219 475.017822,295.812714 
      C479.971375,275.315948 484.847778,254.800568 489.754211,234.292389 
      C498.217102,198.918533 506.675476,163.543579 515.140869,128.170303 
      C518.794434,112.903717 522.460632,97.640167 526.121033,82.375244 
      C528.179993,87.882225 529.463623,93.355270 530.766113,98.823814 
      C536.922852,124.671860 543.023926,150.533371 549.258606,176.362595 
      C559.117371,217.205399 569.035706,258.033905 579.000183,298.851044 
      C581.469116,308.964691 586.703369,312.941864 597.161377,312.988922 
      C607.327576,313.034668 617.494263,313.028992 627.660522,312.990875 
      C638.449768,312.950470 643.516235,309.352020 646.810120,299.131836 
      C650.990112,286.162628 655.029175,273.147797 659.091675,260.140991 
      C666.919189,235.079742 674.695312,210.002426 682.537903,184.945892 
      C698.326233,134.503891 714.168152,84.078690 729.899109,33.618832 
      C730.975098,30.167519 731.705017,26.508389 731.909912,22.906883 
      C732.302856,15.998337 729.366394,13.058979 722.527405,13.018481 
      C712.194702,12.957292 701.856812,12.826830 691.530762,13.095948 
      C687.956299,13.189105 684.410645,14.385511 680.151123,15.422264 
      M828.309814,487.930206 
      C811.381409,492.947845 794.635742,498.734131 777.483887,502.811829 
      C748.111938,509.794769 718.543701,515.995972 688.943542,521.957825 
      C672.671082,525.235352 656.203430,527.629578 639.752380,529.906616 
      C626.933472,531.680908 614.025757,532.941101 601.118896,533.921997 
      C584.184570,535.209045 567.219055,536.672546 550.254761,536.843140 
      C524.165100,537.105469 498.064301,536.379089 471.969971,535.962891 
      C466.203491,535.870911 460.425629,535.511719 454.685303,534.947205 
      C438.868256,533.391724 423.062042,531.718872 407.263672,529.982422 
      C395.879578,528.731140 384.443115,527.734314 373.158081,525.854919 
      C355.513580,522.916504 337.867645,519.816345 320.421295,515.898560 
      C294.803497,510.145660 269.149933,504.356018 243.905014,497.195190 
      C219.942383,490.398010 196.161255,482.668610 172.889908,473.801727 
      C144.726791,463.070953 117.024902,451.073364 89.435982,438.914795 
      C74.859825,432.490997 60.893074,424.665009 46.755302,417.272980 
      C37.971622,412.680389 29.479027,407.527588 20.662928,403.001953 
      C16.714539,400.975067 12.145232,400.882416 8.640627,404.039825 
      C5.010512,407.310394 5.053713,412.104370 8.486711,416.911530 
      C10.141556,419.228760 12.408335,421.154816 14.580169,423.049133 
      C24.362303,431.581390 33.818321,440.552460 44.123360,448.405487 
      C60.433422,460.834717 77.000252,472.989197 94.064697,484.349274 
      C112.036537,496.313385 130.413239,507.749237 149.188507,518.401672 
      C164.588074,527.138855 180.593567,534.920166 196.762161,542.161316 
      C216.426636,550.968079 236.296112,559.442017 256.525482,566.832031 
      C283.917847,576.838867 311.765228,585.658020 340.484619,591.135803 
      C367.965668,596.377319 395.476227,601.562317 423.122955,605.798645 
      C438.839142,608.206787 454.838593,608.913696 470.740112,609.916443 
      C482.642456,610.666992 494.591797,610.908325 506.520935,610.927124 
      C516.949158,610.943604 527.380127,610.380310 537.806458,609.982178 
      C543.907776,609.749146 550.018921,609.521545 556.096680,608.971558 
      C573.414795,607.404419 590.757324,605.998596 608.015442,603.910767 
      C623.710510,602.012085 639.520996,600.241394 654.901245,596.745544 
      C683.020447,590.354126 711.080139,583.488037 738.758850,575.426575 
      C772.088623,565.719238 804.550476,553.202576 835.498779,537.491394 
      C859.524719,525.294373 882.584778,511.159790 905.804932,497.431183 
      C913.062866,493.140045 919.874268,487.837799 926.113525,482.147003 
      C933.234070,475.652496 932.970764,466.203735 924.533264,460.087128 
      C917.548035,455.023285 910.529297,457.105652 903.230957,459.879089 
      C878.552307,469.257233 853.753052,478.318024 828.309814,487.930206 
      M252.154144,297.307007 
      C255.259811,301.194427 258.116028,305.318237 261.526031,308.917328 
      C267.555573,315.281189 274.396210,315.893585 281.743866,311.117889 
      C288.015839,307.041382 294.231842,302.878571 300.464508,298.741791 
      C309.980408,292.425873 311.635925,287.408234 306.102203,277.461823 
      C295.613739,258.609619 292.085419,238.306885 291.966583,217.064590 
      C291.746796,177.771225 291.828857,138.464645 290.695526,99.195023 
      C290.361755,87.630531 287.331360,75.866608 283.829529,64.730965 
      C277.380310,44.222755 264.224701,28.901133 244.890366,18.871466 
      C227.213715,9.701715 208.158676,6.243600 188.703445,5.177685 
      C166.748550,3.974816 144.899277,5.488430 123.428864,11.031274 
      C106.469055,15.409653 89.861725,20.500635 74.678162,29.532223 
      C70.513954,32.009201 68.373848,35.698761 68.176170,40.120743 
      C67.797012,48.602009 67.838737,57.118984 68.124855,65.607025 
      C68.308479,71.054359 71.232170,73.638451 76.681053,72.846642 
      C81.218803,72.187225 85.696335,70.617325 90.002937,68.942558 
      C122.273293,56.393242 155.129639,47.625305 190.151123,54.062023 
      C212.190140,58.112656 226.799545,67.062088 232.120132,91.336754 
      C234.062256,100.197464 235.161865,109.310150 235.810165,118.367691 
      C236.423737,126.939827 235.942017,135.590347 235.942017,144.732315 
      C232.966843,144.167221 230.728027,143.670059 228.466110,143.323776 
      C210.292068,140.541351 192.193069,136.877899 173.914124,135.282135 
      C155.861450,133.706146 137.689697,134.992828 120.040283,140.001648 
      C93.026695,147.667938 70.613464,161.805832 57.869408,187.645676 
      C44.327255,215.103745 44.276279,243.598511 56.050339,271.607819 
      C64.150871,290.878143 78.676407,304.449829 98.123299,312.634399 
      C117.767128,320.901794 138.204620,321.320435 158.887466,319.048340 
      C187.059464,315.953552 210.926804,303.870361 230.730698,283.705994 
      C233.510193,280.875916 235.862793,277.626587 238.890549,273.999176 
      C243.803604,282.606018 247.815842,289.634766 252.154144,297.307007 
      M933.334351,156.141830 
      C911.239441,148.426025 889.219849,140.484177 867.021057,133.079926 
      C853.882446,128.697678 840.913574,124.158752 829.388489,116.250458 
      C819.660583,109.575432 814.586426,99.872269 815.300842,88.603294 
      C816.385681,71.492455 822.064331,61.831322 840.347900,55.957428 
      C867.649658,47.186256 895.194519,49.633179 922.336426,57.365635 
      C931.724182,60.040100 940.647217,64.307007 949.939880,67.368858 
      C955.309326,69.138084 960.102539,66.696175 960.451416,61.408600 
      C961.049561,52.342781 961.042542,43.101173 959.943604,34.097649 
      C958.855469,25.181606 950.727112,21.550421 943.721558,18.567200 
      C921.964050,9.302057 898.895691,4.968425 875.386353,4.241138 
      C863.372986,3.869493 851.140137,5.185410 839.255554,7.204739 
      C815.727844,11.202404 795.367615,21.600847 778.958130,39.435799 
      C761.887146,57.989624 755.744690,80.006332 759.323364,104.299805 
      C763.374084,131.797028 778.572937,152.217758 803.074524,165.533066 
      C822.846252,176.277939 844.781311,180.992020 865.902527,187.970673 
      C879.771973,192.553253 894.057373,196.054764 906.346497,204.552505 
      C921.550110,215.065567 925.912598,236.549728 915.674988,251.888458 
      C908.003418,263.382629 896.597961,269.110413 883.514404,271.974579 
      C868.794495,275.197021 853.997986,275.567841 838.954895,274.183899 
      C824.647827,272.867645 810.628418,270.588135 797.027222,266.070251 
      C787.410095,262.875793 778.034424,258.953491 768.414551,255.768158 
      C759.918152,252.954849 755.132996,256.596130 755.015259,265.449554 
      C754.948730,270.448608 755.289673,275.469421 754.941406,280.445038 
      C754.175049,291.394867 759.380432,298.642792 768.903931,302.857819 
      C776.772095,306.340179 784.808777,309.632202 793.053772,312.039032 
      C824.655396,321.264099 856.765259,325.161774 889.463379,318.951599 
      C916.327698,313.849365 940.763733,304.009735 958.645203,281.907745 
      C975.482544,261.096222 981.164429,237.388168 976.506226,211.349136 
      C971.944641,185.850159 957.129578,167.830978 933.334351,156.141830 
      M947.500549,382.000000 
      C933.565735,383.042572 919.503540,383.248413 905.729492,385.346710 
      C889.721680,387.785309 873.975342,392.144043 859.294678,399.164612 
      C850.250916,403.489532 841.657654,408.886536 833.309753,414.471252 
      C830.054871,416.648773 827.424744,420.645782 829.736816,425.174072 
      C831.619324,428.861298 835.313721,429.363098 839.023804,428.901001 
      C848.902771,427.670502 858.738403,426.027588 868.641663,425.071198 
      C881.896729,423.791046 895.184631,422.563629 908.485352,422.117950 
      C924.099976,421.594696 939.724792,421.858887 955.042603,425.907410 
      C967.079407,429.088745 973.162842,436.896271 971.940002,448.890686 
      C971.212952,456.022400 970.525696,463.240662 968.825195,470.175934 
      C962.529907,495.850983 953.455383,520.633545 944.009033,545.289673 
      C941.652466,551.440674 939.522827,557.759033 938.178223,564.186584 
      C937.402832,567.893372 941.849060,571.118469 945.412781,569.703247 
      C948.962891,568.293396 952.585815,566.443115 955.407043,563.923950 
      C972.242676,548.890686 985.035889,530.747864 995.021606,510.615753 
      C1003.978699,492.557281 1010.701843,473.685028 1015.036072,453.958282 
      C1018.141174,439.825806 1020.921387,425.551788 1019.799011,411.120972 
      C1018.702332,397.020935 1019.224915,394.136383 1003.815186,389.079407 
      C985.866028,383.189056 967.289246,381.624542 947.500549,382.000000 z'
      />
      <path
        fill='#252F3E'
        opacity='1.000000'
        stroke='none'
        d='M680.501465,15.250127 
      C684.410645,14.385511 687.956299,13.189105 691.530762,13.095948 
      C701.856812,12.826830 712.194702,12.957292 722.527405,13.018481 
      C729.366394,13.058979 732.302856,15.998337 731.909912,22.906883 
      C731.705017,26.508389 730.975098,30.167519 729.899109,33.618832 
      C714.168152,84.078690 698.326233,134.503891 682.537903,184.945892 
      C674.695312,210.002426 666.919189,235.079742 659.091675,260.140991 
      C655.029175,273.147797 650.990112,286.162628 646.810120,299.131836 
      C643.516235,309.352020 638.449768,312.950470 627.660522,312.990875 
      C617.494263,313.028992 607.327576,313.034668 597.161377,312.988922 
      C586.703369,312.941864 581.469116,308.964691 579.000183,298.851044 
      C569.035706,258.033905 559.117371,217.205399 549.258606,176.362595 
      C543.023926,150.533371 536.922852,124.671860 530.766113,98.823814 
      C529.463623,93.355270 528.179993,87.882225 526.121033,82.375244 
      C522.460632,97.640167 518.794434,112.903717 515.140869,128.170303 
      C506.675476,163.543579 498.217102,198.918533 489.754211,234.292389 
      C484.847778,254.800568 479.971375,275.315948 475.017822,295.812714 
      C471.826447,309.018219 466.813507,313.069519 453.351868,312.955200 
      C442.386353,312.862091 431.419830,312.504150 420.461578,312.068390 
      C413.072571,311.774567 409.103699,306.975769 407.060211,300.528320 
      C400.984955,281.359955 395.075684,262.138550 389.179535,242.913940 
      C383.577606,224.648926 378.060913,206.357727 372.530243,188.070923 
      C362.958893,156.424026 353.402008,124.772758 343.846313,93.121132 
      C337.412384,71.809814 330.985718,50.496288 324.573212,29.178513 
      C324.047028,27.429308 323.539093,25.660397 323.220367,23.865534 
      C322.051300,17.282156 325.433685,13.075060 332.091553,13.027612 
      C343.757355,12.944475 355.426392,12.867256 367.089752,13.055900 
      C374.666504,13.178445 380.771393,15.987681 382.983459,24.011843 
      C386.601868,37.137676 390.263184,50.254951 393.627655,63.446926 
      C404.835571,107.392838 415.909973,151.372803 427.055847,195.334564 
      C431.341644,212.238663 435.677094,229.130203 440.011169,246.022018 
      C440.243958,246.929214 440.674042,247.785767 441.451294,249.808151 
      C446.516541,228.229904 451.281464,207.794434 456.113434,187.374802 
      C466.284027,144.394394 476.482391,101.420540 486.686493,58.448063 
      C489.256256,47.626003 491.880463,36.816826 494.498871,26.006384 
      C496.305786,18.546453 500.937653,13.689869 508.650604,13.428090 
      C521.282837,12.999352 533.957275,12.971550 546.583008,13.504846 
      C554.379517,13.834158 558.391541,19.147026 560.137085,26.580339 
      C570.006897,68.609634 579.987488,110.612930 589.943848,152.621887 
      C597.602295,184.935303 605.280273,217.244110 612.955200,249.553635 
      C613.029968,249.868469 613.181091,250.165161 613.698059,251.531540 
      C614.662354,248.728683 615.497681,246.752808 616.026123,244.697998 
      C628.438904,196.432526 640.783020,148.149414 653.219971,99.890198 
      C659.064331,77.212364 664.961853,54.546726 671.086304,31.943556 
      C672.746765,25.815344 673.726868,19.051722 680.501465,15.250127 z'
      />
      <path
        fill='#FF9900'
        opacity='1.000000'
        stroke='none'
        d='M828.654846,487.715149 
      C853.753052,478.318024 878.552307,469.257233 903.230957,459.879089 
      C910.529297,457.105652 917.548035,455.023285 924.533264,460.087128 
      C932.970764,466.203735 933.234070,475.652496 926.113525,482.147003 
      C919.874268,487.837799 913.062866,493.140045 905.804932,497.431183 
      C882.584778,511.159790 859.524719,525.294373 835.498779,537.491394 
      C804.550476,553.202576 772.088623,565.719238 738.758850,575.426575 
      C711.080139,583.488037 683.020447,590.354126 654.901245,596.745544 
      C639.520996,600.241394 623.710510,602.012085 608.015442,603.910767 
      C590.757324,605.998596 573.414795,607.404419 556.096680,608.971558 
      C550.018921,609.521545 543.907776,609.749146 537.806458,609.982178 
      C527.380127,610.380310 516.949158,610.943604 506.520935,610.927124 
      C494.591797,610.908325 482.642456,610.666992 470.740112,609.916443 
      C454.838593,608.913696 438.839142,608.206787 423.122955,605.798645 
      C395.476227,601.562317 367.965668,596.377319 340.484619,591.135803 
      C311.765228,585.658020 283.917847,576.838867 256.525482,566.832031 
      C236.296112,559.442017 216.426636,550.968079 196.762161,542.161316 
      C180.593567,534.920166 164.588074,527.138855 149.188507,518.401672 
      C130.413239,507.749237 112.036537,496.313385 94.064697,484.349274 
      C77.000252,472.989197 60.433422,460.834717 44.123360,448.405487 
      C33.818321,440.552460 24.362303,431.581390 14.580169,423.049133 
      C12.408335,421.154816 10.141556,419.228760 8.486711,416.911530 
      C5.053713,412.104370 5.010512,407.310394 8.640627,404.039825 
      C12.145232,400.882416 16.714539,400.975067 20.662928,403.001953 
      C29.479027,407.527588 37.971622,412.680389 46.755302,417.272980 
      C60.893074,424.665009 74.859825,432.490997 89.435982,438.914795 
      C117.024902,451.073364 144.726791,463.070953 172.889908,473.801727 
      C196.161255,482.668610 219.942383,490.398010 243.905014,497.195190 
      C269.149933,504.356018 294.803497,510.145660 320.421295,515.898560 
      C337.867645,519.816345 355.513580,522.916504 373.158081,525.854919 
      C384.443115,527.734314 395.879578,528.731140 407.263672,529.982422 
      C423.062042,531.718872 438.868256,533.391724 454.685303,534.947205 
      C460.425629,535.511719 466.203491,535.870911 471.969971,535.962891 
      C498.064301,536.379089 524.165100,537.105469 550.254761,536.843140 
      C567.219055,536.672546 584.184570,535.209045 601.118896,533.921997 
      C614.025757,532.941101 626.933472,531.680908 639.752380,529.906616 
      C656.203430,527.629578 672.671082,525.235352 688.943542,521.957825 
      C718.543701,515.995972 748.111938,509.794769 777.483887,502.811829 
      C794.635742,498.734131 811.381409,492.947845 828.654846,487.715149 z'
      />
      <path
        fill='#252F3E'
        opacity='1.000000'
        stroke='none'
        d='M251.991119,296.985291 
      C247.815842,289.634766 243.803604,282.606018 238.890549,273.999176 
      C235.862793,277.626587 233.510193,280.875916 230.730698,283.705994 
      C210.926804,303.870361 187.059464,315.953552 158.887466,319.048340 
      C138.204620,321.320435 117.767128,320.901794 98.123299,312.634399 
      C78.676407,304.449829 64.150871,290.878143 56.050339,271.607819 
      C44.276279,243.598511 44.327255,215.103745 57.869408,187.645676 
      C70.613464,161.805832 93.026695,147.667938 120.040283,140.001648 
      C137.689697,134.992828 155.861450,133.706146 173.914124,135.282135 
      C192.193069,136.877899 210.292068,140.541351 228.466110,143.323776 
      C230.728027,143.670059 232.966843,144.167221 235.942017,144.732315 
      C235.942017,135.590347 236.423737,126.939827 235.810165,118.367691 
      C235.161865,109.310150 234.062256,100.197464 232.120132,91.336754 
      C226.799545,67.062088 212.190140,58.112656 190.151123,54.062023 
      C155.129639,47.625305 122.273293,56.393242 90.002937,68.942558 
      C85.696335,70.617325 81.218803,72.187225 76.681053,72.846642 
      C71.232170,73.638451 68.308479,71.054359 68.124855,65.607025 
      C67.838737,57.118984 67.797012,48.602009 68.176170,40.120743 
      C68.373848,35.698761 70.513954,32.009201 74.678162,29.532223 
      C89.861725,20.500635 106.469055,15.409653 123.428864,11.031274 
      C144.899277,5.488430 166.748550,3.974816 188.703445,5.177685 
      C208.158676,6.243600 227.213715,9.701715 244.890366,18.871466 
      C264.224701,28.901133 277.380310,44.222755 283.829529,64.730965 
      C287.331360,75.866608 290.361755,87.630531 290.695526,99.195023 
      C291.828857,138.464645 291.746796,177.771225 291.966583,217.064590 
      C292.085419,238.306885 295.613739,258.609619 306.102203,277.461823 
      C311.635925,287.408234 309.980408,292.425873 300.464508,298.741791 
      C294.231842,302.878571 288.015839,307.041382 281.743866,311.117889 
      C274.396210,315.893585 267.555573,315.281189 261.526031,308.917328 
      C258.116028,305.318237 255.259811,301.194427 251.991119,296.985291 
      M184.350052,270.949707 
      C191.181870,267.981018 198.430435,265.703949 204.754868,261.893188 
      C216.323181,254.922684 225.602112,245.576782 230.756714,232.635910 
      C236.785690,217.499863 236.151703,201.685303 235.818802,185.905136 
      C235.797607,184.900467 233.968399,183.322937 232.745193,183.044418 
      C205.554398,176.853165 178.138809,173.287735 150.333527,178.119797 
      C136.136124,180.587051 123.569786,186.626938 115.572418,199.238220 
      C107.090286,212.613937 106.217056,227.498764 109.463104,242.559387 
      C112.680695,257.488037 121.554329,268.084137 136.398865,272.561523 
      C152.168243,277.317841 167.951096,275.513794 184.350052,270.949707 z'
      />
      <path
        fill='#252F3E'
        opacity='1.000000'
        stroke='none'
        d='M933.662781,156.318085 
      C957.129578,167.830978 971.944641,185.850159 976.506226,211.349136 
      C981.164429,237.388168 975.482544,261.096222 958.645203,281.907745 
      C940.763733,304.009735 916.327698,313.849365 889.463379,318.951599 
      C856.765259,325.161774 824.655396,321.264099 793.053772,312.039032 
      C784.808777,309.632202 776.772095,306.340179 768.903931,302.857819 
      C759.380432,298.642792 754.175049,291.394867 754.941406,280.445038 
      C755.289673,275.469421 754.948730,270.448608 755.015259,265.449554 
      C755.132996,256.596130 759.918152,252.954849 768.414551,255.768158 
      C778.034424,258.953491 787.410095,262.875793 797.027222,266.070251 
      C810.628418,270.588135 824.647827,272.867645 838.954895,274.183899 
      C853.997986,275.567841 868.794495,275.197021 883.514404,271.974579 
      C896.597961,269.110413 908.003418,263.382629 915.674988,251.888458 
      C925.912598,236.549728 921.550110,215.065567 906.346497,204.552505 
      C894.057373,196.054764 879.771973,192.553253 865.902527,187.970673 
      C844.781311,180.992020 822.846252,176.277939 803.074524,165.533066 
      C778.572937,152.217758 763.374084,131.797028 759.323364,104.299805 
      C755.744690,80.006332 761.887146,57.989624 778.958130,39.435799 
      C795.367615,21.600847 815.727844,11.202404 839.255554,7.204739 
      C851.140137,5.185410 863.372986,3.869493 875.386353,4.241138 
      C898.895691,4.968425 921.964050,9.302057 943.721558,18.567200 
      C950.727112,21.550421 958.855469,25.181606 959.943604,34.097649 
      C961.042542,43.101173 961.049561,52.342781 960.451416,61.408600 
      C960.102539,66.696175 955.309326,69.138084 949.939880,67.368858 
      C940.647217,64.307007 931.724182,60.040100 922.336426,57.365635 
      C895.194519,49.633179 867.649658,47.186256 840.347900,55.957428 
      C822.064331,61.831322 816.385681,71.492455 815.300842,88.603294 
      C814.586426,99.872269 819.660583,109.575432 829.388489,116.250458 
      C840.913574,124.158752 853.882446,128.697678 867.021057,133.079926 
      C889.219849,140.484177 911.239441,148.426025 933.662781,156.318085 z'
      />
      <path
        fill='#FF9900'
        opacity='1.000000'
        stroke='none'
        d='M948.000244,382.000000 
      C967.289246,381.624542 985.866028,383.189056 1003.815186,389.079407 
      C1019.224915,394.136383 1018.702332,397.020935 1019.799011,411.120972 
      C1020.921387,425.551788 1018.141174,439.825806 1015.036072,453.958282 
      C1010.701843,473.685028 1003.978699,492.557281 995.021606,510.615753 
      C985.035889,530.747864 972.242676,548.890686 955.407043,563.923950 
      C952.585815,566.443115 948.962891,568.293396 945.412781,569.703247 
      C941.849060,571.118469 937.402832,567.893372 938.178223,564.186584 
      C939.522827,557.759033 941.652466,551.440674 944.009033,545.289673 
      C953.455383,520.633545 962.529907,495.850983 968.825195,470.175934 
      C970.525696,463.240662 971.212952,456.022400 971.940002,448.890686 
      C973.162842,436.896271 967.079407,429.088745 955.042603,425.907410 
      C939.724792,421.858887 924.099976,421.594696 908.485352,422.117950 
      C895.184631,422.563629 881.896729,423.791046 868.641663,425.071198 
      C858.738403,426.027588 848.902771,427.670502 839.023804,428.901001 
      C835.313721,429.363098 831.619324,428.861298 829.736816,425.174072 
      C827.424744,420.645782 830.054871,416.648773 833.309753,414.471252 
      C841.657654,408.886536 850.250916,403.489532 859.294678,399.164612 
      C873.975342,392.144043 889.721680,387.785309 905.729492,385.346710 
      C919.503540,383.248413 933.565735,383.042572 948.000244,382.000000 z'
      />
      <path
        fill='transparent'
        opacity='1.000000'
        stroke='none'
        d='M183.947510,271.013794 
      C167.951096,275.513794 152.168243,277.317841 136.398865,272.561523 
      C121.554329,268.084137 112.680695,257.488037 109.463104,242.559387 
      C106.217056,227.498764 107.090286,212.613937 115.572418,199.238220 
      C123.569786,186.626938 136.136124,180.587051 150.333527,178.119797 
      C178.138809,173.287735 205.554398,176.853165 232.745193,183.044418 
      C233.968399,183.322937 235.797607,184.900467 235.818802,185.905136 
      C236.151703,201.685303 236.785690,217.499863 230.756714,232.635910 
      C225.602112,245.576782 216.323181,254.922684 204.754868,261.893188 
      C198.430435,265.703949 191.181870,267.981018 183.947510,271.013794 z'
      />
    </ModAwsIcon>
  )
}

export default AwsIcon
