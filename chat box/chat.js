let x = 20;
let robot = false;
let linesin = 0;
let linesout = 0;
let formal_linesout = 0;
let first = true;
let modePlay = false;
let question = false;
let ran = Math.floor(Math.random() * 5) + 8;
let qes = Math.floor(Math.random() * 5) + 2;
let qes_r = 0;
let a = 0;
let b = 0;
let num = Math.floor(Math.random() * 10001);
let numguesses = 0;
let id_num = 1;
let height;
let game_type = "";
let none = ["Ivawen di souq 100 DA", "thdarewchedh ketchini ?",
    "wellah ma zrigh ghef wacho athedredh.", "avedlanegh asujet ghla3nayik !",
    "acho tebghidh attkhedmedh.", "ma3lich syar azeka khillan",
    "akiqoch !", "aroh attmelhedh tichart afimanik.", "ayahbib daki teskuladh iyi !",
    "ihaaaa dayen asidh, otezmiredh ara attbedledh chwiya ? ahdher ghef el fasad dhi ldzayer, nagh Trump di Marikan, negh ghef izamaren n l'Australie, Aw !",
    "bien, itora barka zyada n wawal !", "aka ih.", "ufhimegh ara"
];
let qessar = [
    { q1: 'Yakh cv la famille ?', q2: 'd la famille i dessah di dunit aki, assaki nella azekka bqa 3la khir.' },
    { q1: 'Wellah ar sérieusement ah, 3edjbagh ak negh ala ?', q2: 'Dadak daki, asmi iytogh di l\'armie, ulach d anwa iydittaqraben.' },
    { q1: 'lmohim, yakh ur kikhos achemma ?', q2: 'tora ma khossenk idrimen, lghachi akk khossen !' },
    { q1: 'ismik aken iheqa ?', q2: 'yettusema tellement twasnagh s watas tettugh ismawen n lghachi.' },
    { q1: 'iheqqa, melmi d Remdan ?', q2: 'awa aseggas aki akqaren yuzed s 10 jours, ze3ma dessah ?' },
    { q1: 'tetchidh dija lbanan s lkhevz ?', q2: 'nekki iwtegh ami qersegh.' },
    { q1: 'achhal dhi l3emrik ?', q2: 'ellah ibarek, timghuredh ah !, chfigh asmi ittughik d tawka !' },
    // {q1: 'kliki af \'Set3elmiyi\' iwakken aytest3elmedh amek ilaq adhedregh.', q2: 'nekkini toraki aqliyi at3ellimegh, bessah ilaq ayit3awnedh.'},
    { q1: 'iheqqa tesnedh ismiw ?', q2: 'ismiw Chat Abogato' },
    { q1: 'anda itzedhghedh ?', q2: 'nekk bghigh adzedghagh di ldjazira (tegzirt) wehdi.' },
    { q1: 'tettlussudh nwadhar ?', q2: 'nwadher tt3awanent bachi attferzedh bien, tezrdih aka negh ala ?' },
    { q1: 'melmi idluledh ?', q2: 'nekk luleghd en décembre 2019, skud ayet3eddi lwaqt, skud at3ellimegh akter, saramegh asma adimghuregh adoghalegh ttwasnegh, u lghach akk adissinen taqbaylit.' },
    { q1: 'af wachhal ssa3a itganedh ?', q2: 'nekk uhemmilegh ara adetsegh bezaf, af wanechta uganegh ara zik, bessah yelha attetsedh ama tertahedh.' },
    { q1: 'utettewhachedh ara deggidh ?', q2: 'ula d nekk. ..... ih ula d nekk ih.' },
    { q1: 'amek igesqaval vavak tafakturt n trisiti ?', q2: 'nek baba yettqima pendant 3 jours iwakken attididdem, on sait jamais makra n l\'arret cardiaque atittatafen' },
    { q1: 'agher uylaq ara attla3vedh s lmus ?', q2: 'iban, negh mulach atthazedh imanik !' },
    { q1: 'khayled kan yukan nelli dizamaren, bessah anttargo belli aqlagh d l3ibadh.', q2: 'safi akk izerman aki anettwali aka f lhaqiqa d ttiwkiwin attargunt.' },
    { q1: 'qrib lawan n lmakla negh mazal ?', q2: 'zrigh aqliyi mutegh si laz.' },
    { q1: 'tesnedh dachut dekkar ?', q2: 'nekki en tout cas utessinegh ara.' },
    { q1: 'tezridh acho ayedhron asma attdironjidh yiwen tiwith tanafa ?', q2: 'adyekker.' },
    { q1: 'tezridh agher \'ADIDAS\' tes3a thlatha i3okzan ?', q2: 'acho adettmuqoled ghuri, anda zrigh nekkini.' },
    { q1: 'asma3 sans smir kan, uyedttardhaledh ara chwiya n isurdiyen ?', q2: 'asi3qa wellah ar tenghayi tchomert lyamath aki.' },
    { q1: 'yersed 3omar si chadjara negh mazal ?', q2: 'parce que safi tura wahed 10 ans netta fawqa achadjara ah !' }
];


