var respecConfig = {  // this template doesn''t use all possible config parameters
  // see https://respec.org/docs/ for alle

  // specStatus currently supported
  // WW, GN-WV: Werkversie
  // CV, GN-CV: Consultatie versie
  // VV, GN-VV: Vastgestelde versie (of Versie ter vaststelling)
  // DEF, GN-DEF: Definitieve versie
  // EO: Einde ondersteuning, verouderde versie, vervangen door nieuwe versie
  // TG: Versie teruggetrokken
  // BASIS, GN-BASIS: 'geen status'
  specStatus: "WV",

  // SpecType currently supported
  // NO: "Norm"
  // ST: "Standaard"
  // IM: "Informatiemodel"
  // PR: "Praktijkrichtlijn"
  // HR: "Handreiking"
  // WA: "Werkafspraak"
  // AL: "Algemeen"
  // BD: "Beheerdocumentatie"
  // BP: "Best Practice"
  specType: "HR",

  // The specification's publish domain, which is used to publish the specification
  // the url in the header thisVersion is generated like `<conf.nl_organisationPublishURL>/<conf.pubDomain>/<specStatus>-<specType.toLowerCase()>-<conf.shortName>}-conf.publishDate>/`
  pubDomain: "bomos",
  // The specification's "short name", which is the name used in NL_Respec URLs
  shortName: "verdieping",

  // A YYYY-MM-DD date. The publication date of the present document.
  // Als er geen publishDate is opgegeven, genereert ReSpec de dataum o.b.v. de laatste wijzigingen
  // Belangrijk: als publishDate niet opgegeven is, wordt bij de link "Laatst gepubliceerde versie" "geen" gezet. Anders wordt een link opgebouwd voor de laatste versie, met het formaat:
  publishDate: "2022-06-07",

  // A YYYY-MM-DD date. When there is a previous release of a given specification, (W3C)
  //previousPublishDate: "2017-09-20",

  publishVersion: "3.0.0",
  previousPublishVersion: "2i",

  // Zie https://github.com/w3c/respec/wiki/previousMaturity. Dit moet een
  // A YYYY-MM-DD date. When a previousPublishDate is specified, this is typically required as well in order to generate the "Previous Version"
  previousMaturity: "DEF",

  // license can be one of the following: cc0, cc-by or cc-by-nd((default)) (see https://github.com/Geonovum/respec/wiki/license )
  license: 'cc-by-nd',

  // Overrides the standard logo with one or more other logos. (see https://respec.org/docs/#logos)
  // Geef een lege array op als er geen <default> logo moet staan
  // logos: [],

  //Adds a JSON-LD script element containing schema.org information, which can be useful for search engines.
  doJsonLd: true,
  maxTocLevel: 3,
  editors: [
    {
      name: "Erwin Folmer",
      company: "Universiteit Twente",
      companyURL: "https://www.utwente.nl/",
    },
    {
      name: "Gül Işik",
      company: "Logius",
      companyURL: "https://www.logius.nl/",
    },
    {
      name: "Edwin Wisse",
      company: "Logius",
      companyURL: "https://www.logius.nl/",
    }
  ],
  authors: [
    {
      name: "Erwin Folmer",
      company: "Universiteit Twente",
      companyURL: "https://www.utwente.nl/",
    }
  ],
  // url van de github repository waar je in werkt
  github: "https://github.com/Logius-standaarden/BOMOS-Verdieping",
  // Controls if linked "§" section markers are added to a document
  addSectionLinks: true,
  // Lints for accessibility issues using axe-core
  a11y: false,
  // PDF version
  alternateFormats: [
    {
      label: "pdf",
      uri: "BOMOS-Verdieping.pdf",
    },
  ],
  // url van de issue lijst in de github repository waar je in werkt
  //issueBase: "https://github.com/centrumvoorstandaarden/.../issues/",
  // in localBiblio kun je bibliografische items opnemen. In de tekst kun je dan tussen blokhaken verwijzen naar de korte naam bv [NEN3610].
  nl_markdownSplitH1sections: false,
  nl_organisationName: "Logius",
  nl_organisationPrefix: "LS-",
  nl_markdownTableClass: "dkkvs",
  nl_markdownEmbedImageInFigure: true,
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",
  nl_organisationPublishURL: "https://gitdocumentatie.logius.nl/publicatie/",
  nl_logo: {
    src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
    //src: "http://localhost:8081/respec/style/logos/figure-logius.svg",
    alt: "Logius",
    id: "Logius",
    height: 77,
    width: 44,
    url: "https://www.logius.nl/standaarden",
  },
  localBiblio: {
    NEN3610: {
      href: "http://www.nen.nl/web/Normshop/Norm/NEN-36102011-nl.htm",
      title:
        "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      authors: [""],
      date: "Maart 2011",
      publisher: "Nederlands Normalisatie-instituut",
    },
  },
};
