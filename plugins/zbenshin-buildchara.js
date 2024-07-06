import fetch from 'node-fetch';

let characterImages = {
    amber: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Amber_Support.jpg',
    },
    barbara: {
         healer: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Barbara_Healer.jpg',
    },
    beidou: {
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Beidou_Burst%20DPS.jpg',
    },
    bennet: {
        support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Bennett_Support.jpg',
        maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Bennett_Main%20DPS.jpg',
    },
    chongyun: {
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Chongyun_Burst%20DPS.jpg',
    },
    diluc: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Diluc_Main%20DPS.jpg',
    },
    fischl: {
         aggravate: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Fischl_Aggravate.jpg',
         subdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Fischl_Sub%20DPS.jpg',
    },
    jean: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Jean_Support.jpg',
    },
    kaeya: {
         subdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Kaeya_Sub%20DPS.jpg',
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Kaeya_Burst%20DPS.jpg',
    },
    keqing: {
     	aggravate: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Keqing_Aggravate.jpg',
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Keqing_Main%20DPS.jpg',
    },
    klee: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Klee_Main%20DPS.jpg',
    },
    lisa: {
     	aggravate: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Lisa_Aggravate.jpg',
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Lisa_Support.jpg',
    },
    mona: {
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Mona_Burst%20DPS.jpg',
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Mona_Support.jpg',
    },
    ningguang: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Ningguang_Main%20DPS.jpg',
    },
    noelle: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Noelle_Main%20DPS.jpg',
    },
    qiqi: {
         healer: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Qiqi_Healer.jpg',
    },
    razor: {
         aggravate: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Razor_Aggravate.jpg',
         driver: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Razor_Driver.jpg',
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Razor_Main%20DPS.jpg',
    },
    sucrose: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Sucrose_Support.jpg',
    },
    venti: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Venti_Support.jpg',
    },
    xiangling: {
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Xiangling_Burst%20DPS.jpg',
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Xiangling_Support.jpg',
    },
    xingqiu: {
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Xingqiu_Burst%20DPS.jpg',
    },
    diona: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Diona_Support.jpg',
    },
    tartaglia: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Tartaglia_Main%20DPS.jpg',
    },
    xinyan: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Xinyan_Main%20DPS.jpg',
    },
    zhongli: {
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Zhongli_Burst%20DPS.jpg',
         shielder: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Zhongli_Shielder.jpg',
    },
    albedo: {
         subdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Albedo_Sub%20DPS.jpg',
    },
    ganyu: {
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Ganyu_Burst%20DPS.jpg',
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Ganyu_Main%20DPS.jpg',
    },
    xiao: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Xiao_Main%20DPS.jpg',
    },
    rosaria: {
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Rosaria_Burst%20DPS.jpg',
         subdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Rosaria_Sub%20DPS.jpg',
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Rosaria_Support.jpg',
    },
    eula: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Eula_Main%20DPS.jpg',
    },
    yanfei: {
        maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Yanfei_Main%20DPS.jpg',
        subdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Yanfei_Sub%20DPS.jpg',
    },
    kazuha: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Kaedehara%20Kazuha_Support.jpg',
    },
    ayaka: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Kamisato%20Ayaka_Main%20DPS.jpg',
    },
    sayu: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Sayu_Healer.jpg',
    },
    yoimiya: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Yoimiya_Main%20DPS.jpg',
    },
    aloy: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Aloy_Support.jpg',
    },
    kujousara: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Kujou%20Sara_Support.jpg',
    },
    raidenshogun: {
         bloom: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Raiden%20Shogun_Bloom.jpg',
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Raiden%20Shogun_Burst%20DPS.jpg',
    },
    kokomi: {
         bloom: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Sangonomiya%20Kokomi_Bloom.jpg',
         healer: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Sangonomiya%20Kokomi_Healer.jpg',
    },
    thoma: {
         burgeon: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Thoma_Burgeon.jpg',
         shielder: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Thoma_Shielder.jpg',
    },
    itto: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Arataki%20Itto_Main%20DPS.jpg',
    },
    gorou: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Gorou_Support.jpg',
    },
    shenhe: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Shenhe_Support.jpg',
    },
    yunjin: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Yun%20Jin_Support.jpg',
    },
    yaemiko: {
         aggravate: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Yae%20Miko_Aggravate.jpg',
         subdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Yae%20Miko_Sub%20DPS.jpg',
    },
    ayato: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Kamisato%20Ayato_Main%20DPS.jpg',
    },
    yelan: {
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Yelan_Burst%20DPS.jpg',
    },
    kukishinobu: {
         bloom: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Kuki%20Shinobu_Bloom.jpg',
         healer: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Kuki%20Shinobu_Healer.jpg',
         aggravate: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Kuki%20Shinobu_Aggravate.jpg',
    },
    heizou: {
         brustdps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Shikanoin%20Heizou_Burst%20DPS.jpg',
         driver: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Shikanoin%20Heizou_Driver.jpg',
    },
    tighnari: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Tighnari_Main%20DPS.jpg',
    },
    collei: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Collei_Support.jpg',
    },
    dori: {
         healer: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Dori_Healer.jpg',
    },
    nilou: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Nilou_Main%20DPS.jpg',
    },
    cyno: {
         bloom: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Cyno_Bloom.jpg',
         aggravate: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Cyno_Bloom.jpg',
    },
    candace: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Candace_Support.jpg',
    },
    nahida: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Nahida_Support.jpg',
    },
    layla: {
         shielder: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Layla_Shielder.jpg',
    },
    wanderer: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Wanderer_Main%20DPS.jpg',
    },
    faruzan: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Faruzan_Support.jpg',
    },
    alhaitham: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Alhaitham_Main%20DPS.jpg',
    },
    yaoyao: {
         healer: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Yaoyao_Healer.jpg',
    },
    dehya: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Dehya_Main%20DPS.jpg',
    },
    mika: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Mika_Support.jpg',
    },
    baizhu: {
         healer: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Baizhu_Healer.jpg',
    },
    kirara: {
         shielder: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Kirara_Shielder.jpg',
    },
    freminet: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Freminet_Main%20DPS.jpg',
    },
    lyney: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Lyney_Main%20DPS.jpg',
    },
    lynette: {
         support: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Lynette_Support.jpg',
    },
    traveller: {
         anemo: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Traveler_Anemo_Support.jpg',
         geo: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Traveler_Geo_Sub%20DPS.jpg',
         electro: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Traveler_Dendro_Support.jpg',
         dendro: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Traveler_Electro_Support.jpg',
         hydro: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Traveler_Hydro_Sub%20DPS.jpg',
    },
    hutao: {
         maindps: 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/sheets/Hu%20Tao_Main%20DPS.jpg',
    },
     furina: {

     subdps: 'https://raw.githubusercontent.com/FortOfFans/GI/main/sheets/Furina_Sub%20DPS.jpg',

     },

     chiori: {

     subdps: 'https://raw.githubusercontent.com/FortOfFans/GI/main/sheets/Chiori_Sub%20DPS.jpg',

     },

     arlecchino: { 

     maindps: 'https://raw.githubusercontent.com/FortOfFans/GI/main/sheets/Arlecchino_Main%20DPS.jpg',

     },
    
    // ... (tambahkan URL karakter lainnya)
};

