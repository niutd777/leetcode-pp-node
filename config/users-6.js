function join(s) {
  return s
    .split(/\n/)
    .filter(Boolean)
    .map((v) => String.prototype.trim.call(v))
    .map((v) => String.prototype.toLocaleLowerCase.call(v));
}

exports.users = join(`
azl397985856
Alice52
testeducative
GaoMinghao
yuetong3yu
now915
iambigchen
anyingbinglong
Tiquiero
Richard-LYF
linrAx
hoye1113
noperoc
Alexno1no2
guoling0019
devosend
hoye1113
wenlong201807
zhouxsss
Size-of
charlestang
shimangdian
onlyellow
yan0327
TimmmYang
linyang4
StoneHIT
niuyibo0619
BeBraveBeCurious
wujunhong-max
stackvoid
HZGwebgit
utopiosphere-lee
demo410
cureforu
declan92
kite-fly6618
1224902946@qq.com
kbfx1234
AwesomeLittle76
SHAO-Nuoya
  fredxxj
jiayukang
moguqicha
wangzichengTech
LannyX
ZsjKoing
eliassama
zzzpppy
neal0408
offrande
a1exlism
无
HZGwebgit
BpointA
biscuit279
763037075@qq.com
shazi4399
SmileJohnson
MemoryHeroLi
Haoxiongke
cqs2816537944@126.com
SunStrongChina
blankpathfind
blankpathfind
z1ggy-o
coder123xt
aladingzl
awarmdevil
chengyufeng6
Riuusee
xjhcassy
ZacheryCao
honeymeng-hub
 gaoyi86
vuesch
ZhangNN2018
weijie-he
biaohuazhou
baddate
chakochako
coder123xt
Tomtao626
Hacker90
SunStrongChina
alongchong
zzzpppy
15755024085@163.com
HZGwebgit
vuesch
cy-sues
luo-FrontEnd
Hacker90
SunStrongChina
alongchong
zzzpppy
15755024085@163.com
HZGwebgit
vuesch
cy-sues
devil-lin
Mrwu012
kkwu314
tangjy149
zuiaiqun
oliver-mxx
zsjkoing
Hacker90
SeventeenCui
gaoyi86
dudongli
kmshui
LuoXingbiao
pwqgithub-cqu
zyziyun
luojiamun
ray-hr
rzhao010
15691894985
CoreJa
Yachen-Guo
gentleman-goodman
jianhongyi
Davont
Bochengwan
Leonalhq
DoubleW2w
kkstudycoding
Yrtryannn
Yrtryannn
lcncufe@gmail.com
JuliaShiweiHuang
Brent-Liu
liuzekuan
RMadridXDH
Arya-03
ZZRebas
de0002ou
qixuan-code
AlduinLeung
wenjialu
zwmanman
chen445
CodeWithIris
Frederickfan
YohannJin
mozro0327
menglin-l
zhangyalei1026
BlessingLR
SenDSproject
KevinWorkSpace
Yutong-Dai
hwpanda
judyzhou95
yugaoh
didiyang4759
HouHao1998
Extra-man
BryanMiracle
a244629128
L-sui
shamworld
HelloXKW
EtruriaLegend
KennethAlgol
zhouzhouseela
MissNanLan
luhnn120
codingPitaya
cestlennie@outlook.com
Serena9
laofuwf
xuxiaofei0717@163.com
flower-f
SmileJohnson
FontEndArt
herbertpan
pf135145
AlvinZhouOops
zjp1483469269
XinnXuu
Moin-Jer
Husky-Gong
yisa2
Zhangzz2015
Myleswork
yxf2020
bigboom666
wx18390999871
jianhongyi
BryanMiracle
YohannJin
  `);
