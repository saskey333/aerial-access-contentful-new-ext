import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import NavMobile from './nav-mobile';
import CopyrightFooter from './copyright-footer';


const StyledLayout = {
width: '100%',
minHeight: '100vh',
margin: '0 auto',
display: 'grid',
gridTemplateRows: 'auto 1fr auto',
gridTemplateColumns: '100%',
};

const AvLayout = () => {
return (
<div style={StyledLayout}>
    <Navigation />
    <NavMobile />
    <Banner />
    <div className="disclaimer-container av">
        <h1>Algemene voorwaarden</h1>


        <h3>Artikel 1: Toepasselijkheid
        </h3>
        <ol>
            <li>Deze voorwaarden zijn van toepassing op alle aanbiedingen die Aerial Access B.V. doet, op alle
                overeenkomsten die zij sluit en op alle overeenkomsten die hiervan het gevolg kunnen zijn. </li>
            <li>Indien Aerial Acces B.V. deze algemene voorwaarden niet expliciet bekend maakt, blijft de inhoud
                onverminderd van kracht.
            </li>
            <li>Wanneer Aerial Access B.V. de exacte naleving van de algemene voorwaarden niet verlangd, betekent dit
                niet dat deze niet van toepassing zijn of dat Aerial Access B.V. in de toekomst of in vergelijkbare
                gevallen zou afzien van het recht op strikte naleving.
            </li>
            <li>Aerial Access B.V. is niet aansprakelijk voor misstanden, vertragingen of informatie en verklaringen die
                niet correct zijn gecommuniceerd, voor zover deze opdrachtnemer en opdrachtgever/koper betreffen, als
                gevolg van het gebruik van enig communicatiemiddel tussen Aerial Access B.V. en opdrachtgever/koper of
                tussen Aerial Access B.V. en derden.
            </li>
            <li>Algemene voorwaarden van opdrachtgever gelden niet en worden uitdrukkelijk van de hand gewezen.
            </li>
        </ol>
        <h3>Disclaimer
        </h3>
        <ol>
            <li>Alle aanbiedingen zijn vrijblijvend, ook als er een termijn van aanvaarding wordt vermeld en/of zelfs
                wanneer de opdrachtgever/koper het aanbod heeft aanvaard.
            </li>

            <li>Elke uitgebrachte aanbieding door Aerial Access B.V. is gebaseerd op door opdrachtgever/koper verstrekte
                informatie, gegevens, tekeningen enz. en zal hij in zijn aanbieding uitgaan van de juistheid,
                volledigheid en nauwkeurigheid van de informatie, documentatie en goederen die zijn geleverd aan Aerial
                Access B.V., ook als deze komen van derden.

            </li>
            <li>De in de aanbieding genoemde prijzen zijn gebaseerd op levering af fabriek,”ex works”, conform Incoterms
                2020.

            </li>
            <li>Als zijn aanbieding niet wordt aanvaard, heeft opdrachtnemer het recht alle kosten die hij heeft moeten
                maken om zijn aanbieding te doen bij opdrachtgever in rekening te brengen.

            </li>
            <li>De prijzen zijn exclusief omzetbelasting en emballage.

            </li>
        </ol>
        <h3>Artikel 2: Aanbiedingen

        </h3>
        <ol>
            <li>Alle aanbiedingen zijn vrijblijvend, ook als er een termijn van aanvaarding wordt vermeld en/of zelfs
                wanneer de opdrachtgever/koper het aanbod heeft aanvaard.
            </li>

            <li>Elke uitgebrachte aanbieding door Aerial Access B.V. is gebaseerd op door opdrachtgever/koper verstrekte
                informatie, gegevens, tekeningen enz. en zal hij in zijn aanbieding uitgaan van de juistheid,
                volledigheid en nauwkeurigheid van de informatie, documentatie en goederen die zijn geleverd aan Aerial
                Access B.V., ook als deze komen van derden.

            </li>
            <li>De in de aanbieding genoemde prijzen zijn gebaseerd op levering af fabriek,”ex works”, conform Incoterms
                2020.

            </li>
            <li>Als zijn aanbieding niet wordt aanvaard, heeft opdrachtnemer het recht alle kosten die hij heeft moeten
                maken om zijn aanbieding te doen bij opdrachtgever in rekening te brengen.

            </li>
            <li>De prijzen zijn exclusief omzetbelasting en emballage.

            </li>
        </ol>
        <h3>Artikel 3: Overeenkomst

        </h3>
        <ol>
            <li>Indien de overeenkomst schriftelijk wordt aangegaan, komt deze tot stand op de dag van ondertekening van
                het contract door Aerial Access B.V. of op de dag van verzending van de schriftelijke orderbevestiging
                door Aerial Access B.V..

            </li>

            <li>Elke uitgebrachte aanbieding door Aerial Access B.V. is gebaseerd op door opdrachtgever/koper verstrekte
                informatie, gegevens, tekeningen enz. en zal hij in zijn aanbieding uitgaan van de juistheid,
                volledigheid en nauwkeurigheid van de informatie, documentatie en goederen die zijn geleverd aan Aerial
                Access B.V., ook als deze komen van derden.

            </li>
            <li>Mondelinge toezeggingen door en afspraken met medewerkers van Aerial Aerial B.V. binden opdrachtnemer
                slechts voor zover deze schriftelijk door een tekenbevoegd werknemer van Aerial Access B.V. zijn
                bevestigd.


            </li>
            <li>Als een overeenkomst wordt gesloten met gebruik van elektronische vormen van communicatie, verandert het
                ontbreken van een originele handtekening niets aan de bindende kracht van de overeenkomst.
                Opdrachtgever/koper zal de toepasbaarheid van de geldigheid van deze algemene voorwaarden niet
                bestrijden vanwege het feit dat het aanbod en/of de aanvaarding langs elektronische weg is/zijn
                geschied.


            </li>
            <li>Aerial Access B.V. behoudt zich het recht voor om voor rekening en risico van opdrachtgever/koper derden
                in te schakelen voor de uitvoering van de met Koper gesloten overeenkomst indien dit in alle
                redelijkheid is vereist.



            </li>
            <li>Aerial Access B.V. behoudt zich het recht voor om de gesloten overeenkomst zonder gerechtelijke
                tussenkomst geheel of gedeeltelijk te beëindigen, als opdrachtgever/koper verzoekt om surseance van
                betaling, als het faillissement van opdrachtgever/koper wordt aangevraagd of afgekondigd, als
                opdrachtgever/koper zijn verplichtingen onder deze overeenkomst niet nakomt, als de opdracht niet (of
                niet langer) kan worden uitgevoerd of als opdrachtgever/koper nalatig is in het leveren van informatie
                en/of goederen en/of diensten die Aerial Access B.V. van opdrachtgever/koper verlangt of vereist in het
                kader van de gesloten overeenkomsten en/of als de uitvoering van de overeenkomst in strijd is met
                toepasselijke regelgeving van de overheid.


            </li>

            <li>Indien de overeenkomst door Aerial Access B.V. wordt beëindigd op een van in Artikel 3 lid 6 genoemde
                gronden, is opdrachtgever/koper automatisch een vergoeding verschuldigd aan Aerial Access B.V. voor
                intern gemaakte kosten en gederfde winst van 20% van de overeengekomen vergoeding met een minimum van
                EUR 500,--. Voorts vergoedt opdrachtgever/koper alle andere door opdrachtnemer gemaakte kosten voor de
                voorbereiding en/of uitvoering van haar prestaties alsmede elke andere door opdrachtnemer geleden
                schade. Voor zover Aerial Access B.V. (op basis van de hiervoor genoemde gronden) de tussen partijen
                gesloten overeenkomst zou beëindigen, is hij niet verplicht tot het betalen van enige vergoeding of
                schadevergoeding uit hoofde van wat dan ook.


            </li>
            <li>Opdrachtgever/koper kan deze overeenkomst en de rechten en verplichtingen die eruit voortkomen niet
                overdragen aan een derde zonder voorafgaande schriftelijke toestemming van Aerial Access B.V.



            </li>


        </ol>


        <h3>Artikel 4: Rechten van intellectuele eigendom </h3>
        <ol>
            <li>Tenzij anders is overeengekomen, behoudt Aerial Access B.V. de auteursrechten en alle rechten van
                industriële eigendom op de door hem gedane aanbiedingen, verstrekte ontwerpen, afbeeldingen,
                tekeningen, (proef)modellen, programmatuur enz. Opdrachtgever/koper staat er voor in dat bedoelde
                informatie, behalve voor uitvoering van overeenkomst, niet anders dan met schriftelijke toestemming
                van Aerial Access B.V. worden gekopieerd, aan derden wordt getoond, bekend gemaakt of gebruikt.
            </li>
            <li>In catalogussen, afbeeldingen, tekeningen dimensies en de vermelde gegevens zijn slechts bindend
                indien en voor zover deze uitdrukkelijk zijn opgenomen in een door partijen ondertekend contract of
                een door Aerial Access B.V. ondertekende opdrachtbevestiging.
            </li>
            <li>De rechten op de in lid 1 genoemde gegevens blijven eigendom van Aerial Access B.V. ongeacht of aan
                opdrachtgever/koper voor de vervaardiging ervan kosten in rekening zijn gebracht. Deze gegevens
                mogen zonder uitdrukkelijke toestemming van Aerial Access B.V. niet gekopieerd, gebruikt of aan
                derden getoond worden. Bij overtreding van deze bepaling is opdrachtgever aan opdrachtnemer een
                boete verschuldigd van € 25.000,- (euro).
            </li>
            <li>Opdrachtgever/koper moet de aan hem verstrekte gegevens als bedoeld in lid 1 op eerste verzoek
                binnen de door opdrachtnemer gestelde termijn retourneren. Bij overtreding van deze bepaling is
                opdrachtgever aan opdrachtnemer een boete verschuldigd € 1.000,- (euro) per dag.
            </li>

        </ol>



        <h3>Artikel 5: Adviezen, ontwerpen en materialen


        </h3>
        <ol>
            <li>Opdrachtgever/koper kan geen rechten ontlenen aan adviezen en informatie die hij van Aerial Access B.V.
                krijgt als deze geen directe betrekking hebben op de opdracht.
            </li>
            <li>Opdrachtgever/koper is verantwoordelijk voor de door of namens hem gemaakte tekeningen en berekeningen
                en voor de functionele geschiktheid van door of namens hem voorgeschreven materialen.
            </li>
            <li>Opdrachtgever/koper vrijwaart Aerial Access B.V. voor elke aanspraak van derden met betrekking tot het
                gebruik van door of namens opdrachtgever/koper verstrekte tekeningen, berekeningen, monsters, modellen
                en dergelijke.
            </li>
            <li>Opdrachtgever/koper mag de materialen die opdrachtnemer wil gebruiken vóórdat deze verwerkt worden voor
                eigen rekening (laten) onderzoeken. Als Aerial Access B.V. hierdoor schade lijdt, komt deze voor
                rekening van opdrachtgever/koper.
            </li>

        </ol>
        <h3>Artikel 9: Niet afgenomen zaken


        </h3>
        <p>Wanneer zaken na het verstrijken van de levertijd niet zijn afgenomen, blijven deze ter beschikking staan van
            opdrachtgever. Niet afgenomen zaken worden voor rekening en risico van opdrachtgever opgeslagen.
            Opdrachtnemer mag altijd gebruik maken van de bevoegdheid van artikel 6:90 BW.</p>

        <h3>Artikel 10: Prijswijziging</h3>
        <ol>
            <li>Als na de datum waarop de overeenkomst is gesloten vier maanden verstrijken en de nakoming ervan door
                opdrachtnemer nog niet is voltooid, mag een stijging in de prijsbepalende factoren worden doorberekend
                aan opdrachtgever.
            </li>
            <li>Betaling van de prijsverhoging zoals bedoeld in lid 1 vindt plaats tegelijk met betaling van de hoofdsom
                of de laatste termijn.
            </li>
            <li>Als er goederen door opdrachtgever worden aangeleverd en opdrachtnemer bereid is deze te gebruiken, mag
                opdrachtnemer maximaal 20% van de marktprijs van de aangeleverde goederen in rekening te brengen.
            </li>
        </ol>
        <h3>Artikel 11: Montage/installatie


        </h3>
        <ol>
            <li>Indien door partijen is overeengekomen dat Aerial Access B.V. de montage/installatie van het te leveren
                goed zal verzorgen, is opdrachtgever/koper jegens Aerial Access B.V. verantwoordelijk voor de juiste en
                tijdige uitvoering van alle inrichtingen, voorzieningen, voorwaarden en/of vergunningen, die
                noodzakelijk zijn voor de opstelling van het te monteren/installeren goed en/of de juiste werking van
                het goed in gemonteerde/geïnstalleerde staat. Dit geldt niet indien en voor zover die uitvoering door
                of in opdracht van opdrachtnemer wordt verricht volgens door of in opdracht van laatstgenoemde
                vervaardigde of verstrekte tekeningen en/of gegevens.
            </li>
            <li>Onverminderd het bepaalde in lid 1 zorgt opdrachtgever/koper, indien door partijen is overeengekomen dat
                Aerial Access B.V. demontage/installatie van het te leveren goed zal verzorgen, er in ieder geval voor
                eigen rekening en risico voor dat:
                <ul>
                    <li>de medewerkers van Aerial Access B.V. , zodra zij op de plaats van montage/installatie zijn
                        aangekomen, hun werkzaamheden kunnen aanvangen en blijven verrichten gedurende de normale
                        werkuren en bovendien, indien opdrachtnemer dit noodzakelijk acht, buiten de normale werkuren,
                        mits hij dit tijdig aan klant heeft medegedeeld;
                    </li>
                    <li>geschikte behuizing en alle krachtens overheidsregelingen, de overeenkomst en het gebruik
                        vereiste voorzieningen voor de medewerkers van Aerial Access B.V. aanwezig zijn;
                    </li>
                    <li>de toegangswegen tot de plaats van opstelling geschikt zijn voor het benodigde transport;
                    </li>
                    <li>de aangewezen plaats van opstelling geschikt is voor opslag en montage/installatie;
                    </li>
                    <li>de nodige afsluitbare opslagplaatsen voor materiaal, gereedschap en andere zaken aanwezig zijn;
                    </li>
                    <li>de nodige en gebruikelijke hulppersonen, hulpwerktuigen, hulp- en bedrijfsmaterialen
                        (brandstoffen, oliën en vetten, poets- en ander klein materiaal, gas, water, perslucht,
                        elektriciteit, stoom, verwarming, verlichting, e.d. daar onder begrepen) en de voor het bedrijf
                        van Aerial Access B.V. normale meet- en test apparatuur tijdig en kosteloos op de juiste plaats
                        ter beschikking staan van opdrachtgever/koper;
                    </li>
                    <li>alle noodzakelijke veiligheids- en voorzorgsmaatregelen zijn genomen en worden gehandhaafd en
                        dat alle maatregelen zijn genomen en worden gehandhaafd om in het kader van
                        demontage/installatie aan de toepasselijke overheidsvoorschriften te voldoen;
                    </li>
                    <li>op grond van de Arbowet en -regelgeving voorgeschreven voorzieningen;
                    </li>
                    <li>bij aanvang van en tijdens demontage/installatie de toegezonden goederen op de juiste plaats
                        aanwezig zijn.
                    </li>
                </ul>
            </li>
            <li>Schade kosten, die ontstaan doordat aan de in dit artikel gestelde voorwaarden niet of niet tijdig is
                voldaan, zijn voor rekening van opdrachtgever/koper.
            </li>
            <li>Opdrachtgever/koper is aansprakelijk voor alle schade als gevolg van verlies, diefstal, verbranding of
                beschadiging van gereedschappen, materialen en andere zaken van opdrachtnemer die zich bevinden op de
                plaats waar de werkzaamheden worden verricht
            </li>
            <li>Met betrekking tot de montage-/installatietijd is artikel 6 van overeenkomstige toepassing.
            </li>
            <li>Opdrachtgever/koper garandeert het tijdig verkrijgen en onderhouden van alle vergunningen jegens Aerial
                Access B.V., als ook de wettelijke vergunningen die vereist zijn voor de activiteiten die moeten worden
                uitgevoerd.
            </li>
            <li>Wanneer opdrachtgever zijn verplichtingen zoals omschreven in de vorige leden niet nakomt en daardoor
                vertraging in de uitvoering van de werkzaamheden ontstaat, zullen de werkzaamheden worden uitgevoerd
                zodra de planning van opdrachtnemer dit toelaat. Daarnaast is opdrachtgever aansprakelijk voor alle
                daaruit voor opdrachtnemer voortvloeiende schade.
            </li>

        </ol>

        <h3>Artikel 12: Onuitvoerbaarheid van de opdracht</h3>
        <ol>
            <li>Opdrachtnemer heeft het recht de nakoming van zijn verplichtingen op te schorten, als hij door
                omstandigheden die bij het sluiten van de overeenkomst niet te verwachten waren en die buiten zijn
                invloedssfeer liggen, tijdelijk verhinderd is zijn verplichtingen na te komen.
            </li>
            <li>Onder omstandigheden die niet door opdrachtnemer te verwachten waren en die buiten zijn invloedssfeer
                liggen, worden onder andere verstaan de omstandigheid dat leveranciers en/of onder-aannemers van
                opdrachtnemer niet of niet tijdig voldoen aan hun verplichtingen, het weer, aardbevingen, brand, verlies
                of diefstal van gereedschappen, het verloren gaan van te verwerken materialen, wegblokkades, stakingen
                of werkonderbrekingen en import of handelsbeperkingen.
            </li>
            <li>Opdrachtnemer is niet bevoegd tot opschorting als de nakoming blijvend onmogelijk is of als een
                tijdelijke onmogelijkheid meer dan zes maanden heeft geduurd. De overeenkomst kan dan worden ontbonden
                voor dat deel van de verplichtingen dat nog niet is nagekomen. Partijen hebben in dat geval geen recht
                op vergoeding van de als gevolg van de ontbinding geleden of te lijden schade.
            </li>

        </ol>

        <h3>Artikel 13: Omvang van het werk</h3>
        <ol>
            <li>Opdrachtgever moet ervoor zorgen dat alle vergunningen, ontheffingen en andere beschikkingen die
                noodzakelijk zijn om het werk uit te voeren tijdig verkregen zijn.
            </li>
            <li>In de prijs van het werk zijn niet begrepen:
                <ul>
                    <li>de kosten voor grond-, breek-, funderings-, metsel-, timmer-, stukadoors-, schilder-,
                        behangers-, herstel- of ander bouwkundig werk;
                    </li>
                    <li>de kosten voor aansluiting van gas-, water-, elektriciteit- of andere infrastructurele
                        voorzieningen;
                    </li>
                    <li>de kosten ter voorkoming of beperking van schade aan op of bij het werk aanwezige zaken;
                    </li>
                    <li>de kosten van afvoer van materialen, bouwstoffen of afval;
                    </li>
                    <li>reis- en/of verblijfkosten.
                    </li>
                </ul>
            </li>

        </ol>

        <h3>Artikel 14: Wijzigingen in het werk</h3>
        <ol>
            <li>Wijzigingen in het werk resulteren in ieder geval in meer- of minderwerk als:
                <ul>
                    <li>er sprake is van een wijziging in het ontwerp of bestek;
                    </li>
                    <li>de door opdrachtgever verstrekte informatie niet overeenstemt met de werkelijkheid;
                    </li>
                    <li>van geschatte hoeveelheden met meer dan 10% wordt afgeweken.
                    </li>
                </ul>
            </li>
            <li>Meerwerk wordt berekend op basis van de waarde van de prijsbepalende factoren die geldt op het moment
                dat het meerwerk wordt verricht. Minderwerk wordt verrekend op basis van de waarde van de prijsbepalende
                factoren die gold op het moment van het sluiten van de overeenkomst.
            </li>
            <li>Als het saldo van het minderwerk dat van het meerwerk overtreft, mag opdrachtnemer bij de eindafrekening
                tien procent (10%) van het verschil van de saldi bij opdrachtgever/koper in rekening te brengen. Deze
                bepaling geldt niet voor minderwerk dat gevolg is van een verzoek van opdrachtnemer.
            </li>

        </ol>

        <h3>Artikel 19: Garantie
        </h3>
        <ol>
            <li>Onverminderd de hierna gestelde beperkingen staat Aerial Access B.V., zijnde opdrachtnemer, in zowel
                voor de deugdelijkheid van het door hem geleverde goed (niet zijnde een dienst) als voor de kwaliteit
                van het daarvoor gebruikte en/of geleverde materiaal, voor zover het betreft bij de keuring,
                respectievelijk overname-test niet waarneembare gebreken aan het geleverde product, waarvan de
                opdrachtgever/koper bewijst dat binnen zes (6) maanden na de levering volgens artikel 6 lid 5 zijn
                opgetreden uitsluitend of overwegend als direct gevolg van een onjuistheid in de door Aerial Access B.V.
                toegepaste constructie dan wel als gevolg van gebrekkige afwerking of gebruik van slecht materiaal.
            </li>
            <li>Opdrachtnemer staat voor een periode van zes (6) maanden na (op)levering in voor de goede uitvoering van
                de overeengekomen prestatie.
            </li>
            <li>Bestaat de overeengekomen prestatie uit aanneming van werk dan staat opdrachtnemer voor de in lid 2
                genoemde periode in voor de deugdelijkheid van de geleverde constructie en de gebruikte materialen, mits
                hij vrij was in de keuze daarvan. Als blijkt dat de geleverde constructie of de gebruikte materialen
                niet deugdelijk zijn, zal opdrachtnemer deze herstellen of vervangen. De delen die bij opdrachtnemer
                hersteld of door opdrachtnemer vervangen worden, moeten franco aan opdrachtnemer worden toegezonden.
                Demontage en montage van deze delen en de eventueel gemaakte reis- en verblijfkosten komen voor rekening
                van opdrachtgever.
            </li>
            <li>Bestaat de overeengekomen prestatie uit het bewerken van door opdrachtgever/koper aangeleverde
                materialen dan staat opdrachtnemer voor de in lid 2 genoemde periode in voor de deugdelijkheid van de
                uitgevoerde bewerking. Als blijkt dat een bewerking niet deugdelijk is uitgevoerd, zal opdrachtnemer de
                keuze maken of hij:
                <ul>
                    <li>de bewerking opnieuw uitvoert. In dat geval moet opdrachtgever voor eigen rekening nieuw
                        materiaal aanleveren;
                    </li>
                    <li>het gebrek herstelt. In dat geval moet opdrachtgever het materiaal franco aan opdrachtnemer
                        terugzenden;
                    </li>
                    <li>opdrachtgever/koper crediteert voor een evenredig deel van de factuur.
                    </li>
                </ul>
            </li>
            <li>Bestaat de overeengekomen prestatie uit levering van een zaak dan staat opdrachtnemer gedurende de in
                lid 1 genoemde periode in voor de deugdelijkheid van de geleverde zaak. Als blijkt dat de levering niet
                deugdelijk is geweest, dan moet de zaak franco aan opdrachtnemer worden terug gezonden. Daarna zal
                opdrachtnemer de keuze maken of hij:
                <ul>
                    <li>de zaak herstelt;
                    </li>
                    <li>de zaak vervangt;
                    </li>
                    <li>opdrachtgever/koper crediteert voor een evenredig deel van de factuur.
                    </li>
                </ul>

            </li>
            <li>Bestaat de overeengekomen prestatie (mede) uit de installatie en/of montage van een geleverde zaak dan
                staat opdrachtnemer voor de in lid 1 genoemde periode in voor de deugdelijkheid van de installatie en/of
                montage. Als blijkt dat de installatie en/of montage niet deugdelijk is uitgevoerd, zal opdrachtnemer
                dit herstellen. De eventueel gemaakte reis- en verblijfkosten komen voor rekening van
                opdrachtgever/klant.
            </li>
            <li>Voor die onderdelen waarvoor opdrachtgever/koper en Aerial Access B.V. dit uitdrukkelijk schriftelijk
                zijn overeengekomen geldt fabrieksgarantie. Als opdrachtgever/koper gelegenheid heeft gehad kennis te
                nemen van de inhoud van de fabrieksgarantie zal deze in de plaats treden van garantie op grond van dit
                artikel.
            </li>
            <li>Opdrachtgever/klant moet opdrachtnemer in alle gevallen de gelegenheid bieden een eventueel gebrek te
                herstellen of de bewerking opnieuw uit te voeren.
            </li>
            <li>Opdrachtgever/koper kan alleen een beroep doen op garantie nadat hij aan al zijn verplichtingen ten
                opzichte van opdrachtnemer heeft voldaan.
            </li>
            <li>Geen garantie wordt gegeven voor gebreken die het gevolg zijn van:
                <ul>
                    <li>normale slijtage;
                    </li>
                    <li>onoordeelkundig gebruik;
                    </li>
                    <li>niet of onjuist uitgevoerd onderhoud;
                    </li>
                    <li>installatie, montage, wijziging of reparatie door opdrachtgever of door derden.
                    </li>
                </ul>
            </li>
            <li>Geen garantie wordt gegeven voor geleverde zaken die niet nieuw waren op het moment van levering.
            </li>
        </ol>

        <h3>Artikel 20: Aansprakelijkheid
        </h3>
        <ol>
            <li>De aansprakelijkheid van Aerial Access B.V. is beperkt tot nakoming van de in artikel 17 van deze
                voorwaarden omschreven garantieverplichtingen. Indien opdrachtnemer niet binnen een redelijke termijn
                zijn verplichtingen voortvloeiend uit artikel 17 is nagekomen, kan opdrachtgever/koper in een
                schriftelijke mededeling een laatste, passende termijn stellen voor de nakoming door Aerial Access B.V.
                van deze verplichtingen. Indien opdrachtnemer niet binnen deze laatste termijn zijn verplichtingen
                nakomt, kan opdrachtgever/koper, voor rekening van Aerial Access B.V., de noodzakelijke
                herstelwerkzaamheden zelf uitvoeren of door (een) derde(n) laten uitvoeren. Indien herstelwerkzaamheden
                op deze manier worden uitgevoerd, zal Aerial Access B.V. na vergoeding van de op dat moment gemaakte
                redelijke kosten, worden ontslagen van alle aansprakelijkheid, ongeacht het succes van uitgevoerde
                herstelwerkzaamheden, met dien verstande dat deze kosten (ten) hoogste(ns) 12% van de voor het geleverde
                product overeengekomen prijs zullen bedragen.
            </li>
            <li>Indien de herstelwerkzaamheden volgens lid 1 niet met succes worden uitgevoerd:

                <ul>
                    <li>heeft opdrachtgever/koper recht op een korting op de voor het geleverde goed overeengekomen
                        prijs in evenredigheid met de waardevermindering van het product, met dien verstande dat deze
                        korting ten hoogste 12% van de voor het geleverde product overeengekomen prijs kan bedragen, of;
                    </li>
                    <li>kan opdrachtgever/koper, indien het gebrek zo ernstig is dat het opdrachtgever/koper in
                        belangrijke mate het voordeel van het contract ontneemt, door een schriftelijke mededeling aan
                        Aerial Access B.V. de overeenkomst ontbinden. Opdrachtgever/koper heeft dan recht op restitutie
                        van de door hem geleden schade, zulks tot een maximum van 12% van de voor het geleverde goed
                        overeengekomen prijs.
                    </li>
                </ul>
            </li>
            <li>Tenzij er sprake is van opzet of bewuste roekeloosheid van de tot de bedrijfsvoering behorende
                medewerkers van Aerial Access B.V. en behoudens het bepaalde in artikel 6 lid 6 en in lid 1 en lid 2 van
                dit artikel is alle aansprakelijkheid van opdrachtnemer voor gebreken in het geleverde goed en in
                verband met de levering, zoals voor schade door overschrijding van de levertijd en door niet-levering,
                voor schade als gevolg van aansprakelijkheid jegens derden, voor bedrijfsschade, gevolgschade en
                indirecte schade en voor schade als gevolg van enig onrechtmatigheid handelen nalaten van (medewerkers
                van) Aerial Access B.V., uitgesloten.
            </li>
            <li>Aerial Access B.V. is daarom ook niet aansprakelijk voor:
                <ul>
                    <li>schending van octrooien, licenties of andere rechten van derden;
                    </li>
                    <li>beschadiging of verlies, door welke oorzaak ook, van door opdrachtgever/koper ter beschikking
                        gestelde grondstoffen, halffabricaten, modellen, gereedschappen en andere zaken.
                    </li>
                </ul>
            </li>
            <li>Indien opdrachtnemer, zonder de montage/installatie in de opdracht te hebben, wel bij de
                montage/installatie hulp en bijstand verleent, van welke aard ook, geschiedt dit voor risico van
                opdrachtgever/koper.
            </li>
            <li>Opdrachtgever/koper is gehouden opdrachtnemer te vrijwaren, respectievelijk schadeloos te stellen ter
                zake van alle aanspraken van derden tot vergoeding van schade.
            </li>
            <li>Eventuele aansprakelijkheid van Aerial Access B.V. beperkt tot de schade die voorzienbaar was als
                mogelijk gevolg van de handeling die vergoeding vereist, waar het maximale bedrag het bedrag is dat
                wordt uitbetaald in het specifieke geval krachtens de aansprakelijkheidsverzekering die is afgesloten,
                vermeerderd met het bedrag van het eigen risico dat volgens de polisvoorwaarden niet voor rekening van
                de verzekerde komt. Het maximale verzekerde bedrag is EUR 5.000.000 per gebeurtenis, met een maximum van
                EUR 10.000.000 per jaar. Als er, om welke reden dan ook, geen distributie kan plaatsvinden
                overeenkomstig voornoemde verzekering, is iedere aansprakelijkheid beperkt tot ten hoogstens 12% van de
                voor het geleverde product overeengekomen prijs.
            </li>
            <li>Aerial Access B.V. is niet aansprakelijk als opdrachtgever/koper schade niet onmiddellijk schriftelijk
                en binnen 5 dagen na de levering volgens artikel 6 lid 5 meldt. Alle vorderingen jegens Aerial Access
                B.V. vervallen als opdrachtgever/koper geen deugdelijke inspectie heeft uitgevoerd bij levering en/of
                opdrachtgever/koper niet kan bewijzen dat hij alle instructies voor montage, bevestiging, installatie
                en/of gebruik heeft gevolgd.
            </li>
            <li>Aerial Access B.V. beëindigt alle wettelijke en contractuele verweermiddelen die hij kan inroepen om
                haar eigenaansprakelijkheid jegens opdrachtgever/koper te bestrijden, ook ten behoeve van haar
                ondergeschikten en niet ondergeschikten voor wiens handelingen hij aansprakelijk zou kunnen zijn
                krachtens de wet.
            </li>

        </ol>
        <p>
            Algemene Voorwaarden Aerial Access B.V.
        </p>
    </div>
    <Footer />
    <CopyrightFooter />

</div>
);
};

export default AvLayout;