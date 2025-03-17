type ImageCredit = {
    name: string;
    link: string;
    imageContent: string;
    imageLink: string;
};

type LogoCredit = {
  tool: string;
  toolLink: string;
  source: string;
  sourceLink: string;
};

type ImageOption =
  | 'thumbnail'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5';

const getImagePath = (image: string, number: ImageOption): string => {
  return `/images/skyscrapers/${image}/${image}-${number}.jpg`
};

export const imageCredit: ImageCredit[] = [
  //* EMPIRE STATE BUILDING
  {
    name: 'Ben Dumond',
    link: 'https://unsplash.com/@bendumond',
    imageContent: 'Empire State Building Thumbnail',
    imageLink: getImagePath('empire-state-building', 'thumbnail')
  },
  {
    name: 'Andreas M',
    link: 'https://unsplash.com/@nextvoyage_pl',
    imageContent: 'Empire State Building #1',
    imageLink: getImagePath('empire-state-building', '1')
  },
  {
    name: 'Chris Czermak',
    link: 'https://unsplash.com/@chris_czermak',
    imageContent: 'Empire State Building #2',
    imageLink: getImagePath('empire-state-building', '2')
  },
  {
    name: 'Abhinav Bhardwaj',
    link: 'https://unsplash.com/@abhinav1bhardwaj',
    imageContent: 'Empire State Building #3',
    imageLink: getImagePath('empire-state-building', '3')
  },
  {
    name: 'Logan Armstrong',
    link: 'https://unsplash.com/@loganstrongarms',
    imageContent: 'Empire State Building #4',
    imageLink: getImagePath('empire-state-building', '4')
  },
  
  //* TAIPEI 101
  {
    name: 'Hans Brunk',
    link: 'https://unsplash.com/@hansbrunk',
    imageContent: 'Taipei 101 Thumbnail',
    imageLink: getImagePath('taipei-101', 'thumbnail')
  },
  {
    name: 'Tienko Dima',
    link: 'https://unsplash.com/@damabima',
    imageContent: 'Taipei 101 #1',
    imageLink: getImagePath('taipei-101', '1')
  },
  {
    name: 'Jon Flobrant',
    link: 'https://unsplash.com/@jonflobrant',
    imageContent: 'Taipei 101 #2',
    imageLink: getImagePath('taipei-101', '2')
  },
  {
    name: 'Should Wang',
    link: 'https://unsplash.com/@shouldwang',
    imageContent: 'Taipei 101 #3',
    imageLink: getImagePath('taipei-101', '3')
  },
  {
    name: 'Lisanto 李奕良',
    link: 'https://unsplash.com/@lisanto_',
    imageContent: 'Taipei 101 #4',
    imageLink: getImagePath('taipei-101', '4')
  },
  
  //* CHRYSLER BUILDING
  {
    name: 'Nicole Padin',
    link: 'https://unsplash.com/@nicolempadin',
    imageContent: 'Chrysler Building Thumbnail',
    imageLink: getImagePath('chrysler-building', 'thumbnail')
  },
  {
    name: 'Jonathan Pease',
    link: 'https://unsplash.com/@jpease',
    imageContent: 'Chrysler Building #1',
    imageLink: getImagePath('chrysler-building', '1')
  },
  {
    name: 'William Wachter',
    link: 'https://unsplash.com/@waktr',
    imageContent: 'Chrysler Building #2',
    imageLink: getImagePath('chrysler-building', '2')
  },
  {
    name: 'Dan Smedley',
    link: 'https://unsplash.com/@nadyeldems',
    imageContent: 'Chrysler Building #3',
    imageLink: getImagePath('chrysler-building', '3')
  },
  {
    name: 'David Vives',
    link: 'https://unsplash.com/@davidvives',
    imageContent: 'Chrysler Building #4',
    imageLink: getImagePath('chrysler-building', '4')
  },
  
  //* ONE WORLD TRADE CENTER
  {
    name: 'Anthony DELANOIX',
    link: 'https://unsplash.com/@anthonydelanoix',
    imageContent: 'One World Trade Center Thumbnail',
    imageLink: getImagePath('one-world-trade-center', 'thumbnail')
  },
  {
    name: 'Arthur Osipyan',
    link: 'https://unsplash.com/@arty_nyc',
    imageContent: 'One World Trade Center #1',
    imageLink: getImagePath('one-world-trade-center', '1')
  },
  {
    name: 'David Becker',
    link: 'https://unsplash.com/@beckerworks',
    imageContent: 'One World Trade Center #2',
    imageLink: getImagePath('one-world-trade-center', '2')
  },
  {
    name: 'Simon Lohmann',
    link: 'https://unsplash.com/@slohmann',
    imageContent: 'One World Trade Center #3',
    imageLink: getImagePath('one-world-trade-center', '3')
  },
  {
    name: 'Willian Justen de Vasconcellos',
    link: 'https://unsplash.com/@willianjusten',
    imageContent: 'One World Trade Center #4',
    imageLink: getImagePath('one-world-trade-center', '4')
  },
  
  
  //* CENTRAL PARK TOWER
  {
    name: 'Vinicius Eloy Bailo',
    link: 'https://unsplash.com/@eloyv',
    imageContent: 'Central Park Tower Thumbnail',
    imageLink: getImagePath('central-park-tower', 'thumbnail')
  },
  {
    name: 'Dana Andreea Gheorghe',
    link: 'https://unsplash.com/@dana_andreea',
    imageContent: 'Central Park Tower #1',
    imageLink: getImagePath('central-park-tower', '1')
  },
  {
    name: 'Martti Salmi',
    link: 'https://unsplash.com/@marttisalmi',
    imageContent: 'Central Park Tower #2 (cropped)',
    imageLink: getImagePath('central-park-tower', '2')
  },
  {
    name: 'Dana Andreea Gheorghe',
    link: 'https://unsplash.com/@dana_andreea',
    imageContent: 'Central Park Tower #3',
    imageLink: getImagePath('central-park-tower', '3')
  },
  
  //* GUANGZHOU INTERNATIONAL FINANCE CENTER
  {
    name: 'Mikhail Preobrazhenskiy',
    link: 'https://unsplash.com/@misheng_gz',
    imageContent: 'Guangzhou International Finance Center Thumbnail',
    imageLink: getImagePath('guangzhou-international-finance-center', 'thumbnail')
  },
  {
    name: 'Irina Iriser',
    link: 'https://unsplash.com/@iriser',
    imageContent: 'Guangzhou International Finance Center #1 (cropped)',
    imageLink: getImagePath('guangzhou-international-finance-center', '1')
  },
  {
    name: '早秋 王',
    link: 'https://unsplash.com/@wulimaymay',
    imageContent: 'Guangzhou International Finance Center #2 (cropped)',
    imageLink: getImagePath('guangzhou-international-finance-center', '2')
  },
  {
    name: 'White.Rainforest ™︎ ∙ 易雨白林.',
    link: 'https://unsplash.com/@whiterainforest',
    imageContent: 'Guangzhou International Finance Center #3',
    imageLink: getImagePath('guangzhou-international-finance-center', '3')
  },
  
  //* GUANGZHOU CHOW TAI FOOK FINANCE CENTRE
  {
    name: 'Wally Yang',
    link: 'https://unsplash.com/@wallygood',
    imageContent: 'Guangzhou Chow Tai Fook Finance Centre Thumbnail',
    imageLink: getImagePath('guangzhou-chow-tai-fook-finance-centre', 'thumbnail')
  },
  {
    name: 'Irina Iriser',
    link: 'https://unsplash.com/@iriser',
    imageContent: 'Guangzhou Chow Tai Fook Finance Centre #1 (cropped)',
    imageLink: getImagePath('guangzhou-chow-tai-fook-finance-centre', '1')
  },
  {
    name: '早秋 王',
    link: 'https://unsplash.com/@wulimaymay',
    imageContent: 'Guangzhou Chow Tai Fook Finance Centre #2 (cropped)',
    imageLink: getImagePath('guangzhou-chow-tai-fook-finance-centre', '2')
  },
  {
    name: 'Scarbor Siu',
    link: 'https://unsplash.com/@kameeru322813',
    imageContent: 'Guangzhou Chow Tai Fook Finance Centre #3',
    imageLink: getImagePath('guangzhou-chow-tai-fook-finance-centre', '3')
  },
  
  //* TWIN TOWERS (OG WTC)
  {
    name: 'Jeffmock',
    link: 'https://commons.wikimedia.org/wiki/File:World_Trade_Center,_New_York_City_-_aerial_view_(March_2001)_(modified_version_with_desaturated_towers).jpg',
    imageContent: 'Twin Towers Thumbnail',
    imageLink: getImagePath('twin-towers', 'thumbnail')
  },
  {
    name: 'Tomas Martinez',
    link: 'https://unsplash.com/@tomasmartinez',
    imageContent: 'Twin Towers #1',
    imageLink: getImagePath('twin-towers', '1')
  },
  {
    name: 'Korab Collection, Library of Congress',
    link: 'https://www.loc.gov/pictures/collection/krb/',
    imageContent: 'Twin Towers #2',
    imageLink: getImagePath('twin-towers', '2')
  },
  {
    name: 'Korab Collection, Library of Congress',
    link: 'https://www.loc.gov/pictures/collection/krb/',
    imageContent: 'Twin Towers #3',
    imageLink: getImagePath('twin-towers', '3')
  },
  {
    name: 'Carol M. Highsmith Archive, Library of Congress',
    link: 'https://www.loc.gov/pictures/collection/highsm/',
    imageContent: 'Twin Towers #4',
    imageLink: getImagePath('twin-towers', '4')
  },
  {
    name: 'Korab Collection, Library of Congress',
    link: 'https://www.loc.gov/pictures/collection/krb/',
    imageContent: 'Twin Towers #5',
    imageLink: getImagePath('twin-towers', '5')
  },
  
  //* 432 PARK AVENUE
  {
    name: 'Miikka A.',
    link: 'https://unsplash.com/@miikkair',
    imageContent: '432 Park Avenue Thumbnail (cropped)',
    imageLink: getImagePath('432-park-avenue', 'thumbnail')
  },
  {
    name: 'YJ CHOI',
    link: 'https://unsplash.com/@choibetter',
    imageContent: '432 Park Avenue #1',
    imageLink: getImagePath('432-park-avenue', '1')
  },
  {
    name: 'Vinicius Eloy Bailo',
    link: 'https://unsplash.com/@eloyv',
    imageContent: '432 Park Avenue #2',
    imageLink: getImagePath('432-park-avenue', '2')
  },
  {
    name: 'Ness P. Colmart',
    link: 'https://unsplash.com/@hydrenol',
    imageContent: '432 Park Avenue #3',
    imageLink: getImagePath('432-park-avenue', '3')
  },
  {
    name: 'Oleksandr Baiev',
    link: 'https://unsplash.com/@bayevs',
    imageContent: '432 Park Avenue #4',
    imageLink: getImagePath('432-park-avenue', '4')
  },
  
  //* WILLIS TOWER
  {
    name: 'Mike Balbus',
    link: 'https://unsplash.com/@balbusmichael',
    imageContent: 'Willis Tower Thumbnail',
    imageLink: getImagePath('willis-tower', 'thumbnail')
  },
  {
    name: 'Guido Coppa',
    link: 'https://unsplash.com/@gcoppa',
    imageContent: 'Willis Tower #1',
    imageLink: getImagePath('willis-tower', '1')
  },
  {
    name: 'Cody Engel',
    link: 'https://unsplash.com/@codyengel',
    imageContent: 'Willis Tower #2',
    imageLink: getImagePath('willis-tower', '2')
  },
  {
    name: 'Hide Obara',
    link: 'https://unsplash.com/@hideobara',
    imageContent: 'Willis Tower #3',
    imageLink: getImagePath('willis-tower', '3')
  },
  {
    name: 'Gael D',
    link: 'https://unsplash.com/@gael_d',
    imageContent: 'Willis Tower #4',
    imageLink: getImagePath('willis-tower', '4')
  }
];

