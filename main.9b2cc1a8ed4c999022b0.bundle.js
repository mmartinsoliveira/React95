(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1186:function(module,exports){},1187:function(module,exports){},1188:function(module,exports){},1189:function(module,exports){},1246:function(module,exports,__webpack_require__){"use strict";__webpack_require__(53).addons.setConfig({refs:{}})},1249:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ThemePanel",(function(){return register_ThemePanel}));__webpack_require__(1220),__webpack_require__(550),__webpack_require__(1239),__webpack_require__(552),__webpack_require__(553),__webpack_require__(1242);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),public_api=__webpack_require__(53),dist=__webpack_require__(21),xstyled_styled_components_es=__webpack_require__(267),xstyled_system_es=__webpack_require__(15),generateShadows=(__webpack_require__(30),__webpack_require__(1244),function generateShadows(colors){return{out:"inset 0.5px 0.5px 0px 0.5px ".concat(colors.borderLightest,",\n          inset 0 0 0 1px ").concat(colors.borderDark,",\n          1px 0px 0 0px ").concat(colors.borderDarkest,",\n          0px 1px 0 0px ").concat(colors.borderDarkest,",\n          1px 1px 0 0px ").concat(colors.borderDarkest),in:"inset 0px 0px 0px 0px,\n        inset 1px 1px 0px 0px ".concat(colors.borderDark,",\n        0.5px 0.5px 0px 0.5px ").concat(colors.borderLightest),input:"inset -1px -1px 0 0 ".concat(colors.material,",\n            inset 1px 1px 0 0 ").concat(colors.borderDarkest,",\n            0.5px 0.5px 0 0.5px ").concat(colors.borderLightest)}}),baseTheme={space:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],borderWidths:[0,1],borderStyles:["none","solid"],zIndices:{modal:1,tooltip:2,taskbar:2}},colors={anchor:"#000e7a",anchorVisited:"#440381",borderDark:"#868a8e",borderDarkest:"#000000",borderLight:"#d2d2d2",borderLighter:"#e6e6e6",borderLightest:"#ffffff",canvas:"#000000",canvasText:"#ffffff",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",headerBackground:"#000e7a",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",material:"#c3c7cb",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#868a8e",materialTextDisabledShadow:"#d2d2d2",materialTextInvert:"#ffffff",progress:"#000e7a",inputBackground:"#ffffff",inputBackgroundDisabled:"#d2d2d2",tooltip:"#fefbcc"},counterStrike_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#2c3125",borderDarkest:"#0a0a0a",borderLight:"#5d6d54",borderLighter:"#a4b39c",borderLightest:"#ccd5c8",canvas:"#3e4639",canvasText:"#f6fbf5",canvasTextDisabled:"#2c3125",canvasTextDisabledShadow:"#788475",canvasTextInvert:"#f6fbf5",headerBackground:"#4b5844",headerNotActiveBackground:"#4b5844",headerNotActiveText:"#74806e",headerText:"#fefefe",material:"#4b5844",materialDark:"#2f3428",materialText:"#f6fbf5",materialTextDisabled:"#2c3125",materialTextDisabledShadow:"#788475",materialTextInvert:"#fefefe",progress:"#978830",inputBackground:"#4b5844",inputBackgroundDisabled:"#2c3125",tooltip:"#fefbcc"},bee_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#846d06",borderDarkest:"#0C1618",borderLight:"#e7c221",borderLighter:"#f1dd84",borderLightest:"#f7ecbb",canvas:"#0C1618",canvasText:"#ffffff",canvasTextDisabled:"#846d06",canvasTextDisabledShadow:"#f8df6e",canvasTextInvert:"#ffffff",headerBackground:"#0C1618",headerNotActiveBackground:"#7F7B82",headerNotActiveText:"#e5bd03",headerText:"#f8df6e",material:"#e5bd03",materialDark:"#7F7B82",materialText:"#0C1618",materialTextDisabled:"#846d06",materialTextDisabledShadow:"#f8df6e",materialTextInvert:"#ffffff",progress:"#0C1618",inputBackground:"#ffffff",inputBackgroundDisabled:"#e7c221",tooltip:"#fefbcc"},pamelaAnderson_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#7e0541",borderDarkest:"#000000",borderLight:"#ff308f",borderLighter:"#ff8dc1",borderLightest:"#fec0dc",canvas:"#000000",canvasText:"#F5CCE8",canvasTextDisabled:"#7e0541",canvasTextDisabledShadow:"#ff7ebf",canvasTextInvert:"#F1E4E8",headerBackground:"#FF8CC6",headerNotActiveBackground:"#95818D",headerNotActiveText:"#ff0080",headerText:"#000000",material:"#ff0080",materialDark:"#95818D",materialText:"#000000",materialTextDisabled:"#7e0541",materialTextDisabledShadow:"#ff7ebf",materialTextInvert:"#F1E4E8",progress:"#004FFF",inputBackground:"#fec0dc",inputBackgroundDisabled:"#ff308f",tooltip:"#fefbcc"},azureOrange_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#05427f",borderDarkest:"#000000",borderLight:"#2b8fff",borderLighter:"#8ac1ff",borderLightest:"#bedcff",canvas:"#000000",canvasText:"#ffffff",canvasTextDisabled:"#05427f",canvasTextDisabledShadow:"#7ebfff",canvasTextInvert:"#000000",headerBackground:"#171123",headerNotActiveBackground:"#4E6766",headerNotActiveText:"#0180ff",headerText:"#ffffff",material:"#0180ff",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#05427f",materialTextDisabledShadow:"#7ebfff",materialTextInvert:"#ffffff",progress:"#F46036",inputBackground:"#ffffff",inputBackgroundDisabled:"#2b8fff",tooltip:"#fefbcc"},olive_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#4f4c02",borderDarkest:"#000000",borderLight:"#9d9d11",borderLighter:"#ecec58",borderLightest:"#f4f4a3",canvas:"#000000",canvasText:"#ffffff",canvasTextDisabled:"#4f4c02",canvasTextDisabledShadow:"#fcfd3e",canvasTextInvert:"#000000",headerBackground:"#F3DE2C",headerNotActiveBackground:"#4f4c02",headerNotActiveText:"#807f00",headerText:"#000000",material:"#807f00",materialDark:"#4f4c02",materialText:"#000000",materialTextDisabled:"#4f4c02",materialTextDisabledShadow:"#fcfd3e",materialTextInvert:"#000000",progress:"#F3DE2C",inputBackground:"#ffffff",inputBackgroundDisabled:"#9d9d11",tooltip:"#fefbcc"},vaporTeal_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#00706f",borderDarkest:"#000000",borderLight:"#2fcecd",borderLighter:"#2fcecd",borderLightest:"#58ffff",canvas:"#000000",canvasText:"#98DFEA",canvasTextDisabled:"#00706f",canvasTextDisabledShadow:"#58ffff",canvasTextInvert:"#000000",headerBackground:"#246A73",headerNotActiveBackground:"#2fcecd",headerNotActiveText:"#246A73",headerText:"#58ffff",material:"#01a8a8",materialDark:"#246A73",materialText:"#000000",materialTextDisabled:"#00706f",materialTextDisabledShadow:"#58ffff",materialTextInvert:"#000000",progress:"#FF99C8",inputBackground:"#ffffff",inputBackgroundDisabled:"#2fcecd",tooltip:"#fefbcc"},matrix_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#282828",borderDarkest:"#000000",borderLight:"#656565",borderLighter:"#aaaaaa",borderLightest:"#d0d0d0",canvas:"#000000",canvasText:"#c0c0c0",canvasTextDisabled:"#282828",canvasTextDisabledShadow:"#ff0000",canvasTextInvert:"#ffffff",headerBackground:"#000000",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#535353",headerText:"#a7a7a7",material:"#535353",materialDark:"#282828",materialText:"#35FF69",materialTextDisabled:"#282828",materialTextDisabledShadow:"#a7a7a7",materialTextInvert:"#ffffff",progress:"#000000",inputBackground:"#ffffff",inputBackgroundDisabled:"#656565",tooltip:"#fefbcc"},vermillion_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#7f2120",borderDarkest:"#130405",borderLight:"#d25051",borderLighter:"#e69e9f",borderLightest:"#f1c9ca",canvas:"#130405",canvasText:"#EFE9F4",canvasTextDisabled:"#7f2120",canvasTextDisabledShadow:"#e59697",canvasTextInvert:"#EFE9F4",headerBackground:"#000103",headerNotActiveBackground:"#7f2120",headerNotActiveText:"#EFE9F4",headerText:"#EFE9F4",material:"#cf4545",materialDark:"#7f2120",materialText:"#130405",materialTextDisabled:"#7f2120",materialTextDisabledShadow:"#e59697",materialTextInvert:"#EFE9F4",progress:"#000103",inputBackground:"#ffffff",inputBackgroundDisabled:"#d25051",tooltip:"#fefbcc"},tooSexy_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#5a0302",borderDarkest:"#000000",borderLight:"#c81d19",borderLighter:"#ed7673",borderLightest:"#f5b3b1",canvas:"#000000",canvasText:"#FFF1D0",canvasTextDisabled:"#5a0302",canvasTextDisabledShadow:"#FFF1D0",canvasTextInvert:"#ffffff",headerBackground:"#161B33",headerNotActiveBackground:"#5a0302",headerNotActiveText:"#B80100",headerText:"#FFF1D0",material:"#B80100",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#5a0302",materialTextDisabledShadow:"#fe5757",materialTextInvert:"#ffffff",progress:"#474973",inputBackground:"#ffffff",inputBackgroundDisabled:"#c81d19",tooltip:"#fefbcc"},ninjaTurtles_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#017401",borderDarkest:"#000000",borderLight:"#1dbc1b",borderLighter:"#72ea71",borderLightest:"#b1f3b0",canvas:"#000000",canvasText:"#ffffff",canvasTextDisabled:"#017401",canvasTextDisabledShadow:"#55fd55",canvasTextInvert:"#000000",headerBackground:"#FF1D15",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#000000",headerText:"#ffffff",material:"#00a800",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#017401",materialTextDisabledShadow:"#55fd55",materialTextInvert:"#000000",progress:"#FF1D15",inputBackground:"#ffffff",inputBackgroundDisabled:"#e5e5e5",tooltip:"#fefbcc"},tokyoDark_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#1f2223",borderDarkest:"#070809",borderLight:"#5e696a",borderLighter:"#a4aeae",borderLightest:"#ccd2d2",canvas:"#2f3435",canvasText:"#F4F4ED",canvasTextDisabled:"#1f2223",canvasTextDisabledShadow:"#93a0a1",canvasTextInvert:"#ffffff",headerBackground:"#1f2223",headerNotActiveBackground:"#5e696a",headerNotActiveText:"#F4F4ED",headerText:"#F4F4ED",material:"#465051",materialDark:"#1f2223",materialText:"#F4F4ED",materialTextDisabled:"#1f2223",materialTextDisabledShadow:"#93a0a1",materialTextInvert:"#ffffff",progress:"#F61067",inputBackground:"#ffffff",inputBackgroundDisabled:"#5e696a",tooltip:"#fefbcc"},molecule_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#993845",borderDarkest:"#4b4d4e",borderLight:"#dfe0e3",borderLighter:"#dfe0e3",borderLightest:"#d79099",canvasText:"#f1f5f6",canvas:"#020102",canvasTextDisabled:"#993845",canvasTextDisabledShadow:"#d79099",canvasTextInvert:"#f1f5f6",headerBackground:"#a03d49",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#c2c1c2",headerText:"#f1f5f6",material:"#c2c1c2",materialDark:"#9a9e9c",materialText:"#020102",materialTextDisabled:"#993845",materialTextDisabledShadow:"#d79099",materialTextInvert:"#f1f5f6",progress:"#a03d49",inputBackground:"#ffffff",inputBackgroundDisabled:"#dfe0e3",tooltip:"#fefbcc"},travel_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#695f50",borderDarkest:"#28251e",borderLight:"#9d8f80",borderLighter:"#c9c1b9",borderLightest:"#e1dcd8",canvas:"#28251e",canvasText:"#d8d0c8",canvasTextDisabled:"#695f50",canvasTextDisabledShadow:"#baae9f",canvasTextInvert:"#ffffff",headerBackground:"#404878",headerNotActiveBackground:"#605848",headerNotActiveText:"#908070",headerText:"#d8d0c8",material:"#908070",materialDark:"#9a9e9c",materialText:"#28251e",materialTextDisabled:"#695f50",materialTextDisabledShadow:"#baae9f",materialTextInvert:"#ffffff",progress:"#48604f",inputBackground:"#ffffff",inputBackgroundDisabled:"#9d8f80",tooltip:"#fefbcc"},theSixtiesUSA_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#6c1f71",borderDarkest:"#010001",borderLight:"#d982de",borderLighter:"#eabaec",borderLightest:"#f3d9f4",canvas:"#010001",canvasText:"#ffffff",canvasTextDisabled:"#6c1f71",canvasTextDisabledShadow:"#df9be7",canvasTextInvert:"#010001",headerBackground:"#050080",headerNotActiveBackground:"#a130a9",headerNotActiveText:"#df9be7",headerText:"#ffffff",material:"#d067d7",materialDark:"#9a9e9c",materialText:"#010001",materialTextDisabled:"#6c1f71",materialTextDisabledShadow:"#df9be7",materialTextInvert:"#ffffff",progress:"#0f0",inputBackground:"#ffffff",inputBackgroundDisabled:"#d982de",tooltip:"#fefbcc"},candy_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#d1579e",borderDarkest:"#44132f",borderLight:"#f1acd5",borderLighter:"#f7d1e7",borderLightest:"#fae5f1",canvas:"#EFF1F3",canvasText:"#000000",canvasTextDisabled:"#d1579e",canvasTextDisabledShadow:"#EFF1F3",canvasTextInvert:"#EFF1F3",headerBackground:"#87255B",headerNotActiveBackground:"#a08796",headerNotActiveText:"#EBD2BE",headerText:"#EFF1F3",material:"#E5A4CB",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#d1579e",materialTextDisabledShadow:"#EFF1F3",materialTextInvert:"#EFF1F3",progress:"#256EFF",inputBackground:"#ffffff",inputBackgroundDisabled:"#f1acd5",tooltip:"#fefbcc"},modernDark_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#121317",borderDarkest:"#000000",borderLight:"#31323c",borderLighter:"#85879b",borderLightest:"#bbbdc8",canvas:"#000000",canvasText:"#4b4d58",canvasTextDisabled:"#4b4d58",canvasTextDisabledShadow:"#4b4d58",canvasTextInvert:"#202127",headerBackground:"#4b4d58",headerNotActiveBackground:"transparent",headerNotActiveText:"#4b4d58",headerText:"#202127",material:"#202127",materialDark:"#9a9e9c",materialText:"#f88702",materialTextDisabled:"#4b4d58",materialTextDisabledShadow:"#121317",materialTextInvert:"#202127",progress:"#f88702",inputBackground:"#ffffff",inputBackgroundDisabled:"#31323c",tooltip:"#fefbcc"},storm_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLighter:"#ededed",borderLightest:"#f5f5f5",canvas:"#0a0a0a",canvasText:"#ffffff",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",headerBackground:"linear-gradient(to right, #8c0184, #0089ad)",headerNotActiveBackground:"linear-gradient(to right, #7f7f81, transparent)",headerNotActiveText:"#ced0cf",headerText:"#ffffff",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#8c0184",inputBackground:"#ffffff",inputBackgroundDisabled:"#dfdfdf",tooltip:"#fefbcc"},millenium_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#828282",borderDarkest:"black",borderLight:"#e5e5e5",borderLighter:"#f0f0f0",borderLightest:"#f6f6f6",canvas:"black",canvasText:"#ffffff",canvasTextDisabled:"#828282",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",headerBackground:"linear-gradient(to right, #012470, #a5c7e7)",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#d6cfc7",headerText:"#ffffff",material:"#d6cfc7",materialDark:"#9a9e9c",materialText:"black",materialTextDisabled:"#828282",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#00256e",inputBackground:"#ffffff",inputBackgroundDisabled:"#e5e5e5",tooltip:"#fefbcc"},spruce_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#477b5e",borderDarkest:"#001004",borderLight:"#b0d2bb",borderLighter:"#d3e6d9",borderLightest:"#e6f1ea",canvas:"#050608",canvasText:"#fcfff6",canvasTextDisabled:"#3d5367",canvasTextDisabledShadow:"#cdead2",canvasTextInvert:"#fcfff6",headerBackground:"#3d9961",headerNotActiveBackground:"#807f80",headerNotActiveText:"#d4deda",headerText:"#fcfff6",material:"#99c9a8",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3d5367",materialTextDisabledShadow:"#cdead2",materialTextInvert:"#fcfff6",progress:"#3d9961",inputBackground:"#ffffff",inputBackgroundDisabled:"#b0d2bb",tooltip:"#fefbcc"},slate_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#446b7c",borderDarkest:"#000814",borderLight:"#adc8da",borderLighter:"#d1e0ea",borderLightest:"#e5edf3",canvas:"#00010f",canvasText:"#f2ffff",canvasTextDisabled:"#446b7c",canvasTextDisabledShadow:"#c3d9e9",canvasTextInvert:"#f2ffff",headerBackground:"#448199",headerNotActiveBackground:"#807f80",headerNotActiveText:"#c2c1c2",headerText:"#f2ffff",material:"#97b9cb",materialDark:"#9a9e9c",materialText:"#00010f",materialTextDisabled:"#446b7c",materialTextDisabledShadow:"#c3d9e9",materialTextInvert:"#f2ffff",progress:"#448199",inputBackground:"#ffffff",inputBackgroundDisabled:"#adc8da",tooltip:"#fefbcc"},rose_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#8a5b68",borderDarkest:"#26030b",borderLight:"#e5bec8",borderLighter:"#f0dbe0",borderLightest:"#f6ebed",canvas:"#050608",canvasText:"#ffffff",canvasTextDisabled:"#8a5b68",canvasTextDisabledShadow:"#f1d4dc",canvasTextInvert:"#ffffff",headerBackground:"#ab5a71",headerNotActiveBackground:"#a19fa5",headerNotActiveText:"#615f68",headerText:"#ffffff",material:"#d6adb8",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#8a5b68",materialTextDisabledShadow:"#f1d4dc",materialTextInvert:"#ffffff",progress:"#ab5a71",inputBackground:"#ffffff",inputBackgroundDisabled:"#e5bec8",tooltip:"#fefbcc"},rainyDay_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3d5367",borderDarkest:"#16233b",borderLight:"#91abc2",borderLighter:"#c2d0dd",borderLightest:"#dde5ec",canvas:"#050608",canvasText:"#ffffff",canvasTextDisabled:"#3d5367",canvasTextDisabledShadow:"#b7cee5",canvasTextInvert:"#ffffff",headerBackground:"#4b6480",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0d9",headerText:"#ffffff",material:"#7a99b3",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3d5367",materialTextDisabledShadow:"#b7cee5",materialTextInvert:"#ffffff",progress:"#4b6480",inputBackground:"#ffffff",inputBackgroundDisabled:"#91abc2",tooltip:"#fefbcc"},plum_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#7b5f5b",borderDarkest:"#050608",borderLight:"#c3b1aa",borderLighter:"#ddd4d0",borderLightest:"#ece7e5",canvas:"#050608",canvasText:"#dad0c7",canvasTextDisabled:"#7b5f5b",canvasTextDisabledShadow:"#e8dad6",canvasTextInvert:"#e8dad6",headerBackground:"#483f63",headerNotActiveBackground:"#7d5e58",headerNotActiveText:"#e8dad6",headerText:"#ffffff",material:"#ac978f",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#7b5f5b",materialTextDisabledShadow:"#e8dad6",materialTextInvert:"#ffffff",progress:"#483f63",inputBackground:"#ffffff",inputBackgroundDisabled:"#c3b1aa",tooltip:"#fefbcc"},marine_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3c8d88",borderDarkest:"#050608",borderLight:"#98d2cb",borderLighter:"#c6e6e2",borderLightest:"#dff1ef",canvas:"#050608",canvasText:"#c3e2da",canvasTextDisabled:"#3c8d88",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",headerBackground:"#000080",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",material:"#75c1ba",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3c8d88",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000080",inputBackground:"#ffffff",inputBackgroundDisabled:"#98d2cb",tooltip:"#fefbcc"},maple_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#ab9042",borderDarkest:"#2a1801",borderLight:"#f5e2bb",borderLighter:"#f9efd9",borderLightest:"#fbf6ea",canvas:"#2a1801",canvasText:"#ffffff",canvasTextDisabled:"#ab9042",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",headerBackground:"#8e0101",headerNotActiveBackground:"#a1a0a5",headerNotActiveText:"#f5e2bb",headerText:"#ffffff",material:"#e5cc90",materialDark:"#9a9e9c",materialText:"#2a1801",materialTextDisabled:"#ab9042",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#8e0101",inputBackground:"#ffffff",inputBackgroundDisabled:"#f5e2bb",tooltip:"#fefbcc"},lilac_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#5f549b",borderDarkest:"#1c1449",borderLight:"#bcb4e9",borderLighter:"#dad5f2",borderLightest:"#eae7f7",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#5f549b",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",headerBackground:"#5e4dba",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0cf",headerText:"#ffffff",material:"#b1a7df",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#5f549b",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#5e4dba",inputBackground:"#ffffff",inputBackgroundDisabled:"#bcb4e9",tooltip:"#fefbcc"},blackAndWhite_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#888c8f",borderDarkest:"#000000",borderLight:"#dfe0e3",borderLighter:"#ededef",borderLightest:"#f5f5f6",canvas:"#000000",canvasText:"#ffffff",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",headerBackground:"#000000",headerNotActiveBackground:"#ffffff",headerNotActiveText:"#000000",headerText:"#ffffff",material:"#ffffff",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#888c8f",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000000",inputBackground:"#ffffff",inputBackgroundDisabled:"#dfe0e3",tooltip:"#fefbcc"},highContrast_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#888c8f",borderDarkest:"#ffffff",borderLight:"#dfe0e3",borderLighter:"#ededef",borderLightest:"#f5f5f6",canvas:"#353535",canvasText:"#ffffff",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",headerBackground:"#8e0284",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",material:"#000000",materialDark:"#9a9e9c",materialText:"#ffffff",materialTextDisabled:"#888c8f",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#8e0284",inputBackground:"#353535",inputBackgroundDisabled:"#dfe0e3",tooltip:"#fefbcc"},eggplant_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#526d67",borderDarkest:"#050608",borderLight:"#a2c7c0",borderLighter:"#cbe0dc",borderLightest:"#e2edeb",canvas:"#000000",canvasText:"#050608",canvasTextDisabled:"#526d67",canvasTextDisabledShadow:"#cee8e3",canvasTextInvert:"#cee8e3",headerBackground:"#4b8178",headerNotActiveBackground:"#89b0a8",headerNotActiveText:"#4b8178",headerText:"#ffffff",material:"#89b0a8",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#526d67",materialTextDisabledShadow:"#cee8e3",materialTextInvert:"#ffffff",progress:"#4b8178",inputBackground:"#ffffff",inputBackgroundDisabled:"#a2c7c0",tooltip:"#fefbcc"},brick_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#6c684b",borderDarkest:"#020000",borderLight:"#e2ddc9",borderLighter:"#efece1",borderLightest:"#f6f4ee",canvas:"#ffffff",canvasText:"#020000",canvasTextDisabled:"#6c684b",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",headerBackground:"#8e0101",headerNotActiveBackground:"#90885c",headerNotActiveText:"#c2bfa3",headerText:"#ffffff",material:"#c2bfa3",materialDark:"#9a9e9c",materialText:"#020000",materialTextDisabled:"#6c684b",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#8e0101",inputBackground:"#ffffff",inputBackgroundDisabled:"#e2ddc9",tooltip:"#fefbcc"},water_colors={anchor:"#72b3b4",anchorVisited:"#440381",borderDark:"#888c8f",borderDarkest:"#050608",borderLight:"#dfe0e3",borderLighter:"#ededef",borderLightest:"#f5f5f6",canvas:"#050608",canvasText:"#ffffff",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",headerBackground:"#72b3b4",headerNotActiveBackground:"#9a9e9c",headerNotActiveText:"#ced0cf",headerText:"#ffffff",material:"#ced0cf",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#888c8f",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#72b3b4",inputBackground:"#ffffff",inputBackgroundDisabled:"#dfe0e3",tooltip:"#fefbcc"},coldGray_colors={anchor:"#8d88c2",anchorVisited:"#440381",borderDark:"#5b57a1",borderDarkest:"#010601",borderLight:"#a4a7c8",borderLighter:"#cccee0",borderLightest:"#e2e4ed",canvas:"#3B3D64",canvasText:"#050608",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",headerBackground:"#3B3D64",headerNotActiveBackground:"#6063a5",headerNotActiveText:"#a1a3ca",headerText:"#e2e4ed",material:"#a1a3ca",materialDark:"#6063a5",materialText:"#010601",materialTextDisabled:"#5b57a1",materialTextDisabledShadow:"#c7c7df",materialTextInvert:"#e2e4ed",progress:"#8d88c2",inputBackground:"#ffffff",inputBackgroundDisabled:"#a4a7c8",tooltip:"#fefbcc"},lilacRoseDark_colors={anchor:"#a65387",anchorVisited:"#440381",borderDark:"#7F3163",borderDarkest:"#190000",borderLight:"#E597C9",borderLighter:"#f0c5e1",borderLightest:"#f6dfee",canvas:"#000000",canvasText:"#f6dfee",canvasTextDisabled:"#000000",canvasTextDisabledShadow:"#000000",canvasTextInvert:"#ecbfe3",headerBackground:"#4C0030",headerNotActiveBackground:"#763a60",headerNotActiveText:"#b26496",headerText:"#dab1c7",material:"#b26496",materialDark:"#763a60",materialText:"#000000",materialTextDisabled:"#82416d",materialTextDisabledShadow:"#ecbfe3",materialTextInvert:"#ecbfe3",progress:"#713259",inputBackground:"#ffffff",inputBackgroundDisabled:"#E597C9",tooltip:"#fefbcc"},violetDark_colors={anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3c1f3e",borderDarkest:"#18051a",borderLight:"#945b9b",borderLighter:"#c5a3c9",borderLightest:"#dfcce1",canvas:"#18051a",canvasText:"#c47bcc",canvasTextDisabled:"#000000",canvasTextDisabledShadow:"#000000",canvasTextInvert:"#c57ece",headerBackground:"#1034a6",headerNotActiveBackground:"#210e23",headerNotActiveText:"#652a6d",headerText:"#010601",material:"#652a6d",materialDark:"#210e23",materialText:"#c57ece",materialTextDisabled:"#3c1f3e",materialTextDisabledShadow:"#c47bcc",materialTextInvert:"#c47bcc",progress:"#000080",inputBackground:"#ffffff",inputBackgroundDisabled:"#945b9b",tooltip:"#fefbcc"},ThemeProvider_themes={win95:Object.assign({},baseTheme,{colors:colors,shadows:generateShadows(colors)}),counterStrike:Object.assign({},baseTheme,{colors:counterStrike_colors,shadows:generateShadows(counterStrike_colors)}),bee:Object.assign({},baseTheme,{colors:bee_colors,shadows:generateShadows(bee_colors)}),pamelaAnderson:Object.assign({},baseTheme,{colors:pamelaAnderson_colors,shadows:generateShadows(pamelaAnderson_colors)}),azureOrange:Object.assign({},baseTheme,{colors:azureOrange_colors,shadows:generateShadows(azureOrange_colors)}),olive:Object.assign({},baseTheme,{colors:olive_colors,shadows:generateShadows(olive_colors)}),vaporTeal:Object.assign({},baseTheme,{colors:vaporTeal_colors,shadows:generateShadows(vaporTeal_colors)}),matrix:Object.assign({},baseTheme,{colors:matrix_colors,shadows:generateShadows(matrix_colors)}),vermillion:Object.assign({},baseTheme,{colors:vermillion_colors,shadows:generateShadows(vermillion_colors)}),tooSexy:Object.assign({},baseTheme,{colors:tooSexy_colors,shadows:generateShadows(tooSexy_colors)}),ninjaTurtles:Object.assign({},baseTheme,{colors:ninjaTurtles_colors,shadows:generateShadows(ninjaTurtles_colors)}),tokyoDark:Object.assign({},baseTheme,{colors:tokyoDark_colors,shadows:generateShadows(tokyoDark_colors)}),molecule:Object.assign({},baseTheme,{colors:molecule_colors,shadows:generateShadows(molecule_colors)}),travel:Object.assign({},baseTheme,{colors:travel_colors,shadows:generateShadows(travel_colors)}),theSixtiesUSA:Object.assign({},baseTheme,{colors:theSixtiesUSA_colors,shadows:generateShadows(theSixtiesUSA_colors)}),candy:Object.assign({},baseTheme,{colors:candy_colors,shadows:generateShadows(candy_colors)}),modernDark:Object.assign({},baseTheme,{colors:modernDark_colors,shadows:generateShadows(modernDark_colors)}),storm:Object.assign({},baseTheme,{colors:storm_colors,shadows:generateShadows(storm_colors)}),millenium:Object.assign({},baseTheme,{colors:millenium_colors,shadows:generateShadows(millenium_colors)}),spruce:Object.assign({},baseTheme,{colors:spruce_colors,shadows:generateShadows(spruce_colors)}),slate:Object.assign({},baseTheme,{colors:slate_colors,shadows:generateShadows(slate_colors)}),rose:Object.assign({},baseTheme,{colors:rose_colors,shadows:generateShadows(rose_colors)}),rainyDay:Object.assign({},baseTheme,{colors:rainyDay_colors,shadows:generateShadows(rainyDay_colors)}),plum:Object.assign({},baseTheme,{colors:plum_colors,shadows:generateShadows(plum_colors)}),marine:Object.assign({},baseTheme,{colors:marine_colors,shadows:generateShadows(marine_colors)}),maple:Object.assign({},baseTheme,{colors:maple_colors,shadows:generateShadows(maple_colors)}),lilac:Object.assign({},baseTheme,{colors:lilac_colors,shadows:generateShadows(lilac_colors)}),blackAndWhite:Object.assign({},baseTheme,{colors:blackAndWhite_colors,shadows:generateShadows(blackAndWhite_colors)}),highContrast:Object.assign({},baseTheme,{colors:highContrast_colors,shadows:generateShadows(highContrast_colors)}),eggplant:Object.assign({},baseTheme,{colors:eggplant_colors,shadows:generateShadows(eggplant_colors)}),brick:Object.assign({},baseTheme,{colors:brick_colors,shadows:generateShadows(brick_colors)}),water:Object.assign({},baseTheme,{colors:water_colors,shadows:generateShadows(water_colors)}),coldGray:Object.assign({},baseTheme,{colors:coldGray_colors,shadows:generateShadows(coldGray_colors)}),lilacRoseDark:Object.assign({},baseTheme,{colors:lilacRoseDark_colors,shadows:generateShadows(lilacRoseDark_colors)}),violetDark:Object.assign({},baseTheme,{colors:violetDark_colors,shadows:generateShadows(violetDark_colors)})},styled_components_browser_esm=__webpack_require__(40),Frame=styled_components_browser_esm.e.div.withConfig({displayName:"Frame",componentId:"sc-1g3ndsf-0"})([""," "," "," "," "," "," "," ",""],xstyled_system_es.a,xstyled_system_es.b,xstyled_system_es.d,xstyled_system_es.v,xstyled_system_es.x,xstyled_system_es.y,xstyled_system_es.z,xstyled_system_es.w);Frame.defaultProps={width:"auto",height:"auto",bg:"material",boxShadow:"out"};var components_Frame=Frame;function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  background-color: material;\n  padding: 7 20 5;\n  border: none;\n  color: materialText;\n\n  font-size: 12px;\n\n  box-shadow: inset 1px 1px 0px 1px ",",\n    inset 0 0 0 1px ",",\n    1px 1px 0 0px ",";\n\n  &:disabled {\n    color: materialTextDisabled;\n  }\n\n  &:focus {\n    outline: ","px dotted ",";\n    outline-offset: -","px;\n\n    box-shadow: inset 1px 1px 0px 1px ",",\n      inset -0.5px -0.5px 0px 1px ",",\n      1px 1px 0 1px ",";\n  }\n\n  &:active {\n    padding: 8 20 4;\n\n    outline: ","px dotted ",";\n    outline-offset: -","px;\n\n    box-shadow: inset 0 0 0 1px ",",\n      0 0 0 1px ",";\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var Button=xstyled_styled_components_es.a.button(_templateObject(),Object(xstyled_system_es.B)("colors.borderLightest"),Object(xstyled_system_es.B)("colors.borderDark"),Object(xstyled_system_es.B)("colors.borderDarkest"),Object(xstyled_system_es.B)("space.1"),Object(xstyled_system_es.B)("colors.materialText"),Object(xstyled_system_es.B)("space.5"),Object(xstyled_system_es.B)("colors.borderLightest"),Object(xstyled_system_es.B)("colors.borderDark"),Object(xstyled_system_es.B)("colors.borderDarkest"),Object(xstyled_system_es.B)("space.1"),Object(xstyled_system_es.B)("colors.borderDarkest"),Object(xstyled_system_es.B)("space.5"),Object(xstyled_system_es.B)("colors.borderDark"),Object(xstyled_system_es.B)("colors.borderDarkest"));Button.defaultProps={children:"Ok"};var components_Button=Button,index_browser=(__webpack_require__(1245),__webpack_require__(562)),Modal_ModalContext=Object(react.createContext)({windows:{},addWindows:function addWindows(){},removeWindow:function removeWindow(){},updateWindow:function updateWindow(){},setActiveWindow:function setActiveWindow(){},activeWindow:""});function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var windowStackReducer=function windowStackReducer(state,action){var newWindows=Object.assign({},state);switch(action.type){case"ADD_WINDOW":return newWindows[action.id]=action.window,newWindows;case"REMOVE_WINDOW":return delete newWindows[action.id],newWindows;case"UPDATE_WINDOW":return newWindows[action.id]=action.window,newWindows;default:return state}},Modal_ModalProvider=function ModalProvider(_ref){var children=_ref.children,_React$useReducer2=_slicedToArray(react.useReducer(windowStackReducer,{}),2),windows=_React$useReducer2[0],dispatch=_React$useReducer2[1],_React$useState2=_slicedToArray(react.useState(),2),activeWindow=_React$useState2[0],setActiveWindow=_React$useState2[1];return react.createElement(Modal_ModalContext.Provider,{value:{windows:windows,addWindows:function addWindows(window){var id=Object(index_browser.a)();return dispatch({type:"ADD_WINDOW",id:id,window:window}),id},removeWindow:function removeWindow(id){dispatch({type:"REMOVE_WINDOW",id:id})},updateWindow:function updateWindow(id,window){dispatch({type:"UPDATE_WINDOW",id:id,window:window})},setActiveWindow:setActiveWindow,activeWindow:activeWindow}},children)},ThemeProvider_ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,theme=_ref.theme;return react.createElement(styled_components_browser_esm.b,{theme:ThemeProvider_themes[theme||"win95"]},react.createElement(Modal_ModalProvider,null,children))};ThemeProvider_ThemeProvider.defaultProps={theme:"win95"};var components_ThemeProvider=ThemeProvider_ThemeProvider;function register_templateObject(){var data=function register_taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  background: ",";\n"]);return register_templateObject=function _templateObject(){return data},data}var PANEL_ID="".concat("Themes","/panel"),TitleBar=Object(xstyled_styled_components_es.a)(components_Frame)(register_templateObject(),(function(_ref){var bg=_ref.bg;return Object(xstyled_system_es.B)("colors.".concat(bg))})),register_ThemeWindow=function ThemeWindow(_ref2){var name=_ref2.name,changeTheme=_ref2.changeTheme;return react_default.a.createElement(components_Frame,{width:"auto",m:10},react_default.a.createElement(TitleBar,{p:4,m:2,boxShadow:"none",bg:"headerBackground",color:"headerText"},name),react_default.a.createElement(components_Frame,{shadow:"none",p:10},react_default.a.createElement(components_Button,{onClick:function onClick(){changeTheme({selectedTheme:name})}},name)))},register_ThemePanel=function ThemePanel(_ref3){var api=_ref3.api;return react_default.a.createElement("div",{style:{padding:"12px"}},react_default.a.createElement("h1",{style:{marginBottom:"12px"}},"Pick a theme below"),react_default.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},Object.keys(ThemeProvider_themes).map((function(name){return react_default.a.createElement(components_ThemeProvider,{theme:name,key:name},react_default.a.createElement(register_ThemeWindow,{name:name,changeTheme:api.updateGlobals}))}))))};public_api.addons.register("Themes",(function(api){public_api.addons.add(PANEL_ID,{type:public_api.types.PANEL,title:"Themes",render:function render(_ref4){var active=_ref4.active,key=_ref4.key;return react_default.a.createElement(dist.AddonPanel,{active:active,key:key},react_default.a.createElement(register_ThemePanel,{api:api}))}})}))},566:function(module,exports,__webpack_require__){__webpack_require__(567),__webpack_require__(738),__webpack_require__(1166),__webpack_require__(1171),__webpack_require__(1174),__webpack_require__(1178),__webpack_require__(1250),__webpack_require__(1218),__webpack_require__(1249),module.exports=__webpack_require__(1246)},641:function(module,exports){}},[[566,1,2]]]);