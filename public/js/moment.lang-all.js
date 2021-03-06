﻿// moment.js language configuration
// language : bulgarian (bg)
// author : Krasen Borisov : https://github.com/kraz
(function() {
    var a = {
        months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
        monthsShort: "\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
        weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),
        weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),
        weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
        longDateFormat: {
            LT: "h:mm",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT",
            nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
            nextWeek: "dddd [\u0432] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0441\u043b\u0435\u0434 %s",
            past: "\u043f\u0440\u0435\u0434\u0438 %s",
            s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            m: "\u043c\u0438\u043d\u0443\u0442\u0430",
            mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
            h: "\u0447\u0430\u0441",
            hh: "%d \u0447\u0430\u0441\u0430",
            d: "\u0434\u0435\u043d",
            dd: "%d \u0434\u043d\u0438",
            M: "\u043c\u0435\u0441\u0435\u0446",
            MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430",
            y: "\u0433\u043e\u0434\u0438\u043d\u0430",
            yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
        },
        ordinal: function(a) {
            return ".";
        }
    };
    typeof module != "undefined" && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("bg", a);
})(),
function() {
    var a = {
        months: "Gener_Febrer_Mar\u00e7_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"),
        monthsShort: "Gen._Febr._Mar._Abr._Mai._Jun._Jul._Ag._Set._Oct._Nov._Des.".split("_"),
        weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"),
        weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"),
        weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
        longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
        },
        calendar: {
            sameDay: function() {
                return "[avui a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
            },
            nextDay: function() {
                return "[dem\u00e0 a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
            },
            nextWeek: function() {
                return "dddd [a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
            },
            lastDay: function() {
                return "[ahir a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
            },
            lastWeek: function() {
                return "[el] dddd [passat a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "fa %s",
            s: "uns segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
        },
        ordinal: function(a) {
            return "\u00ba";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("ca", a);
}(),
function() {
    var a = {
        months: "\u043a\u0103\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u0103\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u00e7\u0115\u0440\u0442\u043c\u0435_\u0443\u0442\u0103_\u00e7\u0443\u0440\u043b\u0430_\u0430\u0432\u0103\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"),
        monthsShort: "\u043a\u0103\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u00e7\u0115\u0440_\u0443\u0442\u0103_\u00e7\u0443\u0440_\u0430\u0432_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"),
        weekdays: "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u0115\u00e7\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u0103\u043c\u0430\u0442\u043a\u0443\u043d".split("_"),
        weekdaysShort: "\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u0115\u00e7_\u044d\u0440\u043d_\u0448\u0103\u043c".split("_"),
        weekdaysMin: "\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u00e7_\u044d\u0440_\u0448\u043c".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "DD-MM-YYYY",
            LL: "YYYY \u00e7\u0443\u043b\u0445\u0438 MMMM \u0443\u0439\u0103\u0445\u0115\u043d D-\u043c\u0115\u0448\u0115",
            LLL: "YYYY \u00e7\u0443\u043b\u0445\u0438 MMMM \u0443\u0439\u0103\u0445\u0115\u043d D-\u043c\u0115\u0448\u0115, LT",
            LLLL: "dddd, YYYY \u00e7\u0443\u043b\u0445\u0438 MMMM \u0443\u0439\u0103\u0445\u0115\u043d D-\u043c\u0115\u0448\u0115, LT"
        },
        calendar: {
            sameDay: "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            nextDay: "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            lastDay: "[\u0114\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            nextWeek: "[\u00c7\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            lastWeek: "[\u0418\u0440\u0442\u043d\u0115] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            sameElse: "L"
        },
        relativeTime: {
            future: function(a) {
                var b = /сехет$/i.exec(a) ? "\u0440\u0435\u043d" : /çул$/i.exec(a) ? "\u0442\u0430\u043d" : "\u0440\u0430\u043d";
                return a + b;
            },
            past: "%s \u043a\u0430\u044f\u043b\u043b\u0430",
            s: "\u043f\u0115\u0440-\u0438\u043a \u00e7\u0435\u043a\u043a\u0443\u043d\u0442",
            m: "\u043f\u0115\u0440 \u043c\u0438\u043d\u0443\u0442",
            mm: "%d \u043c\u0438\u043d\u0443\u0442",
            h: "\u043f\u0115\u0440 \u0441\u0435\u0445\u0435\u0442",
            hh: "%d \u0441\u0435\u0445\u0435\u0442",
            d: "\u043f\u0115\u0440 \u043a\u0443\u043d",
            dd: "%d \u043a\u0443\u043d",
            M: "\u043f\u0115\u0440 \u0443\u0439\u0103\u0445",
            MM: "%d \u0443\u0439\u0103\u0445",
            y: "\u043f\u0115\u0440 \u00e7\u0443\u043b",
            yy: "%d \u00e7\u0443\u043b"
        },
        ordinal: function(a) {
            return "-\u043c\u0115\u0448";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("cv", a);
}(),
function() {
    var a = {
        months: "Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec".split("_"),
        weekdays: "S\u00f8ndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_L\u00f8rdag".split("_"),
        weekdaysShort: "S\u00f8n_Man_Tir_Ons_Tor_Fre_L\u00f8r".split("_"),
        weekdaysMin: "S\u00f8_Ma_Ti_On_To_Fr_L\u00f8".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd D. MMMM, YYYY h:mm A"
        },
        calendar: {
            sameDay: "[I dag kl.] LT",
            nextDay: "[I morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[I g\u00e5r kl.] LT",
            lastWeek: "[sidste] dddd [kl] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "f\u00e5 sekunder",
            m: "minut",
            mm: "%d minutter",
            h: "time",
            hh: "%d timer",
            d: "dag",
            dd: "%d dage",
            M: "m\u00e5nede",
            MM: "%d m\u00e5neder",
            y: "\u00e5r",
            yy: "%d \u00e5r"
        },
        ordinal: function(a) {
            return ".";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("da", a);
}(),
function() {
    var a = {
        months: "Januar_Februar_M\u00e4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "H:mm U\\hr",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY LT",
            LLLL: "dddd, D. MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[Heute um] LT",
            sameElse: "L",
            nextDay: "[Morgen um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gestern um] LT",
            lastWeek: "[letzten] dddd [um] LT"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            m: "einer Minute",
            mm: "%d Minuten",
            h: "einer Stunde",
            hh: "%d Stunden",
            d: "einem Tag",
            dd: "%d Tagen",
            M: "einem Monat",
            MM: "%d Monaten",
            y: "einem Jahr",
            yy: "%d Jahren"
        },
        ordinal: function(a) {
            return ".";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("de", a);
}(),
function() {
    var a = {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            L: "YYYY-MM-DD",
            LL: "D MMMM, YYYY",
            LLL: "D MMMM, YYYY LT",
            LLLL: "dddd, D MMMM, YYYY LT"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinal: function(a) {
            var b = a % 10;
            return ~~(a % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("en-ca", a);
}(),
function() {
    var a = {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinal: function(a) {
            var b = a % 10;
            return ~~(a % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("en-gb", a);
}(),
function() {
    var a = {
        months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
        monthsShort: "Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_"),
        weekdays: "Domingo_Lunes_Martes_Mi\u00e9rcoles_Jueves_Viernes_S\u00e1bado".split("_"),
        weekdaysShort: "Dom._Lun._Mar._Mi\u00e9._Jue._Vie._S\u00e1b.".split("_"),
        weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_S\u00e1".split("_"),
        longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
            },
            nextDay: function() {
                return "[ma\u00f1ana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
            },
            nextWeek: function() {
                return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
            },
            lastDay: function() {
                return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\u00eda",
            dd: "%d d\u00edas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\u00f1o",
            yy: "%d a\u00f1os"
        },
        ordinal: function(a) {
            return "\u00ba";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("es", a);
}(),
function() {

    function a(a, b, c, d) {
        var e = a;
        switch (c) {
        case "s":
            return d || b ? "paari sekundi" : "paar sekundit";
        default:
        }
        return "";
    }

    var b = {
        months: "jaanuar_veebruar_m\u00e4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "jaan_veebr_m\u00e4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
        weekdays: "p\u00fchap\u00e4ev_esmasp\u00e4ev_teisip\u00e4ev_kolmap\u00e4ev_neljap\u00e4ev_reede_laup\u00e4ev".split("_"),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
            LT: "H:mm",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY LT",
            LLLL: "dddd, D. MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[T\u00e4na,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[J\u00e4rgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s p\u00e4rast",
            past: "%s tagasi",
            s: a,
            m: "minut",
            mm: "%d minutit",
            h: "tund",
            hh: "%d tundi",
            d: "p\u00e4ev",
            dd: "%d p\u00e4eva",
            M: "kuu",
            MM: "%d kuud",
            y: "aasta",
            yy: "%d aastat"
        },
        ordinal: function(a) {
            return ".";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = b), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("et", b);
}(),
function() {
    var a = {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
        monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
        weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "YYYY-MM-DD",
            LL: "YYYYko MMMMren D[a]",
            LLL: "YYYYko MMMMren D[a] LT",
            LLLL: "dddd, YYYYko MMMMren D[a] LT"
        },
        calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte"
        },
        ordinal: function(a) {
            return ".";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("eu", a);
}(),
function() {

    function c(a, b, c, e) {
        var f = "";
        switch (c) {
        case "s":
            return e ? "muutaman sekunnin" : "muutama sekunti";
        case "m":
            return e ? "minuutin" : "minuutti";
        case "mm":
            f = e ? "minuutin" : "minuuttia";
            break;
        case "h":
            return e ? "tunnin" : "tunti";
        case "hh":
            f = e ? "tunnin" : "tuntia";
            break;
        case "d":
            return e ? "p\u00e4iv\u00e4n" : "p\u00e4iv\u00e4";
        case "dd":
            f = e ? "p\u00e4iv\u00e4n" : "p\u00e4iv\u00e4\u00e4";
            break;
        case "M":
            return e ? "kuukauden" : "kuukausi";
        case "MM":
            f = e ? "kuukauden" : "kuukautta";
            break;
        case "y":
            return e ? "vuoden" : "vuosi";
        case "yy":
            f = e ? "vuoden" : "vuotta";
        }
        return f = d(a, e) + " " + f, f;
    }

    function d(c, d) {
        return c < 10 ? d ? b[c] : a[c] : c;
    }

    var a = ["nolla", "yksi", "kaksi", "kolme", "nelj\u00e4", "viisi", "kuusi", "seitsem\u00e4n", "kahdeksan", "yhdeks\u00e4n"],
        b = ["nolla", "yhden", "kahden", "kolmen", "nelj\u00e4n", "viiden", "kuuden", a[7], a[8], a[9]],
        e = {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\u00e4kuu_hein\u00e4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tam_hel_maa_huh_tou_kes_hei_elo_syy_lok_mar_jou".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                L: "DD.MM.YYYY",
                LL: "Do MMMMt\\a YYYY",
                LLL: "Do MMMMt\\a YYYY, klo LT",
                LLLL: "dddd, Do MMMMt\\a YYYY, klo LT"
            },
            calendar: {
                sameDay: "[t\u00e4n\u00e4\u00e4n] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p\u00e4\u00e4st\u00e4",
                past: "%s sitten",
                s: c,
                m: c,
                mm: c,
                h: c,
                hh: c,
                d: c,
                dd: c,
                M: c,
                MM: c,
                y: c,
                yy: c
            },
            ordinal: function(a) {
                return ".";
            }
        };
    typeof module != "undefined" && module.exports && (module.exports = e), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("fi", e);
}(),
function() {
    var a = {
        months: "janvier_f\u00e9vrier_mars_avril_mai_juin_juillet_ao\u00fbt_septembre_octobre_novembre_d\u00e9cembre".split("_"),
        monthsShort: "janv._f\u00e9vr._mars_avr._mai_juin_juil._ao\u00fbt_sept._oct._nov._d\u00e9c.".split("_"),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[Aujourd'hui \u00e0] LT",
            nextDay: "[Demain \u00e0] LT",
            nextWeek: "dddd [\u00e0] LT",
            lastDay: "[Hier \u00e0] LT",
            lastWeek: "dddd [dernier \u00e0] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "une ann\u00e9e",
            yy: "%d ann\u00e9es"
        },
        ordinal: function(a) {
            return a === 1 ? "er" : "\u00e8me";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("fr-ca", a);
}(),
function() {
    var a = {
        months: "janvier_f\u00e9vrier_mars_avril_mai_juin_juillet_ao\u00fbt_septembre_octobre_novembre_d\u00e9cembre".split("_"),
        monthsShort: "janv._f\u00e9vr._mars_avr._mai_juin_juil._ao\u00fbt_sept._oct._nov._d\u00e9c.".split("_"),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[Aujourd'hui \u00e0] LT",
            nextDay: "[Demain \u00e0] LT",
            nextWeek: "dddd [\u00e0] LT",
            lastDay: "[Hier \u00e0] LT",
            lastWeek: "dddd [dernier \u00e0] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "une ann\u00e9e",
            yy: "%d ann\u00e9es"
        },
        ordinal: function(a) {
            return a === 1 ? "er" : "\u00e8me";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("fr", a);
}(),
function() {
    var a = {
        months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xu\u00f1o_Xullo_Agosto_Setembro_Octubro_Novembro_Decembro".split("_"),
        monthsShort: "Xan._Feb._Mar._Abr._Mai._Xu\u00f1._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
        weekdays: "Domingo_Luns_Martes_M\u00e9rcores_Xoves_Venres_S\u00e1bado".split("_"),
        weekdaysShort: "Dom._Lun._Mar._M\u00e9r._Xov._Ven._S\u00e1b.".split("_"),
        weekdaysMin: "Do_Lu_Ma_M\u00e9_Xo_Ve_S\u00e1".split("_"),
        longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
        },
        calendar: {
            sameDay: function() {
                return "[hoxe " + (this.hours() !== 1 ? "\u00e1s" : "a") + "] LT";
            },
            nextDay: function() {
                return "[ma\u00f1\u00e1 " + (this.hours() !== 1 ? "\u00e1s" : "a") + "] LT";
            },
            nextWeek: function() {
                return "dddd [" + (this.hours() !== 1 ? "\u00e1s" : "a") + "] LT";
            },
            lastDay: function() {
                return "[onte " + (this.hours() !== 1 ? "\u00e1" : "a") + "] LT";
            },
            lastWeek: function() {
                return "[o] dddd [pasado " + (this.hours() !== 1 ? "\u00e1s" : "a") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "fai %s",
            s: "uns segundo",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un d\u00eda",
            dd: "%d d\u00edas",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
        },
        ordinal: function(a) {
            return "\u00ba";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("gl", a);
}(),
function() {

    function a(a, b, c, d) {
        var e = a;
        switch (c) {
        case "s":
            return d || b ? "n\u00e9h\u00e1ny m\u00e1sodperc" : "n\u00e9h\u00e1ny m\u00e1sodperce";
        case "m":
            e = "egy";
        case "mm":
            return e + (d || b ? " perc" : " perce");
        case "h":
            e = "egy";
        case "hh":
            return e + (d || b ? " \u00f3ra" : " \u00f3r\u00e1ja");
        case "d":
            e = "egy";
        case "dd":
            return e + (d || b ? " nap" : " napja");
        case "M":
            e = "egy";
        case "MM":
            return e + (d || b ? " h\u00f3nap" : " h\u00f3napja");
        case "y":
            e = "egy";
        case "yy":
            return e + (d || b ? " \u00e9v" : " \u00e9ve");
        default:
        }
        return "";
    }

    function b(a) {
        var b = "";
        switch (this.day()) {
        case 0:
            b = "vas\u00e1rnap";
            break;
        case 1:
            b = "h\u00e9tf\u0151n";
            break;
        case 2:
            b = "kedden";
            break;
        case 3:
            b = "szerd\u00e1n";
            break;
        case 4:
            b = "cs\u00fct\u00f6rt\u00f6k\u00f6n";
            break;
        case 5:
            b = "p\u00e9nteken";
            break;
        case 6:
            b = "szombaton";
        }
        return (a ? "" : "m\u00falt ") + "[" + b + "] LT[-kor]";
    }

    var c = {
        months: "janu\u00e1r_febru\u00e1r_m\u00e1rcius_\u00e1prilis_m\u00e1jus_j\u00fanius_j\u00falius_augusztus_szeptember_okt\u00f3ber_november_december".split("_"),
        monthsShort: "jan_feb_m\u00e1rc_\u00e1pr_m\u00e1j_j\u00fan_j\u00fal_aug_szept_okt_nov_dec".split("_"),
        weekdays: "vas\u00e1rnap_h\u00e9tf\u0151_kedd_szerda_cs\u00fct\u00f6rt\u00f6k_p\u00e9ntek_szombat".split("_"),
        weekdaysShort: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
            LT: "H:mm",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D., LT",
            LLLL: "YYYY. MMMM D., dddd LT"
        },
        calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function() {
                return b.call(this, !0);
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function() {
                return b.call(this, !1);
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s m\u00falva",
            past: "%s",
            s: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a
        },
        ordinal: function(a) {
            return ".";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = c), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("hu", c);
}(),
function() {
    var a = function(a) {
        return a % 100 == 11 ? !0 : a % 10 == 1 ? !1 : !0;
    }, b = function(b, c, d, e) {
        var f = b + " ";
        switch (d) {
        case "s":
            return c || e ? "nokkrar sek\u00fandur" : "nokkrum sek\u00fandum";
        case "m":
            return c ? "m\u00edn\u00fata" : "m\u00edn\u00fatu";
        case "mm":
            return a(b) ? f + (c || e ? "m\u00edn\u00fatur" : "m\u00edn\u00fatum") : c ? f + "m\u00edn\u00fata" : f + "m\u00edn\u00fatu";
        case "hh":
            return a(b) ? f + (c || e ? "klukkustundir" : "klukkustundum") : f + "klukkustund";
        case "d":
            return c ? "dagur" : e ? "dag" : "degi";
        case "dd":
            return a(b) ? c ? f + "dagar" : f + (e ? "daga" : "d\u00f6gum") : c ? f + "dagur" : f + (e ? "dag" : "degi");
        case "M":
            return c ? "m\u00e1nu\u00f0ur" : e ? "m\u00e1nu\u00f0" : "m\u00e1nu\u00f0i";
        case "MM":
            return a(b) ? c ? f + "m\u00e1nu\u00f0ir" : f + (e ? "m\u00e1nu\u00f0i" : "m\u00e1nu\u00f0um") : c ? f + "m\u00e1nu\u00f0ur" : f + (e ? "m\u00e1nu\u00f0" : "m\u00e1nu\u00f0i");
        case "y":
            return c || e ? "\u00e1r" : "\u00e1ri";
        case "yy":
            return a(b) ? f + (c || e ? "\u00e1r" : "\u00e1rum") : f + (c || e ? "\u00e1r" : "\u00e1ri");
        }
    }, c = {
        months: "jan\u00faar_febr\u00faar_mars_apr\u00edl_ma\u00ed_j\u00fan\u00ed_j\u00fal\u00ed_\u00e1g\u00fast_september_okt\u00f3ber_n\u00f3vember_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_ma\u00ed_j\u00fan_j\u00fal_\u00e1g\u00fa_sep_okt_n\u00f3v_des".split("_"),
        weekdays: "sunnudagur_m\u00e1nudagur_\u00feri\u00f0judagur_mi\u00f0vikudagur_fimmtudagur_f\u00f6studagur_laugardagur".split("_"),
        weekdaysShort: "sun_m\u00e1n_\u00feri_mi\u00f0_fim_f\u00f6s_lau".split("_"),
        weekdaysMin: "Su_M\u00e1_\u00der_Mi_Fi_F\u00f6_La".split("_"),
        longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY kl. LT",
            LLLL: "dddd, D. MMMM YYYY kl. LT"
        },
        calendar: {
            sameDay: "[\u00ed dag kl.] LT",
            nextDay: "[\u00e1 morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[\u00ed g\u00e6r kl.] LT",
            lastWeek: "[s\u00ed\u00f0asta] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "eftir %s",
            past: "fyrir %s s\u00ed\u00f0an",
            s: b,
            m: b,
            mm: b,
            h: "klukkustund",
            hh: b,
            d: b,
            dd: b,
            M: b,
            MM: b,
            y: b,
            yy: b
        },
        ordinal: function(a) {
            return ".";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = c), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("is", c);
}(),
function() {
    var a = {
        months: "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
        monthsShort: "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
        weekdays: "Domenica_Luned\u00ec_Marted\u00ec_Mercoled\u00ec_Gioved\u00ec_Venerd\u00ec_Sabato".split("_"),
        weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
        weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: "[lo scorso] dddd [alle] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s fa",
            s: "secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
        },
        ordinal: function() {
            return "\u00ba";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("it", a);
}(),
function() {
    var a = {
        months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),
        weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
        weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
        longDateFormat: {
            LT: "Ah\u6642m\u5206",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5LT",
            LLLL: "YYYY\u5e74M\u6708D\u65e5LT dddd"
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "\u5348\u524d" : "\u5348\u5f8c";
        },
        calendar: {
            sameDay: "[\u4eca\u65e5] LT",
            nextDay: "[\u660e\u65e5] LT",
            nextWeek: "[\u6765\u9031]dddd LT",
            lastDay: "[\u6628\u65e5] LT",
            lastWeek: "[\u524d\u9031]dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u5f8c",
            past: "%s\u524d",
            s: "\u6570\u79d2",
            m: "1\u5206",
            mm: "%d\u5206",
            h: "1\u6642\u9593",
            hh: "%d\u6642\u9593",
            d: "1\u65e5",
            dd: "%d\u65e5",
            M: "1\u30f6\u6708",
            MM: "%d\u30f6\u6708",
            y: "1\u5e74",
            yy: "%d\u5e74"
        },
        ordinal: function(a) {
            return "";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("ja", a);
}(),
function() {
    var a = {
        months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),
        weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
        weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
        longDateFormat: {
            LT: "Ah\u6642m\u5206",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5LT",
            LLLL: "YYYY\u5e74M\u6708D\u65e5LT dddd"
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "\u5348\u524d" : "\u5348\u5f8c";
        },
        calendar: {
            sameDay: "[\u4eca\u65e5] LT",
            nextDay: "[\u660e\u65e5] LT",
            nextWeek: "[\u6765\u9031]dddd LT",
            lastDay: "[\u6628\u65e5] LT",
            lastWeek: "[\u524d\u9031]dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u5f8c",
            past: "%s\u524d",
            s: "\u6570\u79d2",
            m: "1\u5206",
            mm: "%d\u5206",
            h: "1\u6642\u9593",
            hh: "%d\u6642\u9593",
            d: "1\u65e5",
            dd: "%d\u65e5",
            M: "1\u30f6\u6708",
            MM: "%d\u30f6\u6708",
            y: "1\u5e74",
            yy: "%d\u5e74"
        },
        ordinal: function(a) {
            return "";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("jp", a);
}(),
function() {
    var a = {
        months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
        monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
        weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),
        weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
        weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
        longDateFormat: {
            LT: "A h\uc2dc mm\ubd84",
            L: "YYYY.MM.DD",
            LL: "YYYY\ub144 MMMM D\uc77c",
            LLL: "YYYY\ub144 MMMM D\uc77c LT",
            LLLL: "YYYY\ub144 MMMM D\uc77c dddd LT"
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "\uc624\uc804" : "\uc624\ud6c4";
        },
        calendar: {
            sameDay: "\uc624\ub298 LT",
            nextDay: "\ub0b4\uc77c LT",
            nextWeek: "dddd LT",
            lastDay: "\uc5b4\uc81c LT",
            lastWeek: "\uc9c0\ub09c\uc8fc dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \ud6c4",
            past: "%s \uc804",
            s: "\uba87\ucd08",
            ss: "%d\ucd08",
            m: "\uc77c\ubd84",
            mm: "%d\ubd84",
            h: "\ud55c\uc2dc\uac04",
            hh: "%d\uc2dc\uac04",
            d: "\ud558\ub8e8",
            dd: "%d\uc77c",
            M: "\ud55c\ub2ec",
            MM: "%d\ub2ec",
            y: "\uc77c\ub144",
            yy: "%d\ub144"
        },
        ordinal: function(a) {
            return "\uc77c";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("ko", a);
}(),
function() {
    var a = {
        months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
        monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
        weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),
        weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
        weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
        longDateFormat: {
            LT: "A h\uc2dc mm\ubd84",
            L: "YYYY.MM.DD",
            LL: "YYYY\ub144 MMMM D\uc77c",
            LLL: "YYYY\ub144 MMMM D\uc77c LT",
            LLLL: "YYYY\ub144 MMMM D\uc77c dddd LT"
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "\uc624\uc804" : "\uc624\ud6c4";
        },
        calendar: {
            sameDay: "\uc624\ub298 LT",
            nextDay: "\ub0b4\uc77c LT",
            nextWeek: "dddd LT",
            lastDay: "\uc5b4\uc81c LT",
            lastWeek: "\uc9c0\ub09c\uc8fc dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \ud6c4",
            past: "%s \uc804",
            s: "\uba87\ucd08",
            ss: "%d\ucd08",
            m: "\uc77c\ubd84",
            mm: "%d\ubd84",
            h: "\ud55c\uc2dc\uac04",
            hh: "%d\uc2dc\uac04",
            d: "\ud558\ub8e8",
            dd: "%d\uc77c",
            M: "\ud55c\ub2ec",
            MM: "%d\ub2ec",
            y: "\uc77c\ub144",
            yy: "%d\ub144"
        },
        ordinal: function(a) {
            return "\uc77c";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("kr", a);
}(),
function() {
    var a = {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "s\u00f8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00f8rdag".split("_"),
        weekdaysShort: "s\u00f8n_man_tir_ons_tor_fre_l\u00f8r".split("_"),
        weekdaysMin: "s\u00f8_ma_ti_on_to_fr_l\u00f8".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[I dag klokken] LT",
            nextDay: "[I morgen klokken] LT",
            nextWeek: "dddd [klokken] LT",
            lastDay: "[I g\u00e5r klokken] LT",
            lastWeek: "[Forrige] dddd [klokken] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "for %s siden",
            s: "noen sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en m\u00e5ned",
            MM: "%d m\u00e5neder",
            y: "ett \u00e5r",
            yy: "%d \u00e5r"
        },
        ordinal: function(a) {
            return ".";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("nb", a);
}(),
function() {
    var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        b = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        c = {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(c, d) {
                return /-MMM-/.test(d) ? b[c.month()] : a[c.month()];
            },
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Vandaag om] LT",
                nextDay: "[Morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "\u00e9\u00e9n minuut",
                mm: "%d minuten",
                h: "\u00e9\u00e9n uur",
                hh: "%d uur",
                d: "\u00e9\u00e9n dag",
                dd: "%d dagen",
                M: "\u00e9\u00e9n maand",
                MM: "%d maanden",
                y: "\u00e9\u00e9n jaar",
                yy: "%d jaar"
            },
            ordinal: function(a) {
                return a === 1 || a === 8 || a >= 20 ? "ste" : "de";
            }
        };
    typeof module != "undefined" && module.exports && (module.exports = c), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("nl", c);
}(),
function() {
    var a = function(a) {
        return a % 10 < 5 && a % 10 > 1 && ~~(a / 10) !== 1;
    }, b = function(b, c, d) {
        var e = b + " ";
        switch (d) {
        case "m":
            return c ? "minuta" : "minut\u0119";
        case "mm":
            return e + (a(b) ? "minuty" : "minut");
        case "h":
            return c ? "godzina" : "godzin\u0119";
        case "hh":
            return e + (a(b) ? "godziny" : "godzin");
        case "MM":
            return e + (a(b) ? "miesi\u0105ce" : "miesi\u0119cy");
        case "yy":
            return e + (a(b) ? "lata" : "lat");
        }
    }, c = {
        months: "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),
        weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),
        weekdaysShort: "nie_pon_wt_\u015br_czw_pt_sb".split("_"),
        weekdaysMin: "N_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[Dzi\u015b o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: "[W] dddd [o] LT",
            lastDay: "[Wczoraj o] LT",
            lastWeek: "[W zesz\u0142y/\u0142\u0105] dddd [o] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: "1 dzie\u0144",
            dd: "%d dni",
            M: "miesi\u0105c",
            MM: b,
            y: "rok",
            yy: b
        },
        ordinal: function(a) {
            return ".";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = c), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("pl", c);
}(),
function() {
    var a = {
        months: "Janeiro_Fevereiro_Mar\u00e7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Ter\u00e7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\u00e1bado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\u00e1b".split("_"),
        weekdaysMin: "Dom_2\u00aa_3\u00aa_4\u00aa_5\u00aa_6\u00aa_S\u00e1b".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D \\de MMMM \\de YYYY",
            LLL: "D \\de MMMM \\de YYYY LT",
            LLLL: "dddd, D \\de MMMM \\de YYYY LT"
        },
        calendar: {
            sameDay: "[Hoje \u00e0s] LT",
            nextDay: "[Amanh\u00e3 \u00e0s] LT",
            nextWeek: "dddd [\u00e0s] LT",
            lastDay: "[Ontem \u00e0s] LT",
            lastWeek: function() {
                return this.day() === 0 || this.day() === 6 ? "[\u00daltimo] dddd [\u00e0s] LT" : "[\u00daltima] dddd [\u00e0s] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "%s atr\u00e1s",
            s: "segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um m\u00eas",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        ordinal: function(a) {
            return "\u00ba";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("pt-br", a);
}(),
function() {
    var a = {
        months: "Janeiro_Fevereiro_Mar\u00e7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Ter\u00e7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\u00e1bado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\u00e1b".split("_"),
        weekdaysMin: "Dom_2\u00aa_3\u00aa_4\u00aa_5\u00aa_6\u00aa_S\u00e1b".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D \\de MMMM \\de YYYY",
            LLL: "D \\de MMMM \\de YYYY LT",
            LLLL: "dddd, D \\de MMMM \\de YYYY LT"
        },
        calendar: {
            sameDay: "[Hoje \u00e0s] LT",
            nextDay: "[Amanh\u00e3 \u00e0s] LT",
            nextWeek: "dddd [\u00e0s] LT",
            lastDay: "[Ontem \u00e0s] LT",
            lastWeek: function() {
                return this.day() === 0 || this.day() === 6 ? "[\u00daltimo] dddd [\u00e0s] LT" : "[\u00daltima] dddd [\u00e0s] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "%s atr\u00e1s",
            s: "segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um m\u00eas",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        ordinal: function(a) {
            return "\u00ba";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("pt", a);
}(),
function() {
    var a = {
        months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),
        monthsShort: "Ian_Feb_Mar_Apr_Mai_Iun_Iul_Aug_Sep_Oct_Noi_Dec".split("_"),
        weekdays: "Duminic\u0103_Luni_Mar\u0163i_Miercuri_Joi_Vineri_S\u00e2mb\u0103t\u0103".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\u00e2m".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\u00e2".split("_"),
        longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[m\u00e2ine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "peste %s",
            past: "%s \u00een urm\u0103",
            s: "c\u00e2teva secunde",
            m: "un minut",
            mm: "%d minute",
            h: "o or\u0103",
            hh: "%d ore",
            d: "o zi",
            dd: "%d zile",
            M: "o lun\u0103",
            MM: "%d luni",
            y: "un an",
            yy: "%d ani"
        },
        ordinal: function(a) {
            return "";
        }
    };
    typeof module != "undefined" && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("ro", a);
}(),
function() {
    var a = [function(a) {
        return a % 10 === 1 && a % 100 !== 11;
    }, function(a) {
        return a % 10 >= 2 && a % 10 <= 4 && a % 10 % 1 === 0 && (a % 100 < 12 || a % 100 > 14);
    }, function(a) {
        return a % 10 === 0 || a % 10 >= 5 && a % 10 <= 9 && a % 10 % 1 === 0 || a % 100 >= 11 && a % 100 <= 14 && a % 100 % 1 === 0;
    }, function(a) {
        return !0;
    }],
        b = function(b, c) {
            var d = b.split("_"),
                e = Math.min(a.length, d.length),
                f = -1;
            while (++f < e) if (a[f](c)) return d[f];
            return d[e - 1];
        }, c = function(a, c, d) {
            var e = {
                mm: "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442_\u043c\u0438\u043d\u0443\u0442\u044b",
                hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432_\u0447\u0430\u0441\u0430",
                dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439_\u0434\u043d\u044f",
                MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432_\u043c\u0435\u0441\u044f\u0446\u0430",
                yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442_\u0433\u043e\u0434\u0430"
            };
            return d === "m" ? c ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : a + " " + b(e[d], +a);
        }, d = function(a, b) {
            var c = {
                nominative: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),
                accusative: "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_")
            }, d = /D[oD]? *MMMM?/.test(b) ? "accusative" : "nominative";
            return c[d][a.month()];
        }, e = function(a, b) {
            var c = {
                nominative: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),
                accusative: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_")
            }, d = /\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/.test(b) ? "accusative" : "nominative";
            return c[d][a.day()];
        }, f = {
            months: d,
            monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
            weekdays: e,
            weekdaysShort: "\u0432\u0441\u043a_\u043f\u043d\u0434_\u0432\u0442\u0440_\u0441\u0440\u0434_\u0447\u0442\u0432_\u043f\u0442\u043d_\u0441\u0431\u0442".split("_"),
            weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY \u0433.",
                LLL: "D MMMM YYYY \u0433., LT",
                LLLL: "dddd, D MMMM YYYY \u0433., LT"
            },
            calendar: {
                sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0432] LT",
                nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] LT",
                lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
                nextWeek: function() {
                    return this.day() === 2 ? "[\u0412\u043e] dddd [\u0432] LT" : "[\u0412] dddd [\u0432] LT";
                },
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd [\u0432] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd [\u0432] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd [\u0432] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0447\u0435\u0440\u0435\u0437 %s",
                past: "%s \u043d\u0430\u0437\u0430\u0434",
                s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",
                m: c,
                mm: c,
                h: "\u0447\u0430\u0441",
                hh: c,
                d: "\u0434\u0435\u043d\u044c",
                dd: c,
                M: "\u043c\u0435\u0441\u044f\u0446",
                MM: c,
                y: "\u0433\u043e\u0434",
                yy: c
            },
            ordinal: function(a) {
                return ".";
            }
        };
    typeof module != "undefined" && module.exports && (module.exports = f), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("ru", f);
}(),
function() {
    var a = {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "s\u00f6ndag_m\u00e5ndag_tisdag_onsdag_torsdag_fredag_l\u00f6rdag".split("_"),
        weekdaysShort: "s\u00f6n_m\u00e5n_tis_ons_tor_fre_l\u00f6r".split("_"),
        weekdaysMin: "s\u00f6_m\u00e5_ti_on_to_fr_l\u00f6".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[Idag klockan] LT",
            nextDay: "[Imorgon klockan] LT",
            lastDay: "[Ig\u00e5r klockan] LT",
            nextWeek: "dddd [klockan] LT",
            lastWeek: "[F\u00f6rra] dddd[en klockan] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "f\u00f6r %s sen",
            s: "n\u00e5gra sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en m\u00e5nad",
            MM: "%d m\u00e5nader",
            y: "ett \u00e5r",
            yy: "%d \u00e5r"
        },
        ordinal: function(a) {
            var b = a % 10;
            return ~~(a % 100 / 10) === 1 ? "e" : b === 1 ? "a" : b === 2 ? "a" : b === 3 ? "e" : "e";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("sv", a);
}(),
function() {
    var a = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'\u00fcnc\u00fc",
        4: "'\u00fcnc\u00fc",
        100: "'\u00fcnc\u00fc",
        6: "'nc\u0131",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'\u0131nc\u0131",
        90: "'\u0131nc\u0131"
    }, b = {
        months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\u00fcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
        monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Sal\u0131_\u00c7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_\u00c7ar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_\u00c7a_Pe_Cu_Ct".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[bug\u00fcn saat] LT",
            nextDay: "[yar\u0131n saat] LT",
            nextWeek: "[haftaya] dddd [saat] LT",
            lastDay: "[d\u00fcn] LT",
            lastWeek: "[ge\u00e7en hafta] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s \u00f6nce",
            s: "birka\u00e7 saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir g\u00fcn",
            dd: "%d g\u00fcn",
            M: "bir ay",
            MM: "%d ay",
            y: "bir y\u0131l",
            yy: "%d y\u0131l"
        },
        ordinal: function(b) {
            if (b === 0) return "'\u0131nc\u0131";
            var c = b % 10,
                d = b % 100 - c,
                e = b >= 100 ? 100 : null;
            return a[c] || a[d] || a[e];
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = b), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("tr", b);
}(),
function() {
    var a = {
        months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
        weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),
        weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
        longDateFormat: {
            LT: "Ah\u70b9mm",
            L: "YYYY\u5e74MMMD\u65e5",
            LL: "YYYY\u5e74MMMD\u65e5",
            LLL: "YYYY\u5e74MMMD\u65e5LT",
            LLLL: "YYYY\u5e74MMMD\u65e5ddddLT"
        },
        meridiem: function(a, b, c) {
            return a < 9 ? "\u65e9\u4e0a" : a < 11 && b < 30 ? "\u4e0a\u5348" : a < 13 && b < 30 ? "\u4e2d\u5348" : a < 18 ? "\u4e0b\u5348" : "\u665a\u4e0a";
        },
        calendar: {
            sameDay: "[\u4eca\u5929]LT",
            nextDay: "[\u660e\u5929]LT",
            nextWeek: "[\u4e0b]ddddLT",
            lastDay: "[\u6628\u5929]LT",
            lastWeek: "[\u4e0a]ddddLT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u5185",
            past: "%s\u524d",
            s: "\u51e0\u79d2",
            m: "1\u5206\u949f",
            mm: "%d\u5206\u949f",
            h: "1\u5c0f\u65f6",
            hh: "%d\u5c0f\u65f6",
            d: "1\u5929",
            dd: "%d\u5929",
            M: "1\u4e2a\u6708",
            MM: "%d\u4e2a\u6708",
            y: "1\u5e74",
            yy: "%d\u5e74"
        },
        ordinal: function(a) {
            return "";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("zh-cn", a);
}(),
function() {
    var a = {
        months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
        weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
        weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
        longDateFormat: {
            LT: "Ah\u9edemm",
            L: "YYYY\u5e74MMMD\u65e5",
            LL: "YYYY\u5e74MMMD\u65e5",
            LLL: "YYYY\u5e74MMMD\u65e5LT",
            LLLL: "YYYY\u5e74MMMD\u65e5ddddLT"
        },
        meridiem: function(a, b, c) {
            return a < 9 ? "\u65e9\u4e0a" : a < 11 && b < 30 ? "\u4e0a\u5348" : a < 13 && b < 30 ? "\u4e2d\u5348" : a < 18 ? "\u4e0b\u5348" : "\u665a\u4e0a";
        },
        calendar: {
            sameDay: "[\u4eca\u5929]LT",
            nextDay: "[\u660e\u5929]LT",
            nextWeek: "[\u4e0b]ddddLT",
            lastDay: "[\u6628\u5929]LT",
            lastWeek: "[\u4e0a]ddddLT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u5167",
            past: "%s\u524d",
            s: "\u5e7e\u79d2",
            m: "\u4e00\u5206\u9418",
            mm: "%d\u5206\u9418",
            h: "\u4e00\u5c0f\u6642",
            hh: "%d\u5c0f\u6642",
            d: "\u4e00\u5929",
            dd: "%d\u5929",
            M: "\u4e00\u500b\u6708",
            MM: "%d\u500b\u6708",
            y: "\u4e00\u5e74",
            yy: "%d\u5e74"
        },
        ordinal: function(a) {
            return "";
        }
    };
    typeof module != "undefined" && module.exports && (module.exports = a), typeof window != "undefined" && this.moment && this.moment.lang && this.moment.lang("zh-tw", a);
}();