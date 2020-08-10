var container = document.getElementById("acListResell")
var i = 1
var checker
var element
while(i < 326) {
    checker = "id" + i
    switch (checker) {
                //AEROSPATIALE
                case "id1":
                speed = 483; cap = 46; rwy = 6500; mC = 20760; range = 1945;
                fConsmp = 9.9; cConsmp = 0.14
                mH = 400; price = 122121; n = "ATR 42-320"; c = 1
                break;

                case "id2":
                speed = 550; cap = 50; rwy = 6500; mC = 21482; range = 1611;
                fConsmp = 14.88; cConsmp = 0.2; mH = 340; price = 122750;
                n = "ATR 42-500"; c = 1
                break;
            
                case "id3":
                speed = 556; cap = 48; rwy = 6500; mC = 15968; range = 1945;
                fConsmp = 16.96; cConsmp = 0.2; mH = 500; price = 133060
                n = "ATR 42-400"; c = 1
                break;
        
                case "id4":
                speed = 684; cap = 14; rwy = 2000; mC = 35020; range = 2555;
                fConsmp = 7.6; cConsmp = 0.1; mH = 360; price = 149020
                n = "SN-601 Corvette"; c = 1
                break;
            
                case "id5":
                speed = 621; cap = 50; rwy = 6500; mC = 8332; range = 2000;
                fConsmp = 16.05; cConsmp = 0.19; mH = 550; price = 208303
                n = "ATR 42-600"; c = 1
                break;
            
                case "id6":
                speed = 553; cap = 64; rwy = 6500; mC = 40250; range = 1650;
                fConsmp = 11.44; cConsmp = 0.14; mH = 440; price = 365902;
                n = "ATR 72-500"; c = 1
                break;
            
                case "id7":
                speed = 346; cap = 29; rwy = 2000; mC = 10966; range = 1100; 
                fConsmp = 16.49; cConsmp = 0.21; mH = 370; price = 493000;
                n = "N262"; c = 1
                break;
            
                case "id8":
                speed = 456; cap = 64; rwy = 6500; mC = 69254; range = 2665;
                fConsmp = 9.3; cConsmp = 0.21; mH = 480; price = 494675;
                n = "ATR 72-200"; c = 1
                break;
            
                case "id9":
                speed = 485; cap = 62; rwy = 6500; mC = 74512; range = 2800;
                fConsmp = 9.1; cConsmp = 0.12; mH = 490; price = 513873
                n = "ATR 72-210"; c = 1
                break;
                
                case "id10":
                speed = 524; cap = 42; rwy = 6500; mC = 16578; range = 1945;
                fConsmp = 19.08; cConsmp = 0.22; mH = 340; price = 714000;
                n = "ATR 42-300"; c = 1
                break;
            
                case "id11":
                speed = 613; cap = 74; rwy = 6500; mC = 41780; range = 2800;
                fConsmp = 8.56; cConsmp = 0.1; mH = 550; price = 928466;
                n = "ATR 72-600"; c = 1
                break;
            
                case "id12":
                speed = 1933; cap = 120; rwy = 11800; mC = 87678720; range = 7500;
                fConsmp = 32.9; cConsmp = 0.35; mH = 330; price = 407808000
                n = "Concorde"; c = 1
                break;
            
                //AIRBUS
                case "id13":
                speed = 967; cap = 135; rwy = 4790; mC = 307280; range = 5750; fConsmp = 10.6;
                cConsmp = 0.09; mH = 400; price = 3234528;
                n = "A220-100"; c = 2
                break;
                
                case "id14":
                speed = 835; cap = 117; rwy = 6500; mC = 350434; range = 6020; fConsmp = 8.4;
                cConsmp = 0.1; mH = 450; price = 4380431
                n = "A318-100"; c = 2
                break;
            
                case "id15":
                speed = 835; cap = 117; rwy = 6850; mC = 585756; range = 7000; fConsmp = 8.4;
                cConsmp = 0.1; mH = 470; price = 5093525;
                n = "A319-200"; c = 2
                break;
        
                case "id16":
                speed = 967; cap = 160; rwy = 4900; mC = 533884; range = 6110; fConsmp = 12.72;
                cConsmp = 0.1; mH = 400; price = 5619831;
                n = "A220-300"; c = 2
            
                case "id17":
                speed = 881; cap = 164; rwy = 7000; mC = 1049380; range = 5700; fConsmp = 11.55;
                cConsmp = 0.14; mH = 360; price = 6770196
                n = "A320-200"; c = 2
                break;
            
                case "id18":
                speed = 949; cap = 160; rwy = 6000; mC = 650320; range = 6950; fConsmp = 11; 
                cConsmp = 0.08; mH = 400; price = 6845472
                n = "A319neo"; c = 2
                break;
            
                case "id19":
                speed = 835; cap = 220; rwy = 7250; mC = 1019304; range = 6000; fConsmp = 18.9;
                cConsmp = 0.15; mH = 500; price = 8154432
                n = "A321-200"; c = 2
                break;
            
                case "id20":
                speed = 864; cap = 269; rwy = 7625; mC = 2611192; range = 3430; fConsmp = 19.08;
                cConsmp = 0.22; mH = 350; price = 11605297;
                n = "A300B2-200"; c = 2
                break;

                case "id21":
                speed = 893; cap = 164; rwy = 7000; mC = 590808; range = 7000; fConsmp = 7.07;
                cConsmp = 0.09; mH = 540; price = 14770196;
                n = "A320neo"; c = 2
                break;
        
                case "id22":
                speed = 950; cap = 239; rwy = 9810; mC = 2039464; range = 14800; fConsmp = 18.18;
                cConsmp = 0.22; mH = 500; price = 15688189;
                n = "A340-200"; c = 2
                break;

                case "id23":
                speed = 864; cap = 269; rwy = 7625; mC = 3943432; range = 6300; fConsmp = 19.08;
                cConsmp = 0.22; mH = 330; price = 21315852;
                n = "A300B4-200"; c = 2
                break;

                case "id24":
                speed = 893; cap = 189; rwy = 7250; mC = 910440; range = 7250; fConsmp = 10.1;
                cConsmp = 0.12; mH = 550; price = 22760999
                n = "A321neo"; c = 2
                break;

                case "id25":
                speed = 980; cap = 267; rwy = 7625; mC = 4196132; range = 6670; fConsmp = 17.17;
                cConsmp = 0.21; mH = 330; price = 24683135
                n = "A300-600"; c = 2
                break;

                case "id26":
                speed = 935; cap = 280; rwy = 7000; mC = 5081314; range = 6800; fConsmp = 17.28;
                cConsmp = 0.2; mH = 340; price = 27466560
                n = "A310-200"; c = 2
                break;

                case "id27":
                speed = 963; cap = 267; rwy = 7625; mC = 4304838; range = 7505; fConsmp = 18.02;
                cConsmp = 0.21; mH = 370; price = 27773153
                n = "A300-600R"; c = 2
                break;
 
                case "id28":
                speed = 920; cap = 220; rwy = 7500; mC = 1020000; range = 8900; fConsmp = 14.14;
                cConsmp = 0.16; mH = 500; price = 29990999
                n = "A321XLR"; c = 2
                break;
 
                case "id29":
                speed = 935; cap = 280; rwy = 6000; mC = 6591974; range = 9600; fConsmp = 17.28;
                cConsmp = 0.2; mH = 340; price = 36776320;
                n = "A310-300"; c = 2
                break;
   
                case "id30":
                speed = 958; cap = 335; rwy = 9090; mC = 6066210; range = 10000; fConsmp = 19.26;
                cConsmp = 0.22; mH = 450; price = 43330073;
                n = "A330-300"; c = 2
                break;
     
                case "id31":
                speed = 958; cap = 253; rwy = 9090; mC = 4581346; range = 12500; fConsmp = 18.19;
                cConsmp = 0.21; mH = 460; price = 43631874;
                n = "A330-200"; c = 2
                break;
    
                case "id32":
                speed = 1004; cap = 335; rwy = 10200; mC = 7211044; range = 14000; fConsmp = 21.4;
                cConsmp = 0.25; mH = 470; price = 55469568
                n = "A340-300"; c = 2
                break;
   
                case "id33":
                speed = 860; cap = 270; rwy = 8760; mC = 2800812; range = 14500; fConsmp = 15.98; 
                cConsmp = 0.21; mH = 530; price = 62240270;
                n = "A350-800"; c = 2
                break;
  
                case "id34":
                speed = 862; cap = 313; rwy = 10200; mC = 5632284; range = 14500; fConsmp = 17.10;
                cConsmp = 0.24; mH = 480; price = 66262163;
                n = "A340-500"; c = 2
                break;
       
                case "id35":
                speed = 871; cap = 380; rwy = 10200; mC = 6289860; range = 14630; fConsmp = 20.68;
                cConsmp = 0.28; mH = 460; price = 69887329
                n = "A340-600"; c = 2
                break;
    
                case "id36":
                speed = 860; cap = 314; rwy = 8760; mC = 2820122; range = 14500; fConsmp = 15.98;
                cConsmp = 0.21; mH = 550; price = 70503048
                n = "A350-900"; c = 2
                break;
     
                case "id37":
                speed = 860; cap = 350; rwy = 8760; mC = 3101536; range = 14800; fConsmp = 15.98;
                cConsmp = 0.21; mH = 500; price = 77538384;
                n = "A350-1000"; c = 2
                break;
   
                case "id40":
                speed = 860; cap = 314; rwy = 8760; mC = 3308944; range = 14500; fConsmp = 15.98;
                cConsmp = 0.21; mH = 520; price = 82723576;
                n = "A350-900R"; c = 2
                break;
    
                case "id41":
                speed = 801; cap = 406; rwy = 9500; mC = 3413028; range = 13900; fConsmp = 12;
                cConsmp = 0.15; mH = 510; price = 85325684;
                n = "A330-800neo"; c = 2
                break;

                case "id42":
                speed = 801; cap = 440; rwy = 9950; mC = 4372618; range = 12130; fConsmp = 13;
                cConsmp = 0.16; mH = 510; price = 109315468;
                n = "A330-900neo"; c = 2;
                break;
    
                case "id43":
                speed = 1049; cap = 600; rwy = 9680; mC = 12937770; range = 14500; fConsmp = 22.26;
                cConsmp = 0.16; mH = 450; price = 215629503
                n = "A380-800"; c = 2
                break;
        
                //ANTONOV
                case "id44":
                speed = 539; cap = 12; rwy = 6500; mC = 18130; range = 3300;
                fConsmp = 7.68; cConsmp = 0.1; mH = 350; price = 100722;
                n = "AN-74VIP"; c = 3
                break;

                case "id45":
                speed = 539; cap = 16; rwy = 4650; mC = 24174; range = 3300;
                fConsmp = 10.56; cConsmp = 0.14; mH = 320; price = 134296;
                n = "AN-74-200"; c = 3
                break;

                case "id46":
                speed = 446; cap = 52; rwy = 5500; mC = 72242; range = 2420;
                fConsmp = 6.72; cConsmp = 0.09; mH = 480; price = 577938
                n = "AN-140"; c = 3
                break;
   
                case "id47":
                speed = 536; cap = 52; rwy = 5600; mC = 135568; range = 2750;
                fConsmp = 7.68; cConsmp = 0.1; mH = 330; price = 661308;
                n = "AN-74TK-100"; c =  3
                break;
            
                case "id48":
                speed = 728; cap = 100; rwy = 6500; mC = 331412; range = 4075; fConsmp = 14.98;
                cConsmp = 0.18; mH = 370; price = 1104705;
                n = "AN-10"; c = 3
                break;

                case "id49":
                speed = 663; cap = 124; rwy = 6500; mC = 357710; range = 3600; fConsmp = 13.02; cConsmp = 0.18;
                mH = 350; price = 1192364
                n = "AN-12"; c = 3
                break;

                case "id50":
                speed = 728; cap = 110; rwy = 6500; mC = 364552; range = 4075; fConsmp = 14.98; cConsmp = 0.18;
                mH = 350; price = 1215176;
                n = "AN-10A"; c = 3
                break;

                case "id51":
                speed = 582; cap = 60; rwy = 7500; mC = 139502; range = 3600; fConsmp = 5.7; cConsmp = 0.08; mH = 480;
                price = 1550016;
                n = "AN-74TK-300"; c = 3
                break;
            
                //BEECHCRAFT
                case "id52":
                speed = 470; cap = 19; rwy = 4500; mC = 15544; range = 2776; fConsmp = 13.65; cConsmp = 0.19
                mH = 490; price = 111024
                n = "1900D"; c = 4
                break;

                case "id53":
                speed = 500; cap = 19; rwy = 4500; mC = 21582; range = 2907; fConsmp = 9.36; cConsmp = 0.11; 
                mH = 380; price = 119896;
                n = "1900"; c = 4
                break;
    
                case "id54":
                speed = 626; cap = 11; rwy = 3300; mC = 17766; range = 3340; fConsmp = 16.16; cConsmp = 0.15;
                mH = 400; price = 187000;
                n = "King Air 350i"; c = 4
                break;
     
                case "id55":
                speed = 621; cap = 19; rwy = 4500; mC = 14346; range = 2500; fConsmp = 16.96; cConsmp = 0.2;
                mH = 450; price = 323000;
                n = "1900C"; c = 4
                break;
        
                //BOEING
    
                case "id56":
                speed = 574; cap = 117; rwy = 8600; mC = 74866; range = 6760; fConsmp = 29;
                cConsmp = 0.3; mH = 400; price = 788066;
                n = "B377 Stratocruiser"; c = 5
                break;
      
                case "id57":
                speed = 1009; cap = 131; rwy = 8300; mC = 129600; range = 3056; fConsmp = 13;
                cConsmp = 0.17; mH = 400; price = 1364217;
                n = "B727-100"; c = 5
                break;
     
                case "id58":
                speed = 796; cap = 118; rwy = 7550; mC = 386248; range = 3440; fConsmp = 12.12; cConsm0 = 0.15; mH = 360; price = 1514699;
                n = "B737-100"; c = 5
                break;
       
                case "id59":
                speed = 796; cap = 110; rwy = 7550; mC = 403150; range = 4622; fConsmp = 15.12; cConsmp = 0.18; mH = 350; price = 1580983;
                n = "B737-200C"; c = 5
                break;
     
                case "id60":
                speed = 718; cap = 123; rwy = 7550; mC = 297016; range = 4449; fConsmp = 11.7; cConsmp = 0.16; mH = 370; price = 1856353;
                n = "B737-500"; c = 5
                break;
     
                case "id61":
                speed = 874; cap = 102; rwy = 7550; mC = 454496; range = 5473; fConsmp = 14.17; cConsmp = 0.16; mH = 370; price = 1893733;
                n = "B737-200Adv"; c = 5;
                break;
      
                case "id62":
                speed = 958; cap = 130; rwy = 7550; mC = 598688; range = 4170; fConsmp = 13.08; cConsmp = 0.15; mH = 350; price = 2217362; 
                n = "B737-200"; c = 5
                break;
      
                case "id63":
                speed = 761; cap = 134; rwy = 6450; mC = 235054; range = 3815; fConsmp = 8.46; cConsmp = 0.11; mH = 500; price = 2238611;
                n = "B717-200"; c = 5
                break;
     
                case "id64":
                speed = 762; cap = 110; rwy = 7550; mC = 258404; range = 5648; fConsmp = 11.4; cConsmp = 0.15; mH = 480; price = 2460985;
                n = "B737-600"; c = 5
                break;
       
                case "id65":
                speed = 795; cap = 128; rwy = 7550; mC = 431270; range = 4707; fConsmp = 12; cConsmp = 0.15; mH = 360; price = 2464401;
                n = "B737-300"; c = 5
                break;
     
                case "id66":
                speed = 831; cap = 120; rwy = 7550; mC = 343012; range = 5940; fConsmp = 11.11; cConsmp = 0.14; mH = 480; price = 3118288
                n = "B737-700C"; c = 5
                break;
      
                case "id67":
                speed = 733; cap = 159; rwy = 7550; mC = 541582; range = 4010; fConsmp = 14; cConsmp = 0.18; mH = 330; price = 3282313;
                n = "B737-400"; c = 5
                break;
      
                case "id68":
                speed = 762; cap = 149; rwy = 7550; mC = 428926; range = 6230; fConsmp = 10.45; cConsmp = 0.14; mH = 500; price = 4085576
                n = "B737-700"; c = 5
                break;
                
                case "id69":
                speed = 1006; cap = 144; rwy = 6450; mC = 1355242; range = 9913; fConsmp = 18.36; cConsmp = 0.22; mH = 360; price = 4169974;
                n = "B707"; c = 5
                break;
      
                case "id70":
                speed = 725; cap = 184; rwy = 7550; mC = 462826; range = 7000; fConsmp = 9.4; cConsmp = 0.12; mH = 470; price = 4407858;
                n = "B737-800"; c = 5
                break;
      
                case "id71":
                speed = 972; cap = 189; rwy = 6450; mC = 1342856; range = 4450; fConsmp = 15.15; cConsmp = 0.19; mH = 340; price = 4883110;
                n = "B727-200"; c = 5
                break;
      
                case "id72":
                speed = 836; cap = 177; rwy = 7550; mC = 387464; range = 3815; fConsmp = 10.1; cConsmp = 0.12; mH = 470; price = 5535200;
                n = "B737-900"; c = 5
                break;
      
                case "id73":
                speed = 770; cap = 126; rwy = 7550; mC = 339392; range = 10200; fConsmp = 10.78; cConsmp = 0.14; mH = 460; price = 5656525; 
                n = "B737-700ER"; c = 5
                break;
    
                case "id74":
                speed = 867; cap = 243; rwy = 7800; mC = 735278; range = 6421; fConsmp = 18.36; cConsmp = 0.21; mH = 470; price = 7002640;
                n = "B757-300"; c = 5
                break;
      
                case "id75":
                speed = 1013; cap = 224; rwy = 7800; mC = 1615956; range = 7300; fConsmp = 18.19; cConsmp = 0.21; mH = 320; price = 7882711;
                n = "B767-200"; c = 5
                break;
      
                case "id76":
                speed = 831; pax = 215; rwy = 7550; mC = 1014850; range = 5925; fConsmp = 11.11; cConsmp = 0.14; mH = 500; price = 9225912; 
                n = "B737-900ER"; c = 5
                break;
     
                case "id77":
                speed = 867; cap = 200; rwy = 7800; mC = 1798884; range = 7222; fConsmp = 12.96; cConsmp = 0.15; mH = 370; price = 9723701; 
                n = "B757-200"; c = 5
                break;
       
                case "id78":
                speed = 995; cap = 224; rwy = 7800; mC = 2611244; range = 12200; fConsmp = 16.32; cConsmp = 0.2; mH = 350; price = 14114834;
                n = "B767-200ER"; c = 5
                break;
      
                case "id79":
                speed = 88; cap = 160; rwy = 7300; mC = 693860; range = 6850; fConsmp = 7.21; cConsmp = 0.09; mH = 550; price = 17346513; 
                n = "B737 Max 7"; c = 5;
                break;
       
                case "id80":
                speed = 881; pax = 180; rwy = 7500; mC = 720452; range = 6500; fConsmp = 7.21; cConsmp = 0.09; mH = 520; price = 18011300;
                n = "B737 Max 8"; c = 5
                break;
    
                case "id81":
                speed = 881; cap = 200; rwy = 7550; mC = 753984; range = 7000; fConsmp = 7.21; cConsmp = 0.09; mH = 500; price = 18849600;
                n = "B737 Max 9"; c = 5
                break;
     
                case "id82":
                speed = 822; cap = 250; rwy = 9000; mC = 1358834; range = 14500; fConsmp = 15.2; cConsmp = 0.2; mH = 450; price = 19411920;
                n = "B787-8"; c = 5
                break;
     
                case "id83":
                speed = 881; cap = 225; rwy = 7600; mC = 800000; range = 7000; fConsmp = 7.21; cConsmp = 0.1; mH = 450; price = 19649600;
                n = "B737 Max 10"; c = 5
                break;
     
                case "id84":
                speed = 945; cap = 269; rwy = 7800; mC = 4204116; range = 7300; fConsmp = 20.33; cConsmp = 0.24; mH = 390; price = 23356202;
                n = "B767-300"; c = 5
                break;
    
                case "id85":
                speed = 936; cap = 269; rwy = 7800; mC = 5349672; range = 11065; fConsmp = 20.2; cConsmp = 0.25; mH = 370; price = 33435451;
                n = "B767-300ER"; c = 5
                break;
      
                case "id86":
                speed = 928; cap = 304; rwy = 7800; mC = 5391074; range = 10415; fConsmp = 21.42; cConsmp = 0.26; mH = 360; price = 33694208;
                n = "B767-400ER"; c = 5
                break;
     
                case "id87":
                speed = 990; cap = 350; rwy = 7545; mC = 3878280; range = 10800; fConsmp = 21.78; cConsmp = 0.26; mH = 400; price = 40824000
                n = "B747SP"; c = 5;
                break;
    
                case "id88":
                speed = 938; cap = 366; rwy = 10250; mC = 11320406; range = 9800; fConsmp = 23.32; cConsmp = 0.28; mH = 370; price = 44393752;
                n = "B747-100"; c = 5
                break;
       
                case "id89":
                speed = 839; cap = 366; rwy = 10250; mC = 14095016; range = 12700; fConsmp = 21.34; cConsmp = 0.28; mH = 360; price = 57530678;
                n = "B747-200B"; c = 5
                break;
      
                case "id90":
                speed = 950; cap = 400; rwy = 9000; mC = 7296438; range = 9695; fConsmp = 18.54; cConsmp = 0.22; mH = 470; price = 60803647;
                n = "B777-200"; c = 5
                break;
     
                case "id91":
                speed = 973; cap = 412; rwy = 10250; mC = 12330146; range = 12400; fConsmp = 22.66; cConsmp = 0.28; mH = 370; price = 63231515;
                n = "B747-300"; c = 5
                break;
       
                case "id92":
                speed = 986; cap = 300; rwy = 11000; mC = 4284306; range = 14500; fConsmp = 19.19; cConsmp = 0.24; mH = 490; price = 65912406;
                n = "B777-200LR"; c = 5
                break;
       
                case "id93":
                speed = 1036; cap = 350; rwy = 11000; mC = 5800722; range = 14685; 
                fConsmp = 19.19; cConsmp = 0.24; mH = 460; price = 68243786
                n = "B777-300ER"; c = 5
                break;
        
                case "id94":
                speed = 822; cap = 290; rwy = 9000; mC = 4899850; range = 14500;
                fConsmp = 15.2; cConsmp = 0.2; mH = 500; price = 69997851;
                n = "B787-9"; c = 5
                break;
      
                case "id95":
                speed = 1010; cap = 410; rwy = 10250; mC = 10908438; range = 13360;
                fConsmp = 22.05; cConsmp = 0.26; mH = 370; price = 72722924;
                n = "B747-400C"; c = 5
                break;
      
                case "id96":
                speed = 860; cap = 440; rwy = 8000; mC = 6915586; range = 12000;
                fConsmp = 18.05; cConsmp= 0.21; mH = 400; price = 72795638;
                n = "B787-10"; c = 5
                break;
     
                case "id97":
                speed = 951; cap = 350; rwy = 9000; mC = 3119336; range = 16100;
                fConsmp = 19.6; cConsmp = 0.25; mH = 500; price = 77083382;
                n = "B777-8X"; c = 5
                break;
     
                case "id98":
                speed = 1010; cap = 568; rwy = 10250; mC = 11217520; range = 2905;
                fConsmp = 23.98; cConsmp  = 0.28; mH = 500; price = 80125136;
                n = "B747-400D"; c = 5
                break;
       
                case "id99":
                speed = 1014; cap = 400; rwy = 11000; mC = 9259022; range = 14260;
                fConsmp = 19.19; cConsmp = 0.24; mH = 480; price = 84172921;
                n = "B777-200ER"; c = 5
                break;
    
                case "id100":
                speed = 878; cap = 451; rwy = 9000; mC = 9898588; range = 11135;
                fConsmp = 17.67; cConsmp = 0.24; mH = 450; price = 89987157;
                n = "B777-300"; c = 5
                break;
       
                case "id101":
                speed = 931; cap = 406; rwy = 9000; mC = 3646040; range = 14500;
                fConsmp = 21.56; cConsmp = 0.28; mH = 540; price = 91150989;
                n = "B777-9X"; c = 5
                break;
      
                case "id102":
                speed = 982; cap = 416; rwy = 10250; mC = 14281210; range = 14500;
                fConsmp = 22.89; cConsmp = 0.18; mH = 330; price = 92136845;
                n = "B747-400"; c = 5
                break;
      
                case "id103 ":
                speed = 866; cap = 416; rwy = 10250; mC = 8292316; range = 14500;
                fConsmp = 20.16; cConsmp = 0.26; mH = 450; price = 97556659;
                n = "B747-400ER"; c = 5
                break;
        
                case "id104":
                speed = 1097; cap = 467; rwy = 10250; mC = 8476840; range = 14815;
                fConsmp = 21.84; cConsmp = 0.26; mH = 500; price = 121097727;
                n = "B747-8"; c = 5
                break;
     
                case "id105":
                speed = 1036; cap = 451; rwy = 11000; mC = 10547522; range = 14500;
                fConsmp = 21.63; cConsmp = 0.26; mH = 460; price = 131844032;
                n = "B777-300LR"; c = 5
                break;
        
                //BOMBARDIER
                case "id106":
                speed = 585; cap = 37; rwy = 2000; mC = 14926; range = 1713; fConsmp = 17.51; cConsmp = 0.21; mH = 480; price = 124381
                n = "DHC-8-Q200"; c = 6
                break;

                case "id107":
                speed = 505; cap = 37; rwy = 2000; mC = 22350; fConsmp = 16.96; cConsmp = 0.2; mH = 380; price = 127710;
                n = "DHC-8-100"; c = 6
                break;
      
                case "id108":
                speed = 956; cap = 8; rwy = 2000; mC = 33720; range = 2684; fConsmp = 7.42; cConsmp = 0.09; mH = 320; price = 137633; 
                n = "Learjet 25B"; c = 6
                break;
       
                case "id109":
                speed = 512; cap = 50; rwy = 2000; mC = 27056; range = 1558; fConsmp = 13.86; cConsmp = 0.18; mH = 370; price = 180374;
                n = "DHC-8-Q300"; c = 6
                break;
     
                case "id110":
                speed = 945; cap = 16; rwy = 3500; mC = 16794; range = 3000; fConsmp = 10.1; cConsmp = 0.12; mH = 480; price = 223915;
                n = "Challenger 300"; c = 6
                break;
        
                case "id111":
                speed = 396; cap = 54; rwy = 2000; mC = 53136; range = 1400; fConsmp = 14.7; cConsmp = 0.19; mH = 400; price = 259197;
                n = "DHC-7"; c = 6
                break;
       
                case "id112":
                speed = 840; cap = 50; rwy = 4500; mC = 56164; range = 2417; fConsmp = 7.56; cConsmp = 0.09; mH = 470; price = 416025;
                n = "CRJ 100"; c = 6
                break;
           
                case "id113":
                speed = 863; cap = 19; rwy = 3500; mC = 85678; range = 5925; fConsmp = 6.3; cConsmp = 0.09; mH = 370; price = 439374
                n = "Challenger 600"; c = 6
                break;
        
                case "id114":
                speed = 840; cap = 50; rwy = 4500; mC = 71012; range = 3056; fConsmp = 7.56; cConsmp = 0.09; mH = 470; price = 526012;
                n = "CRJ 100ER"; c = 5
                break;
         
                case "id115":
                speed = 945; cap = 19; rwy = 3500; mC = 102252; range = 6236; fConsmp = 6.06; cConsmp = 0.08; mH = 350; price = 552716;
                n = "Challenger 601"; c = 6
                break;
            
                case "id116":
                speed = 799; cap = 12; rwy = 3780; mC = 36300; range = 7491; fConsmp = 4.6; cConsmp = 0.06; mH = 490; price = 558459;
                n = "Challenger 605"; c = 6
                break;
         
                case "id117":
                speed = 802; cap = 50; rwy = 2000; mC = 83918; range = 3500; fConsmp = 6.72; cConsmp = 0.09; mH = 450; price = 621621;
                n = "CRJ 200"; c = 6
                break;
       
                case "id118":
                speed = 898; cap = 19; rwy = 5800; mC = 59886; range = 14260;
                fConsmp = 8.37; cConsmp = 0.06; mH = 400; price = 630386
                n = "Global 7500"; c = 6
                break;
        
                case "id119":
                speed = 840; cap = 50; rwy = 2000; mC = 86208; range = 3710;
                fConsmp = 7.56; cConsmp = 0.09; mH = 490; price = 638581
                n = "CRJ 100LR"; c = 6
                break;
        
                case "id120":
                speed = 898; cap = 17; rwy = 5820; mC = 61848; range = 14631;
                fConsmp = 7.44; cConsmp = 0.06; mH = 400; price = 651042;
                n = "Global 8000"; c = 6
                break;
        
                case "id121":
                speed = 802; cap = 50; rwy = 2000; mC = 75836; range = 3713;
                fConsmp = 6.72; cConsmp = 0.09; mH = 470; price = 659451
                n = "CRJ 200LR"; c = 6
                break;
        
                case "id122":
                speed = 734; cap = 70; rwy = 2000; mC = 76452; range = 2522;
                fConsmp = 9.9; cConsmp = 0.11; mH = 480; price = 804752;
                n = "DHC-8-Q400"; c = 6
                break;
      
                case "id123":
                speed = 879; cap = 70; rwy = 2000; mC = 94766; range = 2655;
                fConsmp = 9.36; cConsmp = 0.11; mH = 500; price = 1052956;
                n = "CRJ 701"; c = 6
                break;
        
                case "id124":
                speed = 800; cap = 19; rwy = 3780; mC = 131556; range = 9680;
                fConsmp = 4.6; cConsmp = 0.06; mH = 450; price = 1143957;
                n = "Challenger 604"; c = 6
                break;
        
                case "id125":
                speed = 794; cap = 68; rwy = 2000; mC = 105736; range = 3121
                fConsmp = 8.82; cConsmp = 0.11; mH = 490; price = 1174846
                n = "CRJ 700"; c = 6
                break;
        
                case "id126":
                speed = 879; cap = 70; rwy = 2000; mC = 114434; range = 3206;
                fConsmp = 9.36; cConsmp = 0.11; mH = 490; price = 1271479;
                n = "CRJ 701ER"; c = 6
                break;
        
        
                case "id127":
                speed = 840; cap = 70; rwy = 2000; mC = 80140; range = 2735;
                fConsmp = 7.92; cConsmp = 0.1; mH = 460; price = 1335683;
                n = "CRJ 700NG"; c = 6
                break;
        
                case "crj 702":
                case "crj702":
                case "crj-702":
                case "crj 702 ":
                case "crj702 ":
                case "crj-702 ":
                case "id128":
                speed = 859; cap = 78; rwy = 2000; mC = 121286; range = 3121;
                fConsmp = 9.36; cConsmp = 0.11; mH = 450; price = 1347617
                n = "CRJ 702"; c = 6
                break;
        
                case "id129":
                speed = 879; cap = 75; rwy = 2000; mC = 54118; range = 3184;
                fConsmp = 9.36; cConsmp = 0.11; mH = 510; price = 1352951
                n = "CRJ 705"; c = 6
                break;
        
                case "id130":
                speedd = 794; cap = 68; rwy = 2000; mC = 124538; range = 3676;
                fConsmp = 8.82; cConsmp = 0.11; mH = 470; price = 1383766
                n = "CRJ 700ER"; c = 6
                break;
        
                case "id131":
                speed = 879; cap = 70; rwy = 2000; mC = 132352; range = 3708;
                fConsmp = 9.36; cConsmp = 0.11; mH = 500; price = 1470569
                n = "CRJ 701LR"; c = 6
                break;
        
                case "id132":
                speed = 838; cap = 88; rwy = 2000; mC = 119860; range = 2421;
                fConsmp = 7.28; cConsmp = 0.1; mH = 470; price = 1498256
                n = "CRJ 900NG"; c = 6
                break;
       
                case "id133":
                speed = 837; cap = 86; rwy = 2000; mC = 122450; range = 2956;
                fConsmp = 8.19; cConsmp = 0.11; mH = 490; price = 1530636
                n = "CRJ 900"; c = 6
                break;
        
                case "id134":
                speed = 879; cap = 75; rwy = 2000; mC = 61784; range = 3635;
                fConsmp = 9.36; cConsmp = 0.11; mH = 550; price = 1544590
                n = "CRJ 705ER"; c = 6
                break;
        
                case "id135":
                speed = 879; cap = 75; rwy = 2000; mC = 62922; range = 3702;
                fConsmp = 9.36; cConsmp = 0.11; mH = 550; price = 1573060
                n = "CRJ 705LR"; c = 6
                break;
        
                case "id136":
                speed = 877; cap = 100; rwy = 5499; mC = 109196; range = 2760
                fConsmp = 8.32; cConsmp = 0.1; mH = 450; price = 1819929
                n = "CRJ 1000"; c = 6
                break;
     
                case "id137":
                speed = 808; cap = 90; rwy = 2000; mC = 145888; range = 3488
                fConsmp = 8.19; cConsmp = 0.11; mH = 460; price = 1823606
                n = "CRJ 900ER"; c = 6
                break;
        
                case "id138":
                speed = 808; cap = 90; rwy = 2000; mC = 167386; range = 4002
                fConsmp = 8.19; cConsmp = 0.11; mH = 500; price = 2092337
                n = "CRJ 900LR"; c = 6
                break;
        
                case "id140":
                speed = 711; cap = 160; rwy = 8050; mC = 1047786; range = 4855
                fConsmp = 13.13; cConsmp = 0.16; mH = 340; price = 3613052
                n = "CL-44D"; c = 6
                break;
       
                case "id141":
                speed = 905; cap = 135; rwy = 4800; mC = 199374; range = 5463
                fConsmp = 15.12; cConsmp = 0.18; mH = 500; price = 4984356
                n = "CS 300"; c = 6
                break;
        
                //BRITISH AEROSPACE
                case "id142":
                speed = 405; cap = 19; rwy = 2000; mC = 13976; range = 1260; fConsmp = 16.83; cConsmp = 0.21;
                mH = 320; price = 323000;
                n = "Jetstream 41"; c = 7
                break;
            
                case "id143":
                speed = 541; cap = 30; rwy = 2000; mC = 11580; range = 1433; fConsmp = 14.4; cConsmp = 0.2; 
                mH = 470; price = 510000
                n = "Jetstream 41"; c = 7
                break;
      
                case "id144":
                speed = 702; cap = 112; rwy = 3921; mC = 50152; range = 2400; fConsmp = 17.67; cConsmp = 0.24;
                mH = 400; price = 527912;
                n = "BAe 146-300"; c = 7
                break;
       
                case "id145":
                speed = 675; cap = 85; rwy = 6500; mC = 137242; range = 2000; fConsmp = 9.3; cConsmp = 0.12;
                mH = 330; price = 762450
                n = "BAe146"; c = 7
                break;
                
                //CESSNA
                case "id146":
                speed = 176; cap = 3; rwy = 2500; mC = 4682; range = 1000; fConsmp = 3.76; cConsmp = 0.05;
                mH = 400; price = 51000
                n = "172"; c = 8
                break;
        
                case "id147":
                speed = 327; cap = 14; rwy = 2990; mC = 6962; range = 2000; fConsmp = 10.7; cConsmp = 0.12;
                mH = 390; price = 238000;
                n = "208B"; c = 8;
                break;
        
                case "id148":
                speed = 947; cap = 12; rwy = 4000; mC = 58740; range = 6020; fConsmp = 7.68; cConsmp = 0.1;
                mH = 360; price = 378968;
                n = "Citation X"; c = 8
                break;
        
                //COMAC
                case "id149":
                speed = 930; cap = 78; rwy = 7500; mC = 41140; range = 2200;
                fConsmp = 9.27; cConsmp = 0.11; mH = 510; price = 1028514;
                n = "ARJ21-700"; c = 9
                break;
    
                case "id150":
                speed = 930; cap = 98; rwy = 7900; mC = 45228; range = 2200;
                fConsmp = 10.3; cConsmp = 0.12; mH = 510; price = 1130706;
                n = "ARJ21-900"; c = 9
                break;
    
                case "id151":
                speed = 930; cap = 78; rwy = 7800; mC = 60542; range = 3700;
                fConsmp = 10.3; cConsmp = 0.12; mH = 510; price = 1513551;
                n = "ARJ21-700ER"; c = 9
                break;
        
                case "id152":
                speed = 980; cap = 168; rwy = 5200; mC = 619186; range = 5555;
                fConsmp = 11.44; cConsmp = 0.12; mH = 400; price = 6517748;
                n = "C919"; c = 9
                break;
        
                //EMBRAER
                case "id153":
                speed = 708; cap = 4; rwy = 2000; mC = 1900; range = 2182;
                fConsmp = 7.2; cConsmp = 0.1; mH = 490; price = 68000
                n = "Phenom 100"; c = 10
                break;
        
                case "id154":
                speed = 329; cap = 5; rwy = 2000; mC = 6588; range = 2352;
                fConsmp = 7.76; cConsmp = 0.1; mH = 350; price = 85000
                n = "EMB 121 Xingu I"; c = 10
                break;
        
                case "id155":
                speed = 851; cap = 6; rwy = 2000; mC = 3658; range = 3334
                fConsmp = 8.72; cConsmp = 0.1; mH = 460; price = 102000
                n = "Phenom 300"; c = 10
                break;
        
                case "id156":
                speed = 837; cap = 7; rwy = 2000; mC = 4420; range = 4260
                fConsmp = 7.6; cConsmp = 0.1; mH = 520; price = 110501;
                n = "Legacy 450"; c = 10
                break;
        
                case "id157":
                speed = 837; cap = 8; rwy = 2000; mC = 5124; range = 5186
                fConsmp = 7.6; cConsmp = 0.1; mH = 510; price = 128115
                n = "Legacy 500"; c = 10
                break;
       
                case "id158":
                speed = 574; cap = 30; rwy = 2000; mC = 22854; range = 1481
                fConsmp = 14.98; cConsmp = 0.18; mH = 390; price = 134440
                n = "EMB 120"; c = 10
                break;
       
                case "id159":
                speed = 837; cap = 7; rwy = 2000; mC = 34216; range = 6186
                fConsmp = 7.6; cConsmp = 0.11; mH = 400; price = 198115
                n = "Praetor 500"; c = 10
                break;
        
                case "id160":
                speed = 794; cap = 8; rwy = 2000; mC = 34216; range = 7441
                fConsmp = 8; cConsmp = 0.12; mH = 400; price = 218115
                n = "Praetor 600"; c = 10
                break;
        
                case "id170":
                speed = 910; cap = 37; rwy = 2000; mC = 38784; range = 2650;
                fConsmp = 9.54; cConsmp = 0.11; mH = 460; price = 352585
                n = "ERJ 135ER"; c = 10
                break;
        
                case "id171":
                speed = 784; cap = 13; rwy = 2000; mC = 34216; range = 6060;
                fConsmp = 8; cConsmp = 0.1; mH = 490; price = 360159
                n = "Legacy 600"; c = 10
                break;
        
                case "id172":
                speed = 924; cap = 19; rwy = 2000; mC = 19292; range = 8344
                fConsmp = 10.9; cConsmp = 0.12; mH = 470; price = 385854
                n = "Lineage 1000"; c = 10
                break;
        
                case "id173":
                speed = 910; cap = 37; rwy = 2000; mC = 48014; range = 3138
                fConsmp = 7.42; cConsmp = 0.09; mH = 450; price = 417514
                n = "ERJ 135LR"; c = 10
                break;
        
                case "id174":
                speed = 866; cap = 50; rwy = 2000; mC = 48652; range = 2445;
                fConsmp = 7.35; cConsmp = 0.09; mH = 450; price = 442288
                n = "ERJ 145ER"; c = 10
                break;
        
                case "id175":
                speed = 910; cap = 44; rwy = 2000; mC = 52544; range = 3019
                fConsmp = 7.42; cConsmp = 0.09; mH = 450; price = 477675
                n = "ERJ 140LR"; c = 10
                break;
       
                case "id176":
                speed = 883; cap = 50; rwy = 2000; mC = 59704; range = 2870
                fConsmp = 7.14; cConsmp = 0.09; mH = 460; price = 519169
                n = "ERJ 145LR"; c = 10
                break;
        
                case "id177":
                speed = 909; cap = 50; rwy = 2000; mC = 124214; range = 3705
                fConsmp = 5.15; cConsmp = 0.06; mH = 490; price = 1129212
                n = "ERJ 145XR"; c = 10
                break;
        
                case "id178":
                speed = 870; cap = 122; rwy = 2000; mC = 119890; range = 2593
                fConsmp = 10.1; cConsmp = 0.12; mH = 500; price = 1598528
                n = "ERJ 190-200"; c = 10
                break;
        
                case "id179":
                speed = 891; cap = 88; rwy = 2000; mC = 138754; range = 3334
                fConsmp = 9.54; cConsmp = 0.11; mH = 470; price = 1734433
                n = "ERJ 170-200"; c = 10
                break;
       
                case "id180":
                speed = 891; cap = 80; rwy = 2000; mC = 156362; range = 3334
                fConsmp = 8.48; cConsmp = 0.1; mH = 460; price = 1839550
                n = "ERJ 170-100"; c = 10
                break;
        
                case "id181":
                speed = 870; cap = 110; rwy = 2000; mC = 129722; range = 3334
                fConsmp = 10.1; cConsmp = 0.12; mH = 470; price = 1853174
                n = "ERJ 190-100"; c = 10
                break;
        
                case "id182":
                speed = 891; cap = 88; rwy = 2000; mC = 161852; range = 3889
                fConsmp = 9.54; cConsmp = 0.11; mH = 470; price = 2023158
                n = "ERJ 170-200LR"; c = 10
                break;
        
                case "id192":
                speed = 870; cap = 122; rwy = 2000; mC = 123320; range = 3334
                fConsmp = 10.1; cConsmp = 0.12; mH = 490; price = 2055338
                n = "ERJ 190-200LR"; c = 10
                break;
       
                case "id193":
                speed = 891; cap = 80; rwy = 2000; mC = 160934; range = 3889
                fConsmp = 8.48; cConsmp = 0.1; mH = 470; price = 2145774
                n = "ERJ 170-100LR"; c = 10
                break;
        
                case "id194":
                speed = 891; cap = 85; rwy = 2000; mC = 162946; range = 3706
                fConsmp = 8.48; cConsmp = 0.1; mH = 460; price = 2172603
                n = "ERJ 170-200AR"; c = 10
                break;
        
                case "id195":
                speed = 870; cap = 110; rwy = 2000; mC = 153912; range = 4260
                fConsmp = 10.1; cConsmp = 0.12; mH = 490; price = 2367883
                n = "ERJ 190-100LR"; c = 10
                break;
        
                case "id196":
                speed = 870; cap = 110; rwy = 2000; mC = 173066; range = 4448
                fConsmp = 10.1; cConsmp = 0.12; mH = 490; price = 2472381
                n = "ERJ 190-100AR"; c = 10
                break;
        
                case "id197":
                speed = 891; cap = 78; rwy = 2000; mC = 138188; range = 3892;
                fConsmp = 7.42; cConsmp = 0.09; mH = 500; price = 2512492
                n = "ERJ 170-100AR"; c = 10
                break;
        
                case "id198":
                speed = 870; cap = 120; rwy = 2000; mC = 169520; range = 4077
                fConsmp = 9.09; cConsmp = 0.11; mH = 500; price = 2825347
                n = "ERJ 190-200AR"; c = 10
                break;
       
                case "id199":
                speed = 966; cap = 80; rwy = 4265; mC = 127902; range = 3820;
                fConsmp = 11.33; cConsmp = 0.14; mH = 500; price = 3197562
                n = "E175 E2"; c = 10
                break;
      
                case "id200":
                speed = 931; cap = 97; rwy = 4314; mC = 135502; range = 3820;
                fConsmp = 11.77; cConsmp = 0.14; mH = 510; price = 3387562
                n = "E190 E2"; c = 10
                break;
        
                case "id201":
                speed = 931; cap = 120; rwy = 4593; mC = 168672; range = 3820
                fConsmp = 13.91; cConsmp = 0.16; mH = 550; price = 4216798
                n = "E195 E2"; c = 10
                break;
        
                //FOKKER
                case "id202":
                speed = 392; cap = 44; rwy = 2000; mC = 33266; range = 1890;
                fConsmp = 14.72; cConsmp = 0.2; mH = 350; price = 127943
                n = "F27-600"; c = 11
                break;
        
                case "id203":
                speed = 451; cap = 40; rwy = 2000; mC = 40542; range = 1926
                fConsmp = 16; cConsmp = 0.2; mH = 350; price = 135138
                n = "F27-200"; c = 11
                break;
        
                case "id204":
                speed = 575; cap = 52; rwy = 2000; mC = 87398; range = 1826
                fConsmp = 18.53; cConsmp = 0.21; mH = 380; price = 336145
                n = "F27-500"; c = 11
                break;
        
                case "id205":
                speed = 908; cap = 65; rwy = 2000; mC = 165004; range = 2000
                fConsmp = 10.2; cConsmp = 0.12; mH = 330; price = 660013
                n = "F28-1000"; c = 11
                break;
        
                case "id206":
                speed = 412; cap = 40; range = 2000; mC = 26246; range = 1468
                fConsmp = 17.1; cConsmp = 0.24; mH = 360; price = 680000
                n = "F27-400"; c = 11
                break;
      
                case "id207":
                speed = 767; cap = 85; rwy = 2000; mC = 155544; range = 1650;
                fConsmp = 9.1; cConsmp = 0.12; mH = 400; price = 707020
                n = "F28-600"; c = 11
                break;
        
                case "id208":
                speed = 902; cap = 65; rwy = 2000; mC = 170766; range = 1900
                fConsmp = 9.18; cConsmp = 0.11; mH = 390; price = 711521
                n = "F28-3000"; c = 11
                break;
        
                case "id209":
                speed = 624; cap = 58; rwy = 2000; mC = 114954; range = 2055;
                fConsmp = 6.79; cConsmp = 0.09; mH = 380; price = 718458
                n = "F-50"; c = 11
                break;
        
                case "id210":
                speed = 817; cap = 70; rwy = 2000; mC = 87014; range = 9.45
                fConsmp = 9.45; cConsmp = 0.11; mH = 490; price = 725120
                n = "F-70"; c = 11
                break;
        
                case "id211":
                speed = 494; cap = 44; rwy = 2000; mC = 26968; range = 1315
                fConsmp = 20.33; cConsmp = 0.24; mH = 360; price = 748000
                n = "F27-100"; c = 11
                break;
        
                case "id212":
                speed = 944; cap = 85; rwy = 2000; mC = 175040; range = 1900
                fConsmp = 10.4; cConsmp = 0.12; mH = 350; price = 814144
                n = "F28-4000"; c = 11
                break;
        
                case "id213":
                speed = 817; cap = 80; rwy = 2000; mC = 103588; range = 2040
                fConsmp = 9.45; cConsmp = 0.11; mH = 490; price = 828709
                n = "F-70A"; c = 11
                break;
        
                case "id214":
                speed = 695; cap = 122; rwy = 6000; mC = 81822; range = 4300
                fConsmp = 20.68; cConsmp = 0.16; mH = 400; price = 861279
                n = "F-100"; c = 11
                break;
      
                case "id215":
                speed = 908; cap = 79; rwy = 2000; mC = 264042; range = 2743;
                fConsmp = 10.2; cConsmp = 0.12; mH = 350; price  = 1100175
                n = "F28-2000"; c = 11
                break;
        
                //ILYUSHIN
                case "id216":
                speed = 490; cap = 64; rwy = 2000; mC = 36996; range = 1000;
                fConsmp = 13.95; cConsmp = 0.19; mH = 470; price = 255147;
                n = "IL-114"; c = 12
                break;
      
                case "id217":
                speed = 465; cap = 64; rwy = 2000; mC = 40186; range = 2000;
                fConsmp = 9.6; cConsmp = 0.12; mH = 470; price = 382720;
                n = "IL-114-100"; c = 12
                break;
       
                case "id218":
                speed = 339; cap = 24; rwy = 2000; mC = 15962; range = 1750;
                fConsmp = 18.54; cConsmp = 0.22; mH = 360; price = 408000;
                n = "IL-14P"; c = 12;
                break;
        
                case "id219":
                speed = 485; cap = 52; rwy = 2000; mC = 63124; range = 2100;
                fConsmp = 7.68; cConsmp = 0.1; mH = 480; price = 435344;
                n = "IL-114-300"; c = 12
                break;
        
                case "id220":
                speed = 339; cap = 36; rwy = 2000; mC = 23208; range = 1750; fConsmp = 18.54;
                cConsmp = 0.22; mH = 320; price = 612000;
                n = "IL-14M"; c = 12;
                break;
        
                case "id221":
                speed = 576; cap = 84; rwy = 2000; mC = 234400; range = 2560;
                fConsmp = 9.6; cConsmp = 0.12; mH = 320; price = 756132;
                n = "IL-18B"; c = 12
                break;
        
                case "id222":
                speed = 564; cap = 75; rwy = 2000; mC = 239184; range = 2560;
                fConsmp = 8.28; cConsmp = 0.11; mH = 360; price = 771564;
                n = "IL-18A"; c = 12
                break;
     
                case "id223":
                speed = 589; cap = 90; rwy = 2000; mC = 297078; range = 3100;
                fConsmp = 9.4; cConsmp = 0.12; mH = 320; price = 1024410;
                n = "IL-18V"; c = 12;
                break;
     
                case "id224":
                speed = 580; cap = 122; rwy = 2000; mC = 392620; range = 3100;
                fConsmp = 10.78; cConsmp = 0.14; mH = 350; price = 1266516;
                n = "IL-18I"; c = 12;
                break;
       
                case "id225":
                speed = 580; cap = 100; rwy = 2000; mC = 417596; range = 6500;
                fConsmp = 10.78; cConsmp = 0.14; mH = 380; price = 14399984;
                n = "IL-18D"; c = 12;
                break;
        
                case "id226":
                speed = 893; cap = 186; rwy = 2000; mC = 1638650; range = 7550;
                fConsmp = 18.02; cConsmp = 0.21; mH = 380; price = 6302498;
                n = "IL-62"; c = 12;
                break;
        
                case "id227":
                speed = 932; cap = 168; rwy = 2000; mC = 1695666; range = 8850;
                fConsmp = 16.32; cConsmp = 0.2; mH = 390; price = 7065274;
                n = "IL-62M"; c = 12;
                break;
        
                case "id228":
                speed = 944; cap = 195; rwy = 2000; mC = 1681948; range = 10000;
                fConsmp = 18.36; cConsmp = 0.22; mH = 340; price = 8204625;
                n = "IL-62MK"; c = 12;
                break;
         
                case "id229":
                speed = 833; cap = 300; rwy = 2000; mC = 4909006; range = 11500;
                fConsmp = 23.52; cConsmp = 0.19; mH = 370; price = 31671000;
                n = "IL-96-300"; c = 12;
                break;
       
                case "id230":
                speed = 809; cap = 436; rwy = 2000; mC = 4448548; range = 10000;
                fConsmp = 27.72; cConsmp = 0.18; mH = 460; price = 40441348;
                n = "IL-96-400"; c = 12;
                break;
       
                case "id231":
                speed = 842; cap = 370; rwy = 2000; mC = 6044438; range = 12800;
                fConsmp = 24.96; cConsmp = 0.19; mH = 460; price = 46495680;
                n = "IL-96M"; c = 12;
                break;
        
                //LOCKHEED
                case "id232":
                speed = 957; cap = 10; rwy = 2000; mC = 40960; range = 4585;
                fConsmp = 9.09; cConsmp = 0.11; mH = 320; price = 132130;
                n = "L-1329 JetStar"; c = 13
                break;
        
                case "id233":
                speed = 593; cap = 127; rwy = 2000; mC = 372726; range = 3450;
                fConsmp = 12.48; cConsmp = 0.16; mH = 390; price = 1242421;
                n = "L-188 Electra"; c = 13;
                break;
        
                case "id234":
                speed = 596; cap = 95; rwy = 2000; mC = 612800; range = 8700;
                fConsmp = 25.2; cConsmp = 0.3; mH = 390; price = 1802354;
                n = "L-1049G Super Constellation"; c = 13
                break;
        
                case "id235":
                speed = 838; cap = 263; rwy = 2000; mC = 5327098; range = 7420;
                fConsmp = 17.28; cConsmp = 0.22; mH = 370; price = 24777200;
                n = "L-1011-200"; c = 13
                break;
        
                case "id236":
                speed = 876; cap = 315; rwy = 9400; mC = 3146468; range = 9900;
                fConsmp = 19.2; cConsmp = 0.25; mH = 400; price = 33120715;
                n = "L-1011-500"; c = 13
                break;
                
                //MDD
                case "id237":
                speed = 297; cap = 12; rwy = 2000; mC = 4628; range = 1500;
                fConsmp = 18; cConsmp = 0.22; mH = 200; price = 204000;
                n = "DC-1"; c = 14
                break;
       
                case "id238":
                speed = 273; cap = 14; rwy = 2000; mC = 6226; range = 1750;
                fConsmp = 15.64; cConsmp = 0.21; mH = 290; price = 238000;
                n = "DC-2"; c = 14;
                break;
        
                case "id239":
                speed = 358; cap = 22; rwy = 2000; mC = 12266; range = 2575;
                fConsmp = 18.54; cConsmp = 0.22; mH = 230; price = 374000;
                n = "DC-5"; c = 14
                break;
       
                case "id240":
                speed = 332; cap = 86; rwy = 2000; mC = 188210; range = 4023;
                fConsmp = 13.5; cConsmp = 0.19; mH = 200; price = 464718;
                n = "DC-4"; c = 14
                break;
       
                case "id241":
                speed = 250; cap = 32; rwy = 2000; mC = 10778; range = 1650;
                fConsmp = 17.48; cConsmp = 0.24; mH = 200; price = 544000;
                n = "DC-3"; c = 14
                break;
        
                case "id242":
                speed = 894; cap = 90; rwy = 2000; mC = 178108; range = 2036;
                fConsmp = 13.44; cConsmp = 0.18; mH = 340; price = 659657;
                n = "DC-9-10"; c = 14;
                break;
        
                case "id243":
                speed = 491; cap = 56; rwy = 2000; mC = 254572; range = 7376;
                fConsmp = 14.72; cConsmp = 0.2; mH = 280; price = 707147;
                n = "DC-6"; c = 14
                break;
        
                case "id244":
                speed = 889; cap = 90; rwy = 2000; mC = 186498; range = 2631;
                fConsmp = 13.16; cConsmp = 0.18; mH = 380; price = 847715;
                n = "DC-9-50"; c = 14
                break;
        
                case "id245":
                speed = 568; cap = 102; rwy = 2000; mC = 307588; range = 4835;
                fConsmp = 17.44; cConsmp = 0.2; mH = 210; price = 854413;
                n = "DC-6B"; c = 14;
        
                case "id246":
                speed = 871; cap = 90; rwy = 2000; mC = 225070; range = 2631;
                fConsmp = 13.44; cConsmp = 0.18; mH = 380; price = 865651;
                n = "DC-9-30"; c = 14
                break;
        
                case "id247":
                speed = 871; cap = 90; rwy = 2000; mC = 227536; range = 2712;
                fConsmp = 13.44; cConsmp = 0.18; mH = 370; price = 892301;
                n = "DC-9-40"; c = 14
                break;
       
                case "id248":
                speed = 914; cap = 90; rwy = 2000; mC = 258406; range = 2977;
                fConsmp = 15.12; cConsmp = 0.18; mH = 360; price = 957060;
                n = "DC-9-21"; c = 14
                break;
       
                case "id249":
                speed = 576; cap = 99; rwy = 2000; mC = 471526; range = 7410;
                fConsmp = 17.12; cConsmp = 0.2; mH = 380; price = 1428866;
                n = "DC-7"; c = 14
                break;
     
                case "id250":
                speed = 610; cap = 100; rwy = 2000; mC = 514212; range = 8000;
                fConsmp = 17.28; cConsmp = 0.2; mH = 340; price = 15588217;
                n = "DC-7B"; c = 14;
                break;
        
                case "id251":
                speed = 561; cap = 105; rwy = 2000; mC = 596028; range = 9070;
                fConsmp = 17.12; cConsmp = 0.2; mH = 320; price = 1806145;
                n = "DC-7C"; c = 14
                break;
        
                case "id252":
                speedd = 738; cap = 139; rwy = 2000; mC = 419032; range = 4440;
                fConsmp = 13.58; cConsmp = 0.18; mH = 400; price = 1995393;
                n = "MD-87"; c = 14;
                break;
        
                case "id253":
                speed = 868; cap = 130; rwy = 2000; mC = 421516; range = 6000;
                fConsmp = 17.44; cConsmp = 0.2; mH = 340; price = 2161616;
                n = "MD-80"; c = 14
                break;
      
                case "id254":
                speed = 819; cap = 172; rwy = 2000; mC = 482234; range = 2910;
                fConsmp = 17.44; cConsmp = 0.2; mH = 340; price = 2296357;
                n = "MD-81"; c = 14
                break;
        
           
                case "id255":
                speed = 908; cap = 172; rwy = 2000; mC = 629722; range = 3800;
                fConsmp = 17.44; cConsmp = 0.2; mH = 340; price = 2998679;
                n = "MD-88"; c = 14;
                break;
       
                case "id256":
                speed = 909; cap = 172; rwy = 2000; mC = 396472; range = 3860;
                fConsmp = 17.44; cConsmp = 0.2; mH = 470; price = 3049783;
                n = "MD-90-30"; c = 14
                break;
       
                case "id257":
                speed = 909; cap = 172; rwy = 2000; mC = 454402; range = 4424;
                fConsmp = 17.44; cConsmp = 0.2; mH = 450; price = 3495399;
                n = "MD-90-30ER"; c = 14
                break;
        
                case "id258":
                speed = 746; cap = 172; rwy = 2000; mC = 768924; range = 4640;
                fConsmp = 14.88; cConsmp = 0.2; mH = 380; price = 3661545;
                n = "MD-83"; c = 14
                break;
        
                case "id259 ":
                speed = 909; cap = 172; rwy = 2000; mC = 529998; range = 5160;
                fConsmp = 17.44; cConsmp = 0.2; mH = 450; price = 4076912;
                n = "MD-90-50"; c = 14
                break;
        
                case "id260":
                speed = 902; cap = 160; rwy = 2000; mC = 1467766; range = 7410;
                fConsmp = 19.62; cConsmp = 0.22; mH = 380; price = 4812350;
                n = "DC-8-10"; c = 14
                break;
       
                case "id261":
                speed = 853; cap = 210; rwy = 2000; mC = 1375332; range = 6035;
                fConsmp = 18.43; cConsmp = 0.24; mH = 380; price = 5189932;
                n = "DC-8-61"; c = 14
                break;
       
                case "id262":
                speed = 877; cap = 170; rwy = 2000; mC = 1603244; range = 7410;
                fConsmp = 18.18; cConsmp = 0.22; mH = 320; price = 5256539
                n = "DC-8-20"; c = 14
                break;
        
                case "id263":
                speed = 808; cap = 210; rwy = 2000; mC = 1082306; range = 7035;
                fConsmp = 17.67; cConsmp = 0.24; mH = 370; price = 5850306;
                n = "DC-8-71"; c = 14
                break;
        
                case "id264":
                speed = 916; cap = 176; rwy = 2000; mC = 2034056; range = 8230;
                fConsmp = 17.51; cConsmp = 0.21; mH = 360; price = 6669034
                n = "DC-8-40"; c = 14
                break;
        
                case "id265":
                speed = 1008; cap = 250; rwy = 2000; mC = 1633538; range = 6436;
                fConsmp = 20.33; cConsmp = 0.24; mH = 360; price = 6806411;
                n = "DC-10-10"; c = 14
                break;
        
                case "id266":
                speed = 856; cap = 220; rwy = 2000; mC = 2261080; range = 9620;
                fConsmp = 18.43; cConsmp = 0.24; mH = 400; price = 8696462
                n = "DC-8-62"; c = 14
                break;
   
                case "id267":
                speed = 844; cap = 179; rwy = 2000; mC = 2853080; range = 11260;
                fConsmp = 16.49; cConsmp = 0.21; mH = 360; price = 9354363;
                n = "DC-8-50"; c = 14
                break;
       
                case "id268":
                speed = 808; cap = 220; rwy = 2000; mC = 1818624; range = 10620;
                fConsmp = 16.74; cConsmp = 0.22; mH = 400; price = 9830403;
                n = "DC-8-72"; c = 14
                break;
        
                case "id269":
                speed = 883; cap = 259; rwy = 2000; mC = 6257716; range = 7600;
                fConsmp = 17.86; cConsmp = 0.24; mH = 350; price = 24540066;
                n = "DC-8-63"; c = 14
                break;
        
                case "id270":
                speed = 854; cap = 260; rwy = 2000; mC = 4662698; range = 7000;
                fConsmp = 16.74; cConsmp = 0.22; mH = 320; price = 24540516
                n = "DC-10-15"; c = 14
                break;
      
                case "id271":
                speed = 808; cap = 259; rwy = 2000; mC = 5231582; range = 8650;
                fConsmp = 16.74; cConsmp = 0.22; mH = 370; price = 28278818
                n = "DC-8-73"; c = 14
                break;
        
                case "id272":
                speed = 872; cap = 320; rwy = 2000; mC = 8556204; range = 9493;
                fConsmp = 19.4; cConsmp = 0.25; mH = 400; price = 36409376
                n = "DC-10-30"; c = 14
                break;
       
                case "id273":
                speed = 972; cap = 360; rwy = 2000; mC = 10793096; range = 9322;
                fConsmp = 21.2; cConsmp = 0.25; mH = 330; price = 46926501
                n = "DC-10-40"; c = 14
                break;
        
                case "id274":
                speed = 955; cap = 410; rwy = 2000; mC = 9285136; range = 12435;
                fConsmp = 25.92; cConsmp = 0.3; mH = 350; price = 56273548
                n = "MD-11C"; c = 14
                break;
      
                case "id275":
                speed = 929; cap = 410; rwy = 2000; mC = 9449408; range = 12655;
                fConsmp = 24.48; cConsmp = 0.3; mH = 370; price = 57269139
                n = "MD-11"; c = 14
                break;
       
                case "id276":
                speed = 955; cap = 410; rwy = 2000; mC = 7584598; range = 13408;
                fConsmp = 25.92; cConsmp = 0.3; mH = 450; price = 60676778;
                n = "MD-11ER"; c = 14
                break;
        
                //SAAB
                case "id277":
                speed = 425; cap = 37; rwy = 2000; mC = 19664; range = 1730;
                fConsmp = 13.65; cConsmp = 0.19; mH = 380; price = 109241
                n = "340"; c = 15
                break;
        
                case "id278":
                speed = 477; cap = 32; rwy = 2000; mC = 42456; range = 2510;
                fConsmp = 9.27; cConsmp = 0.11; mH = 210; price = 113217;
                n = "90 Scandia"; c = 15
                break;
        
                case "id279":
                speed = 737; cap = 58; rwy = 2000; mC = 129212; range = 2185;
                fConsmp = 6.42; cConsmp = 0.08; mH = 460; price = 1033701;
                n = "2000"; c = 15
                break;
        
                //SUD AVIATION
                case "id280":
                speed = 886; cap = 80; rwy = 7700; mC = 174584; range = 1700; fConsmp = 11.88; cConsmp = 0.14; mH = 350; price = 581947;
                n = "Caravelle III"; c = 16
                break;
           
                case "id281":
                speed = 828; cap = 80; rwy = 7800; mC = 239674; range = 2300; fConsmp = 10.67; cConsmp = 0.14; mH = 380; price = 826463
                n = "Caravelle IV-R"; c = 16
                break;
         
                case "id282":
                speed = 761; cap = 80; rwy = 7800; mC = 249106; range = 2350; fConsmp = 10.34; cConsmp = 0.14; mH = 320; price = 844429;
                n = "Caravelle IV-N"; c = 16
                break;
         
                case "id283":
                speed = 896; cap = 99; rwy = 7550; mC = 283222; range = 2300; fConsmp = 10.4; cConsmp = 0.12; mH = 350; price = 1089317;
                n = "Caravelle 11-R"; c = 16
                break;
       
                case "id284":
                speed = 924; cap = 105; rwy = 7500; mC = 335560; range = 2650; fConsmp = 11.44; cConsmp = 0.14; mH = 320; price = 1220219;
                n = "Caravelle 10-B"; c = 16
                break;
         
                case "id285":
                speed = 896; cap = 80; rwy = 7500; mC = 357020; range = 3455; fConsmp = 10.4; cConsmp = 0.12; mH = 360; price = 1322298;
                n = "Caravelle 10-R"; c = 16
                break;
           
                case "id286":
                speed = 924; cap = 140; rwy = 7600; mC = 417730; range = 3465; fConsmp = 13.65; cConsmp = 0.16; mH = 340; price = 1740539
                n = "Caravelle 12"; c = 16
                break;
        
                //SUKHOI
                case "id287":
                speed = 391; cap = 30; rwy = 2000; mC = 8274; range = 1300; fConsmp = 15.47; cConsmp = 0.21; mH = 450; price = 510000;
                n = "SU-80GP"; c = 17
                break;
            
                case "id288":
                speed = 1017; cap = 78; rwy = 4970; mC = 56370; range = 2900; fConsmp = 19.26; cConsmp = 0.13; mH = 400; price = 1593374
                n = "SuperJet 100-75"; c = 17
                break;
          
                case "id289":
                speed = 839; cap = 98; rwy = 2000; mC = 64410; range = 2950; fConsmp = 9.63; cConsmp = 0.11; mH = 500; price = 1610270
                n = "SuperJet 100-95"; c = 17
                break;
         
                case "id290":
                speed = 1017; cap = 68; rwy = 4900; mC = 61082; range = 3204; fConsmp = 17.12; cConsmp = 0.11; mH = 400; price = 1642969
                n = "SuperJet 100-60"; c = 17
                break;
         
                case "id291":
                speed = 1017; cap = 98; rwy = 6730; mC = 105920; range = 4578; fConsmp = 20.33; cConsmp = 0.15; mH = 400; price = 4114953
                n = "SuperJet 100-95LR"; c = 17
                break;
        
                //TUPOLEV
                case "id292":
                speed = 826; cap = 50; rwy = 2000; mC = 77182; range = 2750; fConsmp = 16.8; cConsmp = 0.2; mH = 330; price = 241193;
                n = "Tu-104"; c = 18
                break;
           
                case "id293":
                speed = 972; cap = 56; rwy = 2000; mC = 160340; range = 2100; fConsmp = 11.44; cConsmp = 0.14; mH = 380; price = 562598
                n = "Tu-124"; c = 18
                break;
          
                case "id294":
                speed = 765; cap = 70; rwy = 2000; mC = 194650; range = 2750; fConsmp = 13.65; cConsmp = 0.16; mH = 320; price = 627900
                n = "Tu-104A"; c = 18
                break;
       
                case "id295":
                speed = 799; cap = 76; rwy = 2000; mC = 178560; range = 2000; fConsmp = 11; cConsmp = 0.14; mH = 380; price = 686770
                n = "Tu-134A"; c = 18
                break;
        
                case "id296":
                speed = 765; cap = 85; rwy = 2000; mC = 216664; range = 2750
                fConsmp = 14.7; cConsmp = 0.18; mH = 360; price = 698913
                n = "Tu-104D"; c = 18
                break;
        
                case "id297":
                speed = 795; cap = 100; rwy = 2000; mC = 222764; range = 2650
                fConsmp = 15.84; cConsmp = 0.2; mH = 350; price = 742545
                n = "Tu-104B"; c = 18
                break;
       
                case "id298":
                speed = 899; cap = 100; rwy = 2000; mC = 325262; range = 3450
                fConsmp = 17.44; cConsmp = 0.2; mH = 360; price = 1049234
                n = "Tu-110"; c = 18
                break;
        
                case "id299":
                speed = 828; cap = 126; rwy = 2000; mC = 155346; range = 2200
                fConsmp = 9.72; cConsmp = 0.11; mH = 500; price = 1553460
                n = "Tu-334-200"; c = 18
                break;
        
                case "id300":
                speed = 799; cap = 126; rwy = 2000; mC = 161030; range = 2200
                fConsmp = 8.19; cConsmp = 0.11; mH = 480; price = 1610294
                n = "Tu-334-220"; c = 18
                break;
        
                case "id301":
                speed = 795; cap = 102; rwy = 2000; mC = 180060; range = 3150
                fConsmp = 8.1; cConsmp = 0.11; mH = 450; price = 1800602
                n = "Tu-334-100"; c = 18
                break;
        
                case "id302":
                speed = 828; cap = 102; rwy = 2000; mC = 234364; range = 4100
                fConsmp = 9.72; cConsmp = 0.11; mH = 450; price = 2343641
                n = "Tu-334-100D"; c = 18
                break;
        
                case "id303":
                speed = 733; cap = 102; rwy = 2000; mC = 260086; range = 4100
                fConsmp = 7.28; cConsmp = 0.1; mH = 460; price = 2600869
                n = "Tu-334-120D"; c = 18
                break;
        
                case "id304":
                speed = 893; cap = 180; rwy = 2000; mC = 790020; range = 4000
                fConsmp = 13.02; cConsmp = 0.18; mH = 320; price = 4514400
                n = "Tu-154M"; c = 18
                break;
        
                case "id305":
                speed = 893; cap = 180; rwy = 2000; mC = 1200314; range = 5280
                fConsmp = 14.88; cConsmp = 0.2; mH = 390; price = 5107721
                n = "Tu-154"; c = 18
                break;
        
                case "id306":
                speed = 833; cap = 164; rwy = 2000; mC = 718962; range = 5800
                fConsmp = 12.74; cConsmp = 0.16; mH = 490; price = 5991344
                n = "Tu-204-300"; c = 18
                break;
          
                case "id307":
                speed = 834; cap = 210; rwy = 2000; mC = 767152; range = 4100
                fConsmp = 11.44; cConsmp = 0.14; mH = 480; price = 6137208
                n = "Tu-204-120"; c = 18
                break;
        
                case "id308":
                speed = 702; cap = 210; rwy = 2000; mC = 804574; range = 4300;
                fConsmp = 10.78; cConsmp = 0.14; mH = 470; price = 6436584
                n = "Tu-204-200"; c = 18
                break;
        
                case "id309":
                speed = 729; cap = 210; rwy = 2000; mC = 812244; range = 4341;
                fConsmp = 10.78; cConsmp = 0.14; mH = 490; price = 6497956
                n = "Tu-214"; c = 18
                break;
        
                //DORNIER
                case "id310":
                speed = 639; cap = 33; rwy = 4485; mC = 53296; range = 1310
                fConsmp = 12.6; cConsmp = 0.19; mH = 400; price = 561000
                n = "328-100"; c = 19
                break;
        
                case "id311":
                speed = 710; cap = 33; rwy = 4485; mC = 53296; range = 1980
                fConsmp = 12.74; cConsmp = 0.22; mH = 400; price = 561000
                n = "328-310JET"; c = 19
                break;
        
                case "id312":
                speed = 710; cap = 44; rwy = 4530; mC = 71060; range = 1665
                fConsmp = 14.56; cConsmp = 0.24; mH = 400; price = 748000
                n = "428JET"; c = 19
                break;
        
                //MARTIN 2
                case "id313":
                speed = 467; cap = 40; rwy = 1980; mC = 64600; range = 1800
                fConsmp = 14.88; cConsmp = 0.15; mH = 400; price = 680000
                n = "4-0-4"; c = 20
                break;
        
                case "id314":
                speed = 510; cap = 40; rwy = 1565; mC = 64600; range = 2900
                fConsmp = 19.57; cConsmp = 0.16; mH = 400; price = 680000
                n = "2-0-2"; c = 20
                break;
        
                //VICKERS
                case "id315":
                speed = 491; cap = 75; rwy = 5280; mC = 21636; range = 3040
                fConsmp = 25; cConsmp = 0.22; mH = 400; price = 927749
                n = "Viscount"; c = 21
                break;
        
                //CONVAIR
                case "id316":
                speed = 1029; cap = 110; rwy = 8050; mC = 104190; range = 4636
                fConsmp = 22.66; cConsmp = 0.22; mH = 400; price = 1096733
                n = "CV-880"; c = 22
                break;
        
                case "id317":
                speed = 999; cap = 149; rwy = 5350; mC = 26240130; range = 5785
                fConsmp = 23.04; cConsmp = 0.25; mH = 400; price = 6211896
                n = "CV-990A"; c = 22
                break;
        
                //DASSAULT AVIATION
                case "id318":
                speed = 1092; cap = 19; rwy = 5436; mC = 4759950; range = 7400
                fConsmp = 23.1; cConsmp = 0.22; mH = 400; price = 1104727
                n = "Falcon 2000LX"; c = 23
                break;
      
                case "id319":
                speed = 1040; cap = 19; rwy = 5436; mC = 4312393; range = 5790
                fConsmp = 18.62; cConsmp = 0.2; mH = 400; price = 1393600
                n = "Falcon 2000"; c = 23
                break;
        
                case "id320":
                speed = 833; cap = 150; rwy = 2000; mC = 41230; range = 1700
                fConsmp = 25.22; cConsmp = 0.25; mH = 400; price = 8434010
                n = "Mercure"; c = 23
                break;
        
                //MITSUBISHI
                case "id321":
                speed = 1123; cap = 92; rwy = 5710; mC = 20748122; range = 3770
                fConsmp = 12.36; cConsmp = 0.12; mH = 400; price = 3387562
                n = "Spacejet M90"; c = 24
                break;
        
                case "id322":
                speed = 1123; cap = 88; rwy = 5770; mC = 17201782; range = 3540
                fConsmp = 13.39; cConsmp = 0.14; mH = 400; price = 5071399
                n = "Spacejet 100"; c = 24
                break;
        
                //IRKUT
                case "id323":
                speed = 1096; cap = 162; rwy = 6400; mC = 429658; range = 5000
                fConsmp = 14.42; cConsmp = 0.13; mH = 400; price = 4522716
                n = "MC-21-200"; c = 25
                break;
        
                case "id324":
                speed = 1096; cap = 198; rwy = 6600; mC = 432466; range = 5000
                fConsmp = 17.51; cConsmp = 0.14; mH = 400; price = 4552276
                n = "MC-21-300"; c = 25
                break;
          
                case "id325":
                speed = 1096; cap = 230; rwy = 6800; mC = 494428; range = 5500
                fConsmp = 19.57; cConsmp = 0.16; mH = 400; price = 5204503
                n = "MC-21-400"; c = 25
                break;
        
                default:
                speed = 0; cap = 0; rwy = 0; mC = 0; range = 0; fConsmp = 0;
                cConsmp = 0; mH = 0; price = 0; n = "Aircraft not found."; c = 0
                break;
    }
    element = document.createElement("option")
    element.value = n
    if(n != "Aircraft not found.") {
        container.appendChild(element)
    }
    i++
}    
function resell() {
    var plane; var market; var marketCalc; var jS; var fS; var flh; var resell; var finalCost;
    plane = document.getElementById("airplaneResell").value
    var speed; var cap; var rwy; var range; var fConsmp; var cConsmp; var mC; var mH; var c; var n; var price
    var check = plane.toLowerCase()
    switch (check) {
        //AEROSPATIALE
        case "atr 42 320":
        case "atr 42-320":
        case "atr 42320":
        case "atr-42 320":
        case "atr-42-320":
        case "atr-42320":
        case "atr42 320":
        case "atr42-320":
        case "atr42320":
        case "atr 42 32":
        case "atr 42-32":
        case "atr 4232":
        case "atr-42 32":
        case "atr-42-32":
        case "atr-4232":
        case "atr42 32":
        case "atr42-32":
        case "atr4232":
        case "atr 42 320 ":
        case "atr 42-320 ":
        case "atr 42320 ":
        case "atr-42 320 ":
        case "atr-42-320 ":
        case "atr-42320 ":
        case "atr42 320 ":
        case "atr42-320 ":
        case "atr42320 ":
        case "atr 42 32 ":
        case "atr 42-32 ":
        case "atr 4232 ":
        case "atr-42 32 ":
        case "atr-42-32 ":
        case "atr-4232 ":
        case "atr42 32 ":
        case "atr42-32 ":
        case "atr4232 ":
        case "id1":
        speed = 483; cap = 46; rwy = 6500; mC = 20760; range = 1945;
        fConsmp = 9.9; cConsmp = 0.14
        mH = 400; price = 122121; n = "ATR 42-320"; c = 1
        pc = "atr42"
        break;
    
        case "atr 42 500":
        case "atr 42-500":
        case "atr 42500":
        case "atr-42 500":
        case "atr-42-500":
        case "atr-42500":
        case "atr42 500":
        case "atr42-500":
        case "atr42500":
        case "atr 42 5":
        case "atr 42-5":
        case "atr 425":
        case "atr-42 5":
        case "atr-42-5":
        case "atr-425":
        case "atr42 5":
        case "atr42-5":
        case "atr425":
        case "atr 42 500 ":
        case "atr 42-500 ":
        case "atr 42500 ":
        case "atr-42 500 ":
        case "atr-42-500 ":
        case "atr-42500 ":
        case "atr42 500 ":
        case "atr42-500 ":
        case "atr42500 ":
        case "atr 42 5 ":
        case "atr 42-5 ":
        case "atr 425 ":
        case "atr-42 5 ":
        case "atr-42-5 ":
        case "atr-425 ":
        case "atr42 5 ":
        case "atr42-5 ":
        case "atr425 ":
        case "id2":
        speed = 550; cap = 50; rwy = 6500; mC = 21482; range = 1611;
        fConsmp = 14.88; cConsmp = 0.2; mH = 340; price = 122750;
        n = "ATR 42-500"; c = 1; pc = "atr42"
        break;
    
        case "atr 42 400":
        case "atr 42-400":
        case "atr 42400":
        case "atr-42 400":
        case "atr-42-400":
        case "atr-42400":
        case "atr42 400":
        case "atr42-400":
        case "atr42400":
        case "atr 42 4":
        case "atr 42-4":
        case "atr 424":
        case "atr-42 4":
        case "atr-42-4":
        case "atr-424":
        case "atr42 4":
        case "atr42-4":
        case "atr424":
        case "atr 42 400 ":
        case "atr 42-400 ":
        case "atr 42400 ":
        case "atr-42 400 ":
        case "atr-42-400 ":
        case "atr-42400 ":
        case "atr42 400 ":
        case "atr42-400 ":
        case "atr42400 ":
        case "atr 42 4 ":
        case "atr 42-4 ":
        case "atr 424 ":
        case "atr-42 4 ":
        case "atr-42-4 ":
        case "atr-424 ":
        case "atr42 4 ":
        case "atr42-4 ":
        case "atr424 ":
        case "id3":
        speed = 556; cap = 48; rwy = 6500; mC = 15968; range = 1945;
        fConsmp = 16.96; cConsmp = 0.2; mH = 500; price = 133060
        n = "ATR 42-400"; c = 1; pc = "atr42"
        break;

        case "sn 601 corvette":
        case "sn 601-corvette":
        case "sn 601corvette":
        case "sn-601 corvette":
        case "sn-601-corvette":
        case "sn-601corvette":
        case "sn601 corvette":
        case "sn601-corvette":
        case "sn601corvette":
        case "sn-601":
        case "sn 601":
        case "sn601":
        case "corvette":
        case "sn 601 corvette ":
        case "sn 601-corvette ":
        case "sn 601corvette ":
        case "sn-601 corvette ":
        case "sn-601-corvette ":
        case "sn-601corvette ":
        case "sn601 corvette ":
        case "sn601-corvette ":
        case "sn601corvette ":
        case "sn-601 ":
        case "sn 601 ":
        case "sn601 ":
        case "corvette ":
        case "id4":
        speed = 684; cap = 14; rwy = 2000; mC = 35020; range = 2555;
        fConsmp = 7.6; cConsmp = 0.1; mH = 360; price = 149020
        n = "SN-601 Corvette"; c = 1; pc = "sn601"
        break;
    
        case "atr 42 600":
        case "atr 42-600":
        case "atr 42600":
        case "atr-42 600":
        case "atr-42-600":
        case "atr-42600":
        case "atr42 600":
        case "atr42-600":
        case "atr42600":
        case "atr 42 6":
        case "atr 42-6":
        case "atr 426":
        case "atr-42 6":
        case "atr-42-6":
        case "atr-426":
        case "atr42 6":
        case "atr42-6":
        case "atr426":
        case "atr 42 600 ":
        case "atr 42-600 ":
        case "atr 42600 ":
        case "atr-42 600 ":
        case "atr-42-600 ":
        case "atr-42600 ":
        case "atr42 600 ":
        case "atr42-600 ":
        case "atr42600 ":
        case "atr 42 6 ":
        case "atr 42-6 ":
        case "atr 426 ":
        case "atr-42 6 ":
        case "atr-42-6 ":
        case "atr-426 ":
        case "atr42 6 ":
        case "atr42-6 ":
        case "atr426 ":
        case "id5":
        speed = 621; cap = 50; rwy = 6500; mC = 8332; range = 2000;
        fConsmp = 16.05; cConsmp = 0.19; mH = 550; price = 208303
        n = "ATR 42-600"; c = 1; pc = "atr42"
        break;
    
        case "atr 72 500":
        case "atr 72-500":
        case "atr 72500":
        case "atr-72 500":
        case "atr-72-500":
        case "atr-72500":
        case "atr72 500":
        case "atr72-500":
        case "atr72500":
        case "atr 72 5":
        case "atr 72-5":
        case "atr 725":
        case "atr-72 5":
        case "atr-72-5":
        case "atr-725":
        case "atr72 5":
        case "atr72-5":
        case "atr725":
        case "atr 72 500 ":
        case "atr 72-500 ":
        case "atr 72500 ":
        case "atr-72 500 ":
        case "atr-72-500 ":
        case "atr-72500 ":
        case "atr72 500 ":
        case "atr72-500 ":
        case "atr72500 ":
        case "atr 72 5 ":
        case "atr 72-5 ":
        case "atr 725 ":
        case "atr-72 5 ":
        case "atr-72-5 ":
        case "atr-725 ":
        case "atr72 5 ":
        case "atr72-5 ":
        case "atr725 ":
        case "id6":
        speed = 553; cap = 64; rwy = 6500; mC = 40250; range = 1650;
        fConsmp = 11.44; cConsmp = 0.14; mH = 440; price = 365902;
        n = "ATR 72-500"; c = 1; pc = "atr72"
        break;
    
        case "n262":
        case "n-262":
        case "n 262":
        case "n262 ":
        case "n-262 ":
        case "n 262 ":
        case "id7":
        speed = 346; cap = 29; rwy = 2000; mC = 10966; range = 1100; 
        fConsmp = 16.49; cConsmp = 0.21; mH = 370; price = 493000;
        n = "N262"; c = 1; pc = "n262"
        break;
    
        case "atr 72 200":
        case "atr 72-200":
        case "atr 72200":
        case "atr-72 200":
        case "atr-72-200":
        case "atr-72200":
        case "atr72 200":
        case "atr72-200":
        case "atr72200":
        case "atr 72 2":
        case "atr 72-2":
        case "atr 722":
        case "atr-72 2":
        case "atr-72-2":
        case "atr-722":
        case "atr72 2":
        case "atr72-2":
        case "atr722":
        case "atr 72 200 ":
        case "atr 72-200 ":
        case "atr 72200 ":
        case "atr-72 200 ":
        case "atr-72-200 ":
        case "atr-72200 ":
        case "atr72 200 ":
        case "atr72-200 ":
        case "atr72200 ":
        case "atr 72 2 ":
        case "atr 72-2 ":
        case "atr 722 ":
        case "atr-72 2 ":
        case "atr-72-2 ":
        case "atr-722 ":
        case "atr72 2 ":
        case "atr72-2 ":
        case "atr722 ":
        case "id8":
        speed = 456; cap = 64; rwy = 6500; mC = 69254; range = 2665;
        fConsmp = 9.3; cConsmp = 0.21; mH = 480; price = 494675;
        n = "ATR 72-200"; c = 1; pc = "atr72"
        break;
    
        case "atr 72 210":
        case "atr 72-210":
        case "atr 72210":
        case "atr-72 210":
        case "atr-72-210":
        case "atr-72210":
        case "atr72 210":
        case "atr72-210":
        case "atr72210":
        case "atr 72 21":
        case "atr 72-21":
        case "atr 7221":
        case "atr-72 21":
        case "atr-72-21":
        case "atr-7221":
        case "atr72 21":
        case "atr72-21":
        case "atr7221":
        case "atr 72 210 ":
        case "atr 72-210 ":
        case "atr 72210 ":
        case "atr-72 210 ":
        case "atr-72-210 ":
        case "atr-72210 ":
        case "atr72 210 ":
        case "atr72-210 ":
        case "atr72210 ":
        case "atr 72 21 ":
        case "atr 72-21 ":
        case "atr 7221 ":
        case "atr-72 21 ":
        case "atr-72-21 ":
        case "atr-7221 ":
        case "atr72 21 ":
        case "atr72-21 ":
        case "atr7221 ":
        case "id9":
        speed = 485; cap = 62; rwy = 6500; mC = 74512; range = 2800;
        fConsmp = 9.1; cConsmp = 0.12; mH = 490; price = 513873
        n = "ATR 72-210"; c = 1; pc = "atr72"
        break;
        
        case "atr 42 300":
        case "atr 42-300":
        case "atr 42300":
        case "atr-42 300":
        case "atr-42-300":
        case "atr-42300":
        case "atr42 300":
        case "atr42-300":
        case "atr42300":
        case "atr 42 3":
        case "atr 42-3":
        case "atr 423":
        case "atr-42 3":
        case "atr-42-3":
        case "atr-423":
        case "atr42 3":
        case "atr42-3":
        case "atr423":
        case "atr 42 300 ":
        case "atr 42-300 ":
        case "atr 42300 ":
        case "atr-42 300 ":
        case "atr-42-300 ":
        case "atr-42300 ":
        case "atr42 300 ":
        case "atr42-300 ":
        case "atr42300 ":
        case "atr 42 3 ":
        case "atr 42-3 ":
        case "atr 423 ":
        case "atr-42 3 ":
        case "atr-42-3 ":
        case "atr-423 ":
        case "atr42 3 ":
        case "atr42-3 ":
        case "atr423 ":
        case "id10":
        speed = 524; cap = 42; rwy = 6500; mC = 16578; range = 1945;
        fConsmp = 19.08; cConsmp = 0.22; mH = 340; price = 714000;
        n = "ATR 42-300"; c = 1; pc = "atr42"
        break;
    
        case "atr 72 600":
        case "atr 72-600":
        case "atr 72600":
        case "atr-72 600":
        case "atr-72-600":
        case "atr-72600":
        case "atr72 600":
        case "atr72-600":
        case "atr72600":
        case "atr 72 6":
        case "atr 72-6":
        case "atr 726":
        case "atr-72 6":
        case "atr-72-6":
        case "atr-726":
        case "atr72 6":
        case "atr72-6":
        case "atr726":
        case "atr 72 600 ":
        case "atr 72-600 ":
        case "atr 72600 ":
        case "atr-72 600 ":
        case "atr-72-600 ":
        case "atr-72600 ":
        case "atr72 600 ":
        case "atr72-600 ":
        case "atr72600 ":
        case "atr 72 6 ":
        case "atr 72-6 ":
        case "atr 726 ":
        case "atr-72 6 ":
        case "atr-72-6 ":
        case "atr-726 ":
        case "atr72 6 ":
        case "atr72-6 ":
        case "atr726 ":
        case "id11":
        speed = 613; cap = 74; rwy = 6500; mC = 41780; range = 2800;
        fConsmp = 8.56; cConsmp = 0.1; mH = 550; price = 928466;
        n = "ATR 72-600"; c = 1; pc = "atr72"
        break;
    
        case "concorde":
        case "concorde ":
        case "speedbird":
        case "speedbird ":
        case "id12":
        speed = 1933; cap = 120; rwy = 11800; mC = 87678720; range = 7500;
        fConsmp = 32.9; cConsmp = 0.35; mH = 330; price = 407808000
        n = "Concorde"; c = 1; pc = "concorde"
        break;
    
        //AIRBUS
        case "a 220 100":
        case "a 220-100":
        case "a 220100":
        case "a-220 100":
        case "a-220-100":
        case "a-220100":
        case "a220 100":
        case "a220-100":
        case "a220100":
        case "a 220 1":
        case "a 220-1":
        case "a 2201":
        case "a-220 1":
        case "a-220-1":
        case "a-2201":
        case "a220 1":
        case "a220-1":
        case "a2201":
        case "a 22 1":
        case "a 22-1":
        case "a 221":
        case "a-22 1":
        case "a-22-1":
        case "a-221":
        case "a22 1":
        case "a22-1":
        case "a221":
        case "220 100":
        case "220-100":
        case "220100":
        case "220 1":
        case "220-1":
        case "2201":
        case "22 1":
        case "22-1":
        case "221":
        case "a 220 100 ":
        case "a 220-100 ":
        case "a 220100 ":
        case "a-220 100 ":
        case "a-220-100 ":
        case "a-220100 ":
        case "a220 100 ":
        case "a220-100 ":
        case "a220100 ":
        case "a 220 1 ":
        case "a 220-1 ":
        case "a 2201 ":
        case "a-220 1 ":
        case "a-220-1 ":
        case "a-2201 ":
        case "a220 1 ":
        case "a220-1 ":
        case "a2201 ":
        case "a 22 1 ":
        case "a 22-1 ":
        case "a 221 ":
        case "a-22 1 ":
        case "a-22-1 ":
        case "a-221 ":
        case "a22 1 ":
        case "a22-1 ":
        case "a221 ":
        case "220 100 ":
        case "220-100 ":
        case "220100 ":
        case "220 1 ":
        case "220-1 ":
        case "2201 ":
        case "22 1 ":
        case "22-1 ":
        case "221 ":
        case "id13":
        speed = 967; cap = 135; rwy = 4790; mC = 307280; range = 5750; fConsmp = 10.6;
        cConsmp = 0.09; mH = 400; price = 3234528;
        n = "A220-100"; c = 2; pc = "A220"
        break;
        
        case "a 318 100":
        case "a 318-100":
        case "a 318100":
        case "a-318 100":
        case "a-318-100":
        case "a-318100":
        case "a318 100":
        case "a318-100":
        case "a318100":
        case "a 318 1":
        case "a 318-1":
        case "a 3181":
        case "a-318 1":
        case "a-318-1":
        case "a-3181":
        case "a318 1":
        case "a318-1":
        case "a3181":
        case "a318":
        case "a-318":
        case "a 318":
        case "318":
        case "318 100":
        case "318-100":
        case "318100":
        case "318 1":
        case "318-1":
        case "3181":
        case "a 318 100 ":
        case "a 318-100 ":
        case "a 318100 ":
        case "a-318 100 ":
        case "a-318-100 ":
        case "a-318100 ":
        case "a318 100 ":
        case "a318-100 ":
        case "a318100 ":
        case "a 318 1 ":
        case "a 318-1 ":
        case "a 3181 ":
        case "a-318 1 ":
        case "a-318-1 ":
        case "a-3181 ":
        case "a318 1 ":
        case "a318-1 ":
        case "a3181 ":
        case "a318 ":
        case "a-318 ":
        case "a 318 ":
        case "318 ":
        case "318 100 ":
        case "318-100 ":
        case "318100 ":
        case "318 1 ":
        case "318-1 ":
        case "3181 ":
        case "id14":
        speed = 835; cap = 117; rwy = 6500; mC = 350434; range = 6020; fConsmp = 8.4;
        cConsmp = 0.1; mH = 450; price = 4380431
        n = "A318-100"; c = 2; pc = "a318"
        break;
    
        case "a 319 200":
        case "a 319-200":
        case "a 319200":
        case "a-319 200":
        case "a-319-200":
        case "a-319200":
        case "a319 200":
        case "a319-200":
        case "a319200":
        case "a 319 2":
        case "a 319-2":
        case "a 3192":
        case "a-319 2":
        case "a-319-2":
        case "a-3192":
        case "a319 2":
        case "a319-2":
        case "a3192":
        case "319 100":
        case "319-100":
        case "319100":
        case "319 1":
        case "319-1":
        case "3191":
        case "a 319 200 ":
        case "a 319-200 ":
        case "a 319200 ":
        case "a-319 200 ":
        case "a-319-200 ":
        case "a-319200 ":
        case "a319 200 ":
        case "a319-200 ":
        case "a319200 ":
        case "a 319 2 ":
        case "a 319-2 ":
        case "a 3192 ":
        case "a-319 2 ":
        case "a-319-2 ":
        case "a-3192 ":
        case "a319 2 ":
        case "a319-2 ":
        case "a3192 ":
        case "319 100 ":
        case "319-100 ":
        case "319100 ":
        case "319 1 ":
        case "319-1 ":
        case "3191 ":
        case "id15":
        speed = 835; cap = 117; rwy = 6850; mC = 585756; range = 7000; fConsmp = 8.4;
        cConsmp = 0.1; mH = 470; price = 5093525;
        n = "A319-200"; c = 2; pc = "a319"
        break;

        case "a 220 300":
        case "a 220-300":
        case "a 220300":
        case "a-220 300":
        case "a-220-300":
        case "a-220300":
        case "a220 300":
        case "a220-300":
        case "a220300":
        case "a 220 3":
        case "a 220-3":
        case "a 2203":
        case "a-220 3":
        case "a-220-3":
        case "a-2203":
        case "a220 3":
        case "a220-3":
        case "a2203":
        case "a 22 3":
        case "a 22-3":
        case "a 223":
        case "a-22 3":
        case "a-22-3":
        case "a-223":
        case "a22 3":
        case "a22-3":
        case "a223":
        case "220 300":
        case "220-300":
        case "220300":
        case "220 3":
        case "220-3":
        case "2203":
        case "22 3":
        case "22-3":
        case "223":
        case "a 220 300 ":
        case "a 220-300 ":
        case "a 220300 ":
        case "a-220 300 ":
        case "a-220-300 ":
        case "a-220300 ":
        case "a220 300 ":
        case "a220-300 ":
        case "a220300 ":
        case "a 220 3 ":
        case "a 220-3 ":
        case "a 2203 ":
        case "a-220 3 ":
        case "a-220-3 ":
        case "a-2203 ":
        case "a220 3 ":
        case "a220-3 ":
        case "a2203 ":
        case "a 22 3 ":
        case "a 22-3 ":
        case "a 223 ":
        case "a-22 3 ":
        case "a-22-3 ":
        case "a-223 ":
        case "a22 3 ":
        case "a22-3 ":
        case "a223 ":
        case "220 300 ":
        case "220-300 ":
        case "220300 ":
        case "220 3 ":
        case "220-3 ":
        case "2203 ":
        case "22 3 ":
        case "22-3 ":
        case "223 ":
        case "id16":
        speed = 967; cap = 160; rwy = 4900; mC = 533884; range = 6110; fConsmp = 12.72;
        cConsmp = 0.1; mH = 400; price = 5619831;
        n = "A220-300"; c = 2; pc = "A220"
    
        case "a 320 200":
        case "a 320-200":
        case "a 320200":
        case "a-320 200":
        case "a-320-200":
        case "a-320200":
        case "a320 200":
        case "a320-200":
        case "a320200":
        case "a 320 2":
        case "a 320-2":
        case "a 3202":
        case "a-320 2":
        case "a-320-2":
        case "a-3202":
        case "a320 2":
        case "a320-2":
        case "a3202":
        case "a 32 2":
        case "a 32-2":
        case "a 322":
        case "a-32 2":
        case "a-32-2":
        case "a-322":
        case "a32 2":
        case "a32-2":
        case "a322":
        case "320 200":
        case "320-200":
        case "320200":
        case "320 2":
        case "320-2":
        case "3202":
        case "32 2":
        case "32-2":
        case "322":
        case "a 320 200 ":
        case "a 320-200 ":
        case "a 320200 ":
        case "a-320 200 ":
        case "a-320-200 ":
        case "a-320200 ":
        case "a320 200 ":
        case "a320-200 ":
        case "a320200 ":
        case "a 320 2 ":
        case "a 320-2 ":
        case "a 3202 ":
        case "a-320 2 ":
        case "a-320-2 ":
        case "a-3202 ":
        case "a320 2 ":
        case "a320-2 ":
        case "a3202 ":
        case "a 32 2 ":
        case "a 32-2 ":
        case "a 322 ":
        case "a-32 2 ":
        case "a-32-2 ":
        case "a-322 ":
        case "a32 2 ":
        case "a32-2 ":
        case "a322 ":
        case "320 200 ":
        case "320-200 ":
        case "320200 ":
        case "320 2 ":
        case "320-2 ":
        case "3202 ":
        case "32 2 ":
        case "32-2 ":
        case "322 ":
        case "starter1":
        case "starter1 ":
        case "id17":
        speed = 881; cap = 164; rwy = 7000; mC = 1049380; range = 5700; fConsmp = 11.55;
        cConsmp = 0.14; mH = 360; price = 6770196
        n = "A320-200"; c = 2; pc = "a320"
        break;
    
        case "a 319 neo":
        case "a 319-neo":
        case "a 319neo":
        case "a-319 neo":
        case "a-319-neo":
        case "a-319neo":
        case "a319 neo":
        case "a319-neo":
        case "a319neo":
        case "319 neo":
        case "319-neo":
        case "319neo":
        case "a 319 neo ":
        case "a 319-neo ":
        case "a 319neo ":
        case "a-319 neo ":
        case "a-319-neo ":
        case "a-319neo ":
        case "a319 neo ":
        case "a319-neo ":
        case "a319neo ":
        case "319 neo ":
        case "319-neo ":
        case "319neo ":
        case "id18":
        speed = 949; cap = 160; rwy = 6000; mC = 650320; range = 6950; fConsmp = 11; 
        cConsmp = 0.08; mH = 400; price = 6845472
        n = "A319neo"; c = 2; pc = "A319neo"
        break;
    
        case "a 321 200":
        case "a 321-200":
        case "a 321200":
        case "a-321 200":
        case "a-321-200":
        case "a-321200":
        case "a321 200":
        case "a321-200":
        case "a321200":
        case "a 321 2":
        case "a 321-2":
        case "a 3212":
        case "a-321 2":
        case "a-321-2":
        case "a-3212":
        case "a321 2":
        case "a321-2":
        case "a3212":
        case "321 200":
        case "321-200":
        case "321200":
        case "321 2":
        case "321-2":
        case "3212":
        case "a 321 200 ":
        case "a 321-200 ":
        case "a 321200 ":
        case "a-321 200 ":
        case "a-321-200 ":
        case "a-321200 ":
        case "a321 200 ":
        case "a321-200 ":
        case "a321200 ":
        case "a 321 2 ":
        case "a 321-2 ":
        case "a 3212 ":
        case "a-321 2 ":
        case "a-321-2 ":
        case "a-3212 ":
        case "a321 2 ":
        case "a321-2 ":
        case "a3212 ":
        case "321 200 ":
        case "321-200 ":
        case "321200 ":
        case "321 2 ":
        case "321-2 ":
        case "3212 ":
        case "id19":
        speed = 835; cap = 220; rwy = 7250; mC = 1019304; range = 6000; fConsmp = 18.9;
        cConsmp = 0.15; mH = 500; price = 8154432
        n = "A321-200"; c = 2; pc = "a321"
        break;
    
        case "a 300 b2 200":
        case "a 300 b2-200":
        case "a 300 b2200":
        case "a 300-b2 200":
        case "a 300-b2-200":
        case "a 300-b2200":
        case "a 300b2 200":
        case "a 300b2-200":
        case "a 300b2200":
        case "a-300 b2 200":
        case "a-300 b2-200":
        case "a-300 b2200":
        case "a-300-b2 200":
        case "a-300-b2-200":
        case "a-300-b2200":
        case "a-300b2 200":
        case "a-300b2-200":
        case "a-300b2200":
        case "a300 b2 200":
        case "a300 b2-200":
        case "a300 b2200":
        case "a300-b2 200":
        case "a300-b2-200":
        case "a300-b2200":
        case "a300b2 200":
        case "a300b2-200":
        case "a300b2200":
        case "300 b2-200":
        case "300 b2 200":
        case "300 b2200":
        case "300-b2-200":
        case "300-b2 200":
        case "300-b2200":
        case "300b2-200":
        case "300b2 200":
        case "300b2200":
        case "b2-200":
        case "b2200":
        case "b2 200":
        case "a 300 b2 200 ":
        case "a 300 b2-200 ":
        case "a 300 b2200 ":
        case "a 300-b2 200 ":
        case "a 300-b2-200 ":
        case "a 300-b2200 ":
        case "a 300b2 200 ":
        case "a 300b2-200 ":
        case "a 300b2200 ":
        case "a-300 b2 200 ":
        case "a-300 b2-200 ":
        case "a-300 b2200 ":
        case "a-300-b2 200 ":
        case "a-300-b2-200 ":
        case "a-300-b2200 ":
        case "a-300b2 200 ":
        case "a-300b2-200 ":
        case "a-300b2200 ":
        case "a300 b2 200 ":
        case "a300 b2-200 ":
        case "a300 b2200 ":
        case "a300-b2 200 ":
        case "a300-b2-200 ":
        case "a300-b2200 ":
        case "a300b2 200 ":
        case "a300b2-200 ":
        case "a300b2200 ":
        case "300 b2-200 ":
        case "300 b2 200 ":
        case "300 b2200 ":
        case "300-b2-200 ":
        case "300-b2 200 ":
        case "300-b2200 ":
        case "300b2-200 ":
        case "300b2 200 ":
        case "300b2200 ":
        case "b2-200 ":
        case "b2200 ":
        case "b2 200 ":
        case "id20":
        speed = 864; cap = 269; rwy = 7625; mC = 2611192; range = 3430; fConsmp = 19.08;
        cConsmp = 0.22; mH = 350; price = 11605297;
        n = "A300B2-200"; c = 2; pc = "a300"
        break;

        case "a 320 neo":
        case "a 320-neo":
        case "a 320neo":
        case "a-320 neo":
        case "a-320-neo":
        case "a-320neo":
        case "a320 neo":
        case "a320-neo":
        case "a320neo":
        case "320 neo":
        case "320-neo":
        case "320neo":
        case "a 320 neo ":
        case "a 320-neo ":
        case "a 320neo ":
        case "a-320 neo ":
        case "a-320-neo ":
        case "a-320neo ":
        case "a320 neo ":
        case "a320-neo ":
        case "a320neo ":
        case "320 neo ":
        case "320-neo ":
        case "320neo ":
        case "id21":
        speed = 893; cap = 164; rwy = 7000; mC = 590808; range = 7000; fConsmp = 7.07;
        cConsmp = 0.09; mH = 540; price = 14770196;
        n = "A320neo"; c = 2; pc = "a320"
        break;

        case "a 340 200":
        case "a 340-200":
        case "a 340200":
        case "a-340 200":
        case "a-340-200":
        case "a-340200":
        case "a340 200":
        case "a340-200":
        case "a340200":
        case "a 340 2":
        case "a 340-2":
        case "a 3402":
        case "a-340 2":
        case "a-340-2":
        case "a-3402":
        case "a340 2":
        case "a340-2":
        case "a3402":
        case "a 34 2":
        case "a 34-2":
        case "a 342":
        case "a-34 2":
        case "a-34-2":
        case "a-342":
        case "a34 2":
        case "a34-2":
        case "a342":
        case "340 200":
        case "340-200":
        case "340200":
        case "340 2":
        case "340-2":
        case "3402":
        case "34 2":
        case "34-2":
        case "342":
        case "a 340 200 ":
        case "a 340-200 ":
        case "a 340200 ":
        case "a-340 200 ":
        case "a-340-200 ":
        case "a-340200 ":
        case "a340 200 ":
        case "a340-200 ":
        case "a340200 ":
        case "a 340 2 ":
        case "a 340-2 ":
        case "a 3402 ":
        case "a-340 2 ":
        case "a-340-2 ":
        case "a-3402 ":
        case "a340 2 ":
        case "a340-2 ":
        case "a3402 ":
        case "a 34 2 ":
        case "a 34-2 ":
        case "a 342 ":
        case "a-34 2 ":
        case "a-34-2 ":
        case "a-342 ":
        case "a34 2 ":
        case "a34-2 ":
        case "a342 ":
        case "340 200 ":
        case "340-200 ":
        case "340200 ":
        case "340 2 ":
        case "340-2 ":
        case "3402 ":
        case "34 2 ":
        case "34-2 ":
        case "342 ":
        case "id22":
        speed = 950; cap = 239; rwy = 9810; mC = 2039464; range = 14800; fConsmp = 18.18;
        cConsmp = 0.22; mH = 500; price = 15688189;
        n = "A340-200"; c = 2; pc = "a340-200"
        break;

        case "a 300 b4 200":
        case "a 300 b4-200":
        case "a 300 b4200":
        case "a 300-b4 200":
        case "a 300-b4-200":
        case "a 300-b4200":
        case "a 300b4 200":
        case "a 300b4-200":
        case "a 300b4200":
        case "a-300 b4 200":
        case "a-300 b4-200":
        case "a-300 b4200":
        case "a-300-b4 200":
        case "a-300-b4-200":
        case "a-300-b4200":
        case "a-300b4 200":
        case "a-300b4-200":
        case "a-300b4200":
        case "a300 b4 200":
        case "a300 b4-200":
        case "a300 b4200":
        case "a300-b4 200":
        case "a300-b4-200":
        case "a300-b4200":
        case "a300b4 200":
        case "a300b4-200":
        case "a300b4200":
        case "300 b4-200":
        case "300 b4 200":
        case "300 b4200":
        case "300-b4-200":
        case "300-b4 200":
        case "300-b4200":
        case "300b4-200":
        case "300b4 200":
        case "300b4200":
        case "b4-200":
        case "b4200":
        case "b4 200":
        case "a 300 b4 200 ":
        case "a 300 b4-200 ":
        case "a 300 b4200 ":
        case "a 300-b4 200 ":
        case "a 300-b4-200 ":
        case "a 300-b4200 ":
        case "a 300b4 200 ":
        case "a 300b4-200 ":
        case "a 300b4200 ":
        case "a-300 b4 200 ":
        case "a-300 b4-200 ":
        case "a-300 b4200 ":
        case "a-300-b4 200 ":
        case "a-300-b4-200 ":
        case "a-300-b4200 ":
        case "a-300b4 200 ":
        case "a-300b4-200 ":
        case "a-300b4200 ":
        case "a300 b4 200 ":
        case "a300 b4-200 ":
        case "a300 b4200 ":
        case "a300-b4 200 ":
        case "a300-b4-200 ":
        case "a300-b4200 ":
        case "a300b4 200 ":
        case "a300b4-200 ":
        case "a300b4200 ":
        case "300 b4-200 ":
        case "300 b4 200 ":
        case "300 b4200 ":
        case "300-b4-200 ":
        case "300-b4 200 ":
        case "300-b4200 ":
        case "300b4-200 ":
        case "300b4 200 ":
        case "300b4200 ":
        case "b4-200 ":
        case "b4200 ":
        case "b4 200 ":
        case "id23":
        speed = 864; cap = 269; rwy = 7625; mC = 3943432; range = 6300; fConsmp = 19.08;
        cConsmp = 0.22; mH = 330; price = 21315852;
        n = "A300B4-200"; c = 2; pc = "a300"
        break;

        case "a 321 neo":
        case "a 321-neo":
        case "a 321neo":
        case "a-321 neo":
        case "a-321-neo":
        case "a-321neo":
        case "a321 neo":
        case "a321-neo":
        case "a321neo":
        case "321 neo":
        case "321-neo":
        case "321neo":
        case "a 321 neo ":
        case "a 321-neo ":
        case "a 321neo ":
        case "a-321 neo ":
        case "a-321-neo ":
        case "a-321neo ":
        case "a321 neo ":
        case "a321-neo ":
        case "a321neo ":
        case "321 neo ":
        case "321-neo ":
        case "321neo ":
        case "id24":
        speed = 893; cap = 189; rwy = 7250; mC = 910440; range = 7250; fConsmp = 10.1;
        cConsmp = 0.12; mH = 550; price = 22760999
        n = "A321neo"; c = 2; pc = "a321"
        break;

        case "a 300 600":
        case "a 300-600":
        case "a 300600":
        case "a-300 600":
        case "a-300-600":
        case "a-300600":
        case "a300 600":
        case "a300-600":
        case "a300600":
        case "a 300 6":
        case "a 300-6":
        case "a 3006":
        case "a-300 6":
        case "a-300-6":
        case "a-3006":
        case "a300 6":
        case "a300-6":
        case "a3006":
        case "300-600":
        case "300600":
        case "300 600":
        case "a 300 600 ":
        case "a 300-600 ":
        case "a 300600 ":
        case "a-300 600 ":
        case "a-300-600 ":
        case "a-300600 ":
        case "a300 600 ":
        case "a300-600 ":
        case "a300600 ":
        case "a 300 6 ":
        case "a 300-6 ":
        case "a 3006 ":
        case "a-300 6 ":
        case "a-300-6 ":
        case "a-3006 ":
        case "a300 6 ":
        case "a300-6 ":
        case "a3006 ":
        case "300-600 ":
        case "300600 ":
        case "300 600 ":
        case "id25":
        speed = 980; cap = 267; rwy = 7625; mC = 4196132; range = 6670; fConsmp = 17.17;
        cConsmp = 0.21; mH = 330; price = 24683135
        n = "A300-600"; c = 2; pc = "a300"
        break;

        case "a 310 200":
        case "a 310-200":
        case "a 310200":
        case "a-310 200":
        case "a-310-200":
        case "a-310200":
        case "a310 200":
        case "a310-200":
        case "a310200":
        case "a 310 2":
        case "a 310-2":
        case "a 3102":
        case "a-310 2":
        case "a-310-2":
        case "a-3102":
        case "a310 2":
        case "a310-2":
        case "a3102":
        case "a 31 2":
        case "a 31-2":
        case "a 312":
        case "a-31 2":
        case "a-31-2":
        case "a-312":
        case "a31 2":
        case "a31-2":
        case "a312":
        case "310 200":
        case "310-200":
        case "310200":
        case "310 2":
        case "310-2":
        case "3102":
        case "31 2":
        case "31-2":
        case "312":
        case "a 310 200 ":
        case "a 310-200 ":
        case "a 310200 ":
        case "a-310 200 ":
        case "a-310-200 ":
        case "a-310200 ":
        case "a310 200 ":
        case "a310-200 ":
        case "a310200 ":
        case "a 310 2 ":
        case "a 310-2 ":
        case "a 3102 ":
        case "a-310 2 ":
        case "a-310-2 ":
        case "a-3102 ":
        case "a310 2 ":
        case "a310-2 ":
        case "a3102 ":
        case "a 31 2 ":
        case "a 31-2 ":
        case "a 312 ":
        case "a-31 2 ":
        case "a-31-2 ":
        case "a-312 ":
        case "a31 2 ":
        case "a31-2 ":
        case "a312 ":
        case "310 200 ":
        case "310-200 ":
        case "310200 ":
        case "310 2 ":
        case "310-2 ":
        case "3102 ":
        case "31 2 ":
        case "31-2 ":
        case "312 ":
        case "id26":
        speed = 935; cap = 280; rwy = 7000; mC = 5081314; range = 6800; fConsmp = 17.28;
        cConsmp = 0.2; mH = 340; price = 27466560
        n = "A310-200"; c = 2; pc = "a310"
        break;

        case "a 300 600r":
        case "a 300-600r":
        case "a 300600r":
        case "a-300 600r":
        case "a-300-600r":
        case "a-300600r":
        case "a300 600r":
        case "a300-600r":
        case "a300600r":
        case "a 300 6r":
        case "a 300-6r":
        case "a 3006r":
        case "a-300 6r":
        case "a-300-6r":
        case "a-3006r":
        case "a300 6r":
        case "a300-6r":
        case "a3006r":
        case "a 300 600-r":
        case "a 300-600-r":
        case "a 300600-r":
        case "a-300 600-r":
        case "a-300-600-r":
        case "a-300600-r":
        case "a300 600-r":
        case "a300-600-r":
        case "a300600-r":
        case "a 300 6-r":
        case "a 300-6-r":
        case "a 3006-r":
        case "a-300 6-r":
        case "a-300-6-r":
        case "a-3006-r":
        case "a300 6-r":
        case "a300-6-r":
        case "a3006-r":
        case "a 300 600 r":
        case "a 300-600 r":
        case "a 300600 r":
        case "a-300 600 r":
        case "a-300-600 r":
        case "a-300600 r":
        case "a300 600 r":
        case "a300-600 r":
        case "a300600 r":
        case "a 300 6 r":
        case "a 300-6 r":
        case "a 3006 r":
        case "a-300 6 r":
        case "a-300-6 r":
        case "a-3006 r":
        case "a300 6 r":
        case "a300-6 r":
        case "a3006 r":
        case "300 600 r":
        case "300 600-r":
        case "300 600r":
        case "300-600 r":
        case "300-600-r":
        case "300-600r":
        case "300600 r":
        case "300600-r":
        case "300600r":
        case "a 300 600r ":
        case "a 300-600r ":
        case "a 300600r ":
        case "a-300 600r ":
        case "a-300-600r ":
        case "a-300600r ":
        case "a300 600r ":
        case "a300-600r ":
        case "a300600r ":
        case "a 300 6r ":
        case "a 300-6r ":
        case "a 3006r ":
        case "a-300 6r ":
        case "a-300-6r ":
        case "a-3006r ":
        case "a300 6r ":
        case "a300-6r ":
        case "a3006r ":
        case "a 300 600-r ":
        case "a 300-600-r ":
        case "a 300600-r ":
        case "a-300 600-r ":
        case "a-300-600-r ":
        case "a-300600-r ":
        case "a300 600-r ":
        case "a300-600-r ":
        case "a300600-r ":
        case "a 300 6-r ":
        case "a 300-6-r ":
        case "a 3006-r ":
        case "a-300 6-r ":
        case "a-300-6-r ":
        case "a-3006-r ":
        case "a300 6-r ":
        case "a300-6-r ":
        case "a3006-r ":
        case "a 300 600 r ":
        case "a 300-600 r ":
        case "a 300600 r ":
        case "a-300 600 r ":
        case "a-300-600 r ":
        case "a-300600 r ":
        case "a300 600 r ":
        case "a300-600 r ":
        case "a300600 r ":
        case "a 300 6 r ":
        case "a 300-6 r ":
        case "a 3006 r ":
        case "a-300 6 r ":
        case "a-300-6 r ":
        case "a-3006 r ":
        case "a300 6 r ":
        case "a300-6 r ":
        case "a3006 r ":
        case "300 600 r ":
        case "300 600-r ":
        case "300 600r ":
        case "300-600 r ":
        case "300-600-r ":
        case "300-600r ":
        case "300600 r ":
        case "300600-r ":
        case "300600r ":
        case "id27":
        speed = 963; cap = 267; rwy = 7625; mC = 4304838; range = 7505; fConsmp = 18.02;
        cConsmp = 0.21; mH = 370; price = 27773153
        n = "A300-600R"; c = 2; pc = "a300"
        break;

        case "a 321 xlr":
        case "a 321-xlr":
        case "a 321xlr":
        case "a-321 xlr":
        case "a-321-xlr":
        case "a-321xlr":
        case "a321 xlr":
        case "a321-xlr":
        case "a321xlr":
        case "321 xlr":
        case "321-xlr":
        case "321xlr":
        case "a 321 xlr ":
        case "a 321-xlr ":
        case "a 321xlr ":
        case "a-321 xlr ":
        case "a-321-xlr ":
        case "a-321xlr ":
        case "a321 xlr ":
        case "a321-xlr ":
        case "a321xlr ":
        case "321 xlr ":
        case "321-xlr ":
        case "321xlr ":
        case "id28":
        speed = 920; cap = 220; rwy = 7500; mC = 1020000; range = 8900; fConsmp = 14.14;
        cConsmp = 0.16; mH = 500; price = 29990999
        n = "A321XLR"; c = 2; pc = "a321"
        break;

        case "a 310 300":
        case "a 310-300":
        case "a 310300":
        case "a-310 300":
        case "a-310-300":
        case "a-310300":
        case "a310 300":
        case "a310-300":
        case "a310300":
        case "a 310 3":
        case "a 310-3":
        case "a 3103":
        case "a-310 3":
        case "a-310-3":
        case "a-3103":
        case "a310 3":
        case "a310-3":
        case "a3103":
        case "a 31 3":
        case "a 31-3":
        case "a 313":
        case "a-31 3":
        case "a-31-3":
        case "a-313":
        case "a31 3":
        case "a31-3":
        case "a313":
        case "310 300":
        case "310-300":
        case "310300":
        case "310 3":
        case "310-3":
        case "3103":
        case "31 3":
        case "31-3":
        case "313":
        case "a 310 300 ":
        case "a 310-300 ":
        case "a 310300 ":
        case "a-310 300 ":
        case "a-310-300 ":
        case "a-310300 ":
        case "a310 300 ":
        case "a310-300 ":
        case "a310300 ":
        case "a 310 3 ":
        case "a 310-3 ":
        case "a 3103 ":
        case "a-310 3 ":
        case "a-310-3 ":
        case "a-3103 ":
        case "a310 3 ":
        case "a310-3 ":
        case "a3103 ":
        case "a 31 3 ":
        case "a 31-3 ":
        case "a 313 ":
        case "a-31 3 ":
        case "a-31-3 ":
        case "a-313 ":
        case "a31 3 ":
        case "a31-3 ":
        case "a313 ":
        case "310 300 ":
        case "310-300 ":
        case "310300 ":
        case "310 3 ":
        case "310-3 ":
        case "3103 ":
        case "31 3 ":
        case "31-3 ":
        case "313 ":
        case "id29":
        speed = 935; cap = 280; rwy = 6000; mC = 6591974; range = 9600; fConsmp = 17.28;
        cConsmp = 0.2; mH = 340; price = 36776320;
        n = "A310-300"; c = 2; pc = "a310"
        break;

        case "a 330 300":
        case "a 330-300":
        case "a 330300":
        case "a-330 300":
        case "a-330-300":
        case "a-330300":
        case "a330 300":
        case "a330-300":
        case "a330300":
        case "a 330 3":
        case "a 330-3":
        case "a 3303":
        case "a-330 3":
        case "a-330-3":
        case "a-3303":
        case "a330 3":
        case "a330-3":
        case "a3303":
        case "a 33 3":
        case "a 33-3":
        case "a 333":
        case "a-33 3":
        case "a-33-3":
        case "a-333":
        case "a33 3":
        case "a33-3":
        case "a333":
        case "330 300":
        case "330-300":
        case "330300":
        case "330 3":
        case "330-3":
        case "3303":
        case "33 3":
        case "33-3":
        case "333":
        case "a 330 300 ":
        case "a 330-300 ":
        case "a 330300 ":
        case "a-330 300 ":
        case "a-330-300 ":
        case "a-330300 ":
        case "a330 300 ":
        case "a330-300 ":
        case "a330300 ":
        case "a 330 3 ":
        case "a 330-3 ":
        case "a 3303 ":
        case "a-330 3 ":
        case "a-330-3 ":
        case "a-3303 ":
        case "a330 3 ":
        case "a330-3 ":
        case "a3303 ":
        case "a 33 3 ":
        case "a 33-3 ":
        case "a 333 ":
        case "a-33 3 ":
        case "a-33-3 ":
        case "a-333 ":
        case "a33 3 ":
        case "a33-3 ":
        case "a333 ":
        case "330 300 ":
        case "330-300 ":
        case "330300 ":
        case "330 3 ":
        case "330-3 ":
        case "3303 ":
        case "33 3 ":
        case "33-3 ":
        case "333 ":
        case "id30":
        speed = 958; cap = 335; rwy = 9090; mC = 6066210; range = 10000; fConsmp = 19.26;
        cConsmp = 0.22; mH = 450; price = 43330073;
        n = "A330-300"; c = 2; pc = "a330-300"
        break;

        case "a 330 200":
        case "a 330-200":
        case "a 330200":
        case "a-330 200":
        case "a-330-200":
        case "a-330200":
        case "a330 200":
        case "a330-200":
        case "a330200":
        case "a 330 2":
        case "a 330-2":
        case "a 3302":
        case "a-330 2":
        case "a-330-2":
        case "a-3302":
        case "a330 2":
        case "a330-2":
        case "a3302":
        case "a 33 2":
        case "a 33-2":
        case "a 332":
        case "a-33 2":
        case "a-33-2":
        case "a-332":
        case "a33 2":
        case "a33-2":
        case "a332":
        case "330 200":
        case "330-200":
        case "330200":
        case "330 2":
        case "330-2":
        case "3302":
        case "33 2":
        case "33-2":
        case "332":
        case "a 330 200 ":
        case "a 330-200 ":
        case "a 330200 ":
        case "a-330 200 ":
        case "a-330-200 ":
        case "a-330200 ":
        case "a330 200 ":
        case "a330-200 ":
        case "a330200 ":
        case "a 330 2 ":
        case "a 330-2 ":
        case "a 3302 ":
        case "a-330 2 ":
        case "a-330-2 ":
        case "a-3302 ":
        case "a330 2 ":
        case "a330-2 ":
        case "a3302 ":
        case "a 33 2 ":
        case "a 33-2 ":
        case "a 332 ":
        case "a-33 2 ":
        case "a-33-2 ":
        case "a-332 ":
        case "a33 2 ":
        case "a33-2 ":
        case "a332 ":
        case "330 200 ":
        case "330-200 ":
        case "330200 ":
        case "330 2 ":
        case "330-2 ":
        case "3302 ":
        case "33 2 ":
        case "33-2 ":
        case "332 ":
        case "id31":
        speed = 958; cap = 253; rwy = 9090; mC = 4581346; range = 12500; fConsmp = 18.19;
        cConsmp = 0.21; mH = 460; price = 43631874;
        n = "A330-200"; c = 2; pc = "a330-300"
        break;

        case "a 340 300":
        case "a 340-300":
        case "a 340300":
        case "a-340 300":
        case "a-340-300":
        case "a-340300":
        case "a340 300":
        case "a340-300":
        case "a340300":
        case "a 340 3":
        case "a 340-3":
        case "a 3403":
        case "a-340 3":
        case "a-340-3":
        case "a-3403":
        case "a340 3":
        case "a340-3":
        case "a3403":
        case "a 34 3":
        case "a 34-3":
        case "a 343":
        case "a-34 3":
        case "a-34-3":
        case "a-343":
        case "a34 3":
        case "a34-3":
        case "a343":
        case "340 300":
        case "340-300":
        case "340300":
        case "340 3":
        case "340-3":
        case "3403":
        case "34 3":
        case "34-3":
        case "343":
        case "a 340 300 ":
        case "a 340-300 ":
        case "a 340300 ":
        case "a-340 300 ":
        case "a-340-300 ":
        case "a-340300 ":
        case "a340 300 ":
        case "a340-300 ":
        case "a340300 ":
        case "a 340 3 ":
        case "a 340-3 ":
        case "a 3403 ":
        case "a-340 3 ":
        case "a-340-3 ":
        case "a-3403 ":
        case "a340 3 ":
        case "a340-3 ":
        case "a3403 ":
        case "a 34 3 ":
        case "a 34-3 ":
        case "a 343 ":
        case "a-34 3 ":
        case "a-34-3 ":
        case "a-343 ":
        case "a34 3 ":
        case "a34-3 ":
        case "a343 ":
        case "340 300 ":
        case "340-300 ":
        case "340300 ":
        case "340 3 ":
        case "340-3 ":
        case "3403 ":
        case "34 3 ":
        case "34-3 ":
        case "343 ":
        case "id32":
        speed = 1004; cap = 335; rwy = 10200; mC = 7211044; range = 14000; fConsmp = 21.4;
        cConsmp = 0.25; mH = 470; price = 55469568
        n = "A340-300"; c = 2; pc = "a340-200"
        break;

        case "a 350 800":
        case "a 350-800":
        case "a 350800":
        case "a-350 800":
        case "a-350-800":
        case "a-350800":
        case "a350 800":
        case "a350-800":
        case "a350800":
        case "a 350 8":
        case "a 350-8":
        case "a 3508":
        case "a-350 8":
        case "a-350-8":
        case "a-3508":
        case "a350 8":
        case "a350-8":
        case "a3508":
        case "a 35 8":
        case "a 35-8":
        case "a 358":
        case "a-35 8":
        case "a-35-8":
        case "a-358":
        case "a35 8":
        case "a35-8":
        case "a358":
        case "350 800":
        case "350-800":
        case "350800":
        case "350 8":
        case "350-8":
        case "3508":
        case "35 8":
        case "35-8":
        case "358":
        case "a 350 800 ":
        case "a 350-800 ":
        case "a 350800 ":
        case "a-350 800 ":
        case "a-350-800 ":
        case "a-350800 ":
        case "a350 800 ":
        case "a350-800 ":
        case "a350800 ":
        case "a 350 8 ":
        case "a 350-8 ":
        case "a 3508 ":
        case "a-350 8 ":
        case "a-350-8 ":
        case "a-3508 ":
        case "a350 8 ":
        case "a350-8 ":
        case "a3508 ":
        case "a 35 8 ":
        case "a 35-8 ":
        case "a 358 ":
        case "a-35 8 ":
        case "a-35-8 ":
        case "a-358 ":
        case "a35 8 ":
        case "a35-8 ":
        case "a358 ":
        case "350 800 ":
        case "350-800 ":
        case "350800 ":
        case "350 8 ":
        case "350-8 ":
        case "3508 ":
        case "35 8 ":
        case "35-8 ":
        case "358 ":
        case "id33":
        speed = 860; cap = 270; rwy = 8760; mC = 2800812; range = 14500; fConsmp = 15.98; 
        cConsmp = 0.21; mH = 530; price = 62240270;
        n = "A350-800"; c = 2; pc = "a350-900"
        break;

        case "a 340 500":
        case "a 340-500":
        case "a 340500":
        case "a-340 500":
        case "a-340-500":
        case "a-340500":
        case "a340 500":
        case "a340-500":
        case "a340500":
        case "a 340 5":
        case "a 340-5":
        case "a 3405":
        case "a-340 5":
        case "a-340-5":
        case "a-3405":
        case "a340 5":
        case "a340-5":
        case "a3405":
        case "a 34 5":
        case "a 34-5":
        case "a 345":
        case "a-34 5":
        case "a-34-5":
        case "a-345":
        case "a34 5":
        case "a34-5":
        case "a345":
        case "340 500":
        case "340-500":
        case "340500":
        case "340 5":
        case "340-5":
        case "3405":
        case "34 5":
        case "34-5":
        case "345":
        case "a 340 500 ":
        case "a 340-500 ":
        case "a 340500 ":
        case "a-340 500 ":
        case "a-340-500 ":
        case "a-340500 ":
        case "a340 500 ":
        case "a340-500 ":
        case "a340500 ":
        case "a 340 5 ":
        case "a 340-5 ":
        case "a 3405 ":
        case "a-340 5 ":
        case "a-340-5 ":
        case "a-3405 ":
        case "a340 5 ":
        case "a340-5 ":
        case "a3405 ":
        case "a 34 5 ":
        case "a 34-5 ":
        case "a 345 ":
        case "a-34 5 ":
        case "a-34-5 ":
        case "a-345 ":
        case "a34 5 ":
        case "a34-5 ":
        case "a345 ":
        case "340 500 ":
        case "340-500 ":
        case "340500 ":
        case "340 5 ":
        case "340-5 ":
        case "3405 ":
        case "34 5 ":
        case "34-5 ":
        case "345 ":
        case "id34":
        speed = 862; cap = 313; rwy = 10200; mC = 5632284; range = 14500; fConsmp = 17.10;
        cConsmp = 0.24; mH = 480; price = 66262163;
        n = "A340-500"; c = 2; pc = "a340-200"
        break;

        case "a 340 600":
        case "a 340-600":
        case "a 340600":
        case "a-340 600":
        case "a-340-600":
        case "a-340600":
        case "a340 600":
        case "a340-600":
        case "a340600":
        case "a 340 6":
        case "a 340-6":
        case "a 3406":
        case "a-340 6":
        case "a-340-6":
        case "a-3406":
        case "a340 6":
        case "a340-6":
        case "a3406":
        case "a 34 6":
        case "a 34-6":
        case "a 346":
        case "a-34 6":
        case "a-34-6":
        case "a-346":
        case "a34 6":
        case "a34-6":
        case "a346":
        case "340 600":
        case "340-600":
        case "340600":
        case "340 6":
        case "340-6":
        case "3406":
        case "34 6":
        case "34-6":
        case "346":
        case "a 340 600 ":
        case "a 340-600 ":
        case "a 340600 ":
        case "a-340 600 ":
        case "a-340-600 ":
        case "a-340600 ":
        case "a340 600 ":
        case "a340-600 ":
        case "a340600 ":
        case "a 340 6 ":
        case "a 340-6 ":
        case "a 3406 ":
        case "a-340 6 ":
        case "a-340-6 ":
        case "a-3406 ":
        case "a340 6 ":
        case "a340-6 ":
        case "a3406 ":
        case "a 34 6 ":
        case "a 34-6 ":
        case "a 346 ":
        case "a-34 6 ":
        case "a-34-6 ":
        case "a-346 ":
        case "a34 6 ":
        case "a34-6 ":
        case "a346 ":
        case "340 600 ":
        case "340-600 ":
        case "340600 ":
        case "340 6 ":
        case "340-6 ":
        case "3406 ":
        case "34 6 ":
        case "34-6 ":
        case "346 ":
        case "id35":
        speed = 871; cap = 380; rwy = 10200; mC = 6289860; range = 14630; fConsmp = 20.68;
        cConsmp = 0.28; mH = 460; price = 69887329
        n = "A340-600"; c = 2; pc = "a340-200"
        break;

        case "a 350 900":
        case "a 350-900":
        case "a 350900":
        case "a-350 900":
        case "a-350-900":
        case "a-350900":
        case "a350 900":
        case "a350-900":
        case "a350900":
        case "a 350 9":
        case "a 350-9":
        case "a 3509":
        case "a-350 9":
        case "a-350-9":
        case "a-3509":
        case "a350 9":
        case "a350-9":
        case "a3509":
        case "a 35 9":
        case "a 35-9":
        case "a 359":
        case "a-35 9":
        case "a-35-9":
        case "a-359":
        case "a35 9":
        case "a35-9":
        case "a359":
        case "350 900":
        case "350-900":
        case "350900":
        case "350 9":
        case "350-9":
        case "3509":
        case "35 9":
        case "35-9":
        case "359":
        case "a 350 900 ":
        case "a 350-900 ":
        case "a 350900 ":
        case "a-350 900 ":
        case "a-350-900 ":
        case "a-350900 ":
        case "a350 900 ":
        case "a350-900 ":
        case "a350900 ":
        case "a 350 9 ":
        case "a 350-9 ":
        case "a 3509 ":
        case "a-350 9 ":
        case "a-350-9 ":
        case "a-3509 ":
        case "a350 9 ":
        case "a350-9 ":
        case "a3509 ":
        case "a 35 9 ":
        case "a 35-9 ":
        case "a 359 ":
        case "a-35 9 ":
        case "a-35-9 ":
        case "a-359 ":
        case "a35 9 ":
        case "a35-9 ":
        case "a359 ":
        case "350 900 ":
        case "350-900 ":
        case "350900 ":
        case "350 9 ":
        case "350-9 ":
        case "3509 ":
        case "35 9 ":
        case "35-9 ":
        case "359 ":
        case "id36":
        speed = 860; cap = 314; rwy = 8760; mC = 2820122; range = 14500; fConsmp = 15.98;
        cConsmp = 0.21; mH = 550; price = 70503048
        n = "A350-900"; c = 2; pc = "a350-900"
        break;

        case "a 350 1000":
        case "a 350-1000":
        case "a 3501000":
        case "a-350 1000":
        case "a-350-1000":
        case "a-3501000":
        case "a350 1000":
        case "a350-1000":
        case "a3501000":
        case "a 350 10":
        case "a 350-10":
        case "a 35010":
        case "a-350 10":
        case "a-350-10":
        case "a-35010":
        case "a350 10":
        case "a350-10":
        case "a35010":
        case "a 35 10":
        case "a 35-10":
        case "a 3510":
        case "a-35 10":
        case "a-35-10":
        case "a-3510":
        case "a35 10":
        case "a35-10":
        case "a3510":
        case "350 1000":
        case "350-1000":
        case "3501000":
        case "350 10":
        case "350-10":
        case "35010":
        case "35 10":
        case "35-10":
        case "3510":
        case "a 350 k":
        case "a 350-k":
        case "a 350k":
        case "a-350 k":
        case "a-350-k":
        case "a-350k":
        case "a350 k":
        case "a350-k":
        case "a350k":
        case "a 35 k":
        case "a 35-k":
        case "a 35k":
        case "a-35 k":
        case "a-35-k":
        case "a-35k":
        case "a35 k":
        case "a35-k":
        case "a35k":
        case "350 k":
        case "350-k":
        case "350k":
        case "350 k":
        case "350-k":
        case "350k":
        case "35 k":
        case "35-k":
        case "35k":
        case "a 350 1000 ":
        case "a 350-1000 ":
        case "a 3501000 ":
        case "a-350 1000 ":
        case "a-350-1000 ":
        case "a-3501000 ":
        case "a350 1000 ":
        case "a350-1000 ":
        case "a3501000 ":
        case "a 350 10 ":
        case "a 350-10 ":
        case "a 35010 ":
        case "a-350 10 ":
        case "a-350-10 ":
        case "a-35010 ":
        case "a350 10 ":
        case "a350-10 ":
        case "a35010 ":
        case "a 35 10 ":
        case "a 35-10 ":
        case "a 3510 ":
        case "a-35 10 ":
        case "a-35-10 ":
        case "a-3510 ":
        case "a35 10 ":
        case "a35-10 ":
        case "a3510 ":
        case "350 1000 ":
        case "350-1000 ":
        case "3501000 ":
        case "350 10 ":
        case "350-10 ":
        case "35010 ":
        case "35 10 ":
        case "35-10 ":
        case "3510 ":
        case "a 350 k ":
        case "a 350-k ":
        case "a 350k ":
        case "a-350 k ":
        case "a-350-k ":
        case "a-350k ":
        case "a350 k ":
        case "a350-k ":
        case "a350k ":
        case "a 35 k ":
        case "a 35-k ":
        case "a 35k ":
        case "a-35 k ":
        case "a-35-k ":
        case "a-35k ":
        case "a35 k ":
        case "a35-k ":
        case "a35k ":
        case "350 k ":
        case "350-k ":
        case "350k ":
        case "350 k ":
        case "350-k ":
        case "350k ":
        case "35 k ":
        case "35-k ":
        case "35k ":  
        case "id37":
        speed = 860; cap = 350; rwy = 8760; mC = 3101536; range = 14800; fConsmp = 15.98;
        cConsmp = 0.21; mH = 500; price = 77538384;
        n = "A350-1000"; c = 2; pc = "a350-1000"
        break;

        case "a 350 900r":
        case "a 350-900r":
        case "a 350900r":
        case "a-350 900r":
        case "a-350-900r":
        case "a-350900r":
        case "a350 900r":
        case "a350-900r":
        case "a350900r":
        case "a 350 9r":
        case "a 350-9r":
        case "a 3509r":
        case "a-350 9r":
        case "a-350-9r":
        case "a-3509r":
        case "a350 9r":
        case "a350-9r":
        case "a3509r":
        case "a 35 9r":
        case "a 35-9r":
        case "a 359r":
        case "a-35 9r":
        case "a-35-9r":
        case "a-359r":
        case "a35 9r":
        case "a35-9r":
        case "a359r":
        case "350 900r":
        case "350-900r":
        case "350900r":
        case "350 9r":
        case "350-9r":
        case "3509r":
        case "35 9r":
        case "35-9r":
        case "359r":
        case "a 350 900-r":
        case "a 350-900-r":
        case "a 350900-r":
        case "a-350 900-r":
        case "a-350-900-r":
        case "a-350900-r":
        case "a350 900-r":
        case "a350-900-r":
        case "a350900-r":
        case "a 350 9-r":
        case "a 350-9-r":
        case "a 3509-r":
        case "a-350 9-r":
        case "a-350-9-r":
        case "a-3509-r":
        case "a350 9-r":
        case "a350-9-r":
        case "a3509-r":
        case "a 35 9-r":
        case "a 35-9-r":
        case "a 359-r":
        case "a-35 9-r":
        case "a-35-9-r":
        case "a-359-r":
        case "a35 9-r":
        case "a35-9-r":
        case "a359-r":
        case "350 900-r":
        case "350-900-r":
        case "350900-r":
        case "350 9-r":
        case "350-9-r":
        case "3509-r":
        case "35 9-r":
        case "35-9-r":
        case "359-r":
        case "a 350 900 r":
        case "a 350-900 r":
        case "a 350900 r":
        case "a-350 900 r":
        case "a-350-900 r":
        case "a-350900 r":
        case "a350 900 r":
        case "a350-900 r":
        case "a350900 r":
        case "a 350 9 r":
        case "a 350-9 r":
        case "a 3509 r":
        case "a-350 9 r":
        case "a-350-9 r":
        case "a-3509 r":
        case "a350 9 r":
        case "a350-9 r":
        case "a3509 r":
        case "a 35 9 r":
        case "a 35-9 r":
        case "a 359 r":
        case "a-35 9 r":
        case "a-35-9 r":
        case "a-359 r":
        case "a35 9 r":
        case "a35-9 r":
        case "a359 r":
        case "350 900 r":
        case "350-900 r":
        case "350900 r":
        case "350 9 r":
        case "350-9 r":
        case "3509 r":
        case "35 9 r":
        case "35-9 r":
        case "359 r":
        case "a 350 900r ":
        case "a 350-900r ":
        case "a 350900r ":
        case "a-350 900r ":
        case "a-350-900r ":
        case "a-350900r ":
        case "a350 900r ":
        case "a350-900r ":
        case "a350900r ":
        case "a 350 9r ":
        case "a 350-9r ":
        case "a 3509r ":
        case "a-350 9r ":
        case "a-350-9r ":
        case "a-3509r ":
        case "a350 9r ":
        case "a350-9r ":
        case "a3509r ":
        case "a 35 9r ":
        case "a 35-9r ":
        case "a 359r ":
        case "a-35 9r ":
        case "a-35-9r ":
        case "a-359r ":
        case "a35 9r ":
        case "a35-9r ":
        case "a359r ":
        case "350 900r ":
        case "350-900r ":
        case "350900r ":
        case "350 9r ":
        case "350-9r ":
        case "3509r ":
        case "35 9r ":
        case "35-9r ":
        case "359r ":
        case "a 350 900-r ":
        case "a 350-900-r ":
        case "a 350900-r ":
        case "a-350 900-r ":
        case "a-350-900-r ":
        case "a-350900-r ":
        case "a350 900-r ":
        case "a350-900-r ":
        case "a350900-r ":
        case "a 350 9-r ":
        case "a 350-9-r ":
        case "a 3509-r ":
        case "a-350 9-r ":
        case "a-350-9-r ":
        case "a-3509-r ":
        case "a350 9-r ":
        case "a350-9-r ":
        case "a3509-r ":
        case "a 35 9-r ":
        case "a 35-9-r ":
        case "a 359-r ":
        case "a-35 9-r ":
        case "a-35-9-r ":
        case "a-359-r ":
        case "a35 9-r ":
        case "a35-9-r ":
        case "a359-r ":
        case "350 900-r ":
        case "350-900-r ":
        case "350900-r ":
        case "350 9-r ":
        case "350-9-r ":
        case "3509-r ":
        case "35 9-r ":
        case "35-9-r ":
        case "359-r ":
        case "a 350 900 r ":
        case "a 350-900 r ":
        case "a 350900 r ":
        case "a-350 900 r ":
        case "a-350-900 r ":
        case "a-350900 r ":
        case "a350 900 r ":
        case "a350-900 r ":
        case "a350900 r ":
        case "a 350 9 r ":
        case "a 350-9 r ":
        case "a 3509 r ":
        case "a-350 9 r ":
        case "a-350-9 r ":
        case "a-3509 r ":
        case "a350 9 r ":
        case "a350-9 r ":
        case "a3509 r ":
        case "a 35 9 r ":
        case "a 35-9 r ":
        case "a 359 r ":
        case "a-35 9 r ":
        case "a-35-9 r ":
        case "a-359 r ":
        case "a35 9 r ":
        case "a35-9 r ":
        case "a359 r ":
        case "350 900 r ":
        case "350-900 r ":
        case "350900 r ":
        case "350 9 r ":
        case "350-9 r ":
        case "3509 r ":
        case "35 9 r ":
        case "35-9 r ":
        case "359 r " :
        case "id40":
        speed = 860; cap = 314; rwy = 8760; mC = 3308944; range = 14500; fConsmp = 15.98;
        cConsmp = 0.21; mH = 520; price = 82723576;
        n = "A350-900R"; c = 2; pc = "a350-900"
        break;
        
        case "a 330 800neo":
        case "a 330-800neo":
        case "a 330800neo":
        case "a-330 800neo":
        case "a-330-800neo":
        case "a-330800neo":
        case "a330 800neo":
        case "a330-800neo":
        case "a330800neo":
        case "a 330 8neo":
        case "a 330-8neo":
        case "a 3308neo":
        case "a-330 8neo":
        case "a-330-8neo":
        case "a-3308neo":
        case "a330 8neo":
        case "a330-8neo":
        case "a3308neo":
        case "a 33 8neo":
        case "a 33-8neo":
        case "a 338neo":
        case "a-33 8neo":
        case "a-33-8neo":
        case "a-338neo":
        case "a33 8neo":
        case "a33-8neo":
        case "a338neo":
        case "330 800neo":
        case "330-800neo":
        case "330800neo":
        case "330 8neo":
        case "330-8neo":
        case "3308neo":
        case "33 8neo":
        case "33-8neo":
        case "338neo":
        case "a 330 800-neo":
        case "a 330-800-neo":
        case "a 330800-neo":
        case "a-330 800-neo":
        case "a-330-800-neo":
        case "a-330800-neo":
        case "a330 800-neo":
        case "a330-800-neo":
        case "a330800-neo":
        case "a 330 8-neo":
        case "a 330-8-neo":
        case "a 3308-neo":
        case "a-330 8-neo":
        case "a-330-8-neo":
        case "a-3308-neo":
        case "a330 8-neo":
        case "a330-8-neo":
        case "a3308-neo":
        case "a 33 8-neo":
        case "a 33-8-neo":
        case "a 338-neo":
        case "a-33 8-neo":
        case "a-33-8-neo":
        case "a-338-neo":
        case "a33 8-neo":
        case "a33-8-neo":
        case "a338-neo":
        case "330 800-neo":
        case "330-800-neo":
        case "330800-neo":
        case "330 8-neo":
        case "330-8-neo":
        case "3308-neo":
        case "33 8-neo":
        case "33-8-neo":
        case "338-neo":
        case "a 330 800 neo":
        case "a 330-800 neo":
        case "a 330800 neo":
        case "a-330 800 neo":
        case "a-330-800 neo":
        case "a-330800 neo":
        case "a330 800 neo":
        case "a330-800 neo":
        case "a330800 neo":
        case "a 330 8 neo":
        case "a 330-8 neo":
        case "a 3308 neo":
        case "a-330 8 neo":
        case "a-330-8 neo":
        case "a-3308 neo":
        case "a330 8 neo":
        case "a330-8 neo":
        case "a3308 neo":
        case "a 33 8 neo":
        case "a 33-8 neo":
        case "a 338 neo":
        case "a-33 8 neo":
        case "a-33-8 neo":
        case "a-338 neo":
        case "a33 8 neo":
        case "a33-8 neo":
        case "a338 neo":
        case "330 800 neo":
        case "330-800 neo":
        case "330800 neo":
        case "330 8 neo":
        case "330-8 neo":
        case "3308 neo":
        case "33 8 neo":
        case "33-8 neo":
        case "338 neo":
        case "a 330 800neo ":
        case "a 330-800neo ":
        case "a 330800neo ":
        case "a-330 800neo ":
        case "a-330-800neo ":
        case "a-330800neo ":
        case "a330 800neo ":
        case "a330-800neo ":
        case "a330800neo ":
        case "a 330 8neo ":
        case "a 330-8neo ":
        case "a 3308neo ":
        case "a-330 8neo ":
        case "a-330-8neo ":
        case "a-3308neo ":
        case "a330 8neo ":
        case "a330-8neo ":
        case "a3308neo ":
        case "a 33 8neo ":
        case "a 33-8neo ":
        case "a 338neo ":
        case "a-33 8neo ":
        case "a-33-8neo ":
        case "a-338neo ":
        case "a33 8neo ":
        case "a33-8neo ":
        case "a338neo ":
        case "330 800neo ":
        case "330-800neo ":
        case "330800neo ":
        case "330 8neo ":
        case "330-8neo ":
        case "3308neo ":
        case "33 8neo ":
        case "33-8neo ":
        case "338neo ":
        case "a 330 800-neo ":
        case "a 330-800-neo ":
        case "a 330800-neo ":
        case "a-330 800-neo ":
        case "a-330-800-neo ":
        case "a-330800-neo ":
        case "a330 800-neo ":
        case "a330-800-neo ":
        case "a330800-neo ":
        case "a 330 8-neo ":
        case "a 330-8-neo ":
        case "a 3308-neo ":
        case "a-330 8-neo ":
        case "a-330-8-neo ":
        case "a-3308-neo ":
        case "a330 8-neo ":
        case "a330-8-neo ":
        case "a3308-neo ":
        case "a 33 8-neo ":
        case "a 33-8-neo ":
        case "a 338-neo ":
        case "a-33 8-neo ":
        case "a-33-8-neo ":
        case "a-338-neo ":
        case "a33 8-neo ":
        case "a33-8-neo ":
        case "a338-neo ":
        case "330 800-neo ":
        case "330-800-neo ":
        case "330800-neo ":
        case "330 8-neo ":
        case "330-8-neo ":
        case "3308-neo ":
        case "33 8-neo ":
        case "33-8-neo ":
        case "338-neo ":
        case "a 330 800 neo ":
        case "a 330-800 neo ":
        case "a 330800 neo ":
        case "a-330 800 neo ":
        case "a-330-800 neo ":
        case "a-330800 neo ":
        case "a330 800 neo ":
        case "a330-800 neo ":
        case "a330800 neo ":
        case "a 330 8 neo ":
        case "a 330-8 neo ":
        case "a 3308 neo ":
        case "a-330 8 neo ":
        case "a-330-8 neo ":
        case "a-3308 neo ":
        case "a330 8 neo ":
        case "a330-8 neo ":
        case "a3308 neo ":
        case "a 33 8 neo ":
        case "a 33-8 neo ":
        case "a 338 neo ":
        case "a-33 8 neo ":
        case "a-33-8 neo ":
        case "a-338 neo ":
        case "a33 8 neo ":
        case "a33-8 neo ":
        case "a338 neo ":
        case "330 800 neo ":
        case "330-800 neo ":
        case "330800 neo ":
        case "330 8 neo ":
        case "330-8 neo ":
        case "3308 neo ":
        case "33 8 neo ":
        case "33-8 neo ":
        case "338 neo ":
        case "id41":
        speed = 801; cap = 406; rwy = 9500; mC = 3413028; range = 13900; fConsmp = 12;
        cConsmp = 0.15; mH = 510; price = 85325684;
        n = "A330-800neo"; c = 2; pc = "a330-neo"
        break;

        case "a 330 900neo":
        case "a 330-900neo":
        case "a 330900neo":
        case "a-330 900neo":
        case "a-330-900neo":
        case "a-330900neo":
        case "a330 900neo":
        case "a330-900neo":
        case "a330900neo":
        case "a 330 9neo":
        case "a 330-9neo":
        case "a 3309neo":
        case "a-330 9neo":
        case "a-330-9neo":
        case "a-3309neo":
        case "a330 9neo":
        case "a330-9neo":
        case "a3309neo":
        case "a 33 9neo":
        case "a 33-9neo":
        case "a 339neo":
        case "a-33 9neo":
        case "a-33-9neo":
        case "a-339neo":
        case "a33 9neo":
        case "a33-9neo":
        case "a339neo":
        case "330 900neo":
        case "330-900neo":
        case "330900neo":
        case "330 9neo":
        case "330-9neo":
        case "3309neo":
        case "33 9neo":
        case "33-9neo":
        case "339neo":
        case "a 330 900-neo":
        case "a 330-900-neo":
        case "a 330900-neo":
        case "a-330 900-neo":
        case "a-330-900-neo":
        case "a-330900-neo":
        case "a330 900-neo":
        case "a330-900-neo":
        case "a330900-neo":
        case "a 330 9-neo":
        case "a 330-9-neo":
        case "a 3309-neo":
        case "a-330 9-neo":
        case "a-330-9-neo":
        case "a-3309-neo":
        case "a330 9-neo":
        case "a330-9-neo":
        case "a3309-neo":
        case "a 33 9-neo":
        case "a 33-9-neo":
        case "a 339-neo":
        case "a-33 9-neo":
        case "a-33-9-neo":
        case "a-339-neo":
        case "a33 9-neo":
        case "a33-9-neo":
        case "a339-neo":
        case "330 900-neo":
        case "330-900-neo":
        case "330900-neo":
        case "330 9-neo":
        case "330-9-neo":
        case "3309-neo":
        case "33 9-neo":
        case "33-9-neo":
        case "339-neo":
        case "a 330 900 neo":
        case "a 330-900 neo":
        case "a 330900 neo":
        case "a-330 900 neo":
        case "a-330-900 neo":
        case "a-330900 neo":
        case "a330 900 neo":
        case "a330-900 neo":
        case "a330900 neo":
        case "a 330 9 neo":
        case "a 330-9 neo":
        case "a 3309 neo":
        case "a-330 9 neo":
        case "a-330-9 neo":
        case "a-3309 neo":
        case "a330 9 neo":
        case "a330-9 neo":
        case "a3309 neo":
        case "a 33 9 neo":
        case "a 33-9 neo":
        case "a 339 neo":
        case "a-33 9 neo":
        case "a-33-9 neo":
        case "a-339 neo":
        case "a33 9 neo":
        case "a33-9 neo":
        case "a339 neo":
        case "330 900 neo":
        case "330-900 neo":
        case "330900 neo":
        case "330 9 neo":
        case "330-9 neo":
        case "3309 neo":
        case "33 9 neo":
        case "33-9 neo":
        case "339 neo":
        case "a 330 900neo ":
        case "a 330-900neo ":
        case "a 330900neo ":
        case "a-330 900neo ":
        case "a-330-900neo ":
        case "a-330900neo ":
        case "a330 900neo ":
        case "a330-900neo ":
        case "a330900neo ":
        case "a 330 9neo ":
        case "a 330-9neo ":
        case "a 3309neo ":
        case "a-330 9neo ":
        case "a-330-9neo ":
        case "a-3309neo ":
        case "a330 9neo ":
        case "a330-9neo ":
        case "a3309neo ":
        case "a 33 9neo ":
        case "a 33-9neo ":
        case "a 339neo ":
        case "a-33 9neo ":
        case "a-33-9neo ":
        case "a-339neo ":
        case "a33 9neo ":
        case "a33-9neo ":
        case "a339neo ":
        case "330 900neo ":
        case "330-900neo ":
        case "330900neo ":
        case "330 9neo ":
        case "330-9neo ":
        case "3309neo ":
        case "33 9neo ":
        case "33-9neo ":
        case "339neo ":
        case "a 330 900-neo ":
        case "a 330-900-neo ":
        case "a 330900-neo ":
        case "a-330 900-neo ":
        case "a-330-900-neo ":
        case "a-330900-neo ":
        case "a330 900-neo ":
        case "a330-900-neo ":
        case "a330900-neo ":
        case "a 330 9-neo ":
        case "a 330-9-neo ":
        case "a 3309-neo ":
        case "a-330 9-neo ":
        case "a-330-9-neo ":
        case "a-3309-neo ":
        case "a330 9-neo ":
        case "a330-9-neo ":
        case "a3309-neo ":
        case "a 33 9-neo ":
        case "a 33-9-neo ":
        case "a 339-neo ":
        case "a-33 9-neo ":
        case "a-33-9-neo ":
        case "a-339-neo ":
        case "a33 9-neo ":
        case "a33-9-neo ":
        case "a339-neo ":
        case "330 900-neo ":
        case "330-900-neo ":
        case "330900-neo ":
        case "330 9-neo ":
        case "330-9-neo ":
        case "3309-neo ":
        case "33 9-neo ":
        case "33-9-neo ":
        case "339-neo ":
        case "a 330 900 neo ":
        case "a 330-900 neo ":
        case "a 330900 neo ":
        case "a-330 900 neo ":
        case "a-330-900 neo ":
        case "a-330900 neo ":
        case "a330 900 neo ":
        case "a330-900 neo ":
        case "a330900 neo ":
        case "a 330 9 neo ":
        case "a 330-9 neo ":
        case "a 3309 neo ":
        case "a-330 9 neo ":
        case "a-330-9 neo ":
        case "a-3309 neo ":
        case "a330 9 neo ":
        case "a330-9 neo ":
        case "a3309 neo ":
        case "a 33 9 neo ":
        case "a 33-9 neo ":
        case "a 339 neo ":
        case "a-33 9 neo ":
        case "a-33-9 neo ":
        case "a-339 neo ":
        case "a33 9 neo ":
        case "a33-9 neo ":
        case "a339 neo ":
        case "330 900 neo ":
        case "330-900 neo ":
        case "330900 neo ":
        case "330 9 neo ":
        case "330-9 neo ":
        case "3309 neo ":
        case "33 9 neo ":
        case "33-9 neo ":
        case "339 neo ":
        case "id42":
        speed = 801; cap = 440; rwy = 9950; mC = 4372618; range = 12130; fConsmp = 13;
        cConsmp = 0.16; mH = 510; price = 109315468;
        n = "A330-900neo"; c = 2; pc = "a330-neo"
        break;

        case "a 380 800":
        case "a 380-800":
        case "a 380800":
        case "a-380 800":
        case "a-380-800":
        case "a-380800":
        case "a380 800":
        case "a380-800":
        case "a380800":
        case "a 380 8":
        case "a 380-8":
        case "a 3808":
        case "a-380 8":
        case "a-380-8":
        case "a-3808":
        case "a380 8":
        case "a380-8":
        case "a3808":
        case "a 38 8":
        case "a 38-8":
        case "a 388":
        case "a-38 8":
        case "a-38-8":
        case "a-388":
        case "a38 8":
        case "a38-8":
        case "a388":
        case "380 800":
        case "380-800":
        case "380800":
        case "380 8":
        case "380-8":
        case "3808":
        case "38 8":
        case "38-8":
        case "388":
        case "380":
        case "a-380":
        case "a380":
        case "a 380":
        case "a 380 800 ":
        case "a 380-800 ":
        case "a 380800 ":
        case "a-380 800 ":
        case "a-380-800 ":
        case "a-380800 ":
        case "a380 800 ":
        case "a380-800 ":
        case "a380800 ":
        case "a 380 8 ":
        case "a 380-8 ":
        case "a 3808 ":
        case "a-380 8 ":
        case "a-380-8 ":
        case "a-3808 ":
        case "a380 8 ":
        case "a380-8 ":
        case "a3808 ":
        case "a 38 8 ":
        case "a 38-8 ":
        case "a 388 ":
        case "a-38 8 ":
        case "a-38-8 ":
        case "a-388 ":
        case "a38 8 ":
        case "a38-8 ":
        case "a388 ":
        case "380 800 ":
        case "380-800 ":
        case "380800 ":
        case "380 8 ":
        case "380-8 ":
        case "3808 ":
        case "38 8 ":
        case "38-8 ":
        case "388 ":
        case "380 ":
        case "a-380 ":
        case "a380 ":
        case "a 380 ":
        case "the giant":
        case "the giant ":
        case "id43":
        speed = 1049; cap = 600; rwy = 9680; mC = 12937770; range = 14500; fConsmp = 22.26;
        cConsmp = 0.16; mH = 450; price = 215629503
        n = "A380-800"; c = 2; pc = "a380"
        break;

        //ANTONOV
        case "an 74 vip":
        case "an 74-vip":
        case "an 74vip":
        case "an-74 vip":
        case "an-74-vip":
        case "an-74vip":
        case "an74 vip":
        case "an74-vip":
        case "an74vip":
        case "an 74 vip ":
        case "an 74-vip ":
        case "an 74vip ":
        case "an-74 vip ":
        case "an-74-vip ":
        case "an-74vip ":
        case "an74 vip ":
        case "an74-vip ":
        case "an74vip ":
        case "id44":
        speed = 539; cap = 12; rwy = 6500; mC = 18130; range = 3300;
        fConsmp = 7.68; cConsmp = 0.1; mH = 350; price = 100722;
        n = "AN-74VIP"; c = 3; pc = "an74vip"
        break;
    
        case "an 74 200":
        case "an 74-200":
        case "an 74200":
        case "an-74 200":
        case "an-74-200":
        case "an-74200":
        case "an74 200":
        case "an74-200":
        case "an74200":
        case "an 74 2":
        case "an 74-2":
        case "an 742":
        case "an-74 2":
        case "an-74-2":
        case "an-742":
        case "an74 2":
        case "an74-2":
        case "an742":
        case "an 74 200 ":
        case "an 74-200 ":
        case "an 74200 ":
        case "an-74 200 ":
        case "an-74-200 ":
        case "an-74200 ":
        case "an74 200 ":
        case "an74-200 ":
        case "an74200 ":
        case "an 74 2 ":
        case "an 74-2 ":
        case "an 742 ":
        case "an-74 2 ":
        case "an-74-2 ":
        case "an-742 ":
        case "an74 2 ":
        case "an74-2 ":
        case "an742 ":
        case "id45":
        speed = 539; cap = 16; rwy = 4650; mC = 24174; range = 3300;
        fConsmp = 10.56; cConsmp = 0.14; mH = 320; price = 134296;
        n = "AN-74-200"; c = 3; pc = "an74-200"
        break;
    
        case "an 140":
        case "an-140":
        case "an140":
        case "an 140 ":
        case "an-140 ":
        case "an140 ":
        case "id46":
        speed = 446; cap = 52; rwy = 5500; mC = 72242; range = 2420;
        fConsmp = 6.72; cConsmp = 0.09; mH = 480; price = 577938
        n = "AN-140"; c = 3; pc = "an140"
        break;
    
        case "an 74 tk 100":
        case "an 74 tk-100":
        case "an 74 tk100":
        case "an 74-tk 100":
        case "an 74-tk-100":
        case "an 74-tk100":
        case "an 74tk 100":
        case "an 74tk-100":
        case "an 74tk100":
        case "an-74 tk 100":
        case "an-74 tk-100":
        case "an-74 tk100":
        case "an-74-tk 100":
        case "an-74-tk-100":
        case "an-74-tk100":
        case "an-74tk 100":
        case "an-74tk-100":
        case "an-74tk100":
        case "an74 tk 100":
        case "an74 tk-100":
        case "an74 tk100":
        case "an74-tk 100":
        case "an74-tk-100":
        case "an74-tk100":
        case "an74tk 100":
        case "an74tk-100":
        case "an74tk100":
        case "an 74 tk 100 ":
        case "an 74 tk-100 ":
        case "an 74 tk100 ":
        case "an 74-tk 100 ":
        case "an 74-tk-100 ":
        case "an 74-tk100 ":
        case "an 74tk 100 ":
        case "an 74tk-100 ":
        case "an 74tk100 ":
        case "an-74 tk 100 ":
        case "an-74 tk-100 ":
        case "an-74 tk100 ":
        case "an-74-tk 100 ":
        case "an-74-tk-100 ":
        case "an-74-tk100 ":
        case "an-74tk 100 ":
        case "an-74tk-100 ":
        case "an-74tk100 ":
        case "an74 tk 100 ":
        case "an74 tk-100 ":
        case "an74 tk100 ":
        case "an74-tk 100 ":
        case "an74-tk-100 ":
        case "an74-tk100 ":
        case "an74tk 100 ":
        case "an74tk-100 ":
        case "an74tk100 ":
        case "id47":
        speed = 536; cap = 52; rwy = 5600; mC = 135568; range = 2750;
        fConsmp = 7.68; cConsmp = 0.1; mH = 330; price = 661308;
        n = "AN-74TK-100"; c =  3; pc = "an74tk-100"
        break;
    
        case "an 10":
        case "an-10":
        case "an10":
        case "an 10 ":
        case "an-10 ":
        case "an10 ":
        case "id48":
        speed = 728; cap = 100; rwy = 6500; mC = 331412; range = 4075; fConsmp = 14.98;
        cConsmp = 0.18; mH = 370; price = 1104705;
        n = "AN-10"; c = 3; pc = "an-10"
        break;
    
        case "an 12":
        case "an-12":
        case "an12":
        case "an 12 ":
        case "an-12 ":
        case "an12 ":
        case "id49":
        speed = 663; cap = 124; rwy = 6500; mC = 357710; range = 3600; fConsmp = 13.02; cConsmp = 0.18;
        mH = 350; price = 1192364
        n = "AN-12"; c = 3; pc = "an-12"
        break;
    
        case "an 10 a":
        case "an 10-a":
        case "an 10a":
        case "an-10 a":
        case "an-10-a":
        case "an-10a":
        case "an10 a":
        case "an10-a":
        case "an10a":
        case "an 10 a ":
        case "an 10-a ":
        case "an 10a ":
        case "an-10 a ":
        case "an-10-a ":
        case "an-10a ":
        case "an10 a ":
        case "an10-a ":
        case "an10a ":
        case "id50":
        speed = 728; cap = 110; rwy = 6500; mC = 364552; range = 4075; fConsmp = 14.98; cConsmp = 0.18;
        mH = 350; price = 1215176;
        n = "AN-10A"; c = 3; pc = "an-10"
        break;
    
        case "an 74 tk 300":
        case "an 74 tk-300":
        case "an 74 tk300":
        case "an 74-tk 300":
        case "an 74-tk-300":
        case "an 74-tk300":
        case "an 74tk 300":
        case "an 74tk-300":
        case "an 74tk300":
        case "an-74 tk 300":
        case "an-74 tk-300":
        case "an-74 tk300":
        case "an-74-tk 300":
        case "an-74-tk-300":
        case "an-74-tk300":
        case "an-74tk 300":
        case "an-74tk-300":
        case "an-74tk300":
        case "an74 tk 300":
        case "an74 tk-300":
        case "an74 tk300":
        case "an74-tk 300":
        case "an74-tk-300":
        case "an74-tk300":
        case "an74tk 300":
        case "an74tk-300":
        case "an74tk300":
        case "an 74 tk 300 ":
        case "an 74 tk-300 ":
        case "an 74 tk300 ":
        case "an 74-tk 300 ":
        case "an 74-tk-300 ":
        case "an 74-tk300 ":
        case "an 74tk 300 ":
        case "an 74tk-300 ":
        case "an 74tk300 ":
        case "an-74 tk 300 ":
        case "an-74 tk-300 ":
        case "an-74 tk300 ":
        case "an-74-tk 300 ":
        case "an-74-tk-300 ":
        case "an-74-tk300 ":
        case "an-74tk 300 ":
        case "an-74tk-300 ":
        case "an-74tk300 ":
        case "an74 tk 300 ":
        case "an74 tk-300 ":
        case "an74 tk300 ":
        case "an74-tk 300 ":
        case "an74-tk-300 ":
        case "an74-tk300 ":
        case "an74tk 300 ":
        case "an74tk-300 ":
        case "an74tk300 ":
        case "id51":
        speed = 582; cap = 60; rwy = 7500; mC = 139502; range = 3600; fConsmp = 5.7; cConsmp = 0.08; mH = 480;
        price = 1550016;
        n = "AN-74TK-300"; c = 3; pc = "an74tk-300"
        break;
    
        //BEECHCRAFT
        case "beechcraft 1900 d":
        case "beechcraft 1900-d":
        case "beechcraft 1900d": 
        case "beechcraft-1900 d":
        case "beechcraft-1900-d":
        case "beechcraft-1900d": 
        case "beechcraft1900 d":
        case "beechcraft1900-d":
        case "beechcraft1900d": 
        case "b 1900 d":
        case "b 1900-d":
        case "b 1900d": 
        case "b-1900 d":
        case "b-1900-d":
        case "b-1900d": 
        case "b1900 d":
        case "b1900-d":
        case "b1900d": 
        case "1900 d":
        case "1900-d":
        case "1900d":
        case "beechcraft 1900 d ":
        case "beechcraft 1900-d ":
        case "beechcraft 1900d" : 
        case "beechcraft-1900 d ":
        case "beechcraft-1900-d ":
        case "beechcraft-1900d" : 
        case "beechcraft1900 d ":
        case "beechcraft1900-d ":
        case "beechcraft1900d" : 
        case "b 1900 d ":
        case "b 1900-d ":
        case "b 1900d" : 
        case "b-1900 d ":
        case "b-1900-d ":
        case "b-1900d" : 
        case "b1900 d ":
        case "b1900-d ":
        case "b1900d" : 
        case "1900 d ":
        case "1900-d ":
        case "1900d ":
        case "id52":
        speed = 470; cap = 19; rwy = 4500; mC = 15544; range = 2776; fConsmp = 13.65; cConsmp = 0.19
        mH = 490; price = 111024
        n = "1900D"; c = 4; pc = "beech1900"
        break;
    
        case "beechcraft-1900":
        case "beechcraft 1900":
        case "beechcraft1900":
        case "b-1900":
        case "b 1900":
        case "b1900":
        case "1900":
        case "beechcraft-1900 ":
        case "beechcraft 1900 ":
        case "beechcraft1900 ":
        case "b-1900 ":
        case "b 1900 ":
        case "b1900 ":
        case "1900 ":
        case "id53":
        speed = 500; cap = 19; rwy = 4500; mC = 21582; range = 2907; fConsmp = 9.36; cConsmp = 0.11; 
        mH = 380; price = 119896;
        n = "1900"; c = 4; pc = "beech1900"
        break;
        
        case "king air 350 i":
        case "king air 350-i":
        case "king air 350i": 
        case "king air-350 i":
        case "king air-350-i":
        case "king air-350i": 
        case "king air350 i":
        case "king air350-i":
        case "king air350i": 
        case "king-air 350 i":
        case "king-air 350-i":
        case "king-air 350i": 
        case "king-air-350 i":
        case "king-air-350-i":
        case "king-air-350i": 
        case "king-air350 i":
        case "king-air350-i":
        case "king-air350i":
        case "kingair 350 i":
        case "kingair 350-i":
        case "kingair 350i": 
        case "kingair-350 i":
        case "kingair-350-i":
        case "kingair-350i": 
        case "kingair350 i":
        case "kingair350-i":
        case "kingair350i":
        case "ka 350 i":
        case "ka 350-i":
        case "ka 350i":
        case "ka-350 i":
        case "ka-350-i":
        case "ka-350i":
        case "ka350 i":
        case "ka350-i":
        case "ka350i":
        case "350 i":
        case "350i":
        case "350-i":
        case "king air 350 i ":
        case "king air 350-i ":
        case "king air 350i" : 
        case "king air-350 i ":
        case "king air-350-i ":
        case "king air-350i" : 
        case "king air350 i ":
        case "king air350-i ":
        case "king air350i" : 
        case "king-air 350 i ":
        case "king-air 350-i ":
        case "king-air 350i" : 
        case "king-air-350 i ":
        case "king-air-350-i ":
        case "king-air-350i" : 
        case "king-air350 i ":
        case "king-air350-i ":
        case "king-air350i ":
        case "kingair 350 i ":
        case "kingair 350-i ":
        case "kingair 350i" : 
        case "kingair-350 i ":
        case "kingair-350-i ":
        case "kingair-350i" : 
        case "kingair350 i ":
        case "kingair350-i ":
        case "kingair350i ":
        case "ka 350 i ":
        case "ka 350-i ":
        case "ka 350i ":
        case "ka-350 i ":
        case "ka-350-i ":
        case "ka-350i ":
        case "ka350 i ":
        case "ka350-i ":
        case "ka350i ":
        case "350 i ":
        case "350i ":
        case "350-i ":
        case "id54":
        speed = 626; cap = 11; rwy = 3300; mC = 17766; range = 3340; fConsmp = 16.16; cConsmp = 0.15;
        mH = 400; price = 187000;
        n = "King Air 350i"; c = 4; pc = "kingair"
        break;
    
        case "beechcraft 1900 c":
        case "beechcraft 1900-c":
        case "beechcraft 1900c":
        case "beechcraft-1900 c":
        case "beechcraft-1900-c":
        case "beechcraft-1900c":
        case "beechcraft1900 c":
        case "beechcraft1900-c":
        case "beechcraft1900c":
        case "b 1900 c":
        case "b 1900-c":
        case "b 1900c":
        case "b-1900 c":
        case "b-1900-c":
        case "b-1900c":
        case "b1900 c":
        case "b1900-c":
        case "b1900c":
        case "1900 c":
        case "1900-c":
        case "1900c":
        case "beechcraft 1900 c ":
        case "beechcraft 1900-c ":
        case "beechcraft 1900c ":
        case "beechcraft-1900 c ":
        case "beechcraft-1900-c ":
        case "beechcraft-1900c ":
        case "beechcraft1900 c ":
        case "beechcraft1900-c ":
        case "beechcraft1900c ":
        case "b 1900 c ":
        case "b 1900-c ":
        case "b 1900c ":
        case "b-1900 c ":
        case "b-1900-c ":
        case "b-1900c ":
        case "b1900 c ":
        case "b1900-c ":
        case "b1900c ":
        case "1900 c ":
        case "1900-c ":
        case "1900c ":
        case "id55":
        speed = 621; cap = 19; rwy = 4500; mC = 14346; range = 2500; fConsmp = 16.96; cConsmp = 0.2;
        mH = 450; price = 323000;
        n = "1900C"; c = 4; pc = "beech1900"
        break;

        //BOEING
        case "b 377 stratocruiser":
        case "b 377-stratocruiser":
        case "b 377stratocruiser":
        case "b-377 stratocruiser":
        case "b-377-stratocruiser":
        case "b-377stratocruiser":
        case "b377 stratocruiser":
        case "b377-stratocruiser":
        case "b377stratocruiser":
        case "377 stratocruiser":
        case "377-stratocruiser":
        case "377stratocruiser":
        case "b-377":
        case "b377":
        case "b 377":
        case "stratocruiser":
        case "b 377 stratocruiser ":
        case "b 377-stratocruiser ":
        case "b 377stratocruiser ":
        case "b-377 stratocruiser ":
        case "b-377-stratocruiser ":
        case "b-377stratocruiser ":
        case "b377 stratocruiser ":
        case "b377-stratocruiser ":
        case "b377stratocruiser ":
        case "377 stratocruiser ":
        case "377-stratocruiser ":
        case "377stratocruiser ":
        case "b-377 ":
        case "b377 ":
        case "b 377 ":
        case "stratocruiser ":
        case "id56":
        speed = 574; cap = 117; rwy = 8600; mC = 74866; range = 6760; fConsmp = 29;
        cConsmp = 0.3; mH = 400; price = 788066;
        n = "B377 Stratocruiser"; c = 5; pc = "stratocruiser"
        break;
        
        case "b 727-100":
        case "b 727 100":
        case "b 727100": 
        case "b-727-100":
        case "b-727 100":
        case "b-727100":
        case "b727-100":
        case "b727 100":
        case "b727100": 
        case "b 727-1":
        case "b 727 1":
        case "b 7271":
        case "b-727-1":
        case "b-727 1":
        case "b-7271":
        case "b727-1":
        case "b727 1":
        case "b7271":
        case "b 72-1":
        case "b 72 1":
        case "b 721": 
        case "b-72-1":
        case "b-72 1":
        case "b-721":
        case "b72-1":
        case "b72 1":
        case "b721":
        case "727 100":
        case "727-100":
        case "727100":
        case "727 1":
        case "727-1":
        case "7271":
        case "72 1":
        case "72-1":
        case "721":
        case "b 727-100 ":
        case "b 727 100 ":
        case "b 727100" : 
        case "b-727-100 ":
        case "b-727 100 ":
        case "b-727100 ":
        case "b727-100 ":
        case "b727 100 ":
        case "b727100" : 
        case "b 727-1 ":
        case "b 727 1 ":
        case "b 7271 ":
        case "b-727-1 ":
        case "b-727 1 ":
        case "b-7271 ":
        case "b727-1 ":
        case "b727 1 ":
        case "b7271 ":
        case "b 72-1 ":
        case "b 72 1 ":
        case "b 721" : 
        case "b-72-1 ":
        case "b-72 1 ":
        case "b-721 ":
        case "b72-1 ":
        case "b72 1 ":
        case "b721 ":
        case "727 100 ":
        case "727-100 ":
        case "727100 ":
        case "727 1 ":
        case "727-1 ":
        case "7271 ":
        case "72 1 ":
        case "72-1 ":
        case "721 ":
        case "id57":
        speed = 1009; cap = 131; rwy = 8300; mC = 129600; range = 3056; fConsmp = 13;
        cConsmp = 0.17; mH = 400; price = 1364217;
        n = "B727-100"; c = 5; pc = "727-100"
        break;

        case "b 737-100":
        case "b 737 100":
        case "b 737100": 
        case "b-737-100":
        case "b-737 100":
        case "b-737100":
        case "b737-100":
        case "b737 100":
        case "b737100": 
        case "b 737-1":
        case "b 737 1":
        case "b 7371":
        case "b-737-1":
        case "b-737 1":
        case "b-7371":
        case "b737-1":
        case "b737 1":
        case "b7371":
        case "b 73-1":
        case "b 73 1":
        case "b 731": 
        case "b-73-1":
        case "b-73 1":
        case "b-731":
        case "b73-1":
        case "b73 1":
        case "b731":
        case "737 100":
        case "737-100":
        case "737100":
        case "737 1":
        case "737-1":
        case "7371":
        case "73 1":
        case "73-1":
        case "731":
        case "b 737-100 ":
        case "b 737 100 ":
        case "b 737100" : 
        case "b-737-100 ":
        case "b-737 100 ":
        case "b-737100 ":
        case "b737-100 ":
        case "b737 100 ":
        case "b737100" : 
        case "b 737-1 ":
        case "b 737 1 ":
        case "b 7371 ":
        case "b-737-1 ":
        case "b-737 1 ":
        case "b-7371 ":
        case "b737-1 ":
        case "b737 1 ":
        case "b7371 ":
        case "b 73-1 ":
        case "b 73 1 ":
        case "b 731" : 
        case "b-73-1 ":
        case "b-73 1 ":
        case "b-731 ":
        case "b73-1 ":
        case "b73 1 ":
        case "b731 ":
        case "737 100 ":
        case "737-100 ":
        case "737100 ":
        case "737 1 ":
        case "737-1 ":
        case "7371 ":
        case "73 1 ":
        case "73-1 ":
        case "731 ":
        case "id58":
        speed = 796; cap = 118; rwy = 7550; mC = 386248; range = 3440; fConsmp = 12.12; cConsm0 = 0.15; mH = 360; price = 1514699;
        n = "B737-100"; c = 5; pc = "737"
        break;
        
        case "b 737-200c":
        case "b 737 200c":
        case "b 737200c":
        case "b-737-200c":
        case "b-737 200c":
        case "b-737200c":
        case "b737-200c":
        case "b737 200c":
        case "b737200c":
        case "b 737-2c":
        case "b 737 2c":
        case "b 7372c":
        case "b-737-2c":
        case "b-737 2c":
        case "b-7372c":
        case "b737-2c":
        case "b737 2c":
        case "b7372c":
        case "b 73-2c":
        case "b 73 2c":
        case "b 732c": 
        case "b-73-2c":
        case "b-73 2c":
        case "b-732c":
        case "b73-2c":
        case "b73 2c":
        case "b732c":
        case "737 200c":
        case "737-200c":
        case "737200c":
        case "737 2c":
        case "737-2c":
        case "7372c":
        case "73 2c":
        case "73-2c":
        case "732c":
        case "b 737-200-c":
        case "b 737 200-c":
        case "b 737200-c":
        case "b-737-200-c":
        case "b-737 200-c":
        case "b-737200-c":
        case "b737-200-c":
        case "b737 200-c":
        case "b737200-c":
        case "b 737-2-c":
        case "b 737 2-c":
        case "b 7372-c":
        case "b-737-2-c":
        case "b-737 2-c":
        case "b-7372-c":
        case "b737-2-c":
        case "b737 2-c":
        case "b7372-c":
        case "b 73-2-c":
        case "b 73 2-c":
        case "b 732-c": 
        case "b-73-2-c":
        case "b-73 2-c":
        case "b-732-c":
        case "b73-2-c":
        case "b73 2-c":
        case "b732-c":
        case "737 200-c":
        case "737-200-c":
        case "737200-c":
        case "737 2-c":
        case "737-2-c":
        case "7372-c":
        case "73 2-c":
        case "73-2-c":
        case "732-c":
        case "b 737-200 c":
        case "b 737 200 c":
        case "b 737200 c":
        case "b-737-200 c":
        case "b-737 200 c":
        case "b-737200 c":
        case "b737-200 c":
        case "b737 200 c":
        case "b737200 c":
        case "b 737-2 c":
        case "b 737 2 c":
        case "b 7372 c":
        case "b-737-2 c":
        case "b-737 2 c":
        case "b-7372 c":
        case "b737-2 c":
        case "b737 2 c":
        case "b7372 c":
        case "b 73-2 c":
        case "b 73 2 c":
        case "b 732 c": 
        case "b-73-2 c":
        case "b-73 2 c":
        case "b-732 c":
        case "b73-2 c":
        case "b73 2 c":
        case "b732 c":
        case "737 200 c":
        case "737-200 c":
        case "737200 c":
        case "737 2 c":
        case "737-2 c":
        case "7372 c":
        case "73 2 c":
        case "73-2 c":
        case "732 c":
        case "b 737-200c ":
        case "b 737 200c ":
        case "b 737200c ":
        case "b-737-200c ":
        case "b-737 200c ":
        case "b-737200c ":
        case "b737-200c ":
        case "b737 200c ":
        case "b737200c ":
        case "b 737-2c ":
        case "b 737 2c ":
        case "b 7372c ":
        case "b-737-2c ":
        case "b-737 2c ":
        case "b-7372c ":
        case "b737-2c ":
        case "b737 2c ":
        case "b7372c ":
        case "b 73-2c ":
        case "b 73 2c ":
        case "b 732c" : 
        case "b-73-2c ":
        case "b-73 2c ":
        case "b-732c ":
        case "b73-2c ":
        case "b73 2c ":
        case "b732c ":
        case "737 200c ":
        case "737-200c ":
        case "737200c ":
        case "737 2c ":
        case "737-2c ":
        case "7372c ":
        case "73 2c ":
        case "73-2c ":
        case "732c ":
        case "b 737-200-c ":
        case "b 737 200-c ":
        case "b 737200-c ":
        case "b-737-200-c ":
        case "b-737 200-c ":
        case "b-737200-c ":
        case "b737-200-c ":
        case "b737 200-c ":
        case "b737200-c ":
        case "b 737-2-c ":
        case "b 737 2-c ":
        case "b 7372-c ":
        case "b-737-2-c ":
        case "b-737 2-c ":
        case "b-7372-c ":
        case "b737-2-c ":
        case "b737 2-c ":
        case "b7372-c ":
        case "b 73-2-c ":
        case "b 73 2-c ":
        case "b 732-c " : 
        case "b-73-2-c ":
        case "b-73 2-c ":
        case "b-732-c ":
        case "b73-2-c ":
        case "b73 2-c ":
        case "b732-c ":
        case "737 200-c ":
        case "737-200-c ":
        case "737200-c ":
        case "737 2-c ":
        case "737-2-c ":
        case "7372-c ":
        case "73 2-c ":
        case "73-2-c ":
        case "732-c ":
        case "b 737-200 c ":
        case "b 737 200 c ":
        case "b 737200 c ":
        case "b-737-200 c ":
        case "b-737 200 c ":
        case "b-737200 c ":
        case "b737-200 c ":
        case "b737 200 c ":
        case "b737200 c ":
        case "b 737-2 c ":
        case "b 737 2 c ":
        case "b 7372 c ":
        case "b-737-2 c ":
        case "b-737 2 c ":
        case "b-7372 c ":
        case "b737-2 c ":
        case "b737 2 c ":
        case "b7372 c ":
        case "b 73-2 c ":
        case "b 73 2 c ":
        case "b 732 c " : 
        case "b-73-2 c ":
        case "b-73 2 c ":
        case "b-732 c ":
        case "b73-2 c ":
        case "b73 2 c ":
        case "b732 c ":
        case "737 200 c ":
        case "737-200 c ":
        case "737200 c ":
        case "737 2 c ":
        case "737-2 c ":
        case "7372 c ":
        case "73 2 c ":
        case "73-2 c ":
        case "732 c ":
        case "id59":
        speed = 796; cap = 110; rwy = 7550; mC = 403150; range = 4622; fConsmp = 15.12; cConsmp = 0.18; mH = 350; price = 1580983;
        n = "B737-200C"; c = 5; pc = "737"
        break;
        
        case "b 737-500":
        case "b 737 500":
        case "b 737500":
        case "b-737-500":
        case "b-737 500":
        case "b-737500":
        case "b737-500":
        case "b737 500":
        case "b737500":
        case "b 737-5":
        case "b 737 5":
        case "b 7375":
        case "b-737-5":
        case "b-737 5":
        case "b-7375":
        case "b737-5":
        case "b737 5":
        case "b7375":
        case "b 73-5":
        case "b 73 5":
        case "b 735": 
        case "b-73-5":
        case "b-73 5":
        case "b-735":
        case "b73-5":
        case "b73 5":
        case "b735":
        case "737 500":
        case "737-500":
        case "737500":
        case "737 5":
        case "737-5":
        case "7375":
        case "73 5":
        case "73-5":
        case "735":
        case "b 737-500 ":
        case "b 737 500 ":
        case "b 737500 ":
        case "b-737-500 ":
        case "b-737 500 ":
        case "b-737500 ":
        case "b737-500 ":
        case "b737 500 ":
        case "b737500 ":
        case "b 737-5 ":
        case "b 737 5 ":
        case "b 7375 ":
        case "b-737-5 ":
        case "b-737 5 ":
        case "b-7375 ":
        case "b737-5 ":
        case "b737 5 ":
        case "b7375 ":
        case "b 73-5 ":
        case "b 73 5 ":
        case "b 735" : 
        case "b-73-5 ":
        case "b-73 5 ":
        case "b-735 ":
        case "b73-5 ":
        case "b73 5 ":
        case "b735 ":
        case "737 500 ":
        case "737-500 ":
        case "737500 ":
        case "737 5 ":
        case "737-5 ":
        case "7375 ":
        case "73 5 ":
        case "73-5 ":
        case "735 ":
        case "id60":
        speed = 718; cap = 123; rwy = 7550; mC = 297016; range = 4449; fConsmp = 11.7; cConsmp = 0.16; mH = 370; price = 1856353;
        n = "B737-500"; c = 5; pc = "737"
        break;
        
        case "b 737-200adv":
        case "b 737 200adv":
        case "b 737200adv":
        case "b-737-200adv":
        case "b-737 200adv":
        case "b-737200adv":
        case "b737-200adv":
        case "b737 200adv":
        case "b737200adv":
        case "b 737-2adv":
        case "b 737 2adv":
        case "b 7372adv":
        case "b-737-2adv":
        case "b-737 2adv":
        case "b-7372adv":
        case "b737-2adv":
        case "b737 2adv":
        case "b7372adv":
        case "b 73-2adv":
        case "b 73 2adv":
        case "b 732adv":
        case "b-73-2adv":
        case "b-73 2adv":
        case "b-732adv":
        case "b73-2adv":
        case "b73 2adv":
        case "b732adv":
        case "737 200adv":
        case "737-200adv":
        case "737200adv":
        case "737 2adv":
        case "737-2adv":
        case "7372adv":
        case "73 2adv":
        case "73-2adv":
        case "732adv":
        case "b 737-200-adv":
        case "b 737 200-adv":
        case "b 737200-adv":
        case "b-737-200-adv":
        case "b-737 200-adv":
        case "b-737200-adv":
        case "b737-200-adv":
        case "b737 200-adv":
        case "b737200-adv":
        case "b 737-2-adv":
        case "b 737 2-adv":
        case "b 7372-adv":
        case "b-737-2-adv":
        case "b-737 2-adv":
        case "b-7372-adv":
        case "b737-2-adv":
        case "b737 2-adv":
        case "b7372-adv":
        case "b 73-2-adv":
        case "b 73 2-adv":
        case "b 732-adv": 
        case "b-73-2-adv":
        case "b-73 2-adv":
        case "b-732-adv":
        case "b73-2-adv":
        case "b73 2-adv":
        case "b732-adv":
        case "737 200-adv":
        case "737-200-adv":
        case "737200-adv":
        case "737 2-adv":
        case "737-2-adv":
        case "7372-adv":
        case "73 2-adv":
        case "73-2-adv":
        case "732-adv":
        case "b 737-200 adv":
        case "b 737 200 adv":
        case "b 737200 adv":
        case "b-737-200 adv":
        case "b-737 200 adv":
        case "b-737200 adv":
        case "b737-200 adv":
        case "b737 200 adv":
        case "b737200 adv":
        case "b 737-2 adv":
        case "b 737 2 adv":
        case "b 7372 adv":
        case "b-737-2 adv":
        case "b-737 2 adv":
        case "b-7372 adv":
        case "b737-2 adv":
        case "b737 2 adv":
        case "b7372 adv":
        case "b 73-2 adv":
        case "b 73 2 adv":
        case "b 732 adv": 
        case "b-73-2 adv":
        case "b-73 2 adv":
        case "b-732 adv":
        case "b73-2 adv":
        case "b73 2 adv":
        case "b732 adv":
        case "737 200 adv":
        case "737-200 adv":
        case "737200 adv":
        case "737 2 adv":
        case "737-2 adv":
        case "7372 adv":
        case "73 2 adv":
        case "73-2 adv":
        case "732 adv":
        case "b 737-200adv ":
        case "b 737 200adv ":
        case "b 737200adv ":
        case "b-737-200adv ":
        case "b-737 200adv ":
        case "b-737200adv ":
        case "b737-200adv ":
        case "b737 200adv ":
        case "b737200adv ":
        case "b 737-2adv ":
        case "b 737 2adv ":
        case "b 7372adv ":
        case "b-737-2adv ":
        case "b-737 2adv ":
        case "b-7372adv ":
        case "b737-2adv ":
        case "b737 2adv ":
        case "b7372adv ":
        case "b 73-2adv ":
        case "b 73 2adv ":
        case "b 732adv ":
        case "b-73-2adv ":
        case "b-73 2adv ":
        case "b-732adv ":
        case "b73-2adv ":
        case "b73 2adv ":
        case "b732adv ":
        case "737 200adv ":
        case "737-200adv ":
        case "737200adv ":
        case "737 2adv ":
        case "737-2adv ":
        case "7372adv ":
        case "73 2adv ":
        case "73-2adv ":
        case "732adv ":
        case "b 737-200-adv ":
        case "b 737 200-adv ":
        case "b 737200-adv ":
        case "b-737-200-adv ":
        case "b-737 200-adv ":
        case "b-737200-adv ":
        case "b737-200-adv ":
        case "b737 200-adv ":
        case "b737200-adv ":
        case "b 737-2-adv ":
        case "b 737 2-adv ":
        case "b 7372-adv ":
        case "b-737-2-adv ":
        case "b-737 2-adv ":
        case "b-7372-adv ":
        case "b737-2-adv ":
        case "b737 2-adv ":
        case "b7372-adv ":
        case "b 73-2-adv ":
        case "b 73 2-adv ":
        case "b 732-adv" : 
        case "b-73-2-adv ":
        case "b-73 2-adv ":
        case "b-732-adv ":
        case "b73-2-adv ":
        case "b73 2-adv ":
        case "b732-adv ":
        case "737 200-adv ":
        case "737-200-adv ":
        case "737200-adv ":
        case "737 2-adv ":
        case "737-2-adv ":
        case "7372-adv ":
        case "73 2-adv ":
        case "73-2-adv ":
        case "732-adv ":
        case "b 737-200 adv ":
        case "b 737 200 adv ":
        case "b 737200 adv ":
        case "b-737-200 adv ":
        case "b-737 200 adv ":
        case "b-737200 adv ":
        case "b737-200 adv ":
        case "b737 200 adv ":
        case "b737200 adv ":
        case "b 737-2 adv ":
        case "b 737 2 adv ":
        case "b 7372 adv ":
        case "b-737-2 adv ":
        case "b-737 2 adv ":
        case "b-7372 adv ":
        case "b737-2 adv ":
        case "b737 2 adv ":
        case "b7372 adv ":
        case "b 73-2 adv ":
        case "b 73 2 adv ":
        case "b 732 adv":
        case "b-73-2 adv ":
        case "b-73 2 adv ":
        case "b-732 adv ":
        case "b73-2 adv ":
        case "b73 2 adv ":
        case "b732 adv ":
        case "737 200 adv ":
        case "737-200 adv ":
        case "737200 adv ":
        case "737 2 adv ":
        case "737-2 adv ":
        case "7372 adv ":
        case "73 2 adv ":
        case "73-2 adv ":
        case "732 adv ":
        case "id61":
        speed = 874; cap = 102; rwy = 7550; mC = 454496; range = 5473; fConsmp = 14.17; cConsmp = 0.16; mH = 370; price = 1893733;
        n = "B737-200Adv"; c = 5;; pc = "737"
        break;
        
        case "b 737-200":
        case "b 737 200":
        case "b 737200":
        case "b-737-200":
        case "b-737 200":
        case "b-737200":
        case "b737-200":
        case "b737 200":
        case "b737200":
        case "b 737-2":
        case "b 737 2":
        case "b 7372":
        case "b-737-2":
        case "b-737 2":
        case "b-7372":
        case "b737-2":
        case "b737 2":
        case "b7372":
        case "b 73-2":
        case "b 73 2":
        case "b 732": 
        case "b-73-2":
        case "b-73 2":
        case "b-732":
        case "b73-2":
        case "b73 2":
        case "b732":
        case "737 200":
        case "737-200":
        case "737200":
        case "737 2":
        case "737-2":
        case "7372":
        case "73 2":
        case "73-2":
        case "732":
        case "b 737-200 ":
        case "b 737 200 ":
        case "b 737200 ":
        case "b-737-200 ":
        case "b-737 200 ":
        case "b-737200 ":
        case "b737-200 ":
        case "b737 200 ":
        case "b737200 ":
        case "b 737-2 ":
        case "b 737 2 ":
        case "b 7372 ":
        case "b-737-2 ":
        case "b-737 2 ":
        case "b-7372 ":
        case "b737-2 ":
        case "b737 2 ":
        case "b7372 ":
        case "b 73-2 ":
        case "b 73 2 ":
        case "b 732" : 
        case "b-73-2 ":
        case "b-73 2 ":
        case "b-732 ":
        case "b73-2 ":
        case "b73 2 ":
        case "b732 ":
        case "737 200 ":
        case "737-200 ":
        case "737200 ":
        case "737 2 ":
        case "737-2 ":
        case "7372 ":
        case "73 2 ":
        case "73-2 ":
        case "732 ":
        case "id62":
        speed = 958; cap = 130; rwy = 7550; mC = 598688; range = 4170; fConsmp = 13.08; cConsmp = 0.15; mH = 350; price = 2217362; 
        n = "B737-200"; c = 5; pc = "737"
        break;
        
        case "b 717-200":
        case "b 717 200":
        case "b 717200":
        case "b-717-200":
        case "b-717 200":
        case "b-717200":
        case "b717-200":
        case "b717 200":
        case "b717200":
        case "b 717-2":
        case "b 717 2":
        case "b 7172":
        case "b-717-2":
        case "b-717 2":
        case "b-7172":
        case "b717-2":
        case "b717 2":
        case "b7172":
        case "b 71-2":
        case "b 71 2":
        case "b 712": 
        case "b-71-2":
        case "b-71 2":
        case "b-712":
        case "b71-2":
        case "b71 2":
        case "b712":
        case "717 200":
        case "717-200":
        case "717200":
        case "717 2":
        case "717-2":
        case "7172":
        case "71 2":
        case "71-2":
        case "712":
        case "717":
        case "b717":
        case "b 717":
        case "b-717":
        case "b 717-200 ":
        case "b 717 200 ":
        case "b 717200 ":
        case "b-717-200 ":
        case "b-717 200 ":
        case "b-717200 ":
        case "b717-200 ":
        case "b717 200 ":
        case "b717200 ":
        case "b 717-2 ":
        case "b 717 2 ":
        case "b 7172 ":
        case "b-717-2 ":
        case "b-717 2 ":
        case "b-7172 ":
        case "b717-2 ":
        case "b717 2 ":
        case "b7172 ":
        case "b 71-2 ":
        case "b 71 2 ":
        case "b 712" : 
        case "b-71-2 ":
        case "b-71 2 ":
        case "b-712 ":
        case "b71-2 ":
        case "b71 2 ":
        case "b712 ":
        case "717 200 ":
        case "717-200 ":
        case "717200 ":
        case "717 2 ":
        case "717-2 ":
        case "7172 ":
        case "71 2 ":
        case "71-2 ":
        case "712 ":
        case "717 ":
        case "b717 ":
        case "b 717 ":
        case "b-717 ":
        case "id63":
        speed = 761; cap = 134; rwy = 6450; mC = 235054; range = 3815; fConsmp = 8.46; cConsmp = 0.11; mH = 500; price = 2238611;
        n = "B717-200"; c = 5; pc = "737"
        break;
        
        case "b 737-600":
        case "b 737 600":
        case "b 737600":
        case "b-737-600":
        case "b-737 600":
        case "b-737600":
        case "b737-600":
        case "b737 600":
        case "b737600":
        case "b 737-6":
        case "b 737 6":
        case "b 7376":
        case "b-737-6":
        case "b-737 6":
        case "b-7376":
        case "b737-6":
        case "b737 6":
        case "b7376":
        case "b 73-6":
        case "b 73 6":
        case "b 736": 
        case "b-73-6":
        case "b-73 6":
        case "b-736":
        case "b73-6":
        case "b73 6":
        case "b736":
        case "737 600":
        case "737-600":
        case "737600":
        case "737 6":
        case "737-6":
        case "7376":
        case "73 6":
        case "73-6":
        case "736":
        case "b 737-600 ":
        case "b 737 600 ":
        case "b 737600 ":
        case "b-737-600 ":
        case "b-737 600 ":
        case "b-737600 ":
        case "b737-600 ":
        case "b737 600 ":
        case "b737600 ":
        case "b 737-6 ":
        case "b 737 6 ":
        case "b 7376 ":
        case "b-737-6 ":
        case "b-737 6 ":
        case "b-7376 ":
        case "b737-6 ":
        case "b737 6 ":
        case "b7376 ":
        case "b 73-6 ":
        case "b 73 6 ":
        case "b 736" : 
        case "b-73-6 ":
        case "b-73 6 ":
        case "b-736 ":
        case "b73-6 ":
        case "b73 6 ":
        case "b736 ":
        case "737 600 ":
        case "737-600 ":
        case "737600 ":
        case "737 6 ":
        case "737-6 ":
        case "7376 ":
        case "73 6 ":
        case "73-6 ":
        case "736 ":
        case "id64":
        speed = 762; cap = 110; rwy = 7550; mC = 258404; range = 5648; fConsmp = 11.4; cConsmp = 0.15; mH = 480; price = 2460985;
        n = "B737-600"; c = 5; pc = "737"
        break;
        
        case "b 737-300":
        case "b 737 300":
        case "b 737300":
        case "b-737-300":
        case "b-737 300":
        case "b-737300":
        case "b737-300":
        case "b737 300":
        case "b737300":
        case "b 737-3":
        case "b 737 3":
        case "b 7373":
        case "b-737-3":
        case "b-737 3":
        case "b-7373":
        case "b737-3":
        case "b737 3":
        case "b7373":
        case "b 73-3":
        case "b 73 3":
        case "b 733": 
        case "b-73-3":
        case "b-73 3":
        case "b-733":
        case "b73-3":
        case "b73 3":
        case "b733":
        case "737 300":
        case "737-300":
        case "737300":
        case "737 3":
        case "737-3":
        case "7373":
        case "73 3":
        case "73-3":
        case "733":
        case "b 737-300 ":
        case "b 737 300 ":
        case "b 737300 ":
        case "b-737-300 ":
        case "b-737 300 ":
        case "b-737300 ":
        case "b737-300 ":
        case "b737 300 ":
        case "b737300 ":
        case "b 737-3 ":
        case "b 737 3 ":
        case "b 7373 ":
        case "b-737-3 ":
        case "b-737 3 ":
        case "b-7373 ":
        case "b737-3 ":
        case "b737 3 ":
        case "b7373 ":
        case "b 73-3 ":
        case "b 73 3 ":
        case "b 733" : 
        case "b-73-3 ":
        case "b-73 3 ":
        case "b-733 ":
        case "b73-3 ":
        case "b73 3 ":
        case "b733 ":
        case "737 300 ":
        case "737-300 ":
        case "737300 ":
        case "737 3 ":
        case "737-3 ":
        case "7373 ":
        case "73 3 ":
        case "73-3 ":
        case "733 ":
        case "id65":
        speed = 795; cap = 128; rwy = 7550; mC = 431270; range = 4707; fConsmp = 12; cConsmp = 0.15; mH = 360; price = 2464401;
        n = "B737-300"; c = 5; pc = "737"
        break;
        
        case "b 737-700c":
        case "b 737 700c":
        case "b 737700c":
        case "b-737-700c":
        case "b-737 700c":
        case "b-737700c":
        case "b737-700c":
        case "b737 700c":
        case "b737700c":
        case "b 737-7c":
        case "b 737 7c":
        case "b 7377c":
        case "b-737-7c":
        case "b-737 7c":
        case "b-7377c":
        case "b737-7c":
        case "b737 7c":
        case "b7377c":
        case "b 73-7c":
        case "b 73 7c":
        case "b 737c": 
        case "b-73-7c":
        case "b-73 7c":
        case "b-737c":
        case "b73-7c":
        case "b73 7c":
        case "b737c":
        case "737 700c":
        case "737-700c":
        case "737700c":
        case "737 7c":
        case "737-7c":
        case "7377c":
        case "73 7c":
        case "73-7c":
        case "737c":
        case "b 737-700-c":
        case "b 737 700-c":
        case "b 737700-c":
        case "b-737-700-c":
        case "b-737 700-c":
        case "b-737700-c":
        case "b737-700-c":
        case "b737 700-c":
        case "b737700-c":
        case "b 737-7-c":
        case "b 737 7-c":
        case "b 7377-c":
        case "b-737-7-c":
        case "b-737 7-c":
        case "b-7377-c":
        case "b737-7-c":
        case "b737 7-c":
        case "b7377-c":
        case "b 73-7-c":
        case "b 73 7-c":
        case "b 737-c": 
        case "b-73-7-c":
        case "b-73 7-c":
        case "b-737-c":
        case "b73-7-c":
        case "b73 7-c":
        case "b737-c":
        case "737 700-c":
        case "737-700-c":
        case "737700-c":
        case "737 7-c":
        case "737-7-c":
        case "7377-c":
        case "73 7-c":
        case "73-7-c":
        case "737-c":
        case "b 737-700 c":
        case "b 737 700 c":
        case "b 737700 c":
        case "b-737-700 c":
        case "b-737 700 c":
        case "b-737700 c":
        case "b737-700 c":
        case "b737 700 c":
        case "b737700 c":
        case "b 737-7 c":
        case "b 737 7 c":
        case "b 7377 c":
        case "b-737-7 c":
        case "b-737 7 c":
        case "b-7377 c":
        case "b737-7 c":
        case "b737 7 c":
        case "b7377 c":
        case "b 73-7 c":
        case "b 73 7 c":
        case "b 737 c": 
        case "b-73-7 c":
        case "b-73 7 c":
        case "b-737 c":
        case "b73-7 c":
        case "b73 7 c":
        case "b737 c":
        case "737 700 c":
        case "737-700 c":
        case "737700 c":
        case "737 7 c":
        case "737-7 c":
        case "7377 c":
        case "73 7 c":
        case "73-7 c":
        case "737 c":
        case "b 737-700c ":
        case "b 737 700c ":
        case "b 737700c ":
        case "b-737-700c ":
        case "b-737 700c ":
        case "b-737700c ":
        case "b737-700c ":
        case "b737 700c ":
        case "b737700c ":
        case "b 737-7c ":
        case "b 737 7c ":
        case "b 7377c ":
        case "b-737-7c ":
        case "b-737 7c ":
        case "b-7377c ":
        case "b737-7c ":
        case "b737 7c ":
        case "b7377c ":
        case "b 73-7c ":
        case "b 73 7c ":
        case "b 737c" : 
        case "b-73-7c ":
        case "b-73 7c ":
        case "b-737c ":
        case "b73-7c ":
        case "b73 7c ":
        case "b737c ":
        case "737 700c ":
        case "737-700c ":
        case "737700c ":
        case "737 7c ":
        case "737-7c ":
        case "7377c ":
        case "73 7c ":
        case "73-7c ":
        case "737c ":
        case "b 737-700-c ":
        case "b 737 700-c ":
        case "b 737700-c ":
        case "b-737-700-c ":
        case "b-737 700-c ":
        case "b-737700-c ":
        case "b737-700-c ":
        case "b737 700-c ":
        case "b737700-c ":
        case "b 737-7-c ":
        case "b 737 7-c ":
        case "b 7377-c ":
        case "b-737-7-c ":
        case "b-737 7-c ":
        case "b-7377-c ":
        case "b737-7-c ":
        case "b737 7-c ":
        case "b7377-c ":
        case "b 73-7-c ":
        case "b 73 7-c ":
        case "b 737-c ": 
        case "b-73-7-c ":
        case "b-73 7-c ":
        case "b-737-c ":
        case "b73-7-c ":
        case "b73 7-c ":
        case "b737-c ":
        case "737 700-c ":
        case "737-700-c ":
        case "737700-c ":
        case "737 7-c ":
        case "737-7-c ":
        case "7377-c ":
        case "73 7-c ":
        case "73-7-c ":
        case "737-c ":
        case "b 737-700 c ":
        case "b 737 700 c ":
        case "b 737700 c ":
        case "b-737-700 c ":
        case "b-737 700 c ":
        case "b-737700 c ":
        case "b737-700 c ":
        case "b737 700 c ":
        case "b737700 c ":
        case "b 737-7 c ":
        case "b 737 7 c ":
        case "b 7377 c ":
        case "b-737-7 c ":
        case "b-737 7 c ":
        case "b-7377 c ":
        case "b737-7 c ":
        case "b737 7 c ":
        case "b7377 c ":
        case "b 73-7 c ":
        case "b 73 7 c ":
        case "b 737 c ":
        case "b-73-7 c ":
        case "b-73 7 c ":
        case "b-737 c ":
        case "b73-7 c ":
        case "b73 7 c ":
        case "b737 c ":
        case "737 700 c ":
        case "737-700 c ":
        case "737700 c ":
        case "737 7 c ":
        case "737-7 c ":
        case "7377 c ":
        case "73 7 c ":
        case "73-7 c ":
        case "737 c ":
        case "id66":
        speed = 831; cap = 120; rwy = 7550; mC = 343012; range = 5940; fConsmp = 11.11; cConsmp = 0.14; mH = 480; price = 3118288
        n = "B737-700C"; c = 5; pc = "737"
        break;
        
        case "b 737-400":
        case "b 737 400":
        case "b 737400":
        case "b-737-400":
        case "b-737 400":
        case "b-737400":
        case "b737-400":
        case "b737 400":
        case "b737400":
        case "b 737-4":
        case "b 737 4":
        case "b 7374":
        case "b-737-4":
        case "b-737 4":
        case "b-7374":
        case "b737-4":
        case "b737 4":
        case "b7374":
        case "b 73-4":
        case "b 73 4":
        case "b 734": 
        case "b-73-4":
        case "b-73 4":
        case "b-734":
        case "b73-4":
        case "b73 4":
        case "b734":
        case "737 400":
        case "737-400":
        case "737400":
        case "737 4":
        case "737-4":
        case "7374":
        case "73 4":
        case "73-4":
        case "734":
        case "b 737-400 ":
        case "b 737 400 ":
        case "b 737400 ":
        case "b-737-400 ":
        case "b-737 400 ":
        case "b-737400 ":
        case "b737-400 ":
        case "b737 400 ":
        case "b737400 ":
        case "b 737-4 ":
        case "b 737 4 ":
        case "b 7374 ":
        case "b-737-4 ":
        case "b-737 4 ":
        case "b-7374 ":
        case "b737-4 ":
        case "b737 4 ":
        case "b7374 ":
        case "b 73-4 ":
        case "b 73 4 ":
        case "b 734" : 
        case "b-73-4 ":
        case "b-73 4 ":
        case "b-734 ":
        case "b73-4 ":
        case "b73 4 ":
        case "b734 ":
        case "737 400 ":
        case "737-400 ":
        case "737400 ":
        case "737 4 ":
        case "737-4 ":
        case "7374 ":
        case "73 4 ":
        case "73-4 ":
        case "734 ":
        case "id67":
        speed = 733; cap = 159; rwy = 7550; mC = 541582; range = 4010; fConsmp = 14; cConsmp = 0.18; mH = 330; price = 3282313;
        n = "B737-400"; c = 5; pc = "737"
        break;
        
        case "b 737 700":
        case "b 737-700":
        case "b 737700":
        case "b-737 700":
        case "b-737-700":
        case "b-737700":
        case "b737 700":
        case "b737-700":
        case "b737700":
        case "b 737 7":
        case "b 737-7":
        case "b 7377":
        case "b-737 7":
        case "b-737-7":
        case "b-7377":
        case "b737 7":
        case "b737-7":
        case "b7377":
        case "737 700":
        case "737-700":
        case "737700":
        case "737 7":
        case "737-7":
        case "7377":
        case "b 737 700 ":
        case "b 737-700 ":
        case "b 737700 ":
        case "b-737 700 ":
        case "b-737-700 ":
        case "b-737700 ":
        case "b737 700 ":
        case "b737-700 ":
        case "b737700 ":
        case "b 737 7 ":
        case "b 737-7 ":
        case "b 7377 ":
        case "b-737 7 ":
        case "b-737-7 ":
        case "b-7377 ":
        case "b737 7 ":
        case "b737-7 ":
        case "b7377 ":
        case "737 700 ":
        case "737-700 ":
        case "737700 ":
        case "737 7 ":
        case "737-7 ":
        case "7377 ":
        case "id68":
        speed = 762; cap = 149; rwy = 7550; mC = 428926; range = 6230; fConsmp = 10.45; cConsmp = 0.14; mH = 500; price = 4085576
        n = "B737-700"; c = 5; pc = "737"
        break;
        
        case "b 707":
        case "b-707":
        case "b707":
        case "707":
        case "b 707 ":
        case "b-707 ":
        case "b707 ":
        case "707 ":
        case "id69":
        speed = 1006; cap = 144; rwy = 6450; mC = 1355242; range = 9913; fConsmp = 18.36; cConsmp = 0.22; mH = 360; price = 4169974;
        n = "B707"; c = 5; pc = "b707"
        break;
        
        case "b 737-800":
        case "b 737 800":
        case "b 737800":
        case "b-737-800":
        case "b-737 800":
        case "b-737800":
        case "b737-800":
        case "b737 800":
        case "b737800":
        case "b 737-8":
        case "b 737 8":
        case "b 7378":
        case "b-737-8":
        case "b-737 8":
        case "b-7378":
        case "b737-8":
        case "b737 8":
        case "b7378":
        case "b 73-8":
        case "b 73 8":
        case "b 738": 
        case "b-73-8":
        case "b-73 8":
        case "b-738":
        case "b73-8":
        case "b73 8":
        case "b738":
        case "737 800":
        case "737-800":
        case "737800":
        case "737 8":
        case "737-8":
        case "7378":
        case "73 8":
        case "73-8":
        case "738":
        case "b 737-800 ":
        case "b 737 800 ":
        case "b 737800 ":
        case "b-737-800 ":
        case "b-737 800 ":
        case "b-737800 ":
        case "b737-800 ":
        case "b737 800 ":
        case "b737800 ":
        case "b 737-8 ":
        case "b 737 8 ":
        case "b 7378 ":
        case "b-737-8 ":
        case "b-737 8 ":
        case "b-7378 ":
        case "b737-8 ":
        case "b737 8 ":
        case "b7378 ":
        case "b 73-8 ":
        case "b 73 8 ":
        case "b 738 ":
        case "b-73-8 ":
        case "b-73 8 ":
        case "b-738 ":
        case "b73-8 ":
        case "b73 8 ":
        case "b738 ":
        case "737 800 ":
        case "737-800 ":
        case "737800 ":
        case "737 8 ":
        case "737-8 ":
        case "7378 ":
        case "73 8 ":
        case "73-8 ":
        case "738 ":
        case "id70":
        speed = 725; cap = 184; rwy = 7550; mC = 462826; range = 7000; fConsmp = 9.4; cConsmp = 0.12; mH = 470; price = 4407858;
        n = "B737-800"; c = 5; pc = "737"
        break;
        
        case "b 727-200":
        case "b 727 200":
        case "b 727200":
        case "b-727-200":
        case "b-727 200":
        case "b-727200":
        case "b727-200":
        case "b727 200":
        case "b727200":
        case "b 727-2":
        case "b 727 2":
        case "b 7272":
        case "b-727-2":
        case "b-727 2":
        case "b-7272":
        case "b727-2":
        case "b727 2":
        case "b7272":
        case "b 72-2":
        case "b 72 2":
        case "b 722":
        case "b-72-2":
        case "b-72 2":
        case "b-722":
        case "b72-2":
        case "b72 2":
        case "b722":
        case "727 200":
        case "727-200":
        case "727200":
        case "727 2":
        case "727-2":
        case "7272":
        case "72 2":
        case "72-2":
        case "722":
        case "b 727-200 ":
        case "b 727 200 ":
        case "b 727200 ":
        case "b-727-200 ":
        case "b-727 200 ":
        case "b-727200 ":
        case "b727-200 ":
        case "b727 200 ":
        case "b727200 ":
        case "b 727-2 ":
        case "b 727 2 ":
        case "b 7272 ":
        case "b-727-2 ":
        case "b-727 2 ":
        case "b-7272 ":
        case "b727-2 ":
        case "b727 2 ":
        case "b7272 ":
        case "b 72-2 ":
        case "b 72 2 ":
        case "b 722 ":
        case "b-72-2 ":
        case "b-72 2 ":
        case "b-722 ":
        case "b72-2 ":
        case "b72 2 ":
        case "b722 ":
        case "727 200 ":
        case "727-200 ":
        case "727200 ":
        case "727 2 ":
        case "727-2 ":
        case "7272 ":
        case "72 2 ":
        case "72-2 ":
        case "722 ":
        case "id71":
        speed = 972; cap = 189; rwy = 6450; mC = 1342856; range = 4450; fConsmp = 15.15; cConsmp = 0.19; mH = 340; price = 4883110;
        n = "B727-200"; c = 5; pc = "b727"
        break;
        
        case "b 737-900":
        case "b 737 900":
        case "b 737900":
        case "b-737-900":
        case "b-737 900":
        case "b-737900":
        case "b737-900":
        case "b737 900":
        case "b737900":
        case "b 737-9":
        case "b 737 9":
        case "b 7379":
        case "b-737-9":
        case "b-737 9":
        case "b-7379":
        case "b737-9":
        case "b737 9":
        case "b7379":
        case "b 73-9":
        case "b 73 9":
        case "b 739": 
        case "b-73-9":
        case "b-73 9":
        case "b-739":
        case "b73-9":
        case "b73 9":
        case "b739":
        case "737 900":
        case "737-900":
        case "737900":
        case "737 9":
        case "737-9":
        case "7379":
        case "73 9":
        case "73-9":
        case "739":
        case "b 737-900 ":
        case "b 737 900 ":
        case "b 737900 ":
        case "b-737-900 ":
        case "b-737 900 ":
        case "b-737900 ":
        case "b737-900 ":
        case "b737 900 ":
        case "b737900 ":
        case "b 737-9 ":
        case "b 737 9 ":
        case "b 7379 ":
        case "b-737-9 ":
        case "b-737 9 ":
        case "b-7379 ":
        case "b737-9 ":
        case "b737 9 ":
        case "b7379 ":
        case "b 73-9 ":
        case "b 73 9 ":
        case "b 739 ":
        case "b-73-9 ":
        case "b-73 9 ":
        case "b-739 ":
        case "b73-9 ":
        case "b73 9 ":
        case "b739 ":
        case "737 900 ":
        case "737-900 ":
        case "737900 ":
        case "737 9 ":
        case "737-9 ":
        case "7379 ":
        case "73 9 ":
        case "73-9 ":
        case "739 ":
        case "id72":
        speed = 836; cap = 177; rwy = 7550; mC = 387464; range = 3815; fConsmp = 10.1; cConsmp = 0.12; mH = 470; price = 5535200;
        n = "B737-900"; c = 5; pc = "737"
        break;
        
        case "b 737-700er":
        case "b 737 700er":
        case "b 737700er":
        case "b-737-700er":
        case "b-737 700er":
        case "b-737700er":
        case "b737-700er":
        case "b737 700er":
        case "b737700er":
        case "b 737-7er":
        case "b 737 7er":
        case "b 7377er":
        case "b-737-7er":
        case "b-737 7er":
        case "b-7377er":
        case "b737-7er":
        case "b737 7er":
        case "b7377er":
        case "b 73-7er":
        case "b 73 7er":
        case "b 737er":
        case "b-73-7er":
        case "b-73 7er":
        case "b-737er":
        case "b73-7er":
        case "b73 7er":
        case "b737er":
        case "737 700er":
        case "737-700er":
        case "737700er":
        case "737 7er":
        case "737-7er":
        case "7377er":
        case "73 7er":
        case "73-7er":
        case "737er":
        case "b 737-700-er":
        case "b 737 700-er":
        case "b 737700-er":
        case "b-737-700-er":
        case "b-737 700-er":
        case "b-737700-er":
        case "b737-700-er":
        case "b737 700-er":
        case "b737700-er":
        case "b 737-7-er":
        case "b 737 7-er":
        case "b 7377-er":
        case "b-737-7-er":
        case "b-737 7-er":
        case "b-7377-er":
        case "b737-7-er":
        case "b737 7-er":
        case "b7377-er":
        case "b 73-7-er":
        case "b 73 7-er":
        case "b 737-er": 
        case "b-73-7-er":
        case "b-73 7-er":
        case "b-737-er":
        case "b73-7-er":
        case "b73 7-er":
        case "b737-er":
        case "737 700-er":
        case "737-700-er":
        case "737700-er":
        case "737 7-er":
        case "737-7-er":
        case "7377-er":
        case "73 7-er":
        case "73-7-er":
        case "737-er":
        case "b 737-700 er":
        case "b 737 700 er":
        case "b 737700 er":
        case "b-737-700 er":
        case "b-737 700 er":
        case "b-737700 er":
        case "b737-700 er":
        case "b737 700 er":
        case "b737700 er":
        case "b 737-7 er":
        case "b 737 7 er":
        case "b 7377 er":
        case "b-737-7 er":
        case "b-737 7 er":
        case "b-7377 er":
        case "b737-7 er":
        case "b737 7 er":
        case "b7377 er":
        case "b 73-7 er":
        case "b 73 7 er":
        case "b 737 er": 
        case "b-73-7 er":
        case "b-73 7 er":
        case "b-737 er":
        case "b73-7 er":
        case "b73 7 er":
        case "b737 er":
        case "737 700 er":
        case "737-700 er":
        case "737700 er":
        case "737 7 er":
        case "737-7 er":
        case "7377 er":
        case "73 7 er":
        case "73-7 er":
        case "737 er":
        case "b 737-700er ":
        case "b 737 700er ":
        case "b 737700er ":
        case "b-737-700er ":
        case "b-737 700er ":
        case "b-737700er ":
        case "b737-700er ":
        case "b737 700er ":
        case "b737700er ":
        case "b 737-7er ":
        case "b 737 7er ":
        case "b 7377er ":
        case "b-737-7er ":
        case "b-737 7er ":
        case "b-7377er ":
        case "b737-7er ":
        case "b737 7er ":
        case "b7377er ":
        case "b 73-7er ":
        case "b 73 7er ":
        case "b 737er ":
        case "b-73-7er ":
        case "b-73 7er ":
        case "b-737er ":
        case "b73-7er ":
        case "b73 7er ":
        case "b737er ":
        case "737 700er ":
        case "737-700er ":
        case "737700er ":
        case "737 7er ":
        case "737-7er ":
        case "7377er ":
        case "73 7er ":
        case "73-7er ":
        case "737er ":
        case "b 737-700-er ":
        case "b 737 700-er ":
        case "b 737700-er ":
        case "b-737-700-er ":
        case "b-737 700-er ":
        case "b-737700-er ":
        case "b737-700-er ":
        case "b737 700-er ":
        case "b737700-er ":
        case "b 737-7-er ":
        case "b 737 7-er ":
        case "b 7377-er ":
        case "b-737-7-er ":
        case "b-737 7-er ":
        case "b-7377-er ":
        case "b737-7-er ":
        case "b737 7-er ":
        case "b7377-er ":
        case "b 73-7-er ":
        case "b 73 7-er ":
        case "b 737-er" : 
        case "b-73-7-er ":
        case "b-73 7-er ":
        case "b-737-er ":
        case "b73-7-er ":
        case "b73 7-er ":
        case "b737-er ":
        case "737 700-er ":
        case "737-700-er ":
        case "737700-er ":
        case "737 7-er ":
        case "737-7-er ":
        case "7377-er ":
        case "73 7-er ":
        case "73-7-er ":
        case "737-er ":
        case "b 737-700 er ":
        case "b 737 700 er ":
        case "b 737700 er ":
        case "b-737-700 er ":
        case "b-737 700 er ":
        case "b-737700 er ":
        case "b737-700 er ":
        case "b737 700 er ":
        case "b737700 er ":
        case "b 737-7 er ":
        case "b 737 7 er ":
        case "b 7377 er ":
        case "b-737-7 er ":
        case "b-737 7 er ":
        case "b-7377 er ":
        case "b737-7 er ":
        case "b737 7 er ":
        case "b7377 er ":
        case "b 73-7 er ":
        case "b 73 7 er ":
        case "b 737 er" : 
        case "b-73-7 er ":
        case "b-73 7 er ":
        case "b-737 er ":
        case "b73-7 er ":
        case "b73 7 er ":
        case "b737 er ":
        case "737 700 er ":
        case "737-700 er ":
        case "737700 er ":
        case "737 7 er ":
        case "737-7 er ":
        case "7377 er ":
        case "73 7 er ":
        case "73-7 er ":
        case "737 er ":
        case "id73":
        speed = 770; cap = 126; rwy = 7550; mC = 339392; range = 10200; fConsmp = 10.78; cConsmp = 0.14; mH = 460; price = 5656525; 
        n = "B737-700ER"; c = 5; pc = "737"
        break;
        
        case "b 757-300":
        case "b 757 300":
        case "b 757300":
        case "b-757-300":
        case "b-757 300":
        case "b-757300":
        case "b757-300":
        case "b757 300":
        case "b757300":
        case "b 757-3":
        case "b 757 3":
        case "b 7573":
        case "b-757-3":
        case "b-757 3":
        case "b-7573":
        case "b757-3":
        case "b757 3":
        case "b7573":
        case "b 75-3":
        case "b 75 3":
        case "b 753": 
        case "b-75-3":
        case "b-75 3":
        case "b-753":
        case "b75-3":
        case "b75 3":
        case "b753":
        case "757 300":
        case "757-300":
        case "757300":
        case "757 3":
        case "757-3":
        case "7573":
        case "75 3":
        case "75-3":
        case "753":
        case "b 757-300 ":
        case "b 757 300 ":
        case "b 757300 ":
        case "b-757-300 ":
        case "b-757 300 ":
        case "b-757300 ":
        case "b757-300 ":
        case "b757 300 ":
        case "b757300 ":
        case "b 757-3 ":
        case "b 757 3 ":
        case "b 7573 ":
        case "b-757-3 ":
        case "b-757 3 ":
        case "b-7573 ":
        case "b757-3 ":
        case "b757 3 ":
        case "b7573 ":
        case "b 75-3 ":
        case "b 75 3 ":
        case "b 753" : 
        case "b-75-3 ":
        case "b-75 3 ":
        case "b-753 ":
        case "b75-3 ":
        case "b75 3 ":
        case "b753 ":
        case "757 300 ":
        case "757-300 ":
        case "757300 ":
        case "757 3 ":
        case "757-3 ":
        case "7573 ":
        case "75 3 ":
        case "75-3 ":
        case "753 ":
        case "id74":
        speed = 867; cap = 243; rwy = 7800; mC = 735278; range = 6421; fConsmp = 18.36; cConsmp = 0.21; mH = 470; price = 7002640;
        n = "B757-300"; c = 5; pc = "b757"
        break;
        
        case "b 767-200":
        case "b 767 200":
        case "b 767200":
        case "b-767-200":
        case "b-767 200":
        case "b-767200":
        case "b767-200":
        case "b767 200":
        case "b767200":
        case "b 767-2":
        case "b 767 2":
        case "b 7672":
        case "b-767-2":
        case "b-767 2":
        case "b-7672":
        case "b767-2":
        case "b767 2":
        case "b7672":
        case "b 76-2":
        case "b 76 2":
        case "b 762": 
        case "b-76-2":
        case "b-76 2":
        case "b-762":
        case "b76-2":
        case "b76 2":
        case "b762":
        case "767 200":
        case "767-200":
        case "767200":
        case "767 2":
        case "767-2":
        case "7672":
        case "76 2":
        case "76-2":
        case "762":
        case "b 767-200 ":
        case "b 767 200 ":
        case "b 767200 ":
        case "b-767-200 ":
        case "b-767 200 ":
        case "b-767200 ":
        case "b767-200 ":
        case "b767 200 ":
        case "b767200 ":
        case "b 767-2 ":
        case "b 767 2 ":
        case "b 7672 ":
        case "b-767-2 ":
        case "b-767 2 ":
        case "b-7672 ":
        case "b767-2 ":
        case "b767 2 ":
        case "b7672 ":
        case "b 76-2 ":
        case "b 76 2 ":
        case "b 762" : 
        case "b-76-2 ":
        case "b-76 2 ":
        case "b-762 ":
        case "b76-2 ":
        case "b76 2 ":
        case "b762 ":
        case "767 200 ":
        case "767-200 ":
        case "767200 ":
        case "767 2 ":
        case "767-2 ":
        case "7672 ":
        case "76 2 ":
        case "76-2 ":
        case "762 ":
        case "id75":
        speed = 1013; cap = 224; rwy = 7800; mC = 1615956; range = 7300; fConsmp = 18.19; cConsmp = 0.21; mH = 320; price = 7882711;
        n = "B767-200"; c = 5; pc = "b767"
        break;
        
        case "b 737-900er":
        case "b 737 900er":
        case "b 737900er":
        case "b-737-900er":
        case "b-737 900er":
        case "b-737900er":
        case "b737-900er":
        case "b737 900er":
        case "b737900er":
        case "b 737-9er":
        case "b 737 9er":
        case "b 7379er":
        case "b-737-9er":
        case "b-737 9er":
        case "b-7379er":
        case "b737-9er":
        case "b737 9er":
        case "b7379er":
        case "b 73-9er":
        case "b 73 9er":
        case "b 739er":
        case "b-73-9er":
        case "b-73 9er":
        case "b-739er":
        case "b73-9er":
        case "b73 9er":
        case "b739er":
        case "737 900er":
        case "737-900er":
        case "737900er":
        case "737 9er":
        case "737-9er":
        case "7379er":
        case "73 9er":
        case "73-9er":
        case "739er":
        case "b 737-900-er":
        case "b 737 900-er":
        case "b 737900-er":
        case "b-737-900-er":
        case "b-737 900-er":
        case "b-737900-er":
        case "b737-900-er":
        case "b737 900-er":
        case "b737900-er":
        case "b 737-9-er":
        case "b 737 9-er":
        case "b 7379-er":
        case "b-737-9-er":
        case "b-737 9-er":
        case "b-7379-er":
        case "b737-9-er":
        case "b737 9-er":
        case "b7379-er":
        case "b 73-9-er":
        case "b 73 9-er":
        case "b 739-er": 
        case "b-73-9-er":
        case "b-73 9-er":
        case "b-739-er":
        case "b73-9-er":
        case "b73 9-er":
        case "b739-er":
        case "737 900-er":
        case "737-900-er":
        case "737900-er":
        case "737 9-er":
        case "737-9-er":
        case "7379-er":
        case "73 9-er":
        case "73-9-er":
        case "739-er":
        case "b 737-900 er":
        case "b 737 900 er":
        case "b 737900 er":
        case "b-737-900 er":
        case "b-737 900 er":
        case "b-737900 er":
        case "b737-900 er":
        case "b737 900 er":
        case "b737900 er":
        case "b 737-9 er":
        case "b 737 9 er":
        case "b 7379 er":
        case "b-737-9 er":
        case "b-737 9 er":
        case "b-7379 er":
        case "b737-9 er":
        case "b737 9 er":
        case "b7379 er":
        case "b 73-9 er":
        case "b 73 9 er":
        case "b 739 er": 
        case "b-73-9 er":
        case "b-73 9 er":
        case "b-739 er":
        case "b73-9 er":
        case "b73 9 er":
        case "b739 er":
        case "737 900 er":
        case "737-900 er":
        case "737900 er":
        case "737 9 er":
        case "737-9 er":
        case "7379 er":
        case "73 9 er":
        case "73-9 er":
        case "739 er":
        case "b 737-900er ":
        case "b 737 900er ":
        case "b 737900er ":
        case "b-737-900er ":
        case "b-737 900er ":
        case "b-737900er ":
        case "b737-900er ":
        case "b737 900er ":
        case "b737900er ":
        case "b 737-9er ":
        case "b 737 9er ":
        case "b 7379er ":
        case "b-737-9er ":
        case "b-737 9er ":
        case "b-7379er ":
        case "b737-9er ":
        case "b737 9er ":
        case "b7379er ":
        case "b 73-9er ":
        case "b 73 9er ":
        case "b 739er ":
        case "b-73-9er ":
        case "b-73 9er ":
        case "b-739er ":
        case "b73-9er ":
        case "b73 9er ":
        case "b739er ":
        case "737 900er ":
        case "737-900er ":
        case "737900er ":
        case "737 9er ":
        case "737-9er ":
        case "7379er ":
        case "73 9er ":
        case "73-9er ":
        case "739er ":
        case "b 737-900-er ":
        case "b 737 900-er ":
        case "b 737900-er ":
        case "b-737-900-er ":
        case "b-737 900-er ":
        case "b-737900-er ":
        case "b737-900-er ":
        case "b737 900-er ":
        case "b737900-er ":
        case "b 737-9-er ":
        case "b 737 9-er ":
        case "b 7379-er ":
        case "b-737-9-er ":
        case "b-737 9-er ":
        case "b-7379-er ":
        case "b737-9-er ":
        case "b737 9-er ":
        case "b7379-er ":
        case "b 73-9-er ":
        case "b 73 9-er ":
        case "b 739-er ": 
        case "b-73-9-er ":
        case "b-73 9-er ":
        case "b-739-er ":
        case "b73-9-er ":
        case "b73 9-er ":
        case "b739-er ":
        case "737 900-er ":
        case "737-900-er ":
        case "737900-er ":
        case "737 9-er ":
        case "737-9-er ":
        case "7379-er ":
        case "73 9-er ":
        case "73-9-er ":
        case "739-er ":
        case "b 737-900 er ":
        case "b 737 900 er ":
        case "b 737900 er ":
        case "b-737-900 er ":
        case "b-737 900 er ":
        case "b-737900 er ":
        case "b737-900 er ":
        case "b737 900 er ":
        case "b737900 er ":
        case "b 737-9 er ":
        case "b 737 9 er ":
        case "b 7379 er ":
        case "b-737-9 er ":
        case "b-737 9 er ":
        case "b-7379 er ":
        case "b737-9 er ":
        case "b737 9 er ":
        case "b7379 er ":
        case "b 73-9 er ":
        case "b 73 9 er ":
        case "b 739 er" : 
        case "b-73-9 er ":
        case "b-73 9 er ":
        case "b-739 er ":
        case "b73-9 er ":
        case "b73 9 er ":
        case "b739 er ":
        case "737 900 er ":
        case "737-900 er ":
        case "737900 er ":
        case "737 9 er ":
        case "737-9 er ":
        case "7379 er ":
        case "73 9 er ":
        case "73-9 er ":
        case "739 er ":
        case "id76":
        speed = 831; pax = 215; rwy = 7550; mC = 1014850; range = 5925; fConsmp = 11.11; cConsmp = 0.14; mH = 500; price = 9225912; 
        n = "B737-900ER"; c = 5; pc = "737"
        break;
        
        case "b 757-200":
        case "b 757 200":
        case "b 757200":
        case "b-757-200":
        case "b-757 200":
        case "b-757200":
        case "b757-200":
        case "b757 200":
        case "b757200":
        case "b 757-2":
        case "b 757 2":
        case "b 7572":
        case "b-757-2":
        case "b-757 2":
        case "b-7572":
        case "b757-2":
        case "b757 2":
        case "b7572":
        case "b 75-2":
        case "b 75 2":
        case "b 752": 
        case "b-75-2":
        case "b-75 2":
        case "b-752":
        case "b75-2":
        case "b75 2":
        case "b752":
        case "757 200":
        case "757-200":
        case "757200":
        case "757 2":
        case "757-2":
        case "7572":
        case "75 2":
        case "75-2":
        case "752":
        case "b 757-200 ":
        case "b 757 200 ":
        case "b 757200 ":
        case "b-757-200 ":
        case "b-757 200 ":
        case "b-757200 ":
        case "b757-200 ":
        case "b757 200 ":
        case "b757200 ":
        case "b 757-2 ":
        case "b 757 2 ":
        case "b 7572 ":
        case "b-757-2 ":
        case "b-757 2 ":
        case "b-7572 ":
        case "b757-2 ":
        case "b757 2 ":
        case "b7572 ":
        case "b 75-2 ":
        case "b 75 2 ":
        case "b 752" : 
        case "b-75-2 ":
        case "b-75 2 ":
        case "b-752 ":
        case "b75-2 ":
        case "b75 2 ":
        case "b752 ":
        case "757 200 ":
        case "757-200 ":
        case "757200 ":
        case "757 2 ":
        case "757-2 ":
        case "7572 ":
        case "75 2 ":
        case "75-2 ":
        case "752 ":
        case "id77":
        speed = 867; cap = 200; rwy = 7800; mC = 1798884; range = 7222; fConsmp = 12.96; cConsmp = 0.15; mH = 370; price = 9723701; 
        n = "B757-200"; c = 5; pc = "b757"
        break;
        
        case "b 767-200er":
        case "b 767 200er":
        case "b 767200er":
        case "b-767-200er":
        case "b-767 200er":
        case "b-767200er":
        case "b767-200er":
        case "b767 200er":
        case "b767200er":
        case "b 767-2er":
        case "b 767 2er":
        case "b 7672er":
        case "b-767-2er":
        case "b-767 2er":
        case "b-7672er":
        case "b767-2er":
        case "b767 2er":
        case "b7672er":
        case "b 76-2er":
        case "b 76 2er":
        case "b 762er":
        case "b-76-2er":
        case "b-76 2er":
        case "b-762er":
        case "b76-2er":
        case "b76 2er":
        case "b762er":
        case "767 200er":
        case "767-200er":
        case "767200er":
        case "767 2er":
        case "767-2er":
        case "7672er":
        case "76 2er":
        case "76-2er":
        case "762er":
        case "b 767-200-er":
        case "b 767 200-er":
        case "b 767200-er":
        case "b-767-200-er":
        case "b-767 200-er":
        case "b-767200-er":
        case "b767-200-er":
        case "b767 200-er":
        case "b767200-er":
        case "b 767-2-er":
        case "b 767 2-er":
        case "b 7672-er":
        case "b-767-2-er":
        case "b-767 2-er":
        case "b-7672-er":
        case "b767-2-er":
        case "b767 2-er":
        case "b7672-er":
        case "b 76-2-er":
        case "b 76 2-er":
        case "b 762-er": 
        case "b-76-2-er":
        case "b-76 2-er":
        case "b-762-er":
        case "b76-2-er":
        case "b76 2-er":
        case "b762-er":
        case "767 200-er":
        case "767-200-er":
        case "767200-er":
        case "767 2-er":
        case "767-2-er":
        case "7672-er":
        case "76 2-er":
        case "76-2-er":
        case "762-er":
        case "b 767-200 er":
        case "b 767 200 er":
        case "b 767200 er":
        case "b-767-200 er":
        case "b-767 200 er":
        case "b-767200 er":
        case "b767-200 er":
        case "b767 200 er":
        case "b767200 er":
        case "b 767-2 er":
        case "b 767 2 er":
        case "b 7672 er":
        case "b-767-2 er":
        case "b-767 2 er":
        case "b-7672 er":
        case "b767-2 er":
        case "b767 2 er":
        case "b7672 er":
        case "b 76-2 er":
        case "b 76 2 er":
        case "b 762 er": 
        case "b-76-2 er":
        case "b-76 2 er":
        case "b-762 er":
        case "b76-2 er":
        case "b76 2 er":
        case "b762 er":
        case "767 200 er":
        case "767-200 er":
        case "767200 er":
        case "767 2 er":
        case "767-2 er":
        case "7672 er":
        case "76 2 er":
        case "76-2 er":
        case "762 er":
        case "b 767-200er ":
        case "b 767 200er ":
        case "b 767200er ":
        case "b-767-200er ":
        case "b-767 200er ":
        case "b-767200er ":
        case "b767-200er ":
        case "b767 200er ":
        case "b767200er ":
        case "b 767-2er ":
        case "b 767 2er ":
        case "b 7672er ":
        case "b-767-2er ":
        case "b-767 2er ":
        case "b-7672er ":
        case "b767-2er ":
        case "b767 2er ":
        case "b7672er ":
        case "b 76-2er ":
        case "b 76 2er ":
        case "b 762er ":
        case "b-76-2er ":
        case "b-76 2er ":
        case "b-762er ":
        case "b76-2er ":
        case "b76 2er ":
        case "b762er ":
        case "767 200er ":
        case "767-200er ":
        case "767200er ":
        case "767 2er ":
        case "767-2er ":
        case "7672er ":
        case "76 2er ":
        case "76-2er ":
        case "762er ":
        case "b 767-200-er ":
        case "b 767 200-er ":
        case "b 767200-er ":
        case "b-767-200-er ":
        case "b-767 200-er ":
        case "b-767200-er ":
        case "b767-200-er ":
        case "b767 200-er ":
        case "b767200-er ":
        case "b 767-2-er ":
        case "b 767 2-er ":
        case "b 7672-er ":
        case "b-767-2-er ":
        case "b-767 2-er ":
        case "b-7672-er ":
        case "b767-2-er ":
        case "b767 2-er ":
        case "b7672-er ":
        case "b 76-2-er ":
        case "b 76 2-er ":
        case "b 762-er ": 
        case "b-76-2-er ":
        case "b-76 2-er ":
        case "b-762-er ":
        case "b76-2-er ":
        case "b76 2-er ":
        case "b762-er ":
        case "767 200-er ":
        case "767-200-er ":
        case "767200-er ":
        case "767 2-er ":
        case "767-2-er ":
        case "7672-er ":
        case "76 2-er ":
        case "76-2-er ":
        case "762-er ":
        case "b 767-200 er ":
        case "b 767 200 er ":
        case "b 767200 er ":
        case "b-767-200 er ":
        case "b-767 200 er ":
        case "b-767200 er ":
        case "b767-200 er ":
        case "b767 200 er ":
        case "b767200 er ":
        case "b 767-2 er ":
        case "b 767 2 er ":
        case "b 7672 er ":
        case "b-767-2 er ":
        case "b-767 2 er ":
        case "b-7672 er ":
        case "b767-2 er ":
        case "b767 2 er ":
        case "b7672 er ":
        case "b 76-2 er ":
        case "b 76 2 er ":
        case "b 762 er ": 
        case "b-76-2 er ":
        case "b-76 2 er ":
        case "b-762 er ":
        case "b76-2 er ":
        case "b76 2 er ":
        case "b762 er ":
        case "767 200 er ":
        case "767-200 er ":
        case "767200 er ":
        case "767 2 er ":
        case "767-2 er ":
        case "7672 er ":
        case "76 2 er ":
        case "76-2 er ":
        case "762 er ":
        case "id78":
        speed = 995; cap = 224; rwy = 7800; mC = 2611244; range = 12200; fConsmp = 16.32; cConsmp = 0.2; mH = 350; price = 14114834;
        n = "B767-200ER"; c = 5; pc = "b767"
        break;
        
        case "b 737 max 7":
        case "b 737 max-7":
        case "b 737 max7":
        case "b 737-max 7":
        case "b 737-max-7":
        case "b 737-max7":
        case "b 737max 7":
        case "b 737max-7":
        case "b 737max7":
        case "b-737 max 7":
        case "b-737 max-7":
        case "b-737 max7":
        case "b-737-max 7":
        case "b-737-max-7":
        case "b-737-max7":
        case "b-737max 7":
        case "b-737max-7":
        case "b-737max7":
        case "b737 max 7":
        case "b737 max-7":
        case "b737 max7":
        case "b737-max 7":
        case "b737-max-7":
        case "b737-max7":
        case "b737max 7":
        case "b737max-7":
        case "b737max7":
        case "b 737 m 7":
        case "b 737 m-7":
        case "b 737 m7":
        case "b 737-m 7":
        case "b 737-m-7":
        case "b 737-m7":
        case "b 737m 7":
        case "b 737m-7":
        case "b 737m7":
        case "b-737 m 7":
        case "b-737 m-7":
        case "b-737 m7":
        case "b-737-m 7":
        case "b-737-m-7":
        case "b-737-m7":
        case "b-737m 7":
        case "b-737m-7":
        case "b-737m7":
        case "b737 m 7":
        case "b737 m-7":
        case "b737 m7":
        case "b737-m 7":
        case "b737-m-7":
        case "b737-m7":
        case "b737m 7":
        case "b737m-7":
        case "b737m7":
        case "737 max 7":
        case "737 max-7":
        case "737 max7":
        case "737-max 7":
        case "737-max-7":
        case "737-max7":
        case "737max 7":
        case "737max-7":
        case "737max7":
        case "max 7":
        case "max-7":
        case "max7":
        case "b 737 max 7 ":
        case "b 737 max-7 ":
        case "b 737 max7 ":
        case "b 737-max 7 ":
        case "b 737-max-7 ":
        case "b 737-max7 ":
        case "b 737max 7 ":
        case "b 737max-7 ":
        case "b 737max7 ":
        case "b-737 max 7 ":
        case "b-737 max-7 ":
        case "b-737 max7 ":
        case "b-737-max 7 ":
        case "b-737-max-7 ":
        case "b-737-max7 ":
        case "b-737max 7 ":
        case "b-737max-7 ":
        case "b-737max7 ":
        case "b737 max 7 ":
        case "b737 max-7 ":
        case "b737 max7 ":
        case "b737-max 7 ":
        case "b737-max-7 ":
        case "b737-max7 ":
        case "b737max 7 ":
        case "b737max-7 ":
        case "b737max7 ":
        case "b 737 m 7 ":
        case "b 737 m-7 ":
        case "b 737 m7 ":
        case "b 737-m 7 ":
        case "b 737-m-7 ":
        case "b 737-m7 ":
        case "b 737m 7 ":
        case "b 737m-7 ":
        case "b 737m7 ":
        case "b-737 m 7 ":
        case "b-737 m-7 ":
        case "b-737 m7 ":
        case "b-737-m 7 ":
        case "b-737-m-7 ":
        case "b-737-m7 ":
        case "b-737m 7 ":
        case "b-737m-7 ":
        case "b-737m7 ":
        case "b737 m 7 ":
        case "b737 m-7 ":
        case "b737 m7 ":
        case "b737-m 7 ":
        case "b737-m-7 ":
        case "b737-m7 ":
        case "b737m 7 ":
        case "b737m-7 ":
        case "b737m7 ":
        case "737 max 7 ":
        case "737 max-7 ":
        case "737 max7 ":
        case "737-max 7 ":
        case "737-max-7 ":
        case "737-max7 ":
        case "737max 7 ":
        case "737max-7 ":
        case "737max7 ":
        case "max 7 ":
        case "max-7 ":
        case "max7 ":
        case "id79":
        speed = 88; cap = 160; rwy = 7300; mC = 693860; range = 6850; fConsmp = 7.21; cConsmp = 0.09; mH = 550; price = 17346513; 
        n = "B737 Max 7"; c = 5;; pc = "737max"
        break;
        
        case "b 737 max 8":
        case "b 737 max-8":
        case "b 737 max8":
        case "b 737-max 8":
        case "b 737-max-8":
        case "b 737-max8":
        case "b 737max 8":
        case "b 737max-8":
        case "b 737max8":
        case "b-737 max 8":
        case "b-737 max-8":
        case "b-737 max8":
        case "b-737-max 8":
        case "b-737-max-8":
        case "b-737-max8":
        case "b-737max 8":
        case "b-737max-8":
        case "b-737max8":
        case "b737 max 8":
        case "b737 max-8":
        case "b737 max8":
        case "b737-max 8":
        case "b737-max-8":
        case "b737-max8":
        case "b737max 8":
        case "b737max-8":
        case "b737max8":
        case "b 737 m 8":
        case "b 737 m-8":
        case "b 737 m8":
        case "b 737-m 8":
        case "b 737-m-8":
        case "b 737-m8":
        case "b 737m 8":
        case "b 737m-8":
        case "b 737m8":
        case "b-737 m 8":
        case "b-737 m-8":
        case "b-737 m8":
        case "b-737-m 8":
        case "b-737-m-8":
        case "b-737-m8":
        case "b-737m 8":
        case "b-737m-8":
        case "b-737m8":
        case "b737 m 8":
        case "b737 m-8":
        case "b737 m8":
        case "b737-m 8":
        case "b737-m-8":
        case "b737-m8":
        case "b737m 8":
        case "b737m-8":
        case "b737m8":
        case "737 max 8":
        case "737 max-8":
        case "737 max8":
        case "737-max 8":
        case "737-max-8":
        case "737-max8":
        case "737max 8":
        case "737max-8":
        case "737max8":
        case "max 8":
        case "max-8":
        case "max8":
        case "b 737 max 8 ":
        case "b 737 max-8 ":
        case "b 737 max8 ":
        case "b 737-max 8 ":
        case "b 737-max-8 ":
        case "b 737-max8 ":
        case "b 737max 8 ":
        case "b 737max-8 ":
        case "b 737max8 ":
        case "b-737 max 8 ":
        case "b-737 max-8 ":
        case "b-737 max8 ":
        case "b-737-max 8 ":
        case "b-737-max-8 ":
        case "b-737-max8 ":
        case "b-737max 8 ":
        case "b-737max-8 ":
        case "b-737max8 ":
        case "b737 max 8 ":
        case "b737 max-8 ":
        case "b737 max8 ":
        case "b737-max 8 ":
        case "b737-max-8 ":
        case "b737-max8 ":
        case "b737max 8 ":
        case "b737max-8 ":
        case "b737max8 ":
        case "b 737 m 8 ":
        case "b 737 m-8 ":
        case "b 737 m8 ":
        case "b 737-m 8 ":
        case "b 737-m-8 ":
        case "b 737-m8 ":
        case "b 737m 8 ":
        case "b 737m-8 ":
        case "b 737m8 ":
        case "b-737 m 8 ":
        case "b-737 m-8 ":
        case "b-737 m8 ":
        case "b-737-m 8 ":
        case "b-737-m-8 ":
        case "b-737-m8 ":
        case "b-737m 8 ":
        case "b-737m-8 ":
        case "b-737m8 ":
        case "b737 m 8 ":
        case "b737 m-8 ":
        case "b737 m8 ":
        case "b737-m 8 ":
        case "b737-m-8 ":
        case "b737-m8 ":
        case "b737m 8 ":
        case "b737m-8 ":
        case "b737m8 ":
        case "737 max 8 ":
        case "737 max-8 ":
        case "737 max8 ":
        case "737-max 8 ":
        case "737-max-8 ":
        case "737-max8 ":
        case "737max 8 ":
        case "737max-8 ":
        case "737max8 ":
        case "max 8 ":
        case "max-8 ":
        case "max8 ":
        case "mcas":
        case "mcas ":
        case "id80":
        speed = 881; pax = 180; rwy = 7500; mC = 720452; range = 6500; fConsmp = 7.21; cConsmp = 0.09; mH = 520; price = 18011300;
        n = "B737 Max 8"; c = 5; pc = "737max"
        break;
        
        case "b 737 max 9":
        case "b 737 max-9":
        case "b 737 max9":
        case "b 737-max 9":
        case "b 737-max-9":
        case "b 737-max9":
        case "b 737max 9":
        case "b 737max-9":
        case "b 737max9":
        case "b-737 max 9":
        case "b-737 max-9":
        case "b-737 max9":
        case "b-737-max 9":
        case "b-737-max-9":
        case "b-737-max9":
        case "b-737max 9":
        case "b-737max-9":
        case "b-737max9":
        case "b737 max 9":
        case "b737 max-9":
        case "b737 max9":
        case "b737-max 9":
        case "b737-max-9":
        case "b737-max9":
        case "b737max 9":
        case "b737max-9":
        case "b737max9":
        case "b 737 m 9":
        case "b 737 m-9":
        case "b 737 m9":
        case "b 737-m 9":
        case "b 737-m-9":
        case "b 737-m9":
        case "b 737m 9":
        case "b 737m-9":
        case "b 737m9":
        case "b-737 m 9":
        case "b-737 m-9":
        case "b-737 m9":
        case "b-737-m 9":
        case "b-737-m-9":
        case "b-737-m9":
        case "b-737m 9":
        case "b-737m-9":
        case "b-737m9":
        case "b737 m 9":
        case "b737 m-9":
        case "b737 m9":
        case "b737-m 9":
        case "b737-m-9":
        case "b737-m9":
        case "b737m 9":
        case "b737m-9":
        case "b737m9":
        case "737 max 9":
        case "737 max-9":
        case "737 max9":
        case "737-max 9":
        case "737-max-9":
        case "737-max9":
        case "737max 9":
        case "737max-9":
        case "737max9":
        case "max 9":
        case "max-9":
        case "max9":
        case "b 737 max 9 ":
        case "b 737 max-9 ":
        case "b 737 max9 ":
        case "b 737-max 9 ":
        case "b 737-max-9 ":
        case "b 737-max9 ":
        case "b 737max 9 ":
        case "b 737max-9 ":
        case "b 737max9 ":
        case "b-737 max 9 ":
        case "b-737 max-9 ":
        case "b-737 max9 ":
        case "b-737-max 9 ":
        case "b-737-max-9 ":
        case "b-737-max9 ":
        case "b-737max 9 ":
        case "b-737max-9 ":
        case "b-737max9 ":
        case "b737 max 9 ":
        case "b737 max-9 ":
        case "b737 max9 ":
        case "b737-max 9 ":
        case "b737-max-9 ":
        case "b737-max9 ":
        case "b737max 9 ":
        case "b737max-9 ":
        case "b737max9 ":
        case "b 737 m 9 ":
        case "b 737 m-9 ":
        case "b 737 m9 ":
        case "b 737-m 9 ":
        case "b 737-m-9 ":
        case "b 737-m9 ":
        case "b 737m 9 ":
        case "b 737m-9 ":
        case "b 737m9 ":
        case "b-737 m 9 ":
        case "b-737 m-9 ":
        case "b-737 m9 ":
        case "b-737-m 9 ":
        case "b-737-m-9 ":
        case "b-737-m9 ":
        case "b-737m 9 ":
        case "b-737m-9 ":
        case "b-737m9 ":
        case "b737 m 9 ":
        case "b737 m-9 ":
        case "b737 m9 ":
        case "b737-m 9 ":
        case "b737-m-9 ":
        case "b737-m9 ":
        case "b737m 9 ":
        case "b737m-9 ":
        case "b737m9 ":
        case "737 max 9 ":
        case "737 max-9 ":
        case "737 max9 ":
        case "737-max 9 ":
        case "737-max-9 ":
        case "737-max9 ":
        case "737max 9 ":
        case "737max-9 ":
        case "737max9 ":
        case "max 9 ":
        case "max-9 ":
        case "max9 ":
        case "id81":
        speed = 881; cap = 200; rwy = 7550; mC = 753984; range = 7000; fConsmp = 7.21; cConsmp = 0.09; mH = 500; price = 18849600;
        n = "B737 Max 9"; c = 5; pc = "737max"
        break;
        
        case "b 787-800":
        case "b 787 800":
        case "b 787800":
        case "b-787-800":
        case "b-787 800":
        case "b-787800":
        case "b787-800":
        case "b787 800":
        case "b787800":
        case "b 787-8":
        case "b 787 8":
        case "b 7878":
        case "b-787-8":
        case "b-787 8":
        case "b-7878":
        case "b787-8":
        case "b787 8":
        case "b7878":
        case "b 78-8":
        case "b 78 8":
        case "b 788": 
        case "b-78-8":
        case "b-78 8":
        case "b-788":
        case "b78-8":
        case "b78 8":
        case "b788":
        case "787 800":
        case "787-800":
        case "787800":
        case "787 8":
        case "787-8":
        case "7878":
        case "78 8":
        case "78-8":
        case "788":
        case "b 787-800 ":
        case "b 787 800 ":
        case "b 787800 ":
        case "b-787-800 ":
        case "b-787 800 ":
        case "b-787800 ":
        case "b787-800 ":
        case "b787 800 ":
        case "b787800 ":
        case "b 787-8 ":
        case "b 787 8 ":
        case "b 7878 ":
        case "b-787-8 ":
        case "b-787 8 ":
        case "b-7878 ":
        case "b787-8 ":
        case "b787 8 ":
        case "b7878 ":
        case "b 78-8 ":
        case "b 78 8 ":
        case "b 788 ":
        case "b-78-8 ":
        case "b-78 8 ":
        case "b-788 ":
        case "b78-8 ":
        case "b78 8 ":
        case "b788 ":
        case "787 800 ":
        case "787-800 ":
        case "787800 ":
        case "787 8 ":
        case "787-8 ":
        case "7878 ":
        case "78 8 ":
        case "78-8 ":
        case "788 ":
        case "id82":
        speed = 822; cap = 250; rwy = 9000; mC = 1358834; range = 14500; fConsmp = 15.2; cConsmp = 0.2; mH = 450; price = 19411920;
        n = "B787-8"; c = 5; pc = "787"
        break;
        
        case "b 737 max 10":
        case "b 737 max-10":
        case "b 737 max10":
        case "b 737-max 10":
        case "b 737-max-10":
        case "b 737-max10":
        case "b 737max 10":
        case "b 737max-10":
        case "b 737max10":
        case "b-737 max 10":
        case "b-737 max-10":
        case "b-737 max10":
        case "b-737-max 10":
        case "b-737-max-10":
        case "b-737-max10":
        case "b-737max 10":
        case "b-737max-10":
        case "b-737max10":
        case "b737 max 10":
        case "b737 max-10":
        case "b737 max10":
        case "b737-max 10":
        case "b737-max-10":
        case "b737-max10":
        case "b737max 10":
        case "b737max-10":
        case "b737max10":
        case "b 737 m 10":
        case "b 737 m-10":
        case "b 737 m10":
        case "b 737-m 10":
        case "b 737-m-10":
        case "b 737-m10":
        case "b 737m 10":
        case "b 737m-10":
        case "b 737m10":
        case "b-737 m 10":
        case "b-737 m-10":
        case "b-737 m10":
        case "b-737-m 10":
        case "b-737-m-10":
        case "b-737-m10":
        case "b-737m 10":
        case "b-737m-10":
        case "b-737m10":
        case "b737 m 10":
        case "b737 m-10":
        case "b737 m10":
        case "b737-m 10":
        case "b737-m-10":
        case "b737-m10":
        case "b737m 10":
        case "b737m-10":
        case "b737m10":
        case "737 max 10":
        case "737 max-10":
        case "737 max10":
        case "737-max 10":
        case "737-max-10":
        case "737-max10":
        case "737max 10":
        case "737max-10":
        case "737max10":
        case "max 10":
        case "max-10":
        case "max10":
        case "b 737 max 10 ":
        case "b 737 max-10 ":
        case "b 737 max10 ":
        case "b 737-max 10 ":
        case "b 737-max-10 ":
        case "b 737-max10 ":
        case "b 737max 10 ":
        case "b 737max-10 ":
        case "b 737max10 ":
        case "b-737 max 10 ":
        case "b-737 max-10 ":
        case "b-737 max10 ":
        case "b-737-max 10 ":
        case "b-737-max-10 ":
        case "b-737-max10 ":
        case "b-737max 10 ":
        case "b-737max-10 ":
        case "b-737max10 ":
        case "b737 max 10 ":
        case "b737 max-10 ":
        case "b737 max10 ":
        case "b737-max 10 ":
        case "b737-max-10 ":
        case "b737-max10 ":
        case "b737max 10 ":
        case "b737max-10 ":
        case "b737max10 ":
        case "b 737 m 10 ":
        case "b 737 m-10 ":
        case "b 737 m10 ":
        case "b 737-m 10 ":
        case "b 737-m-10 ":
        case "b 737-m10 ":
        case "b 737m 10 ":
        case "b 737m-10 ":
        case "b 737m10 ":
        case "b-737 m 10 ":
        case "b-737 m-10 ":
        case "b-737 m10 ":
        case "b-737-m 10 ":
        case "b-737-m-10 ":
        case "b-737-m10 ":
        case "b-737m 10 ":
        case "b-737m-10 ":
        case "b-737m10 ":
        case "b737 m 10 ":
        case "b737 m-10 ":
        case "b737 m10 ":
        case "b737-m 10 ":
        case "b737-m-10 ":
        case "b737-m10 ":
        case "b737m 10 ":
        case "b737m-10 ":
        case "b737m10 ":
        case "737 max 10 ":
        case "737 max-10 ":
        case "737 max10 ":
        case "737-max 10 ":
        case "737-max-10 ":
        case "737-max10 ":
        case "737max 10 ":
        case "737max-10 ":
        case "737max10 ":
        case "max 10 ":
        case "max-10 ":
        case "max10 ":
        case "id83":
        speed = 881; cap = 225; rwy = 7600; mC = 800000; range = 7000; fConsmp = 7.21; cConsmp = 0.1; mH = 450; price = 19649600;
        n = "B737 Max 10"; c = 5; pc = "737max10"
        break;
        
        case "b 767-300":
        case "b 767 300":
        case "b 767300":
        case "b-767-300":
        case "b-767 300":
        case "b-767300":
        case "b767-300":
        case "b767 300":
        case "b767300":
        case "b 767-3":
        case "b 767 3":
        case "b 7673":
        case "b-767-3":
        case "b-767 3":
        case "b-7673":
        case "b767-3":
        case "b767 3":
        case "b7673":
        case "b 76-3":
        case "b 76 3":
        case "b 763": 
        case "b-76-3":
        case "b-76 3":
        case "b-763":
        case "b76-3":
        case "b76 3":
        case "b763":
        case "767 300":
        case "767-300":
        case "767300":
        case "767 3":
        case "767-3":
        case "7673":
        case "76 3":
        case "76-3":
        case "763":
        case "b 767-300 ":
        case "b 767 300 ":
        case "b 767300 ":
        case "b-767-300 ":
        case "b-767 300 ":
        case "b-767300 ":
        case "b767-300 ":
        case "b767 300 ":
        case "b767300 ":
        case "b 767-3 ":
        case "b 767 3 ":
        case "b 7673 ":
        case "b-767-3 ":
        case "b-767 3 ":
        case "b-7673 ":
        case "b767-3 ":
        case "b767 3 ":
        case "b7673 ":
        case "b 76-3 ":
        case "b 76 3 ":
        case "b 763" : 
        case "b-76-3 ":
        case "b-76 3 ":
        case "b-763 ":
        case "b76-3 ":
        case "b76 3 ":
        case "b763 ":
        case "767 300 ":
        case "767-300 ":
        case "767300 ":
        case "767 3 ":
        case "767-3 ":
        case "7673 ":
        case "76 3 ":
        case "76-3 ":
        case "763 ":
        case "id84":
        speed = 945; cap = 269; rwy = 7800; mC = 4204116; range = 7300; fConsmp = 20.33; cConsmp = 0.24; mH = 390; price = 23356202;
        n = "B767-300"; c = 5; pc = "b767"
        break;
        
        case "b 767-300er":
        case "b 767 300er":
        case "b 767300er":
        case "b-767-300er":
        case "b-767 300er":
        case "b-767300er":
        case "b767-300er":
        case "b767 300er":
        case "b767300er":
        case "b 767-3er":
        case "b 767 3er":
        case "b 7673er":
        case "b-767-3er":
        case "b-767 3er":
        case "b-7673er":
        case "b767-3er":
        case "b767 3er":
        case "b7673er":
        case "b 76-3er":
        case "b 76 3er":
        case "b 763er":
        case "b-76-3er":
        case "b-76 3er":
        case "b-763er":
        case "b76-3er":
        case "b76 3er":
        case "b763er":
        case "767 300er":
        case "767-300er":
        case "767300er":
        case "767 3er":
        case "767-3er":
        case "7673er":
        case "76 3er":
        case "76-3er":
        case "763er":
        case "b 767-300-er":
        case "b 767 300-er":
        case "b 767300-er":
        case "b-767-300-er":
        case "b-767 300-er":
        case "b-767300-er":
        case "b767-300-er":
        case "b767 300-er":
        case "b767300-er":
        case "b 767-3-er":
        case "b 767 3-er":
        case "b 7673-er":
        case "b-767-3-er":
        case "b-767 3-er":
        case "b-7673-er":
        case "b767-3-er":
        case "b767 3-er":
        case "b7673-er":
        case "b 76-3-er":
        case "b 76 3-er":
        case "b 763-er": 
        case "b-76-3-er":
        case "b-76 3-er":
        case "b-763-er":
        case "b76-3-er":
        case "b76 3-er":
        case "b763-er":
        case "767 300-er":
        case "767-300-er":
        case "767300-er":
        case "767 3-er":
        case "767-3-er":
        case "7673-er":
        case "76 3-er":
        case "76-3-er":
        case "763-er":
        case "b 767-300 er":
        case "b 767 300 er":
        case "b 767300 er":
        case "b-767-300 er":
        case "b-767 300 er":
        case "b-767300 er":
        case "b767-300 er":
        case "b767 300 er":
        case "b767300 er":
        case "b 767-3 er":
        case "b 767 3 er":
        case "b 7673 er":
        case "b-767-3 er":
        case "b-767 3 er":
        case "b-7673 er":
        case "b767-3 er":
        case "b767 3 er":
        case "b7673 er":
        case "b 76-3 er":
        case "b 76 3 er":
        case "b 763 er": 
        case "b-76-3 er":
        case "b-76 3 er":
        case "b-763 er":
        case "b76-3 er":
        case "b76 3 er":
        case "b763 er":
        case "767 300 er":
        case "767-300 er":
        case "767300 er":
        case "767 3 er":
        case "767-3 er":
        case "7673 er":
        case "76 3 er":
        case "76-3 er":
        case "763 er":
        case "b 767-300er ":
        case "b 767 300er ":
        case "b 767300er ":
        case "b-767-300er ":
        case "b-767 300er ":
        case "b-767300er ":
        case "b767-300er ":
        case "b767 300er ":
        case "b767300er ":
        case "b 767-3er ":
        case "b 767 3er ":
        case "b 7673er ":
        case "b-767-3er ":
        case "b-767 3er ":
        case "b-7673er ":
        case "b767-3er ":
        case "b767 3er ":
        case "b7673er ":
        case "b 76-3er ":
        case "b 76 3er ":
        case "b 763er ":
        case "b-76-3er ":
        case "b-76 3er ":
        case "b-763er ":
        case "b76-3er ":
        case "b76 3er ":
        case "b763er ":
        case "767 300er ":
        case "767-300er ":
        case "767300er ":
        case "767 3er ":
        case "767-3er ":
        case "7673er ":
        case "76 3er ":
        case "76-3er ":
        case "763er ":
        case "b 767-300-er ":
        case "b 767 300-er ":
        case "b 767300-er ":
        case "b-767-300-er ":
        case "b-767 300-er ":
        case "b-767300-er ":
        case "b767-300-er ":
        case "b767 300-er ":
        case "b767300-er ":
        case "b 767-3-er ":
        case "b 767 3-er ":
        case "b 7673-er ":
        case "b-767-3-er ":
        case "b-767 3-er ":
        case "b-7673-er ":
        case "b767-3-er ":
        case "b767 3-er ":
        case "b7673-er ":
        case "b 76-3-er ":
        case "b 76 3-er ":
        case "b 763-er ": 
        case "b-76-3-er ":
        case "b-76 3-er ":
        case "b-763-er ":
        case "b76-3-er ":
        case "b76 3-er ":
        case "b763-er ":
        case "767 300-er ":
        case "767-300-er ":
        case "767300-er ":
        case "767 3-er ":
        case "767-3-er ":
        case "7673-er ":
        case "76 3-er ":
        case "76-3-er ":
        case "763-er ":
        case "b 767-300 er ":
        case "b 767 300 er ":
        case "b 767300 er ":
        case "b-767-300 er ":
        case "b-767 300 er ":
        case "b-767300 er ":
        case "b767-300 er ":
        case "b767 300 er ":
        case "b767300 er ":
        case "b 767-3 er ":
        case "b 767 3 er ":
        case "b 7673 er ":
        case "b-767-3 er ":
        case "b-767 3 er ":
        case "b-7673 er ":
        case "b767-3 er ":
        case "b767 3 er ":
        case "b7673 er ":
        case "b 76-3 er ":
        case "b 76 3 er ":
        case "b 763 er ": 
        case "b-76-3 er ":
        case "b-76 3 er ":
        case "b-763 er ":
        case "b76-3 er ":
        case "b76 3 er ":
        case "b763 er ":
        case "767 300 er ":
        case "767-300 er ":
        case "767300 er ":
        case "767 3 er ":
        case "767-3 er ":
        case "7673 er ":
        case "76 3 er ":
        case "76-3 er ":
        case "763 er ":
        case "id85":
        speed = 936; cap = 269; rwy = 7800; mC = 5349672; range = 11065; fConsmp = 20.2; cConsmp = 0.25; mH = 370; price = 33435451;
        n = "B767-300ER"; c = 5; pc = "b767"
        break;
        
        case "b 767-400er":
        case "b 767 400er":
        case "b 767400er":
        case "b-767-400er":
        case "b-767 400er":
        case "b-767400er":
        case "b767-400er":
        case "b767 400er":
        case "b767400er":
        case "b 767-4er":
        case "b 767 4er":
        case "b 7674er":
        case "b-767-4er":
        case "b-767 4er":
        case "b-7674er":
        case "b767-4er":
        case "b767 4er":
        case "b7674er":
        case "b 76-4er":
        case "b 76 4er":
        case "b 764er":
        case "b-76-4er":
        case "b-76 4er":
        case "b-764er":
        case "b76-4er":
        case "b76 4er":
        case "b764er":
        case "767 400er":
        case "767-400er":
        case "767400er":
        case "767 4er":
        case "767-4er":
        case "7674er":
        case "76 4er":
        case "76-4er":
        case "764er":
        case "b 767-400-er":
        case "b 767 400-er":
        case "b 767400-er":
        case "b-767-400-er":
        case "b-767 400-er":
        case "b-767400-er":
        case "b767-400-er":
        case "b767 400-er":
        case "b767400-er":
        case "b 767-4-er":
        case "b 767 4-er":
        case "b 7674-er":
        case "b-767-4-er":
        case "b-767 4-er":
        case "b-7674-er":
        case "b767-4-er":
        case "b767 4-er":
        case "b7674-er":
        case "b 76-4-er":
        case "b 76 4-er":
        case "b 764-er": 
        case "b-76-4-er":
        case "b-76 4-er":
        case "b-764-er":
        case "b76-4-er":
        case "b76 4-er":
        case "b764-er":
        case "767 400-er":
        case "767-400-er":
        case "767400-er":
        case "767 4-er":
        case "767-4-er":
        case "7674-er":
        case "76 4-er":
        case "76-4-er":
        case "764-er":
        case "b 767-400 er":
        case "b 767 400 er":
        case "b 767400 er":
        case "b-767-400 er":
        case "b-767 400 er":
        case "b-767400 er":
        case "b767-400 er":
        case "b767 400 er":
        case "b767400 er":
        case "b 767-4 er":
        case "b 767 4 er":
        case "b 7674 er":
        case "b-767-4 er":
        case "b-767 4 er":
        case "b-7674 er":
        case "b767-4 er":
        case "b767 4 er":
        case "b7674 er":
        case "b 76-4 er":
        case "b 76 4 er":
        case "b 764 er": 
        case "b-76-4 er":
        case "b-76 4 er":
        case "b-764 er":
        case "b76-4 er":
        case "b76 4 er":
        case "b764 er":
        case "767 400 er":
        case "767-400 er":
        case "767400 er":
        case "767 4 er":
        case "767-4 er":
        case "7674 er":
        case "76 4 er":
        case "76-4 er":
        case "764 er":
        case "b 767-400er ":
        case "b 767 400er ":
        case "b 767400er ":
        case "b-767-400er ":
        case "b-767 400er ":
        case "b-767400er ":
        case "b767-400er ":
        case "b767 400er ":
        case "b767400er ":
        case "b 767-4er ":
        case "b 767 4er ":
        case "b 7674er ":
        case "b-767-4er ":
        case "b-767 4er ":
        case "b-7674er ":
        case "b767-4er ":
        case "b767 4er ":
        case "b7674er ":
        case "b 76-4er ":
        case "b 76 4er ":
        case "b 764er ":
        case "b-76-4er ":
        case "b-76 4er ":
        case "b-764er ":
        case "b76-4er ":
        case "b76 4er ":
        case "b764er ":
        case "767 400er ":
        case "767-400er ":
        case "767400er ":
        case "767 4er ":
        case "767-4er ":
        case "7674er ":
        case "76 4er ":
        case "76-4er ":
        case "764er ":
        case "b 767-400-er ":
        case "b 767 400-er ":
        case "b 767400-er ":
        case "b-767-400-er ":
        case "b-767 400-er ":
        case "b-767400-er ":
        case "b767-400-er ":
        case "b767 400-er ":
        case "b767400-er ":
        case "b 767-4-er ":
        case "b 767 4-er ":
        case "b 7674-er ":
        case "b-767-4-er ":
        case "b-767 4-er ":
        case "b-7674-er ":
        case "b767-4-er ":
        case "b767 4-er ":
        case "b7674-er ":
        case "b 76-4-er ":
        case "b 76 4-er ":
        case "b 764-er ":
        case "b-76-4-er ":
        case "b-76 4-er ":
        case "b-764-er ":
        case "b76-4-er ":
        case "b76 4-er ":
        case "b764-er ":
        case "767 400-er ":
        case "767-400-er ":
        case "767400-er ":
        case "767 4-er ":
        case "767-4-er ":
        case "7674-er ":
        case "76 4-er ":
        case "76-4-er ":
        case "764-er ":
        case "b 767-400 er ":
        case "b 767 400 er ":
        case "b 767400 er ":
        case "b-767-400 er ":
        case "b-767 400 er ":
        case "b-767400 er ":
        case "b767-400 er ":
        case "b767 400 er ":
        case "b767400 er ":
        case "b 767-4 er ":
        case "b 767 4 er ":
        case "b 7674 er ":
        case "b-767-4 er ":
        case "b-767 4 er ":
        case "b-7674 er ":
        case "b767-4 er ":
        case "b767 4 er ":
        case "b7674 er ":
        case "b 76-4 er ":
        case "b 76 4 er ":
        case "b 764 er ": 
        case "b-76-4 er ":
        case "b-76 4 er ":
        case "b-764 er ":
        case "b76-4 er ":
        case "b76 4 er ":
        case "b764 er ":
        case "767 400 er ":
        case "767-400 er ":
        case "767400 er ":
        case "767 4 er ":
        case "767-4 er ":
        case "7674 er ":
        case "76 4 er ":
        case "76-4 er ":
        case "764 er ":
        case "id86":
        speed = 928; cap = 304; rwy = 7800; mC = 5391074; range = 10415; fConsmp = 21.42; cConsmp = 0.26; mH = 360; price = 33694208;
        n = "B767-400ER"; c = 5; pc = "b767"
        break;

        case "b 747 sp":
        case "b 747-sp":
        case "b 747sp":
        case "b-747 sp":
        case "b-747-sp":
        case "b-747sp":
        case "b747 sp":
        case "b747-sp":
        case "b747sp":
        case "747-sp":
        case "747sp":
        case "747 sp":
        case "sp":
        case "id87":
        speed = 990; cap = 350; rwy = 7545; mC = 3878280; range = 10800; fConsmp = 21.78; cConsmp = 0.26; mH = 400; price = 40824000
        n = "B747SP"; c = 5; pc = "747sp"
        break;
        
        case "b 747-100":
        case "b 747 100":
        case "b 747100": 
        case "b-747-100":
        case "b-747 100":
        case "b-747100":
        case "b747-100":
        case "b747 100":
        case "b747100": 
        case "b 747-1":
        case "b 747 1":
        case "b 7471":
        case "b-747-1":
        case "b-747 1":
        case "b-7471":
        case "b747-1":
        case "b747 1":
        case "b7471":
        case "b 74-1":
        case "b 74 1":
        case "b 741": 
        case "b-74-1":
        case "b-74 1":
        case "b-741":
        case "b74-1":
        case "b74 1":
        case "b741":
        case "747 100":
        case "747-100":
        case "747100":
        case "747 1":
        case "747-1":
        case "7471":
        case "74 1":
        case "74-1":
        case "741":
        case "b 747-100 ":
        case "b 747 100 ":
        case "b 747100 ":
        case "b-747-100 ":
        case "b-747 100 ":
        case "b-747100 ":
        case "b747-100 ":
        case "b747 100 ":
        case "b747100 ":
        case "b 747-1 ":
        case "b 747 1 ":
        case "b 7471 ":
        case "b-747-1 ":
        case "b-747 1 ":
        case "b-7471 ":
        case "b747-1 ":
        case "b747 1 ":
        case "b7471 ":
        case "b 74-1 ":
        case "b 74 1 ":
        case "b 741 ":
        case "b-74-1 ":
        case "b-74 1 ":
        case "b-741 ":
        case "b74-1 ":
        case "b74 1 ":
        case "b741 ":
        case "747 100 ":
        case "747-100 ":
        case "747100 ":
        case "747 1 ":
        case "747-1 ":
        case "7471 ":
        case "74 1 ":
        case "74-1 ":
        case "741 ":
        case "id88":
        speed = 938; cap = 366; rwy = 10250; mC = 11320406; range = 9800; fConsmp = 23.32; cConsmp = 0.28; mH = 370; price = 44393752;
        n = "B747-100"; c = 5; pc = "747-100"
        break;
        
        case "b 747-200":
        case "b 747 200":
        case "b 747200":
        case "b-747-200":
        case "b-747 200":
        case "b-747200":
        case "b747-200":
        case "b747 200":
        case "b747200":
        case "b 747-2":
        case "b 747 2":
        case "b 7472":
        case "b-747-2":
        case "b-747 2":
        case "b-7472":
        case "b747-2":
        case "b747 2":
        case "b7472":
        case "b 74-2":
        case "b 74 2":
        case "b 742":
        case "b-74-2":
        case "b-74 2":
        case "b-742":
        case "b74-2":
        case "b74 2":
        case "b742":
        case "747 200":
        case "747-200":
        case "747200":
        case "747 2":
        case "747-2":
        case "7472":
        case "74 2":
        case "74-2":
        case "742":
        case "b 747-200b":
        case "b 747 200b":
        case "b 747200b":
        case "b-747-200b":
        case "b-747 200b":
        case "b-747200b":
        case "b747-200b":
        case "b747 200b":
        case "b747200b":
        case "b 747-2b":
        case "b 747 2b":
        case "b 7472b":
        case "b-747-2b":
        case "b-747 2b":
        case "b-7472b":
        case "b747-2b":
        case "b747 2b":
        case "b7472b":
        case "b 74-2b":
        case "b 74 2b":
        case "b 742b":
        case "b-74-2b":
        case "b-74 2b":
        case "b-742b":
        case "b74-2b":
        case "b74 2b":
        case "b742b":
        case "747 200b":
        case "747-200b":
        case "747200b":
        case "747 2b":
        case "747-2b":
        case "7472b":
        case "74 2b":
        case "74-2b":
        case "742b":
        case "b 747-200-b":
        case "b 747 200-b":
        case "b 747200-b":
        case "b-747-200-b":
        case "b-747 200-b":
        case "b-747200-b":
        case "b747-200-b":
        case "b747 200-b":
        case "b747200-b":
        case "b 747-2-b":
        case "b 747 2-b":
        case "b 7472-b":
        case "b-747-2-b":
        case "b-747 2-b":
        case "b-7472-b":
        case "b747-2-b":
        case "b747 2-b":
        case "b7472-b":
        case "b 74-2-b":
        case "b 74 2-b":
        case "b 742-b":
        case "b-74-2-b":
        case "b-74 2-b":
        case "b-742-b":
        case "b74-2-b":
        case "b74 2-b":
        case "b742-b":
        case "747 200-b":
        case "747-200-b":
        case "747200-b":
        case "747 2-b":
        case "747-2-b":
        case "7472-b":
        case "74 2-b":
        case "74-2-b":
        case "742-b":
        case "b 747-200 b":
        case "b 747 200 b":
        case "b 747200 b":
        case "b-747-200 b":
        case "b-747 200 b":
        case "b-747200 b":
        case "b747-200 b":
        case "b747 200 b":
        case "b747200 b":
        case "b 747-2 b":
        case "b 747 2 b":
        case "b 7472 b":
        case "b-747-2 b":
        case "b-747 2 b":
        case "b-7472 b":
        case "b747-2 b":
        case "b747 2 b":
        case "b7472 b":
        case "b 74-2 b":
        case "b 74 2 b":
        case "b 742 b":
        case "b-74-2 b":
        case "b-74 2 b":
        case "b-742 b":
        case "b74-2 b":
        case "b74 2 b":
        case "b742 b":
        case "747 200 b":
        case "747-200 b":
        case "747200 b":
        case "747 2 b":
        case "747-2 b":
        case "7472 b":
        case "74 2 b":
        case "74-2 b":
        case "742 b":
        case "b 747-200 ":
        case "b 747 200 ":
        case "b 747200 ":
        case "b-747-200 ":
        case "b-747 200 ":
        case "b-747200 ":
        case "b747-200 ":
        case "b747 200 ":
        case "b747200 ":
        case "b 747-2 ":
        case "b 747 2 ":
        case "b 7472 ":
        case "b-747-2 ":
        case "b-747 2 ":
        case "b-7472 ":
        case "b747-2 ":
        case "b747 2 ":
        case "b7472 ":
        case "b 74-2 ":
        case "b 74 2 ":
        case "b 742 ":
        case "b-74-2 ":
        case "b-74 2 ":
        case "b-742 ":
        case "b74-2 ":
        case "b74 2 ":
        case "b742 ":
        case "747 200 ":
        case "747-200 ":
        case "747200 ":
        case "747 2 ":
        case "747-2 ":
        case "7472 ":
        case "74 2 ":
        case "74-2 ":
        case "742 ":
        case "b 747-200b ":
        case "b 747 200b ":
        case "b 747200b ":
        case "b-747-200b ":
        case "b-747 200b ":
        case "b-747200b ":
        case "b747-200b ":
        case "b747 200b ":
        case "b747200b ":
        case "b 747-2b ":
        case "b 747 2b ":
        case "b 7472b ":
        case "b-747-2b ":
        case "b-747 2b ":
        case "b-7472b ":
        case "b747-2b ":
        case "b747 2b ":
        case "b7472b ":
        case "b 74-2b ":
        case "b 74 2b ":
        case "b 742b ":
        case "b-74-2b ":
        case "b-74 2b ":
        case "b-742b ":
        case "b74-2b ":
        case "b74 2b ":
        case "b742b ":
        case "747 200b ":
        case "747-200b ":
        case "747200b ":
        case "747 2b ":
        case "747-2b ":
        case "7472b ":
        case "74 2b ":
        case "74-2b ":
        case "742b ":
        case "b 747-200-b ":
        case "b 747 200-b ":
        case "b 747200-b ":
        case "b-747-200-b ":
        case "b-747 200-b ":
        case "b-747200-b ":
        case "b747-200-b ":
        case "b747 200-b ":
        case "b747200-b ":
        case "b 747-2-b ":
        case "b 747 2-b ":
        case "b 7472-b ":
        case "b-747-2-b ":
        case "b-747 2-b ":
        case "b-7472-b ":
        case "b747-2-b ":
        case "b747 2-b ":
        case "b7472-b ":
        case "b 74-2-b ":
        case "b 74 2-b ":
        case "b 742-b ":
        case "b-74-2-b ":
        case "b-74 2-b ":
        case "b-742-b ":
        case "b74-2-b ":
        case "b74 2-b ":
        case "b742-b ":
        case "747 200-b ":
        case "747-200-b ":
        case "747200-b ":
        case "747 2-b ":
        case "747-2-b ":
        case "7472-b ":
        case "74 2-b ":
        case "74-2-b ":
        case "742-b ":
        case "b 747-200 b ":
        case "b 747 200 b ":
        case "b 747200 b ":
        case "b-747-200 b ":
        case "b-747 200 b ":
        case "b-747200 b ":
        case "b747-200 b ":
        case "b747 200 b ":
        case "b747200 b ":
        case "b 747-2 b ":
        case "b 747 2 b ":
        case "b 7472 b ":
        case "b-747-2 b ":
        case "b-747 2 b ":
        case "b-7472 b ":
        case "b747-2 b ":
        case "b747 2 b ":
        case "b7472 b ":
        case "b 74-2 b ":
        case "b 74 2 b ":
        case "b 742 b ":
        case "b-74-2 b ":
        case "b-74 2 b ":
        case "b-742 b ":
        case "b74-2 b ":
        case "b74 2 b ":
        case "b742 b ":
        case "747 200 b ":
        case "747-200 b ":
        case "747200 b ":
        case "747 2 b ":
        case "747-2 b ":
        case "7472 b ":
        case "74 2 b ":
        case "74-2 b ":
        case "742 b ":
        case "id89":
        speed = 839; cap = 366; rwy = 10250; mC = 14095016; range = 12700; fConsmp = 21.34; cConsmp = 0.28; mH = 360; price = 57530678;
        n = "B747-200B"; c = 5; pc = "747-200b"
        break;
        
        case "b 777-200":
        case "b 777 200":
        case "b 777200":
        case "b-777-200":
        case "b-777 200":
        case "b-777200":
        case "b777-200":
        case "b777 200":
        case "b777200":
        case "b 777-2":
        case "b 777 2":
        case "b 7772":
        case "b-777-2":
        case "b-777 2":
        case "b-7772":
        case "b777-2":
        case "b777 2":
        case "b7772":
        case "b 77-2":
        case "b 77 2":
        case "b 772":
        case "b-77-2":
        case "b-77 2":
        case "b-772":
        case "b77-2":
        case "b77 2":
        case "b772":
        case "777 200":
        case "777-200":
        case "777200":
        case "777 2":
        case "777-2":
        case "7772":
        case "77 2":
        case "77-2":
        case "772":
        case "b 777-200 ":
        case "b 777 200 ":
        case "b 777200 ":
        case "b-777-200 ":
        case "b-777 200 ":
        case "b-777200 ":
        case "b777-200 ":
        case "b777 200 ":
        case "b777200 ":
        case "b 777-2 ":
        case "b 777 2 ":
        case "b 7772 ":
        case "b-777-2 ":
        case "b-777 2 ":
        case "b-7772 ":
        case "b777-2 ":
        case "b777 2 ":
        case "b7772 ":
        case "b 77-2 ":
        case "b 77 2 ":
        case "b 772 ":
        case "b-77-2 ":
        case "b-77 2 ":
        case "b-772 ":
        case "b77-2 ":
        case "b77 2 ":
        case "b772 ":
        case "777 200 ":
        case "777-200 ":
        case "777200 ":
        case "777 2 ":
        case "777-2 ":
        case "7772 ":
        case "77 2 ":
        case "77-2 ":
        case "772 ":
        case "id90":
        speed = 950; cap = 400; rwy = 9000; mC = 7296438; range = 9695; fConsmp = 18.54; cConsmp = 0.22; mH = 470; price = 60803647;
        n = "B777-200"; c = 5; pc = "b777-200lr"
        break;
        
        case "b 747-300":
        case "b 747 300":
        case "b 747300":
        case "b-747-300":
        case "b-747 300":
        case "b-747300":
        case "b747-300":
        case "b747 300":
        case "b747300":
        case "b 747-3":
        case "b 747 3":
        case "b 7473":
        case "b-747-3":
        case "b-747 3":
        case "b-7473":
        case "b747-3":
        case "b747 3":
        case "b7473":
        case "b 74-3":
        case "b 74 3":
        case "b 743":
        case "b-74-3":
        case "b-74 3":
        case "b-743":
        case "b74-3":
        case "b74 3":
        case "b743":
        case "747 300":
        case "747-300":
        case "747300":
        case "747 3":
        case "747-3":
        case "7473":
        case "74 3":
        case "74-3":
        case "743":
        case "b 747-300 ":
        case "b 747 300 ":
        case "b 747300 ":
        case "b-747-300 ":
        case "b-747 300 ":
        case "b-747300 ":
        case "b747-300 ":
        case "b747 300 ":
        case "b747300 ":
        case "b 747-3 ":
        case "b 747 3 ":
        case "b 7473 ":
        case "b-747-3 ":
        case "b-747 3 ":
        case "b-7473 ":
        case "b747-3 ":
        case "b747 3 ":
        case "b7473 ":
        case "b 74-3 ":
        case "b 74 3 ":
        case "b 743 ":
        case "b-74-3 ":
        case "b-74 3 ":
        case "b-743 ":
        case "b74-3 ":
        case "b74 3 ":
        case "b743 ":
        case "747 300 ":
        case "747-300 ":
        case "747300 ":
        case "747 3 ":
        case "747-3 ":
        case "7473 ":
        case "74 3 ":
        case "74-3 ":
        case "743 ":
        case "id91":
        speed = 973; cap = 412; rwy = 10250; mC = 12330146; range = 12400; fConsmp = 22.66; cConsmp = 0.28; mH = 370; price = 63231515;
        n = "B747-300"; c = 5; pc = "747-300"
        break;
        
        case "b 777-200lr":
        case "b 777 200lr":
        case "b 777200lr":
        case "b-777-200lr":
        case "b-777 200lr":
        case "b-777200lr":
        case "b777-200lr":
        case "b777 200lr":
        case "b777200lr":
        case "b 777-2lr":
        case "b 777 2lr":
        case "b 7772lr":
        case "b-777-2lr":
        case "b-777 2lr":
        case "b-7772lr":
        case "b777-2lr":
        case "b777 2lr":
        case "b7772lr":
        case "b 77-2lr":
        case "b 77 2lr":
        case "b 772lr":
        case "b-77-2lr":
        case "b-77 2lr":
        case "b-772lr":
        case "b77-2lr":
        case "b77 2lr":
        case "b772lr":
        case "777 200lr":
        case "777-200lr":
        case "777200lr":
        case "777 2lr":
        case "777-2lr":
        case "7772lr":
        case "77 2lr":
        case "77-2lr":
        case "772lr":
        case "b 777-200-lr":
        case "b 777 200-lr":
        case "b 777200-lr":
        case "b-777-200-lr":
        case "b-777 200-lr":
        case "b-777200-lr":
        case "b777-200-lr":
        case "b777 200-lr":
        case "b777200-lr":
        case "b 777-2-lr":
        case "b 777 2-lr":
        case "b 7772-lr":
        case "b-777-2-lr":
        case "b-777 2-lr":
        case "b-7772-lr":
        case "b777-2-lr":
        case "b777 2-lr":
        case "b7772-lr":
        case "b 77-2-lr":
        case "b 77 2-lr":
        case "b 772-lr":
        case "b-77-2-lr":
        case "b-77 2-lr":
        case "b-772-lr":
        case "b77-2-lr":
        case "b77 2-lr":
        case "b772-lr":
        case "777 200-lr":
        case "777-200-lr":
        case "777200-lr":
        case "777 2-lr":
        case "777-2-lr":
        case "7772-lr":
        case "77 2-lr":
        case "77-2-lr":
        case "772-lr":
        case "b 777-200 lr":
        case "b 777 200 lr":
        case "b 777200 lr":
        case "b-777-200 lr":
        case "b-777 200 lr":
        case "b-777200 lr":
        case "b777-200 lr":
        case "b777 200 lr":
        case "b777200 lr":
        case "b 777-2 lr":
        case "b 777 2 lr":
        case "b 7772 lr":
        case "b-777-2 lr":
        case "b-777 2 lr":
        case "b-7772 lr":
        case "b777-2 lr":
        case "b777 2 lr":
        case "b7772 lr":
        case "b 77-2 lr":
        case "b 77 2 lr":
        case "b 772 lr":
        case "b-77-2 lr":
        case "b-77 2 lr":
        case "b-772 lr":
        case "b77-2 lr":
        case "b77 2 lr":
        case "b772 lr":
        case "777 200 lr":
        case "777-200 lr":
        case "777200 lr":
        case "777 2 lr":
        case "777-2 lr":
        case "7772 lr":
        case "77 2 lr":
        case "77-2 lr":
        case "772 lr":
        case "b 777-200lr ":
        case "b 777 200lr ":
        case "b 777200lr ":
        case "b-777-200lr ":
        case "b-777 200lr ":
        case "b-777200lr ":
        case "b777-200lr ":
        case "b777 200lr ":
        case "b777200lr ":
        case "b 777-2lr ":
        case "b 777 2lr ":
        case "b 7772lr ":
        case "b-777-2lr ":
        case "b-777 2lr ":
        case "b-7772lr ":
        case "b777-2lr ":
        case "b777 2lr ":
        case "b7772lr ":
        case "b 77-2lr ":
        case "b 77 2lr ":
        case "b 772lr ":
        case "b-77-2lr ":
        case "b-77 2lr ":
        case "b-772lr ":
        case "b77-2lr ":
        case "b77 2lr ":
        case "b772lr ":
        case "777 200lr ":
        case "777-200lr ":
        case "777200lr ":
        case "777 2lr ":
        case "777-2lr ":
        case "7772lr ":
        case "77 2lr ":
        case "77-2lr ":
        case "772lr ":
        case "b 777-200-lr ":
        case "b 777 200-lr ":
        case "b 777200-lr ":
        case "b-777-200-lr ":
        case "b-777 200-lr ":
        case "b-777200-lr ":
        case "b777-200-lr ":
        case "b777 200-lr ":
        case "b777200-lr ":
        case "b 777-2-lr ":
        case "b 777 2-lr ":
        case "b 7772-lr ":
        case "b-777-2-lr ":
        case "b-777 2-lr ":
        case "b-7772-lr ":
        case "b777-2-lr ":
        case "b777 2-lr ":
        case "b7772-lr ":
        case "b 77-2-lr ":
        case "b 77 2-lr ":
        case "b 772-lr ":
        case "b-77-2-lr ":
        case "b-77 2-lr ":
        case "b-772-lr ":
        case "b77-2-lr ":
        case "b77 2-lr ":
        case "b772-lr ":
        case "777 200-lr ":
        case "777-200-lr ":
        case "777200-lr ":
        case "777 2-lr ":
        case "777-2-lr ":
        case "7772-lr ":
        case "77 2-lr ":
        case "77-2-lr ":
        case "772-lr ":
        case "b 777-200 lr ":
        case "b 777 200 lr ":
        case "b 777200 lr ":
        case "b-777-200 lr ":
        case "b-777 200 lr ":
        case "b-777200 lr ":
        case "b777-200 lr ":
        case "b777 200 lr ":
        case "b777200 lr ":
        case "b 777-2 lr ":
        case "b 777 2 lr ":
        case "b 7772 lr ":
        case "b-777-2 lr ":
        case "b-777 2 lr ":
        case "b-7772 lr ":
        case "b777-2 lr ":
        case "b777 2 lr ":
        case "b7772 lr ":
        case "b 77-2 lr ":
        case "b 77 2 lr ":
        case "b 772 lr ":
        case "b-77-2 lr ":
        case "b-77 2 lr ":
        case "b-772 lr ":
        case "b77-2 lr ":
        case "b77 2 lr ":
        case "b772 lr ":
        case "777 200 lr ":
        case "777-200 lr ":
        case "777200 lr ":
        case "777 2 lr ":
        case "777-2 lr ":
        case "7772 lr ":
        case "77 2 lr ":
        case "77-2 lr ":
        case "772 lr ":
        case "id92":
        speed = 986; cap = 300; rwy = 11000; mC = 4284306; range = 14500; fConsmp = 19.19; cConsmp = 0.24; mH = 490; price = 65912406;
        n = "B777-200LR"; c = 5; pc = "b777-200lr"
        break;

        case "b 777-300er":
        case "b 777 300er":
        case "b 777300er":
        case "b-777-300er":
        case "b-777 300er":
        case "b-777300er":
        case "b777-300er":
        case "b777 300er":
        case "b777300er":
        case "b 777-3er":
        case "b 777 3er":
        case "b 7773er":
        case "b-777-3er":
        case "b-777 3er":
        case "b-7773er":
        case "b777-3er":
        case "b777 3er":
        case "b7773er":
        case "b 77-3er":
        case "b 77 3er":
        case "b 773er":
        case "b-77-3er":
        case "b-77 3er":
        case "b-773er":
        case "b77-3er":
        case "b77 3er":
        case "b773er":
        case "777 300er":
        case "777-300er":
        case "777300er":
        case "777 3er":
        case "777-3er":
        case "7773er":
        case "77 3er":
        case "77-3er":
        case "773er":
        case "b 777-300-er":
        case "b 777 300-er":
        case "b 777300-er":
        case "b-777-300-er":
        case "b-777 300-er":
        case "b-777300-er":
        case "b777-300-er":
        case "b777 300-er":
        case "b777300-er":
        case "b 777-3-er":
        case "b 777 3-er":
        case "b 7773-er":
        case "b-777-3-er":
        case "b-777 3-er":
        case "b-7773-er":
        case "b777-3-er":
        case "b777 3-er":
        case "b7773-er":
        case "b 77-3-er":
        case "b 77 3-er":
        case "b 773-er":
        case "b-77-3-er":
        case "b-77 3-er":
        case "b-773-er":
        case "b77-3-er":
        case "b77 3-er":
        case "b773-er":
        case "777 300-er":
        case "777-300-er":
        case "777300-er":
        case "777 3-er":
        case "777-3-er":
        case "7773-er":
        case "77 3-er":
        case "77-3-er":
        case "773-er":
        case "b 777-300 er":
        case "b 777 300 er":
        case "b 777300 er":
        case "b-777-300 er":
        case "b-777 300 er":
        case "b-777300 er":
        case "b777-300 er":
        case "b777 300 er":
        case "b777300 er":
        case "b 777-3 er":
        case "b 777 3 er":
        case "b 7773 er":
        case "b-777-3 er":
        case "b-777 3 er":
        case "b-7773 er":
        case "b777-3 er":
        case "b777 3 er":
        case "b7773 er":
        case "b 77-3 er":
        case "b 77 3 er":
        case "b 773 er":
        case "b-77-3 er":
        case "b-77 3 er":
        case "b-773 er":
        case "b77-3 er":
        case "b77 3 er":
        case "b773 er":
        case "777 300 er":
        case "777-300 er":
        case "777300 er":
        case "777 3 er":
        case "777-3 er":
        case "7773 er":
        case "77 3 er":
        case "77-3 er":
        case "773 er":
        case "b 777-300er ":
        case "b 777 300er ":
        case "b 777300er ":
        case "b-777-300er ":
        case "b-777 300er ":
        case "b-777300er ":
        case "b777-300er ":
        case "b777 300er ":
        case "b777300er ":
        case "b 777-3er ":
        case "b 777 3er ":
        case "b 7773er ":
        case "b-777-3er ":
        case "b-777 3er ":
        case "b-7773er ":
        case "b777-3er ":
        case "b777 3er ":
        case "b7773er ":
        case "b 77-3er ":
        case "b 77 3er ":
        case "b 773er ":
        case "b-77-3er ":
        case "b-77 3er ":
        case "b-773er ":
        case "b77-3er ":
        case "b77 3er ":
        case "b773er ":
        case "777 300er ":
        case "777-300er ":
        case "777300er ":
        case "777 3er ":
        case "777-3er ":
        case "7773er ":
        case "77 3er ":
        case "77-3er ":
        case "773er ":
        case "b 777-300-er ":
        case "b 777 300-er ":
        case "b 777300-er ":
        case "b-777-300-er ":
        case "b-777 300-er ":
        case "b-777300-er ":
        case "b777-300-er ":
        case "b777 300-er ":
        case "b777300-er ":
        case "b 777-3-er ":
        case "b 777 3-er ":
        case "b 7773-er ":
        case "b-777-3-er ":
        case "b-777 3-er ":
        case "b-7773-er ":
        case "b777-3-er ":
        case "b777 3-er ":
        case "b7773-er ":
        case "b 77-3-er ":
        case "b 77 3-er ":
        case "b 773-er ":
        case "b-77-3-er ":
        case "b-77 3-er ":
        case "b-773-er ":
        case "b77-3-er ":
        case "b77 3-er ":
        case "b773-er ":
        case "777 300-er ":
        case "777-300-er ":
        case "777300-er ":
        case "777 3-er ":
        case "777-3-er ":
        case "7773-er ":
        case "77 3-er ":
        case "77-3-er ":
        case "773-er ":
        case "b 777-300 er ":
        case "b 777 300 er ":
        case "b 777300 er ":
        case "b-777-300 er ":
        case "b-777 300 er ":
        case "b-777300 er ":
        case "b777-300 er ":
        case "b777 300 er ":
        case "b777300 er ":
        case "b 777-3 er ":
        case "b 777 3 er ":
        case "b 7773 er ":
        case "b-777-3 er ":
        case "b-777 3 er ":
        case "b-7773 er ":
        case "b777-3 er ":
        case "b777 3 er ":
        case "b7773 er ":
        case "b 77-3 er ":
        case "b 77 3 er ":
        case "b 773 er ":
        case "b-77-3 er ":
        case "b-77 3 er ":
        case "b-773 er ":
        case "b77-3 er ":
        case "b77 3 er ":
        case "b773 er ":
        case "777 300 er ":
        case "777-300 er ":
        case "777300 er ":
        case "777 3 er ":
        case "777-3 er ":
        case "7773 er ":
        case "77 3 er ":
        case "77-3 er ":
        case "773 er ":
        case "id93":
        speed = 1036; cap = 350; rwy = 11000; mC = 5800722; range = 14685; 
        fConsmp = 19.19; cConsmp = 0.24; mH = 460; price = 68243786
        n = "B777-300ER"; c = 5; "b777-300"
        break;

        case "b 787-900":
        case "b 787 900":
        case "b 787900":
        case "b-787-900":
        case "b-787 900":
        case "b-787900":
        case "b787-900":
        case "b787 900":
        case "b787900":
        case "b 787-9":
        case "b 787 9":
        case "b 7879":
        case "b-787-9":
        case "b-787 9":
        case "b-7879":
        case "b787-9":
        case "b787 9":
        case "b7879":
        case "b 78-9":
        case "b 78 9":
        case "b 789": 
        case "b-78-9":
        case "b-78 9":
        case "b-789":
        case "b78-9":
        case "b78 9":
        case "b789":
        case "787 900":
        case "787-900":
        case "787900":
        case "787 9":
        case "787-9":
        case "7879":
        case "78 9":
        case "78-9":
        case "789":
        case "b 787-900 ":
        case "b 787 900 ":
        case "b 787900 ":
        case "b-787-900 ":
        case "b-787 900 ":
        case "b-787900 ":
        case "b787-900 ":
        case "b787 900 ":
        case "b787900 ":
        case "b 787-9 ":
        case "b 787 9 ":
        case "b 7879 ":
        case "b-787-9 ":
        case "b-787 9 ":
        case "b-7879 ":
        case "b787-9 ":
        case "b787 9 ":
        case "b7879 ":
        case "b 78-9 ":
        case "b 78 9 ":
        case "b 789" : 
        case "b-78-9 ":
        case "b-78 9 ":
        case "b-789 ":
        case "b78-9 ":
        case "b78 9 ":
        case "b789 ":
        case "787 900 ":
        case "787-900 ":
        case "787900 ":
        case "787 9 ":
        case "787-9 ":
        case "7879 ":
        case "78 9 ":
        case "78-9 ":
        case "789 ":
        case "id94":
        speed = 822; cap = 290; rwy = 9000; mC = 4899850; range = 14500;
        fConsmp = 15.2; cConsmp = 0.2; mH = 500; price = 69997851;
        n = "B787-9"; c = 5; pc = "787"
        break;

        case "b 747-400c":
        case "b 747 400c":
        case "b 747400c":
        case "b-747-400c":
        case "b-747 400c":
        case "b-747400c":
        case "b747-400c":
        case "b747 400c":
        case "b747400c":
        case "b 747-4c":
        case "b 747 4c":
        case "b 7474c":
        case "b-747-4c":
        case "b-747 4c":
        case "b-7474c":
        case "b747-4c":
        case "b747 4c":
        case "b7474c":
        case "b 74-4c":
        case "b 74 4c":
        case "b 744c": 
        case "b-74-4c":
        case "b-74 4c":
        case "b-744c":
        case "b74-4c":
        case "b74 4c":
        case "b744c":
        case "747 400c":
        case "747-400c":
        case "747400c":
        case "747 4c":
        case "747-4c":
        case "7474c":
        case "74 4c":
        case "74-4c":
        case "744c":
        case "b 747-400-c":
        case "b 747 400-c":
        case "b 747400-c":
        case "b-747-400-c":
        case "b-747 400-c":
        case "b-747400-c":
        case "b747-400-c":
        case "b747 400-c":
        case "b747400-c":
        case "b 747-4-c":
        case "b 747 4-c":
        case "b 7474-c":
        case "b-747-4-c":
        case "b-747 4-c":
        case "b-7474-c":
        case "b747-4-c":
        case "b747 4-c":
        case "b7474-c":
        case "b 74-4-c":
        case "b 74 4-c":
        case "b 744-c": 
        case "b-74-4-c":
        case "b-74 4-c":
        case "b-744-c":
        case "b74-4-c":
        case "b74 4-c":
        case "b744-c":
        case "747 400-c":
        case "747-400-c":
        case "747400-c":
        case "747 4-c":
        case "747-4-c":
        case "7474-c":
        case "74 4-c":
        case "74-4-c":
        case "744-c":
        case "b 747-400 c":
        case "b 747 400 c":
        case "b 747400 c":
        case "b-747-400 c":
        case "b-747 400 c":
        case "b-747400 c":
        case "b747-400 c":
        case "b747 400 c":
        case "b747400 c":
        case "b 747-4 c":
        case "b 747 4 c":
        case "b 7474 c":
        case "b-747-4 c":
        case "b-747 4 c":
        case "b-7474 c":
        case "b747-4 c":
        case "b747 4 c":
        case "b7474 c":
        case "b 74-4 c":
        case "b 74 4 c":
        case "b 744 c": 
        case "b-74-4 c":
        case "b-74 4 c":
        case "b-744 c":
        case "b74-4 c":
        case "b74 4 c":
        case "b744 c":
        case "747 400 c":
        case "747-400 c":
        case "747400 c":
        case "747 4 c":
        case "747-4 c":
        case "7474 c":
        case "74 4 c":
        case "74-4 c":
        case "744 c":
        case "b 747-400c ":
        case "b 747 400c ":
        case "b 747400c ":
        case "b-747-400c ":
        case "b-747 400c ":
        case "b-747400c ":
        case "b747-400c ":
        case "b747 400c ":
        case "b747400c ":
        case "b 747-4c ":
        case "b 747 4c ":
        case "b 7474c ":
        case "b-747-4c ":
        case "b-747 4c ":
        case "b-7474c ":
        case "b747-4c ":
        case "b747 4c ":
        case "b7474c ":
        case "b 74-4c ":
        case "b 74 4c ":
        case "b 744c" : 
        case "b-74-4c ":
        case "b-74 4c ":
        case "b-744c ":
        case "b74-4c ":
        case "b74 4c ":
        case "b744c ":
        case "747 400c ":
        case "747-400c ":
        case "747400c ":
        case "747 4c ":
        case "747-4c ":
        case "7474c ":
        case "74 4c ":
        case "74-4c ":
        case "744c ":
        case "b 747-400-c ":
        case "b 747 400-c ":
        case "b 747400-c ":
        case "b-747-400-c ":
        case "b-747 400-c ":
        case "b-747400-c ":
        case "b747-400-c ":
        case "b747 400-c ":
        case "b747400-c ":
        case "b 747-4-c ":
        case "b 747 4-c ":
        case "b 7474-c ":
        case "b-747-4-c ":
        case "b-747 4-c ":
        case "b-7474-c ":
        case "b747-4-c ":
        case "b747 4-c ":
        case "b7474-c ":
        case "b 74-4-c ":
        case "b 74 4-c ":
        case "b 744-c ": 
        case "b-74-4-c ":
        case "b-74 4-c ":
        case "b-744-c ":
        case "b74-4-c ":
        case "b74 4-c ":
        case "b744-c ":
        case "747 400-c ":
        case "747-400-c ":
        case "747400-c ":
        case "747 4-c ":
        case "747-4-c ":
        case "7474-c ":
        case "74 4-c ":
        case "74-4-c ":
        case "744-c ":
        case "b 747-400 c ":
        case "b 747 400 c ":
        case "b 747400 c ":
        case "b-747-400 c ":
        case "b-747 400 c ":
        case "b-747400 c ":
        case "b747-400 c ":
        case "b747 400 c ":
        case "b747400 c ":
        case "b 747-4 c ":
        case "b 747 4 c ":
        case "b 7474 c ":
        case "b-747-4 c ":
        case "b-747 4 c ":
        case "b-7474 c ":
        case "b747-4 c ":
        case "b747 4 c ":
        case "b7474 c ":
        case "b 74-4 c ":
        case "b 74 4 c ":
        case "b 744 c ": 
        case "b-74-4 c ":
        case "b-74 4 c ":
        case "b-744 c ":
        case "b74-4 c ":
        case "b74 4 c ":
        case "b744 c ":
        case "747 400 c ":
        case "747-400 c ":
        case "747400 c ":
        case "747 4 c ":
        case "747-4 c ":
        case "7474 c ":
        case "74 4 c ":
        case "74-4 c ":
        case "744 c ":
        case "id95":
        speed = 1010; cap = 410; rwy = 10250; mC = 10908438; range = 13360;
        fConsmp = 22.05; cConsmp = 0.26; mH = 370; price = 72722924;
        n = "B747-400C"; c = 5; pc = "748-8"
        break;

        case "b 787-1000":
        case "b 787 1000":
        case "b 7871000":
        case "b-787-1000":
        case "b-787 1000":
        case "b-7871000":
        case "b787-1000":
        case "b787 1000":
        case "b7871000":
        case "b 787-10":
        case "b 787 10":
        case "b 78710":
        case "b-787-10":
        case "b-787 10":
        case "b-78710":
        case "b787-10":
        case "b787 10":
        case "b78710":
        case "b 78-10":
        case "b 78 10":
        case "b 7810":
        case "b-78-10":
        case "b-78 10":
        case "b-7810":
        case "b78-10":
        case "b78 10":
        case "b7810":
        case "787 1000":
        case "787-1000":
        case "7871000":
        case "787 10":
        case "787-10":
        case "78710":
        case "78 10":
        case "78-10":
        case "7810":
        case "b 787-k":
        case "b 787 k":
        case "b 787k":
        case "b-787-k":
        case "b-787 k":
        case "b-787k":
        case "b787-k":
        case "b787 k":
        case "b787k":
        case "b 78-k":
        case "b 78 k":
        case "b 78k":
        case "b-78-k":
        case "b-78 k":
        case "b-78k":
        case "b78-k":
        case "b78 k":
        case "b78k":
        case "787 k":
        case "787-k":
        case "787k":
        case "78 k":
        case "78-k":
        case "78k":
        case "b 787-1000 ":
        case "b 787 1000 ":
        case "b 7871000 ":
        case "b-787-1000 ":
        case "b-787 1000 ":
        case "b-7871000 ":
        case "b787-1000 ":
        case "b787 1000 ":
        case "b7871000 ":
        case "b 787-10 ":
        case "b 787 10 ":
        case "b 78710 ":
        case "b-787-10 ":
        case "b-787 10 ":
        case "b-78710 ":
        case "b787-10 ":
        case "b787 10 ":
        case "b78710 ":
        case "b 78-10 ":
        case "b 78 10 ":
        case "b 7810 ":
        case "b-78-10 ":
        case "b-78 10 ":
        case "b-7810 ":
        case "b78-10 ":
        case "b78 10 ":
        case "b7810 ":
        case "787 1000 ":
        case "787-1000 ":
        case "7871000 ":
        case "787 10 ":
        case "787-10 ":
        case "78710 ":
        case "78 10 ":
        case "78-10 ":
        case "7810 ":
        case "b 787-k ":
        case "b 787 k ":
        case "b 787k ":
        case "b-787-k ":
        case "b-787 k ":
        case "b-787k ":
        case "b787-k ":
        case "b787 k ":
        case "b787k ":
        case "b 78-k ":
        case "b 78 k ":
        case "b 78k ":
        case "b-78-k ":
        case "b-78 k ":
        case "b-78k ":
        case "b78-k ":
        case "b78 k ":
        case "b78k ":
        case "787 k ":
        case "787-k ":
        case "787k ":
        case "78 k ":
        case "78-k ":
        case "78k ":
        case "id96":
        speed = 860; cap = 440; rwy = 8000; mC = 6915586; range = 12000;
        fConsmp = 18.05; cConsmp= 0.21; mH = 400; price = 72795638;
        n = "B787-10"; c = 5; pc = "787-10"
        break;

        case "b 777-800":
        case "b 777 800":
        case "b 777800":
        case "b-777-800":
        case "b-777 800":
        case "b-777800":
        case "b777-800":
        case "b777 800":
        case "b777800":
        case "b 777-8":
        case "b 777 8":
        case "b 7778":
        case "b-777-8":
        case "b-777 8":
        case "b-7778":
        case "b777-8":
        case "b777 8":
        case "b7778":
        case "b 77-8":
        case "b 77 8":
        case "b 778": 
        case "b-77-8":
        case "b-77 8":
        case "b-778":
        case "b77-8":
        case "b77 8":
        case "b778":
        case "777 800":
        case "777-800":
        case "777800":
        case "777 8":
        case "777-8":
        case "7778":
        case "77 8":
        case "77-8":
        case "778":
        case "b 777-800x":
        case "b 777 800x":
        case "b 777800x":
        case "b-777-800x":
        case "b-777 800x":
        case "b-777800x":
        case "b777-800x":
        case "b777 800x":
        case "b777800x":
        case "b 777-8x":
        case "b 777 8x":
        case "b 7778x":
        case "b-777-8x":
        case "b-777 8x":
        case "b-7778x":
        case "b777-8x":
        case "b777 8x":
        case "b7778x":
        case "b 77-8x":
        case "b 77 8x":
        case "b 778x":
        case "b-77-8x":
        case "b-77 8x":
        case "b-778x":
        case "b77-8x":
        case "b77 8x":
        case "b778x":
        case "777 800x":
        case "777-800x":
        case "777800x":
        case "777 8x":
        case "777-8x":
        case "7778x":
        case "77 8x":
        case "77-8x":
        case "778x":
        case "b 777-800-x":
        case "b 777 800-x":
        case "b 777800-x":
        case "b-777-800-x":
        case "b-777 800-x":
        case "b-777800-x":
        case "b777-800-x":
        case "b777 800-x":
        case "b777800-x":
        case "b 777-8-x":
        case "b 777 8-x":
        case "b 7778-x":
        case "b-777-8-x":
        case "b-777 8-x":
        case "b-7778-x":
        case "b777-8-x":
        case "b777 8-x":
        case "b7778-x":
        case "b 77-8-x":
        case "b 77 8-x":
        case "b 778-x":
        case "b-77-8-x":
        case "b-77 8-x":
        case "b-778-x":
        case "b77-8-x":
        case "b77 8-x":
        case "b778-x":
        case "777 800-x":
        case "777-800-x":
        case "777800-x":
        case "777 8-x":
        case "777-8-x":
        case "7778-x":
        case "77 8-x":
        case "77-8-x":
        case "778-x":
        case "b 777-800 x":
        case "b 777 800 x":
        case "b 777800 x":
        case "b-777-800 x":
        case "b-777 800 x":
        case "b-777800 x":
        case "b777-800 x":
        case "b777 800 x":
        case "b777800 x":
        case "b 777-8 x":
        case "b 777 8 x":
        case "b 7778 x":
        case "b-777-8 x":
        case "b-777 8 x":
        case "b-7778 x":
        case "b777-8 x":
        case "b777 8 x":
        case "b7778 x":
        case "b 77-8 x":
        case "b 77 8 x":
        case "b 778 x":
        case "b-77-8 x":
        case "b-77 8 x":
        case "b-778 x":
        case "b77-8 x":
        case "b77 8 x":
        case "b778 x":
        case "777 800 x":
        case "777-800 x":
        case "777800 x":
        case "777 8 x":
        case "777-8 x":
        case "7778 x":
        case "77 8 x":
        case "77-8 x":
        case "778 x":
        case "b 777-800 ":
        case "b 777 800 ":
        case "b 777800 ":
        case "b-777-800 ":
        case "b-777 800 ":
        case "b-777800 ":
        case "b777-800 ":
        case "b777 800 ":
        case "b777800 ":
        case "b 777-8 ":
        case "b 777 8 ":
        case "b 7778 ":
        case "b-777-8 ":
        case "b-777 8 ":
        case "b-7778 ":
        case "b777-8 ":
        case "b777 8 ":
        case "b7778 ":
        case "b 77-8 ":
        case "b 77 8 ":
        case "b 778" : 
        case "b-77-8 ":
        case "b-77 8 ":
        case "b-778 ":
        case "b77-8 ":
        case "b77 8 ":
        case "b778 ":
        case "777 800 ":
        case "777-800 ":
        case "777800 ":
        case "777 8 ":
        case "777-8 ":
        case "7778 ":
        case "77 8 ":
        case "77-8 ":
        case "778 ":
        case "b 777-800x ":
        case "b 777 800x ":
        case "b 777800x ":
        case "b-777-800x ":
        case "b-777 800x ":
        case "b-777800x ":
        case "b777-800x ":
        case "b777 800x ":
        case "b777800x ":
        case "b 777-8x ":
        case "b 777 8x ":
        case "b 7778x ":
        case "b-777-8x ":
        case "b-777 8x ":
        case "b-7778x ":
        case "b777-8x ":
        case "b777 8x ":
        case "b7778x ":
        case "b 77-8x ":
        case "b 77 8x ":
        case "b 778x" :
        case "b-77-8x ":
        case "b-77 8x ":
        case "b-778x ":
        case "b77-8x ":
        case "b77 8x ":
        case "b778x ":
        case "777 800x ":
        case "777-800x ":
        case "777800x ":
        case "777 8x ":
        case "777-8x ":
        case "7778x ":
        case "77 8x ":
        case "77-8x ":
        case "778x ":
        case "b 777-800-x ":
        case "b 777 800-x ":
        case "b 777800-x ":
        case "b-777-800-x ":
        case "b-777 800-x ":
        case "b-777800-x ":
        case "b777-800-x ":
        case "b777 800-x ":
        case "b777800-x ":
        case "b 777-8-x ":
        case "b 777 8-x ":
        case "b 7778-x ":
        case "b-777-8-x ":
        case "b-777 8-x ":
        case "b-7778-x ":
        case "b777-8-x ":
        case "b777 8-x ":
        case "b7778-x ":
        case "b 77-8-x ":
        case "b 77 8-x ":
        case "b 778-x ":
        case "b-77-8-x ":
        case "b-77 8-x ":
        case "b-778-x ":
        case "b77-8-x ":
        case "b77 8-x ":
        case "b778-x ":
        case "777 800-x ":
        case "777-800-x ":
        case "777800-x ":
        case "777 8-x ":
        case "777-8-x ":
        case "7778-x ":
        case "77 8-x ":
        case "77-8-x ":
        case "778-x ":
        case "b 777-800 x ":
        case "b 777 800 x ":
        case "b 777800 x ":
        case "b-777-800 x ":
        case "b-777 800 x ":
        case "b-777800 x ":
        case "b777-800 x ":
        case "b777 800 x ":
        case "b777800 x ":
        case "b 777-8 x ":
        case "b 777 8 x ":
        case "b 7778 x ":
        case "b-777-8 x ":
        case "b-777 8 x ":
        case "b-7778 x ":
        case "b777-8 x ":
        case "b777 8 x ":
        case "b7778 x ":
        case "b 77-8 x ":
        case "b 77 8 x ":
        case "b 778 x ":
        case "b-77-8 x ":
        case "b-77 8 x ":
        case "b-778 x ":
        case "b77-8 x ":
        case "b77 8 x ":
        case "b778 x ":
        case "777 800 x ":
        case "777-800 x ":
        case "777800 x ":
        case "777 8 x ":
        case "777-8 x ":
        case "7778 x ":
        case "77 8 x ":
        case "77-8 x ":
        case "778 x ":
        case "id97":
        speed = 951; cap = 350; rwy = 9000; mC = 3119336; range = 16100;
        fConsmp = 19.6; cConsmp = 0.25; mH = 500; price = 77083382;
        n = "B777-8X"; c = 5; pc = "b777-300"
        break;

        case "b 747-400d":
        case "b 747 400d":
        case "b 747400d":
        case "b-747-400d":
        case "b-747 400d":
        case "b-747400d":
        case "b747-400d":
        case "b747 400d":
        case "b747400d":
        case "b 747-4d":
        case "b 747 4d":
        case "b 7474d":
        case "b-747-4d":
        case "b-747 4d":
        case "b-7474d":
        case "b747-4d":
        case "b747 4d":
        case "b7474d":
        case "b 74-4d":
        case "b 74 4d":
        case "b 744d":
        case "b-74-4d":
        case "b-74 4d":
        case "b-744d":
        case "b74-4d":
        case "b74 4d":
        case "b744d":
        case "747 400d":
        case "747-400d":
        case "747400d":
        case "747 4d":
        case "747-4d":
        case "7474d":
        case "74 4d":
        case "74-4d":
        case "744d":
        case "b 747-400-d":
        case "b 747 400-d":
        case "b 747400-d":
        case "b-747-400-d":
        case "b-747 400-d":
        case "b-747400-d":
        case "b747-400-d":
        case "b747 400-d":
        case "b747400-d":
        case "b 747-4-d":
        case "b 747 4-d":
        case "b 7474-d":
        case "b-747-4-d":
        case "b-747 4-d":
        case "b-7474-d":
        case "b747-4-d":
        case "b747 4-d":
        case "b7474-d":
        case "b 74-4-d":
        case "b 74 4-d":
        case "b 744-d": 
        case "b-74-4-d":
        case "b-74 4-d":
        case "b-744-d":
        case "b74-4-d":
        case "b74 4-d":
        case "b744-d":
        case "747 400-d":
        case "747-400-d":
        case "747400-d":
        case "747 4-d":
        case "747-4-d":
        case "7474-d":
        case "74 4-d":
        case "74-4-d":
        case "744-d":
        case "b 747-400 d":
        case "b 747 400 d":
        case "b 747400 d":
        case "b-747-400 d":
        case "b-747 400 d":
        case "b-747400 d":
        case "b747-400 d":
        case "b747 400 d":
        case "b747400 d":
        case "b 747-4 d":
        case "b 747 4 d":
        case "b 7474 d":
        case "b-747-4 d":
        case "b-747 4 d":
        case "b-7474 d":
        case "b747-4 d":
        case "b747 4 d":
        case "b7474 d":
        case "b 74-4 d":
        case "b 74 4 d":
        case "b 744 d": 
        case "b-74-4 d":
        case "b-74 4 d":
        case "b-744 d":
        case "b74-4 d":
        case "b74 4 d":
        case "b744 d":
        case "747 400 d":
        case "747-400 d":
        case "747400 d":
        case "747 4 d":
        case "747-4 d":
        case "7474 d":
        case "74 4 d":
        case "74-4 d":
        case "744 d":
        case "b 747-400d ":
        case "b 747 400d ":
        case "b 747400d ":
        case "b-747-400d ":
        case "b-747 400d ":
        case "b-747400d ":
        case "b747-400d ":
        case "b747 400d ":
        case "b747400d ":
        case "b 747-4d ":
        case "b 747 4d ":
        case "b 7474d ":
        case "b-747-4d ":
        case "b-747 4d ":
        case "b-7474d ":
        case "b747-4d ":
        case "b747 4d ":
        case "b7474d ":
        case "b 74-4d ":
        case "b 74 4d ":
        case "b 744d ":
        case "b-74-4d ":
        case "b-74 4d ":
        case "b-744d ":
        case "b74-4d ":
        case "b74 4d ":
        case "b744d ":
        case "747 400d ":
        case "747-400d ":
        case "747400d ":
        case "747 4d ":
        case "747-4d ":
        case "7474d ":
        case "74 4d ":
        case "74-4d ":
        case "744d ":
        case "b 747-400-d ":
        case "b 747 400-d ":
        case "b 747400-d ":
        case "b-747-400-d ":
        case "b-747 400-d ":
        case "b-747400-d ":
        case "b747-400-d ":
        case "b747 400-d ":
        case "b747400-d ":
        case "b 747-4-d ":
        case "b 747 4-d ":
        case "b 7474-d ":
        case "b-747-4-d ":
        case "b-747 4-d ":
        case "b-7474-d ":
        case "b747-4-d ":
        case "b747 4-d ":
        case "b7474-d ":
        case "b 74-4-d ":
        case "b 74 4-d ":
        case "b 744-d ":
        case "b-74-4-d ":
        case "b-74 4-d ":
        case "b-744-d ":
        case "b74-4-d ":
        case "b74 4-d ":
        case "b744-d ":
        case "747 400-d ":
        case "747-400-d ":
        case "747400-d ":
        case "747 4-d ":
        case "747-4-d ":
        case "7474-d ":
        case "74 4-d ":
        case "74-4-d ":
        case "744-d ":
        case "b 747-400 d ":
        case "b 747 400 d ":
        case "b 747400 d ":
        case "b-747-400 d ":
        case "b-747 400 d ":
        case "b-747400 d ":
        case "b747-400 d ":
        case "b747 400 d ":
        case "b747400 d ":
        case "b 747-4 d ":
        case "b 747 4 d ":
        case "b 7474 d ":
        case "b-747-4 d ":
        case "b-747 4 d ":
        case "b-7474 d ":
        case "b747-4 d ":
        case "b747 4 d ":
        case "b7474 d ":
        case "b 74-4 d ":
        case "b 74 4 d ":
        case "b 744 d ":
        case "b-74-4 d ":
        case "b-74 4 d ":
        case "b-744 d ":
        case "b74-4 d ":
        case "b74 4 d ":
        case "b744 d ":
        case "747 400 d ":
        case "747-400 d ":
        case "747400 d ":
        case "747 4 d ":
        case "747-4 d ":
        case "7474 d ":
        case "74 4 d ":
        case "74-4 d ":
        case "744 d ":
        case "id98":
        speed = 1010; cap = 568; rwy = 10250; mC = 11217520; range = 2905;
        fConsmp = 23.98; cConsmp  = 0.28; mH = 500; price = 80125136;
        n = "B747-400D"; c = 5; pc = "747-8"
        break;

        case "b 777-200er":
        case "b 777 200er":
        case "b 777200er":
        case "b-777-200er":
        case "b-777 200er":
        case "b-777200er":
        case "b777-200er":
        case "b777 200er":
        case "b777200er":
        case "b 777-2er":
        case "b 777 2er":
        case "b 7772er":
        case "b-777-2er":
        case "b-777 2er":
        case "b-7772er":
        case "b777-2er":
        case "b777 2er":
        case "b7772er":
        case "b 77-2er":
        case "b 77 2er":
        case "b 772er":
        case "b-77-2er":
        case "b-77 2er":
        case "b-772er":
        case "b77-2er":
        case "b77 2er":
        case "b772er":
        case "777 200er":
        case "777-200er":
        case "777200er":
        case "777 2er":
        case "777-2er":
        case "7772er":
        case "77 2er":
        case "77-2er":
        case "772er":
        case "b 777-200-er":
        case "b 777 200-er":
        case "b 777200-er":
        case "b-777-200-er":
        case "b-777 200-er":
        case "b-777200-er":
        case "b777-200-er":
        case "b777 200-er":
        case "b777200-er":
        case "b 777-2-er":
        case "b 777 2-er":
        case "b 7772-er":
        case "b-777-2-er":
        case "b-777 2-er":
        case "b-7772-er":
        case "b777-2-er":
        case "b777 2-er":
        case "b7772-er":
        case "b 77-2-er":
        case "b 77 2-er":
        case "b 772-er":
        case "b-77-2-er":
        case "b-77 2-er":
        case "b-772-er":
        case "b77-2-er":
        case "b77 2-er":
        case "b772-er":
        case "777 200-er":
        case "777-200-er":
        case "777200-er":
        case "777 2-er":
        case "777-2-er":
        case "7772-er":
        case "77 2-er":
        case "77-2-er":
        case "772-er":
        case "b 777-200 er":
        case "b 777 200 er":
        case "b 777200 er":
        case "b-777-200 er":
        case "b-777 200 er":
        case "b-777200 er":
        case "b777-200 er":
        case "b777 200 er":
        case "b777200 er":
        case "b 777-2 er":
        case "b 777 2 er":
        case "b 7772 er":
        case "b-777-2 er":
        case "b-777 2 er":
        case "b-7772 er":
        case "b777-2 er":
        case "b777 2 er":
        case "b7772 er":
        case "b 77-2 er":
        case "b 77 2 er":
        case "b 772 er":
        case "b-77-2 er":
        case "b-77 2 er":
        case "b-772 er":
        case "b77-2 er":
        case "b77 2 er":
        case "b772 er":
        case "777 200 er":
        case "777-200 er":
        case "777200 er":
        case "777 2 er":
        case "777-2 er":
        case "7772 er":
        case "77 2 er":
        case "77-2 er":
        case "772 er":
        case "b 777-200er ":
        case "b 777 200er ":
        case "b 777200er ":
        case "b-777-200er ":
        case "b-777 200er ":
        case "b-777200er ":
        case "b777-200er ":
        case "b777 200er ":
        case "b777200er ":
        case "b 777-2er ":
        case "b 777 2er ":
        case "b 7772er ":
        case "b-777-2er ":
        case "b-777 2er ":
        case "b-7772er ":
        case "b777-2er ":
        case "b777 2er ":
        case "b7772er ":
        case "b 77-2er ":
        case "b 77 2er ":
        case "b 772er ":
        case "b-77-2er ":
        case "b-77 2er ":
        case "b-772er ":
        case "b77-2er ":
        case "b77 2er ":
        case "b772er ":
        case "777 200er ":
        case "777-200er ":
        case "777200er ":
        case "777 2er ":
        case "777-2er ":
        case "7772er ":
        case "77 2er ":
        case "77-2er ":
        case "772er ":
        case "b 777-200-er ":
        case "b 777 200-er ":
        case "b 777200-er ":
        case "b-777-200-er ":
        case "b-777 200-er ":
        case "b-777200-er ":
        case "b777-200-er ":
        case "b777 200-er ":
        case "b777200-er ":
        case "b 777-2-er ":
        case "b 777 2-er ":
        case "b 7772-er ":
        case "b-777-2-er ":
        case "b-777 2-er ":
        case "b-7772-er ":
        case "b777-2-er ":
        case "b777 2-er ":
        case "b7772-er ":
        case "b 77-2-er ":
        case "b 77 2-er ":
        case "b 772-er ":
        case "b-77-2-er ":
        case "b-77 2-er ":
        case "b-772-er ":
        case "b77-2-er ":
        case "b77 2-er ":
        case "b772-er ":
        case "777 200-er ":
        case "777-200-er ":
        case "777200-er ":
        case "777 2-er ":
        case "777-2-er ":
        case "7772-er ":
        case "77 2-er ":
        case "77-2-er ":
        case "772-er ":
        case "b 777-200 er ":
        case "b 777 200 er ":
        case "b 777200 er ":
        case "b-777-200 er ":
        case "b-777 200 er ":
        case "b-777200 er ":
        case "b777-200 er ":
        case "b777 200 er ":
        case "b777200 er ":
        case "b 777-2 er ":
        case "b 777 2 er ":
        case "b 7772 er ":
        case "b-777-2 er ":
        case "b-777 2 er ":
        case "b-7772 er ":
        case "b777-2 er ":
        case "b777 2 er ":
        case "b7772 er ":
        case "b 77-2 er ":
        case "b 77 2 er ":
        case "b 772 er ":
        case "b-77-2 er ":
        case "b-77 2 er ":
        case "b-772 er ":
        case "b77-2 er ":
        case "b77 2 er ":
        case "b772 er ":
        case "777 200 er ":
        case "777-200 er ":
        case "777200 er ":
        case "777 2 er ":
        case "777-2 er ":
        case "7772 er ":
        case "77 2 er ":
        case "77-2 er ":
        case "772 er ":
        case "id99":
        speed = 1014; cap = 400; rwy = 11000; mC = 9259022; range = 14260;
        fConsmp = 19.19; cConsmp = 0.24; mH = 480; price = 84172921;
        n = "B777-200ER"; c = 5; pc = "b777-200lr"
        break;

        case "b 777-300":
        case "b 777 300":
        case "b 777300":
        case "b-777-300":
        case "b-777 300":
        case "b-777300":
        case "b777-300":
        case "b777 300":
        case "b777300":
        case "b 777-3":
        case "b 777 3":
        case "b 7773":
        case "b-777-3":
        case "b-777 3":
        case "b-7773":
        case "b777-3":
        case "b777 3":
        case "b7773":
        case "b 77-3":
        case "b 77 3":
        case "b 773":
        case "b-77-3":
        case "b-77 3":
        case "b-773":
        case "b77-3":
        case "b77 3":
        case "b773":
        case "777 300":
        case "777-300":
        case "777300":
        case "777 3":
        case "777-3":
        case "7773":
        case "77 3":
        case "77-3":
        case "773":
        case "b 777-300 ":
        case "b 777 300 ":
        case "b 777300 ":
        case "b-777-300 ":
        case "b-777 300 ":
        case "b-777300 ":
        case "b777-300 ":
        case "b777 300 ":
        case "b777300 ":
        case "b 777-3 ":
        case "b 777 3 ":
        case "b 7773 ":
        case "b-777-3 ":
        case "b-777 3 ":
        case "b-7773 ":
        case "b777-3 ":
        case "b777 3 ":
        case "b7773 ":
        case "b 77-3 ":
        case "b 77 3 ":
        case "b 773 ":
        case "b-77-3 ":
        case "b-77 3 ":
        case "b-773 ":
        case "b77-3 ":
        case "b77 3 ":
        case "b773 ":
        case "777 300 ":
        case "777-300 ":
        case "777300 ":
        case "777 3 ":
        case "777-3 ":
        case "7773 ":
        case "77 3 ":
        case "77-3 ":
        case "773 ":
        case "id100":
        speed = 878; cap = 451; rwy = 9000; mC = 9898588; range = 11135;
        fConsmp = 17.67; cConsmp = 0.24; mH = 450; price = 89987157;
        n = "B777-300"; c = 5; pc = "b777-300"
        break;

        case "b 777-900":
        case "b 777 900":
        case "b 777900":
        case "b-777-900":
        case "b-777 900":
        case "b-777900":
        case "b777-900":
        case "b777 900":
        case "b777900":
        case "b 777-9":
        case "b 777 9":
        case "b 7779":
        case "b-777-9":
        case "b-777 9":
        case "b-7779":
        case "b777-9":
        case "b777 9":
        case "b7779":
        case "b 77-9":
        case "b 77 9":
        case "b 779": 
        case "b-77-9":
        case "b-77 9":
        case "b-779":
        case "b77-9":
        case "b77 9":
        case "b779":
        case "777 900":
        case "777-900":
        case "777900":
        case "777 9":
        case "777-9":
        case "7779":
        case "77 9":
        case "77-9":
        case "779":
        case "b 777-900x":
        case "b 777 900x":
        case "b 777900x":
        case "b-777-900x":
        case "b-777 900x":
        case "b-777900x":
        case "b777-900x":
        case "b777 900x":
        case "b777900x":
        case "b 777-9x":
        case "b 777 9x":
        case "b 7779x":
        case "b-777-9x":
        case "b-777 9x":
        case "b-7779x":
        case "b777-9x":
        case "b777 9x":
        case "b7779x":
        case "b 77-9x":
        case "b 77 9x":
        case "b 779x":
        case "b-77-9x":
        case "b-77 9x":
        case "b-779x":
        case "b77-9x":
        case "b77 9x":
        case "b779x":
        case "777 900x":
        case "777-900x":
        case "777900x":
        case "777 9x":
        case "777-9x":
        case "7779x":
        case "77 9x":
        case "77-9x":
        case "779x":
        case "b 777-900-x":
        case "b 777 900-x":
        case "b 777900-x":
        case "b-777-900-x":
        case "b-777 900-x":
        case "b-777900-x":
        case "b777-900-x":
        case "b777 900-x":
        case "b777900-x":
        case "b 777-9-x":
        case "b 777 9-x":
        case "b 7779-x":
        case "b-777-9-x":
        case "b-777 9-x":
        case "b-7779-x":
        case "b777-9-x":
        case "b777 9-x":
        case "b7779-x":
        case "b 77-9-x":
        case "b 77 9-x":
        case "b 779-x":
        case "b-77-9-x":
        case "b-77 9-x":
        case "b-779-x":
        case "b77-9-x":
        case "b77 9-x":
        case "b779-x":
        case "777 900-x":
        case "777-900-x":
        case "777900-x":
        case "777 9-x":
        case "777-9-x":
        case "7779-x":
        case "77 9-x":
        case "77-9-x":
        case "779-x":
        case "b 777-900 x":
        case "b 777 900 x":
        case "b 777900 x":
        case "b-777-900 x":
        case "b-777 900 x":
        case "b-777900 x":
        case "b777-900 x":
        case "b777 900 x":
        case "b777900 x":
        case "b 777-9 x":
        case "b 777 9 x":
        case "b 7779 x":
        case "b-777-9 x":
        case "b-777 9 x":
        case "b-7779 x":
        case "b777-9 x":
        case "b777 9 x":
        case "b7779 x":
        case "b 77-9 x":
        case "b 77 9 x":
        case "b 779 x":
        case "b-77-9 x":
        case "b-77 9 x":
        case "b-779 x":
        case "b77-9 x":
        case "b77 9 x":
        case "b779 x":
        case "777 900 x":
        case "777-900 x":
        case "777900 x":
        case "777 9 x":
        case "777-9 x":
        case "7779 x":
        case "77 9 x":
        case "77-9 x":
        case "779 x":
        case "b 777-900 ":
        case "b 777 900 ":
        case "b 777900 ":
        case "b-777-900 ":
        case "b-777 900 ":
        case "b-777900 ":
        case "b777-900 ":
        case "b777 900 ":
        case "b777900 ":
        case "b 777-9 ":
        case "b 777 9 ":
        case "b 7779 ":
        case "b-777-9 ":
        case "b-777 9 ":
        case "b-7779 ":
        case "b777-9 ":
        case "b777 9 ":
        case "b7779 ":
        case "b 77-9 ":
        case "b 77 9 ":
        case "b 779 ":
        case "b-77-9 ":
        case "b-77 9 ":
        case "b-779 ":
        case "b77-9 ":
        case "b77 9 ":
        case "b779 ":
        case "777 900 ":
        case "777-900 ":
        case "777900 ":
        case "777 9 ":
        case "777-9 ":
        case "7779 ":
        case "77 9 ":
        case "77-9 ":
        case "779 ":
        case "b 777-900x ":
        case "b 777 900x ":
        case "b 777900x ":
        case "b-777-900x ":
        case "b-777 900x ":
        case "b-777900x ":
        case "b777-900x ":
        case "b777 900x ":
        case "b777900x ":
        case "b 777-9x ":
        case "b 777 9x ":
        case "b 7779x ":
        case "b-777-9x ":
        case "b-777 9x ":
        case "b-7779x ":
        case "b777-9x ":
        case "b777 9x ":
        case "b7779x ":
        case "b 77-9x ":
        case "b 77 9x ":
        case "b 779x ":
        case "b-77-9x ":
        case "b-77 9x ":
        case "b-779x ":
        case "b77-9x ":
        case "b77 9x ":
        case "b779x ":
        case "777 900x ":
        case "777-900x ":
        case "777900x ":
        case "777 9x ":
        case "777-9x ":
        case "7779x ":
        case "77 9x ":
        case "77-9x ":
        case "779x ":
        case "b 777-900-x ":
        case "b 777 900-x ":
        case "b 777900-x ":
        case "b-777-900-x ":
        case "b-777 900-x ":
        case "b-777900-x ":
        case "b777-900-x ":
        case "b777 900-x ":
        case "b777900-x ":
        case "b 777-9-x ":
        case "b 777 9-x ":
        case "b 7779-x ":
        case "b-777-9-x ":
        case "b-777 9-x ":
        case "b-7779-x ":
        case "b777-9-x ":
        case "b777 9-x ":
        case "b7779-x ":
        case "b 77-9-x ":
        case "b 77 9-x ":
        case "b 779-x ":
        case "b-77-9-x ":
        case "b-77 9-x ":
        case "b-779-x ":
        case "b77-9-x ":
        case "b77 9-x ":
        case "b779-x ":
        case "777 900-x ":
        case "777-900-x ":
        case "777900-x ":
        case "777 9-x ":
        case "777-9-x ":
        case "7779-x ":
        case "77 9-x ":
        case "77-9-x ":
        case "779-x ":
        case "b 777-900 x ":
        case "b 777 900 x ":
        case "b 777900 x ":
        case "b-777-900 x ":
        case "b-777 900 x ":
        case "b-777900 x ":
        case "b777-900 x ":
        case "b777 900 x ":
        case "b777900 x ":
        case "b 777-9 x ":
        case "b 777 9 x ":
        case "b 7779 x ":
        case "b-777-9 x ":
        case "b-777 9 x ":
        case "b-7779 x ":
        case "b777-9 x ":
        case "b777 9 x ":
        case "b7779 x ":
        case "b 77-9 x ":
        case "b 77 9 x ":
        case "b 779 x ":
        case "b-77-9 x ":
        case "b-77 9 x ":
        case "b-779 x ":
        case "b77-9 x ":
        case "b77 9 x ":
        case "b779 x ":
        case "777 900 x ":
        case "777-900 x ":
        case "777900 x ":
        case "777 9 x ":
        case "777-9 x ":
        case "7779 x ":
        case "77 9 x ":
        case "77-9 x ":
        case "779 x ":
        case "id101":
        speed = 931; cap = 406; rwy = 9000; mC = 3646040; range = 14500;
        fConsmp = 21.56; cConsmp = 0.28; mH = 540; price = 91150989;
        n = "B777-9X"; c = 5; pc = "b777-300"
        break;

        case "b 747-400":
        case "b 747 400":
        case "b 747400":
        case "b-747-400":
        case "b-747 400":
        case "b-747400":
        case "b747-400":
        case "b747 400":
        case "b747400":
        case "b 747-4":
        case "b 747 4":
        case "b 7474":
        case "b-747-4":
        case "b-747 4":
        case "b-7474":
        case "b747-4":
        case "b747 4":
        case "b7474":
        case "b 74-4":
        case "b 74 4":
        case "b 744":
        case "b-74-4":
        case "b-74 4":
        case "b-744":
        case "b74-4":
        case "b74 4":
        case "b744":
        case "747 400":
        case "747-400":
        case "747400":
        case "747 4":
        case "747-4":
        case "7474":
        case "74 4":
        case "74-4":
        case "744":
        case "b 747-400 ":
        case "b 747 400 ":
        case "b 747400 ":
        case "b-747-400 ":
        case "b-747 400 ":
        case "b-747400 ":
        case "b747-400 ":
        case "b747 400 ":
        case "b747400 ":
        case "b 747-4 ":
        case "b 747 4 ":
        case "b 7474 ":
        case "b-747-4 ":
        case "b-747 4 ":
        case "b-7474 ":
        case "b747-4 ":
        case "b747 4 ":
        case "b7474 ":
        case "b 74-4 ":
        case "b 74 4 ":
        case "b 744 ":
        case "b-74-4 ":
        case "b-74 4 ":
        case "b-744 ":
        case "b74-4 ":
        case "b74 4 ":
        case "b744 ":
        case "747 400 ":
        case "747-400 ":
        case "747400 ":
        case "747 4 ":
        case "747-4 ":
        case "7474 ":
        case "74 4 ":
        case "74-4 ":
        case "744 ":
        case "id102":
        speed = 982; cap = 416; rwy = 10250; mC = 14281210; range = 14500;
        fConsmp = 22.89; cConsmp = 0.18; mH = 330; price = 92136845;
        n = "B747-400"; c = 5; pc = "747-8"
        break;

        case "b 747-400er":
        case "b 747 400er":
        case "b 747400er":
        case "b-747-400er":
        case "b-747 400er":
        case "b-747400er":
        case "b747-400er":
        case "b747 400er":
        case "b747400er":
        case "b 747-4er":
        case "b 747 4er":
        case "b 7474er":
        case "b-747-4er":
        case "b-747 4er":
        case "b-7474er":
        case "b747-4er":
        case "b747 4er":
        case "b7474er":
        case "b 74-4er":
        case "b 74 4er":
        case "b 744er":
        case "b-74-4er":
        case "b-74 4er":
        case "b-744er":
        case "b74-4er":
        case "b74 4er":
        case "b744er":
        case "747 400er":
        case "747-400er":
        case "747400er":
        case "747 4er":
        case "747-4er":
        case "7474er":
        case "74 4er":
        case "74-4er":
        case "744er":
        case "b 747-400-er":
        case "b 747 400-er":
        case "b 747400-er":
        case "b-747-400-er":
        case "b-747 400-er":
        case "b-747400-er":
        case "b747-400-er":
        case "b747 400-er":
        case "b747400-er":
        case "b 747-4-er":
        case "b 747 4-er":
        case "b 7474-er":
        case "b-747-4-er":
        case "b-747 4-er":
        case "b-7474-er":
        case "b747-4-er":
        case "b747 4-er":
        case "b7474-er":
        case "b 74-4-er":
        case "b 74 4-er":
        case "b 744-er": 
        case "b-74-4-er":
        case "b-74 4-er":
        case "b-744-er":
        case "b74-4-er":
        case "b74 4-er":
        case "b744-er":
        case "747 400-er":
        case "747-400-er":
        case "747400-er":
        case "747 4-er":
        case "747-4-er":
        case "7474-er":
        case "74 4-er":
        case "74-4-er":
        case "744-er":
        case "b 747-400 er":
        case "b 747 400 er":
        case "b 747400 er":
        case "b-747-400 er":
        case "b-747 400 er":
        case "b-747400 er":
        case "b747-400 er":
        case "b747 400 er":
        case "b747400 er":
        case "b 747-4 er":
        case "b 747 4 er":
        case "b 7474 er":
        case "b-747-4 er":
        case "b-747 4 er":
        case "b-7474 er":
        case "b747-4 er":
        case "b747 4 er":
        case "b7474 er":
        case "b 74-4 er":
        case "b 74 4 er":
        case "b 744 er":
        case "b-74-4 er":
        case "b-74 4 er":
        case "b-744 er":
        case "b74-4 er":
        case "b74 4 er":
        case "b744 er":
        case "747 400 er":
        case "747-400 er":
        case "747400 er":
        case "747 4 er":
        case "747-4 er":
        case "7474 er":
        case "74 4 er":
        case "74-4 er":
        case "744 er":
        case "b 747-400er ":
        case "b 747 400er ":
        case "b 747400er ":
        case "b-747-400er ":
        case "b-747 400er ":
        case "b-747400er ":
        case "b747-400er ":
        case "b747 400er ":
        case "b747400er ":
        case "b 747-4er ":
        case "b 747 4er ":
        case "b 7474er ":
        case "b-747-4er ":
        case "b-747 4er ":
        case "b-7474er ":
        case "b747-4er ":
        case "b747 4er ":
        case "b7474er ":
        case "b 74-4er ":
        case "b 74 4er ":
        case "b 744er ":
        case "b-74-4er ":
        case "b-74 4er ":
        case "b-744er ":
        case "b74-4er ":
        case "b74 4er ":
        case "b744er ":
        case "747 400er ":
        case "747-400er ":
        case "747400er ":
        case "747 4er ":
        case "747-4er ":
        case "7474er ":
        case "74 4er ":
        case "74-4er ":
        case "744er ":
        case "b 747-400-er ":
        case "b 747 400-er ":
        case "b 747400-er ":
        case "b-747-400-er ":
        case "b-747 400-er ":
        case "b-747400-er ":
        case "b747-400-er ":
        case "b747 400-er ":
        case "b747400-er ":
        case "b 747-4-er ":
        case "b 747 4-er ":
        case "b 7474-er ":
        case "b-747-4-er ":
        case "b-747 4-er ":
        case "b-7474-er ":
        case "b747-4-er ":
        case "b747 4-er ":
        case "b7474-er ":
        case "b 74-4-er ":
        case "b 74 4-er ":
        case "b 744-er ":
        case "b-74-4-er ":
        case "b-74 4-er ":
        case "b-744-er ":
        case "b74-4-er ":
        case "b74 4-er ":
        case "b744-er ":
        case "747 400-er ":
        case "747-400-er ":
        case "747400-er ":
        case "747 4-er ":
        case "747-4-er ":
        case "7474-er ":
        case "74 4-er ":
        case "74-4-er ":
        case "744-er ":
        case "b 747-400 er ":
        case "b 747 400 er ":
        case "b 747400 er ":
        case "b-747-400 er ":
        case "b-747 400 er ":
        case "b-747400 er ":
        case "b747-400 er ":
        case "b747 400 er ":
        case "b747400 er ":
        case "b 747-4 er ":
        case "b 747 4 er ":
        case "b 7474 er ":
        case "b-747-4 er ":
        case "b-747 4 er ":
        case "b-7474 er ":
        case "b747-4 er ":
        case "b747 4 er ":
        case "b7474 er ":
        case "b 74-4 er ":
        case "b 74 4 er ":
        case "b 744 er" : 
        case "b-74-4 er ":
        case "b-74 4 er ":
        case "b-744 er ":
        case "b74-4 er ":
        case "b74 4 er ":
        case "b744 er ":
        case "747 400 er ":
        case "747-400 er ":
        case "747400 er ":
        case "747 4 er ":
        case "747-4 er ":
        case "7474 er ":
        case "74 4 er ":
        case "74-4 er ":
        case "744 er ":
        case "id103 ":
        speed = 866; cap = 416; rwy = 10250; mC = 8292316; range = 14500;
        fConsmp = 20.16; cConsmp = 0.26; mH = 450; price = 97556659;
        n = "B747-400ER"; c = 5; pc = "747-8"
        break;

        case "b 747-800":
        case "b 747 800":
        case "b 747800":
        case "b-747-800":
        case "b-747 800":
        case "b-747800":
        case "b747-800":
        case "b747 800":
        case "b747800":
        case "b 747-8":
        case "b 747 8":
        case "b 7478":
        case "b-747-8":
        case "b-747 8":
        case "b-7478":
        case "b747-8":
        case "b747 8":
        case "b7478":
        case "b 74-8":
        case "b 74 8":
        case "b 748":
        case "b-74-8":
        case "b-74 8":
        case "b-748":
        case "b74-8":
        case "b74 8":
        case "b748":
        case "747 800":
        case "747-800":
        case "747800":
        case "747 8":
        case "747-8":
        case "7478":
        case "74 8":
        case "74-8":
        case "748":
        case "b 747-800 ":
        case "b 747 800 ":
        case "b 747800 ":
        case "b-747-800 ":
        case "b-747 800 ":
        case "b-747800 ":
        case "b747-800 ":
        case "b747 800 ":
        case "b747800 ":
        case "b 747-8 ":
        case "b 747 8 ":
        case "b 7478 ":
        case "b-747-8 ":
        case "b-747 8 ":
        case "b-7478 ":
        case "b747-8 ":
        case "b747 8 ":
        case "b7478 ":
        case "b 74-8 ":
        case "b 74 8 ":
        case "b 748 ":
        case "b-74-8 ":
        case "b-74 8 ":
        case "b-748 ":
        case "b74-8 ":
        case "b74 8 ":
        case "b748 ":
        case "747 800 ":
        case "747-800 ":
        case "747800 ":
        case "747 8 ":
        case "747-8 ":
        case "7478 ":
        case "74 8 ":
        case "74-8 ":
        case "748 ":
        case "jumbo":
        case "jumbo ":
        case "id104":
        speed = 1097; cap = 467; rwy = 10250; mC = 8476840; range = 14815;
        fConsmp = 21.84; cConsmp = 0.26; mH = 500; price = 121097727;
        n = "B747-8"; c = 5; pc = "747-8"
        break;

        case "b 777-300lr":
        case "b 777 300lr":
        case "b 777300lr":
        case "b-777-300lr":
        case "b-777 300lr":
        case "b-777300lr":
        case "b777-300lr":
        case "b777 300lr":
        case "b777300lr":
        case "b 777-3lr":
        case "b 777 3lr":
        case "b 7773lr":
        case "b-777-3lr":
        case "b-777 3lr":
        case "b-7773lr":
        case "b777-3lr":
        case "b777 3lr":
        case "b7773lr":
        case "b 77-3lr":
        case "b 77 3lr":
        case "b 773lr":
        case "b-77-3lr":
        case "b-77 3lr":
        case "b-773lr":
        case "b77-3lr":
        case "b77 3lr":
        case "b773lr":
        case "777 300lr":
        case "777-300lr":
        case "777300lr":
        case "777 3lr":
        case "777-3lr":
        case "7773lr":
        case "77 3lr":
        case "77-3lr":
        case "773lr":
        case "b 777-300-lr":
        case "b 777 300-lr":
        case "b 777300-lr":
        case "b-777-300-lr":
        case "b-777 300-lr":
        case "b-777300-lr":
        case "b777-300-lr":
        case "b777 300-lr":
        case "b777300-lr":
        case "b 777-3-lr":
        case "b 777 3-lr":
        case "b 7773-lr":
        case "b-777-3-lr":
        case "b-777 3-lr":
        case "b-7773-lr":
        case "b777-3-lr":
        case "b777 3-lr":
        case "b7773-lr":
        case "b 77-3-lr":
        case "b 77 3-lr":
        case "b 773-lr":
        case "b-77-3-lr":
        case "b-77 3-lr":
        case "b-773-lr":
        case "b77-3-lr":
        case "b77 3-lr":
        case "b773-lr":
        case "777 300-lr":
        case "777-300-lr":
        case "777300-lr":
        case "777 3-lr":
        case "777-3-lr":
        case "7773-lr":
        case "77 3-lr":
        case "77-3-lr":
        case "773-lr":
        case "b 777-300 lr":
        case "b 777 300 lr":
        case "b 777300 lr":
        case "b-777-300 lr":
        case "b-777 300 lr":
        case "b-777300 lr":
        case "b777-300 lr":
        case "b777 300 lr":
        case "b777300 lr":
        case "b 777-3 lr":
        case "b 777 3 lr":
        case "b 7773 lr":
        case "b-777-3 lr":
        case "b-777 3 lr":
        case "b-7773 lr":
        case "b777-3 lr":
        case "b777 3 lr":
        case "b7773 lr":
        case "b 77-3 lr":
        case "b 77 3 lr":
        case "b 773 lr":
        case "b-77-3 lr":
        case "b-77 3 lr":
        case "b-773 lr":
        case "b77-3 lr":
        case "b77 3 lr":
        case "b773 lr":
        case "777 300 lr":
        case "777-300 lr":
        case "777300 lr":
        case "777 3 lr":
        case "777-3 lr":
        case "7773 lr":
        case "77 3 lr":
        case "77-3 lr":
        case "773 lr":
        case "b 777-300lr ":
        case "b 777 300lr ":
        case "b 777300lr ":
        case "b-777-300lr ":
        case "b-777 300lr ":
        case "b-777300lr ":
        case "b777-300lr ":
        case "b777 300lr ":
        case "b777300lr ":
        case "b 777-3lr ":
        case "b 777 3lr ":
        case "b 7773lr ":
        case "b-777-3lr ":
        case "b-777 3lr ":
        case "b-7773lr ":
        case "b777-3lr ":
        case "b777 3lr ":
        case "b7773lr ":
        case "b 77-3lr ":
        case "b 77 3lr ":
        case "b 773lr ":
        case "b-77-3lr ":
        case "b-77 3lr ":
        case "b-773lr ":
        case "b77-3lr ":
        case "b77 3lr ":
        case "b773lr ":
        case "777 300lr ":
        case "777-300lr ":
        case "777300lr ":
        case "777 3lr ":
        case "777-3lr ":
        case "7773lr ":
        case "77 3lr ":
        case "77-3lr ":
        case "773lr ":
        case "b 777-300-lr ":
        case "b 777 300-lr ":
        case "b 777300-lr ":
        case "b-777-300-lr ":
        case "b-777 300-lr ":
        case "b-777300-lr ":
        case "b777-300-lr ":
        case "b777 300-lr ":
        case "b777300-lr ":
        case "b 777-3-lr ":
        case "b 777 3-lr ":
        case "b 7773-lr ":
        case "b-777-3-lr ":
        case "b-777 3-lr ":
        case "b-7773-lr ":
        case "b777-3-lr ":
        case "b777 3-lr ":
        case "b7773-lr ":
        case "b 77-3-lr ":
        case "b 77 3-lr ":
        case "b 773-lr ":
        case "b-77-3-lr ":
        case "b-77 3-lr ":
        case "b-773-lr ":
        case "b77-3-lr ":
        case "b77 3-lr ":
        case "b773-lr ":
        case "777 300-lr ":
        case "777-300-lr ":
        case "777300-lr ":
        case "777 3-lr ":
        case "777-3-lr ":
        case "7773-lr ":
        case "77 3-lr ":
        case "77-3-lr ":
        case "773-lr ":
        case "b 777-300 lr ":
        case "b 777 300 lr ":
        case "b 777300 lr ":
        case "b-777-300 lr ":
        case "b-777 300 lr ":
        case "b-777300 lr ":
        case "b777-300 lr ":
        case "b777 300 lr ":
        case "b777300 lr ":
        case "b 777-3 lr ":
        case "b 777 3 lr ":
        case "b 7773 lr ":
        case "b-777-3 lr ":
        case "b-777 3 lr ":
        case "b-7773 lr ":
        case "b777-3 lr ":
        case "b777 3 lr ":
        case "b7773 lr ":
        case "b 77-3 lr ":
        case "b 77 3 lr ":
        case "b 773 lr ":
        case "b-77-3 lr ":
        case "b-77 3 lr ":
        case "b-773 lr ":
        case "b77-3 lr ":
        case "b77 3 lr ":
        case "b773 lr ":
        case "777 300 lr ":
        case "777-300 lr ":
        case "777300 lr ":
        case "777 3 lr ":
        case "777-3 lr ":
        case "7773 lr ":
        case "77 3 lr ":
        case "77-3 lr ":
        case "773 lr ":
        case "id105":
        speed = 1036; cap = 451; rwy = 11000; mC = 10547522; range = 14500;
        fConsmp = 21.63; cConsmp = 0.26; mH = 460; price = 131844032;
        n = "B777-300LR"; c = 5; pc = "b777-300"
        break;

        //BOMBARDIER
        case "dhc 8 q 200":
        case "dhc 8 q-200":
        case "dhc 8 q200":
        case "dhc 8-q 200":
        case "dhc 8-q-200":
        case "dhc 8-q200":
        case "dhc 8q 200":
        case "dhc 8q-200":
        case "dhc 8q200":
        case "dhc-8 q 200":
        case "dhc-8 q-200":
        case "dhc-8 q200":
        case "dhc-8-q 200":
        case "dhc-8-q-200":
        case "dhc-8-q200":
        case "dhc-8q 200":
        case "dhc-8q-200":
        case "dhc-8q200":
        case "dhc8 q 200":
        case "dhc8 q-200":
        case "dhc8 q200":
        case "dhc8-q 200":
        case "dhc8-q-200":
        case "dhc8-q200":
        case "dhc8q 200":
        case "dhc8q-200":
        case "dhc8q200":
        case "dhc 8 200":
        case "dhc 8-200":
        case "dhc 8200":
        case "dhc-8 200":
        case "dhc-8-200":
        case "dhc-8200":
        case "dhc8 200":
        case "dhc8-200":
        case "dhc8200":
        case "8-q200":
        case "8 q200":
        case "8q200":
        case "dhc 8 q 200 ":
        case "dhc 8 q-200 ":
        case "dhc 8 q200 ":
        case "dhc 8-q 200 ":
        case "dhc 8-q-200 ":
        case "dhc 8-q200 ":
        case "dhc 8q 200 ":
        case "dhc 8q-200 ":
        case "dhc 8q200 ":
        case "dhc-8 q 200 ":
        case "dhc-8 q-200 ":
        case "dhc-8 q200 ":
        case "dhc-8-q 200 ":
        case "dhc-8-q-200 ":
        case "dhc-8-q200 ":
        case "dhc-8q 200 ":
        case "dhc-8q-200 ":
        case "dhc-8q200 ":
        case "dhc8 q 200 ":
        case "dhc8 q-200 ":
        case "dhc8 q200 ":
        case "dhc8-q 200 ":
        case "dhc8-q-200 ":
        case "dhc8-q200 ":
        case "dhc8q 200 ":
        case "dhc8q-200 ":
        case "dhc8q200 ":
        case "dhc 8 200 ":
        case "dhc 8-200 ":
        case "dhc 8200 ":
        case "dhc-8 200 ":
        case "dhc-8-200 ":
        case "dhc-8200 ":
        case "dhc8 200 ":
        case "dhc8-200 ":
        case "dhc8200 ":
        case "8-q200 ":
        case "8 q200 ":
        case "8q200 ":
        case "id106":
        speed = 585; cap = 37; rwy = 2000; mC = 14926; range = 1713; fConsmp = 17.51; cConsmp = 0.21; mH = 480; price = 124381
        n = "DHC-8-Q200"; c = 6; pc = "dhc8"
        break;
        
        case "dhc 8 q 100":
        case "dhc 8 q-100":
        case "dhc 8 q100":
        case "dhc 8-q 100":
        case "dhc 8-q-100":
        case "dhc 8-q100":
        case "dhc 8q 100":
        case "dhc 8q-100":
        case "dhc 8q100":
        case "dhc-8 q 100":
        case "dhc-8 q-100":
        case "dhc-8 q100":
        case "dhc-8-q 100":
        case "dhc-8-q-100":
        case "dhc-8-q100":
        case "dhc-8q 100":
        case "dhc-8q-100":
        case "dhc-8q100":
        case "dhc8 q 100":
        case "dhc8 q-100":
        case "dhc8 q100":
        case "dhc8-q 100":
        case "dhc8-q-100":
        case "dhc8-q100":
        case "dhc8q 100":
        case "dhc8q-100":
        case "dhc8q100":
        case "dhc 8 100":
        case "dhc 8-100":
        case "dhc 8100":
        case "dhc-8 100":
        case "dhc-8-100":
        case "dhc-8100":
        case "dhc8 100":
        case "dhc8-100":
        case "dhc8100":
        case "8-q100":
        case "8 q100":
        case "8q100":
        case "dhc 8 q 100 ":
        case "dhc 8 q-100 ":
        case "dhc 8 q100 ":
        case "dhc 8-q 100 ":
        case "dhc 8-q-100 ":
        case "dhc 8-q100 ":
        case "dhc 8q 100 ":
        case "dhc 8q-100 ":
        case "dhc 8q100 ":
        case "dhc-8 q 100 ":
        case "dhc-8 q-100 ":
        case "dhc-8 q100 ":
        case "dhc-8-q 100 ":
        case "dhc-8-q-100 ":
        case "dhc-8-q100 ":
        case "dhc-8q 100 ":
        case "dhc-8q-100 ":
        case "dhc-8q100 ":
        case "dhc8 q 100 ":
        case "dhc8 q-100 ":
        case "dhc8 q100 ":
        case "dhc8-q 100 ":
        case "dhc8-q-100 ":
        case "dhc8-q100 ":
        case "dhc8q 100 ":
        case "dhc8q-100 ":
        case "dhc8q100 ":
        case "dhc 8 100 ":
        case "dhc 8-100 ":
        case "dhc 8100 ":
        case "dhc-8 100 ":
        case "dhc-8-100 ":
        case "dhc-8100 ":
        case "dhc8 100 ":
        case "dhc8-100 ":
        case "dhc8100 ":
        case "8-q100 ":
        case "8 q100 ":
        case "8q100 ":
        case "id107":
        speed = 505; cap = 37; rwy = 2000; mC = 22350; fConsmp = 16.96; cConsmp = 0.2; mH = 380; price = 127710;
        n = "DHC-8-100"; c = 6; pc = "dhc8"
        break;
        
        case "learjet 25 b":
        case "learjet 25-b":
        case "learjet 25b":
        case "learjet-25 b":
        case "learjet-25-b":
        case "learjet-25b":
        case "learjet25 b":
        case "learjet25-b":
        case "learjet25b":
        case "learjet 25":
        case "learjet-25":
        case "learjet25":
        case "learjet":
        case "learjet 25 b ":
        case "learjet 25-b ":
        case "learjet 25b ":
        case "learjet-25 b ":
        case "learjet-25-b ":
        case "learjet-25b ":
        case "learjet25 b ":
        case "learjet25-b ":
        case "learjet25b ":
        case "learjet 25 ":
        case "learjet-25 ":
        case "learjet25 ":
        case "learjet ":
        case "id108":
        speed = 956; cap = 8; rwy = 2000; mC = 33720; range = 2684; fConsmp = 7.42; cConsmp = 0.09; mH = 320; price = 137633; 
        n = "Learjet 25B"; c = 6; pc = "l25b"
        break;
        
        case "dhc 8 q 300":
        case "dhc 8 q-300":
        case "dhc 8 q300":
        case "dhc 8-q 300":
        case "dhc 8-q-300":
        case "dhc 8-q300":
        case "dhc 8q 300":
        case "dhc 8q-300":
        case "dhc 8q300":
        case "dhc-8 q 300":
        case "dhc-8 q-300":
        case "dhc-8 q300":
        case "dhc-8-q 300":
        case "dhc-8-q-300":
        case "dhc-8-q300":
        case "dhc-8q 300":
        case "dhc-8q-300":
        case "dhc-8q300":
        case "dhc8 q 300":
        case "dhc8 q-300":
        case "dhc8 q300":
        case "dhc8-q 300":
        case "dhc8-q-300":
        case "dhc8-q300":
        case "dhc8q 300":
        case "dhc8q-300":
        case "dhc8q300":
        case "dhc 8 300":
        case "dhc 8-300":
        case "dhc 8300":
        case "dhc-8 300":
        case "dhc-8-300":
        case "dhc-8300":
        case "dhc8 300":
        case "dhc8-300":
        case "dhc8300":
        case "8-q300":
        case "8 q300":
        case "8q300":
        case "dhc 8 q 300 ":
        case "dhc 8 q-300 ":
        case "dhc 8 q300 ":
        case "dhc 8-q 300 ":
        case "dhc 8-q-300 ":
        case "dhc 8-q300 ":
        case "dhc 8q 300 ":
        case "dhc 8q-300 ":
        case "dhc 8q300 ":
        case "dhc-8 q 300 ":
        case "dhc-8 q-300 ":
        case "dhc-8 q300 ":
        case "dhc-8-q 300 ":
        case "dhc-8-q-300 ":
        case "dhc-8-q300 ":
        case "dhc-8q 300 ":
        case "dhc-8q-300 ":
        case "dhc-8q300 ":
        case "dhc8 q 300 ":
        case "dhc8 q-300 ":
        case "dhc8 q300 ":
        case "dhc8-q 300 ":
        case "dhc8-q-300 ":
        case "dhc8-q300 ":
        case "dhc8q 300 ":
        case "dhc8q-300 ":
        case "dhc8q300 ":
        case "dhc 8 300 ":
        case "dhc 8-300 ":
        case "dhc 8300 ":
        case "dhc-8 300 ":
        case "dhc-8-300 ":
        case "dhc-8300 ":
        case "dhc8 300 ":
        case "dhc8-300 ":
        case "dhc8300 ":
        case "8-q300 ":
        case "8 q300 ":
        case "8q300 ":
        case "id109":
        speed = 512; cap = 50; rwy = 2000; mC = 27056; range = 1558; fConsmp = 13.86; cConsmp = 0.18; mH = 370; price = 180374;
        n = "DHC-8-Q300"; c = 6; pc = "q300"
        break;
        
        case "challenger 300":
        case "challenger-300":
        case "challenger300":
        case "challenger 300 ":
        case "challenger-300 ":
        case "challenger300 ":
        case "id110":
        speed = 945; cap = 16; rwy = 3500; mC = 16794; range = 3000; fConsmp = 10.1; cConsmp = 0.12; mH = 480; price = 223915;
        n = "Challenger 300"; c = 6; pc = "challenger300"
        break;
        
        case "dhc-7":
        case "dhc7":
        case "dhc 7":
        case "dhc-7 ":
        case "dhc7 ":
        case "dhc 7 ":
        case "id111":
        speed = 396; cap = 54; rwy = 2000; mC = 53136; range = 1400; fConsmp = 14.7; cConsmp = 0.19; mH = 400; price = 259197;
        n = "DHC-7"; c = 6; pc = "dhc7"
        break;
        
        case "crj 100":
        case "crj100":
        case "crj-100":
        case "crj 100 ":
        case "crj100 ":
        case "crj-100 ":
        case "id112":
        speed = 840; cap = 50; rwy = 4500; mC = 56164; range = 2417; fConsmp = 7.56; cConsmp = 0.09; mH = 470; price = 416025;
        n = "CRJ 100"; c = 6; pc = "crj100"
        break;
        
        case "challenger 600":
        case "challenger-600":
        case "challenger600":
        case "challenger 600 ":
        case "challenger-600 ":
        case "challenger600 ":
        case "id113":
        speed = 863; cap = 19; rwy = 3500; mC = 85678; range = 5925; fConsmp = 6.3; cConsmp = 0.09; mH = 370; price = 439374
        n = "Challenger 600"; c = 6; pc = "challenger300"
        break;
        
        case "crj 100 er":
        case "crj 100-er":
        case "crj 100er":
        case "crj-100 er":
        case "crj-100-er":
        case "crj-100er":
        case "crj100 er":
        case "crj100-er":
        case "crj100er":
        case "crj 100 er ":
        case "crj 100-er ":
        case "crj 100er ":
        case "crj-100 er ":
        case "crj-100-er ":
        case "crj-100er ":
        case "crj100 er ":
        case "crj100-er ":
        case "crj100er ":
        case "id114":
        speed = 840; cap = 50; rwy = 4500; mC = 71012; range = 3056; fConsmp = 7.56; cConsmp = 0.09; mH = 470; price = 526012;
        n = "CRJ 100ER"; c = 5; pc = "crj100"
        break;
        
        case "challenger 601":
        case "challenger-601":
        case "challenger601":
        case "challenger 601 ":
        case "challenger-601 ":
        case "challenger601 ":
        case "id115":
        speed = 945; cap = 19; rwy = 3500; mC = 102252; range = 6236; fConsmp = 6.06; cConsmp = 0.08; mH = 350; price = 552716;
        n = "Challenger 601"; c = 6; pc = "challenger300"
        break;
        
        case "challenger 605":
        case "challenger-605":
        case "challenger605":
        case "challenger 605 ":
        case "challenger-605 ":
        case "challenger605 ":
        case "id116":
        speed = 799; cap = 12; rwy = 3780; mC = 36300; range = 7491; fConsmp = 4.6; cConsmp = 0.06; mH = 490; price = 558459;
        n = "Challenger 605"; c = 6; pc = "challenger300"
        break;
        
        case "crj 200":
        case "crj200":
        case "crj-200":
        case "crj 200 ":
        case "crj200 ":
        case "crj-200 ":
        case "id117":
        speed = 802; cap = 50; rwy = 2000; mC = 83918; range = 3500; fConsmp = 6.72; cConsmp = 0.09; mH = 450; price = 621621;
        n = "CRJ 200"; c = 6; pc = "crj200"
        break;
        
        case "global 7500":
        case "global-7500":
        case "global7500":
        case "global 7500 ":
        case "global-7500 ":
        case "global7500 ":
        case "id118":
        speed = 898; cap = 19; rwy = 5800; mC = 59886; range = 14260;
        fConsmp = 8.37; cConsmp = 0.06; mH = 400; price = 630386
        n = "Global 7500"; c = 6; pc = "global7500"
        break;

        case "crj 100 lr":
        case "crj 100-lr":
        case "crj 100lr":
        case "crj-100 lr":
        case "crj-100-lr":
        case "crj-100lr":
        case "crj100 lr":
        case "crj100-lr":
        case "crj100lr":
        case "crj 100 lr ":
        case "crj 100-lr ":
        case "crj 100lr ":
        case "crj-100 lr ":
        case "crj-100-lr ":
        case "crj-100lr ":
        case "crj100 lr ":
        case "crj100-lr ":
        case "crj100lr ":
        case "id119":
        speed = 840; cap = 50; rwy = 2000; mC = 86208; range = 3710;
        fConsmp = 7.56; cConsmp = 0.09; mH = 490; price = 638581
        n = "CRJ 100LR"; c = 6; pc = "crj100"
        break;

        case "global 8000":
        case "global-8000":
        case "global8000":
        case "global 8000 ":
        case "global-8000 ":
        case "global8000 ":
        case "id120":
        speed = 898; cap = 17; rwy = 5820; mC = 61848; range = 14631;
        fConsmp = 7.44; cConsmp = 0.06; mH = 400; price = 651042;
        n = "Global 8000"; c = 6; pc = "global7500"
        break;

        case "crj 200 lr":
        case "crj 200-lr":
        case "crj 200lr":
        case "crj-200 lr":
        case "crj-200-lr":
        case "crj-200lr":
        case "crj200 lr":
        case "crj200-lr":
        case "crj200lr":
        case "crj 200 lr ":
        case "crj 200-lr ":
        case "crj 200lr ":
        case "crj-200 lr ":
        case "crj-200-lr ":
        case "crj-200lr ":
        case "crj200 lr ":
        case "crj200-lr ":
        case "crj200lr ":
        case "id121":
        speed = 802; cap = 50; rwy = 2000; mC = 75836; range = 3713;
        fConsmp = 6.72; cConsmp = 0.09; mH = 470; price = 659451
        n = "CRJ 200LR"; c = 6; pc = "crj200lr"
        break;

        case "dhc 8 q 400":
        case "dhc 8 q-400":
        case "dhc 8 q400":
        case "dhc 8-q 400":
        case "dhc 8-q-400":
        case "dhc 8-q400":
        case "dhc 8q 400":
        case "dhc 8q-400":
        case "dhc 8q400":
        case "dhc-8 q 400":
        case "dhc-8 q-400":
        case "dhc-8 q400":
        case "dhc-8-q 400":
        case "dhc-8-q-400":
        case "dhc-8-q400":
        case "dhc-8q 400":
        case "dhc-8q-400":
        case "dhc-8q400":
        case "dhc8 q 400":
        case "dhc8 q-400":
        case "dhc8 q400":
        case "dhc8-q 400":
        case "dhc8-q-400":
        case "dhc8-q400":
        case "dhc8q 400":
        case "dhc8q-400":
        case "dhc8q400":
        case "dhc 8 400":
        case "dhc 8-400":
        case "dhc 8400":
        case "dhc-8 400":
        case "dhc-8-400":
        case "dhc-8400":
        case "dhc8 400":
        case "dhc8-400":
        case "dhc8400":
        case "8-q400":
        case "8 q400":
        case "8q400":
        case "dhc 8 q 400 ":
        case "dhc 8 q-400 ":
        case "dhc 8 q400 ":
        case "dhc 8-q 400 ":
        case "dhc 8-q-400 ":
        case "dhc 8-q400 ":
        case "dhc 8q 400 ":
        case "dhc 8q-400 ":
        case "dhc 8q400 ":
        case "dhc-8 q 400 ":
        case "dhc-8 q-400 ":
        case "dhc-8 q400 ":
        case "dhc-8-q 400 ":
        case "dhc-8-q-400 ":
        case "dhc-8-q400 ":
        case "dhc-8q 400 ":
        case "dhc-8q-400 ":
        case "dhc-8q400 ":
        case "dhc8 q 400 ":
        case "dhc8 q-400 ":
        case "dhc8 q400 ":
        case "dhc8-q 400 ":
        case "dhc8-q-400 ":
        case "dhc8-q400 ":
        case "dhc8q 400 ":
        case "dhc8q-400 ":
        case "dhc8q400 ":
        case "dhc 8 400 ":
        case "dhc 8-400 ":
        case "dhc 8400 ":
        case "dhc-8 400 ":
        case "dhc-8-400 ":
        case "dhc-8400 ":
        case "dhc8 400 ":
        case "dhc8-400 ":
        case "dhc8400 ":
        case "8-q400 ":
        case "8 q400 ":
        case "8q400 ":
        case "id122":
        speed = 734; cap = 70; rwy = 2000; mC = 76452; range = 2522;
        fConsmp = 9.9; cConsmp = 0.11; mH = 480; price = 804752;
        n = "DHC-8-Q400"; c = 6; pc = "q400"
        break;

        case "crj 701":
        case "crj701":
        case "crj-701":
        case "crj 701 ":
        case "crj701 ":
        case "crj-701 ":
        case "id123":
        speed = 879; cap = 70; rwy = 2000; mC = 94766; range = 2655;
        fConsmp = 9.36; cConsmp = 0.11; mH = 500; price = 1052956;
        n = "CRJ 701"; c = 6; pc = "crj700"
        break;

        case "challenger 604":
        case "challenger-604":
        case "challenger604":
        case "challenger 604 ":
        case "challenger-604 ":
        case "challenger604 ":
        case "id124":
        speed = 800; cap = 19; rwy = 3780; mC = 131556; range = 9680;
        fConsmp = 4.6; cConsmp = 0.06; mH = 450; price = 1143957;
        n = "Challenger 604"; c = 6; pc = "challenger300"
        break;

        case "crj 700":
        case "crj700":
        case "crj-700":
        case "crj 700 ":
        case "crj700 ":
        case "crj-700 ":
        case "id125":
        speed = 794; cap = 68; rwy = 2000; mC = 105736; range = 3121
        fConsmp = 8.82; cConsmp = 0.11; mH = 490; price = 1174846
        n = "CRJ 700"; c = 6; pc = "crj700"
        break;

        case "crj 701 er":
        case "crj 701-er":
        case "crj 701er":
        case "crj-701 er":
        case "crj-701-er":
        case "crj-701er":
        case "crj701 er":
        case "crj701-er":
        case "crj701er":
        case "crj 701 er ":
        case "crj 701-er ":
        case "crj 701er ":
        case "crj-701 er ":
        case "crj-701-er ":
        case "crj-701er ":
        case "crj701 er ":
        case "crj701-er ":
        case "crj701er ":
        case "id126":
        speed = 879; cap = 70; rwy = 2000; mC = 114434; range = 3206;
        fConsmp = 9.36; cConsmp = 0.11; mH = 490; price = 1271479;
        n = "CRJ 701ER"; c = 6; pc = "crj700"
        break;

        case "crj 700 ng":
        case "crj 700-ng":
        case "crj 700ng":
        case "crj-700 ng":
        case "crj-700-ng":
        case "crj-700ng":
        case "crj700 ng":
        case "crj700-ng":
        case "crj700ng":
        case "crj 700 ng ":
        case "crj 700-ng ":
        case "crj 700ng ":
        case "crj-700 ng ":
        case "crj-700-ng ":
        case "crj-700ng ":
        case "crj700 ng ":
        case "crj700-ng ":
        case "crj700ng ":
        case "id127":
        speed = 840; cap = 70; rwy = 2000; mC = 80140; range = 2735;
        fConsmp = 7.92; cConsmp = 0.1; mH = 460; price = 1335683;
        n = "CRJ 700NG"; c = 6; pc = "crj700"
        break;

        case "crj 702":
        case "crj702":
        case "crj-702":
        case "crj 702 ":
        case "crj702 ":
        case "crj-702 ":
        case "id128":
        speed = 859; cap = 78; rwy = 2000; mC = 121286; range = 3121;
        fConsmp = 9.36; cConsmp = 0.11; mH = 450; price = 1347617
        n = "CRJ 702"; c = 6; pc = "crj700"
        break;

        case "crj 705":
        case "crj705":
        case "crj-705":
        case "crj 705 ":
        case "crj705 ":
        case "crj-705 ":
        case "id129":
        speed = 879; cap = 75; rwy = 2000; mC = 54118; range = 3184;
        fConsmp = 9.36; cConsmp = 0.11; mH = 510; price = 1352951
        n = "CRJ 705"; c = 6; pc = "crj700"
        break;

        case "crj 700 er":
        case "crj 700-er":
        case "crj 700er":
        case "crj-700 er":
        case "crj-700-er":
        case "crj-700er":
        case "crj700 er":
        case "crj700-er":
        case "crj700er":
        case "crj 700 er ":
        case "crj 700-er ":
        case "crj 700er ":
        case "crj-700 er ":
        case "crj-700-er ":
        case "crj-700er ":
        case "crj700 er ":
        case "crj700-er ":
        case "crj700er ":
        case "id130":
        speedd = 794; cap = 68; rwy = 2000; mC = 124538; range = 3676;
        fConsmp = 8.82; cConsmp = 0.11; mH = 470; price = 1383766
        n = "CRJ 700ER"; c = 6; pc = "crj700"
        break;

        case "crj 701 lr":
        case "crj 701-lr":
        case "crj 701lr":
        case "crj-701 lr":
        case "crj-701-lr":
        case "crj-701lr":
        case "crj701 lr":
        case "crj701-lr":
        case "crj701lr":
        case "crj 701 lr ":
        case "crj 701-lr ":
        case "crj 701lr ":
        case "crj-701 lr ":
        case "crj-701-lr ":
        case "crj-701lr ":
        case "crj701 lr ":
        case "crj701-lr ":
        case "crj701lr ":
        case "id131":
        speed = 879; cap = 70; rwy = 2000; mC = 132352; range = 3708;
        fConsmp = 9.36; cConsmp = 0.11; mH = 500; price = 1470569
        n = "CRJ 701LR"; c = 6; pc = "crj700"
        break;

        case "crj 900 ng":
        case "crj 900-ng":
        case "crj 900ng":
        case "crj-900 ng":
        case "crj-900-ng":
        case "crj-900ng":
        case "crj900 ng":
        case "crj900-ng":
        case "crj900ng":
        case "crj 900 ng ":
        case "crj 900-ng ":
        case "crj 900ng ":
        case "crj-900 ng ":
        case "crj-900-ng ":
        case "crj-900ng ":
        case "crj900 ng ":
        case "crj900-ng ":
        case "crj900ng ":
        case "id132":
        speed = 838; cap = 88; rwy = 2000; mC = 119860; range = 2421;
        fConsmp = 7.28; cConsmp = 0.1; mH = 470; price = 1498256
        n = "CRJ 900NG"; c = 6; pc = "crj700"
        break;

        case "crj 900":
        case "crj900":
        case "crj-900":
        case "crj 900 ":
        case "crj900 ":
        case "crj-900 ":
        case "id133":
        speed = 837; cap = 86; rwy = 2000; mC = 122450; range = 2956;
        fConsmp = 8.19; cConsmp = 0.11; mH = 490; price = 1530636
        n = "CRJ 900"; c = 6; pc = "crj700"
        break;

        case "crj 705 er":
        case "crj 705-er":
        case "crj 705er":
        case "crj-705 er":
        case "crj-705-er":
        case "crj-705er":
        case "crj705 er":
        case "crj705-er":
        case "crj705er":
        case "crj 705 er ":
        case "crj 705-er ":
        case "crj 705er ":
        case "crj-705 er ":
        case "crj-705-er ":
        case "crj-705er ":
        case "crj705 er ":
        case "crj705-er ":
        case "crj705er ":
        case "id134":
        speed = 879; cap = 75; rwy = 2000; mC = 61784; range = 3635;
        fConsmp = 9.36; cConsmp = 0.11; mH = 550; price = 1544590
        n = "CRJ 705ER"; c = 6; pc = "crj700"
        break;

        case "crj 705 lr":
        case "crj 705-lr":
        case "crj 705lr":
        case "crj-705 lr":
        case "crj-705-lr":
        case "crj-705lr":
        case "crj705 lr":
        case "crj705-lr":
        case "crj705lr":
        case "crj 705 lr ":
        case "crj 705-lr ":
        case "crj 705lr ":
        case "crj-705 lr ":
        case "crj-705-lr ":
        case "crj-705lr ":
        case "crj705 lr ":
        case "crj705-lr ":
        case "crj705lr ":
        case "id135":
        speed = 879; cap = 75; rwy = 2000; mC = 62922; range = 3702;
        fConsmp = 9.36; cConsmp = 0.11; mH = 550; price = 1573060
        n = "CRJ 705LR"; c = 6; pc = "crj700"
        break;

        case "crj 1000":
        case "crj1000":
        case "crj-1000":
        case "crj 1000 ":
        case "crj1000 ":
        case "crj-1000 ":
        case "id136":
        speed = 877; cap = 100; rwy = 5499; mC = 109196; range = 2760
        fConsmp = 8.32; cConsmp = 0.1; mH = 450; price = 1819929
        n = "CRJ 1000"; c = 6; pc = "crj100"
        break;

        case "crj 900 er":
        case "crj 900-er":
        case "crj 900er":
        case "crj-900 er":
        case "crj-900-er":
        case "crj-900er":
        case "crj900 er":
        case "crj900-er":
        case "crj900er":
        case "crj 900 er ":
        case "crj 900-er ":
        case "crj 900er ":
        case "crj-900 er ":
        case "crj-900-er ":
        case "crj-900er ":
        case "crj900 er ":
        case "crj900-er ":
        case "crj900er ":
        case "id137":
        speed = 808; cap = 90; rwy = 2000; mC = 145888; range = 3488
        fConsmp = 8.19; cConsmp = 0.11; mH = 460; price = 1823606
        n = "CRJ 900ER"; c = 6; pc = "crj700"
        break;

        case "crj 900 lr":
        case "crj 900-lr":
        case "crj 900lr":
        case "crj-900 lr":
        case "crj-900-lr":
        case "crj-900lr":
        case "crj900 lr":
        case "crj900-lr":
        case "crj900lr":
        case "crj 900 lr ":
        case "crj 900-lr ":
        case "crj 900lr ":
        case "crj-900 lr ":
        case "crj-900-lr ":
        case "crj-900lr ":
        case "crj900 lr ":
        case "crj900-lr ":
        case "crj900lr ":
        case "id138":
        speed = 808; cap = 90; rwy = 2000; mC = 167386; range = 4002
        fConsmp = 8.19; cConsmp = 0.11; mH = 500; price = 2092337
        n = "CRJ 900LR"; c = 6; pc = "crj700"
        break;

        case "c s 100":
        case "c s-100":
        case "c s100":
        case "c-s 100":
        case "c-s-100":
        case "c-s100":
        case "cs 100":
        case "cs-100":
        case "cs100":
        case "c s 100 ":
        case "c s-100 ":
        case "c s100 ":
        case "c-s 100 ":
        case "c-s-100 ":
        case "c-s100 ":
        case "cs 100 ":
        case "cs-100 ":
        case "cs100 ":
        case "id139":
        speed = 905; cap = 110; rwy = 4449; mC = 107886; range = 5463
        fConsmp = 12.96; cConsmp = 0.15; mH = 550; price = 2697150
        n = "CS 100"; c = 6; pc = "bcs100"
        break;

        case "cl 44 d":
        case "cl 44-d":
        case "cl 44d":
        case "cl-44 d":
        case "cl-44-d":
        case "cl-44d":
        case "cl44 d":
        case "cl44-d":
        case "cl44d":
        case "cl 44 d ":
        case "cl 44-d ":
        case "cl 44d ":
        case "cl-44 d ":
        case "cl-44-d ":
        case "cl-44d ":
        case "cl44 d ":
        case "cl44-d ":
        case "cl44d ":
        case "id140":
        speed = 711; cap = 160; rwy = 8050; mC = 1047786; range = 4855
        fConsmp = 13.13; cConsmp = 0.16; mH = 340; price = 3613052
        n = "CL-44D"; c = 6; pc = "cl-44d"
        break;

        case "c s 300":
        case "c s-300":
        case "c s300":
        case "c-s 300":
        case "c-s-300":
        case "c-s300":
        case "cs 300":
        case "cs-300":
        case "cs300":
        case "c s 300 ":
        case "c s-300 ":
        case "c s300 ":
        case "c-s 300 ":
        case "c-s-300 ":
        case "c-s300 ":
        case "cs 300 ":
        case "cs-300 ":
        case "cs300 ":
        case "id141":
        speed = 905; cap = 135; rwy = 4800; mC = 199374; range = 5463
        fConsmp = 15.12; cConsmp = 0.18; mH = 500; price = 4984356
        n = "CS 300"; c = 6; pc = "bcs300"
        break;

        //BRITISH AEROSPACE
        case "jetstream 31":
        case "jetstream-31":
        case "jetstream31":
        case "jetstream 31 ":
        case "jetstream-31 ":
        case "jetstream31 ":
        case "id142":
        speed = 405; cap = 19; rwy = 2000; mC = 13976; range = 1260; fConsmp = 16.83; cConsmp = 0.21;
        mH = 320; price = 323000;
        n = "Jetstream 41"; c = 7; pc = "jet31"
        break;
    
        case "jetstream 41":
        case "jetstream-41":
        case "jetstream41":
        case "jetstream 41 ":
        case "jetstream-41 ":
        case "jetstream41":
        case "id143":
        speed = 541; cap = 30; rwy = 2000; mC = 11580; range = 1433; fConsmp = 14.4; cConsmp = 0.2; 
        mH = 470; price = 510000
        n = "Jetstream 41"; c = 7; pc = "jet41"
        break;
    
        case "bae 146 300":
        case "bae 146-300":
        case "bae 146300":
        case "bae-146 300":
        case "bae-146-300":
        case "bae-146300":
        case "bae-146 300":
        case "bae-146-300":
        case "bae-146300":
        case "bae 146 3":
        case "bae 146-3":
        case "bae 1463":
        case "bae-146 3":
        case "bae-146-3":
        case "bae-1463":
        case "bae-146 3":
        case "bae-146-3":
        case "bae-1463":
        case "bae 143":
        case "bae-143":
        case "bae143":
        case "bae 146 300 ":
        case "bae 146-300 ":
        case "bae 146300 ":
        case "bae-146 300 ":
        case "bae-146-300 ":
        case "bae-146300 ":
        case "bae-146 300 ":
        case "bae-146-300 ":
        case "bae-146300 ":
        case "bae 146 3 ":
        case "bae 146-3 ":
        case "bae 1463 ":
        case "bae-146 3 ":
        case "bae-146-3 ":
        case "bae-1463 ":
        case "bae-146 3 ":
        case "bae-146-3 ":
        case "bae-1463 ":
        case "bae 143 ":
        case "bae-143 ":
        case "bae143 ":
        case "id144":
        speed = 702; cap = 112; rwy = 3921; mC = 50152; range = 2400; fConsmp = 17.67; cConsmp = 0.24;
        mH = 400; price = 527912;
        n = "BAe 146-300"; c = 7; pc = "bae146"
        break;
    
        case "bae-146":
        case "bae146":
        case "bae 146":
        case "bae-146 ":
        case "bae146 ":
        case "bae 146 ":
        case "id145":
        speed = 675; cap = 85; rwy = 6500; mC = 137242; range = 2000; fConsmp = 9.3; cConsmp = 0.12;
        mH = 330; price = 762450
        n = "BAe146"; c = 7; pc = "bae146"
        break;
        
        //CESSNA
        case "cessna 172":
        case "cessna172":
        case "cessna-172":
        case "c 172":
        case "c172":
        case "c-172":
        case "cessna 172 ":
        case "cessna172 ":
        case "cessna-172 ":
        case "c 172 ":
        case "c172 ":
        case "c-172 ":
        case "id146":
        speed = 176; cap = 3; rwy = 2500; mC = 4682; range = 1000; fConsmp = 3.76; cConsmp = 0.05;
        mH = 400; price = 51000
        n = "172"; c = 8; pc = "cessna172"
        break;
    
        case "cessna 208 b":
        case "cessna 208-b":
        case "cessna 208b":
        case "cessna-208 b":
        case "cessna-208-b":
        case "cessna-208b":
        case "cessna208 b":
        case "cessna208-b":
        case "cessna208b":
        case "c 208 b":
        case "c 208-b":
        case "c 208b":
        case "c-208 b":
        case "c-208-b":
        case "c-208b":
        case "c208 b":
        case "c208-b":
        case "c208b":
        case "208-b":
        case "208b":
        case "208 b":
        case "cessna 208 b ":
        case "cessna 208-b ":
        case "cessna 208b ":
        case "cessna-208 b ":
        case "cessna-208-b ":
        case "cessna-208b ":
        case "cessna208 b ":
        case "cessna208-b ":
        case "cessna208b ":
        case "c 208 b ":
        case "c 208-b ":
        case "c 208b ":
        case "c-208 b ":
        case "c-208-b ":
        case "c-208b ":
        case "c208 b ":
        case "c208-b ":
        case "c208b ":
        case "208-b ":
        case "208b ":
        case "208 b ":
        case "id147":
        speed = 327; cap = 14; rwy = 2990; mC = 6962; range = 2000; fConsmp = 10.7; cConsmp = 0.12;
        mH = 390; price = 238000;
        n = "208B"; c = 8; pc = "cessna208b"
        break;
    
        case "citation x":
        case "citation-x":
        case "citationx":
        case "citation x ":
        case "citation-x ":
        case "citationx ":
        case "id148":
        speed = 947; cap = 12; rwy = 4000; mC = 58740; range = 6020; fConsmp = 7.68; cConsmp = 0.1;
        mH = 360; price = 378968;
        n = "Citation X"; c = 8; pc = "citationx"
        break;

        //COMAC
        case "arj 21 700":
        case "arj 21-700":
        case "arj 21700":
        case "arj-21 700":
        case "arj-21-700":
        case "arj-21700":
        case "arj21 700":
        case "arj21-700":
        case "arj21700":
        case "arj 21 7":
        case "arj 21-7":
        case "arj 217":
        case "arj-21 7":
        case "arj-21-7":
        case "arj-217":
        case "arj21 7":
        case "arj21-7":
        case "arj217":
        case "arj 21 700 ":
        case "arj 21-700 ":
        case "arj 21700 ":
        case "arj-21 700 ":
        case "arj-21-700 ":
        case "arj-21700 ":
        case "arj21 700 ":
        case "arj21-700 ":
        case "arj21700 ":
        case "arj 21 7 ":
        case "arj 21-7 ":
        case "arj 217 ":
        case "arj-21 7 ":
        case "arj-21-7 ":
        case "arj-217 ":
        case "arj21 7 ":
        case "arj21-7 ":
        case "arj217 ":
        case "id149":
        speed = 930; cap = 78; rwy = 7500; mC = 41140; range = 2200;
        fConsmp = 9.27; cConsmp = 0.11; mH = 510; price = 1028514;
        n = "ARJ21-700"; c = 9; pc = "comac"
        break;
        
        case "arj 21 900":
        case "arj 21-900":
        case "arj 21900":
        case "arj-21 900":
        case "arj-21-900":
        case "arj-21900":
        case "arj21 900":
        case "arj21-900":
        case "arj21900":
        case "arj 21 9":
        case "arj 21-9":
        case "arj 219":
        case "arj-21 9":
        case "arj-21-9":
        case "arj-219":
        case "arj21 9":
        case "arj21-9":
        case "arj219":
        case "id150":
        speed = 930; cap = 98; rwy = 7900; mC = 45228; range = 2200;
        fConsmp = 10.3; cConsmp = 0.12; mH = 510; price = 1130706;
        n = "ARJ21-900"; c = 9; pc = "comac"
        break;

        case "arj 21 700er":
        case "arj 21-700er":
        case "arj 21700er":
        case "arj-21 700er":
        case "arj-21-700er":
        case "arj-21700er":
        case "arj21 700er":
        case "arj21-700er":
        case "arj21700er":
        case "arj 21 7er":
        case "arj 21-7er":
        case "arj 217er":
        case "arj-21 7er":
        case "arj-21-7er":
        case "arj-217er":
        case "arj21 7er":
        case "arj21-7er":
        case "arj217er":
        case "arj 21 700-er":
        case "arj 21-700-er":
        case "arj 21700-er":
        case "arj-21 700-er":
        case "arj-21-700-er":
        case "arj-21700-er":
        case "arj21 700-er":
        case "arj21-700-er":
        case "arj21700-er":
        case "arj 21 7-er":
        case "arj 21-7-er":
        case "arj 217-er":
        case "arj-21 7-er":
        case "arj-21-7-er":
        case "arj-217-er":
        case "arj21 7-er":
        case "arj21-7-er":
        case "arj217-er":
        case "arj 21 700 er":
        case "arj 21-700 er":
        case "arj 21700 er":
        case "arj-21 700 er":
        case "arj-21-700 er":
        case "arj-21700 er":
        case "arj21 700 er":
        case "arj21-700 er":
        case "arj21700 er":
        case "arj 21 7 er":
        case "arj 21-7 er":
        case "arj 217 er":
        case "arj-21 7 er":
        case "arj-21-7 er":
        case "arj-217 er":
        case "arj21 7 er":
        case "arj21-7 er":
        case "arj217 er":
        case "arj 21 700er ":
        case "arj 21-700er ":
        case "arj 21700er ":
        case "arj-21 700er ":
        case "arj-21-700er ":
        case "arj-21700er ":
        case "arj21 700er ":
        case "arj21-700er ":
        case "arj21700er ":
        case "arj 21 7er ":
        case "arj 21-7er ":
        case "arj 217er ":
        case "arj-21 7er ":
        case "arj-21-7er ":
        case "arj-217er ":
        case "arj21 7er ":
        case "arj21-7er ":
        case "arj217er ":
        case "arj 21 700-er ":
        case "arj 21-700-er ":
        case "arj 21700-er ":
        case "arj-21 700-er ":
        case "arj-21-700-er ":
        case "arj-21700-er ":
        case "arj21 700-er ":
        case "arj21-700-er ":
        case "arj21700-er ":
        case "arj 21 7-er ":
        case "arj 21-7-er ":
        case "arj 217-er ":
        case "arj-21 7-er ":
        case "arj-21-7-er ":
        case "arj-217-er ":
        case "arj21 7-er ":
        case "arj21-7-er ":
        case "arj217-er ":
        case "arj 21 700 er ":
        case "arj 21-700 er ":
        case "arj 21700 er ":
        case "arj-21 700 er ":
        case "arj-21-700 er ":
        case "arj-21700 er ":
        case "arj21 700 er ":
        case "arj21-700 er ":
        case "arj21700 er ":
        case "arj 21 7 er ":
        case "arj 21-7 er ":
        case "arj 217 er ":
        case "arj-21 7 er ":
        case "arj-21-7 er ":
        case "arj-217 er ":
        case "arj21 7 er ":
        case "arj21-7 er ":
        case "arj217 er ":
        case "id151":
        speed = 930; cap = 78; rwy = 7800; mC = 60542; range = 3700;
        fConsmp = 10.3; cConsmp = 0.12; mH = 510; price = 1513551;
        n = "ARJ21-700ER"; c = 9; pc = "comac"
        break;

        case "c919":
        case "c-919":
        case "c 919":
        case "919":
        case "c919 ":
        case "c-919 ":
        case "c 919 ":
        case "919 ":
        case "fake a320":
        case "fake a320 ":
        case "id152":
        speed = 980; cap = 168; rwy = 5200; mC = 619186; range = 5555;
        fConsmp = 11.44; cConsmp = 0.12; mH = 400; price = 6517748;
        n = "C919"; c = 9; pc = "c919"
        break;

        //EMBRAER
        case "phenom 100":
        case "phenom-100":
        case "phenom100":
        case "phenom 100 ":
        case "phenom-100":
        case "phenom100 ":
        case "id153":
        speed = 708; cap = 4; rwy = 2000; mC = 1900; range = 2182;
        fConsmp = 7.2; cConsmp = 0.1; mH = 490; price = 68000
        n = "Phenom 100"; c = 10; pc = "phenom100"
        break;

        case "emb 121 xingu i":
        case "emb 121 xingu-i":
        case "emb 121 xingui":
        case "emb 121-xingu i":
        case "emb 121-xingu-i":
        case "emb 121-xingui":
        case "emb 121xingu i":
        case "emb 121xingu-i":
        case "emb 121xingui":
        case "emb 121 xingu 1":
        case "emb 121 xingu-1":
        case "emb 121 xingu1":
        case "emb 121-xingu 1":
        case "emb 121-xingu-1":
        case "emb 121-xingu1":
        case "emb 121xingu 1":
        case "emb 121xingu-1":
        case "emb 121xingu1":
        case "emb-121 xingu i":
        case "emb-121 xingu-i":
        case "emb-121 xingui":
        case "emb-121-xingu i":
        case "emb-121-xingu-i":
        case "emb-121-xingui":
        case "emb-121xingu i":
        case "emb-121xingu-i":
        case "emb-121xingui":
        case "emb-121 xingu 1":
        case "emb-121 xingu-1":
        case "emb-121 xingu1":
        case "emb-121-xingu 1":
        case "emb-121-xingu-1":
        case "emb-121-xingu1":
        case "emb-121xingu 1":
        case "emb-121xingu-1":
        case "emb-121xingu1":
        case "emb121 xingu i":
        case "emb121 xingu-i":
        case "emb121 xingui":
        case "emb121-xingu i":
        case "emb121-xingu-i":
        case "emb121-xingui":
        case "emb121xingu i":
        case "emb121xingu-i":
        case "emb121xingui":
        case "emb121 xingu 1":
        case "emb121 xingu-1":
        case "emb121 xingu1":
        case "emb121-xingu 1":
        case "emb121-xingu-1":
        case "emb121-xingu1":
        case "emb121xingu 1":
        case "emb121xingu-1":
        case "emb121xingu1":
        case "xingu-i":
        case "xingu i":
        case "xingui":
        case "xingu-1":
        case "xingu 1":
        case "xingu1":
        case "emb 121":
        case "emb-121":
        case "emb121":
        case "emb xingu i":
        case "emb xingu-i":
        case "emb xingui":
        case "emb xingu 1":
        case "emb xingu-1":
        case "emb xingu1":
        case "emb-xingu i":
        case "emb-xingu-i":
        case "emb-xingui":
        case "emb-xingu 1":
        case "emb-xingu-1":
        case "emb-xingu1":
        case "embxingu i":
        case "embxingu-i":
        case "embxingui":
        case "embxingu 1":
        case "embxingu-1":
        case "embxingu1":
        case "emb 121 xingu i ":
        case "emb 121 xingu-i ":
        case "emb 121 xingui ":
        case "emb 121-xingu i ":
        case "emb 121-xingu-i ":
        case "emb 121-xingui ":
        case "emb 121xingu i ":
        case "emb 121xingu-i ":
        case "emb 121xingui ":
        case "emb 121 xingu 1 ":
        case "emb 121 xingu-1 ":
        case "emb 121 xingu1 ":
        case "emb 121-xingu 1 ":
        case "emb 121-xingu-1 ":
        case "emb 121-xingu1 ":
        case "emb 121xingu 1 ":
        case "emb 121xingu-1 ":
        case "emb 121xingu1 ":
        case "emb-121 xingu i ":
        case "emb-121 xingu-i ":
        case "emb-121 xingui ":
        case "emb-121-xingu i ":
        case "emb-121-xingu-i ":
        case "emb-121-xingui ":
        case "emb-121xingu i ":
        case "emb-121xingu-i ":
        case "emb-121xingui ":
        case "emb-121 xingu 1 ":
        case "emb-121 xingu-1 ":
        case "emb-121 xingu1 ":
        case "emb-121-xingu 1 ":
        case "emb-121-xingu-1 ":
        case "emb-121-xingu1 ":
        case "emb-121xingu 1 ":
        case "emb-121xingu-1 ":
        case "emb-121xingu1 ":
        case "emb121 xingu i ":
        case "emb121 xingu-i ":
        case "emb121 xingui ":
        case "emb121-xingu i ":
        case "emb121-xingu-i ":
        case "emb121-xingui ":
        case "emb121xingu i ":
        case "emb121xingu-i ":
        case "emb121xingui ":
        case "emb121 xingu 1 ":
        case "emb121 xingu-1 ":
        case "emb121 xingu1 ":
        case "emb121-xingu 1 ":
        case "emb121-xingu-1 ":
        case "emb121-xingu1 ":
        case "emb121xingu 1 ":
        case "emb121xingu-1 ":
        case "emb121xingu1 ":
        case "xingu-i ":
        case "xingu i ":
        case "xingui ":
        case "xingu-1 ":
        case "xingu 1 ":
        case "xingu1 ":
        case "emb 121 ":
        case "emb-121 ":
        case "emb121 ":
        case "emb xingu i ":
        case "emb xingu-i ":
        case "emb xingui ":
        case "emb xingu 1 ":
        case "emb xingu-1 ":
        case "emb xingu1 ":
        case "emb-xingu i ":
        case "emb-xingu-i ":
        case "emb-xingui ":
        case "emb-xingu 1 ":
        case "emb-xingu-1 ":
        case "emb-xingu1 ":
        case "embxingu i ":
        case "embxingu-i ":
        case "embxingui ":
        case "embxingu 1 ":
        case "embxingu-1 ":
        case "embxingu1 ":
        case "id154":
        speed = 329; cap = 5; rwy = 2000; mC = 6588; range = 2352;
        fConsmp = 7.76; cConsmp = 0.1; mH = 350; price = 85000
        n = "EMB 121 Xingu I"; c = 10; pc = "embx"
        break;

        case "phenom 300":
        case "phenom-300":
        case "phenom300":
        case "phenom 300 ":
        case "phenom-300":
        case "phenom300 ":
        case "id155":
        speed = 851; cap = 6; rwy = 2000; mC = 3658; range = 3334
        fConsmp = 8.72; cConsmp = 0.1; mH = 460; price = 102000
        n = "Phenom 300"; c = 10; pc = "phenom100"
        break;

        case "legacy 450":
        case "legacy450":
        case "legacy-450":
        case "legacy 450 ":
        case "legacy450 ":
        case "legacy-450 ":
        case "id156":
        speed = 837; cap = 7; rwy = 2000; mC = 4420; range = 4260
        fConsmp = 7.6; cConsmp = 0.1; mH = 520; price = 110501;
        n = "Legacy 450"; c = 10; pc = "legacy600"
        break;

        case "legacy 500":
        case "legacy500":
        case "legacy-500":
        case "legacy 500 ":
        case "legacy500 ":
        case "legacy-500 ":
        case "id157":
        speed = 837; cap = 8; rwy = 2000; mC = 5124; range = 5186
        fConsmp = 7.6; cConsmp = 0.1; mH = 510; price = 128115
        n = "Legacy 500"; c = 10; pc = "legacy600"
        break;

        case "emb 120":
        case "emb120":
        case "emb-120":
        case "emb 120 ":
        case "emb120 ":
        case "emb-120":
        case "id158":
        speed = 574; cap = 30; rwy = 2000; mC = 22854; range = 1481
        fConsmp = 14.98; cConsmp = 0.18; mH = 390; price = 134440
        n = "EMB 120"; c = 10; pc = "em120"
        break;

        case "praetor 500":
        case "praetor-500":
        case "praetor500":
        case "praetor 500 ":
        case "praetor-500 ":
        case "praetor500 ":
        case "id159":
        speed = 837; cap = 7; rwy = 2000; mC = 34216; range = 6186
        fConsmp = 7.6; cConsmp = 0.11; mH = 400; price = 198115
        n = "Praetor 500"; c = 10; pc = "legacy600"
        break;

        case "praetor 600":
        case "praetor-600":
        case "praetor600":
        case "praetor 600 ":
        case "praetor-600 ":
        case "praetor600 ":
        case "id160":
        speed = 794; cap = 8; rwy = 2000; mC = 34216; range = 7441
        fConsmp = 8; cConsmp = 0.12; mH = 400; price = 218115
        n = "Praetor 600"; c = 10; pc = "legacy600"
        break;

        case "erj 135 er":
        case "erj 135-er":
        case "erj 135er":
        case "erj-135 er":
        case "erj-135-er":
        case "erj-135er":
        case "erj135 er":
        case "erj135-er":
        case "erj135er":
        case "erj 135 er ":
        case "erj 135-er ":
        case "erj 135er ":
        case "erj-135 er ":
        case "erj-135-er ":
        case "erj-135er ":
        case "erj135 er ":
        case "erj135-er ":
        case "erj135er ":
        case "id170":
        speed = 910; cap = 37; rwy = 2000; mC = 38784; range = 2650;
        fConsmp = 9.54; cConsmp = 0.11; mH = 460; price = 352585
        n = "ERJ 135ER"; c = 10; pc = "emb145"
        break;

        case "legacy 600":
        case "legacy600":
        case "legacy-600":
        case "legacy 600 ":
        case "legacy600 ":
        case "legacy-600 ":
        case "id171":
        speed = 784; cap = 13; rwy = 2000; mC = 34216; range = 6060;
        fConsmp = 8; cConsmp = 0.1; mH = 490; price = 360159
        n = "Legacy 600"; c = 10; pc = "legacy600"
        break;

        case "lineage 1000":
        case "lineage1000":
        case "lineage-1000":
        case "lineage 1000 ":
        case "lineage1000 ":
        case "lineage-1000 ":
        case "id172":
        speed = 924; cap = 19; rwy = 2000; mC = 19292; range = 8344
        fConsmp = 10.9; cConsmp = 0.12; mH = 470; price = 385854
        n = "Lineage 1000"; c = 10; pc = "lineage"
        break;

        case "erj 135 lr":
        case "erj 135-lr":
        case "erj 135lr":
        case "erj-135 lr":
        case "erj-135-lr":
        case "erj-135lr":
        case "erj135 lr":
        case "erj135-lr":
        case "erj135lr":
        case "erj 135 lr ":
        case "erj 135-lr ":
        case "erj 135lr ":
        case "erj-135 lr ":
        case "erj-135-lr ":
        case "erj-135lr ":
        case "erj135 lr ":
        case "erj135-lr ":
        case "erj135lr ":
        case "id173":
        speed = 910; cap = 37; rwy = 2000; mC = 48014; range = 3138
        fConsmp = 7.42; cConsmp = 0.09; mH = 450; price = 417514
        n = "ERJ 135LR"; c = 10; pc = "emb145"
        break;

        case "erj 145 er":
        case "erj 145-er":
        case "erj 145er":
        case "erj-145 er":
        case "erj-145-er":
        case "erj-145er":
        case "erj145 er":
        case "erj145-er":
        case "erj145er":
        case "erj 145 er ":
        case "erj 145-er ":
        case "erj 145er ":
        case "erj-145 er ":
        case "erj-145-er ":
        case "erj-145er ":
        case "erj145 er ":
        case "erj145-er ":
        case "erj145er ":
        case "id174":
        speed = 866; cap = 50; rwy = 2000; mC = 48652; range = 2445;
        fConsmp = 7.35; cConsmp = 0.09; mH = 450; price = 442288
        n = "ERJ 145ER"; c = 10; pc = "emb145"
        break;

        case "erj 140 lr":
        case "erj 140-lr":
        case "erj 140lr":
        case "erj-140 lr":
        case "erj-140-lr":
        case "erj-140lr":
        case "erj140 lr":
        case "erj140-lr":
        case "erj140lr":
        case "erj 140 lr ":
        case "erj 140-lr ":
        case "erj 140lr ":
        case "erj-140 lr ":
        case "erj-140-lr ":
        case "erj-140lr ":
        case "erj140 lr ":
        case "erj140-lr ":
        case "erj140lr ":
        case "id175":
        speed = 910; cap = 44; rwy = 2000; mC = 52544; range = 3019
        fConsmp = 7.42; cConsmp = 0.09; mH = 450; price = 477675
        n = "ERJ 140LR"; c = 10; pc = "emb145"
        break;

        case "erj 145 lr":
        case "erj 145-lr":
        case "erj 145lr":
        case "erj-145 lr":
        case "erj-145-lr":
        case "erj-145lr":
        case "erj145 lr":
        case "erj145-lr":
        case "erj145lr":
        case "erj 145 lr ":
        case "erj 145-lr ":
        case "erj 145lr ":
        case "erj-145 lr ":
        case "erj-145-lr ":
        case "erj-145lr ":
        case "erj145 lr ":
        case "erj145-lr ":
        case "erj145lr ":
        case "id176":
        speed = 883; cap = 50; rwy = 2000; mC = 59704; range = 2870
        fConsmp = 7.14; cConsmp = 0.09; mH = 460; price = 519169
        n = "ERJ 145LR"; c = 10; pc = "emb145"
        break;

        case "erj 145 xr":
        case "erj 145-xr":
        case "erj 145xr":
        case "erj-145 xr":
        case "erj-145-xr":
        case "erj-145xr":
        case "erj145 xr":
        case "erj145-xr":
        case "erj145xr":
        case "erj 145 xr ":
        case "erj 145-xr ":
        case "erj 145xr ":
        case "erj-145 xr ":
        case "erj-145-xr ":
        case "erj-145xr ":
        case "erj145 xr ":
        case "erj145-xr ":
        case "erj145xr ":
        case "id177":
        speed = 909; cap = 50; rwy = 2000; mC = 124214; range = 3705
        fConsmp = 5.15; cConsmp = 0.06; mH = 490; price = 1129212
        n = "ERJ 145XR"; c = 10; pc = "emb145"
        break;

        case "erj 190-200":
        case "erj 190200":
        case "erj 190 200":
        case "erj-190-200":
        case "erj-190200":
        case "erj-190 200":
        case "erj190-200":
        case "erj190200":
        case "erj190 200":
        case "erj 192":
        case "erj-192":
        case "erj192":
        case "erj 190-200 ":
        case "erj 190200 ":
        case "erj 190 200 ":
        case "erj-190-200 ":
        case "erj-190200 ":
        case "erj-190 200 ":
        case "erj190-200 ":
        case "erj190200 ":
        case "erj190 200 ":
        case "erj 192 ":
        case "erj-192 ":
        case "erj192 ":
        case "id178":
        speed = 870; cap = 122; rwy = 2000; mC = 119890; range = 2593
        fConsmp = 10.1; cConsmp = 0.12; mH = 500; price = 1598528
        n = "ERJ 190-200"; c = 10; pc = "erj190-100"
        break;

        case "erj 170-200":
        case "erj 170200":
        case "erj 170 200":
        case "erj-170-200":
        case "erj-170200":
        case "erj-170 200":
        case "erj170-200":
        case "erj170200":
        case "erj170 200":
        case "erj 172":
        case "erj-172":
        case "erj172":
        case "erj 170-200 ":
        case "erj 170200 ":
        case "erj 170 200 ":
        case "erj-170-200 ":
        case "erj-170200 ":
        case "erj-170 200 ":
        case "erj170-200 ":
        case "erj170200 ":
        case "erj170 200 ":
        case "erj 172 ":
        case "erj-172 ":
        case "erj172 ":
        case "id179":
        speed = 891; cap = 88; rwy = 2000; mC = 138754; range = 3334
        fConsmp = 9.54; cConsmp = 0.11; mH = 470; price = 1734433
        n = "ERJ 170-200"; c = 10; pc = "emb175"
        break;

        case "erj 170-100":
        case "erj 170100":
        case "erj 170 100":
        case "erj-170-100":
        case "erj-170100":
        case "erj-170 100":
        case "erj170-100":
        case "erj170100":
        case "erj170 100":
        case "erj 171":
        case "erj-171":
        case "erj171":
        case "erj 170-100 ":
        case "erj 170100 ":
        case "erj 170 100 ":
        case "erj-170-100 ":
        case "erj-170100 ":
        case "erj-170 100 ":
        case "erj170-100 ":
        case "erj170100 ":
        case "erj170 100 ":
        case "erj 171 ":
        case "erj-171 ":
        case "erj171 ":
        case "id180":
        speed = 891; cap = 80; rwy = 2000; mC = 156362; range = 3334
        fConsmp = 8.48; cConsmp = 0.1; mH = 460; price = 1839550
        n = "ERJ 170-100"; c = 10; pc = "emb175"
        break;

        case "erj 190-100":
        case "erj 190100":
        case "erj 190 100":
        case "erj-190-100":
        case "erj-190100":
        case "erj-190 100":
        case "erj190-100":
        case "erj190100":
        case "erj190 100":
        case "erj 191":
        case "erj-191":
        case "erj191":
        case "erj 190-100 ":
        case "erj 190100 ":
        case "erj 190 100 ":
        case "erj-190-100 ":
        case "erj-190100 ":
        case "erj-190 100 ":
        case "erj190-100 ":
        case "erj190100 ":
        case "erj190 100 ":
        case "erj 191 ":
        case "erj-191 ":
        case "erj191 ":
        case "id181":
        speed = 870; cap = 110; rwy = 2000; mC = 129722; range = 3334
        fConsmp = 10.1; cConsmp = 0.12; mH = 470; price = 1853174
        n = "ERJ 190-100"; c = 10; pc = "erj190-100"
        break;

        case "erj 170-200lr":
        case "erj 170200lr":
        case "erj 170 200lr":
        case "erj-170-200lr":
        case "erj-170200lr":
        case "erj-170 200lr":
        case "erj170-200lr":
        case "erj170200lr":
        case "erj170 200lr":
        case "erj 172lr":
        case "erj-172lr":
        case "erj172lr":
        case "erj 170-200-lr":
        case "erj 170200-lr":
        case "erj 170 200-lr":
        case "erj-170-200-lr":
        case "erj-170200-lr":
        case "erj-170 200-lr":
        case "erj170-200-lr":
        case "erj170200-lr":
        case "erj170 200-lr":
        case "erj 172-lr":
        case "erj-172-lr":
        case "erj172-lr":
        case "erj 170-200 lr":
        case "erj 170200 lr":
        case "erj 170 200 lr":
        case "erj-170-200 lr":
        case "erj-170200 lr":
        case "erj-170 200 lr":
        case "erj170-200 lr":
        case "erj170200 lr":
        case "erj170 200 lr":
        case "erj 172 lr":
        case "erj-172 lr":
        case "erj172 lr":
        case "erj 170-200lr ":
        case "erj 170200lr ":
        case "erj 170 200lr ":
        case "erj-170-200lr ":
        case "erj-170200lr ":
        case "erj-170 200lr ":
        case "erj170-200lr ":
        case "erj170200lr ":
        case "erj170 200lr ":
        case "erj 172lr ":
        case "erj-172lr ":
        case "erj172lr ":
        case "erj 170-200-lr ":
        case "erj 170200-lr ":
        case "erj 170 200-lr ":
        case "erj-170-200-lr ":
        case "erj-170200-lr ":
        case "erj-170 200-lr ":
        case "erj170-200-lr ":
        case "erj170200-lr ":
        case "erj170 200-lr ":
        case "erj 172-lr ":
        case "erj-172-lr ":
        case "erj172-lr ":
        case "erj 170-200 lr ":
        case "erj 170200 lr ":
        case "erj 170 200 lr ":
        case "erj-170-200 lr ":
        case "erj-170200 lr ":
        case "erj-170 200 lr ":
        case "erj170-200 lr ":
        case "erj170200 lr ":
        case "erj170 200 lr ":
        case "erj 172 lr ":
        case "erj-172 lr ":
        case "erj172 lr ":
        case "id182":
        speed = 891; cap = 88; rwy = 2000; mC = 161852; range = 3889
        fConsmp = 9.54; cConsmp = 0.11; mH = 470; price = 2023158
        n = "ERJ 170-200LR"; c = 10; pc = "emb175"
        break;

        case "erj 190-200lr":
        case "erj 190200lr":
        case "erj 190 200lr":
        case "erj-190-200lr":
        case "erj-190200lr":
        case "erj-190 200lr":
        case "erj190-200lr":
        case "erj190200lr":
        case "erj190 200lr":
        case "erj 192lr":
        case "erj-192lr":
        case "erj192lr":
        case "erj 190-200-lr":
        case "erj 190200-lr":
        case "erj 190 200-lr":
        case "erj-190-200-lr":
        case "erj-190200-lr":
        case "erj-190 200-lr":
        case "erj190-200-lr":
        case "erj190200-lr":
        case "erj190 200-lr":
        case "erj 192-lr":
        case "erj-192-lr":
        case "erj192-lr":
        case "erj 190-200 lr":
        case "erj 190200 lr":
        case "erj 190 200 lr":
        case "erj-190-200 lr":
        case "erj-190200 lr":
        case "erj-190 200 lr":
        case "erj190-200 lr":
        case "erj190200 lr":
        case "erj190 200 lr":
        case "erj 192 lr":
        case "erj-192 lr":
        case "erj192 lr":
        case "erj 190-200lr ":
        case "erj 190200lr ":
        case "erj 190 200lr ":
        case "erj-190-200lr ":
        case "erj-190200lr ":
        case "erj-190 200lr ":
        case "erj190-200lr ":
        case "erj190200lr ":
        case "erj190 200lr ":
        case "erj 192lr ":
        case "erj-192lr ":
        case "erj192lr ":
        case "erj 190-200-lr ":
        case "erj 190200-lr ":
        case "erj 190 200-lr ":
        case "erj-190-200-lr ":
        case "erj-190200-lr ":
        case "erj-190 200-lr ":
        case "erj190-200-lr ":
        case "erj190200-lr ":
        case "erj190 200-lr ":
        case "erj 192-lr ":
        case "erj-192-lr ":
        case "erj192-lr ":
        case "erj 190-200 lr ":
        case "erj 190200 lr ":
        case "erj 190 200 lr ":
        case "erj-190-200 lr ":
        case "erj-190200 lr ":
        case "erj-190 200 lr ":
        case "erj190-200 lr ":
        case "erj190200 lr ":
        case "erj190 200 lr ":
        case "erj 192 lr ":
        case "erj-192 lr ":
        case "erj192 lr ":
        case "id192":
        speed = 870; cap = 122; rwy = 2000; mC = 123320; range = 3334
        fConsmp = 10.1; cConsmp = 0.12; mH = 490; price = 2055338
        n = "ERJ 190-200LR"; c = 10; pc = "erj190-100"
        break;

        case "erj 170-100lr":
        case "erj 170100lr":
        case "erj 170 100lr":
        case "erj-170-100lr":
        case "erj-170100lr":
        case "erj-170 100lr":
        case "erj170-100lr":
        case "erj170100lr":
        case "erj170 100lr":
        case "erj 171lr":
        case "erj-171lr":
        case "erj171lr":
        case "erj 170-100-lr":
        case "erj 170100-lr":
        case "erj 170 100-lr":
        case "erj-170-100-lr":
        case "erj-170100-lr":
        case "erj-170 100-lr":
        case "erj170-100-lr":
        case "erj170100-lr":
        case "erj170 100-lr":
        case "erj 171-lr":
        case "erj-171-lr":
        case "erj171-lr":
        case "erj 170-100 lr":
        case "erj 170100 lr":
        case "erj 170 100 lr":
        case "erj-170-100 lr":
        case "erj-170100 lr":
        case "erj-170 100 lr":
        case "erj170-100 lr":
        case "erj170100 lr":
        case "erj170 100 lr":
        case "erj 171 lr":
        case "erj-171 lr":
        case "erj171 lr":
        case "erj 170-100lr ":
        case "erj 170100lr ":
        case "erj 170 100lr ":
        case "erj-170-100lr ":
        case "erj-170100lr ":
        case "erj-170 100lr ":
        case "erj170-100lr ":
        case "erj170100lr ":
        case "erj170 100lr ":
        case "erj 171lr ":
        case "erj-171lr ":
        case "erj171lr ":
        case "erj 170-100-lr ":
        case "erj 170100-lr ":
        case "erj 170 100-lr ":
        case "erj-170-100-lr ":
        case "erj-170100-lr ":
        case "erj-170 100-lr ":
        case "erj170-100-lr ":
        case "erj170100-lr ":
        case "erj170 100-lr ":
        case "erj 171-lr ":
        case "erj-171-lr ":
        case "erj171-lr ":
        case "erj 170-100 lr ":
        case "erj 170100 lr ":
        case "erj 170 100 lr ":
        case "erj-170-100 lr ":
        case "erj-170100 lr ":
        case "erj-170 100 lr ":
        case "erj170-100 lr ":
        case "erj170100 lr ":
        case "erj170 100 lr ":
        case "erj 171 lr ":
        case "erj-171 lr ":
        case "erj171 lr ":
        case "id193":
        speed = 891; cap = 80; rwy = 2000; mC = 160934; range = 3889
        fConsmp = 8.48; cConsmp = 0.1; mH = 470; price = 2145774
        n = "ERJ 170-100LR"; c = 10; pc = "emb175"
        break;

        case "erj 170-200ar":
        case "erj 170200ar":
        case "erj 170 200ar":
        case "erj-170-200ar":
        case "erj-170200ar":
        case "erj-170 200ar":
        case "erj170-200ar":
        case "erj170200ar":
        case "erj170 200ar":
        case "erj 172ar":
        case "erj-172ar":
        case "erj172ar":
        case "erj 170-200-ar":
        case "erj 170200-ar":
        case "erj 170 200-ar":
        case "erj-170-200-ar":
        case "erj-170200-ar":
        case "erj-170 200-ar":
        case "erj170-200-ar":
        case "erj170200-ar":
        case "erj170 200-ar":
        case "erj 172-ar":
        case "erj-172-ar":
        case "erj172-ar":
        case "erj 170-200 ar":
        case "erj 170200 ar":
        case "erj 170 200 ar":
        case "erj-170-200 ar":
        case "erj-170200 ar":
        case "erj-170 200 ar":
        case "erj170-200 ar":
        case "erj170200 ar":
        case "erj170 200 ar":
        case "erj 172 ar":
        case "erj-172 ar":
        case "erj172 ar":
        case "erj 170-200ar ":
        case "erj 170200ar ":
        case "erj 170 200ar ":
        case "erj-170-200ar ":
        case "erj-170200ar ":
        case "erj-170 200ar ":
        case "erj170-200ar ":
        case "erj170200ar ":
        case "erj170 200ar ":
        case "erj 172ar ":
        case "erj-172ar ":
        case "erj172ar ":
        case "erj 170-200-ar ":
        case "erj 170200-ar ":
        case "erj 170 200-ar ":
        case "erj-170-200-ar ":
        case "erj-170200-ar ":
        case "erj-170 200-ar ":
        case "erj170-200-ar ":
        case "erj170200-ar ":
        case "erj170 200-ar ":
        case "erj 172-ar ":
        case "erj-172-ar ":
        case "erj172-ar ":
        case "erj 170-200 ar ":
        case "erj 170200 ar ":
        case "erj 170 200 ar ":
        case "erj-170-200 ar ":
        case "erj-170200 ar ":
        case "erj-170 200 ar ":
        case "erj170-200 ar ":
        case "erj170200 ar ":
        case "erj170 200 ar ":
        case "erj 172 ar ":
        case "erj-172 ar ":
        case "erj172 ar ":
        case "id194":
        speed = 891; cap = 85; rwy = 2000; mC = 162946; range = 3706
        fConsmp = 8.48; cConsmp = 0.1; mH = 460; price = 2172603
        n = "ERJ 170-200AR"; c = 10; pc = "emb175"
        break;

        case "erj 190-100lr":
        case "erj 190100lr":
        case "erj 190 100lr":
        case "erj-190-100lr":
        case "erj-190100lr":
        case "erj-190 100lr":
        case "erj190-100lr":
        case "erj190100lr":
        case "erj190 100lr":
        case "erj 191lr":
        case "erj-191lr":
        case "erj191lr":
        case "erj 190-100-lr":
        case "erj 190100-lr":
        case "erj 190 100-lr":
        case "erj-190-100-lr":
        case "erj-190100-lr":
        case "erj-190 100-lr":
        case "erj190-100-lr":
        case "erj190100-lr":
        case "erj190 100-lr":
        case "erj 191-lr":
        case "erj-191-lr":
        case "erj191-lr":
        case "erj 190-100 lr":
        case "erj 190100 lr":
        case "erj 190 100 lr":
        case "erj-190-100 lr":
        case "erj-190100 lr":
        case "erj-190 100 lr":
        case "erj190-100 lr":
        case "erj190100 lr":
        case "erj190 100 lr":
        case "erj 191 lr":
        case "erj-191 lr":
        case "erj191 lr":
        case "erj 190-100lr ":
        case "erj 190100lr ":
        case "erj 190 100lr ":
        case "erj-190-100lr ":
        case "erj-190100lr ":
        case "erj-190 100lr ":
        case "erj190-100lr ":
        case "erj190100lr ":
        case "erj190 100lr ":
        case "erj 191lr ":
        case "erj-191lr ":
        case "erj191lr ":
        case "erj 190-100-lr ":
        case "erj 190100-lr ":
        case "erj 190 100-lr ":
        case "erj-190-100-lr ":
        case "erj-190100-lr ":
        case "erj-190 100-lr ":
        case "erj190-100-lr ":
        case "erj190100-lr ":
        case "erj190 100-lr ":
        case "erj 191-lr ":
        case "erj-191-lr ":
        case "erj191-lr ":
        case "erj 190-100 lr ":
        case "erj 190100 lr ":
        case "erj 190 100 lr ":
        case "erj-190-100 lr ":
        case "erj-190100 lr ":
        case "erj-190 100 lr ":
        case "erj190-100 lr ":
        case "erj190100 lr ":
        case "erj190 100 lr ":
        case "erj 191 lr ":
        case "erj-191 lr ":
        case "erj191 lr ":
        case "id195":
        speed = 870; cap = 110; rwy = 2000; mC = 153912; range = 4260
        fConsmp = 10.1; cConsmp = 0.12; mH = 490; price = 2367883
        n = "ERJ 190-100LR"; c = 10; pc = "erj190-100"
        break;

        case "erj 190-100ar":
        case "erj 190100ar":
        case "erj 190 100ar":
        case "erj-190-100ar":
        case "erj-190100ar":
        case "erj-190 100ar":
        case "erj190-100ar":
        case "erj190100ar":
        case "erj190 100ar":
        case "erj 191ar":
        case "erj-191ar":
        case "erj191ar":
        case "erj 190-100-ar":
        case "erj 190100-ar":
        case "erj 190 100-ar":
        case "erj-190-100-ar":
        case "erj-190100-ar":
        case "erj-190 100-ar":
        case "erj190-100-ar":
        case "erj190100-ar":
        case "erj190 100-ar":
        case "erj 191-ar":
        case "erj-191-ar":
        case "erj191-ar":
        case "erj 190-100 ar":
        case "erj 190100 ar":
        case "erj 190 100 ar":
        case "erj-190-100 ar":
        case "erj-190100 ar":
        case "erj-190 100 ar":
        case "erj190-100 ar":
        case "erj190100 ar":
        case "erj190 100 ar":
        case "erj 191 ar":
        case "erj-191 ar":
        case "erj191 ar":
        case "erj 190-100ar ":
        case "erj 190100ar ":
        case "erj 190 100ar ":
        case "erj-190-100ar ":
        case "erj-190100ar ":
        case "erj-190 100ar ":
        case "erj190-100ar ":
        case "erj190100ar ":
        case "erj190 100ar ":
        case "erj 191ar ":
        case "erj-191ar ":
        case "erj191ar ":
        case "erj 190-100-ar ":
        case "erj 190100-ar ":
        case "erj 190 100-ar ":
        case "erj-190-100-ar ":
        case "erj-190100-ar ":
        case "erj-190 100-ar ":
        case "erj190-100-ar ":
        case "erj190100-ar ":
        case "erj190 100-ar ":
        case "erj 191-ar ":
        case "erj-191-ar ":
        case "erj191-ar ":
        case "erj 190-100 ar ":
        case "erj 190100 ar ":
        case "erj 190 100 ar ":
        case "erj-190-100 ar ":
        case "erj-190100 ar ":
        case "erj-190 100 ar ":
        case "erj190-100 ar ":
        case "erj190100 ar ":
        case "erj190 100 ar ":
        case "erj 191 ar ":
        case "erj-191 ar ":
        case "erj191 ar ":
        case "id196":
        speed = 870; cap = 110; rwy = 2000; mC = 173066; range = 4448
        fConsmp = 10.1; cConsmp = 0.12; mH = 490; price = 2472381
        n = "ERJ 190-100AR"; c = 10; pc = "erj190-100"
        break;

        case "erj 170-100ar":
        case "erj 170100ar":
        case "erj 170 100ar":
        case "erj-170-100ar":
        case "erj-170100ar":
        case "erj-170 100ar":
        case "erj170-100ar":
        case "erj170100ar":
        case "erj170 100ar":
        case "erj 171ar":
        case "erj-171ar":
        case "erj171ar":
        case "erj 170-100-ar":
        case "erj 170100-ar":
        case "erj 170 100-ar":
        case "erj-170-100-ar":
        case "erj-170100-ar":
        case "erj-170 100-ar":
        case "erj170-100-ar":
        case "erj170100-ar":
        case "erj170 100-ar":
        case "erj 171-ar":
        case "erj-171-ar":
        case "erj171-ar":
        case "erj 170-100 ar":
        case "erj 170100 ar":
        case "erj 170 100 ar":
        case "erj-170-100 ar":
        case "erj-170100 ar":
        case "erj-170 100 ar":
        case "erj170-100 ar":
        case "erj170100 ar":
        case "erj170 100 ar":
        case "erj 171 ar":
        case "erj-171 ar":
        case "erj171 ar":
        case "erj 170-100ar ":
        case "erj 170100ar ":
        case "erj 170 100ar ":
        case "erj-170-100ar ":
        case "erj-170100ar ":
        case "erj-170 100ar ":
        case "erj170-100ar ":
        case "erj170100ar ":
        case "erj170 100ar ":
        case "erj 171ar ":
        case "erj-171ar ":
        case "erj171ar ":
        case "erj 170-100-ar ":
        case "erj 170100-ar ":
        case "erj 170 100-ar ":
        case "erj-170-100-ar ":
        case "erj-170100-ar ":
        case "erj-170 100-ar ":
        case "erj170-100-ar ":
        case "erj170100-ar ":
        case "erj170 100-ar ":
        case "erj 171-ar ":
        case "erj-171-ar ":
        case "erj171-ar ":
        case "erj 170-100 ar ":
        case "erj 170100 ar ":
        case "erj 170 100 ar ":
        case "erj-170-100 ar ":
        case "erj-170100 ar ":
        case "erj-170 100 ar ":
        case "erj170-100 ar ":
        case "erj170100 ar ":
        case "erj170 100 ar ":
        case "erj 171 ar ":
        case "erj-171 ar ":
        case "erj171 ar ":
        case "id197":
        speed = 891; cap = 78; rwy = 2000; mC = 138188; range = 3892;
        fConsmp = 7.42; cConsmp = 0.09; mH = 500; price = 2512492
        n = "ERJ 170-100AR"; c = 10; pc = "emb175"
        break;

        case "erj 190-200ar":
        case "erj 190200ar":
        case "erj 190 200ar":
        case "erj-190-200ar":
        case "erj-190200ar":
        case "erj-190 200ar":
        case "erj190-200ar":
        case "erj190200ar":
        case "erj190 200ar":
        case "erj 192ar":
        case "erj-192ar":
        case "erj192ar":
        case "erj 190-200-ar":
        case "erj 190200-ar":
        case "erj 190 200-ar":
        case "erj-190-200-ar":
        case "erj-190200-ar":
        case "erj-190 200-ar":
        case "erj190-200-ar":
        case "erj190200-ar":
        case "erj190 200-ar":
        case "erj 192-ar":
        case "erj-192-ar":
        case "erj192-ar":
        case "erj 190-200 ar":
        case "erj 190200 ar":
        case "erj 190 200 ar":
        case "erj-190-200 ar":
        case "erj-190200 ar":
        case "erj-190 200 ar":
        case "erj190-200 ar":
        case "erj190200 ar":
        case "erj190 200 ar":
        case "erj 192 ar":
        case "erj-192 ar":
        case "erj192 ar":
        case "erj 190-200ar ":
        case "erj 190200ar ":
        case "erj 190 200ar ":
        case "erj-190-200ar ":
        case "erj-190200ar ":
        case "erj-190 200ar ":
        case "erj190-200ar ":
        case "erj190200ar ":
        case "erj190 200ar ":
        case "erj 192ar ":
        case "erj-192ar ":
        case "erj192ar ":
        case "erj 190-200-ar ":
        case "erj 190200-ar ":
        case "erj 190 200-ar ":
        case "erj-190-200-ar ":
        case "erj-190200-ar ":
        case "erj-190 200-ar ":
        case "erj190-200-ar ":
        case "erj190200-ar ":
        case "erj190 200-ar ":
        case "erj 192-ar ":
        case "erj-192-ar ":
        case "erj192-ar ":
        case "erj 190-200 ar ":
        case "erj 190200 ar ":
        case "erj 190 200 ar ":
        case "erj-190-200 ar ":
        case "erj-190200 ar ":
        case "erj-190 200 ar ":
        case "erj190-200 ar ":
        case "erj190200 ar ":
        case "erj190 200 ar ":
        case "erj 192 ar ":
        case "erj-192 ar ":
        case "erj192 ar ":
        case "id198":
        speed = 870; cap = 120; rwy = 2000; mC = 169520; range = 4077
        fConsmp = 9.09; cConsmp = 0.11; mH = 500; price = 2825347
        n = "ERJ 190-200AR"; c = 10; pc = "erj190-100"
        break;

        case "e-175-e-2":
        case "e-175-e2":
        case "e-175-e 2":
        case "e-175 e-2":
        case "e-175 e2":
        case "e-175 e 2":
        case "e-175e-2":
        case "e-175e2":
        case "e-175e 2":
        case "e 175-e-2":
        case "e 175-e2":
        case "e 175-e 2":
        case "e 175 e-2":
        case "e 175 e2":
        case "e 175 e 2":
        case "e 175e-2":
        case "e 175e2":
        case "e 175e 2":
        case "e175-e-2":
        case "e175-e2":
        case "e175-e 2":
        case "e175 e-2":
        case "e175 e2":
        case "e175 e 2":
        case "e175e-2":
        case "e175e2":
        case "e175e 2":
        case "e-175-e-2 ":
        case "e-175-e2 ":
        case "e-175-e 2 ":
        case "e-175 e-2 ":
        case "e-175 e2 ":
        case "e-175 e 2 ":
        case "e-175e-2 ":
        case "e-175e2 ":
        case "e-175e 2 ":
        case "e 175-e-2 ":
        case "e 175-e2 ":
        case "e 175-e 2 ":
        case "e 175 e-2 ":
        case "e 175 e2 ":
        case "e 175 e 2 ":
        case "e 175e-2 ":
        case "e 175e2 ":
        case "e 175e 2 ":
        case "e175-e-2 ":
        case "e175-e2 ":
        case "e175-e 2 ":
        case "e175 e-2 ":
        case "e175 e2 ":
        case "e175 e 2 ":
        case "e175e-2 ":
        case "e175e2 ":
        case "e175e 2 ":
        case "id199":
        speed = 966; cap = 80; rwy = 4265; mC = 127902; range = 3820;
        fConsmp = 11.33; cConsmp = 0.14; mH = 500; price = 3197562
        n = "E175 E2"; c = 10; pc = "e175"
        break;

        case "e-190-e-2":
        case "e-190-e2":
        case "e-190-e 2":
        case "e-190 e-2":
        case "e-190 e2":
        case "e-190 e 2":
        case "e-190e-2":
        case "e-190e2":
        case "e-190e 2":
        case "e 190-e-2":
        case "e 190-e2":
        case "e 190-e 2":
        case "e 190 e-2":
        case "e 190 e2":
        case "e 190 e 2":
        case "e 190e-2":
        case "e 190e2":
        case "e 190e 2":
        case "e190-e-2":
        case "e190-e2":
        case "e190-e 2":
        case "e190 e-2":
        case "e190 e2":
        case "e190 e 2":
        case "e190e-2":
        case "e190e2":
        case "e190e 2":
        case "e-190-e-2 ":
        case "e-190-e2 ":
        case "e-190-e 2 ":
        case "e-190 e-2 ":
        case "e-190 e2 ":
        case "e-190 e 2 ":
        case "e-190e-2 ":
        case "e-190e2 ":
        case "e-190e 2 ":
        case "e 190-e-2 ":
        case "e 190-e2 ":
        case "e 190-e 2 ":
        case "e 190 e-2 ":
        case "e 190 e2 ":
        case "e 190 e 2 ":
        case "e 190e-2 ":
        case "e 190e2 ":
        case "e 190e 2 ":
        case "e190-e-2 ":
        case "e190-e2 ":
        case "e190-e 2 ":
        case "e190 e-2 ":
        case "e190 e2 ":
        case "e190 e 2 ":
        case "e190e-2 ":
        case "e190e2 ":
        case "e190e 2 ":
        case "id200":
        speed = 931; cap = 97; rwy = 4314; mC = 135502; range = 3820;
        fConsmp = 11.77; cConsmp = 0.14; mH = 510; price = 3387562
        n = "E190 E2"; c = 10; pc = "e190"
        break;

        case "e-195-e-2":
        case "e-195-e2":
        case "e-195-e 2":
        case "e-195 e-2":
        case "e-195 e2":
        case "e-195 e 2":
        case "e-195e-2":
        case "e-195e2":
        case "e-195e 2":
        case "e 195-e-2":
        case "e 195-e2":
        case "e 195-e 2":
        case "e 195 e-2":
        case "e 195 e2":
        case "e 195 e 2":
        case "e 195e-2":
        case "e 195e2":
        case "e 195e 2":
        case "e195-e-2":
        case "e195-e2":
        case "e195-e 2":
        case "e195 e-2":
        case "e195 e2":
        case "e195 e 2":
        case "e195e-2":
        case "e195e2":
        case "e195e 2":
        case "e-195-e-2 ":
        case "e-195-e2 ":
        case "e-195-e 2 ":
        case "e-195 e-2 ":
        case "e-195 e2 ":
        case "e-195 e 2 ":
        case "e-195e-2 ":
        case "e-195e2 ":
        case "e-195e 2 ":
        case "e 195-e-2 ":
        case "e 195-e2 ":
        case "e 195-e 2 ":
        case "e 195 e-2 ":
        case "e 195 e2 ":
        case "e 195 e 2 ":
        case "e 195e-2 ":
        case "e 195e2 ":
        case "e 195e 2 ":
        case "e195-e-2 ":
        case "e195-e2 ":
        case "e195-e 2 ":
        case "e195 e-2 ":
        case "e195 e2 ":
        case "e195 e 2 ":
        case "e195e-2 ":
        case "e195e2 ":
        case "e195e 2 ":
        case "id201":
        speed = 931; cap = 120; rwy = 4593; mC = 168672; range = 3820
        fConsmp = 13.91; cConsmp = 0.16; mH = 550; price = 4216798
        n = "E195 E2"; c = 10; pc = "e195"
        break;

        //FOKKER
        case "f-27-600":
        case "f-27600":
        case "f-27 600":
        case "f 27-600":
        case "f 27600":
        case "f 27 600":
        case "f27-600":
        case "f27600":
        case "f27 600":
        case "f-27-6":
        case "f-276":
        case "f-27 6":
        case "f 27-6":
        case "f 276":
        case "f 27 6":
        case "f27-6":
        case "f276":
        case "f27 6":
        case "f-27-600 ":
        case "f-27600 ":
        case "f-27 600 ":
        case "f 27-600 ":
        case "f 27600 ":
        case "f 27 600 ":
        case "f27-600 ":
        case "f27600 ":
        case "f27 600 ":
        case "f-27-6 ":
        case "f-276 ":
        case "f-27 6 ":
        case "f 27-6 ":
        case "f 276 ":
        case "f 27 6 ":
        case "f27-6 ":
        case "f276 ":
        case "f27 6 ":
        case "id202":
        speed = 392; cap = 44; rwy = 2000; mC = 33266; range = 1890;
        fConsmp = 14.72; cConsmp = 0.2; mH = 350; price = 127943
        n = "F27-600"; c = 11; pc = "f27"
        break;

        case "f-27-200":
        case "f-27200":
        case "f-27 200":
        case "f 27-200":
        case "f 27200":
        case "f 27 200":
        case "f27-200":
        case "f27200":
        case "f27 200":
        case "f-27-2":
        case "f-272":
        case "f-27 2":
        case "f 27-2":
        case "f 272":
        case "f 27 2":
        case "f27-2":
        case "f272":
        case "f27 2":
        case "f-27-200 ":
        case "f-27200 ":
        case "f-27 200 ":
        case "f 27-200 ":
        case "f 27200 ":
        case "f 27 200 ":
        case "f27-200 ":
        case "f27200 ":
        case "f27 200 ":
        case "f-27-2 ":
        case "f-272 ":
        case "f-27 2 ":
        case "f 27-2 ":
        case "f 272 ":
        case "f 27 2 ":
        case "f27-2 ":
        case "f272 ":
        case "f27 2 ":
        case "id203":
        speed = 451; cap = 40; rwy = 2000; mC = 40542; range = 1926
        fConsmp = 16; cConsmp = 0.2; mH = 350; price = 135138
        n = "F27-200"; c = 11; pc = "f27"
        break;

        case "f-27-500":
        case "f-27500":
        case "f-27 500":
        case "f 27-500":
        case "f 27500":
        case "f 27 500":
        case "f27-500":
        case "f27500":
        case "f27 500":
        case "f-27-5":
        case "f-275":
        case "f-27 5":
        case "f 27-5":
        case "f 275":
        case "f 27 5":
        case "f27-5":
        case "f275":
        case "f27 5":
        case "f-27-500 ":
        case "f-27500 ":
        case "f-27 500 ":
        case "f 27-500 ":
        case "f 27500 ":
        case "f 27 500 ":
        case "f27-500 ":
        case "f27500 ":
        case "f27 500 ":
        case "f-27-5 ":
        case "f-275 ":
        case "f-27 5 ":
        case "f 27-5 ":
        case "f 275 ":
        case "f 27 5 ":
        case "f27-5 ":
        case "f275 ":
        case "f27 5 ":
        case "id204":
        speed = 575; cap = 52; rwy = 2000; mC = 87398; range = 1826
        fConsmp = 18.53; cConsmp = 0.21; mH = 380; price = 336145
        n = "F27-500"; c = 11; pc = "f27"
        break;

        case "f-28-1000":
        case "f-281000":
        case "f-28 1000":
        case "f 28-1000":
        case "f 281000":
        case "f 28 1000":
        case "f28-1000":
        case "f281000":
        case "f28 1000":
        case "f-28-10":
        case "f-2810":
        case "f-28 10":
        case "f 28-10":
        case "f 2810":
        case "f 28 10":
        case "f28-10":
        case "f2810":
        case "f28 10":
        case "f-28-1":
        case "f-281":
        case "f-28 1":
        case "f 28-1":
        case "f 281":
        case "f 28 1":
        case "f28-1":
        case "f281":
        case "f28 1":
        case "f-28-1000 ":
        case "f-281000 ":
        case "f-28 1000 ":
        case "f 28-1000 ":
        case "f 281000 ":
        case "f 28 1000 ":
        case "f28-1000 ":
        case "f281000 ":
        case "f28 1000 ":
        case "f-28-10 ":
        case "f-2810 ":
        case "f-28 10 ":
        case "f 28-10 ":
        case "f 2810 ":
        case "f 28 10 ":
        case "f28-10 ":
        case "f2810 ":
        case "f28 10 ":
        case "f-28-1 ":
        case "f-281 ":
        case "f-28 1 ":
        case "f 28-1 ":
        case "f 281 ":
        case "f 28 1 ":
        case "f28-1 ":
        case "f281 ":
        case "f28 1 ":
        case "id205":
        speed = 908; cap = 65; rwy = 2000; mC = 165004; range = 2000
        fConsmp = 10.2; cConsmp = 0.12; mH = 330; price = 660013
        n = "F28-1000"; c = 11; pc = "f28"
        break;

        case "f-27-400":
        case "f-27400":
        case "f-27 400":
        case "f 27-400":
        case "f 27400":
        case "f 27 400":
        case "f27-400":
        case "f27400":
        case "f27 400":
        case "f-27-4":
        case "f-274":
        case "f-27 4":
        case "f 27-4":
        case "f 274":
        case "f 27 4":
        case "f27-4":
        case "f274":
        case "f27 4":
        case "f-27-400 ":
        case "f-27400 ":
        case "f-27 400 ":
        case "f 27-400 ":
        case "f 27400 ":
        case "f 27 400 ":
        case "f27-400 ":
        case "f27400 ":
        case "f27 400 ":
        case "f-27-4 ":
        case "f-274 ":
        case "f-27 4 ":
        case "f 27-4 ":
        case "f 274 ":
        case "f 27 4 ":
        case "f27-4 ":
        case "f274 ":
        case "f27 4 ":
        case "id206":
        speed = 412; cap = 40; range = 2000; mC = 26246; range = 1468
        fConsmp = 17.1; cConsmp = 0.24; mH = 360; price = 680000
        n = "F27-400"; c = 11; pc = "f27"
        break;

        case "f-28-6000":
        case "f-286000":
        case "f-28 6000":
        case "f 28-6000":
        case "f 286000":
        case "f 28 6000":
        case "f28-6000":
        case "f286000":
        case "f28 6000":
        case "f-28-60":
        case "f-2860":
        case "f-28 60":
        case "f 28-60":
        case "f 2860":
        case "f 28 60":
        case "f28-60":
        case "f2860":
        case "f28 60":
        case "f-28-6":
        case "f-286":
        case "f-28 6":
        case "f 28-6":
        case "f 286":
        case "f 28 6":
        case "f28-6":
        case "f286":
        case "f28 6":
        case "f-28-6000 ":
        case "f-286000 ":
        case "f-28 6000 ":
        case "f 28-6000 ":
        case "f 286000 ":
        case "f 28 6000 ":
        case "f28-6000 ":
        case "f286000 ":
        case "f28 6000 ":
        case "f-28-60 ":
        case "f-2860 ":
        case "f-28 60 ":
        case "f 28-60 ":
        case "f 2860 ":
        case "f 28 60 ":
        case "f28-60 ":
        case "f2860 ":
        case "f28 60 ":
        case "f-28-6 ":
        case "f-286 ":
        case "f-28 6 ":
        case "f 28-6 ":
        case "f 286 ":
        case "f 28 6 ":
        case "f28-6 ":
        case "f286 ":
        case "f28 6 ":
        case "id207":
        speed = 767; cap = 85; rwy = 2000; mC = 155544; range = 1650;
        fConsmp = 9.1; cConsmp = 0.12; mH = 400; price = 707020
        n = "F28-600"; c = 11; pc = "f28"
        break;

        case "f-28-3000":
        case "f-283000":
        case "f-28 3000":
        case "f 28-3000":
        case "f 283000":
        case "f 28 3000":
        case "f28-3000":
        case "f283000":
        case "f28 3000":
        case "f-28-30":
        case "f-2830":
        case "f-28 30":
        case "f 28-30":
        case "f 2830":
        case "f 28 30":
        case "f28-30":
        case "f2830":
        case "f28 30":
        case "f-28-3":
        case "f-283":
        case "f-28 3":
        case "f 28-3":
        case "f 283":
        case "f 28 3":
        case "f28-3":
        case "f283":
        case "f28 3":
        case "f-28-3000 ":
        case "f-283000 ":
        case "f-28 3000 ":
        case "f 28-3000 ":
        case "f 283000 ":
        case "f 28 3000 ":
        case "f28-3000 ":
        case "f283000 ":
        case "f28 3000 ":
        case "f-28-30 ":
        case "f-2830 ":
        case "f-28 30 ":
        case "f 28-30 ":
        case "f 2830 ":
        case "f 28 30 ":
        case "f28-30 ":
        case "f2830 ":
        case "f28 30 ":
        case "f-28-3 ":
        case "f-283 ":
        case "f-28 3 ":
        case "f 28-3 ":
        case "f 283 ":
        case "f 28 3 ":
        case "f28-3 ":
        case "f283 ":
        case "f28 3 ":
        case "id208":
        speed = 902; cap = 65; rwy = 2000; mC = 170766; range = 1900
        fConsmp = 9.18; cConsmp = 0.11; mH = 390; price = 711521
        n = "F28-3000"; c = 11; pc = "f28"
        break;

        case "fokker50":
        case "fokker-50":
        case "fokker 50":
        case "f50":
        case "f-50":
        case "f 50":
        case "fokker50 ":
        case "fokker-50 ":
        case "fokker 50 ":
        case "f50 ":
        case "f-50 ":
        case "f 50 ":
        case "id209":
        speed = 624; cap = 58; rwy = 2000; mC = 114954; range = 2055;
        fConsmp = 6.79; cConsmp = 0.09; mH = 380; price = 718458
        n = "F-50"; c = 11; pc = "f50"
        break;

        case "fokker70":
        case "fokker-70":
        case "fokker 70":
        case "f70":
        case "f-70":
        case "f 70":
        case "fokker70 ":
        case "fokker-70 ":
        case "fokker 70 ":
        case "f70 ":
        case "f-70 ":
        case "f 70 ":
        case "id210":
        speed = 817; cap = 70; rwy = 2000; mC = 87014; range = 9.45
        fConsmp = 9.45; cConsmp = 0.11; mH = 490; price = 725120
        n = "F-70"; c = 11; pc = "f70"
        break;

        case "f-27-100":
        case "f-27100":
        case "f-27 100":
        case "f 27-100":
        case "f 27100":
        case "f 27 100":
        case "f27-100":
        case "f27100":
        case "f27 100":
        case "f-27-1":
        case "f-271":
        case "f-27 1":
        case "f 27-1":
        case "f 271":
        case "f 27 1":
        case "f27-1":
        case "f271":
        case "f27 1":
        case "f-27-100 ":
        case "f-27100 ":
        case "f-27 100 ":
        case "f 27-100 ":
        case "f 27100 ":
        case "f 27 100 ":
        case "f27-100 ":
        case "f27100 ":
        case "f27 100 ":
        case "f-27-1 ":
        case "f-271 ":
        case "f-27 1 ":
        case "f 27-1 ":
        case "f 271 ":
        case "f 27 1 ":
        case "f27-1 ":
        case "f271 ":
        case "f27 1 ":
        case "id211":
        speed = 494; cap = 44; rwy = 2000; mC = 26968; range = 1315
        fConsmp = 20.33; cConsmp = 0.24; mH = 360; price = 748000
        n = "F27-100"; c = 11; pc = "f27"
        break;

        case "f-28-4000":
        case "f-284000":
        case "f-28 4000":
        case "f 28-4000":
        case "f 284000":
        case "f 28 4000":
        case "f28-4000":
        case "f284000":
        case "f28 4000":
        case "f-28-40":
        case "f-2840":
        case "f-28 40":
        case "f 28-40":
        case "f 2840":
        case "f 28 40":
        case "f28-40":
        case "f2840":
        case "f28 40":
        case "f-28-4":
        case "f-284":
        case "f-28 4":
        case "f 28-4":
        case "f 284":
        case "f 28 4":
        case "f28-4":
        case "f284":
        case "f28 4":
        case "f-28-4000 ":
        case "f-284000 ":
        case "f-28 4000 ":
        case "f 28-4000 ":
        case "f 284000 ":
        case "f 28 4000 ":
        case "f28-4000 ":
        case "f284000 ":
        case "f28 4000 ":
        case "f-28-40 ":
        case "f-2840 ":
        case "f-28 40 ":
        case "f 28-40 ":
        case "f 2840 ":
        case "f 28 40 ":
        case "f28-40 ":
        case "f2840 ":
        case "f28 40 ":
        case "f-28-4 ":
        case "f-284 ":
        case "f-28 4 ":
        case "f 28-4 ":
        case "f 284 ":
        case "f 28 4 ":
        case "f28-4 ":
        case "f284 ":
        case "f28 4 ":
        case "id212":
        speed = 944; cap = 85; rwy = 2000; mC = 175040; range = 1900
        fConsmp = 10.4; cConsmp = 0.12; mH = 350; price = 814144
        n = "F28-4000"; c = 11; pc = "f28"
        break;

        case "fokker70a":
        case "fokker-70a":
        case "fokker 70a":
        case "f70a":
        case "f-70a":
        case "f 70a":
        case "fokker70-a":
        case "fokker-70-a":
        case "fokker 70-a":
        case "f70-a":
        case "f-70-a":
        case "f 70-a":
        case "fokker70a ":
        case "fokker-70a ":
        case "fokker 70a ":
        case "f70a ":
        case "f-70a ":
        case "f 70a ":
        case "fokker70-a ":
        case "fokker-70-a ":
        case "fokker 70-a ":
        case "f70-a ":
        case "f-70-a ":
        case "f 70-a ":
        case "id213":
        speed = 817; cap = 80; rwy = 2000; mC = 103588; range = 2040
        fConsmp = 9.45; cConsmp = 0.11; mH = 490; price = 828709
        n = "F-70A"; c = 11; pc = "f70"
        break;

        case "fokker100":
        case "fokker-100":
        case "fokker 100":
        case "f100":
        case "f-100":
        case "f 100":
        case "fokker100 ":
        case "fokker-100 ":
        case "fokker 100 ":
        case "f100 ":
        case "f-100 ":
        case "f 100 ":
        case "id214":
        speed = 695; cap = 122; rwy = 6000; mC = 81822; range = 4300
        fConsmp = 20.68; cConsmp = 0.16; mH = 400; price = 861279
        n = "F-100"; c = 11; pc = "f100"
        break;

        case "f-28-2000":
        case "f-282000":
        case "f-28 2000":
        case "f 28-2000":
        case "f 282000":
        case "f 28 2000":
        case "f28-2000":
        case "f282000":
        case "f28 2000":
        case "f-28-20":
        case "f-2820":
        case "f-28 20":
        case "f 28-20":
        case "f 2820":
        case "f 28 20":
        case "f28-20":
        case "f2820":
        case "f28 20":
        case "f-28-2":
        case "f-282":
        case "f-28 2":
        case "f 28-2":
        case "f 282":
        case "f 28 2":
        case "f28-2":
        case "f282":
        case "f28 2":
        case "f-28-2000 ":
        case "f-282000 ":
        case "f-28 2000 ":
        case "f 28-2000 ":
        case "f 282000 ":
        case "f 28 2000 ":
        case "f28-2000 ":
        case "f282000 ":
        case "f28 2000 ":
        case "f-28-20 ":
        case "f-2820 ":
        case "f-28 20 ":
        case "f 28-20 ":
        case "f 2820 ":
        case "f 28 20 ":
        case "f28-20 ":
        case "f2820 ":
        case "f28 20 ":
        case "f-28-2 ":
        case "f-282 ":
        case "f-28 2 ":
        case "f 28-2 ":
        case "f 282 ":
        case "f 28 2 ":
        case "f28-2 ":
        case "f282 ":
        case "f28 2 ":
        case "id215":
        speed = 908; cap = 79; rwy = 2000; mC = 264042; range = 2743;
        fConsmp = 10.2; cConsmp = 0.12; mH = 350; price  = 1100175
        n = "F28-2000"; c = 11; pc = "f28"
        break;

        //ILYUSHIN
        case "il-114":
        case "il114":
        case "il 114":
        case "il-114 ":
        case "il114 ":
        case "il 114 ":
        case "id216":
        speed = 490; cap = 64; rwy = 2000; mC = 36996; range = 1000;
        fConsmp = 13.95; cConsmp = 0.19; mH = 470; price = 255147;
        n = "IL-114"; c = 12; pc = "Il-114"
        break;

        case "il 114 100":
        case "il 114-100":
        case "il 114100":
        case "il-114 100":
        case "il-114-100":
        case "il-114100":
        case "il114 100":
        case "il114-100":
        case "il114100":
        case "il 114 100 ":
        case "il 114-100 ":
        case "il 114100 ":
        case "il-114 100 ":
        case "il-114-100 ":
        case "il-114100 ":
        case "il114 100 ":
        case "il114-100 ":
        case "il114100 ":
        case "id217":
        speed = 465; cap = 64; rwy = 2000; mC = 40186; range = 2000;
        fConsmp = 9.6; cConsmp = 0.12; mH = 470; price = 382720;
        n = "IL-114-100"; c = 12; pc = "Il-114"
        break;

        case "il 14 p":
        case "il 14-p":
        case "il 14p":
        case "il-14 p":
        case "il-14-p":
        case "il-14p":
        case "il14 p":
        case "il14-p":
        case "il14p":
        case "il 14 p ":
        case "il 14-p ":
        case "il 14p ":
        case "il-14 p ":
        case "il-14-p ":
        case "il-14p ":
        case "il14 p ":
        case "il14-p ":
        case "il14p ":
        case "id218":
        speed = 339; cap = 24; rwy = 2000; mC = 15962; range = 1750;
        fConsmp = 18.54; cConsmp = 0.22; mH = 360; price = 408000;
        n = "IL-14P"; c = 12;; pc = "il14"
        break;

        case "il 114 300":
        case "il 114-300":
        case "il 114300":
        case "il-114 300":
        case "il-114-300":
        case "il-114300":
        case "il114 300":
        case "il114-300":
        case "il114300":
        case "il 114 300 ":
        case "il 114-300 ":
        case "il 114300 ":
        case "il-114 300 ":
        case "il-114-300 ":
        case "il-114300 ":
        case "il114 300 ":
        case "il114-300 ":
        case "il114300 ":
        case "id219":
        speed = 485; cap = 52; rwy = 2000; mC = 63124; range = 2100;
        fConsmp = 7.68; cConsmp = 0.1; mH = 480; price = 435344;
        n = "IL-114-300"; c = 12; pc = "Il-114"
        break;

        case "il 14 m":
        case "il 14-m":
        case "il 14m":
        case "il-14 m":
        case "il-14-m":
        case "il-14m":
        case "il14 m":
        case "il14-m":
        case "il14m":
        case "il 14 m ":
        case "il 14-m ":
        case "il 14m ":
        case "il-14 m ":
        case "il-14-m ":
        case "il-14m ":
        case "il14 m ":
        case "il14-m ":
        case "il14m ":
        case "id220":
        speed = 339; cap = 36; rwy = 2000; mC = 23208; range = 1750; fConsmp = 18.54;
        cConsmp = 0.22; mH = 320; price = 612000;
        n = "IL-14M"; c = 12;; pc = "Il-114"
        break;

        case "il 18 b":
        case "il 18-b":
        case "il 18b":
        case "il-18 b":
        case "il-18-b":
        case "il-18b":
        case "il18 b":
        case "il18-b":
        case "il18b":
        case "il 18 b ":
        case "il 18-b ":
        case "il 18b ":
        case "il-18 b ":
        case "il-18-b ":
        case "il-18b ":
        case "il18 b ":
        case "il18-b ":
        case "il18b ":
        case "id221":
        speed = 576; cap = 84; rwy = 2000; mC = 234400; range = 2560;
        fConsmp = 9.6; cConsmp = 0.12; mH = 320; price = 756132;
        n = "IL-18B"; c = 12; pc = "il18"
        break;

        case "il 18 a":
        case "il 18-a":
        case "il 18a":
        case "il-18 a":
        case "il-18-a":
        case "il-18a":
        case "il18 a":
        case "il18-a":
        case "il18a":
        case "il 18 a ":
        case "il 18-a ":
        case "il 18a ":
        case "il-18 a ":
        case "il-18-a ":
        case "il-18a ":
        case "il18 a ":
        case "il18-a ":
        case "il18a ":
        case "id222":
        speed = 564; cap = 75; rwy = 2000; mC = 239184; range = 2560;
        fConsmp = 8.28; cConsmp = 0.11; mH = 360; price = 771564;
        n = "IL-18A"; c = 12; pc = "il18"
        break;

        case "il 18 v":
        case "il 18-v":
        case "il 18v":
        case "il-18 v":
        case "il-18-v":
        case "il-18v":
        case "il18 v":
        case "il18-v":
        case "il18v":
        case "il 18 v ":
        case "il 18-v ":
        case "il 18v ":
        case "il-18 v ":
        case "il-18-v ":
        case "il-18v ":
        case "il18 v ":
        case "il18-v ":
        case "il18v ":
        case "id223":
        speed = 589; cap = 90; rwy = 2000; mC = 297078; range = 3100;
        fConsmp = 9.4; cConsmp = 0.12; mH = 320; price = 1024410;
        n = "IL-18V"; c = 12; pc = il18
        break;

        case "il 18 i":
        case "il 18-i":
        case "il 18i":
        case "il-18 i":
        case "il-18-i":
        case "il-18i":
        case "il18 i":
        case "il18-i":
        case "il18i":
        case "il 18 i ":
        case "il 18-i ":
        case "il 18i ":
        case "il-18 i ":
        case "il-18-i ":
        case "il-18i ":
        case "il18 i ":
        case "il18-i ":
        case "il18i ":
        case "id224":
        speed = 580; cap = 122; rwy = 2000; mC = 392620; range = 3100;
        fConsmp = 10.78; cConsmp = 0.14; mH = 350; price = 1266516;
        n = "IL-18I"; c = 12; pc = "il18"
        break;

        case "il 18 d":
        case "il 18-d":
        case "il 18d":
        case "il-18 d":
        case "il-18-d":
        case "il-18d":
        case "il18 d":
        case "il18-d":
        case "il18d":
        case "il 18 d ":
        case "il 18-d ":
        case "il 18d ":
        case "il-18 d ":
        case "il-18-d ":
        case "il-18d ":
        case "il18 d ":
        case "il18-d ":
        case "il18d ":
        case "id225":
        speed = 580; cap = 100; rwy = 2000; mC = 417596; range = 6500;
        fConsmp = 10.78; cConsmp = 0.14; mH = 380; price = 14399984;
        n = "IL-18D"; c = 12; pc = "il18"
        break;

        case "il-62":
        case "il62":
        case "il 62":
        case "il-62 ":
        case "il62 ":
        case "il 62 ":
        case "id226":
        speed = 893; cap = 186; rwy = 2000; mC = 1638650; range = 7550;
        fConsmp = 18.02; cConsmp = 0.21; mH = 380; price = 6302498;
        n = "IL-62"; c = 12; pc = "il62"
        break;

        case "il-62m":
        case "il62m":
        case "il 62m":
        case "il-62-m":
        case "il62-m":
        case "il 62-m":
        case "il-62 m":
        case "il62 m":
        case "il 62 m":
        case "il-62m ":
        case "il62m ":
        case "il 62m ":
        case "il-62-m":
        case "il62-m":
        case "il 62-m":
        case "il-62 m":
        case "il62 m":
        case "il 62 m":
        case "id227":
        speed = 932; cap = 168; rwy = 2000; mC = 1695666; range = 8850;
        fConsmp = 16.32; cConsmp = 0.2; mH = 390; price = 7065274;
        n = "IL-62M"; c = 12; pc = "il62"
        break;

        case "il-62mk":
        case "il62mk":
        case "il 62mk":
        case "il-62-mk":
        case "il62-mk":
        case "il 62-mk":
        case "il-62 mk":
        case "il62 mk":
        case "il 62 mk":
        case "il-62mk ":
        case "il62mk ":
        case "il 62mk ":
        case "il-62-mk ":
        case "il62-mk ":
        case "il 62-mk ":
        case "il-62 mk ":
        case "il62 mk ":
        case "il 62 mk ":
        case "id228":
        speed = 944; cap = 195; rwy = 2000; mC = 1681948; range = 10000;
        fConsmp = 18.36; cConsmp = 0.22; mH = 340; price = 8204625;
        n = "IL-62MK"; c = 12; pc = "il62"
        break;
        
        case "il 96 300":
        case "il 96-300":
        case "il 96300":
        case "il-96 300":
        case "il-96-300":
        case "il-96300":
        case "il96 300":
        case "il96-300":
        case "il96300":
        case "il 96 3":
        case "il 96-3":
        case "il 963":
        case "il-96 3":
        case "il-96-3":
        case "il-963":
        case "il96 3":
        case "il96-3":
        case "il963":
        case "il 96 300 ":
        case "il 96-300 ":
        case "il 96300 ":
        case "il-96 300 ":
        case "il-96-300 ":
        case "il-96300 ":
        case "il96 300 ":
        case "il96-300 ":
        case "il96300 ":
        case "il 96 3 ":
        case "il 96-3 ":
        case "il 963 ":
        case "il-96 3 ":
        case "il-96-3 ":
        case "il-963 ":
        case "il96 3 ":
        case "il96-3 ":
        case "il963 ":
        case "id229":
        speed = 833; cap = 300; rwy = 2000; mC = 4909006; range = 11500;
        fConsmp = 23.52; cConsmp = 0.19; mH = 370; price = 31671000;
        n = "IL-96-300"; c = 12; pc = "il96"
        break;

        case "il 96 400":
        case "il 96-400":
        case "il 96400":
        case "il-96 400":
        case "il-96-400":
        case "il-96400":
        case "il96 400":
        case "il96-400":
        case "il96400":
        case "il 96 4":
        case "il 96-4":
        case "il 964":
        case "il-96 4":
        case "il-96-4":
        case "il-964":
        case "il96 4":
        case "il96-4":
        case "il964":
        case "il 96 400 ":
        case "il 96-400 ":
        case "il 96400 ":
        case "il-96 400 ":
        case "il-96-400 ":
        case "il-96400 ":
        case "il96 400 ":
        case "il96-400 ":
        case "il96400 ":
        case "il 96 4 ":
        case "il 96-4 ":
        case "il 964 ":
        case "il-96 4 ":
        case "il-96-4 ":
        case "il-964 ":
        case "il96 4 ":
        case "il96-4 ":
        case "il964 ":
        case "big russian gas guzzler":
        case "big russian gas guzzler":
        case "id230":
        speed = 809; cap = 436; rwy = 2000; mC = 4448548; range = 10000;
        fConsmp = 27.72; cConsmp = 0.18; mH = 460; price = 40441348;
        n = "IL-96-400"; c = 12; pc = "il96"
        break;

        case "il 96 m":
        case "il 96-m":
        case "il 96m":
        case "il-96 m":
        case "il-96-m":
        case "il-96m":
        case "il96 m":
        case "il96-m":
        case "il96m":
        case "il 96 m ":
        case "il 96-m ":
        case "il 96m ":
        case "il-96 m ":
        case "il-96-m ":
        case "il-96m ":
        case "il96 m ":
        case "il96-m ":
        case "il96m ":
        case "id231":
        speed = 842; cap = 370; rwy = 2000; mC = 6044438; range = 12800;
        fConsmp = 24.96; cConsmp = 0.19; mH = 460; price = 46495680;
        n = "IL-96M"; c = 12; pc = "il96"
        break;

        //LOCKHEED
        case "l 1329 jetstar":
        case "l 1329-jetstar":
        case "l 1329jetstar":
        case "l-1329 jetstar":
        case "l-1329-jetstar":
        case "l-1329jetstar":
        case "l1329 jetstar":
        case "l1329-jetstar":
        case "l1329jetstar":
        case "l-1329":
        case "l1329":
        case "l 1329":
        case "jetstar":
        case "l 1329 jetstar ":
        case "l 1329-jetstar ":
        case "l 1329jetstar ":
        case "l-1329 jetstar ":
        case "l-1329-jetstar ":
        case "l-1329jetstar ":
        case "l1329 jetstar ":
        case "l1329-jetstar ":
        case "l1329jetstar ":
        case "l-1329 ":
        case "l1329 ":
        case "l 1329 ":
        case "jetstar ":
        case "id232":
        speed = 957; cap = 10; rwy = 2000; mC = 40960; range = 4585;
        fConsmp = 9.09; cConsmp = 0.11; mH = 320; price = 132130;
        n = "L-1329 JetStar"; c = 13; pc = "jetstar"
        break;

        case "l 188 electra":
        case "l 188-electra":
        case "l 188electra":
        case "l-188 electra":
        case "l-188-electra":
        case "l-188electra":
        case "l188 electra":
        case "l188-electra":
        case "l188electra":
        case "l 188":
        case "l-188":
        case "l188":
        case "electra":
        case "l 188 electra ":
        case "l 188-electra ":
        case "l 188electra ":
        case "l-188 electra ":
        case "l-188-electra ":
        case "l-188electra ":
        case "l188 electra ":
        case "l188-electra ":
        case "l188electra ":
        case "l 188 ":
        case "l-188 ":
        case "l188 ":
        case "electra ":
        case "id233":
        speed = 593; cap = 127; rwy = 2000; mC = 372726; range = 3450;
        fConsmp = 12.48; cConsmp = 0.16; mH = 390; price = 1242421;
        n = "L-188 Electra"; c = 13; pc = "elektra"
        break;

        case "l 1049 g super constellation":
        case "l 1049 g super-constellation":
        case "l 1049 g superconstellation":
        case "l 1049 g-super constellation":
        case "l 1049 g-super-constellation":
        case "l 1049 g-superconstellation":
        case "l 1049 gsuper constellation":
        case "l 1049 gsuper-constellation":
        case "l 1049 gsuperconstellation":
        case "l 1049-g super constellation":
        case "l 1049-g super-constellation":
        case "l 1049-g superconstellation":
        case "l 1049-g-super constellation":
        case "l 1049-g-super-constellation":
        case "l 1049-g-superconstellation":
        case "l 1049-gsuper constellation":
        case "l 1049-gsuper-constellation":
        case "l 1049-gsuperconstellation":
        case "l 1049g super constellation":
        case "l 1049g super-constellation":
        case "l 1049g superconstellation":
        case "l 1049g-super constellation":
        case "l 1049g-super-constellation":
        case "l 1049g-superconstellation":
        case "l 1049gsuper constellation":
        case "l 1049gsuper-constellation":
        case "l 1049gsuperconstellation":
        case "l-1049 g super constellation":
        case "l-1049 g super-constellation":
        case "l-1049 g superconstellation":
        case "l-1049 g-super constellation":
        case "l-1049 g-super-constellation":
        case "l-1049 g-superconstellation":
        case "l-1049 gsuper constellation":
        case "l-1049 gsuper-constellation":
        case "l-1049 gsuperconstellation":
        case "l-1049-g super constellation":
        case "l-1049-g super-constellation":
        case "l-1049-g superconstellation":
        case "l-1049-g-super constellation":
        case "l-1049-g-super-constellation":
        case "l-1049-g-superconstellation":
        case "l-1049-gsuper constellation":
        case "l-1049-gsuper-constellation":
        case "l-1049-gsuperconstellation":
        case "l-1049g super constellation":
        case "l-1049g super-constellation":
        case "l-1049g superconstellation":
        case "l-1049g-super constellation":
        case "l-1049g-super-constellation":
        case "l-1049g-superconstellation":
        case "l-1049gsuper constellation":
        case "l-1049gsuper-constellation":
        case "l-1049gsuperconstellation":
        case "l1049 g super constellation":
        case "l1049 g super-constellation":
        case "l1049 g superconstellation":
        case "l1049 g-super constellation":
        case "l1049 g-super-constellation":
        case "l1049 g-superconstellation":
        case "l1049 gsuper constellation":
        case "l1049 gsuper-constellation":
        case "l1049 gsuperconstellation":
        case "l1049-g super constellation":
        case "l1049-g super-constellation":
        case "l1049-g superconstellation":
        case "l1049-g-super constellation":
        case "l1049-g-super-constellation":
        case "l1049-g-superconstellation":
        case "l1049-gsuper constellation":
        case "l1049-gsuper-constellation":
        case "l1049-gsuperconstellation":
        case "l1049g super constellation":
        case "l1049g super-constellation":
        case "l1049g superconstellation":
        case "l1049g-super constellation":
        case "l1049g-super-constellation":
        case "l1049g-superconstellation":
        case "l1049gsuper constellation":
        case "l1049gsuper-constellation":
        case "l1049gsuperconstellation":
        case "l 1049 g":
        case "l 1049-g":
        case "l 1049g":
        case "l-1049 g":
        case "l-1049-g":
        case "l-1049g":
        case "l1049 g":
        case "l1049-g":
        case "l1049g":
        case "super constellation":
        case "super-constellation":
        case "superconstellation":
        case "l 1049 g super constellation ":
        case "l 1049 g super-constellation ":
        case "l 1049 g superconstellation ":
        case "l 1049 g-super constellation ":
        case "l 1049 g-super-constellation ":
        case "l 1049 g-superconstellation ":
        case "l 1049 gsuper constellation ":
        case "l 1049 gsuper-constellation ":
        case "l 1049 gsuperconstellation ":
        case "l 1049-g super constellation ":
        case "l 1049-g super-constellation ":
        case "l 1049-g superconstellation ":
        case "l 1049-g-super constellation ":
        case "l 1049-g-super-constellation ":
        case "l 1049-g-superconstellation ":
        case "l 1049-gsuper constellation ":
        case "l 1049-gsuper-constellation ":
        case "l 1049-gsuperconstellation ":
        case "l 1049g super constellation ":
        case "l 1049g super-constellation ":
        case "l 1049g superconstellation ":
        case "l 1049g-super constellation ":
        case "l 1049g-super-constellation ":
        case "l 1049g-superconstellation ":
        case "l 1049gsuper constellation ":
        case "l 1049gsuper-constellation ":
        case "l 1049gsuperconstellation ":
        case "l-1049 g super constellation ":
        case "l-1049 g super-constellation ":
        case "l-1049 g superconstellation ":
        case "l-1049 g-super constellation ":
        case "l-1049 g-super-constellation ":
        case "l-1049 g-superconstellation ":
        case "l-1049 gsuper constellation ":
        case "l-1049 gsuper-constellation ":
        case "l-1049 gsuperconstellation ":
        case "l-1049-g super constellation ":
        case "l-1049-g super-constellation ":
        case "l-1049-g superconstellation ":
        case "l-1049-g-super constellation ":
        case "l-1049-g-super-constellation ":
        case "l-1049-g-superconstellation ":
        case "l-1049-gsuper constellation ":
        case "l-1049-gsuper-constellation ":
        case "l-1049-gsuperconstellation ":
        case "l-1049g super constellation ":
        case "l-1049g super-constellation ":
        case "l-1049g superconstellation ":
        case "l-1049g-super constellation ":
        case "l-1049g-super-constellation ":
        case "l-1049g-superconstellation ":
        case "l-1049gsuper constellation ":
        case "l-1049gsuper-constellation ":
        case "l-1049gsuperconstellation ":
        case "l1049 g super constellation ":
        case "l1049 g super-constellation ":
        case "l1049 g superconstellation ":
        case "l1049 g-super constellation ":
        case "l1049 g-super-constellation ":
        case "l1049 g-superconstellation ":
        case "l1049 gsuper constellation ":
        case "l1049 gsuper-constellation ":
        case "l1049 gsuperconstellation ":
        case "l1049-g super constellation ":
        case "l1049-g super-constellation ":
        case "l1049-g superconstellation ":
        case "l1049-g-super constellation ":
        case "l1049-g-super-constellation ":
        case "l1049-g-superconstellation ":
        case "l1049-gsuper constellation ":
        case "l1049-gsuper-constellation ":
        case "l1049-gsuperconstellation ":
        case "l1049g super constellation ":
        case "l1049g super-constellation ":
        case "l1049g superconstellation ":
        case "l1049g-super constellation ":
        case "l1049g-super-constellation ":
        case "l1049g-superconstellation ":
        case "l1049gsuper constellation ":
        case "l1049gsuper-constellation ":
        case "l1049gsuperconstellation ":
        case "l 1049 g ":
        case "l 1049-g ":
        case "l 1049g ":
        case "l-1049 g ":
        case "l-1049-g ":
        case "l-1049g ":
        case "l1049 g ":
        case "l1049-g ":
        case "l1049g ":
        case "super constellation ":
        case "super-constellation ":
        case "superconstellation ":
        case "id234":
        speed = 596; cap = 95; rwy = 2000; mC = 612800; range = 8700;
        fConsmp = 25.2; cConsmp = 0.3; mH = 390; price = 1802354;
        n = "L-1049G Super Constellation"; c = 13; pc = "supercons"
        break;

        case "l 1011 200":
        case "l 1011-200":
        case "l 1011200":
        case "l-1011 200":
        case "l-1011-200":
        case "l-1011200":
        case "l1011 200":
        case "l1011-200":
        case "l1011200":
        case "l 1011 2":
        case "l 1011-2":
        case "l 10112":
        case "l-1011 2":
        case "l-1011-2":
        case "l-10112":
        case "l1011 2":
        case "l1011-2":
        case "l10112":
        case "l 1012":
        case "l-1012":
        case "l1012":
        case "l 1011 200 ":
        case "l 1011-200 ":
        case "l 1011200 ":
        case "l-1011 200 ":
        case "l-1011-200 ":
        case "l-1011200 ":
        case "l1011 200 ":
        case "l1011-200 ":
        case "l1011200 ":
        case "l 1011 2 ":
        case "l 1011-2 ":
        case "l 10112 ":
        case "l-1011 2 ":
        case "l-1011-2 ":
        case "l-10112 ":
        case "l1011 2 ":
        case "l1011-2 ":
        case "l10112 ":
        case "l 1012 ":
        case "l-1012 ":
        case "l1012 ":
        case "id235":
        speed = 838; cap = 263; rwy = 2000; mC = 5327098; range = 7420;
        fConsmp = 17.28; cConsmp = 0.22; mH = 370; price = 24777200;
        n = "L-1011-200"; c = 13; pc = "l1011-200"
        break;

        case "l 1011 500":
        case "l 1011-500":
        case "l 1011500":
        case "l-1011 500":
        case "l-1011-500":
        case "l-1011500":
        case "l1011 500":
        case "l1011-500":
        case "l1011500":
        case "l 1011 5":
        case "l 1011-5":
        case "l 10115":
        case "l-1011 5":
        case "l-1011-5":
        case "l-10115":
        case "l1011 5":
        case "l1011-5":
        case "l10115":
        case "l 1015":
        case "l-1015":
        case "l1015":
        case "l 1011 500 ":
        case "l 1011-500 ":
        case "l 1011500 ":
        case "l-1011 500 ":
        case "l-1011-500 ":
        case "l-1011500 ":
        case "l1011 500 ":
        case "l1011-500 ":
        case "l1011500 ":
        case "l 1011 5 ":
        case "l 1011-5 ":
        case "l 10115 ":
        case "l-1011 5 ":
        case "l-1011-5 ":
        case "l-10115 ":
        case "l1011 5 ":
        case "l1011-5 ":
        case "l10115 ":
        case "l 1015 ":
        case "l-1015 ":
        case "l1015 ":
        case "id236":
        speed = 876; cap = 315; rwy = 9400; mC = 3146468; range = 9900;
        fConsmp = 19.2; cConsmp = 0.25; mH = 400; price = 33120715;
        n = "L-1011-500"; c = 13; pc = "l1011"
        break;
        
        //MDD
        case "dc-1":
        case "dc1":
        case "dc 1":
        case "md-1":
        case "md1":
        case "md 1":
        case "dc-1 ":
        case "dc1 ":
        case "dc 1 ":
        case "md-1 ":
        case "md1 ":
        case "md 1 ":
        case "id237":
        speed = 297; cap = 12; rwy = 2000; mC = 4628; range = 1500;
        fConsmp = 18; cConsmp = 0.22; mH = 200; price = 204000;
        n = "DC-1"; c = 14; pc = "dc1_2"
        break;

        case "dc-2":
        case "dc2":
        case "dc 2":
        case "md-2":
        case "md2":
        case "md 2":
        case "dc-2 ":
        case "dc2 ":
        case "dc 2 ":
        case "md-2 ":
        case "md2 ":
        case "md 2 ":
        case "id238":
        speed = 273; cap = 14; rwy = 2000; mC = 6226; range = 1750;
        fConsmp = 15.64; cConsmp = 0.21; mH = 290; price = 238000;
        n = "DC-2"; c = 14; pc = "dc1_2"
        break;

        case "dc-5":
        case "dc5":
        case "dc 5":
        case "md-5":
        case "md5":
        case "md 5":
        case "dc-5 ":
        case "dc5 ":
        case "dc 5 ":
        case "md-5 ":
        case "md5 ":
        case "md 5 ":
        case "id239":
        speed = 358; cap = 22; rwy = 2000; mC = 12266; range = 2575;
        fConsmp = 18.54; cConsmp = 0.22; mH = 230; price = 374000;
        n = "DC-5"; c = 14; pc = "dc1_2"
        break;

        case "dc-4":
        case "dc4":
        case "dc 4":
        case "md-4":
        case "md4":
        case "md 4":
        case "dc-4 ":
        case "dc4 ":
        case "dc 4 ":
        case "md-4 ":
        case "md4 ":
        case "md 4 ":
        case "id240":
        speed = 332; cap = 86; rwy = 2000; mC = 188210; range = 4023;
        fConsmp = 13.5; cConsmp = 0.19; mH = 200; price = 464718;
        n = "DC-4"; c = 14; pc = "dc1_2"
        break;

        case "dc-3":
        case "dc3":
        case "dc 3":
        case "md-3":
        case "md3":
        case "md 3":
        case "dc-3 ":
        case "dc3 ":
        case "dc 3 ":
        case "md-3 ":
        case "md3 ":
        case "md 3 ":
        case "id241":
        speed = 250; cap = 32; rwy = 2000; mC = 10778; range = 1650;
        fConsmp = 17.48; cConsmp = 0.24; mH = 200; price = 544000;
        n = "DC-3"; c = 14; pc = "dc3"
        break;

        case "dc 9 10":
        case "dc 9-10":
        case "dc 910":
        case "dc-9 10":
        case "dc-9-10":
        case "dc-910":
        case "dc9 10":
        case "dc9-10":
        case "dc910":
        case "md 9 10":
        case "md 9-10":
        case "md 910":
        case "md-9 10":
        case "md-9-10":
        case "md-910":
        case "md9 10":
        case "md9-10":
        case "md910":
        case "dc 9 10 ":
        case "dc 9-10 ":
        case "dc 910 ":
        case "dc-9 10 ":
        case "dc-9-10 ":
        case "dc-910 ":
        case "dc9 10 ":
        case "dc9-10 ":
        case "dc910 ":
        case "md 9 10 ":
        case "md 9-10 ":
        case "md 910 ":
        case "md-9 10 ":
        case "md-9-10 ":
        case "md-910 ":
        case "md9 10 ":
        case "md9-10 ":
        case "md910 ":
        case "id242":
        speed = 894; cap = 90; rwy = 2000; mC = 178108; range = 2036;
        fConsmp = 13.44; cConsmp = 0.18; mH = 340; price = 659657;
        n = "DC-9-10"; c = 14; pc = "dc9"
        break;

        case "dc-6":
        case "dc6":
        case "dc 6":
        case "md-6":
        case "md6":
        case "md 6":
        case "dc-6 ":
        case "dc6 ":
        case "dc 6 ":
        case "md-6 ":
        case "md6 ":
        case "md 6 ":
        case "id243":
        speed = 491; cap = 56; rwy = 2000; mC = 254572; range = 7376;
        fConsmp = 14.72; cConsmp = 0.2; mH = 280; price = 707147;
        n = "DC-6"; c = 14; pc = "dc6"
        break;

        case "dc 9 50":
        case "dc 9-50":
        case "dc 950":
        case "dc-9 50":
        case "dc-9-50":
        case "dc-950":
        case "dc9 50":
        case "dc9-50":
        case "dc950":
        case "md 9 50":
        case "md 9-50":
        case "md 950":
        case "md-9 50":
        case "md-9-50":
        case "md-950":
        case "md9 50":
        case "md9-50":
        case "md950":
        case "dc 9 50 ":
        case "dc 9-50 ":
        case "dc 950 ":
        case "dc-9 50 ":
        case "dc-9-50 ":
        case "dc-950 ":
        case "dc9 50 ":
        case "dc9-50 ":
        case "dc950 ":
        case "md 9 50 ":
        case "md 9-50 ":
        case "md 950 ":
        case "md-9 50 ":
        case "md-9-50 ":
        case "md-950 ":
        case "md9 50 ":
        case "md9-50 ":
        case "md950 ":
        case "id244":
        speed = 889; cap = 90; rwy = 2000; mC = 186498; range = 2631;
        fConsmp = 13.16; cConsmp = 0.18; mH = 380; price = 847715;
        n = "DC-9-50"; c = 14; pc = "dc9"
        break;

        case "dc-6b":
        case "dc6b":
        case "dc 6b":
        case "md-6b":
        case "md6b":
        case "md 6b":
        case "dc-6-b":
        case "dc6-b":
        case "dc 6-b":
        case "md-6-b":
        case "md6-b":
        case "md 6-b":
        case "dc-6 b":
        case "dc6 b":
        case "dc 6 b":
        case "md-6 b":
        case "md6 b":
        case "md 6 b":
        case "dc-6b ":
        case "dc6b ":
        case "dc 6b ":
        case "md-6b ":
        case "md6b ":
        case "md 6b ":
        case "dc-6-b ":
        case "dc6-b ":
        case "dc 6-b ":
        case "md-6-b ":
        case "md6-b ":
        case "md 6-b ":
        case "dc-6 b ":
        case "dc6 b ":
        case "dc 6 b ":
        case "md-6 b ":
        case "md6 b ":
        case "md 6 b ":
        case "id245":
        speed = 568; cap = 102; rwy = 2000; mC = 307588; range = 4835;
        fConsmp = 17.44; cConsmp = 0.2; mH = 210; price = 854413;
        n = "DC-6B"; c = 14; pc = "dc6"
        
        case "dc 9 30":
        case "dc 9-30":
        case "dc 930":
        case "dc-9 30":
        case "dc-9-30":
        case "dc-930":
        case "dc9 30":
        case "dc9-30":
        case "dc930":
        case "md 9 30":
        case "md 9-30":
        case "md 930":
        case "md-9 30":
        case "md-9-30":
        case "md-930":
        case "md9 30":
        case "md9-30":
        case "md930":
        case "dc 9 30 ":
        case "dc 9-30 ":
        case "dc 930 ":
        case "dc-9 30 ":
        case "dc-9-30 ":
        case "dc-930 ":
        case "dc9 30 ":
        case "dc9-30 ":
        case "dc930 ":
        case "md 9 30 ":
        case "md 9-30 ":
        case "md 930 ":
        case "md-9 30 ":
        case "md-9-30 ":
        case "md-930 ":
        case "md9 30 ":
        case "md9-30 ":
        case "md930 ":
        case "id246":
        speed = 871; cap = 90; rwy = 2000; mC = 225070; range = 2631;
        fConsmp = 13.44; cConsmp = 0.18; mH = 380; price = 865651;
        n = "DC-9-30"; c = 14; pc = "dc9"
        break;

        case "dc 9 40":
        case "dc 9-40":
        case "dc 940":
        case "dc-9 40":
        case "dc-9-40":
        case "dc-940":
        case "dc9 40":
        case "dc9-40":
        case "dc940":
        case "md 9 40":
        case "md 9-40":
        case "md 940":
        case "md-9 40":
        case "md-9-40":
        case "md-940":
        case "md9 40":
        case "md9-40":
        case "md940":
        case "dc 9 40 ":
        case "dc 9-40 ":
        case "dc 940 ":
        case "dc-9 40 ":
        case "dc-9-40 ":
        case "dc-940 ":
        case "dc9 40 ":
        case "dc9-40 ":
        case "dc940 ":
        case "md 9 40 ":
        case "md 9-40 ":
        case "md 940 ":
        case "md-9 40 ":
        case "md-9-40 ":
        case "md-940 ":
        case "md9 40 ":
        case "md9-40 ":
        case "md940 ":
        case "id247":
        speed = 871; cap = 90; rwy = 2000; mC = 227536; range = 2712;
        fConsmp = 13.44; cConsmp = 0.18; mH = 370; price = 892301;
        n = "DC-9-40"; c = 14; pc = "dc9"
        break;

        case "dc 9 21":
        case "dc 9-21":
        case "dc 921":
        case "dc-9 21":
        case "dc-9-21":
        case "dc-921":
        case "dc9 21":
        case "dc9-21":
        case "dc921":
        case "md 9 21":
        case "md 9-21":
        case "md 921":
        case "md-9 21":
        case "md-9-21":
        case "md-921":
        case "md9 21":
        case "md9-21":
        case "md921":
        case "dc 9 21 ":
        case "dc 9-21 ":
        case "dc 921 ":
        case "dc-9 21 ":
        case "dc-9-21 ":
        case "dc-921 ":
        case "dc9 21 ":
        case "dc9-21 ":
        case "dc921 ":
        case "md 9 21 ":
        case "md 9-21 ":
        case "md 921 ":
        case "md-9 21 ":
        case "md-9-21 ":
        case "md-921 ":
        case "md9 21 ":
        case "md9-21 ":
        case "md921 ":
        case "id248":
        speed = 914; cap = 90; rwy = 2000; mC = 258406; range = 2977;
        fConsmp = 15.12; cConsmp = 0.18; mH = 360; price = 957060;
        n = "DC-9-21"; c = 14; pc = "dc9"
        break;

        case "dc-7":
        case "dc7":
        case "dc 7":
        case "md-7":
        case "md7":
        case "md 7":
        case "dc-7 ":
        case "dc7 ":
        case "dc 7 ":
        case "md-7 ":
        case "md7 ":
        case "md 7 ":
        case "id249":
        speed = 576; cap = 99; rwy = 2000; mC = 471526; range = 7410;
        fConsmp = 17.12; cConsmp = 0.2; mH = 380; price = 1428866;
        n = "DC-7"; c = 14; pc = "dc6"
        break;

        case "dc-7b":
        case "dc7b":
        case "dc 7b":
        case "md-7b":
        case "md7b":
        case "md 7b":
        case "dc-7-b":
        case "dc7-b":
        case "dc 7-b":
        case "md-7-b":
        case "md7-b":
        case "md 7-b":
        case "dc-7 b":
        case "dc7 b":
        case "dc 7 b":
        case "md-7 b":
        case "md7 b":
        case "md 7 b":
        case "dc-7b ":
        case "dc7b ":
        case "dc 7b ":
        case "md-7b ":
        case "md7b ":
        case "md 7b ":
        case "dc-7-b ":
        case "dc7-b ":
        case "dc 7-b ":
        case "md-7-b ":
        case "md7-b ":
        case "md 7-b ":
        case "dc-7 b ":
        case "dc7 b ":
        case "dc 7 b ":
        case "md-7 b ":
        case "md7 b ":
        case "md 7 b ":
        case "id250":
        speed = 610; cap = 100; rwy = 2000; mC = 514212; range = 8000;
        fConsmp = 17.28; cConsmp = 0.2; mH = 340; price = 15588217;
        n = "DC-7B"; c = 14; pc = "dc6"
        break;

        case "dc-7c":
        case "dc7c":
        case "dc 7c":
        case "md-7c":
        case "md7c":
        case "md 7c":
        case "dc-7-c":
        case "dc7-c":
        case "dc 7-c":
        case "md-7-c":
        case "md7-c":
        case "md 7-c":
        case "dc-7 c":
        case "dc7 c":
        case "dc 7 c":
        case "md-7 c":
        case "md7 c":
        case "md 7 c":
        case "dc-7c ":
        case "dc7c ":
        case "dc 7c ":
        case "md-7c ":
        case "md7c ":
        case "md 7c ":
        case "dc-7-c ":
        case "dc7-c ":
        case "dc 7-c ":
        case "md-7-c ":
        case "md7-c ":
        case "md 7-c ":
        case "dc-7 c ":
        case "dc7 c ":
        case "dc 7 c ":
        case "md-7 c ":
        case "md7 c ":
        case "md 7 c ":
        case "id251":
        speed = 561; cap = 105; rwy = 2000; mC = 596028; range = 9070;
        fConsmp = 17.12; cConsmp = 0.2; mH = 320; price = 1806145;
        n = "DC-7C"; c = 14; pc = "dc6"
        break;

        case "md87":
        case "md-87":
        case "md 87":
        case "md87 ":
        case "md-87 ":
        case "md 87 ":
        case "dc87":
        case "dc-87":
        case "dc 87":
        case "dc87 ":
        case "dc-87 ":
        case "dc 87 ":
        case "id252":
        speedd = 738; cap = 139; rwy = 2000; mC = 419032; range = 4440;
        fConsmp = 13.58; cConsmp = 0.18; mH = 400; price = 1995393;
        n = "MD-87"; c = 14; pc = "md80"
        break;

        case "md80":
        case "md-80":
        case "md 80":
        case "md80 ":
        case "md-80 ":
        case "md 80 ":
        case "dc80":
        case "dc-80":
        case "dc 80":
        case "dc80 ":
        case "dc-80 ":
        case "dc 80 ":
        case "id253":
        speed = 868; cap = 130; rwy = 2000; mC = 421516; range = 6000;
        fConsmp = 17.44; cConsmp = 0.2; mH = 340; price = 2161616;
        n = "MD-80"; c = 14; pc = "md80"
        break;

        case "md81":
        case "md-81":
        case "md 81":
        case "md81 ":
        case "md-81 ":
        case "md 81 ":
        case "dc81":
        case "dc-81":
        case "dc 81":
        case "dc81 ":
        case "dc-81 ":
        case "dc 81 ":
        case "id254":
        speed = 819; cap = 172; rwy = 2000; mC = 482234; range = 2910;
        fConsmp = 17.44; cConsmp = 0.2; mH = 340; price = 2296357;
        n = "MD-81"; c = 14; pc = "md80"
        break;

        case "md88":
        case "md-88":
        case "md 88":
        case "md88 ":
        case "md-88 ":
        case "md 88 ":
        case "dc88":
        case "dc-88":
        case "dc 88":
        case "dc88 ":
        case "dc-88 ":
        case "dc 88 ":
        case "id255":
        speed = 908; cap = 172; rwy = 2000; mC = 629722; range = 3800;
        fConsmp = 17.44; cConsmp = 0.2; mH = 340; price = 2998679;
        n = "MD-88"; c = 14; pc = "md80"
        break;

        case "md 90 30":
        case "md 90-30":
        case "md 9030":
        case "md-90 30":
        case "md-90-30":
        case "md-9030":
        case "md90 30":
        case "md90-30":
        case "md9030":
        case "dc 90 30":
        case "dc 90-30":
        case "dc 9030":
        case "dc-90 30":
        case "dc-90-30":
        case "dc-9030":
        case "dc90 30":
        case "dc90-30":
        case "dc9030":
        case "md 90 30 ":
        case "md 90-30 ":
        case "md 9030 ":
        case "md-90 30 ":
        case "md-90-30 ":
        case "md-9030 ":
        case "md90 30 ":
        case "md90-30 ":
        case "md9030 ":
        case "dc 90 30 ":
        case "dc 90-30 ":
        case "dc 9030 ":
        case "dc-90 30 ":
        case "dc-90-30 ":
        case "dc-9030 ":
        case "dc90 30 ":
        case "dc90-30 ":
        case "dc9030 ":
        case "id256":
        speed = 909; cap = 172; rwy = 2000; mC = 396472; range = 3860;
        fConsmp = 17.44; cConsmp = 0.2; mH = 470; price = 3049783;
        n = "MD-90-30"; c = 14; pc = "md90"
        break;

        case "md 90 30er":
        case "md 90-30er":
        case "md 9030er":
        case "md-90 30er":
        case "md-90-30er":
        case "md-9030er":
        case "md90 30er":
        case "md90-30er":
        case "md9030er":
        case "dc 90 30er":
        case "dc 90-30er":
        case "dc 9030er":
        case "dc-90 30er":
        case "dc-90-30er":
        case "dc-9030er":
        case "dc90 30er":
        case "dc90-30er":
        case "dc9030er":
        case "md 90 30-er":
        case "md 90-30-er":
        case "md 9030-er":
        case "md-90 30-er":
        case "md-90-30-er":
        case "md-9030-er":
        case "md90 30-er":
        case "md90-30-er":
        case "md9030-er":
        case "dc 90 30-er":
        case "dc 90-30-er":
        case "dc 9030-er":
        case "dc-90 30-er":
        case "dc-90-30-er":
        case "dc-9030-er":
        case "dc90 30-er":
        case "dc90-30-er":
        case "dc9030-er":
        case "md 90 30 er":
        case "md 90-30 er":
        case "md 9030 er":
        case "md-90 30 er":
        case "md-90-30 er":
        case "md-9030 er":
        case "md90 30 er":
        case "md90-30 er":
        case "md9030 er":
        case "dc 90 30 er":
        case "dc 90-30 er":
        case "dc 9030 er":
        case "dc-90 30 er":
        case "dc-90-30 er":
        case "dc-9030 er":
        case "dc90 30 er":
        case "dc90-30 er":
        case "dc9030 er":
        case "md 90 30er ":
        case "md 90-30er ":
        case "md 9030er ":
        case "md-90 30er ":
        case "md-90-30er ":
        case "md-9030er ":
        case "md90 30er ":
        case "md90-30er ":
        case "md9030er ":
        case "dc 90 30er ":
        case "dc 90-30er ":
        case "dc 9030er ":
        case "dc-90 30er ":
        case "dc-90-30er ":
        case "dc-9030er ":
        case "dc90 30er ":
        case "dc90-30er ":
        case "dc9030er ":
        case "md 90 30-er ":
        case "md 90-30-er ":
        case "md 9030-er ":
        case "md-90 30-er ":
        case "md-90-30-er ":
        case "md-9030-er ":
        case "md90 30-er ":
        case "md90-30-er ":
        case "md9030-er ":
        case "dc 90 30-er ":
        case "dc 90-30-er ":
        case "dc 9030-er ":
        case "dc-90 30-er ":
        case "dc-90-30-er ":
        case "dc-9030-er ":
        case "dc90 30-er ":
        case "dc90-30-er ":
        case "dc9030-er ":
        case "md 90 30 er ":
        case "md 90-30 er ":
        case "md 9030 er ":
        case "md-90 30 er ":
        case "md-90-30 er ":
        case "md-9030 er ":
        case "md90 30 er ":
        case "md90-30 er ":
        case "md9030 er ":
        case "dc 90 30 er ":
        case "dc 90-30 er ":
        case "dc 9030 er ":
        case "dc-90 30 er ":
        case "dc-90-30 er ":
        case "dc-9030 er ":
        case "dc90 30 er ":
        case "dc90-30 er ":
        case "dc9030 er ":
        case "id257":
        speed = 909; cap = 172; rwy = 2000; mC = 454402; range = 4424;
        fConsmp = 17.44; cConsmp = 0.2; mH = 450; price = 3495399;
        n = "MD-90-30ER"; c = 14; pc = "md90"
        break;

        case "md83":
        case "md-83":
        case "md 83":
        case "md83 ":
        case "md-83 ":
        case "md 83 ":
        case "dc83":
        case "dc-83":
        case "dc 83":
        case "dc83 ":
        case "dc-83 ":
        case "dc 83 ":
        case "id258":
        speed = 746; cap = 172; rwy = 2000; mC = 768924; range = 4640;
        fConsmp = 14.88; cConsmp = 0.2; mH = 380; price = 3661545;
        n = "MD-83"; c = 14; pc = "md80"
        break;

        case "md 90 50":
        case "md 90-50":
        case "md 9050":
        case "md-90 50":
        case "md-90-50":
        case "md-9050":
        case "md90 50":
        case "md90-50":
        case "md9050":
        case "dc 90 50":
        case "dc 90-50":
        case "dc 9050":
        case "dc-90 50":
        case "dc-90-50":
        case "dc-9050":
        case "dc90 50":
        case "dc90-50":
        case "dc9050":
        case "md 90 50 ":
        case "md 90-50 ":
        case "md 9050 ":
        case "md-90 50 ":
        case "md-90-50 ":
        case "md-9050 ":
        case "md90 50 ":
        case "md90-50 ":
        case "md9050 ":
        case "dc 90 50 ":
        case "dc 90-50 ":
        case "dc 9050 ":
        case "dc-90 50 ":
        case "dc-90-50 ":
        case "dc-9050 ":
        case "dc90 50 ":
        case "dc90-50 ":
        case "dc9050 ":
        case "id259 ":
        speed = 909; cap = 172; rwy = 2000; mC = 529998; range = 5160;
        fConsmp = 17.44; cConsmp = 0.2; mH = 450; price = 4076912;
        n = "MD-90-50"; c = 14; pc = "md90"
        break;

        case "dc 8 10":
        case "dc 8-10":
        case "dc 810":
        case "dc-8 10":
        case "dc-8-10":
        case "dc-810":
        case "dc8 10":
        case "dc8-10":
        case "dc810":
        case "md 8 10":
        case "md 8-10":
        case "md 810":
        case "md-8 10":
        case "md-8-10":
        case "md-810":
        case "md8 10":
        case "md8-10":
        case "md810":
        case "dc 8 10 ":
        case "dc 8-10 ":
        case "dc 810 ":
        case "dc-8 10 ":
        case "dc-8-10 ":
        case "dc-810 ":
        case "dc8 10 ":
        case "dc8-10 ":
        case "dc810 ":
        case "md 8 10 ":
        case "md 8-10 ":
        case "md 810 ":
        case "md-8 10 ":
        case "md-8-10 ":
        case "md-810 ":
        case "md8 10 ":
        case "md8-10 ":
        case "md810 ":
        case "id260":
        speed = 902; cap = 160; rwy = 2000; mC = 1467766; range = 7410;
        fConsmp = 19.62; cConsmp = 0.22; mH = 380; price = 4812350;
        n = "DC-8-10"; c = 14; pc = "dc8"
        break;

        case "dc 8 61":
        case "dc 8-61":
        case "dc 861":
        case "dc-8 61":
        case "dc-8-61":
        case "dc-861":
        case "dc8 61":
        case "dc8-61":
        case "dc861":
        case "md 8 61":
        case "md 8-61":
        case "md 861":
        case "md-8 61":
        case "md-8-61":
        case "md-861":
        case "md8 61":
        case "md8-61":
        case "md861":
        case "dc 8 61 ":
        case "dc 8-61 ":
        case "dc 861 ":
        case "dc-8 61 ":
        case "dc-8-61 ":
        case "dc-861 ":
        case "dc8 61 ":
        case "dc8-61 ":
        case "dc861 ":
        case "md 8 61 ":
        case "md 8-61 ":
        case "md 861 ":
        case "md-8 61 ":
        case "md-8-61 ":
        case "md-861 ":
        case "md8 61 ":
        case "md8-61 ":
        case "md861 ":
        case "id261":
        speed = 853; cap = 210; rwy = 2000; mC = 1375332; range = 6035;
        fConsmp = 18.43; cConsmp = 0.24; mH = 380; price = 5189932;
        n = "DC-8-61"; c = 14; pc = "dc8"
        break;

        case "dc 8 20":
        case "dc 8-20":
        case "dc 820":
        case "dc-8 20":
        case "dc-8-20":
        case "dc-820":
        case "dc8 20":
        case "dc8-20":
        case "dc820":
        case "md 8 20":
        case "md 8-20":
        case "md 820":
        case "md-8 20":
        case "md-8-20":
        case "md-820":
        case "md8 20":
        case "md8-20":
        case "md820":
        case "dc 8 20 ":
        case "dc 8-20 ":
        case "dc 820 ":
        case "dc-8 20 ":
        case "dc-8-20 ":
        case "dc-820 ":
        case "dc8 20 ":
        case "dc8-20 ":
        case "dc820 ":
        case "md 8 20 ":
        case "md 8-20 ":
        case "md 820 ":
        case "md-8 20 ":
        case "md-8-20 ":
        case "md-820 ":
        case "md8 20 ":
        case "md8-20 ":
        case "md820 ":
        case "id262":
        speed = 877; cap = 170; rwy = 2000; mC = 1603244; range = 7410;
        fConsmp = 18.18; cConsmp = 0.22; mH = 320; price = 5256539
        n = "DC-8-20"; c = 14; pc = "dc8"
        break;

        case "dc 8 71":
        case "dc 8-71":
        case "dc 871":
        case "dc-8 71":
        case "dc-8-71":
        case "dc-871":
        case "dc8 71":
        case "dc8-71":
        case "dc871":
        case "md 8 71":
        case "md 8-71":
        case "md 871":
        case "md-8 71":
        case "md-8-71":
        case "md-871":
        case "md8 71":
        case "md8-71":
        case "md871":
        case "dc 8 71":
        case "dc 8-71":
        case "dc 871":
        case "dc-8 71":
        case "dc-8-71":
        case "dc-871":
        case "dc8 71":
        case "dc8-71":
        case "dc871":
        case "md 8 71":
        case "md 8-71":
        case "md 871":
        case "md-8 71":
        case "md-8-71":
        case "md-871":
        case "md8 71":
        case "md8-71":
        case "md871":
        case "id263":
        speed = 808; cap = 210; rwy = 2000; mC = 1082306; range = 7035;
        fConsmp = 17.67; cConsmp = 0.24; mH = 370; price = 5850306;
        n = "DC-8-71"; c = 14; pc = "dc8"
        break;

        case "dc 8 40":
        case "dc 8-40":
        case "dc 840":
        case "dc-8 40":
        case "dc-8-40":
        case "dc-840":
        case "dc8 40":
        case "dc8-40":
        case "dc840":
        case "md 8 40":
        case "md 8-40":
        case "md 840":
        case "md-8 40":
        case "md-8-40":
        case "md-840":
        case "md8 40":
        case "md8-40":
        case "md840":
        case "dc 8 40 ":
        case "dc 8-40 ":
        case "dc 840 ":
        case "dc-8 40 ":
        case "dc-8-40 ":
        case "dc-840 ":
        case "dc8 40 ":
        case "dc8-40 ":
        case "dc840 ":
        case "md 8 40 ":
        case "md 8-40 ":
        case "md 840 ":
        case "md-8 40 ":
        case "md-8-40 ":
        case "md-840 ":
        case "md8 40 ":
        case "md8-40 ":
        case "md840 ":
        case "id264":
        speed = 916; cap = 176; rwy = 2000; mC = 2034056; range = 8230;
        fConsmp = 17.51; cConsmp = 0.21; mH = 360; price = 6669034
        n = "DC-8-40"; c = 14; pc = "dc8"
        break;

        case "dc 10 10":
        case "dc 10-10":
        case "dc 1010":
        case "dc-10 10":
        case "dc-10-10":
        case "dc-1010":
        case "dc10 10":
        case "dc10-10":
        case "dc1010":
        case "md 10 10":
        case "md 10-10":
        case "md 1010":
        case "md-10 10":
        case "md-10-10":
        case "md-1010":
        case "md10 10":
        case "md10-10":
        case "md1010":
        case "dc 10 10 ":
        case "dc 10-10 ":
        case "dc 1010 ":
        case "dc-10 10 ":
        case "dc-10-10 ":
        case "dc-1010 ":
        case "dc10 10 ":
        case "dc10-10 ":
        case "dc1010 ":
        case "md 10 10 ":
        case "md 10-10 ":
        case "md 1010 ":
        case "md-10 10 ":
        case "md-10-10 ":
        case "md-1010 ":
        case "md10 10 ":
        case "md10-10 ":
        case "md1010 ":
        case "id265":
        speed = 1008; cap = 250; rwy = 2000; mC = 1633538; range = 6436;
        fConsmp = 20.33; cConsmp = 0.24; mH = 360; price = 6806411;
        n = "DC-10-10"; c = 14; pc = "dc10"
        break;

        case "dc 8 62":
        case "dc 8-62":
        case "dc 862":
        case "dc-8 62":
        case "dc-8-62":
        case "dc-862":
        case "dc8 62":
        case "dc8-62":
        case "dc862":
        case "md 8 62":
        case "md 8-62":
        case "md 862":
        case "md-8 62":
        case "md-8-62":
        case "md-862":
        case "md8 62":
        case "md8-62":
        case "md862":
        case "dc 8 62 ":
        case "dc 8-62 ":
        case "dc 862 ":
        case "dc-8 62 ":
        case "dc-8-62 ":
        case "dc-862 ":
        case "dc8 62 ":
        case "dc8-62 ":
        case "dc862 ":
        case "md 8 62 ":
        case "md 8-62 ":
        case "md 862 ":
        case "md-8 62 ":
        case "md-8-62 ":
        case "md-862 ":
        case "md8 62 ":
        case "md8-62 ":
        case "md862 ":
        case "id266":
        speed = 856; cap = 220; rwy = 2000; mC = 2261080; range = 9620;
        fConsmp = 18.43; cConsmp = 0.24; mH = 400; price = 8696462
        n = "DC-8-62"; c = 14; pc = "dc8"
        break;

        case "dc 8 50":
        case "dc 8-50":
        case "dc 850":
        case "dc-8 50":
        case "dc-8-50":
        case "dc-850":
        case "dc8 50":
        case "dc8-50":
        case "dc850":
        case "md 8 50":
        case "md 8-50":
        case "md 850":
        case "md-8 50":
        case "md-8-50":
        case "md-850":
        case "md8 50":
        case "md8-50":
        case "md850":
        case "dc 8 50 ":
        case "dc 8-50 ":
        case "dc 850 ":
        case "dc-8 50 ":
        case "dc-8-50 ":
        case "dc-850 ":
        case "dc8 50 ":
        case "dc8-50 ":
        case "dc850 ":
        case "md 8 50 ":
        case "md 8-50 ":
        case "md 850 ":
        case "md-8 50 ":
        case "md-8-50 ":
        case "md-850 ":
        case "md8 50 ":
        case "md8-50 ":
        case "md850 ":
        case "id267":
        speed = 844; cap = 179; rwy = 2000; mC = 2853080; range = 11260;
        fConsmp = 16.49; cConsmp = 0.21; mH = 360; price = 9354363;
        n = "DC-8-50"; c = 14; pc = "dc8"
        break;

        case "dc 8 72":
        case "dc 8-72":
        case "dc 872":
        case "dc-8 72":
        case "dc-8-72":
        case "dc-872":
        case "dc8 72":
        case "dc8-72":
        case "dc872":
        case "md 8 72":
        case "md 8-72":
        case "md 872":
        case "md-8 72":
        case "md-8-72":
        case "md-872":
        case "md8 72":
        case "md8-72":
        case "md872":
        case "dc 8 72 ":
        case "dc 8-72 ":
        case "dc 872 ":
        case "dc-8 72 ":
        case "dc-8-72 ":
        case "dc-872 ":
        case "dc8 72 ":
        case "dc8-72 ":
        case "dc872 ":
        case "md 8 72 ":
        case "md 8-72 ":
        case "md 872 ":
        case "md-8 72 ":
        case "md-8-72 ":
        case "md-872 ":
        case "md8 72 ":
        case "md8-72 ":
        case "md872 ":
        case "id268":
        speed = 808; cap = 220; rwy = 2000; mC = 1818624; range = 10620;
        fConsmp = 16.74; cConsmp = 0.22; mH = 400; price = 9830403;
        n = "DC-8-72"; c = 14; pc = "dc8"
        break;

        case "dc 8 63":
        case "dc 8-63":
        case "dc 863":
        case "dc-8 63":
        case "dc-8-63":
        case "dc-863":
        case "dc8 63":
        case "dc8-63":
        case "dc863":
        case "md 8 63":
        case "md 8-63":
        case "md 863":
        case "md-8 63":
        case "md-8-63":
        case "md-863":
        case "md8 63":
        case "md8-63":
        case "md863":
        case "dc 8 63 ":
        case "dc 8-63 ":
        case "dc 863 ":
        case "dc-8 63 ":
        case "dc-8-63 ":
        case "dc-863 ":
        case "dc8 63 ":
        case "dc8-63 ":
        case "dc863 ":
        case "md 8 63 ":
        case "md 8-63 ":
        case "md 863 ":
        case "md-8 63 ":
        case "md-8-63 ":
        case "md-863 ":
        case "md8 63 ":
        case "md8-63 ":
        case "md863 ":
        case "id269":
        speed = 883; cap = 259; rwy = 2000; mC = 6257716; range = 7600;
        fConsmp = 17.86; cConsmp = 0.24; mH = 350; price = 24540066;
        n = "DC-8-63"; c = 14; pc = "dc8"
        break;

        case "dc 10 15":
        case "dc 10-15":
        case "dc 1015":
        case "dc-10 15":
        case "dc-10-15":
        case "dc-1015":
        case "dc10 15":
        case "dc10-15":
        case "dc1015":
        case "md 10 15":
        case "md 10-15":
        case "md 1015":
        case "md-10 15":
        case "md-10-15":
        case "md-1015":
        case "md10 15":
        case "md10-15":
        case "md1015":
        case "dc 10 15 ":
        case "dc 10-15 ":
        case "dc 1015 ":
        case "dc-10 15 ":
        case "dc-10-15 ":
        case "dc-1015 ":
        case "dc10 15 ":
        case "dc10-15 ":
        case "dc1015 ":
        case "md 10 15 ":
        case "md 10-15 ":
        case "md 1015 ":
        case "md-10 15 ":
        case "md-10-15 ":
        case "md-1015 ":
        case "md10 15 ":
        case "md10-15 ":
        case "md1015 ":
        case "id270":
        speed = 854; cap = 260; rwy = 2000; mC = 4662698; range = 7000;
        fConsmp = 16.74; cConsmp = 0.22; mH = 320; price = 24540516
        n = "DC-10-15"; c = 14; pc = "dc10"
        break;

        case "dc 8 73":
        case "dc 8-73":
        case "dc 873":
        case "dc-8 73":
        case "dc-8-73":
        case "dc-873":
        case "dc8 73":
        case "dc8-73":
        case "dc873":
        case "md 8 73":
        case "md 8-73":
        case "md 873":
        case "md-8 73":
        case "md-8-73":
        case "md-873":
        case "md8 73":
        case "md8-73":
        case "md873":
        case "dc 8 73 ":
        case "dc 8-73 ":
        case "dc 873 ":
        case "dc-8 73 ":
        case "dc-8-73 ":
        case "dc-873 ":
        case "dc8 73 ":
        case "dc8-73 ":
        case "dc873 ":
        case "md 8 73 ":
        case "md 8-73 ":
        case "md 873 ":
        case "md-8 73 ":
        case "md-8-73 ":
        case "md-873 ":
        case "md8 73 ":
        case "md8-73 ":
        case "md873 ":
        case "id271":
        speed = 808; cap = 259; rwy = 2000; mC = 5231582; range = 8650;
        fConsmp = 16.74; cConsmp = 0.22; mH = 370; price = 28278818
        n = "DC-8-73"; c = 14; pc = "dc8"
        break;

        case "dc 10 30":
        case "dc 10-30":
        case "dc 1030":
        case "dc-10 30":
        case "dc-10-30":
        case "dc-1030":
        case "dc10 30":
        case "dc10-30":
        case "dc1030":
        case "md 10 30":
        case "md 10-30":
        case "md 1030":
        case "md-10 30":
        case "md-10-30":
        case "md-1030":
        case "md10 30":
        case "md10-30":
        case "md1030":
        case "dc 10 30 ":
        case "dc 10-30 ":
        case "dc 1030 ":
        case "dc-10 30 ":
        case "dc-10-30 ":
        case "dc-1030 ":
        case "dc10 30 ":
        case "dc10-30 ":
        case "dc1030 ":
        case "md 10 30 ":
        case "md 10-30 ":
        case "md 1030 ":
        case "md-10 30 ":
        case "md-10-30 ":
        case "md-1030 ":
        case "md10 30 ":
        case "md10-30 ":
        case "md1030 ":
        case "id272":
        speed = 872; cap = 320; rwy = 2000; mC = 8556204; range = 9493;
        fConsmp = 19.4; cConsmp = 0.25; mH = 400; price = 36409376
        n = "DC-10-30"; c = 14; pc = "dc10"
        break;

        case "dc 10 40":
        case "dc 10-40":
        case "dc 1040":
        case "dc-10 40":
        case "dc-10-40":
        case "dc-1040":
        case "dc10 40":
        case "dc10-40":
        case "dc1040":
        case "md 10 40":
        case "md 10-40":
        case "md 1040":
        case "md-10 40":
        case "md-10-40":
        case "md-1040":
        case "md10 40":
        case "md10-40":
        case "md1040":
        case "dc 10 40 ":
        case "dc 10-40 ":
        case "dc 1040 ":
        case "dc-10 40 ":
        case "dc-10-40 ":
        case "dc-1040 ":
        case "dc10 40 ":
        case "dc10-40 ":
        case "dc1040 ":
        case "md 10 40 ":
        case "md 10-40 ":
        case "md 1040 ":
        case "md-10 40 ":
        case "md-10-40 ":
        case "md-1040 ":
        case "md10 40 ":
        case "md10-40 ":
        case "md1040 ":
        case "id273":
        speed = 972; cap = 360; rwy = 2000; mC = 10793096; range = 9322;
        fConsmp = 21.2; cConsmp = 0.25; mH = 330; price = 46926501
        n = "DC-10-40"; c = 14; pc = "dc10"
        break;

        case "md 11 c":
        case "md 11-c":
        case "md 11c":
        case "md-11 c":
        case "md-11-c":
        case "md-11c":
        case "md11 c":
        case "md11-c":
        case "md11c":
        case "dc 11 c":
        case "dc 11-c":
        case "dc 11c":
        case "dc-11 c":
        case "dc-11-c":
        case "dc-11c":
        case "dc11 c":
        case "dc11-c":
        case "dc11c":
        case "md 11 c ":
        case "md 11-c ":
        case "md 11c ":
        case "md-11 c ":
        case "md-11-c ":
        case "md-11c ":
        case "md11 c ":
        case "md11-c ":
        case "md11c ":
        case "dc 11 c ":
        case "dc 11-c ":
        case "dc 11c ":
        case "dc-11 c ":
        case "dc-11-c ":
        case "dc-11c ":
        case "dc11 c ":
        case "dc11-c ":
        case "dc11c ":
        case "id274":
        speed = 955; cap = 410; rwy = 2000; mC = 9285136; range = 12435;
        fConsmp = 25.92; cConsmp = 0.3; mH = 350; price = 56273548
        n = "MD-11C"; c = 14; pc = "md11"
        break;

        case "md 11":
        case "md-11":
        case "md11":
        case "dc 11":
        case "dc-11":
        case "dc11":
        case "md 11 ":
        case "md-11 ":
        case "md11 ":
        case "dc 11 ":
        case "dc-11 ":
        case "dc11 ":
        case "id275":
        speed = 929; cap = 410; rwy = 2000; mC = 9449408; range = 12655;
        fConsmp = 24.48; cConsmp = 0.3; mH = 370; price = 57269139
        n = "MD-11"; c = 14; pc = "md11"
        break;

        case "md 11 er":
        case "md 11-er":
        case "md 11er":
        case "md-11 er":
        case "md-11-er":
        case "md-11er":
        case "md11 er":
        case "md11-er":
        case "md11er":
        case "dc 11 er":
        case "dc 11-er":
        case "dc 11er":
        case "dc-11 er":
        case "dc-11-er":
        case "dc-11er":
        case "dc11 er":
        case "dc11-er":
        case "dc11er":
        case "md 11 er ":
        case "md 11-er ":
        case "md 11er ":
        case "md-11 er ":
        case "md-11-er ":
        case "md-11er ":
        case "md11 er ":
        case "md11-er ":
        case "md11er ":
        case "dc 11 er ":
        case "dc 11-er ":
        case "dc 11er ":
        case "dc-11 er ":
        case "dc-11-er ":
        case "dc-11er ":
        case "dc11 er ":
        case "dc11-er ":
        case "dc11er ":
        case "id276":
        speed = 955; cap = 410; rwy = 2000; mC = 7584598; range = 13408;
        fConsmp = 25.92; cConsmp = 0.3; mH = 450; price = 60676778;
        n = "MD-11ER"; c = 14; pc = "md11"
        break;

        //SAAB
        case "saab 340":
        case "saab340":
        case "saab-340":
        case "saab 340 ":
        case "saab340 ":
        case "saab-340 ":
        case "id277":
        speed = 425; cap = 37; rwy = 2000; mC = 19664; range = 1730;
        fConsmp = 13.65; cConsmp = 0.19; mH = 380; price = 109241
        n = "340"; c = 15; pc = "saab340"
        break;

        case "saab 90 scandia":
        case "saab 90-scandia":
        case "saab 90scandia":
        case "saab-90 scandia":
        case "saab-90-scandia":
        case "saab-90scandia":
        case "saab90 scandia":
        case "saab90-scandia":
        case "saab90scandia":
        case "s 90 scandia":
        case "s 90-scandia":
        case "s 90scandia":
        case "s-90 scandia":
        case "s-90-scandia":
        case "s-90scandia":
        case "s90 scandia":
        case "s90-scandia":
        case "s90scandia":
        case "scandia":
        case "saab scandia":
        case "saab-scandia":
        case "saabscandia":
        case "saab-90":
        case "saab 90":
        case "saab90":
        case "s-90":
        case "s 90":
        case "s90":
        case "saab 90 scandia ":
        case "saab 90-scandia ":
        case "saab 90scandia ":
        case "saab-90 scandia ":
        case "saab-90-scandia ":
        case "saab-90scandia ":
        case "saab90 scandia ":
        case "saab90-scandia ":
        case "saab90scandia ":
        case "s 90 scandia ":
        case "s 90-scandia ":
        case "s 90scandia ":
        case "s-90 scandia ":
        case "s-90-scandia ":
        case "s-90scandia ":
        case "s90 scandia ":
        case "s90-scandia ":
        case "s90scandia ":
        case "scandia ":
        case "saab scandia ":
        case "saab-scandia ":
        case "saabscandia ":
        case "saab-90 ":
        case "saab 90 ":
        case "saab90 ":
        case "s-90 ":
        case "s 90 ":
        case "s90 ":
        case "id278":
        speed = 477; cap = 32; rwy = 2000; mC = 42456; range = 2510;
        fConsmp = 9.27; cConsmp = 0.11; mH = 210; price = 113217;
        n = "90 Scandia"; c = 15; pc = "saabscan"
        break;

        case "saab 2000":
        case "saab2000":
        case "saab-2000":
        case "saab 2000 ":
        case "saab2000 ":
        case "saab-2000 ":
        case "id279":
        speed = 737; cap = 58; rwy = 2000; mC = 129212; range = 2185;
        fConsmp = 6.42; cConsmp = 0.08; mH = 460; price = 1033701;
        n = "2000"; c = 15; pc = "saab"
        break;

        //SUD AVIATION
        case "caravelle-iii":
        case "caravelleiii":
        case "caravelle iii":
        case "carevelle-3":
        case "caravelle3":
        case "caravelle 3":
        case "c-iii":
        case "ciii":
        case "c iii":
        case "caravelle-iii ":
        case "caravelleiii ":
        case "caravelle iii ":
        case "carevelle-3 ":
        case "caravelle3 ":
        case "caravelle 3 ":
        case "c-iii ":
        case "ciii ":
        case "c iii ":
        case "id280":
        speed = 886; cap = 80; rwy = 7700; mC = 174584; range = 1700; fConsmp = 11.88; cConsmp = 0.14; mH = 350; price = 581947;
        n = "Caravelle III"; c = 16
        break;
        
        case "caravelle iv-r":
        case "caravelle ivr":
        case "caravelle iv r":
        case "caravelle-iv-r":
        case "caravelle-ivr":
        case "caravelle-iv r":
        case "caravelleiv-r":
        case "caravelleivr":
        case "caravelleiv r":
        case "caravelle 4-r":
        case "caravelle 4r":
        case "caravelle 4 r":
        case "caravelle-4-r":
        case "caravelle-4r":
        case "caravelle-4 r":
        case "caravelle4-r":
        case "caravelle4r":
        case "caravelle4 r":
        case "c iv-r":
        case "c ivr":
        case "c iv r":
        case "c-iv-r":
        case "c-ivr":
        case "c-iv r":
        case "civ-r":
        case "civr":
        case "civ r":
        case "c 4-r":
        case "c 4r":
        case "c 4 r":
        case "c-4-r":
        case "c-4r":
        case "c-4 r":
        case "c4-r":
        case "c4r":
        case "c4 r":
        case "caravelle iv-r ":
        case "caravelle ivr ":
        case "caravelle iv r ":
        case "caravelle-iv-r ":
        case "caravelle-ivr ":
        case "caravelle-iv r ":
        case "caravelleiv-r ":
        case "caravelleivr ":
        case "caravelleiv r ":
        case "caravelle 4-r ":
        case "caravelle 4r ":
        case "caravelle 4 r ":
        case "caravelle-4-r ":
        case "caravelle-4r ":
        case "caravelle-4 r ":
        case "caravelle4-r ":
        case "caravelle4r ":
        case "caravelle4 r ":
        case "c iv-r ":
        case "c ivr ":
        case "c iv r ":
        case "c-iv-r ":
        case "c-ivr ":
        case "c-iv r ":
        case "civ-r ":
        case "civr ":
        case "civ r ":
        case "c 4-r ":
        case "c 4r ":
        case "c 4 r ":
        case "c-4-r ":
        case "c-4r ":
        case "c-4 r ":
        case "c4-r ":
        case "c4r ":
        case "c4 r ":
        case "id281":
        speed = 828; cap = 80; rwy = 7800; mC = 239674; range = 2300; fConsmp = 10.67; cConsmp = 0.14; mH = 380; price = 826463
        n = "Caravelle IV-R"; c = 16; pc = "caravelle10b"
        break;
        
        case "caravelle iv-n":
        case "caravelle ivn":
        case "caravelle iv n":
        case "caravelle-iv-n":
        case "caravelle-ivn":
        case "caravelle-iv n":
        case "caravelleiv-n":
        case "caravelleivn":
        case "caravelleiv n":
        case "caravelle 4-n":
        case "caravelle 4n":
        case "caravelle 4 n":
        case "caravelle-4-n":
        case "caravelle-4n":
        case "caravelle-4 n":
        case "caravelle4-n":
        case "caravelle4n":
        case "caravelle4 n":
        case "c iv-n":
        case "c ivn":
        case "c iv n":
        case "c-iv-n":
        case "c-ivn":
        case "c-iv n":
        case "civ-n":
        case "civn":
        case "civ n":
        case "c 4-n":
        case "c 4n":
        case "c 4 n":
        case "c-4-n":
        case "c-4n":
        case "c-4 n":
        case "c4-n":
        case "c4n":
        case "c4 n":
        case "caravelle iv-n ":
        case "caravelle ivn ":
        case "caravelle iv n ":
        case "caravelle-iv-n ":
        case "caravelle-ivn ":
        case "caravelle-iv n ":
        case "caravelleiv-n ":
        case "caravelleivn ":
        case "caravelleiv n ":
        case "caravelle 4-n ":
        case "caravelle 4n ":
        case "caravelle 4 n ":
        case "caravelle-4-n ":
        case "caravelle-4n ":
        case "caravelle-4 n ":
        case "caravelle4-n ":
        case "caravelle4n ":
        case "caravelle4 n ":
        case "c iv-n ":
        case "c ivn ":
        case "c iv n ":
        case "c-iv-n ":
        case "c-ivn ":
        case "c-iv n ":
        case "civ-n ":
        case "civn ":
        case "civ n ":
        case "c 4-n ":
        case "c 4n ":
        case "c 4 n ":
        case "c-4-n ":
        case "c-4n ":
        case "c-4 n ":
        case "c4-n ":
        case "c4n ":
        case "c4 n ":
        case "id282":
        speed = 761; cap = 80; rwy = 7800; mC = 249106; range = 2350; fConsmp = 10.34; cConsmp = 0.14; mH = 320; price = 844429;
        n = "Caravelle IV-N"; c = 16; pc = "caravelle10b"
        break;
        
        case "caravelle 11-r":
        case "caravelle 11r":
        case "caravelle 11 r":
        case "caravelle-11-r":
        case "caravelle-11r":
        case "caravelle-11 r":
        case "caravelle11-r":
        case "caravelle11r":
        case "caravelle11 r":
        case "c 11-r":
        case "c 11r":
        case "c 11 r":
        case "c-11-r":
        case "c-11r":
        case "c-11 r":
        case "c11-r":
        case "c11r":
        case "c11 r":
        case "caravelle 11-r ":
        case "caravelle 11r ":
        case "caravelle 11 r ":
        case "caravelle-11-r ":
        case "caravelle-11r ":
        case "caravelle-11 r ":
        case "caravelle11-r ":
        case "caravelle11r ":
        case "caravelle11 r ":
        case "c 11-r ":
        case "c 11r ":
        case "c 11 r ":
        case "c-11-r ":
        case "c-11r ":
        case "c-11 r ":
        case "c11-r ":
        case "c11r ":
        case "c11 r ":
        case "id283":
        speed = 896; cap = 99; rwy = 7550; mC = 283222; range = 2300; fConsmp = 10.4; cConsmp = 0.12; mH = 350; price = 1089317;
        n = "Caravelle 11-R"; c = 16; pc = "caravelle10b"
        break;
        
        case "caravelle 10-b":
        case "caravelle 10b":
        case "caravelle 10 b":
        case "caravelle-10-b":
        case "caravelle-10b":
        case "caravelle-10 b":
        case "caravelle10-b":
        case "caravelle10b":
        case "caravelle10 b":
        case "c 10-b":
        case "c 10b":
        case "c 10 b":
        case "c-10-b":
        case "c-10b":
        case "c-10 b":
        case "c10-b":
        case "c10b":
        case "c10 b":
        case "caravelle 10-b ":
        case "caravelle 10b ":
        case "caravelle 10 b ":
        case "caravelle-10-b ":
        case "caravelle-10b ":
        case "caravelle-10 b ":
        case "caravelle10-b ":
        case "caravelle10b ":
        case "caravelle10 b ":
        case "c 10-b ":
        case "c 10b ":
        case "c 10 b ":
        case "c-10-b ":
        case "c-10b ":
        case "c-10 b ":
        case "c10-b ":
        case "c10b ":
        case "c10 b ":
        case "id284":
        speed = 924; cap = 105; rwy = 7500; mC = 335560; range = 2650; fConsmp = 11.44; cConsmp = 0.14; mH = 320; price = 1220219;
        n = "Caravelle 10-B"; c = 16; pc = "caravelle10b"
        break;
        
        case "caravelle 10-r":
        case "caravelle 10r":
        case "caravelle 10 r":
        case "caravelle-10-r":
        case "caravelle-10r":
        case "caravelle-10 r":
        case "caravelle10-r":
        case "caravelle10r":
        case "caravelle10 r":
        case "c 10-r":
        case "c 10r":
        case "c 10 r":
        case "c-10-r":
        case "c-10r":
        case "c-10 r":
        case "c10-r":
        case "c10r":
        case "c10 r":
        case "caravelle 10-r ":
        case "caravelle 10r ":
        case "caravelle 10 r ":
        case "caravelle-10-r ":
        case "caravelle-10r ":
        case "caravelle-10 r ":
        case "caravelle10-r ":
        case "caravelle10r ":
        case "caravelle10 r ":
        case "c 10-r ":
        case "c 10r ":
        case "c 10 r ":
        case "c-10-r ":
        case "c-10r ":
        case "c-10 r ":
        case "c10-r ":
        case "c10r ":
        case "c10 r ":
        case "id285":
        speed = 896; cap = 80; rwy = 7500; mC = 357020; range = 3455; fConsmp = 10.4; cConsmp = 0.12; mH = 360; price = 1322298;
        n = "Caravelle 10-R"; c = 16; pc = "caravelle10b"
        break;
        
        case "caravelle 12":
        case "caravelle12":
        case "caravelle-12":
        case "caravelle 12 ":
        case "caravelle12 ":
        case "caravelle-12 ":
        case "id286":
        speed = 924; cap = 140; rwy = 7600; mC = 417730; range = 3465; fConsmp = 13.65; cConsmp = 0.16; mH = 340; price = 1740539
        n = "Caravelle 12"; c = 16; pc = "caravelle12"
        break;

        //SUKHOI
        case "su-80-gp":
        case "su-80gp":
        case "su-80 gp":
        case "su 80-gp":
        case "su 80gp":
        case "su 80 gp":
        case "su80-gp":
        case "su80gp":
        case "su80 gp":
        case "su 80":
        case "su80":
        case "su-80":
        case "su-80-gp ":
        case "su-80gp ":
        case "su-80 gp ":
        case "su 80-gp ":
        case "su 80gp ":
        case "su 80 gp ":
        case "su80-gp ":
        case "su80gp ":
        case "su80 gp ":
        case "su 80 ":
        case "su80 ":
        case "su-80 ":
        case "id287":
        speed = 391; cap = 30; rwy = 2000; mC = 8274; range = 1300; fConsmp = 15.47; cConsmp = 0.21; mH = 450; price = 510000;
        n = "SU-80GP"; c = 17; pc = "su80gp"
        break;
        
        case "superjet 100-75":
        case "superjet 10075":
        case "superjet 100 75":
        case "superjet-100-75":
        case "superjet-10075":
        case "superjet-100 75":
        case "superjet100-75":
        case "superjet10075":
        case "superjet100 75":
        case "superjet 175":
        case "superjet-175":
        case "superjet175":
        case "sj 100-75":
        case "sj 10075":
        case "sj 100 75":
        case "sj-100-75":
        case "sj-10075":
        case "sj-100 75":
        case "sj100-75":
        case "sj10075":
        case "sj100 75":
        case "sj 175":
        case "sj-175":
        case "sj175":
        case "superjet 100-75 ":
        case "superjet 10075 ":
        case "superjet 100 75 ":
        case "superjet-100-75 ":
        case "superjet-10075 ":
        case "superjet-100 75 ":
        case "superjet100-75 ":
        case "superjet10075 ":
        case "superjet100 75 ":
        case "superjet 175 ":
        case "superjet-175 ":
        case "superjet175 ":
        case "sj 100-75 ":
        case "sj 10075 ":
        case "sj 100 75 ":
        case "sj-100-75 ":
        case "sj-10075 ":
        case "sj-100 75 ":
        case "sj100-75 ":
        case "sj10075 ":
        case "sj100 75 ":
        case "sj 175 ":
        case "sj-175 ":
        case "sj175 ":
        case "id288":
        speed = 1017; cap = 78; rwy = 4970; mC = 56370; range = 2900; fConsmp = 19.26; cConsmp = 0.13; mH = 400; price = 1593374
        n = "SuperJet 100-75"; c = 17; pc = "superjet"
        break;
        
        case "superjet 100-95":
        case "superjet 10095":
        case "superjet 100 95":
        case "superjet-100-95":
        case "superjet-10095":
        case "superjet-100 95":
        case "superjet100-95":
        case "superjet10095":
        case "superjet100 95":
        case "superjet 195":
        case "superjet-195":
        case "superjet195":
        case "sj 100-95":
        case "sj 10095":
        case "sj 100 95":
        case "sj-100-95":
        case "sj-10095":
        case "sj-100 95":
        case "sj100-95":
        case "sj10095":
        case "sj100 95":
        case "sj 195":
        case "sj-195":
        case "sj195":
        case "superjet 100-95 ":
        case "superjet 10095 ":
        case "superjet 100 95 ":
        case "superjet-100-95 ":
        case "superjet-10095 ":
        case "superjet-100 95 ":
        case "superjet100-95 ":
        case "superjet10095 ":
        case "superjet100 95 ":
        case "superjet 195 ":
        case "superjet-195 ":
        case "superjet195 ":
        case "sj 100-95 ":
        case "sj 10095 ":
        case "sj 100 95 ":
        case "sj-100-95 ":
        case "sj-10095 ":
        case "sj-100 95 ":
        case "sj100-95 ":
        case "sj10095 ":
        case "sj100 95 ":
        case "sj 195 ":
        case "sj-195 ":
        case "sj195 ":
        case "id289":
        speed = 839; cap = 98; rwy = 2000; mC = 64410; range = 2950; fConsmp = 9.63; cConsmp = 0.11; mH = 500; price = 1610270
        n = "SuperJet 100-95"; c = 17; pc = "superjet100-95"
        break;
        
        case "superjet 100-60":
        case "superjet 10060":
        case "superjet 100 60":
        case "superjet-100-60":
        case "superjet-10060":
        case "superjet-100 60":
        case "superjet100-60":
        case "superjet10060":
        case "superjet100 60":
        case "superjet 160":
        case "superjet-160":
        case "superjet160":
        case "sj 100-60":
        case "sj 10060":
        case "sj 100 60":
        case "sj-100-60":
        case "sj-10060":
        case "sj-100 60":
        case "sj100-60":
        case "sj10060":
        case "sj100 60":
        case "sj 160":
        case "sj-160":
        case "sj160":
        case "superjet 100-60 ":
        case "superjet 10060 ":
        case "superjet 100 60 ":
        case "superjet-100-60 ":
        case "superjet-10060 ":
        case "superjet-100 60 ":
        case "superjet100-60 ":
        case "superjet10060 ":
        case "superjet100 60 ":
        case "superjet 160 ":
        case "superjet-160 ":
        case "superjet160 ":
        case "sj 100-60 ":
        case "sj 10060 ":
        case "sj 100 60 ":
        case "sj-100-60 ":
        case "sj-10060 ":
        case "sj-100 60 ":
        case "sj100-60 ":
        case "sj10060 ":
        case "sj100 60 ":
        case "sj 160 ":
        case "sj-160 ":
        case "sj160 ":
        case "id290":
        speed = 1017; cap = 68; rwy = 4900; mC = 61082; range = 3204; fConsmp = 17.12; cConsmp = 0.11; mH = 400; price = 1642969
        n = "SuperJet 100-60"; c = 17; pc = "superjet"
        break;
        
        case "superjet 100-95lr":
        case "superjet 10095lr":
        case "superjet 100 95lr":
        case "superjet-100-95lr":
        case "superjet-10095lr":
        case "superjet-100 95lr":
        case "superjet100-95lr":
        case "superjet10095lr":
        case "superjet100 95lr":
        case "superjet 195lr":
        case "superjet-195lr":
        case "superjet195lr":
        case "sj 100-95lr":
        case "sj 10095lr":
        case "sj 100 95lr":
        case "sj-100-95lr":
        case "sj-10095lr":
        case "sj-100 95lr":
        case "sj100-95lr":
        case "sj10095lr":
        case "sj100 95lr":
        case "sj 195lr":
        case "sj-195lr":
        case "sj195lr":
        case "superjet 100-95-lr":
        case "superjet 10095-lr":
        case "superjet 100 95-lr":
        case "superjet-100-95-lr":
        case "superjet-10095-lr":
        case "superjet-100 95-lr":
        case "superjet100-95-lr":
        case "superjet10095-lr":
        case "superjet100 95-lr":
        case "superjet 195-lr":
        case "superjet-195-lr":
        case "superjet195-lr":
        case "sj 100-95-lr":
        case "sj 10095-lr":
        case "sj 100 95-lr":
        case "sj-100-95-lr":
        case "sj-10095-lr":
        case "sj-100 95-lr":
        case "sj100-95-lr":
        case "sj10095-lr":
        case "sj100 95-lr":
        case "sj 195-lr":
        case "sj-195-lr":
        case "sj195-lr":
        case "superjet 100-95 lr":
        case "superjet 10095 lr":
        case "superjet 100 95 lr":
        case "superjet-100-95 lr":
        case "superjet-10095 lr":
        case "superjet-100 95 lr":
        case "superjet100-95 lr":
        case "superjet10095 lr":
        case "superjet100 95 lr":
        case "superjet 195 lr":
        case "superjet-195 lr":
        case "superjet195 lr":
        case "sj 100-95 lr":
        case "sj 10095 lr":
        case "sj 100 95 lr":
        case "sj-100-95 lr":
        case "sj-10095 lr":
        case "sj-100 95 lr":
        case "sj100-95 lr":
        case "sj10095 lr":
        case "sj100 95 lr":
        case "sj 195 lr":
        case "sj-195 lr":
        case "sj195 lr":
        case "superjet 100-95lr ":
        case "superjet 10095lr ":
        case "superjet 100 95lr ":
        case "superjet-100-95lr ":
        case "superjet-10095lr ":
        case "superjet-100 95lr ":
        case "superjet100-95lr ":
        case "superjet10095lr ":
        case "superjet100 95lr ":
        case "superjet 195lr ":
        case "superjet-195lr ":
        case "superjet195lr ":
        case "sj 100-95lr ":
        case "sj 10095lr ":
        case "sj 100 95lr ":
        case "sj-100-95lr ":
        case "sj-10095lr ":
        case "sj-100 95lr ":
        case "sj100-95lr ":
        case "sj10095lr ":
        case "sj100 95lr ":
        case "sj 195lr ":
        case "sj-195lr ":
        case "sj195lr ":
        case "superjet 100-95-lr ":
        case "superjet 10095-lr ":
        case "superjet 100 95-lr ":
        case "superjet-100-95-lr ":
        case "superjet-10095-lr ":
        case "superjet-100 95-lr ":
        case "superjet100-95-lr ":
        case "superjet10095-lr ":
        case "superjet100 95-lr ":
        case "superjet 195-lr ":
        case "superjet-195-lr ":
        case "superjet195-lr ":
        case "sj 100-95-lr ":
        case "sj 10095-lr ":
        case "sj 100 95-lr ":
        case "sj-100-95-lr ":
        case "sj-10095-lr ":
        case "sj-100 95-lr ":
        case "sj100-95-lr ":
        case "sj10095-lr ":
        case "sj100 95-lr ":
        case "sj 195-lr ":
        case "sj-195-lr ":
        case "sj195-lr ":
        case "superjet 100-95 lr":
        case "superjet 10095 lr":
        case "superjet 100 95 lr":
        case "superjet-100-95 lr":
        case "superjet-10095 lr":
        case "superjet-100 95 lr":
        case "superjet100-95 lr":
        case "superjet10095 lr":
        case "superjet100 95 lr":
        case "superjet 195 lr":
        case "superjet-195 lr":
        case "superjet195 lr":
        case "sj 100-95 lr":
        case "sj 10095 lr":
        case "sj 100 95 lr":
        case "sj-100-95 lr":
        case "sj-10095 lr":
        case "sj-100 95 lr":
        case "sj100-95 lr":
        case "sj10095 lr":
        case "sj100 95 lr":
        case "sj 195 lr":
        case "sj-195 lr":
        case "sj195 lr":
        case "id291":
        speed = 1017; cap = 98; rwy = 6730; mC = 105920; range = 4578; fConsmp = 20.33; cConsmp = 0.15; mH = 400; price = 4114953
        n = "SuperJet 100-95LR"; c = 17; pc = "superjet"
        break;

        //TUPOLEV
        case "tu-104":
        case "tu104":
        case "tu 104":
        case "t-104":
        case "t104":
        case "t 104":
        case "tu-104 ":
        case "tu104 ":
        case "tu 104 ":
        case "t-104 ":
        case "t104 ":
        case "t 104 ":
        case "id292":
        speed = 826; cap = 50; rwy = 2000; mC = 77182; range = 2750; fConsmp = 16.8; cConsmp = 0.2; mH = 330; price = 241193;
        n = "Tu-104"; c = 18; pc = "tu104"
        break;
        
        case "tu-124":
        case "tu124":
        case "tu 124":
        case "t-124":
        case "t124":
        case "t 124":
        case "tu-124 ":
        case "tu124 ":
        case "tu 124 ":
        case "t-124 ":
        case "t124 ":
        case "t 124 ":
        case "id293":
        speed = 972; cap = 56; rwy = 2000; mC = 160340; range = 2100; fConsmp = 11.44; cConsmp = 0.14; mH = 380; price = 562598
        n = "Tu-124"; c = 18; pc = "tu104"
        break;
        
        case "tu-104a":
        case "tu104a":
        case "tu 104a":
        case "t-104a":
        case "t104a":
        case "t 104a":
        case "tu-104-a":
        case "tu104-a":
        case "tu 104-a":
        case "t-104-a":
        case "t104-a":
        case "t 104-a":
        case "tu-104 a":
        case "tu104 a":
        case "tu 104 a":
        case "t-104 a":
        case "t104 a":
        case "t 104 a":
        case "tu-104a ":
        case "tu104a ":
        case "tu 104a ":
        case "t-104a ":
        case "t104a ":
        case "t 104a ":
        case "tu-104-a ":
        case "tu104-a ":
        case "tu 104-a ":
        case "t-104-a ":
        case "t104-a ":
        case "t 104-a ":
        case "tu-104 a":
        case "tu104 a":
        case "tu 104 a":
        case "t-104 a":
        case "t104 a":
        case "t 104 a":
        case "id294":
        speed = 765; cap = 70; rwy = 2000; mC = 194650; range = 2750; fConsmp = 13.65; cConsmp = 0.16; mH = 320; price = 627900
        n = "Tu-104A"; c = 18; pc = "tu104"
        break;
        
        case "tu-134a":
        case "tu134a":
        case "tu 134a":
        case "t-134a":
        case "t134a":
        case "t 134a":
        case "tu-134-a":
        case "tu134-a":
        case "tu 134-a":
        case "t-134-a":
        case "t134-a":
        case "t 134-a":
        case "tu-134 a":
        case "tu134 a":
        case "tu 134 a":
        case "t-134 a":
        case "t134 a":
        case "t 134 a":
        case "tu-134a ":
        case "tu134a ":
        case "tu 134a ":
        case "t-134a ":
        case "t134a ":
        case "t 134a ":
        case "tu-134-a ":
        case "tu134-a ":
        case "tu 134-a ":
        case "t-134-a ":
        case "t134-a ":
        case "t 134-a ":
        case "tu-134 a ":
        case "tu134 a ":
        case "tu 134 a ":
        case "t-134 a ":
        case "t134 a ":
        case "t 134 a ":
        case "id295":
        speed = 799; cap = 76; rwy = 2000; mC = 178560; range = 2000; fConsmp = 11; cConsmp = 0.14; mH = 380; price = 686770
        n = "Tu-134A"; c = 18; pc = "tu134a"
        break;

        case "tu-104d":
        case "tu104d":
        case "tu 104d":
        case "t-104d":
        case "t104d":
        case "t 104d":
        case "tu-104-d":
        case "tu104-d":
        case "tu 104-d":
        case "t-104-d":
        case "t104-d":
        case "t 104-d":
        case "tu-104 d":
        case "tu104 d":
        case "tu 104 d":
        case "t-104 d":
        case "t104 d":
        case "t 104 d":
        case "tu-104d ":
        case "tu104d ":
        case "tu 104d ":
        case "t-104d ":
        case "t104d ":
        case "t 104d ":
        case "tu-104-d ":
        case "tu104-d ":
        case "tu 104-d ":
        case "t-104-d ":
        case "t104-d ":
        case "t 104-d ":
        case "tu-104 d ":
        case "tu104 d ":
        case "tu 104 d ":
        case "t-104 d ":
        case "t104 d ":
        case "t 104 d ":
        case "id296":
        speed = 765; cap = 85; rwy = 2000; mC = 216664; range = 2750
        fConsmp = 14.7; cConsmp = 0.18; mH = 360; price = 698913
        n = "Tu-104D"; c = 18; pc = "tu104"
        break;

        case "tu-104b":
        case "tu104b":
        case "tu 104b":
        case "t-104b":
        case "t104b":
        case "t 104b":
        case "tu-104-b":
        case "tu104-b":
        case "tu 104-b":
        case "t-104-b":
        case "t104-b":
        case "t 104-b":
        case "tu-104 b":
        case "tu104 b":
        case "tu 104 b":
        case "t-104 b":
        case "t104 b":
        case "t 104 b":
        case "tu-104b ":
        case "tu104b ":
        case "tu 104b ":
        case "t-104b ":
        case "t104b ":
        case "t 104b ":
        case "tu-104-b ":
        case "tu104-b ":
        case "tu 104-b ":
        case "t-104-b ":
        case "t104-b ":
        case "t 104-b ":
        case "tu-104 b ":
        case "tu104 b ":
        case "tu 104 b ":
        case "t-104 b ":
        case "t104 b ":
        case "t 104 b ":
        case "id297":
        speed = 795; cap = 100; rwy = 2000; mC = 222764; range = 2650
        fConsmp = 15.84; cConsmp = 0.2; mH = 350; price = 742545
        n = "Tu-104B"; c = 18; pc = "tu104"
        break;

        case "tu-110":
        case "tu110":
        case "tu 110":
        case "t-110":
        case "t110":
        case "t 110":
        case "tu-110 ":
        case "tu110 ":
        case "tu 110 ":
        case "t-110 ":
        case "t110 ":
        case "t 110 ":
        case "id298":
        speed = 899; cap = 100; rwy = 2000; mC = 325262; range = 3450
        fConsmp = 17.44; cConsmp = 0.2; mH = 360; price = 1049234
        n = "Tu-110"; c = 18; pc = "tu104"
        break;

        case "tu-334-200":
        case "tu-334200":
        case "tu-334 200":
        case "tu 334-200":
        case "tu 334200":
        case "tu 334 200":
        case "tu334-200":
        case "tu334200":
        case "tu334 200":
        case "t-334-200":
        case "t-334200":
        case "t-334 200":
        case "t 334-200":
        case "t 334200":
        case "t 334 200":
        case "t334-200":
        case "t334200":
        case "t334 200":
        case "tu-334-200 ":
        case "tu-334200 ":
        case "tu-334 200 ":
        case "tu 334-200 ":
        case "tu 334200 ":
        case "tu 334 200 ":
        case "tu334-200 ":
        case "tu334200 ":
        case "tu334 200 ":
        case "t-334-200 ":
        case "t-334200 ":
        case "t-334 200 ":
        case "t 334-200 ":
        case "t 334200 ":
        case "t 334 200 ":
        case "t334-200 ":
        case "t334200 ":
        case "t334 200 ":
        case "id299":
        speed = 828; cap = 126; rwy = 2000; mC = 155346; range = 2200
        fConsmp = 9.72; cConsmp = 0.11; mH = 500; price = 1553460
        n = "Tu-334-200"; c = 18; pc = "tu334"
        break;

        case "tu-334-220":
        case "tu-334220":
        case "tu-334 220":
        case "tu 334-220":
        case "tu 334220":
        case "tu 334 220":
        case "tu334-220":
        case "tu334220":
        case "tu334 220":
        case "t-334-220":
        case "t-334220":
        case "t-334 220":
        case "t 334-220":
        case "t 334220":
        case "t 334 220":
        case "t334-220":
        case "t334220":
        case "t334 220":
        case "tu-334-220 ":
        case "tu-334220 ":
        case "tu-334 220 ":
        case "tu 334-220 ":
        case "tu 334220 ":
        case "tu 334 220 ":
        case "tu334-220 ":
        case "tu334220 ":
        case "tu334 220 ":
        case "t-334-220 ":
        case "t-334220 ":
        case "t-334 220 ":
        case "t 334-220 ":
        case "t 334220 ":
        case "t 334 220 ":
        case "t334-220 ":
        case "t334220 ":
        case "t334 220 ":
        case "id300":
        speed = 799; cap = 126; rwy = 2000; mC = 161030; range = 2200
        fConsmp = 8.19; cConsmp = 0.11; mH = 480; price = 1610294
        n = "Tu-334-220"; c = 18; pc = "tu334"
        break;

        case "tu-334-100":
        case "tu-334100":
        case "tu-334 100":
        case "tu 334-100":
        case "tu 334100":
        case "tu 334 100":
        case "tu334-100":
        case "tu334100":
        case "tu334 100":
        case "t-334-100":
        case "t-334100":
        case "t-334 100":
        case "t 334-100":
        case "t 334100":
        case "t 334 100":
        case "t334-100":
        case "t334100":
        case "t334 100":
        case "tu-334-100 ":
        case "tu-334100 ":
        case "tu-334 100 ":
        case "tu 334-100 ":
        case "tu 334100 ":
        case "tu 334 100 ":
        case "tu334-100 ":
        case "tu334100 ":
        case "tu334 100 ":
        case "t-334-100 ":
        case "t-334100 ":
        case "t-334 100 ":
        case "t 334-100 ":
        case "t 334100 ":
        case "t 334 100 ":
        case "t334-100 ":
        case "t334100 ":
        case "t334 100 ":
        case "id301":
        speed = 795; cap = 102; rwy = 2000; mC = 180060; range = 3150
        fConsmp = 8.1; cConsmp = 0.11; mH = 450; price = 1800602
        n = "Tu-334-100"; c = 18; pc = "tu334"
        break;

        case "tu-334-100d":
        case "tu-334100d":
        case "tu-334 100d":
        case "tu 334-100d":
        case "tu 334100d":
        case "tu 334 100d":
        case "tu334-100d":
        case "tu334100d":
        case "tu334 100d":
        case "t-334-100d":
        case "t-334100d":
        case "t-334 100d":
        case "t 334-100d":
        case "t 334100d":
        case "t 334 100d":
        case "t334-100d":
        case "t334100d":
        case "t334 100d":
        case "tu-334-100-d":
        case "tu-334100-d":
        case "tu-334 100-d":
        case "tu 334-100-d":
        case "tu 334100-d":
        case "tu 334 100-d":
        case "tu334-100-d":
        case "tu334100-d":
        case "tu334 100-d":
        case "t-334-100-d":
        case "t-334100-d":
        case "t-334 100-d":
        case "t 334-100-d":
        case "t 334100-d":
        case "t 334 100-d":
        case "t334-100-d":
        case "t334100-d":
        case "t334 100-d":
        case "tu-334-100 d":
        case "tu-334100 d":
        case "tu-334 100 d":
        case "tu 334-100 d":
        case "tu 334100 d":
        case "tu 334 100 d":
        case "tu334-100 d":
        case "tu334100 d":
        case "tu334 100 d":
        case "t-334-100 d":
        case "t-334100 d":
        case "t-334 100 d":
        case "t 334-100 d":
        case "t 334100 d":
        case "t 334 100 d":
        case "t334-100 d":
        case "t334100 d":
        case "t334 100 d":
        case "tu-334-100d ":
        case "tu-334100d ":
        case "tu-334 100d ":
        case "tu 334-100d ":
        case "tu 334100d ":
        case "tu 334 100d ":
        case "tu334-100d ":
        case "tu334100d ":
        case "tu334 100d ":
        case "t-334-100d ":
        case "t-334100d ":
        case "t-334 100d ":
        case "t 334-100d ":
        case "t 334100d ":
        case "t 334 100d ":
        case "t334-100d ":
        case "t334100d ":
        case "t334 100d ":
        case "tu-334-100-d ":
        case "tu-334100-d ":
        case "tu-334 100-d ":
        case "tu 334-100-d ":
        case "tu 334100-d ":
        case "tu 334 100-d ":
        case "tu334-100-d ":
        case "tu334100-d ":
        case "tu334 100-d ":
        case "t-334-100-d ":
        case "t-334100-d ":
        case "t-334 100-d ":
        case "t 334-100-d ":
        case "t 334100-d ":
        case "t 334 100-d ":
        case "t334-100-d ":
        case "t334100-d ":
        case "t334 100-d ":
        case "tu-334-100 d ":
        case "tu-334100 d ":
        case "tu-334 100 d ":
        case "tu 334-100 d ":
        case "tu 334100 d ":
        case "tu 334 100 d ":
        case "tu334-100 d ":
        case "tu334100 d ":
        case "tu334 100 d ":
        case "t-334-100 d ":
        case "t-334100 d ":
        case "t-334 100 d ":
        case "t 334-100 d ":
        case "t 334100 d ":
        case "t 334 100 d ":
        case "t334-100 d ":
        case "t334100 d ":
        case "t334 100 d ":
        case "id302":
        speed = 828; cap = 102; rwy = 2000; mC = 234364; range = 4100
        fConsmp = 9.72; cConsmp = 0.11; mH = 450; price = 2343641
        n = "Tu-334-100D"; c = 18; pc = "tu334"
        break;

        case "tu-334-120d":
        case "tu-334120d":
        case "tu-334 120d":
        case "tu 334-120d":
        case "tu 334120d":
        case "tu 334 120d":
        case "tu334-120d":
        case "tu334120d":
        case "tu334 120d":
        case "t-334-120d":
        case "t-334120d":
        case "t-334 120d":
        case "t 334-120d":
        case "t 334120d":
        case "t 334 120d":
        case "t334-120d":
        case "t334120d":
        case "t334 120d":
        case "tu-334-120-d":
        case "tu-334120-d":
        case "tu-334 120-d":
        case "tu 334-120-d":
        case "tu 334120-d":
        case "tu 334 120-d":
        case "tu334-120-d":
        case "tu334120-d":
        case "tu334 120-d":
        case "t-334-120-d":
        case "t-334120-d":
        case "t-334 120-d":
        case "t 334-120-d":
        case "t 334120-d":
        case "t 334 120-d":
        case "t334-120-d":
        case "t334120-d":
        case "t334 120-d":
        case "tu-334-120 d":
        case "tu-334120 d":
        case "tu-334 120 d":
        case "tu 334-120 d":
        case "tu 334120 d":
        case "tu 334 120 d":
        case "tu334-120 d":
        case "tu334120 d":
        case "tu334 120 d":
        case "t-334-120 d":
        case "t-334120 d":
        case "t-334 120 d":
        case "t 334-120 d":
        case "t 334120 d":
        case "t 334 120 d":
        case "t334-120 d":
        case "t334120 d":
        case "t334 120 d":
        case "tu-334-120d ":
        case "tu-334120d ":
        case "tu-334 120d ":
        case "tu 334-120d ":
        case "tu 334120d ":
        case "tu 334 120d ":
        case "tu334-120d ":
        case "tu334120d ":
        case "tu334 120d ":
        case "t-334-120d ":
        case "t-334120d ":
        case "t-334 120d ":
        case "t 334-120d ":
        case "t 334120d ":
        case "t 334 120d ":
        case "t334-120d ":
        case "t334120d ":
        case "t334 120d ":
        case "tu-334-120-d ":
        case "tu-334120-d ":
        case "tu-334 120-d ":
        case "tu 334-120-d ":
        case "tu 334120-d ":
        case "tu 334 120-d ":
        case "tu334-120-d ":
        case "tu334120-d ":
        case "tu334 120-d ":
        case "t-334-120-d ":
        case "t-334120-d ":
        case "t-334 120-d ":
        case "t 334-120-d ":
        case "t 334120-d ":
        case "t 334 120-d ":
        case "t334-120-d ":
        case "t334120-d ":
        case "t334 120-d ":
        case "tu-334-120 d ":
        case "tu-334120 d ":
        case "tu-334 120 d ":
        case "tu 334-120 d ":
        case "tu 334120 d ":
        case "tu 334 120 d ":
        case "tu334-120 d ":
        case "tu334120 d ":
        case "tu334 120 d ":
        case "t-334-120 d ":
        case "t-334120 d ":
        case "t-334 120 d ":
        case "t 334-120 d ":
        case "t 334120 d ":
        case "t 334 120 d ":
        case "t334-120 d ":
        case "t334120 d ":
        case "t334 120 d ":
        case "id303":
        speed = 733; cap = 102; rwy = 2000; mC = 260086; range = 4100
        fConsmp = 7.28; cConsmp = 0.1; mH = 460; price = 2600869
        n = "Tu-334-120D"; c = 18; pc = "tu334"
        break;

        case "tu-154m":
        case "tu154m":
        case "tu 154m":
        case "t-154m":
        case "t154m":
        case "t 154m":
        case "tu-154-m":
        case "tu154-m":
        case "tu 154-m":
        case "t-154-m":
        case "t154-m":
        case "t 154-m":
        case "tu-154 m":
        case "tu154 m":
        case "tu 154 m":
        case "t-154 m":
        case "t154 m":
        case "t 154 m":
        case "tu-154m ":
        case "tu154m ":
        case "tu 154m ":
        case "t-154m ":
        case "t154m ":
        case "t 154m ":
        case "tu-154-m ":
        case "tu154-m ":
        case "tu 154-m ":
        case "t-154-m ":
        case "t154-m ":
        case "t 154-m ":
        case "tu-154 m ":
        case "tu154 m ":
        case "tu 154 m ":
        case "t-154 m ":
        case "t154 m ":
        case "t 154 m ":
        case "id304":
        speed = 893; cap = 180; rwy = 2000; mC = 790020; range = 4000
        fConsmp = 13.02; cConsmp = 0.18; mH = 320; price = 4514400
        n = "Tu-154M"; c = 18; pc = "tu154"
        break;

        case "tu-154":
        case "tu154":
        case "tu 154":
        case "t-154":
        case "t154":
        case "t 154":
        case "tu-154 ":
        case "tu154 ":
        case "tu 154 ":
        case "t-154 ":
        case "t154 ":
        case "t 154 ":
        case "id305":
        speed = 893; cap = 180; rwy = 2000; mC = 1200314; range = 5280
        fConsmp = 14.88; cConsmp = 0.2; mH = 390; price = 5107721
        n = "Tu-154"; c = 18; pc = "tu154"
        break;

        case "tu-204-300":
        case "tu-204 300":
        case "tu-204300":
        case "tu 204-300":
        case "tu 204 300":
        case "tu 204300":
        case "tu204-300":
        case "tu204 300":
        case "tu204300":
        case "t-204-300":
        case "t-204 300":
        case "t-204300":
        case "t 204-300":
        case "t 204 300":
        case "t 204300":
        case "t204-300":
        case "t204 300":
        case "t204300":
        case "tu-204-300 ":
        case "tu-204 300 ":
        case "tu-204300 ":
        case "tu 204-300 ":
        case "tu 204 300 ":
        case "tu 204300 ":
        case "tu204-300 ":
        case "tu204 300 ":
        case "tu204300 ":
        case "t-204-300 ":
        case "t-204 300 ":
        case "t-204300 ":
        case "t 204-300 ":
        case "t 204 300 ":
        case "t 204300 ":
        case "t204-300 ":
        case "t204 300 ":
        case "t204300 ":
        case "id306":
        speed = 833; cap = 164; rwy = 2000; mC = 718962; range = 5800
        fConsmp = 12.74; cConsmp = 0.16; mH = 490; price = 5991344
        n = "Tu-204-300"; c = 18; pc = "tu204"
        break;
        
        case "tu-204-120":
        case "tu-204 120":
        case "tu-204120":
        case "tu 204-120":
        case "tu 204 120":
        case "tu 204120":
        case "tu204-120":
        case "tu204 120":
        case "tu2043120":
        case "t-204-120":
        case "t-204 120":
        case "t-204120":
        case "t 204-120":
        case "t 204 120":
        case "t 204120":
        case "t204-120":
        case "t204 120":
        case "t204120":
        case "tu-204-120 ":
        case "tu-204 120 ":
        case "tu-204120 ":
        case "tu 204-120 ":
        case "tu 204 120 ":
        case "tu 204120 ":
        case "tu204-120 ":
        case "tu204 120 ":
        case "tu2043120 ":
        case "t-204-120 ":
        case "t-204 120 ":
        case "t-204120 ":
        case "t 204-120 ":
        case "t 204 120 ":
        case "t 204120 ":
        case "t204-120 ":
        case "t204 120 ":
        case "t204120 ":
        case "id307":
        speed = 834; cap = 210; rwy = 2000; mC = 767152; range = 4100
        fConsmp = 11.44; cConsmp = 0.14; mH = 480; price = 6137208
        n = "Tu-204-120"; c = 18; pc = "tu204"
        break;

        case "tu-204-100":
        case "tu-204 100":
        case "tu-204100":
        case "tu 204-100":
        case "tu 204 100":
        case "tu 204100":
        case "tu204-100":
        case "tu204 100":
        case "tu2043100":
        case "t-204-100":
        case "t-204 100":
        case "t-204100":
        case "t 204-100":
        case "t 204 100":
        case "t 204100":
        case "t204-100":
        case "t204 100":
        case "t204100":
        case "tu-204-100 ":
        case "tu-204 100 ":
        case "tu-204100 ":
        case "tu 204-100 ":
        case "tu 204 100 ":
        case "tu 204100 ":
        case "tu204-100 ":
        case "tu204 100 ":
        case "tu2043100 ":
        case "t-204-100 ":
        case "t-204 100 ":
        case "t-204100 ":
        case "t 204-100 ":
        case "t 204 100 ":
        case "t 204100 ":
        case "t204-100 ":
        case "t204 100 ":
        case "t204100 ":
        case "id308":
        speed = 702; cap = 210; rwy = 2000; mC = 804574; range = 4300;
        fConsmp = 10.78; cConsmp = 0.14; mH = 470; price = 6436584
        n = "Tu-204-200"; c = 18; pc = "tu204"
        break;

        case "tu-214":
        case "tu214":
        case "tu 214":
        case "t-214":
        case "t214":
        case "t 214":
        case "tu-214 ":
        case "tu214 ":
        case "tu 214 ":
        case "t-214 ":
        case "t214 ":
        case "t 214 ":
        case "id309":
        speed = 729; cap = 210; rwy = 2000; mC = 812244; range = 4341;
        fConsmp = 10.78; cConsmp = 0.14; mH = 490; price = 6497956
        n = "Tu-214"; c = 18; pc = "tu204"
        break;

        //DORNIER
        case "328-100":
        case "328100":
        case "328 100":
        case "328-1":
        case "328 1":
        case "d328-100":
        case "d328100":
        case "d328 100":
        case "d-328-100":
        case "d-328100":
        case "d-328 100":
        case "id310":
        speed = 639; cap = 33; rwy = 4485; mC = 53296; range = 1310
        fConsmp = 12.6; cConsmp = 0.19; mH = 400; price = 561000
        n = "328-100"; c = 19; pc = "328-100"
        break;

        case "328-310-jet":
        case "328-310 jet":
        case "328-310jet":
        case "328 310-jet":
        case "328 310 jet":
        case "328 310jet":
        case "328310-jet":
        case "328310 jet":
        case "328310jet":
        case "d328-310-jet":
        case "d328-310 jet":
        case "d328-310jet":
        case "d328 310-jet":
        case "d328 310 jet":
        case "d328 310jet":
        case "d328310-jet":
        case "d328310 jet":
        case "d328310jet":
        case "328-310":
        case "328310":
        case "328 310":
        case "d328-310":
        case "d328310":
        case "d328 310":
        case "328-310-jet ":
        case "328-310 jet ":
        case "328-310jet ":
        case "328 310-jet ":
        case "328 310 jet ":
        case "328 310jet ":
        case "328310-jet ":
        case "328310 jet ":
        case "328310jet ":
        case "d328-310-jet ":
        case "d328-310 jet ":
        case "d328-310jet ":
        case "d328 310-jet ":
        case "d328 310 jet ":
        case "d328 310jet ":
        case "d328310-jet ":
        case "d328310 jet ":
        case "d328310jet ":
        case "328-310 ":
        case "328310 ":
        case "328 310 ":
        case "d328-310 ":
        case "d328310 ":
        case "d328 310 ":
        case "id311":
        speed = 710; cap = 33; rwy = 4485; mC = 53296; range = 1980
        fConsmp = 12.74; cConsmp = 0.22; mH = 400; price = 561000
        n = "328-310JET"; c = 19; pc = "328jet"
        break;

        case "428jet":
        case "428 jet":
        case "428-jet":
        case "d428jet":
        case "d428 jet":
        case "d428-jet":
        case "428jet ":
        case "428 jet ":
        case "428-jet ":
        case "d428jet ":
        case "d428 jet ":
        case "d428-jet ":
        case "id312":
        speed = 710; cap = 44; rwy = 4530; mC = 71060; range = 1665
        fConsmp = 14.56; cConsmp = 0.24; mH = 400; price = 748000
        n = "428JET"; c = 19; pc = "328jet"
        break;

        //MARTIN 2
        case "4-0-4":
        case "4-04":
        case "4-0 4":
        case "4 0-4":
        case "4 04":
        case "4 0 4":
        case "40-4":
        case "404":
        case "40 4":
        case "m4-0-4":
        case "m4-04":
        case "m4-0 4":
        case "m4 0-4":
        case "m4 04":
        case "m4 0 4":
        case "m40-4":
        case "m404":
        case "m40 4":
        case "m-4-0-4":
        case "m-4-04":
        case "m-4-0 4":
        case "m-4 0-4":
        case "m-4 04":
        case "m-4 0 4":
        case "m-40-4":
        case "m-404":
        case "m-40 4":
        case "martin 4-0-4":
        case "martin 4-04":
        case "martin 4-0 4":
        case "martin 4 0-4":
        case "martin 4 04":
        case "martin 4 0 4":
        case "martin 40-4":
        case "martin 404":
        case "martin 40 4":
        case "martin-4-0-4":
        case "martin-4-04":
        case "martin-4-0 4":
        case "martin-4 0-4":
        case "martin-4 04":
        case "martin-4 0 4":
        case "martin-40-4":
        case "martin-404":
        case "martin-40 4":
        case "martin4-0-4":
        case "martin4-04":
        case "martin4-0 4":
        case "martin4 0-4":
        case "martin4 04":
        case "martin4 0 4":
        case "martin40-4":
        case "martin404":
        case "martin40 4":
        case "4-0-4 ":
        case "4-04 ":
        case "4-0 4 ":
        case "4 0-4 ":
        case "4 04 ":
        case "4 0 4 ":
        case "40-4 ":
        case "404 ":
        case "40 4 ":
        case "m4-0-4 ":
        case "m4-04 ":
        case "m4-0 4 ":
        case "m4 0-4 ":
        case "m4 04 ":
        case "m4 0 4 ":
        case "m40-4 ":
        case "m404 ":
        case "m40 4 ":
        case "m-4-0-4 ":
        case "m-4-04 ":
        case "m-4-0 4 ":
        case "m-4 0-4 ":
        case "m-4 04 ":
        case "m-4 0 4 ":
        case "m-40-4 ":
        case "m-404 ":
        case "m-40 4 ":
        case "martin 4-0-4 ":
        case "martin 4-04 ":
        case "martin 4-0 4 ":
        case "martin 4 0-4 ":
        case "martin 4 04 ":
        case "martin 4 0 4 ":
        case "martin 40-4 ":
        case "martin 404 ":
        case "martin 40 4 ":
        case "martin-4-0-4 ":
        case "martin-4-04 ":
        case "martin-4-0 4 ":
        case "martin-4 0-4 ":
        case "martin-4 04 ":
        case "martin-4 0 4 ":
        case "martin-40-4 ":
        case "martin-404 ":
        case "martin-40 4 ":
        case "martin4-0-4 ":
        case "martin4-04 ":
        case "martin4-0 4 ":
        case "martin4 0-4 ":
        case "martin4 04 ":
        case "martin4 0 4 ":
        case "martin40-4 ":
        case "martin404 ":
        case "martin40 4 ":
        case "id313":
        speed = 467; cap = 40; rwy = 1980; mC = 64600; range = 1800
        fConsmp = 14.88; cConsmp = 0.15; mH = 400; price = 680000
        n = "4-0-4"; c = 20; pc = "martin404"
        break;

        case "2-0-2":
        case "2-02":
        case "2-0 2":
        case "2 0-2":
        case "2 02":
        case "2 0 2":
        case "20-2":
        case "202":
        case "20 2":
        case "m2-0-2":
        case "m2-02":
        case "m2-0 2":
        case "m2 0-2":
        case "m2 02":
        case "m2 0 2":
        case "m20-2":
        case "m202":
        case "m20 2":
        case "m-2-0-2":
        case "m-2-02":
        case "m-2-0 2":
        case "m-2 0-2":
        case "m-2 02":
        case "m-2 0 2":
        case "m-20-2":
        case "m-202":
        case "m-20 2":
        case "martin 2-0-2":
        case "martin 2-02":
        case "martin 2-0 2":
        case "martin 2 0-2":
        case "martin 2 02":
        case "martin 2 0 2":
        case "martin 20-2":
        case "martin 202":
        case "martin 20 2":
        case "martin-2-0-2":
        case "martin-2-02":
        case "martin-2-0 2":
        case "martin-2 0-2":
        case "martin-2 02":
        case "martin-2 0 2":
        case "martin-20-2":
        case "martin-202":
        case "martin-20 2":
        case "martin2-0-2":
        case "martin2-02":
        case "martin2-0 2":
        case "martin2 0-2":
        case "martin2 02":
        case "martin2 0 2":
        case "martin20-2":
        case "martin202":
        case "martin20 2":
        case "2-0-2 ":
        case "2-02 ":
        case "2-0 2 ":
        case "2 0-2 ":
        case "2 02 ":
        case "2 0 2 ":
        case "20-2 ":
        case "202 ":
        case "20 2 ":
        case "m2-0-2 ":
        case "m2-02 ":
        case "m2-0 2 ":
        case "m2 0-2 ":
        case "m2 02 ":
        case "m2 0 2 ":
        case "m20-2 ":
        case "m202 ":
        case "m20 2 ":
        case "m-2-0-2 ":
        case "m-2-02 ":
        case "m-2-0 2 ":
        case "m-2 0-2 ":
        case "m-2 02 ":
        case "m-2 0 2 ":
        case "m-20-2 ":
        case "m-202 ":
        case "m-20 2 ":
        case "martin 2-0-2 ":
        case "martin 2-02 ":
        case "martin 2-0 2 ":
        case "martin 2 0-2 ":
        case "martin 2 02 ":
        case "martin 2 0 2 ":
        case "martin 20-2 ":
        case "martin 202 ":
        case "martin 20 2 ":
        case "martin-2-0-2 ":
        case "martin-2-02 ":
        case "martin-2-0 2 ":
        case "martin-2 0-2 ":
        case "martin-2 02 ":
        case "martin-2 0 2 ":
        case "martin-20-2 ":
        case "martin-202 ":
        case "martin-20 2 ":
        case "martin2-0-2 ":
        case "martin2-02 ":
        case "martin2-0 2 ":
        case "martin2 0-2 ":
        case "martin2 02 ":
        case "martin2 0 2 ":
        case "martin20-2 ":
        case "martin202 ":
        case "martin20 2 ":
        case "id314":
        speed = 510; cap = 40; rwy = 1565; mC = 64600; range = 2900
        fConsmp = 19.57; cConsmp = 0.16; mH = 400; price = 680000
        n = "2-0-2"; c = 20; pc = "martin202"
        break;

        //VICKERS
        case "viscount":
        case "viscount ":
        case "id315":
        speed = 491; cap = 75; rwy = 5280; mC = 21636; range = 3040
        fConsmp = 25; cConsmp = 0.22; mH = 400; price = 927749
        n = "Viscount"; c = 21; pc = "vickers"
        break;

        //CONVAIR
        case "cv-880":
        case "cv880":
        case "cv 880":
        case "cv-880 ":
        case "cv880 ":
        case "cv 880 ":
        case "id316":
        speed = 1029; cap = 110; rwy = 8050; mC = 104190; range = 4636
        fConsmp = 22.66; cConsmp = 0.22; mH = 400; price = 1096733
        n = "CV-880"; c = 22; pc = "cv880"
        break;

        case "cv-990":
        case "cv990":
        case "cv 990":
        case "cv 990 a":
        case "cv 990a":
        case "cv 990-a":
        case "cv-990 a":
        case "cv-990a":
        case "cv-990-a":
        case "cv990 a":
        case "cv990a":
        case "cv990-a":
        case "cv-990 ":
        case "cv990 ":
        case "cv 990 ":
        case "cv 990 a ":
        case "cv 990a ":
        case "cv 990-a ":
        case "cv-990 a ":
        case "cv-990a ":
        case "cv-990-a ":
        case "cv990 a ":
        case "cv990a ":
        case "cv990-a ":
        case "id317":
        speed = 999; cap = 149; rwy = 5350; mC = 26240130; range = 5785
        fConsmp = 23.04; cConsmp = 0.25; mH = 400; price = 6211896
        n = "CV-990A"; c = 22; pc = "cv880"
        break;

        //DASSAULT AVIATION
        case "falcon 2000 lx":
        case "falcon 2000-lx":
        case "falcon 2000lx":
        case "falcon-2000 lx":
        case "falcon-2000-lx":
        case "falcon-2000lx":
        case "falcon2000 lx":
        case "falcon2000-lx":
        case "falcon2000lx":
        case "falcon 2000 lx ":
        case "falcon 2000-lx ":
        case "falcon 2000lx ":
        case "falcon-2000 lx ":
        case "falcon-2000-lx ":
        case "falcon-2000lx ":
        case "falcon2000 lx ":
        case "falcon2000-lx ":
        case "falcon2000lx ":
        case "id318":
        speed = 1092; cap = 19; rwy = 5436; mC = 4759950; range = 7400
        fConsmp = 23.1; cConsmp = 0.22; mH = 400; price = 1104727
        n = "Falcon 2000LX"; c = 23; pc = "falcon2000lx"
        break;

        case "falcon 2000":
        case "falcon-2000":
        case "falcon2000":
        case "falcon 2000 ":
        case "falcon-2000 ":
        case "falcon2000 ":
        case "id319":
        speed = 1040; cap = 19; rwy = 5436; mC = 4312393; range = 5790
        fConsmp = 18.62; cConsmp = 0.2; mH = 400; price = 1393600
        n = "Falcon 2000"; c = 23; pc = "falcon2000"
        break;

        case "dassault mercure":
        case "dassault-mercure":
        case "dassaultmercure":
        case "mercure":
        case "dm":
        case "d-m":
        case "dassault mercure ":
        case "dassault-mercure ":
        case "dassaultmercure ":
        case "mercure ":
        case "dm ":
        case "d-m ":
        case "the legend":
        case "the legendary one":
        case "legend":
        case "the legend ":
        case "the legendary one ":
        case "legend ":
        case "id320":
        speed = 833; cap = 150; rwy = 2000; mC = 41230; range = 1700
        fConsmp = 25.22; cConsmp = 0.25; mH = 400; price = 8434010
        n = "Mercure"; c = 23; pc = "dm"
        break;

        //MITSUBISHI
        case "spacejet m 90":
        case "spacejet m-90":
        case "spacejet m90":
        case "spacejet-m 90":
        case "spacejet-m-90":
        case "spacejet-m90":
        case "spacejetm 90":
        case "spacejetm-90":
        case "spacejetm90":
        case "m-90":
        case "m90":
        case "m 90":
        case "spacejet 90":
        case "spacejet90":
        case "spacejet-90":
        case "spacejet m 90 ":
        case "spacejet m-90 ":
        case "spacejet m90 ":
        case "spacejet-m 90 ":
        case "spacejet-m-90 ":
        case "spacejet-m90 ":
        case "spacejetm 90 ":
        case "spacejetm-90 ":
        case "spacejetm90 ":
        case "m-90 ":
        case "m90 ":
        case "m 90 ":
        case "spacejet 90 ":
        case "spacejet90 ":
        case "spacejet-90 ":
        case "id321":
        speed = 1123; cap = 92; rwy = 5710; mC = 20748122; range = 3770
        fConsmp = 12.36; cConsmp = 0.12; mH = 400; price = 3387562
        n = "Spacejet M90"; c = 24; pc = "spacejetm90"
        break;

        case "spacejet m 100":
        case "spacejet m-100":
        case "spacejet m100":
        case "spacejet-m 100":
        case "spacejet-m-100":
        case "spacejet-m100":
        case "spacejetm 100":
        case "spacejetm-100":
        case "spacejetm100":
        case "m-100":
        case "m100":
        case "m 100":
        case "spacejet 100":
        case "spacejet100":
        case "spacejet-100":
        case "spacejet m 100 ":
        case "spacejet m-100 ":
        case "spacejet m100 ":
        case "spacejet-m 100 ":
        case "spacejet-m-100 ":
        case "spacejet-m100 ":
        case "spacejetm 100 ":
        case "spacejetm-100 ":
        case "spacejetm100 ":
        case "m-100 ":
        case "m100 ":
        case "m 100 ":
        case "spacejet 100 ":
        case "spacejet100 ":
        case "spacejet-100 ":
        case "id322":
        speed = 1123; cap = 88; rwy = 5770; mC = 17201782; range = 3540
        fConsmp = 13.39; cConsmp = 0.14; mH = 400; price = 5071399
        n = "Spacejet 100"; c = 24; pc = "spacejetm90"
        break;

        //IRKUT
        case "mc 21 200":
        case "mc 21-200":
        case "mc 21200":
        case "mc-21 200":
        case "mc-21-200":
        case "mc-21200":
        case "mc21 200":
        case "mc21-200":
        case "mc21200":
        case "mc 21 2":
        case "mc 21-2":
        case "mc 212":
        case "mc-21 2":
        case "mc-21-2":
        case "mc-212":
        case "mc21 2":
        case "mc21-2":
        case "mc212":
        case "mc 21 200 ":
        case "mc 21-200 ":
        case "mc 21200 ":
        case "mc-21 200 ":
        case "mc-21-200 ":
        case "mc-21200 ":
        case "mc21 200 ":
        case "mc21-200 ":
        case "mc21200 ":
        case "mc 21 2 ":
        case "mc 21-2 ":
        case "mc 212 ":
        case "mc-21 2 ":
        case "mc-21-2 ":
        case "mc-212 ":
        case "mc21 2 ":
        case "mc21-2 ":
        case "mc212 ":
        case "id323":
        speed = 1096; cap = 162; rwy = 6400; mC = 429658; range = 5000
        fConsmp = 14.42; cConsmp = 0.13; mH = 400; price = 4522716
        n = "MC-21-200"; c = 25; pc = "mc21300"
        break;

        case "mc 21 300":
        case "mc 21-300":
        case "mc 21300":
        case "mc-21 300":
        case "mc-21-300":
        case "mc-21300":
        case "mc21 300":
        case "mc21-300":
        case "mc21300":
        case "mc 21 3":
        case "mc 21-3":
        case "mc 213":
        case "mc-21 3":
        case "mc-21-3":
        case "mc-213":
        case "mc21 3":
        case "mc21-3":
        case "mc213":
        case "mc 21 300 ":
        case "mc 21-300 ":
        case "mc 21300 ":
        case "mc-21 300 ":
        case "mc-21-300 ":
        case "mc-21300 ":
        case "mc21 300 ":
        case "mc21-300 ":
        case "mc21300 ":
        case "mc 21 3 ":
        case "mc 21-3 ":
        case "mc 213 ":
        case "mc-21 3 ":
        case "mc-21-3 ":
        case "mc-213 ":
        case "mc21 3 ":
        case "mc21-3 ":
        case "mc213 ":
        case "id324":
        speed = 1096; cap = 198; rwy = 6600; mC = 432466; range = 5000
        fConsmp = 17.51; cConsmp = 0.14; mH = 400; price = 4552276
        n = "MC-21-300"; c = 25; pc = "mc21300"
        break;
        
        case "mc 21 400":
        case "mc 21-400":
        case "mc 21400":
        case "mc-21 400":
        case "mc-21-400":
        case "mc-21400":
        case "mc21 400":
        case "mc21-400":
        case "mc21400":
        case "mc 21 4":
        case "mc 21-4":
        case "mc 214":
        case "mc-21 4":
        case "mc-21-4":
        case "mc-214":
        case "mc21 4":
        case "mc21-4":
        case "mc214":
        case "mc 21 400 ":
        case "mc 21-400 ":
        case "mc 21400 ":
        case "mc-21 400 ":
        case "mc-21-400 ":
        case "mc-21400 ":
        case "mc21 400 ":
        case "mc21-400 ":
        case "mc21400 ":
        case "mc 21 4 ":
        case "mc 21-4 ":
        case "mc 214 ":
        case "mc-21 4 ":
        case "mc-21-4 ":
        case "mc-214 ":
        case "mc21 4 ":
        case "mc21-4 ":
        case "mc214 ":
        case "id325":
        speed = 1096; cap = 230; rwy = 6800; mC = 494428; range = 5500
        fConsmp = 19.57; cConsmp = 0.16; mH = 400; price = 5204503
        n = "MC-21-400"; c = 25; pc = "mc21300"
        break;

        case "dc3":
        speed = 259; cap = 6900; rwy = 4500; mC = 139380; range = 1650
        fConsmp = 30.45; cConsmp = 0.2; mH = 400; price = 850000
        n = "DC-3F"; c = "McDonnell Douglas"; pc = "dc3"
        break;
    
        case "dc9":
        speed = 905; cap = 11950; rwy = 6500; mC = 241390; range = 3030
        fConsmp = 34.68; cConsmp = 0.21; mH = 400; price = 1105000
        n = "DC-9F"; c = "McDonnell Douglas"; pc = "dc9"
        break;
    
        case "b727-200f":
        speed = 896; cap = 39800; rwy = 6450; mC = 803960; range = 4400
        fConsmp = 35.36; cConsmp = 0.21; mH = 400; price = 6766000
        n = "B727-200F"; c = "Boeing"; pc = "b727"
        break;
    
        case "b-377sg":
        speed = 425; cap = 54500; rwy = 10000; mC = 1100900; range = 3219
        fConsmp = 34.96; cConsmp = 0.24; mH = 400; price = 7103144
        n = "B377SG"; c = "Boeing"; pc = "b-377-sg"
        break;
    
        case "a310-300f":
        speed = 816; cap = 66000; rwy = 6000; mC = 1333200; range = 7330
        fConsmp = 19.53; cConsmp = 0.15; mH = 400; price = 7936782
        n = "A310-300F"; c = "Airbus"; pc = "a310"
        break;
    
        case "a400m":
        speed = 827; cap = 81600; rwy = 3215; mC = 1648320; range = 3298;
        fConsmp = 24.24; cConsmp = 0.16; mH = 400; price = 12823606
        n = "A400M"; c = "Airbus"; pc = "a400m"
        break;
    
        case "il-76d":
        speed = 846; cap = 90000; rwy = 8500; mC = 1818000; range = 3650;
        fConsmp = 34.04; cConsmp = 0.21; mH = 400; price = 14598539
        n = "IL-76D"; c = "Ilyushin"; pc = "il76"
        break;
    
        case "b757-200f":
        speed = 927; cap = 127480; rwy = 7800; mC = 2575096; range = 5834
        fConsmp = 33.92; cConsmp = 0.22; mH = 400; price = 22546869
        n = "B757-200F"; c = "Boeing"; pc = "757-200f"
        break;
    
        case "a300-600f":
        speed = 763; cap = 195000; rwy = 7625; mC = 3939000; range = 4850
        fConsmp = 41.58; cConsmp = 0.18; mH = 400; price = 39465463
        n = "A300-600F"; c = "Airbus"; pc = "a300"
        break;
    
        case "il-96t":
        speed = 853; cap = 202643; rwy = 8560; mC = 4093389; range = 5000
        fConsmp = 35.88; cConsmp = 0.19; mH = 400; price = 42065486; 
        n = "IL-96T"; c = "Ilyushin"; pc = "il96"
        break;
    
        case "b767-300f":
        speed = 936; cap = 220000; rwy = 7800; mC = 4444000; range = 2410
        fConsmp = 37.37; cConsmp = 0.22; mH = 400; price = 50654635
        n = "B767-300F"; c = "Boeing"; pc = "b767"
        break;
    
        case "a330-200f":
        speed = 915; cap = 270000; rwy = 9090; mC = 5454000; range = 7400
        fConsmp = 26.26; cConsmp = 0.2; mH = 400; price = 62565894
        n = "A330-200F"; c = "Airbus"; pc = "a330-200f"
        break;
    
        case "b777 freighter":
        speed = 932; cap = 285000; rwy = 9000; mC = 5757000; range = 9070
        fConsmp = 35.64; cConsmp = 0.19; mH = 400; price = 105984326
        n = "B777 Freighter"; c = "Boeing"; pc = "b777freighter"
        break;
    
        case "b747-400f":
        speed = 1009; cap = 300000; rwy = 10250; mC = 6060000; range = 8230
        fConsmp = 39.78; cConsmp = 0.2; mH = 400; price = 126598733
        n = "B747-400F"; c = "Boeing"; pc = "747-8"
        break;
    
        case "b747-8f":
        speed = 1002; cap = 303700; rwy = 10250; mC = 6134740; range = 14815
        fConsmp = 26; cConsmp = 0.2; mH = 400; price = 135498765
        n = "b747-8F"; c = "Boeing"; pc = "747-8"
        break;
    
        case "an-124":
        speed = 884; cap = 330000; rwy = 9500; mC = 6666000; range = 5400
        fConsmp = 37.45; cConsmp = 0.2; mH = 400; price = 196564896
        n = "An-124"; c = "Antonov"; pc = "an124"
        break;
    
        case "a380-800f":
        speed = 945; cap = 330000; rwy = 9680; mC = 6666000; range = 10400
        fConsmp = 30.72; cConsmp = 0.2; mH = 400; price = 298765348
        n = "A380-800F"; c = "Airbus"; pc = "a380"
        break;
    
        case "an-225":
        speed = 824; cap = 550000; rwy = 10500; mC = 11110000; range = 4000
        fConsmp = 69; cConsmp = 0.29; mH = 400; price = 659923421
        n = "An-225"; c = "Antonov"; pc = "an225"
        break;

        default:
        speed = 0; cap = 0; rwy = 0; mC = 0; range = 0; fConsmp = 0;
        cConsmp = 0; mH = 0; price = 0; n = "Aircraft not found."; c = 0
        break;
    }
    var originalCost = price
    market = document.getElementById("marketPercentResell").value;
    jS = parseInt(document.getElementById("jSeatsResell").value);
    fS = parseInt(document.getElementById("fSeatsResell").value);
    flh = document.getElementById("hoursResell").value;

    if (plane == "" || market == "" || flh == "") {
        $("#al").show()
    } else {
        marketCalc = market / 100;
        finalCost = originalCost + 5000 * jS + 10000 * fS;
        resell = Math.round((finalCost - flh * 2500) * marketCalc);
        
        if (resell<finalCost * 0.1) {
         resell = Math.round(finalCost * 0.1 * (market / 100));
        }
        
        var resell = Math.floor(resell), formatted;
            formatted = resell.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("resellV").value = formatted.slice(0, formatted.length - 3);
        $("#resellV").show()
    }
}