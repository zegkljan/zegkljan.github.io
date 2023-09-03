import{D as a,C as o,V as n,a as e,b as s}from"./index.a3a9fff7.js";import{c as r}from"./vue-i18n.esm-bundler.afbec95a.js";var u={appName:"Unofficial czech HEMA ladder",sourceCode:"Source code",ladderOnFacebook:"Facebook page",addResults:{buttonLabel:"Supply results",title:"How to supply results?",main:`If the ladder does not include results of a tournament you
    attended, please let me know like this:
    <ol>
      <li>
        Prepare the data:
        <ul>
          <li>Tournament name</li>
          <li>Date of the tournament<sup>1</sup></li>
          <li>Country the tournament took place in</li>
          <li>Web page or FB event of the tournament, if one exists</li>
          <li>HEMA Ratings page of the tournament, if one exists</li>
          <li>Results for each division<sup>2</sup> and category<sup>3</sup> comprising of
            <ul>
              <li>The total number of participants in the given division and category.</li>
              <li>
                List of results of people you want to add<sup>4</sup>.
                For each person state
                <ul>
                  <li>Name and surname</li>
                  <li>Their final rank at the end of the tournament</li>
                  <li>Their HEMA Ratings ID<sup>5</sup>, if one exists</li>
                  <li>Club they represented</li>
                  <li>HEMA Ratings ID of the club<sup>6</sup>, if one exists</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Send the data to
        <a href="mailto:zegkljan{'@'}gmail.com">zegkljan{'@'}gmail.com</a> and state
        <em>HEMA ladder data</em> in the subject.
      </li>
      <li>
        Wait untill I incorporate the data, possibly react to my supplementary questions.
      </li>
    </ol>`,footnotes:`<ol>
    <li>In case of multi-day tournament state the first day.</li>
    <li>Divisions are: long sword, rapier and dagger, saber...</li>
    <li>Categories are: men/open, women, girls under 10 years...</li>
    <li>
      We record only fencers representing Czech clubs, or Czech fencers competing without any club.
    </li>
    <li>
      The number in the address of the "profile" page on HEMA Ratings of the given person.<br />
      Example: Jan \u017Degklitz has page
      <a href="https://hemaratings.com/fighters/details/3631/"
        >https://hemaratings.com/fighters/details/<strong
          >3631</strong
        ></a
      >
      a therefore his ID is 3631.
    </li>
    <li>
      The number in the address of the "profile" page of on HEMA Ratings of the given club.<br />
      Example: SH\u0160 Krkavci have page
      <a href="https://hemaratings.com/clubs/details/362/"
        >https://hemaratings.com/clubs/details/<strong>362</strong></a
      >
      a therefore their ID is 362.
    </li>
  </ol>`},close:"Close",settings:"Settings",chooseSeason:"Choose season sez\xF3nu",divisionNoData:"There is no data for this division in this season.",categoryNoData:"There is no data for this category in this season and division.",noData:"There is no data for this combination of season, division, and category.",seasonTitle:"Season",divisionTitle:"Division",divisionNoTournaments:"No. of tournaments",division:{[a.LS]:"Long sword",[a.R]:"Rapier",[a.RAD]:"Rapier and dagger",[a.SAB]:"Sword and buckler",[a.SB]:"Saber",[a.M]:"Messer",[a.SS]:"Sidesword",[a.SM]:"Smallsword",[a.B]:"Bayonet"},divisionSingleTournamentWarningTooltip:"There is only a single tournament recorded in this division.",categoryTitle:"Category",category:{[o.MEN_OPEN]:"Men/open",[o.WOMEN]:"Women"},view:{[n.LADDER]:"Ladder",[n.CLUBS]:"Clubs",[n.TOURNAMENTS]:"Tournaments"},clubLabel:"Club",pointsLabel:"No. of points",noClub:"(no club)",pointsPerFencerLabel:"No. of points per fencer",tournamentLabel:"Tournament",dateLabel:"Date",countryLabel:"Country",noParticipantsLabel:"No. of participants",coefficientLabel:"Coefficient",resultsLabel:"Full results",resultsDetailTooltip:"Open page with tournament results",resultsNoDetailTooltip:"The tournament does not have results available online",hemaratingsLabel:"HEMA Ratings",hemaratingsDetailTooltip:"Open tournament record at HEMA Ratings",hemaratingsNoDetailTooltip:"Tournament has no record at HEMA Ratings",noFencersLabel:"No. of fencers",championship:"Championship",ladderTable:{rankLabel:"Rank",previousSeasonChangeLabel:"+/-",previousSeasonChangeTooltip:"Change from last season",previousSeasonChangeNewInSeasonTooltip:"No record in previous season",previousSeasonChangeBetterTooltip:{n1:"Better by 1 place",n2:"Better by {n} places",n5:"Better by {n} places"},previousSeasonChangeWorseTooltip:{n1:"Worse by 1 place",n2:"Worse by {n} places",n5:"Worse by {n} places"},previousSeasonChangeNoChangeTooltip:"No change",nameLabel:"Name",surnameLabel:"Surname",detailsLabel:"Details",noCountedTournamentsLabel:"No. of counted tournaments",noTotalTournamentsLabel:"Total No. of tournaments",avgPtsPerTournamentLabel:"Average points per tournament",avgPtsPerTournamentTooltip:"Out of counted tournaments",fencerDetail:{fencer:"About fencer",tournaments:"Tournament participation",hemaratingsFencerLinkLabel:"HEMA Ratings fencer profile",hemaratingsClubLinkLabel:"HEMA Ratings club profile",countedTournaments:"Counted tournaments",uncountedTournaments:"Not counted tournaments",rank:"Rank",coefficientType:{[e.FOREIGN]:"Tournament abroad",[e.FOREIGN_25_50]:"25-50 % participants from abroad",[e.FOREIGN_50_75]:"50-75 % participants from abroad",[e.FOREIGN_75_100]:">75 % participants from abroad",[e.CHAMPIONSHIP]:"Championship",[e.RANK_1]:"First place",[e.RANK_2]:"Second place",[e.RANK_3]:"Third place",[e.RANK_4]:"Fourth place"},coefficientTotal:"Total",points:"No. of points",tournamentResultsLabel:"Full results",tournamentDetailLabel:"HEMA Ratings"}},clubsTable:{pointsHeaderTooltip:"Sum of points gained by the fencers of the given club"},countries:{af:"Afghanistan",ax:"\xC5land Islands",al:"Albania",dz:"Algeria",as:"American Samoa",ad:"Andorra",ao:"Angola",ai:"Anguilla",aq:"Antarctica",ag:"Antigua and Barbuda",ar:"Argentina",am:"Armenia",aw:"Aruba",au:"Australia",at:"Austria",az:"Azerbaijan",bs:"Bahamas",bh:"Bahrain",bd:"Bangladesh",bb:"Barbados",by:"Belarus",be:"Belgium",bz:"Belize",bj:"Benin",bm:"Bermuda",bt:"Bhutan",bo:"Bolivia (Plurinational State of)",bq:"Bonaire, Sint Eustatius and Saba[c]",ba:"Bosnia and Herzegovina",bw:"Botswana",bv:"Bouvet Island",br:"Brazil",io:"British Indian Ocean Territory",bn:"Brunei Darussalam",bg:"Bulgaria",bf:"Burkina Faso",bi:"Burundi",cv:"Cabo Verde",kh:"Cambodia",cm:"Cameroon",ca:"Canada",ky:"Cayman Islands",cf:"Central African Republic",td:"Chad",cl:"Chile",cn:"China[b]",cx:"Christmas Island",cc:"Cocos (Keeling) Islands",co:"Colombia",km:"Comoros",cg:"Congo",cd:"Congo, Democratic Republic of the",ck:"Cook Islands",cr:"Costa Rica",ci:"C\xF4te d'Ivoire",hr:"Croatia",cu:"Cuba",cw:"Cura\xE7ao",cy:"Cyprus[b]",cz:"Czechia",dk:"Denmark",dj:"Djibouti",dm:"Dominica",do:"Dominican Republic",ec:"Ecuador",eg:"Egypt",sv:"El Salvador",gq:"Equatorial Guinea",er:"Eritrea",ee:"Estonia",sz:"Eswatini",et:"Ethiopia",fk:"Falkland Islands (Malvinas)[b]",fo:"Faroe Islands",fj:"Fiji",fi:"Finland",fr:"France",gf:"French Guiana",pf:"French Polynesia",tf:"French Southern Territories",ga:"Gabon",gm:"Gambia",ge:"Georgia",de:"Germany",gh:"Ghana",gi:"Gibraltar",gr:"Greece",gl:"Greenland",gd:"Grenada",gp:"Guadeloupe",gu:"Guam",gt:"Guatemala",gg:"Guernsey",gn:"Guinea",gw:"Guinea-Bissau",gy:"Guyana",ht:"Haiti",hm:"Heard Island and McDonald Islands",va:"Holy See",hn:"Honduras",hk:"Hong Kong",hu:"Hungary",is:"Iceland",in:"India",id:"Indonesia",ir:"Iran (Islamic Republic of)",iq:"Iraq",ie:"Ireland",im:"Isle of Man",il:"Israel",it:"Italy",jm:"Jamaica",jp:"Japan",je:"Jersey",jo:"Jordan",kz:"Kazakhstan",ke:"Kenya",ki:"Kiribati",kp:"Korea (Democratic People's Republic of)",kr:"Korea, Republic of",kw:"Kuwait",kg:"Kyrgyzstan",la:"Lao People's Democratic Republic",lv:"Latvia",lb:"Lebanon",ls:"Lesotho",lr:"Liberia",ly:"Libya",li:"Liechtenstein",lt:"Lithuania",lu:"Luxembourg",mo:"Macao",mg:"Madagascar",mw:"Malawi",my:"Malaysia",mv:"Maldives",ml:"Mali",mt:"Malta",mh:"Marshall Islands",mq:"Martinique",mr:"Mauritania",mu:"Mauritius",yt:"Mayotte",mx:"Mexico",fm:"Micronesia (Federated States of)",md:"Moldova, Republic of",mc:"Monaco",mn:"Mongolia",me:"Montenegro",ms:"Montserrat",ma:"Morocco",mz:"Mozambique",mm:"Myanmar",na:"Namibia",nr:"Nauru",np:"Nepal",nl:"Netherlands",nc:"New Caledonia",nz:"New Zealand",ni:"Nicaragua",ne:"Niger",ng:"Nigeria",nu:"Niue",nf:"Norfolk Island",mk:"North Macedonia",mp:"Northern Mariana Islands",no:"Norway",om:"Oman",pk:"Pakistan",pw:"Palau",ps:"Palestine, State of[b]",pa:"Panama",pg:"Papua New Guinea",py:"Paraguay",pe:"Peru",ph:"Philippines",pn:"Pitcairn",pl:"Poland",pt:"Portugal",pr:"Puerto Rico",qa:"Qatar",re:"R\xE9union",ro:"Romania",ru:"Russian Federation",rw:"Rwanda",bl:"Saint Barth\xE9lemy",sh:"Saint Helena, Ascension and Tristan da Cunha[d]",kn:"Saint Kitts and Nevis",lc:"Saint Lucia",mf:"Saint Martin (French part)",pm:"Saint Pierre and Miquelon",vc:"Saint Vincent and the Grenadines",ws:"Samoa",sm:"San Marino",st:"Sao Tome and Principe",sa:"Saudi Arabia",sn:"Senegal",rs:"Serbia",sc:"Seychelles",sl:"Sierra Leone",sg:"Singapore",sx:"Sint Maarten (Dutch part)",sk:"Slovakia",si:"Slovenia",sb:"Solomon Islands",so:"Somalia",za:"South Africa",gs:"South Georgia and the South Sandwich Islands",ss:"South Sudan",es:"Spain",lk:"Sri Lanka",sd:"Sudan",sr:"Suriname",sj:"Svalbard and Jan Mayen[e]",se:"Sweden",ch:"Switzerland",sy:"Syrian Arab Republic",tw:"Taiwan, Province of China[b]",tj:"Tajikistan",tz:"Tanzania, United Republic of",th:"Thailand",tl:"Timor-Leste",tg:"Togo",tk:"Tokelau",to:"Tonga",tt:"Trinidad and Tobago",tn:"Tunisia",tr:"T\xFCrkiye",tm:"Turkmenistan",tc:"Turks and Caicos Islands",tv:"Tuvalu",ug:"Uganda",ua:"Ukraine",ae:"United Arab Emirates",gb:"United Kingdom of Great Britain and Northern Ireland",us:"United States of America",um:"United States Minor Outlying Islands[f]",uy:"Uruguay",uz:"Uzbekistan",vu:"Vanuatu",ve:"Venezuela (Bolivarian Republic of)",vn:"Viet Nam",vg:"Virgin Islands (British)",vi:"Virgin Islands (U.S.)",wf:"Wallis and Futuna",eh:"Western Sahara[b]",ye:"Yemen",zm:"Zambia",zw:"Zimbabwe"}},l={appName:"Neofici\xE1ln\xED \u010Desk\xFD HEMA \u017Eeb\u0159\xED\u010Dek",sourceCode:"Zdrojov\xFD k\xF3d",ladderOnFacebook:"Facebookov\xE1 str\xE1nka",addResults:{buttonLabel:"Doplnit v\xFDsledky",title:"Jak doplnit v\xFDsledky?",main:`Pokud v \u017Eeb\u0159\xED\u010Dku nejsou zahrnuty v\xFDsledky turnaje, kde jste byli,
    dejte pros\xEDm v\u011Bd\u011Bt, a to n\xE1sleduj\xEDc\xEDm zp\u016Fsobem:
    <ol>
      <li>
        P\u0159ipravte si data:
        <ul>
          <li>N\xE1zev turnaje</li>
          <li>Datum kon\xE1n\xED<sup>1</sup></li>
          <li>Zem\u011B, ve kter\xE9 se turnaj odehr\xE1val</li>
          <li>Str\xE1nka \u010Di FB ud\xE1lost turnaje, existuje-li</li>
          <li>Str\xE1nka turnaje na HEMA Ratings, existuje-li</li>
          <li>
            V\xFDsledky pro ka\u017Edou divizi<sup>2</sup> a kategorii<sup
              >3</sup
            >
            sest\xE1vaj\xEDc\xED se z
            <ul>
              <li>Celkov\xFD po\u010Det \xFA\u010Dastn\xEDk\u016F v dan\xE9 divizi a kategorii</li>
              <li>
                Seznam v\xFDsledk\u016F lid\xED, kter\xE9 chcete doplnit<sup>4</sup>.
                Pro ka\u017Ed\xE9ho \u010Dlov\u011Bka uve\u010Fte
                <ul>
                  <li>Jm\xE9no a p\u0159\xEDjmen\xED</li>
                  <li>
                    Kone\u010Dn\xE1 p\u0159\xED\u010Dka, na jak\xE9 se um\xEDstil(a) na konci
                    turnaje
                  </li>
                  <li>
                    Jeho/jej\xED HEMA Ratings ID<sup>5</sup>, existuje-li
                  </li>
                  <li>Klub, za kter\xFD startoval(a)</li>
                  <li>
                    HEMA Ratings ID klubu<sup>6</sup>, existuje-li
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Data ode\u0161lete na
        <a href="mailto:zegkljan{'@'}gmail.com">zegkljan{'@'}gmail.com</a> a do
        p\u0159edm\u011Btu uve\u010Fte <em>Data pro HEMA \u017Eeb\u0159\xED\u010Dek</em>.
      </li>
      <li>
        Vy\u010Dkejte, ne\u017E data zapracuji, p\u0159\xEDpadn\u011B reagujte na m\xE9 dopl\u0148uj\xEDc\xED dotazy.
      </li>
    </ol>`,footnotes:`<ol>
    <li>V p\u0159\xEDpad\u011B v\xEDcedenn\xEDho turnaje uve\u010Fte prvn\xED den.</li>
    <li>Divize jsou: dlouh\xFD me\u010D, rap\xEDr a d\xFDka, \u0161avle...</li>
    <li>Kategorie jsou: mu\u017Ei/open, \u017Eeny, d\xEDvky do 10 let...</li>
    <li>
      Evidujeme jen \u0161erm\xED\u0159e startuj\xEDc\xED za \u010Desk\xE9 kluby, p\u0159\xEDpadn\u011B \u010Desk\xE9
      \u0161erm\xED\u0159e, kte\u0159\xED sout\u011B\u017E\xED bez klubu.
    </li>
    <li>
      \u010C\xEDslo v adrese str\xE1nky "profilu" dan\xE9ho \u010Dlov\u011Bka na HEMA Ratings.<br />
      P\u0159\xEDklad: Jan \u017Degklitz m\xE1 str\xE1nku
      <a href="https://hemaratings.com/fighters/details/3631/"
        >https://hemaratings.com/fighters/details/<strong
          >3631</strong
        ></a
      >
      a tedy jeho ID je 3631.
    </li>
    <li>
      \u010C\xEDslo v adrese str\xE1nky "profilu" dan\xE9ho klubu na HEMA Ratings.<br />
      P\u0159\xEDklad: SH\u0160 Krkavci maj\xED str\xE1nku
      <a href="https://hemaratings.com/clubs/details/362/"
        >https://hemaratings.com/clubs/details/<strong>362</strong></a
      >
      a tedy jejich ID je 362.
    </li>
  </ol>`},close:"Zav\u0159\xEDt",settings:"Nastaven\xED",chooseSeason:"Vyberte sez\xF3nu",divisionNoData:"Pro tuto sez\xF3nu neobsahuje tato divize \u017E\xE1dn\xE1 data.",categoryNoData:"Pro tuto sez\xF3nu a divizi neobsahuje tato kategorie \u017E\xE1dn\xE1 data.",noData:"Pro tuto kombinaci sez\xF3ny, divize a kategorie nejsou \u017E\xE1dn\xE1 data.",seasonTitle:"Sez\xF3na",divisionTitle:"Divize",divisionNoTournaments:"Po\u010Det turnaj\u016F",division:{[a.LS]:"Dlouh\xFD me\u010D",[a.R]:"Rap\xEDr",[a.RAD]:"Rap\xEDr a d\xFDka",[a.SAB]:"Me\u010D a \u0161t\xEDtek",[a.SB]:"\u0160avle",[a.M]:"Tes\xE1k (messer)",[a.SS]:"Renesan\u010Dn\xED me\u010D (sidesword)",[a.SM]:"Kord\xEDk (smallsword)",[a.B]:"Bod\xE1k"},divisionSingleTournamentWarningTooltip:"V t\xE9to divizi je zaznamen\xE1n pouze jeden turnaj.",categoryTitle:"Kategorie",category:{[o.MEN_OPEN]:"Mu\u017Ei/open",[o.WOMEN]:"\u017Deny"},view:{[n.LADDER]:"\u017Deb\u0159\xED\u010Dek",[n.CLUBS]:"Kluby",[n.TOURNAMENTS]:"Turnaje"},clubLabel:"Klub",pointsLabel:"Po\u010Det bod\u016F",noClub:"(bez klubu)",pointsPerFencerLabel:"Po\u010Det bod\u016F na \u0161erm\xED\u0159e",tournamentLabel:"Turnaj",dateLabel:"Datum",countryLabel:"Zem\u011B",noParticipantsLabel:"Po\u010Det \xFA\u010Dastn\xEDk\u016F",coefficientLabel:"Koeficient",resultsLabel:"Celkov\xE9 v\xFDsledky",resultsDetailTooltip:"Otev\u0159\xEDt str\xE1nku s v\xFDsledky turnaje",resultsNoDetailTooltip:"Turnaj nem\xE1 dostupn\xE9 v\xFDsledky online",hemaratingsLabel:"HEMA Ratings",hemaratingsDetailTooltip:"Otev\u0159\xEDt z\xE1znam turnaje na HEMA Ratings",hemaratingsNoDetailTooltip:"Turnaj nem\xE1 z\xE1znam na HEMA Ratings",noFencersLabel:"Po\u010Det \u0161erm\xED\u0159\u016F",championship:"Mistrovstv\xED",ladderTable:{rankLabel:"Po\u0159ad\xED",previousSeasonChangeLabel:"+/-",previousSeasonChangeTooltip:"Zm\u011Bna od p\u0159edchoz\xED sez\xF3ny",previousSeasonChangeNewInSeasonTooltip:"\u017D\xE1dn\xFD z\xE1znam v p\u0159edchoz\xED sez\xF3n\u011B",previousSeasonChangeBetterTooltip:{n1:"Zlep\u0161en\xED o 1 m\xEDsto",n2:"Zlep\u0161en\xED o {n} m\xEDsta",n5:"Zlep\u0161en\xED o {n} m\xEDst"},previousSeasonChangeWorseTooltip:{n1:"Zhor\u0161en\xED o 1 m\xEDsto",n2:"Zhor\u0161en\xED o {n} m\xEDsta",n5:"Zhor\u0161en\xED o {n} m\xEDst"},previousSeasonChangeNoChangeTooltip:"Beze zm\u011Bny",nameLabel:"Jm\xE9no",surnameLabel:"P\u0159\xEDjmen\xED",noCountedTournamentsLabel:"Po\u010Det zapo\u010D\xEDtan\xFDch turnaj\u016F",noTotalTournamentsLabel:"Po\u010Det turnaj\u016F celkem",avgPtsPerTournamentLabel:"Pr\u016Fm\u011Brn\xFD po\u010Det bod\u016F na turnaj",avgPtsPerTournamentTooltip:"Ze zapo\u010D\xEDtan\xFDch turnaj\u016F",detailsLabel:"Detaily",fencerDetail:{hemaratingsFencerLinkLabel:"HEMA Ratings profil \u0161erm\xED\u0159e",hemaratingsClubLinkLabel:"HEMA Ratings profil klubu",countedTournaments:"Zapo\u010D\xEDtan\xE9 turnaje",uncountedTournaments:"Nezapo\u010D\xEDtan\xE9 turnaje",rank:"Um\xEDst\u011Bn\xED",coefficientType:{[e.FOREIGN]:"Zahrani\u010Dn\xED turnaj",[e.FOREIGN_25_50]:"Zahrani\u010Dn\xED \xFA\u010Dast 25-50 %",[e.FOREIGN_50_75]:"Zahrani\u010Dn\xED \xFA\u010Dast 50-75 %",[e.FOREIGN_75_100]:"Zahrani\u010Dn\xED \xFA\u010Dast >75 %",[e.CHAMPIONSHIP]:"Mistrovstv\xED",[e.RANK_1]:"Prvn\xED m\xEDsto",[e.RANK_2]:"Druh\xE9 m\xEDsto",[e.RANK_3]:"T\u0159et\xED m\xEDsto",[e.RANK_4]:"\u010Ctvrt\xE9 m\xEDsto"},coefficientTotal:"Celkem",points:"Po\u010Det bod\u016F",tournamentResultsLabel:"Celkov\xE9 v\xFDsledky",tournamentDetailLabel:"HEMA Ratings"}},clubsTable:{pointsHeaderTooltip:"Sou\u010Det po\u010Dtu bod\u016F z\xEDskan\xFDch \u0161erm\xED\u0159i dan\xE9ho klubu"},countries:{af:"Afgh\xE1nist\xE1n",ax:"Alandy",al:"Alb\xE1nie",dz:"Al\u017E\xEDrsko",as:"Americk\xE1 Samoa",vi:"Americk\xE9 Panensk\xE9 ostrovy",ad:"Andorra",ao:"Angola",ai:"Anguilla",aq:"Antarktida",ag:"Antigua a Barbuda",ar:"Argentina",am:"Arm\xE9nie",aw:"Aruba",au:"Austr\xE1lie",az:"\xC1zerb\xE1jd\u017E\xE1n",bs:"Bahamy",bh:"Bahrajn",bd:"Banglad\xE9\u0161",bb:"Barbados",be:"Belgie",bz:"Belize",by:"B\u011Blorusko",bj:"Benin",bm:"Bermudy",bt:"Bh\xFAt\xE1n",bo:"Bol\xEDvie",bq:"Bonaire, Svat\xFD Eustach a Saba",ba:"Bosna a Hercegovina",bw:"Botswana",bv:"Bouvet\u016Fv ostrov",br:"Braz\xEDlie",io:"Britsk\xE9 indickooce\xE1nsk\xE9 \xFAzem\xED",vg:"Britsk\xE9 Panensk\xE9 ostrovy",bn:"Brunej",bg:"Bulharsko",bf:"Burkina Faso",bi:"Burundi",ck:"Cookovy ostrovy",cw:"Cura\xE7ao",td:"\u010Cad",me:"\u010Cern\xE1 Hora",cz:"\u010Cesko",cn:"\u010C\xEDna",dk:"D\xE1nsko",dm:"Dominika",do:"Dominik\xE1nsk\xE1 republika",dj:"D\u017Eibutsko",eg:"Egypt",ec:"Ekv\xE1dor",er:"Eritrea",ee:"Estonsko",et:"Etiopie",fo:"Faersk\xE9 ostrovy",fk:"Falklandy (Malv\xEDny)",fj:"Fid\u017Ei",ph:"Filip\xEDny",fi:"Finsko",fr:"Francie",gf:"Francouzsk\xE1 Guyana",tf:"Francouzsk\xE1 ji\u017En\xED a antarktick\xE1 \xFAzem\xED",pf:"Francouzsk\xE1 Polyn\xE9sie",ga:"Gabon",gm:"Gambie",gh:"Ghana",gi:"Gibraltar",gd:"Grenada",gl:"Gr\xF3nsko",ge:"Gruzie",gp:"Guadeloupe",gu:"Guam",gt:"Guatemala",gn:"Guinea",gw:"Guinea-Bissau",gg:"Guernsey",gy:"Guyana",ht:"Haiti",hm:"Heard\u016Fv ostrov a McDonaldovy ostrovy",hn:"Honduras",hk:"Hongkong",cl:"Chile",hr:"Chorvatsko",in:"Indie",id:"Indon\xE9sie",iq:"Ir\xE1k",ir:"\xCDr\xE1n",ie:"Irsko",is:"Island",it:"It\xE1lie",il:"Izrael",jm:"Jamajka",jp:"Japonsko",ye:"Jemen",je:"Jersey",za:"Jihoafrick\xE1 republika",gs:"Ji\u017En\xED Georgie a Ji\u017En\xED Sandwichovy ostrovy",kr:"Ji\u017En\xED Korea",ss:"Ji\u017En\xED S\xFAd\xE1n",jo:"Jord\xE1nsko",ky:"Kajmansk\xE9 ostrovy",kh:"Kambod\u017Ea",cm:"Kamerun",ca:"Kanada",cv:"Kapverdy",qa:"Katar",kz:"Kazachst\xE1n",ke:"Ke\u0148a",ki:"Kiribati",cc:"Kokosov\xE9 ostrovy",co:"Kolumbie",km:"Komory",cg:"Kongo",cd:"Kon\u017Esk\xE1 demokratick\xE1 republika",cr:"Kostarika",cu:"Kuba",kw:"Kuvajt",cy:"Kypr",kg:"Kyrgyzst\xE1n",la:"Laos",ls:"Lesotho",lb:"Libanon",lr:"Lib\xE9rie",ly:"Libye",li:"Lichten\u0161tejnsko",lt:"Litva",lv:"Loty\u0161sko",lu:"Lucembursko",mo:"Macao",mg:"Madagaskar",hu:"Ma\u010Farsko",my:"Malajsie",mw:"Malawi",mv:"Maledivy",ml:"Mali",mt:"Malta",im:"Ostrov Man",ma:"Maroko",mh:"Marshallovy ostrovy",mq:"Martinik",mu:"Mauricius",mr:"Maurit\xE1nie",yt:"Mayotte",um:"Men\u0161\xED odlehl\xE9 ostrovy USA",mx:"Mexiko",fm:"Mikron\xE9sie",md:"Moldavsko",mc:"Monako",mn:"Mongolsko",ms:"Montserrat",mz:"Mosambik",mm:"Myanmar",na:"Namibie",nr:"Nauru",de:"N\u011Bmecko",np:"Nep\xE1l",ne:"Niger",ng:"Nig\xE9rie",ni:"Nikaragua",nu:"Niue",nl:"Nizozemsko",nf:"Norfolk",no:"Norsko",nc:"Nov\xE1 Kaledonie",nz:"Nov\xFD Z\xE9land",om:"Om\xE1n",pk:"P\xE1kist\xE1n",pw:"Palau",ps:"Palestinsk\xE1 autonomie",pa:"Panama",pg:"Papua Nov\xE1 Guinea",py:"Paraguay",pe:"Peru",pn:"Pitcairnovy ostrovy",ci:"Pob\u0159e\u017E\xED slonoviny",pl:"Polsko",pr:"Portoriko",pt:"Portugalsko",at:"Rakousko",re:"R\xE9union",gq:"Rovn\xEDkov\xE1 Guinea",ro:"Rumunsko",ru:"Rusko",rw:"Rwanda",gr:"\u0158ecko",pm:"Saint Pierre a Miquelon",sv:"Salvador",ws:"Samoa",sm:"San Marino",sa:"Sa\xFAdsk\xE1 Ar\xE1bie",sn:"Senegal",kp:"Severn\xED Korea",mk:"Severn\xED Makedonie",mp:"Severn\xED Mariany",sc:"Seychely",sl:"Sierra Leone",sg:"Singapur",sk:"Slovensko",si:"Slovinsko",so:"Som\xE1lsko",ae:"Spojen\xE9 arabsk\xE9 emir\xE1ty",gb:"Spojen\xE9 kr\xE1lovstv\xED Velk\xE9 Brit\xE1nie a Severn\xEDho Irska",us:"Spojen\xE9 st\xE1ty americk\xE9",rs:"Srbsko",lk:"Sr\xED Lanka",cf:"St\u0159edoafrick\xE1 republika",sd:"S\xFAd\xE1n",sr:"Surinam",sh:"Svat\xE1 Helena, Ascension a Tristan da Cunha",lc:"Svat\xE1 Lucie",bl:"Svat\xFD Bartolom\u011Bj",kn:"Svat\xFD Kry\u0161tof a Nevis",mf:"Svat\xFD Martin (francouzsk\xE1 \u010D\xE1st)",sx:"Svat\xFD Martin (nizozemsk\xE1 \u010D\xE1st)",st:"Svat\xFD Tom\xE1\u0161 a Princ\u016Fv ostrov",vc:"Svat\xFD Vincenc a Grenadiny",sz:"Svazijsko",sy:"S\xFDrie",sb:"\u0160alomounovy ostrovy",es:"\u0160pan\u011Blsko",sj:"\u0160picberky a Jan Mayen",se:"\u0160v\xE9dsko",ch:"\u0160v\xFDcarsko",tj:"T\xE1d\u017Eikist\xE1n",tz:"Tanzanie",th:"Thajsko",tw:"Tchaj-wan",tg:"Togo",tk:"Tokelau",to:"Tonga",tt:"Trinidad a Tobago",tn:"Tunisko",tr:"Turecko",tm:"Turkmenist\xE1n",tc:"Turks a Caicos",tv:"Tuvalu",ug:"Uganda",ua:"Ukrajina",uy:"Uruguay",uz:"Uzbekist\xE1n",cx:"V\xE1no\u010Dn\xED ostrov",vu:"Vanuatu",va:"Vatik\xE1n",ve:"Venezuela",vn:"Vietnam",tl:"V\xFDchodn\xED Timor",wf:"Wallis a Futuna",zm:"Zambie",eh:"Z\xE1padn\xED Sahara",zw:"Zimbabwe"}},d={"cs-CZ":l,"en-US":u},x=s(({app:i})=>{const t=r({locale:"cs-CZ",messages:d,globalInjection:!0});i.use(t)});export{x as default};
