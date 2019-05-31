var findSubstring = function(s, words) {
  if (words.length === 0 || words.some(w => words.indexOf(w) === -1)) return []
  let sl = words[0].length,
    wl = words.length * sl
  for (i = 0; i < s.length - wl; i++) {}
}
console.log(
  findSubstring(
    'ttqupktjvqeeylzkyirjnnjuhyrmrhwkaoepyzavshbquaasltdyimtpmmddtzotnsknsnkkumcooeizxmyfyrwlfbqyaetpzdetsodmahcpllqizopzhnmmodkqhdfijjbbxgqansryfhiewzgfmsscvcsfizntkpukvkkjfbjmkutitzoirgmpkfuughnrykbuwnfbqqqckjlgizqbhcqtjkosudlunookbvntodvymggwhyaodqkodygzbrtpfkbifodtszughcdpdffgvpwapdzrwtiefjomxsirrcyygdpjixrfmogctfvpafvfqksncchtgftmklysipxudfyynvoncjvsvpixrpsxumlexjyfbxbgdcfqzvfcgcuctczmtsjngxtdgtkjrnqwrxorsvvyaratwcgpurfaoyfxurgneylyvzrpwmowdqqzsyropwqewvbqojfvkqtfrkxowlmbdcdycumssdwoazhpkmkufdcwpzmnmzopdtngpcyhfwyfxhuhvecajexyfjlrkcioxywnauwfsumpbhwxnazzgwzlincurnioleblaysssejwngvdgucntdadqdxhqgwdmxonxghsmrqazldhfhuakvdbabksjgvvglkdtuxhlnhkymtgtogglmhnnrhwaetgrelkyjrlwbxxnqfjgnptzygmrpkrtezkklwiwqvursrgkyrrmgklgtaykmpgqpsacpkyhfsazmgkkadygnmnioltaczrtrtvigvpnqrncazoacpirbvapivpnwigpeeykzpxphmtjlkjnzrhaphrxeimartpxxphyheoqtjzetiuszbuokloowaqnvhkuzttgzjwssxxmftggubxeoluknkzjtldsgyygjwyctxqaqwhmzeqqrmcewepsrvkyvjgfhehbezbwxkjxqbphoromxfepappwavdhzkkflociynhpowycqmrnsveumtsmovwqhgxsuzdvmkkdjihzxyoruvlioevfbtvjzsdwugritblcltdkrtbnonydtvkwofhnzljvtceodrqrktbendtdstinosjczrsbedwzgcolugcgagmpliudbdqqvbuxumyyquawxqhtwmzwsondwiizlapibmfyyfyoaymzouulivjajzfhhnhunyeqkmojrnztnmuciopqkyqtxxbgkkczihrttiemxdgkpaoxpdnzefudcxkohmpsvjlqrpdoujykjpjaszbygycjvozfarxyakorbrhvchhowtorsqpyotjlhlskcricbwveqecsllgiexbwpsxfmgqttldvcnzgmwkcaowmafwecxdrpcwdkoxezczeqbkexwiyleknlgtnfwgwaealtzpuboytrkxphfnumxhxfanmztizykktjbpnsqgjagyhnldzkkzpnmdohmpfwcaidqvvidhilfszrvadibvxnynvkccjgftmxqhftqnhwfgpdislmnkzmxwybbjigcudsdkouxvqfdhinzvzphbdezdfanpirjnmnxcjxxbccimpjjraqsdwrhbuwtencsbrrdaocdqenewxnpzfhdbamfwkybxatbumewbjatnnylmlamrjrumfzkpxloagputwqufsnuiliwzkkswbmiimszlgolmfhhdabisrfcenzfzjxvnmfxayxlgnzssgayidibwnfbceicqizfufcwfzjlmidhrffzlpchdikhotlgbllxsotxncicnnletsdehinmsyugthnuuyrmomjeoridfthannguvvhntdvomkkhjbtzpfdgyljfgrftgnqbjzqecltqwdxhhtgwymcyzoegfjblxrogqekurflpjkwqdfodttcuhgamrezqxpyovlkoqvezgcrljgpcztxizzwsfvjdmhthsdvlbbmjeeunmjsnervdsryyohbaqwjlzgwaiijmogbcrtpwmmbffzdtggvzcgkbngexqplfvmhpizlulmztmeoukmtmsdohlugclrjhgsyorjkfvmajqogbazntfdcsxjwlcfuiasytbjayvaklpqmprckwfppfynqctklvcjofupfpppbgfpwzrivzxmexawavglqkwgprxwgnmjttbrssaqrxexvetvbbitleacvxzcmnnigozbjzrazvauctrdxzzkdbnzyodndqvjhwmqydsxbstdokilljvqkkrjauydntpwpbmnhemixfnnrxyehtvrgmcgjamyvbulegalkpvjwiwqiwupsrgyglgplsphtjuarwldnhnkrlcziwqcqzawkinvbcewnawezkhmtwwkkamuxcwpbylngylhcpgpsevrocfhbeuleghbkdsobdbjdmrhezwydtrswwbzavkfdriqwbezehikwbrcaqagjrahnbgozsvelduheaglipveqogteizobzxoceebwbgifcrjdyunprrhgzamjzckaaadehgciomnrgzwevjvnccvbdhkekufkwkqdqumhhzynawtwfojhsgkxnucxqjhotzsluesdfsqgolcvbncttmriivgagppbphmjnhmsbeyqrclsrqnkcgvnbbnhqeihlxsygethktxbwlvnbjafpvstyicqmnyykqyqxrxhlxljigylpaqhxlavtemfrkfbcgtzzthmqsvaywlqwdxuozpjddrvpwysesrelasduqdvmqlivkemjwvozmjrlijrcavpdquxgxsspdckphyyfungiyxvignkjkboavlgugalldybmwzrsozbnxyvfniqyleahsjdyjpjmnkyjmrcarfpqfnxtvotgutpmetmoiwcxidgwwkxnpofvbdqwtjfnewcjpozzmbwxgftdpsshhaciduhwdmljinuaetbqxanffjiubddidfrgbyeemrqwfkyjeabdcrihatdbwhmzodhqdnwpemljzmudmyiqpqxpjcsflegajnsmaqdhfrsednjrlrhchgttinaushwdwqszgvgnmyrrnaiyrrcbxvwgjwcdfagcqybywjmkhfcvgkvzcacbvyjgxljcnsefqheoqszaxbvfnshrsjtqkcwhqgjdaqjsxphojgoihlowfxoyihqslmbbunhudqnahuqqcgylrohxlxxweposbstyfasishkbdbrfhsqbiaauxzqeogwrarpfuipmpaovdhambtnkvpguoyyeewwhqlmkvcyneoihyivzdjjyarvppttwsrdidpuytslzhtiheegjpskpjfgzacxstacwrwxnrkmagvhkzpvohffrkmslopfhpigigfvzpibvdiheadshixavlsgzhljyvrhewcflmhhprotrtnzcnbxyufadsjcqalwynbjaksrcjnvccwgrydssksvddztfkrdasocdhthqiculzbezgwrroowtoraaifaaucfdymvirpvsqarzwiqnymiodjpnorniwvnuhieayasqajpythnstwgyfxnvpdglythhclicnaspmkofrbxnxgnefbaueghcbqldetfrwahikxnbanqyveeafgxloepqxatbwbssbbcnapobehzzlfcsmzdadsqaumdqnykozmbaerbiackljmfvnkyseotzcyrpwcfyoiyscbdcfpqodxmqikioadndchsyjawziwsmzxpemhvrehhmrpdrtsuxzpxiruizscmubdapkvgoendvegpzylwacuitqstkwhexmfmwcumhjpeoxtnyfmyjgidwdygzfnzrunpwibfrtkhsfvqkjowpzzncxvbeiaxcombypgriszdywtkfkgujfjnceqgnrfrhruhjbyttxwrtqcaciunqdaskqbxjgqsalzjoyehxbbttftvpqifviafadeklxclicwwcbfbeiuxpquficmdmolmtryfobswfrujsckykhvaxphftvkfkvtdnskbvdaauujowvmjcjlzasgtnrazmvfbnrfkufkqbvgarsjtduvdobyduyfhumkjdpuawgqycxavrjqxflavpzyjzdsvpffvubvrhlrjkrgecxbjkdebcenekfzbmgwhhrapdtanmhrqguzqyfuclhgvoixbotkylmpqfrftyzjgtkzrrtwcacaqmxrdsbbfnsxujdnkeyqziptzkpemtedgdulxyofngciphxznwqnghiisxoessjaxelwczdrfgzvpzufxmsdwclozzurtesskdrofufkchhuiezfqtimvwcuxzntfhlrnefszmebvmvdsuiiprxkpbemcufhbtaozfiyuncpbxttubdjuawlecygwfqaaqqayzasmchpcciygljcofosioagvqgyjxyhwabkdkzhnjfvuqxiwlcgzdmvvvtgutpstqcybdfqomliditbuvhvavqyslemeueamiapngfbuskzbfaxcjudhldzyjmfdqfsbfhonpqihchkhkjjteoarrapbouggbahhiwuzoegsotzycktizwzswrvmlesneawoysnozwgnpfntrgescdnawimiohxvhtlhnzvmxdzokohbxnubrhcnrqxizwdiropfpmrmptazhkdexxiqgkgzcfjccmmtdcysqshgljhutkbtjjjrvrtzxcdbpquuuvmknvsafawymztykfphwihvnmwectywomjdibfnddnsfhqpohxkseifqgjvzhtpvcudgbslhgdmptbdbyptezaxgjshsnxnqtryvjjcrnoiirnlqdewcgvkppshdpvvkotfzcjrrzbarpljushwydjosbxvsuqcijkiovbfvcfottznlgmljvbcwzxqvouezeopcpvxtcnnvmaisoucjvehwdxstsyvymkadfzwiolfaoovcixofdvcivwcpuxpghqjprhzgteihsdlcczifvmosisjerymaqvpieoqxtygncsqeramomcgwupanqmngjfontgnoftejlunfuzvidceztgmlucsfhiscphrwbvforsvnurvzvzzohlabnugucaztiqpjnuzgpvtlmokhpjxwvzxkvfhyfgrnyjyndatsvodjcqstzrpwtohotqmaygqwpoluqgnluswyiqtkiigbwpprhetfmjddaqxqwmeshasrrlbbvietzvkhbeonpsqpioghckzjmubfhcgdmmwoijxjplxedpuofavimwtasugazodnbbblkyuzktepjafqccyqbsqtoyvnnadqcebmfvorruiawoqyqrotlgnbfirujuknynbfkrwblhdhvuhnnxhaewbjgsdrmpencismzrqlytuvnekcbtcfreqywtrjiwymeqbfjrqhknearpcukfaclsahmrswpqlvjmbsdtcnigpzxsukzwmkootchmbxeounavgfrkuzqkbqexadvmnlciojurgbfdohaworgirzsupwrrbmfqxhznqvgzwncnucjiuqtnpnhgmyxnmcejjdzbafaxtckpftazltocgvisvhihjmsurrwrxwqqzahgwhhjcvmlswdnelwnzokqggkdeavfdelbmsmopabhxfwbssquhcmpkwupzpuetihhctysuzzrgwubqmvxpjoziiohxlntvucxpcpjcrckpynflifautbccqjbdywasbxhdpthixuxwhehqljkfkojcxmhvlhpmhwryrzgptflajusvfecpsnurbdomldaucsstrykmdvmorhlwnpogcizelosyrtuvlmrembqrxeiqntnbjbjnlitywmxqhrlugeyugqmfwuvkpinylwowghvdvuveniyvnyqtocylytxnekopicoolltjfonuzmqmkghbkhoialvgxlyhpmvdxpmefzyenosawzbggrojcmrbzpipddscueicfhivxbvwcyclprutfnuedevijnngtvibeqwcttyytcjivfdaszhxdcimqvsjqakvtizobxmubxexchxvgeulhcyzxqkotxjofkejjrfkokhttfoclknunntkggazdlpkvttemzpdlwwgdmirwyljlhwrpwssihcddykrzzukxssdgbwdbjomqmghjyztiewnciedhbphvhmckihlrxykkgrvetooxmbbvieejtleaxinhryzpylzecwlvkzuwdvrlbwuwjaxjlmqckrrjcspfoacaaxxduqqwmksymrhxdzcortztooaepffrccwwsmuhynfkgokknmaghbcvpcagjfzljvkdjgkhvrucfgovsqbbrdxii',
    [
      'wxnazzgwzlincurnioleblays',
      'txwrtqcaciunqdaskqbxjgqsa',
      'vdhzkkflociynhpowycqmrnsv',
      'sondwiizlapibmfyyfyoaymzo',
      'advmnlciojurgbfdohaworgir',
      'gbwpprhetfmjddaqxqwmeshas',
      'vmjcjlzasgtnrazmvfbnrfkuf',
      'zjxvnmfxayxlgnzssgayidibw',
      'xmsdwclozzurtesskdrofufkc',
      'gglmhnnrhwaetgrelkyjrlwbx',
      'galldybmwzrsozbnxyvfniqyl',
      'ofrbxnxgnefbaueghcbqldetf',
      'ltaczrtrtvigvpnqrncazoacp',
      'psacpkyhfsazmgkkadygnmnio',
      'mztmeoukmtmsdohlugclrjhgs',
      'gjdaqjsxphojgoihlowfxoyih',
      'gpcztxizzwsfvjdmhthsdvlbb',
      'bksjgvvglkdtuxhlnhkymtgto',
      'mewbjatnnylmlamrjrumfzkpx',
      'orsqpyotjlhlskcricbwveqec',
      'wsrdidpuytslzhtiheegjpskp',
      'zehikwbrcaqagjrahnbgozsve',
      'lzjoyehxbbttftvpqifviafad',
      'phyyfungiyxvignkjkboavlgu',
      'zdadsqaumdqnykozmbaerbiac',
      'zxyoruvlioevfbtvjzsdwugri',
      'xtvotgutpmetmoiwcxidgwwkx',
      'cpvxtcnnvmaisoucjvehwdxst',
      'jfgzacxstacwrwxnrkmagvhkz',
      'nubrhcnrqxizwdiropfpmrmpt',
      'rwahikxnbanqyveeafgxloepq',
      'zncxvbeiaxcombypgriszdywt',
      'ottznlgmljvbcwzxqvouezeop',
      'rqguzqyfuclhgvoixbotkylmp',
      'zdsvpffvubvrhlrjkrgecxbjk',
      'kqbvgarsjtduvdobyduyfhumk',
      'azhkdexxiqgkgzcfjccmmtdcy',
      'igcudsdkouxvqfdhinzvzphbd',
      'igylpaqhxlavtemfrkfbcgtzz',
      'ezdfanpirjnmnxcjxxbccimpj',
      'hwydjosbxvsuqcijkiovbfvcf',
      'lzgwaiijmogbcrtpwmmbffzdt',
      'fsqgolcvbncttmriivgagppbp',
      'hsqbiaauxzqeogwrarpfuipmp',
      'mxonxghsmrqazldhfhuakvdba',
      'legajnsmaqdhfrsednjrlrhch',
      'eebwbgifcrjdyunprrhgzamjz',
      'suxzpxiruizscmubdapkvgoen',
      'uvnekcbtcfreqywtrjiwymeqb',
      'pquuuvmknvsafawymztykfphw',
      'bhxfwbssquhcmpkwupzpuetih',
      'pshdpvvkotfzcjrrzbarpljus',
      'edgdulxyofngciphxznwqnghi',
      'pwzrivzxmexawavglqkwgprxw',
      'wimiohxvhtlhnzvmxdzokohbx',
      'sjcqalwynbjaksrcjnvccwgry',
      'qwfkyjeabdcrihatdbwhmzodh',
      'thmqsvaywlqwdxuozpjddrvpw',
      'jdpuawgqycxavrjqxflavpzyj',
      'xphftvkfkvtdnskbvdaauujow',
      'mwkcaowmafwecxdrpcwdkoxez',
      'rrlbbvietzvkhbeonpsqpiogh',
      'gyglgplsphtjuarwldnhnkrlc',
      'sqshgljhutkbtjjjrvrtzxcdb',
      'ihvnmwectywomjdibfnddnsfh',
      'dymvirpvsqarzwiqnymiodjpn',
      'evrocfhbeuleghbkdsobdbjdm',
      'sbbfnsxujdnkeyqziptzkpemt',
      'gmlucsfhiscphrwbvforsvnur',
      'nfbceicqizfufcwfzjlmidhrf',
      'tbqxanffjiubddidfrgbyeemr',
      'fszmebvmvdsuiiprxkpbemcuf',
      'ziwqcqzawkinvbcewnawezkhm',
      'dmolmtryfobswfrujsckykhva',
      'ewcflmhhprotrtnzcnbxyufad',
      'qcebmfvorruiawoqyqrotlgnb',
      'qdnwpemljzmudmyiqpqxpjcsf',
      'xhaewbjgsdrmpencismzrqlyt',
      'iyrrcbxvwgjwcdfagcqybywjm',
      'rhezwydtrswwbzavkfdriqwbe',
      'kljmfvnkyseotzcyrpwcfyoiy',
      'xtygncsqeramomcgwupanqmng',
      'uzoegsotzycktizwzswrvmles',
      'fzlpchdikhotlgbllxsotxnci',
      'rrwrxwqqzahgwhhjcvmlswdne',
      'xtckpftazltocgvisvhihjmsu',
      'aovdhambtnkvpguoyyeewwhql',
      'qenewxnpzfhdbamfwkybxatbu',
      'wqvursrgkyrrmgklgtaykmpgq',
      'ezbwxkjxqbphoromxfepappwa',
      'mzeqqrmcewepsrvkyvjgfhehb',
      'ulzbezgwrroowtoraaifaaucf',
      'rdxzzkdbnzyodndqvjhwmqyds',
      'qtryvjjcrnoiirnlqdewcgvkp',
      'slemeueamiapngfbuskzbfaxc',
      'ssejwngvdgucntdadqdxhqgwd',
      'lhgdmptbdbyptezaxgjshsnxn',
      'qheoqszaxbvfnshrsjtqkcwhq',
      'twwkkamuxcwpbylngylhcpgps',
      'fszrvadibvxnynvkccjgftmxq',
      'hftqnhwfgpdislmnkzmxwybbj',
      'iimszlgolmfhhdabisrfcenzf',
      'mztizykktjbpnsqgjagyhnldz',
      'eacvxzcmnnigozbjzrazvauct',
      'hkhkjjteoarrapbouggbahhiw',
      'uknkzjtldsgyygjwyctxqaqwh',
      'lduheaglipveqogteizobzxoc',
      'ggvzcgkbngexqplfvmhpizlul',
      'omjeoridfthannguvvhntdvom',
      'uulivjajzfhhnhunyeqkmojrn',
      'npofvbdqwtjfnewcjpozzmbwx',
      'altzpuboytrkxphfnumxhxfan',
      'scbdcfpqodxmqikioadndchsy',
      'jfontgnoftejlunfuzvidcezt',
      'pvohffrkmslopfhpigigfvzpi',
      'kkhjbtzpfdgyljfgrftgnqbjz',
      'sllgiexbwpsxfmgqttldvcnzg',
      'exyfjlrkcioxywnauwfsumpbh',
      'hkuzttgzjwssxxmftggubxeol',
      'gftdpsshhaciduhwdmljinuae',
      'uzktepjafqccyqbsqtoyvnnad',
      'fnzrunpwibfrtkhsfvqkjowpz',
      'gpvtlmokhpjxwvzxkvfhyfgrn',
      'hgamrezqxpyovlkoqvezgcrlj',
      'qslmbbunhudqnahuqqcgylroh',
      'otchmbxeounavgfrkuzqkbqex',
      'lcczifvmosisjerymaqvpieoq',
      'ljvtceodrqrktbendtdstinos',
      'jlkjnzrhaphrxeimartpxxphy',
      'judhldzyjmfdqfsbfhonpqihc',
      'lxrogqekurflpjkwqdfodttcu',
      'firujuknynbfkrwblhdhvuhnn',
      'cnnletsdehinmsyugthnuuyrm',
      'stqcybdfqomliditbuvhvavqy',
      'ckzjmubfhcgdmmwoijxjplxed',
      'ttiemxdgkpaoxpdnzefudcxko',
      'jiuqtnpnhgmyxnmcejjdzbafa',
      'eumtsmovwqhgxsuzdvmkkdjih',
      'irbvapivpnwigpeeykzpxphmt',
      'czeqbkexwiyleknlgtnfwgwae',
      'eklxclicwwcbfbeiuxpquficm',
      'xatbwbssbbcnapobehzzlfcsm',
      'ztnmuciopqkyqtxxbgkkczihr',
      'heoqtjzetiuszbuokloowaqnv',
      'vbdhkekufkwkqdqumhhzynawt',
      'fjrqhknearpcukfaclsahmrsw',
      'xlxxweposbstyfasishkbdbrf',
      'qfrftyzjgtkzrrtwcacaqmxrd',
      'ljcofosioagvqgyjxyhwabkdk',
      'ecygwfqaaqqayzasmchpcciyg',
      'lwnzokqggkdeavfdelbmsmopa',
      'vzvzzohlabnugucaztiqpjnuz',
      'hmpsvjlqrpdoujykjpjaszbyg',
      'qecltqwdxhhtgwymcyzoegfjb',
      'kkzpnmdohmpfwcaidqvvidhil',
      'yorjkfvmajqogbazntfdcsxjw',
      'ozmjrlijrcavpdquxgxsspdck',
      'pbmnhemixfnnrxyehtvrgmcgj',
      'hmjnhmsbeyqrclsrqnkcgvnbb',
      'gnmjttbrssaqrxexvetvbbitl',
      'mjeeunmjsnervdsryyohbaqwj',
      'dbdqqvbuxumyyquawxqhtwmzw',
      'pqlvjmbsdtcnigpzxsukzwmko',
      'khfcvgkvzcacbvyjgxljcnsef',
      'gttinaushwdwqszgvgnmyrrna',
      'jawziwsmzxpemhvrehhmrpdrt',
      'jraqsdwrhbuwtencsbrrdaocd',
      'wcumhjpeoxtnyfmyjgidwdygz',
      'zsupwrrbmfqxhznqvgzwncnuc',
      'isxoessjaxelwczdrfgzvpzuf',
      'mkvcyneoihyivzdjjyarvpptt',
      'tblcltdkrtbnonydtvkwofhnz',
      'bvdiheadshixavlsgzhljyvrh',
      'wgyfxnvpdglythhclicnaspmk',
      'jczrsbedwzgcolugcgagmpliu',
      'hbtaozfiyuncpbxttubdjuawl',
      'ysesrelasduqdvmqlivkemjwv',
      'dvegpzylwacuitqstkwhexmfm',
      'qpohxkseifqgjvzhtpvcudgbs',
      'xnqfjgnptzygmrpkrtezkklwi',
      'loagputwqufsnuiliwzkkswbm',
      'qmaygqwpoluqgnluswyiqtkii',
      'kfkgujfjnceqgnrfrhruhjbyt',
      'hhuiezfqtimvwcuxzntfhlrne',
      'fppfynqctklvcjofupfpppbgf',
      'zhnjfvuqxiwlcgzdmvvvtgutp',
      'wfojhsgkxnucxqjhotzsluesd',
      'debcenekfzbmgwhhrapdtanmh',
      'yjyndatsvodjcqstzrpwtohot',
      'eahsjdyjpjmnkyjmrcarfpqfn',
      'neawoysnozwgnpfntrgescdna',
      'amyvbulegalkpvjwiwqiwupsr',
      'orniwvnuhieayasqajpythnst',
      'ckaaadehgciomnrgzwevjvncc',
      'syvymkadfzwiolfaoovcixofd',
      'dssksvddztfkrdasocdhthqic',
      'vcivwcpuxpghqjprhzgteihsd',
      'lcfuiasytbjayvaklpqmprckw',
      'ycjvozfarxyakorbrhvchhowt',
      'fpvstyicqmnyykqyqxrxhlxlj',
      'puofavimwtasugazodnbbblky',
      'nhqeihlxsygethktxbwlvnbja',
      'xbstdokilljvqkkrjauydntpw'
    ]
  )
)