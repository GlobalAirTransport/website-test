function paxticket() {
    if(document.getElementById("distancePaxTicket").value != "") {
        var dist = document.getElementById("distancePaxTicket").value - 1
        document.getElementById("yTicketRealism").value = "$" + Math.floor((dist * 0.3 + 150) * 1.1)
        document.getElementById("jTicketRealism").value = "$" + Math.floor((dist * 0.6 + 500) * 1.08)
        document.getElementById("fTicketRealism").value = "$" + Math.floor((dist * 0.9 + 1000) * 1.06)
        document.getElementById("yTicketEasy").value = "$" + Math.floor((dist * 0.4 + 170) * 1.1)
        document.getElementById("jTicketEasy").value = "$" + Math.floor((dist * 0.8 + 560) * 1.08)
        document.getElementById("fTicketEasy").value = "$" + Math.floor((dist * 1.2 + 1200) * 1.06)
        $("#yTicketRealism").show()
        $("#jTicketRealism").show()
        $("#fTicketRealism").show()
        $("#yTicketEasy").show()
        $("#jTicketEasy").show()
        $("#fTicketEasy").show()
    } else {
        $("#al").show()
    }
}
function paxseats() {
    var cap = document.getElementById("capacitySeat").value
    var dist = document.getElementById("distanceSeat").value
    var flpd = document.getElementById("flDaySeat").value
    var yDem = document.getElementById("yDemandSeat").value
    var jDem = document.getElementById("jDemandSeat").value
    var fDem = document.getElementById("fDemandSeat").value
    var mode = document.getElementById("modeSSeat").value
    var cM = document.getElementById("cModeSeat").value
    let prefDem; let prefS; let prefM; 
    let secDem; let secS; let secM; 
    let lastDem; let lastS; let lastM;
    let yS; let jS; let fS;
    function easyY(distance) {
        return Math.floor((0.4 * distance + 170) * 1.1)
    }
    function easyJ(distance) {
        return Math.floor((0.8 * distance + 560) * 1.08)
    }
    function easyF(distance) {
        return Math.floor((1.2 * distance + 1200) * 1.06)
    }
    function realY(distance) {
        return Math.floor((0.3 * distance + 150) * 1.1)
    }
    function realJ(distance) {
        return Math.floor((0.6 * distance + 500) * 1.08)
    }
    function realF(distance) {
        return Math.floor((0.9 * distance + 1000) * 1.06)
    }
    if(cap != "" && dist != "" && flpd != "" && yDem != "" && jDem != "" && fDem != "" && mode != "" && cM != "") {
        if(mode == "Realism") {
            if(dist < 14310) {
                prefDem = fDem
                secDem = jDem
                lastDem = yDem
                prefM = 3
                secM = 2
                lastM = 1
            } else if (dist >= 14310 && dist < 15694) {
                prefDem = jDem
                secDem = fDem
                lastDem = yDem
                prefM = 2
                secM = 3
                lastM = 1
            } else if (dist >= 15694 && dist < 17500) {
                prefDem = jDem
                secDem = yDem
                lastDem = fDem
                prefM = 2
                secM = 1
                lastM = 3
            } else if (dist >= 17500) {
                prefDem = yDem
                secDem = jDem
                lastDem = fDem
                prefM = 1
                secM = 2
                lastM = 3
            }
        } else if (mode == "Easy") {
            if (dist<14425) {
                prefDem = fDem;
                secDem = jDem;
                lastDem = yDem;
                prefM = 3;
                secM = 2;
                lastM = 1;
            } else if (dist>=14425 && dist<14812) {
                prefDem = fDem;
                secDem = yDem;
                lastDem = jDem;
                prefM = 3;
                secM = 1;
                lastM = 2;
            } else if (dist>=14812 && dist<15200) {
                prefDem = yDem;
                secDem = fDem;
                lastDem = jDem;
                prefM = 1;
                secM = 3;
                lastM = 2;
            } else if (dist>=15200) {
                prefDem = yDem;
                secDem = jDem;
                lastDem = fDem;
                prefM = 1;
                secM = 2;
                lastM = 3;
            }
        }
        if(cM == "Normal") {
            var p = 0
            var s = 0
        } else if (cM == "Max. Demand Usage") {
            var p = Math.round(cap / prefM / 60)
            var s = Math.round(cap / secM / 60)
        }
        prefS = Math.floor(prefDem / flpd + p)
        if(prefS * prefM >= cap) {
            prefS = Math.floor(cap / prefM)
            secS = 0
            lastS = 0 //right should be no errors
        } else if (secDem >= ((cap - prefS * prefM) / secM) * flpd) {
            secS = Math.floor((cap - prefS * prefM) / secM)
            lastS = 0
        } else if (secDem < ((cap - prefS * prefM) / secM) * flpd) {
            secS = Math.floor(secDem / flpd + s)
            if ((cap - prefS * prefM - secS * secM) / lastM < lastDem / flpd) {
                lastS = Math.floor((cap - prefS * prefM - secS * secM) / lastM)
            } else if ((cap - prefS * prefM - secS * secM) / lastM > lastDem / flpd) {
                lastS = Math.floor(lastDem / flpd)
                alert("The demand on this route is quite low, to maximise profit, use another route.")
            }
        } 
        if(mode == "Realism") {
            if(dist < 14310) {
                fS = prefS
                jS = secS
                yS = lastS
            } else if (dist >= 14310 && dist < 15694) {
                fS = secS
                jS = prefS
                yS = lastS
            } else if (dist >= 15694 && dist < 17500) {
                fS = lastS
                jS = prefS
                yS = secS
            } else if (dist >= 17500) {
                fS = lastS
                jS = secS
                yS = prefS
            }
        } else if (mode == "Easy") {
            if (dist<14425) {
                fS = prefS;
                jS = secS;
                yS = lastS;
            } else if (dist>14425 && dist<14812) {
                fS = prefS;
                jS = lastS;
                yS = secS;
            } else if (dist>14812 && dist<15200) {
                fS = secS;
                jS = lastS;
                yS = prefS;
            } else if (dist>15200) {
                fS = lastS;
                jS = secS;
                yS = prefS;
            }
        }
        for (yS; cap - yS - jS * 2 - fS * 3 > 0; yS++) {}

        document.getElementById("seatOutputY").value = yS
        document.getElementById("seatOutputJ").value = jS
        document.getElementById("seatOutputF").value = fS
        $("#seatOutputY").show()
        $("#seatOutputJ").show()
        $("#seatOutputF").show()
        if(mode == "Easy") {
            var yT = easyY(dist)
            var jT = easyJ(dist)
            var fT = easyF(dist)
        } else if (mode == "Realism") {
            var yT = realY(dist)
            var jT = realJ(dist)
            var fT = realF(dist)
        }
        var ecSeats; var bzSeats; var fsSeats;
        ecSeats = Math.floor(yDem / flpd + p)
        if(ecSeats > cap) {
            ecSeats = cap
            bzSeats = 0
            fsSeats = 0
        } else if (jDem >= ((cap - ecSeats) / 2) * flpd) {
            bzSeats = Math.floor((cap - ecSeats) / 2)
            fsSeats = 0
        } else if (jDem < ((cap - ecSeats) / 2) * flpd) {
            bzSeats = Math.floor(jDem / flpd + s)
            if ((cap - ecSeats - 2 * bzSeats) / 3 < fDem / flpd) {
                fsSeats = Math.floor((cap - ecSeats - bzSeats * 2) / 3)
            } else if ((cap - ecSeats - 2 * bzSeats) / 3 > fDem / flpd) {
                fsSeats = Math.floor(fDem / flpd)
            }
        }

        for (ecSeats; cap - ecSeats - 2 * bzSeats - 3 * fsSeats > 0; ecSeats++) {}

        var pConfigRev = (fS * fT + jS * jT + yS * yT) * flpd // 353145
        var cConfigRev = (fsSeats * fT + bzSeats * jT + ecSeats * yT) * flpd //353145
        var revDiff = pConfigRev - cConfigRev
        var pConfigCost = jS * 5000 + fS * 10000;
        var cConfigCost = bzSeats * 5000 + fsSeats * 10000
        var configCostDiff = pConfigCost - cConfigCost
        var repayDays = Math.round(configCostDiff / revDiff)
        if(isNaN(repayDays)) {
            repayDays = 0
        }
        document.getElementById("repayTimeSeat").innerHTML = repayDays
        document.getElementById("seatAltY").value = ecSeats
        document.getElementById("seatAltJ").value = bzSeats
        document.getElementById("seatAltF").value = fsSeats
        $("#seatAltY").show()
        $("#seatAltJ").show()
        $("#seatAltF").show()
        $("#seatTxt").show()
        $("#repayTimeSeat").show()
    } else {
        $("#al").show()
    }
}
function cticket() {
    function easyLarge(distance) {
        return Math.floor((((((0.000948283724581252 * distance) + 0.862045432642377000) - 0.01) * 1.10)) * 100) / 100;
    }
    function easyHeavy(distance) {
        return (Math.floor((((((0.000689663577640275 * distance) + 0.292981124272893000) - 0.01) * 1.08)) * 100) / 100);
    }
    function realLarge(distance) {
        return (Math.floor((((((0.000776321822039374 * distance) + 0.860567600367807000) - 0.01) * 1.10)) * 100) / 100);
    }
    function realHeavy(distance) {
        return (Math.floor((((((0.000517742799409248 * distance) + 0.256369915396414000) - 0.01) * 1.08)) * 100) / 100);
    }
    let dist = document.getElementById("distanceCTicket").value
    document.getElementById("lTicketRealism").value = "$" + realLarge(dist)
    document.getElementById("hTicketRealism").value = "$" + realHeavy(dist)
    document.getElementById("lTicketEasy").value = "$" + easyLarge(dist)
    document.getElementById("hTicketEasy").value = "$" + easyHeavy(dist)
    $("#lTicketRealism").show()
    $("#hTicketRealism").show()
    $("#lTicketEasy").show()
    $("#hTicketEasy").show()
}
function cseats() {
    var cap = document.getElementById("capacityLoad").value
    var lDem = document.getElementById("lDemandLoad").value
    var hDem = document.getElementById("hDemandLoad").value
    var flpd = document.getElementById("flDayLoad").value
    var cM = document.getElementById("cModeLoad").value
    var lPercent; var hPercent; var lAmount; var hAmount

    if(cM == "Normal") {
        var add = 0
    } else if (cM == "Max. Demand Usage") {
        var add = 2
    }

    if(cap != "" && lDem != "" && hDem != "" && flpd != "" && cM != "") {
        if (lDem > cap * 0.7 * flpd) {
            lPercent = 100
            hPercent = 0
        } else {
            lPercent = Math.round(((lDem / flpd * 10 / 7) / cap) * 100) + add
            lAmountConvToH = Math.floor((lDem / flpd * 10 / 7) + ((cap * 0.7 / 100) * add))
            if(cap - lAmountConvToH < hDem / flpd) {
                hPercent = 100 - lPercent
            } else if (cap -  lAmountConvToH > hDem / flpd) {
                hPercent = Math.round(((hDem / flpd) / cap) * 100)
                alert("The demand on this route is quite low, to maximise profit, use another route.")
                for(lPercent; hPercent + lPercent < 100; lPercent++) {}
            }
        }
        document.getElementById("largeOutput").value = lPercent + "%"
        document.getElementById("heavyOutput").value = hPercent + "%"
    } else {
        $("#al").show()
    }
}
function cprofit() {
    var plane = document.getElementById("airplaneCP").value
    var check = plane.toLowerCase()
    var mode = document.getElementById("modeSCP").value
    var dist = document.getElementById("distanceCP").value
    var lL = document.getElementById("lCapCP").value
    var hL = document.getElementById("hCapCP").value
    var fuelC
    var coC
    var fP = document.getElementById("fPrxCP").value
    var cP = document.getElementById("cPrxCP").value
    var rep = document.getElementById("reptCP").value
    var flpd = document.getElementById("flDayCP").value
    var speed; var cap; var rwy; var range; var fConsmp; var cConsmp; var mC; var mH; var n; var price; var c
    switch (check) {
        case "dc3":
        case "id1":
        speed = 259; cap = 6900; rwy = 4500; mC = 139380; range = 1650
        fConsmp = 30.45; cConsmp = 0.2; mH = 400; price = 850000
        n = "DC3"; c = "McDonnell Douglas"; pc = "dc3"
        break;
    
        case "dc9":
        case "id2":
        speed = 905; cap = 11950; rwy = 6500; mC = 241390; range = 3030
        fConsmp = 34.68; cConsmp = 0.21; mH = 400; price = 1105000
        n = "DC9"; c = "McDonnell Douglas"; pc = "dc9"
        break;
    
        case "b727-200f":
        case "id3":
        speed = 896; cap = 39800; rwy = 6450; mC = 803960; range = 4400
        fConsmp = 35.36; cConsmp = 0.21; mH = 400; price = 6766000
        n = "B727-200F"; c = "Boeing"; pc = "b727"
        break;
    
        case "b377sg":
        case "id4":
        speed = 425; cap = 54500; rwy = 10000; mC = 1100900; range = 3219
        fConsmp = 34.96; cConsmp = 0.24; mH = 400; price = 7103144
        n = "B377SG"; c = "Boeing"; pc = "b-377-sg"
        break;
    
        case "a310-300f":
        case "id5":
        speed = 816; cap = 66000; rwy = 6000; mC = 1333200; range = 7330
        fConsmp = 19.53; cConsmp = 0.15; mH = 400; price = 7936782
        n = "A310-300F"; c = "Airbus"; pc = "a310"
        break;
    
        case "a400m":
        case "id6":
        speed = 827; cap = 81600; rwy = 3215; mC = 1648320; range = 3298;
        fConsmp = 24.24; cConsmp = 0.16; mH = 400; price = 12823606
        n = "A400M"; c = "Airbus"; pc = "a400m"
        break;
    
        case "il-76d":
        case "id7":
        speed = 846; cap = 90000; rwy = 8500; mC = 1818000; range = 3650;
        fConsmp = 34.04; cConsmp = 0.21; mH = 400; price = 14598539
        n = "IL-76D"; c = "Ilyushin"; pc = "il76"
        break;
    
        case "b757-200f":
        case "id8":
        speed = 927; cap = 127480; rwy = 7800; mC = 2575096; range = 5834
        fConsmp = 33.92; cConsmp = 0.22; mH = 400; price = 22546869
        n = "B757-200F"; c = "Boeing"; pc = "757-200f"
        break;
    
        case "a300-600f":
        case "id9":
        speed = 763; cap = 195000; rwy = 7625; mC = 3939000; range = 4850
        fConsmp = 41.58; cConsmp = 0.18; mH = 400; price = 39465463
        n = "A300-600F"; c = "Airbus"; pc = "a300"
        break;
    
        case "il-96t":
        case "id10":
        speed = 853; cap = 202643; rwy = 8560; mC = 4093389; range = 5000
        fConsmp = 35.88; cConsmp = 0.19; mH = 400; price = 42065486; 
        n = "IL-96T"; c = "Ilyushin"; pc = "il96"
        break;
    
        case "b767-300f":
        case "id11":
        speed = 936; cap = 220000; rwy = 7800; mC = 4444000; range = 2410
        fConsmp = 37.37; cConsmp = 0.22; mH = 400; price = 50654635
        n = "B767-300F"; c = "Boeing"; pc = "b767"
        break;
    
        case "a330-200f":
        case "id12":
        speed = 915; cap = 270000; rwy = 9090; mC = 5454000; range = 7400
        fConsmp = 26.26; cConsmp = 0.2; mH = 400; price = 62565894
        n = "A330-200F"; c = "Airbus"; pc = "a330-200f"
        break;
    
        case "b777 freighter":
        case "id13":
        speed = 932; cap = 285000; rwy = 9000; mC = 5757000; range = 9070
        fConsmp = 35.64; cConsmp = 0.19; mH = 400; price = 105984326
        n = "B777 Freighter"; c = "Boeing"; pc = "b777freighter"
        break;
    
        case "b747-400f":
        case "id14":
        speed = 1009; cap = 300000; rwy = 10250; mC = 6060000; range = 8230
        fConsmp = 39.78; cConsmp = 0.2; mH = 400; price = 126598733
        n = "B747-400F"; c = "Boeing"; pc = "747-8"
        break;
    
        case "b747-8f":
        case "id15":
        speed = 1002; cap = 303700; rwy = 10250; mC = 6134740; range = 14815
        fConsmp = 26; cConsmp = 0.2; mH = 400; price = 135498765
        n = "b747-8F"; c = "Boeing"; pc = "747-8"
        break;
    
        case "an-124":
        case "id16":
        speed = 884; cap = 330000; rwy = 9500; mC = 6666000; range = 5400
        fConsmp = 37.45; cConsmp = 0.2; mH = 400; price = 196564896
        n = "AN-124"; c = "Antonov"; pc = "an124"
        break;
    
        case "a380-800f":
        case "id17":
        speed = 945; cap = 330000; rwy = 9680; mC = 6666000; range = 10400
        fConsmp = 30.72; cConsmp = 0.2; mH = 400; price = 298765348
        n = "A380-800F"; c = "Airbus"; pc = "a380"
        break;
    
        case "an-225":
        case "id18":
        speed = 824; cap = 550000; rwy = 10500; mC = 11110000; range = 4000
        fConsmp = 69; cConsmp = 0.29; mH = 400; price = 659923421
        n = "AN-225"; c = "Antonov"; pc = "an225"
        break;

        default:
        speed = 0; cap = 0; rwy = 0; mC = 0; range = 0; fConsmp = 0;
        cConsmp = 0; mH = 0; price = 0; n = "Aircraft not found."; c = 0
        break;
    }
    fuelC = fConsmp
    coC = cConsmp
    if(mode != "" && dist != "" && lL != "" && hL != "" && fuelC != "" && coC != "" && fP != "" && cP != "" && rep != "" && flpd != "" && plane != "") {
        if(mode == "Easy") {
            var lp = Math.floor(((0.85 + dist * 19 / 20000) * 1.1) * 100) / 100
            var hp = Math.floor(((0.28 + dist / 1950) * 1.08) * 100) / 100
        } else if (mode == "Realism") {
            var lp = Math.floor(((0.85 + dist * 7 / 9000) * 1.1) * 100) / 100
            var hp = Math.floor(((0.28 + dist / 1450) * 1.08) * 100) / 100
        }
        var lBoard = Math.floor(lL * ((rep - 5) / 100))
        var hBoard = Math.floor(hL * ((rep - 5) / 100))
        var fuelExp = Math.floor(fuelC * dist * (fP / 1000))
        var coExp = Math.floor((coC * ((lBoard + hBoard) / 1000) * dist) * (cP / 1000))
        var maintExp = Math.floor((mC / mH) * 24)
        var mExpFlight = Math.floor(maintExp / flpd)
        var rev = lBoard * lp + hBoard * hp
        var profitF = rev - fuelExp - coExp - mExpFlight
        var profitD = profitF * flpd
        profitF = Math.floor(profitF), formatted;
            formatted = profitF.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        var f = formatted.length - 3
        var outp = formatted.slice(0, f)
        document.getElementById("flightProfitC").value = "$" + outp
        var profitD = Math.floor(profitD), formatted;
            formatted = profitD.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            var F = formatted.length - 3
        var outP = formatted.slice(0, F)
        document.getElementById("dayProfitC").value = "$" + outP;
        $("flightProfitc").show()
        $("#dayProfitC").show()
    } else {
        $("#al").show()
    }
}
function showHome() {
    $("#home").fadeIn()
    $("#paxticket").fadeOut()
    $("#paxconfig").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cticket").fadeOut()
    $("#cconfig").fadeOut()
    $("#cprofit").fadeOut()
    $("#stopover").fadeOut()
    $("#marketmap").fadeOut()
    $("#acsearch").fadeOut()
    $("#resell").fadeOut()
    $("#about").fadeOut()
    $("#faq").fadeOut()
}
function showPaxTicket() {
    $("#paxticket").fadeIn()
    $("#home").fadeOut()
    $("#paxconfig").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cticket").fadeOut()
    $("#cconfig").fadeOut()
    $("#cprofit").fadeOut()
    $("#stopover").fadeOut()
    $("#marketmap").fadeOut()
    $("#acsearch").fadeOut()
    $("#resell").fadeOut()
    $("#about").fadeOut()
    $("#faq").fadeOut()
}
function showPaxConfig() {
    $("#paxconfig").fadeIn()
    $("#paxticket").fadeOut()
    $("#home").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cticket").fadeOut()
    $("#cconfig").fadeOut()
    $("#cprofit").fadeOut()
    $("#stopover").fadeOut()
    $("#marketmap").fadeOut()
    $("#acsearch").fadeOut()
    $("#resell").fadeOut()
    $("#about").fadeOut()
    $("#faq").fadeOut()
}
function showPaxProfit() {
    $("#paxprofit").fadeIn()
    $("#paxconfig").fadeOut()
    $("#paxticket").fadeOut()
    $("#home").fadeOut()
    $("#cticket").fadeOut()
    $("#cconfig").fadeOut()
    $("#cprofit").fadeOut()
    $("#stopover").fadeOut()
    $("#marketmap").fadeOut()
    $("#acsearch").fadeOut()
    $("#resell").fadeOut()
    $("#about").fadeOut()
    $("#faq").fadeOut()
}
function showCTicket() {
    $("#cticket").fadeIn()
    $("#paxconfig").fadeOut()
    $("#paxticket").fadeOut()
    $("#home").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cconfig").fadeOut()
    $("#cprofit").fadeOut()
    $("#stopover").fadeOut()
    $("#marketmap").fadeOut()
    $("#acsearch").fadeOut()
    $("#resell").fadeOut()
    $("#about").fadeOut()
    $("#faq").fadeOut()
}
function showCConfig() {
    $("#cconfig").fadeIn()
    $("#paxconfig").fadeOut()
    $("#paxticket").fadeOut()
    $("#home").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cticket").fadeOut()
    $("#cprofit").fadeOut()
    $("#stopover").fadeOut()
    $("#marketmap").fadeOut()
    $("#acsearch").fadeOut()
    $("#resell").fadeOut()
    $("#about").fadeOut()
    $("#faq").fadeOut()
}
function showCProfit() {
    $("#cprofit").fadeIn()
    $("#paxconfig").fadeOut()
    $("#paxticket").fadeOut()
    $("#home").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cticket").fadeOut()
    $("#cconfig").fadeOut()
    $("#stopover").fadeOut()
    $("#marketmap").fadeOut()
    $("#acsearch").fadeOut()
    $("#resell").fadeOut()
    $("#about").fadeOut()
    $("#faq").fadeOut()
}
function showStopover() {
    $("#stopover").fadeIn()
    $("#paxconfig").fadeOut()
    $("#paxticket").fadeOut()
    $("#home").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cticket").fadeOut()
    $("#cconfig").fadeOut()
    $("#cprofit").fadeOut()
    $("#marketmap").fadeOut()
    $("#acsearch").fadeOut()
    $("#resell").fadeOut()
    $("#about").fadeOut()
    $("#faq").fadeOut()
}
function showMMap() {
    $("#marketmap").fadeIn()
    $("#paxconfig").fadeOut()
    $("#paxticket").fadeOut()
    $("#home").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cticket").fadeOut()
    $("#cconfig").fadeOut()
    $("#cprofit").fadeOut()
    $("#stopover").fadeOut()
    $("#acsearch").fadeOut()
    $("#resell").fadeOut()
    $("#about").fadeOut()
    $("#faq").fadeOut()
}
function showACSearch() {
    $("#acsearch").fadeIn()
    $("#paxconfig").fadeOut()
    $("#paxticket").fadeOut()
    $("#home").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cticket").fadeOut()
    $("#cconfig").fadeOut()
    $("#cprofit").fadeOut()
    $("#stopover").fadeOut()
    $("#marketmap").fadeOut()
    $("#resell").fadeOut()
    $("#about").fadeOut()
    $("#faq").fadeOut()
}
function showResellCalc() {
    $("#resell").fadeIn()
    $("#paxconfig").fadeOut()
    $("#paxticket").fadeOut()
    $("#home").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cticket").fadeOut()
    $("#cconfig").fadeOut()
    $("#cprofit").fadeOut()
    $("#stopover").fadeOut()
    $("#marketmap").fadeOut()
    $("#acsearch").fadeOut()
    $("#about").fadeOut()
    $("#faq").fadeOut()
}
function showAbout() {
    $("#about").fadeIn()
    $("#paxconfig").fadeOut()
    $("#paxticket").fadeOut()
    $("#home").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cticket").fadeOut()
    $("#cconfig").fadeOut()
    $("#cprofit").fadeOut()
    $("#stopover").fadeOut()
    $("#marketmap").fadeOut()
    $("#acsearch").fadeOut()
    $("#resell").fadeOut()
    $("#faq").fadeOut()
}
function showFaq() {
    $("#faq").fadeIn()
    $("#resell").fadeOut()
    $("#paxconfig").fadeOut()
    $("#paxticket").fadeOut()
    $("#home").fadeOut()
    $("#paxprofit").fadeOut()
    $("#cticket").fadeOut()
    $("#cconfig").fadeOut()
    $("#cprofit").fadeOut()
    $("#stopover").fadeOut()
    $("#marketmap").fadeOut()
    $("#acsearch").fadeOut()
    $("#about").fadeOut()
}