document.addEventListener("keydown", function verefier(key) {
    if (key.code == "Enter") {
        boom();
    }
});

function boom() {
    let myText = document.getElementById("txt").value;
    if (!modePlay) {
        if (!question) {
            a++;
            b++;
            linesin = 0;
            linesout = 0;
            let robotText = responde(myText);
            let charin = myText.length / 50;
            let roin = Math.round(charin);
            let charout = robotText.length / 50;
            let roout = Math.round(charout);

            if (charin > roin) {
                linesin = roin + 1;
            } else {
                linesin = roin;
            }
            if (charout > roout) {
                linesout = roout + 1;
            } else {
                linesout = roout;
            }
            add_my_text(myText, 2);
            setTimeout(() => {
                add_my_text(robotText, 1);
            }, 1000);
            first = false;
            formal_linesout = linesout;

            if (a == ran) {
                game_type = "guess";
                setTimeout(() => {
                    let guesswhat = "Iya akinigh, anel3eb yiwet n lo3ba ? inid ih bachi attnel3eb, inid ala bachi uttnettel3ab ara !";
                    add_my_text(guesswhat, 1);
                    question = true;
                }, 1000);
            }
            if (b == qes) {
                qes_r = Math.floor(Math.random() * qessar.length);
                qes = Math.floor(Math.random() * 5) + 2;
                setTimeout(() => {
                    add_my_text(qessar[qes_r].q1, 1);
                    b = 0;
                    scroll();
                    modePlay = true;
                    game_type = "talk";
                }, 2000);
            }
        } else {
            a = 0;
            if (myText == "ih") {
                modePlay = true;
                add_my_text("ih", 2);
                helpGuessClient();
            } else if (myText == "ala") {
                add_my_text("ala", 2);
                let réponse = "Qim ihi, togidh acho akkhemmegh nek";
                setTimeout(() => {
                    add_my_text(réponse, 1);
                }, 1000);
                question = false;
                a = 0;
                ran = Math.floor(Math.random() * 5) + 5;
            } else {
                add_my_text(myText, 2);
                let réponse = "la3banegh sérieux ah, inid swa ih swa ala. AW !";
                setTimeout(() => {
                    add_my_text(réponse, 1);
                    qes = Math.floor(Math.random() * 3) + 2;
                }, 1000);
            }

        }
    } else {
        if (game_type == "guess") {
            guessClient();
        } else if (game_type == "talk") {
            add_my_text(myText, 2);
            setTimeout(() => {
                add_my_text(qessar[qes_r].q2, 1);    
                scroll();
            }, 1000);
            modePlay = false;
            game_type = "";
        }
    }
    document.getElementById("txt").value = "";
    scroll();
    setTimeout(() => {
        scroll();
    }, 1000);

}

function add_my_text(text, i) {

    let msgholder = document.getElementById("msgholder");
    let id = "msg" + i + "";
    span = document.createElement("span");
    span.setAttribute("class", id);
    span.setAttribute("id", id_num + "");
    span.innerHTML = text;
    height = document.getElementById("" + id_num - 1 + "").offsetHeight;
    x = x + height + 5;
    span.style.top = x + "px";
    msgholder.appendChild(span);
    id_num++;
}