const getToolPath = (tool: string): string => {
  return `/images/software-tools/${tool}.svg`
};

export const logoCredit: LogoCredit[] = [
  {
    tool: 'C',
    toolLink: getToolPath('c'),
    source: 'Wikipedia',
    sourceLink: 'https://en.wikipedia.org/wiki/File:C_Logo.png'
  },
  {
    tool: 'C++',
    toolLink: getToolPath('cpp'),
    source: 'Wikipedia',
    sourceLink: 'https://en.m.wikipedia.org/wiki/File:ISO_C%2B%2B_Logo.svg'
  },
  {
    tool: 'C#',
    toolLink: getToolPath('csharp'),
    source: 'Wikipedia',
    sourceLink: 'https://commons.wikimedia.org/wiki/File:Logo_C_sharp.svg'
  },
  {
    tool: 'HolyC',
    toolLink: getToolPath('holyc'),
    source: 'Wikipedia',
    sourceLink: 'https://commons.wikimedia.org/wiki/File:HolyC_Logo.svg'
  },
  {
    tool: 'Objective-C',
    toolLink: getToolPath('objectivec'),
    source: 'iconduck.com',
    sourceLink: 'https://iconduck.com/icons/159811/sdk-objectivec'
  },
  {
    tool: 'Swift',
    toolLink: getToolPath('swift'),
    source: 'freebiesupply.com',
    sourceLink: 'https://freebiesupply.com/logos/swift-logo/'
  },
  {
    tool: 'JavaScript',
    toolLink: getToolPath('javascript'),
    source: 'Wikipedia',
    sourceLink: 'https://en.wikipedia.org/wiki/File:JavaScript-logo.png'
  },
  {
    tool: 'TypeScript',
    toolLink: getToolPath('typescript'),
    source: 'typescriptlang.org',
    sourceLink: 'https://www.typescriptlang.org/branding/'
  },
  {
    tool: 'Ruby',
    toolLink: getToolPath('ruby'),
    source: 'ruby-lang.org',
    sourceLink: 'https://www.ruby-lang.org/en/about/logo/'
  },
  {
    tool: 'Java',
    toolLink: getToolPath('java'),
    source: 'iconduck.com',
    sourceLink: 'https://iconduck.com/icons/13084/java-original'
  },
  {
    tool: 'Go',
    toolLink: getToolPath('go'),
    source: 'go.dev',
    sourceLink: 'https://go.dev/blog/go-brand'
  },
  {
    tool: 'Rust',
    toolLink: getToolPath('csharp'),
    source: 'github.com/rust-lang',
    sourceLink: 'https://github.com/rust-lang/rust-artwork'
  },
  {
    tool: 'Kotlin',
    toolLink: getToolPath('kotlin'),
    source: 'kotlinlang.org',
    sourceLink: 'https://kotlinlang.org/docs/kotlin-brand-assets.html'
  },
  {
    tool: 'Perl',
    toolLink: getToolPath('perl'),
    source: 'https://github.com/metacpan/perl-assets',
    sourceLink: 'https://github.com/metacpan/perl-assets/tree/main/blessed/src'
  },
  {
    tool: 'Lua',
    toolLink: getToolPath('lua'),
    source: 'Wikipedia',
    sourceLink: 'https://commons.wikimedia.org/wiki/File:Lua-Logo.svg'
  },
  {
    tool: 'R',
    toolLink: getToolPath('r'),
    source: 'r-project.org',
    sourceLink: 'https://www.r-project.org/logo/'
  },
  {
    tool: 'Dart',
    toolLink: getToolPath('dart'),
    source: 'dart.dev',
    sourceLink: 'https://dart.dev/brand'
  },
  {
    tool: 'Scala',
    toolLink: getToolPath('scala'),
    source: 'Wikipedia',
    sourceLink: 'https://en.m.wikipedia.org/wiki/File:Scala-full-color.svg'
  },
  {
    tool: 'Pascal',
    toolLink: getToolPath('pascal'),
    source: `I've made this one in Illustrator`,
    sourceLink: ''
  },
  {
    tool: 'F#',
    toolLink: getToolPath('fsharp'),
    source: 'foundation.fsharp.org',
    sourceLink: 'https://foundation.fsharp.org/logo'
  },
  {
    tool: 'Zig',
    toolLink: getToolPath('zig'),
    source: 'https://github.com/ziglang',
    sourceLink: 'https://github.com/ziglang/logo?tab=readme-ov-file#logomark'
  },
  {
    tool: 'PHP',
    toolLink: getToolPath('php'),
    source: 'www.php.net',
    sourceLink: 'https://www.php.net/download-logos.php'
  },
  {
    tool: 'Julia',
    toolLink: getToolPath('julia'),
    source: 'https://github.com/JuliaLang/julia-logo-graphics',
    sourceLink: 'https://github.com/JuliaLang/julia-logo-graphics'
  },
  {
    tool: 'Delphi',
    toolLink: getToolPath('delphi'),
    source: 'iconduck.com',
    sourceLink: 'https://iconduck.com/icons/94208/delphi'
  },
  {
    tool: 'Simula',
    toolLink: getToolPath('simula'),
    source: 'Wikipedia',
    sourceLink: 'https://commons.wikimedia.org/wiki/File:Simula_-_logo.svg'
  },
  {
    tool: 'Node.js',
    toolLink: getToolPath('nodejs'),
    source: 'nodejs.org',
    sourceLink: 'https://nodejs.org/en/about/branding'
  },
  {
    tool: 'Deno',
    toolLink: getToolPath('deno'),
    source: 'deno.com',
    sourceLink: 'https://deno.com/brand'
  },
  {
    tool: 'Bun',
    toolLink: getToolPath('bun'),
    source: 'bun.sh',
    sourceLink: 'https://bun.sh/press-kit'
  },
  {
    tool: '.NET',
    toolLink: getToolPath('dotnet'),
    source: 'github.com/dotnet',
    sourceLink: 'https://github.com/dotnet/brand/tree/main?tab=readme-ov-file'
  },
  {
    tool: 'Express.js',
    toolLink: getToolPath('express'),
    source: 'expressjs.com',
    sourceLink: 'https://expressjs.com/en/resources/community.html'
  },
  {
    tool: 'Spring Boot',
    toolLink: getToolPath('spring'),
    source: 'Wikipedia',
    sourceLink: 'https://en.m.wikipedia.org/wiki/File:Spring_Boot.svg'
  },
  {
    tool: 'Ruby on Rails',
    toolLink: getToolPath('rails'),
    source: 'Wikipedia',
    sourceLink: 'https://en.m.wikipedia.org/wiki/File:Ruby_On_Rails_Logo.svg'
  },
  {
    tool: 'Gin',
    toolLink: getToolPath('gin'),
    source: 'github.com/gin-gonic',
    sourceLink: 'https://github.com/gin-gonic/logo'
  },
  {
    tool: 'Angular',
    toolLink: getToolPath('angular'),
    source: 'angular.dev',
    sourceLink: 'https://angular.dev/press-kit'
  },
  {
    tool: 'Next.js',
    toolLink: getToolPath('nextjs'),
    source: 'vercel.com',
    sourceLink: 'https://vercel.com/geist/brands#next-js'

  },
  {
    tool: 'Vue',
    toolLink: getToolPath('vue'),
    source: 'Wikipedia',
    sourceLink: 'https://en.m.wikipedia.org/wiki/File:Vue.js_Logo_2.svg'
  },
  {
    tool: 'Flutter',
    toolLink: getToolPath('flutter'),
    source: 'flutter.dev',
    sourceLink: 'https://flutter.dev/brand'
  },
  {
    tool: 'Electron',
    toolLink: getToolPath('electron'),
    source: 'Wikipedia',
    sourceLink: 'https://en.m.wikipedia.org/wiki/File:Electron_Software_Framework_Logo.svg'
  },
  {
    tool: 'Laravel',
    toolLink: getToolPath('laravel'),
    source: 'Wikipedia',
    sourceLink: 'https://commons.wikimedia.org/wiki/File:Logo.min.svg'
  },
  {
    tool: 'Preact',
    toolLink: getToolPath('preact'),
    source: 'preactjs.com',
    sourceLink: 'https://preactjs.com/branding'
  },
  {
    tool: 'React',
    toolLink: getToolPath('react'),
    source: 'Wikipedia',
    sourceLink: 'https://en.m.wikipedia.org/wiki/File:React-icon.svg'
  },
  {
    tool: 'React Native',
    toolLink: getToolPath('react'),
    source: 'Wikipedia',
    sourceLink: 'https://en.m.wikipedia.org/wiki/File:React-icon.svg'
  },
  {
    tool: 'Lodash',
    toolLink: getToolPath('lodash'),
    source: 'iconduck.com',
    sourceLink: 'https://iconduck.com/icons/27617/lodash'
  },
  {
    tool: 'Redux',
    toolLink: getToolPath('redux'),
    source: 'github.com/reduxjs',
    sourceLink: 'https://github.com/reduxjs/redux/tree/master/logo'
  },
  {
    tool: 'RxJS',
    toolLink: getToolPath('rxjs'),
    source: 'iconduck.com',
    sourceLink: 'https://iconduck.com/icons/27867/reactivex-rxjs'
  },
  {
    tool: 'SQL',
    toolLink: getToolPath('sql'),
    source: 'iconduck.com',
    sourceLink: 'https://iconduck.com/icons/15093/office-database'
  },
  {
    tool: 'GraphQL',
    toolLink: getToolPath('graphql'),
    source: 'graphql.org',
    sourceLink: 'https://graphql.org/brand/'
  },
  {
    tool: 'MySQL',
    toolLink: getToolPath('mysql'),
    source: 'mysql.com',
    sourceLink: 'https://www.mysql.com/about/legal/logos.html'
  },
  {
    tool: 'PostgreSQL',
    toolLink: getToolPath('postgresql'),
    source: 'postgresql.org',
    sourceLink: 'https://www.postgresql.org/about/press/presskit17/#graphics'
  },
  {
    tool: 'SQLite',
    toolLink: getToolPath('sqlite'),
    source: 'Wikipedia',
    sourceLink: 'https://commons.wikimedia.org/wiki/File:SQLite370.svg'
  }
];