let ascendImages = {
	amber: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139065908430639146/card.png',
	barbara: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139158460714463262/card.png',
	beidou: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139158437746446437/card.png',
	bennet: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139158414816190584/card.png',
	chongyun: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139158189368160358/card.png',
	diluc: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139158142828167271/card.png',
	fischl: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139158101212270613/card.png',
	jean: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139157543667634186/card.png',
	kaeya: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139157509161111582/card.png',
	keqing: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139157481554202715/card.png',
	klee: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139157452995166238/card.png',
	lisa: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139157430312390746/card.png',
	mona: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139156972856418304/card.png',
	ningguang: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139156936818970634/card.png',
	noelle: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139156891281395752/card.png',
	qiqi: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139156865809395773/card.png',
	razor: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139156838206677104/card.png',
	sucrose: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139156662545039531/card.png',
	venti: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139156356687999097/card.png',
	xiangling: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139156153281020014/card.png',
	xingqiu: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139156069520785438/card.png',
	diona: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139155977975902319/card.png',
	trataglia: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139155907142500433/card.png',
	xinyan: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139155460885327912/card.png',
	zhongli: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139155357608988783/card.png',
	albedo: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139155271785119786/card.png',
	ganyu: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139155168341008486/card.png',
	xiao: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139155079132364850/card.png',
	rosaria: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139154901906247760/card.png',
	eula: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139154807437922324/card.png',
	yanfei: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139154730099167333/card.png',
	kazuha: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139154657806123079/card.png',
	ayaka: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139154517947060315/card.png',
	sayu: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139154243308228688/card.png',
	yoimiya: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139154162286858320/card.png',
	aloy: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139154072902041600/card.png',
	kujousara: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139153986923008010/card.png',
	raidenshogun: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139153907772313670/card.png',
	kokomi: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139153639093571594/card.png',
	thoma: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139153536463159366/card.png',
	itto: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139153440635879494/card.png',
	gorou: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139153355999023114/card.png',
	shenhe: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139153220959211571/card.png',
	yunjin: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139152943711539241/card.png',
	yaemiko: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139152857606651954/card.png',
	ayato: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139152756242915408/card.png',
	yelan: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139152681248751616/card.png',
	kukishinobu: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139152576101765212/card.png',
	heizou: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139152388956114944/card.png',
	tighnari: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139152289496571965/card.png',
	collei: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139152174497153055/card.png',
	dori: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139152081064837130/card.png',
	nilou: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139151986160308284/card.png',
	cyno: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139151877074845767/card.png',
	candace: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139151779091718176/card.png',
	nahida: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139151688893218816/card.png',
	layla: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139151577446367302/card.png',
	wanderer: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139151424740134922/card.png',
	faruzan: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139151292690874489/card.png',
	alhaitham: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139151198428086282/card.png',
	yaoyao: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139151078982697021/card.png',
	dehya: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139150984036237353/card.png',
	mika: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139150875915468840/card.png',
	baizhu: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139150754825912320/card.png',
	kirara: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139150596197322762/card.png',
	ferminet: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139150481084665927/card.png',
	lyney: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139150322397356172/card.png',
	lynette: 'https://cdn.discordapp.com/attachments/1138830327708668125/1139150019358900304/card.png',
	neuvillette: 'https://cdn.discordapp.com/attachments/1138830327708668125/1141909339020476446/card.png',
	wriothesley: 'https://cdn.discordapp.com/attachments/1138830327708668125/1141909219214377030/card.png',
	hutao: 'https://cdn.discordapp.com/attachments/1138830327708668125/1147360522090598400/card.png',
};