function responde(txt) {

    let response = [];
    let result = "";
    let a = 0;
    for (i = 0; i < combined.length; i++) {
        if (check(txt, combined[i].in)) {
            response[a] = { in: combined[i].in, out: combined[i].out };
            a++;
        }
    }

    if (response.length == 0) {
        let j = Math.floor(Math.random() * none.length);
        result = none[j];
    } else {
        let max = 0;
        response.forEach(ob => {
            if (max <= ob.in.length) {
                max = ob.in.length;
            }
        });
        let i = 0;
        let answer = [];
        response.forEach(ob => {
            if (max == ob.in.length) {
                answer[i] = ob.out;
                i++;
            }
        });
        let d = Math.floor(Math.random() * (answer.length));
        result = answer[d];
    }
    return result;
}



function check(t, what) {
    let contains = false;
    t = t.toLowerCase();
    what = what.toLowerCase();
    if (t.includes(what)) {
        contains = true;
    } else {
        contains = false;
    }
    return contains;
}


function helpGuessClient() {

    let réponse1 = "bien, akdesfahmegh tora lo3bayaki nnegh.";
    let réponse2 = "tora nekkini ad khemmegh af numero gar 0 ama d 10000, ketchini ilaq ad tidafedt";
    let réponse3 = "ma yella numéro nni iydmodedh aken moqar ghef waki deg wayed attkhemmimegh aka, akdinigh 'sdaw', ma yella l3eks akdinigh 'ktar'";
    let réponse4 = "tora fkiyid yiwen n numéro ger 0 am 10000";
    add_my_text(réponse1, 1);
    setTimeout(() => {
        add_my_text(réponse2, 1);
        setTimeout(() => {
            add_my_text(réponse3, 1);
        }, 2000);
    }, 1000);

    setTimeout(() => {
        add_my_text(réponse4, 1);
    }, 5000);
    nekk = false;
    game_type = "guess";
}


function guessClient() {

    let myText = document.getElementById("txt").value;

    add_my_text(myText, 2);
    if (!parseInt(myText)) {
        setTimeout(() => {
            add_my_text("akqaregh fkiyid numéro asi3qayik ah !", 1);
        }, 1000);
    } else {
        setTimeout(() => {
            if (parseInt(myText) < num) {
                numguesses++;
                add_my_text("ktar !", 1);
            } else if (parseInt(myText) > num) {
                numguesses++;
                add_my_text("sdaw !", 1);
            } else {
                let rep1 = "Tofidhttid ! numéro nni deg aken attkhemmimegh d " + num + " , besseh tseyadh " + numguesses + " n rikwal awinnat, normalement attidafedht di sdaw ! tekhlidht !";
                let rep2 = "Tofidhttid ! numéro nni deg aken attkhemmimegh d " + num + " , tseyadh " + numguesses + " n rikwal awinnat, aqlik telhidh, besseh tzemredh attkhedmedh khir n wakka !";
                let rep3 = "Tofidhttid ! numéro nni deg aken attkhemmimegh d " + num + " , tseyadh " + numguesses + " n rikwal awinnat, aqlik tgerzedh bravo !";
                let rep4 = "Tofidhttid ! numéro nni deg aken attkhemmimegh d " + num + " , tseyadh " + numguesses + " n rikwal awinnat, ayen ithkhedmedh aka tora d le3djeb jamais ikhemmit hed, chapeau !";

                if (numguesses >= 23) {
                    add_my_text(rep1, 1);
                } else if (numguesses < 23 && numguesses > 14) {
                    add_my_text(rep2, 1);
                } else if (numguesses < 15 && numguesses > 7) {
                    add_my_text(rep3, 1);
                } else {
                    add_my_text(rep4, 1);
                }
                setTimeout(() => {
                    let rep2 = "ihi aken itzemredh attwalidh tekfa lo3ba nnegh !";
                    let rep3 = "asen3awed yiweth n tikelt ?";
                    add_my_text(rep2, 1);
                    setTimeout(() => {
                        add_my_text(rep3, 1);
                    }, 1000);
                    nekk = true;
                    modePlay = false;
                    game_type = "";
                }, 1000);
                num = Math.floor(Math.random() * 10001);
            }
        }, 1000);
    }
}


function scroll() {
    let msg = document.getElementById("msgholder");
    msg.scrollTop = msg.scrollHeight;
}