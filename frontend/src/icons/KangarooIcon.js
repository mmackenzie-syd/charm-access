import React from "react";

function KangarooIcon(props) {
    const fill = props.fill || '#111';
    const width = props.width || '2.4rem';
    const height = props.height || '2.4rem';
    const className = props.className || '';
    return (
        <span className={className}>
             <svg version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width={width}
                  height={height}
                  style={{fill: fill}}
                  viewBox="0 0 1280.000000 789.000000"
                  preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,789.000000) scale(0.100000,-0.100000)"
                       stroke="none">
                    <path d="M6820 7884 c-14 -2 -59 -9 -100 -15 -426 -61 -897 -309 -1385 -728
                    -290 -249 -529 -495 -986 -1016 -305 -348 -828 -877 -1069 -1083 -642 -546
                    -1160 -837 -1654 -929 -136 -25 -391 -23 -521 5 -142 30 -215 55 -340 117
                    -310 153 -565 446 -732 840 l-34 80 5 -100 c12 -229 106 -457 290 -702 230
                    -307 606 -596 891 -686 388 -122 828 -90 1425 106 294 96 789 350 1778 914
                    227 129 416 233 420 231 5 -2 89 -88 188 -193 583 -617 548 -585 824 -768 182
                    -121 475 -300 575 -350 39 -19 106 -42 149 -51 44 -8 85 -21 92 -28 7 -7 20
                    -42 28 -78 37 -146 225 -560 320 -704 53 -80 95 -178 176 -406 68 -194 218
                    -673 320 -1020 109 -374 170 -525 242 -599 63 -64 69 -66 473 -120 165 -23
                    341 -50 390 -61 349 -76 1022 -194 1665 -291 117 -18 180 -34 330 -86 102 -36
                    243 -85 313 -109 205 -71 238 -69 253 14 11 66 26 79 106 92 56 10 87 10 140
                    0 68 -12 88 -9 88 13 0 14 -268 159 -393 211 -113 48 -138 52 -232 31 -97 -22
                    -130 -18 -325 39 -170 49 -844 259 -1255 391 -577 185 -676 215 -811 249 -169
                    41 -256 79 -319 137 -55 51 -80 96 -100 181 -52 227 -100 789 -126 1474 -14
                    387 -15 383 129 612 38 59 85 142 105 185 67 143 210 254 322 250 117 -3 386
                    -110 440 -175 24 -29 27 -38 22 -83 -3 -29 -37 -129 -81 -238 -42 -103 -83
                    -216 -91 -250 -7 -34 -21 -147 -30 -252 -27 -336 -51 -443 -107 -490 -26 -22
                    -39 -26 -67 -21 -39 6 -76 30 -103 67 -25 34 -48 133 -48 206 0 68 -11 84 -48
                    64 -48 -26 -71 -158 -41 -249 18 -56 55 -125 86 -162 56 -67 183 -96 287 -66
                    104 30 145 80 469 568 229 344 395 574 475 656 66 68 182 122 461 217 124 41
                    233 83 244 92 10 10 61 103 112 208 103 209 148 271 225 310 162 82 501 407
                    650 623 25 37 56 73 70 81 24 13 32 10 123 -34 156 -77 213 -74 366 19 l85 51
                    140 7 c78 4 181 16 230 26 l89 20 31 -34 c39 -42 83 -51 168 -34 124 24 168
                    65 168 157 0 127 -120 235 -534 483 -315 188 -326 195 -501 325 -185 137 -204
                    149 -282 171 -72 20 -82 16 -114 -47 -10 -21 -24 -41 -30 -44 -15 -10 -48 24
                    -137 135 -144 180 -374 400 -470 449 -40 21 -112 35 -226 46 -93 9 -148 27
                    -210 68 -88 58 -126 55 -126 -12 0 -46 26 -97 110 -216 145 -206 275 -299 460
                    -330 52 -9 118 -27 147 -40 57 -26 129 -87 156 -134 l18 -30 -43 -22 c-191
                    -95 -326 -179 -406 -252 -119 -109 -127 -112 -247 -110 -80 1 -125 8 -225 36
                    -337 94 -473 137 -492 153 -31 28 -179 208 -399 484 -107 135 -251 310 -319
                    390 -165 194 -485 512 -641 637 -350 280 -686 444 -1039 509 -82 14 -378 27
                    -430 18z"/>
                  </g>
             </svg>
        </span>
    );
}

export default KangarooIcon;