function generateCharacterList(characterImages) {
    let characterList = Object.keys(characterImages).map(character => character.toLowerCase());
    return characterList.join('\n');
}

let listGenshin = {
    build: '*List Karakter:*\n' + generateCharacterList(characterImages),
    ascend: '*List Karakter:*\n' + generateCharacterList(ascendImages),
};

async function handleGenshinSubCommand(m, subCommand, characterName, conn) {
    if (subCommand === 'build') {
        await genshinbuild(m, characterName, conn, characterImages);
    } else if (subCommand === 'ascend') {
        await genshinascend(m, characterName, conn, ascendImages);
    } else if (subCommand === 'list') {
        await genshinlist(m, characterName, conn, listGenshin);
    }
}

async function genshinbuild(m, text, conn, characterImages) {
    let characterImage = characterImages[text];
    if (!characterImage) throw `Karakter ${text} tidak ditemukan.`;
    
    // Mengirim semua gambar karakter sebagai respons
    for (const role in characterImage) {
        const image = characterImage[role];
        conn.sendFile(m.chat, image, `${role}.jpg`, `Nih Build ${role} Dari ${text}nya Kakak!`);
    }
}


async function genshinascend(m, text, conn, ascendImages) {
    let ascendImage = ascendImages[text];
    if (!ascendImage) throw `Karakter ${text} tidak ditemukan.`;
    conn.sendFile(m.chat, ascendImage, 'anu.jpg', `Nih Info Ascend Dari ${text}nya Kakak!`);
}

async function genshinlist(m, text, conn, listGenshin) {
	let lisGenshin = listGenshin[text];
	if (!lisGenshin) throw `List Dari ${text} Tidak Ditemukan.`;
	m.reply(lisGenshin);
}

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
    if (command == 'genshin') {
        if (!text) throw `Harap Masukkan Value Yang Tepat\nContoh: ${usedPrefix + command} ascend amber`;
        const [subCommand, characterName] = text.split(/\s+/);
        if (!['build', 'ascend', 'list'].includes(subCommand)) {
            throw 'Subcommand tidak valid. Gunakan "build", "ascend", atau "list".';
        }
        m.reply("Mohon tunggu sebentar...");
        await handleGenshinSubCommand(m, subCommand, characterName, conn);
    }
};

handler.help = ['genshin [build,ascend,list] 4.1 Beta!'];
handler.tags = ['genshin'];
handler.command = ['genshin'];
handler.limit = true;
export default handler;
