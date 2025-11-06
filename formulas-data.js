const formulas = {
    1: {
        title: "1-sinf Matematika",
        sections: [
            {
                name: "Qo'shish",
                formulas: [
                    { name: "Ikki sonni qo'shish", formula: "\\(a + b = c\\)", description: "Ikki sonni qo'shish natijasi yig'indi deyiladi", example: "5 + 3 = 8" },
                    { name: "Kommutativlik", formula: "\\(a + b = b + a\\)", description: "Qo'shiluvchilarning o'rnini almashtirish mumkin", example: "2 + 7 = 7 + 2 = 9" },
                    { name: "Nolga qo'shish", formula: "\\(a + 0 = a\\)", description: "Har qanday songa nolni qo'shsak o'sha son chiqadi", example: "9 + 0 = 9" },
                    { name: "Uchta sonni qo'shish", formula: "\\(a + b + c\\)", description: "Bir nechta sonni ketma-ket qo'shish", example: "2 + 3 + 4 = 9" },
                    { name: "Assosiativlik", formula: "\\((a + b) + c = a + (b + c)\\)", description: "Qo'shishda qavs qo'yish tartibini o'zgartirish mumkin", example: "(3 + 2) + 5 = 3 + (2 + 5) = 10" }
                ]
            },
            {
                name: "Ayirish",
                formulas: [
                    { name: "Ayirish", formula: "\\(a - b = c\\)", description: "Katta sondan kichik sonni ayirish", example: "8 - 3 = 5" },
                    { name: "O'zidan ayirish", formula: "\\(a - a = 0\\)", description: "Har qanday sondan o'zini ayirsak nol chiqadi", example: "7 - 7 = 0" },
                    { name: "Nolni ayirish", formula: "\\(a - 0 = a\\)", description: "Har qanday sondan nolni ayirsak o'sha son chiqadi", example: "6 - 0 = 6" },
                    { name: "Tekshirish", formula: "\\(a - b = c \\Rightarrow c + b = a\\)", description: "Ayirishni qo'shish orqali tekshirish", example: "9 - 4 = 5, chunki 5 + 4 = 9" },
                    { name: "Kamayuvchi", formula: "\\(a - b\\) da \\(a\\) - kamayuvchi", description: "Ayirishdagi birinchi son kamayuvchi deyiladi", example: "10 - 3 da 10 kamayuvchi" }
                ]
            },
            {
                name: "Sonlarni taqqoslash",
                formulas: [
                    { name: "Katta", formula: "\\(a > b\\)", description: "a soni b sonidan katta", example: "7 > 5" },
                    { name: "Kichik", formula: "\\(a < b\\)", description: "a soni b sonidan kichik", example: "3 < 6" },
                    { name: "Teng", formula: "\\(a = b\\)", description: "a va b sonlari teng", example: "5 = 5" },
                    { name: "Eng katta", formula: "\\(max(a, b, c)\\)", description: "Sonlar ichidan eng kattasini topish", example: "max(3, 7, 5) = 7" },
                    { name: "Eng kichik", formula: "\\(min(a, b, c)\\)", description: "Sonlar ichidan eng kichigini topish", example: "min(8, 2, 5) = 2" }
                ]
            },
            {
                name: "Sonlar ketma-ketligi",
                formulas: [
                    { name: "Keyingi son", formula: "\\(a + 1\\)", description: "Berilgan sondan keyingi son", example: "5 dan keyin 6" },
                    { name: "Oldingi son", formula: "\\(a - 1\\)", description: "Berilgan sondan oldingi son", example: "8 dan oldin 7" },
                    { name: "Oraliq", formula: "\\(a, a+1, a+2, ...\\)", description: "Ketma-ket sonlar", example: "5, 6, 7, 8, 9" },
                    { name: "Juft sonlar", formula: "\\(2, 4, 6, 8, 10, ...\\)", description: "2 ga qoldiqsiz bo'linadigan sonlar", example: "2, 4, 6, 8" },
                    { name: "Toq sonlar", formula: "\\(1, 3, 5, 7, 9, ...\\)", description: "2 ga qoldiq bilan bo'linadigan sonlar", example: "1, 3, 5, 7" }
                ]
            },
            {
                name: "Oddiy masalalar",
                formulas: [
                    { name: "Yig'indi topish", formula: "\\(a + b = ?\\)", description: "Ikki sonning yig'indisini topish", example: "Kitob 5 ta, daftar 3 ta. Jami 8 ta" },
                    { name: "Qolganini topish", formula: "\\(a - b = ?\\)", description: "Qolgan qismni topish", example: "10 ta olma bor edi, 4 tasini berdim. Qoldi 6 ta" },
                    { name: "Nechta ko'p", formula: "\\(a - b\\)", description: "Birinchi son ikkinchisidan qancha ko'p", example: "Ali 9 ta, Vali 5 ta. Ali 4 ta ko'p" },
                    { name: "Nechta kam", formula: "\\(b - a\\)", description: "Birinchi son ikkinchisidan qancha kam", example: "Men 3 ta, sen 7 ta. Men 4 ta kam" },
                    { name: "Hammasi bo'lib", formula: "\\(a + b + c\\)", description: "Barcha qismlarni qo'shish", example: "1-javonda 3, 2-javonda 4, 3-javonda 2. Jami 9 ta" }
                ]
            }
        ]
    },
    2: {
        title: "2-sinf Matematika",
        sections: [
            {
                name: "Ko'paytirish",
                formulas: [
                    { name: "Ko'paytirish", formula: "\\(a \\times b = c\\)", description: "Bir xil sonlarni qo'shishning qisqa usuli", example: "3 × 4 = 12" },
                    { name: "Kommutativlik", formula: "\\(a \\times b = b \\times a\\)", description: "Ko'paytuvchilar o'rnini almashtirish mumkin", example: "5 × 2 = 2 × 5 = 10" },
                    { name: "Birga ko'paytirish", formula: "\\(a \\times 1 = a\\)", description: "Har qanday sonni 1 ga ko'paytirsak o'sha son chiqadi", example: "7 × 1 = 7" },
                    { name: "Nolga ko'paytirish", formula: "\\(a \\times 0 = 0\\)", description: "Har qanday sonni 0 ga ko'paytirsak 0 chiqadi", example: "9 × 0 = 0" },
                    { name: "2 ga ko'paytirish", formula: "\\(a \\times 2 = a + a\\)", description: "2 ga ko'paytirish o'ziga qo'shishga teng", example: "6 × 2 = 6 + 6 = 12" },
                    { name: "Uchta sonni ko'paytirish", formula: "\\((a \\times b) \\times c = a \\times (b \\times c)\\)", description: "Ko'paytirishda qavs tartibini o'zgartirish mumkin", example: "(2 × 3) × 4 = 2 × (3 × 4) = 24" }
                ]
            },
            {
                name: "Ko'paytirish jadvali",
                formulas: [
                    { name: "2 ga ko'paytirish jadvali", formula: "\\(2 \\times n = 2n\\)", description: "2, 4, 6, 8, 10, 12, 14, 16, 18, 20", example: "2 × 5 = 10" },
                    { name: "3 ga ko'paytirish jadvali", formula: "\\(3 \\times n = 3n\\)", description: "3, 6, 9, 12, 15, 18, 21, 24, 27, 30", example: "3 × 4 = 12" },
                    { name: "4 ga ko'paytirish jadvali", formula: "\\(4 \\times n = 4n\\)", description: "4, 8, 12, 16, 20, 24, 28, 32, 36, 40", example: "4 × 7 = 28" },
                    { name: "5 ga ko'paytirish jadvali", formula: "\\(5 \\times n = 5n\\)", description: "5, 10, 15, 20, 25, 30, 35, 40, 45, 50", example: "5 × 6 = 30" },
                    { name: "10 ga ko'paytirish", formula: "\\(10 \\times n = n0\\)", description: "10 ga ko'paytirsak oxiriga 0 qo'shiladi", example: "10 × 8 = 80" }
                ]
            },
            {
                name: "O'lchov birliklari",
                formulas: [
                    { name: "Uzunlik: santimetr", formula: "\\(1 dm = 10 cm\\)", description: "1 detsimetr 10 santimetrga teng", example: "3 dm = 30 cm" },
                    { name: "Uzunlik: metr", formula: "\\(1 m = 100 cm\\)", description: "1 metr 100 santimetrga teng", example: "2 m = 200 cm" },
                    { name: "Uzunlik: metr va detsimetr", formula: "\\(1 m = 10 dm\\)", description: "1 metr 10 detsimetrga teng", example: "5 m = 50 dm" },
                    { name: "Vaqt: soat va daqiqa", formula: "\\(1 soat = 60 daq\\)", description: "1 soat 60 daqiqaga teng", example: "2 soat = 120 daqiqa" },
                    { name: "Massa: kilogramm", formula: "\\(1 kg = 1000 g\\)", description: "1 kilogramm 1000 grammga teng", example: "3 kg = 3000 g" }
                ]
            },
            {
                name: "Geometrik shakllar",
                formulas: [
                    { name: "To'rtburchak tomonlari", formula: "\\(4\\) ta tomon", description: "To'rtburchakda 4 ta tomon bor", example: "Kvadrat, to'g'ri to'rtburchak" },
                    { name: "Uchburchak tomonlari", formula: "\\(3\\) ta tomon", description: "Uchburchakda 3 ta tomon bor", example: "Har xil uchburchaklar" },
                    { name: "Kvadrat", formula: "\\(4\\) ta teng tomon", description: "Kvadratning barcha tomonlari teng", example: "5 cm × 5 cm kvadrat" },
                    { name: "Doira", formula: "\\(1\\) ta egri chiziq", description: "Doira yopiq egri chiziq", example: "Dumaloq shakl" },
                    { name: "Burchak", formula: "\\(2\\) ta nur", description: "Burchak ikki nurdan tashkil topgan", example: "To'g'ri burchak, o'tkir burchak" }
                ]
            },
            {
                name: "Masalalar",
                formulas: [
                    { name: "Bir xil qismlar yig'indisi", formula: "\\(a \\times n\\)", description: "Bir xil miqdorni bir necha marta olish", example: "Har bir qutida 5 ta qalam, 3 ta quti. 5 × 3 = 15" },
                    { name: "Teng bo'laklarga bo'lish", formula: "\\(a \\div b\\)", description: "Umumiy miqdorni teng qismlarga bo'lish", example: "12 ta olmani 3 ta bolaga. 12 ÷ 3 = 4" },
                    { name: "Ikki qadam masala", formula: "\\(a \\times b + c\\)", description: "Avval ko'paytirish, keyin qo'shish", example: "3 qutida 4 ta, yana 2 ta. 3 × 4 + 2 = 14" },
                    { name: "Qoldiq bilan", formula: "\\(a - b \\times c\\)", description: "Bir qismini ayirish", example: "20 ta shardan 3 ta 5 talik. 20 - 3 × 5 = 5 qoldi" },
                    { name: "Taqqoslash", formula: "\\(a \\times b > c\\)", description: "Ko'paytmani boshqa son bilan taqqoslash", example: "4 × 5 > 18" }
                ]
            }
        ]
    },
    3: {
        title: "3-sinf Matematika",
        sections: [
            {
                name: "Bo'lish",
                formulas: [
                    { name: "Bo'lish", formula: "\\(a \\div b = c\\)", description: "Sonni boshqa songa bo'lish", example: "15 ÷ 3 = 5" },
                    { name: "Bo'lish va ko'paytirish", formula: "\\(a \\div b = c \\Rightarrow c \\times b = a\\)", description: "Bo'lishni ko'paytirish orqali tekshirish", example: "20 ÷ 4 = 5, chunki 5 × 4 = 20" },
                    { name: "O'ziga bo'lish", formula: "\\(a \\div a = 1\\)", description: "Har qanday sonni o'ziga bo'lsak 1 chiqadi", example: "9 ÷ 9 = 1" },
                    { name: "Birga bo'lish", formula: "\\(a \\div 1 = a\\)", description: "Har qanday sonni 1 ga bo'lsak o'sha son chiqadi", example: "12 ÷ 1 = 12" },
                    { name: "Nolga bo'lish", formula: "\\(0 \\div a = 0\\)", description: "Nolni istalgan songa bo'lsak nol chiqadi", example: "0 ÷ 7 = 0" },
                    { name: "Qoldiqli bo'lish", formula: "\\(a = b \\times q + r\\)", description: "Qoldiqli bo'lish formulasi, r < b", example: "17 = 5 × 3 + 2" },
                    { name: "To'liq bo'linish", formula: "\\(a \\div b, \\quad r = 0\\)", description: "Qoldiqsiz bo'linish", example: "24 ÷ 6 = 4 (qoldiqsiz)" }
                ]
            },
            {
                name: "Ko'p xonali sonlar",
                formulas: [
                    { name: "Xonalar", formula: "\\(\\overline{abc} = 100a + 10b + c\\)", description: "Uch xonali sonning tuzilishi", example: "456 = 400 + 50 + 6" },
                    { name: "Yuzliklar xonasi", formula: "\\(a \\times 100\\)", description: "Yuzliklar xonasidagi raqam", example: "700 = 7 × 100" },
                    { name: "O'nliklar xonasi", formula: "\\(b \\times 10\\)", description: "O'nliklar xonasidagi raqam", example: "80 = 8 × 10" },
                    { name: "Birliklar xonasi", formula: "\\(c \\times 1\\)", description: "Birliklar xonasidagi raqam", example: "5 = 5 × 1" },
                    { name: "Yaxlitlash", formula: "\\(a \\approx b\\)", description: "Sonni yaqin songa yaxlitlash", example: "247 ≈ 250" }
                ]
            },
            {
                name: "Tenglamalar",
                formulas: [
                    { name: "Noma'lum qo'shiluvchi", formula: "\\(x + a = b \\Rightarrow x = b - a\\)", description: "Noma'lum qo'shiluvchini topish", example: "x + 5 = 12, x = 7" },
                    { name: "Noma'lum kamayuvchi", formula: "\\(x - a = b \\Rightarrow x = b + a\\)", description: "Noma'lum kamayuvchini topish", example: "x - 4 = 9, x = 13" },
                    { name: "Noma'lum ayriluvchi", formula: "\\(a - x = b \\Rightarrow x = a - b\\)", description: "Noma'lum ayriluvchini topish", example: "10 - x = 3, x = 7" },
                    { name: "Noma'lum ko'paytuvchi", formula: "\\(x \\times a = b \\Rightarrow x = b \\div a\\)", description: "Noma'lum ko'paytuvchini topish", example: "x × 6 = 18, x = 3" },
                    { name: "Noma'lum bo'linuvchi", formula: "\\(x \\div a = b \\Rightarrow x = b \\times a\\)", description: "Noma'lum bo'linuvchini topish", example: "x ÷ 4 = 5, x = 20" }
                ]
            },
            {
                name: "Yuza va perimetr",
                formulas: [
                    { name: "To'rtburchak perimetri", formula: "\\(P = 2(a + b)\\)", description: "To'rtburchak perimetri", example: "a = 5, b = 3, P = 16" },
                    { name: "Kvadrat perimetri", formula: "\\(P = 4a\\)", description: "Kvadrat perimetri", example: "a = 7, P = 28" },
                    { name: "To'rtburchak yuzasi", formula: "\\(S = a \\times b\\)", description: "To'rtburchak yuzasi", example: "a = 6, b = 4, S = 24" },
                    { name: "Kvadrat yuzasi", formula: "\\(S = a^2\\)", description: "Kvadrat yuzasi", example: "a = 5, S = 25" },
                    { name: "Perimetrdan tomon", formula: "\\(a = P \\div 4\\)", description: "Kvadrat tomonini perimetrdan topish", example: "P = 20, a = 5" }
                ]
            },
            {
                name: "Kasrlar bilan tanishuv",
                formulas: [
                    { name: "Oddiy kasr", formula: "\\(\\frac{a}{b}\\)", description: "Oddiy kasr - bitta butunning bir qismi", example: "½, ¾, ⅔" },
                    { name: "Surat", formula: "\\(\\frac{a}{b}\\) da \\(a\\) - surat", description: "Kasrning yuqori qismi", example: "3/4 da 3 - surat" },
                    { name: "Maxraj", formula: "\\(\\frac{a}{b}\\) da \\(b\\) - maxraj", description: "Kasrning pastki qismi", example: "3/4 da 4 - maxraj" },
                    { name: "Birlik kasr", formula: "\\(\\frac{1}{n}\\)", description: "Surati 1 ga teng kasr", example: "½, ⅓, ¼, ⅕" },
                    { name: "Kasrlarni taqqoslash", formula: "\\(\\frac{a}{c} > \\frac{b}{c} \\Leftrightarrow a > b\\)", description: "Bir xil maxrajli kasrlarni taqqoslash", example: "5/7 > 3/7" }
                ]
            },
            {
                name: "Amallar tartibi",
                formulas: [
                    { name: "Qavs birinchi", formula: "\\((a + b) \\times c\\)", description: "Avval qavs ichidagi amallar bajariladi", example: "(2 + 3) × 4 = 20" },
                    { name: "Ko'paytirish va bo'lish", formula: "\\(a + b \\times c\\)", description: "Ko'paytirish qo'shishdan oldin", example: "5 + 3 × 2 = 11" },
                    { name: "Chapdan o'ngga", formula: "\\(a \\times b \\div c\\)", description: "Bir xil kuchli amallar chapdan o'ngga", example: "24 ÷ 6 × 2 = 8" },
                    { name: "Murakkab ifoda", formula: "\\((a + b) \\times c - d\\)", description: "Amallarni to'g'ri tartibda bajarish", example: "(7 - 3) × 5 + 2 = 22" },
                    { name: "Ichma-ich qavslar", formula: "\\(((a + b) \\times c) + d\\)", description: "Ichki qavsdan boshlanadi", example: "((2 + 3) × 4) + 1 = 21" }
                ]
            }
        ]
    },
    4: {
        title: "4-sinf Matematika",
        sections: [
            {
                name: "Katta sonlar",
                formulas: [
                    { name: "Ming", formula: "\\(1000 = 10^3\\)", description: "1000 - to'rt xonali son", example: "5000 = 5 × 1000" },
                    { name: "O'n ming", formula: "\\(10000 = 10^4\\)", description: "10000 - besh xonali son", example: "30000 = 3 × 10000" },
                    { name: "Yuz ming", formula: "\\(100000 = 10^5\\)", description: "100000 - olti xonali son", example: "200000 = 2 × 100000" },
                    { name: "Million", formula: "\\(1000000 = 10^6\\)", description: "1 million - etti xonali son", example: "5000000 = 5 × 1000000" },
                    { name: "Sonni yozish", formula: "\\(\\overline{abcd} = 1000a + 100b + 10c + d\\)", description: "To'rt xonali sonning tuzilishi", example: "3456 = 3000 + 400 + 50 + 6" }
                ]
            },
            {
                name: "Kasrlar",
                formulas: [
                    { name: "Oddiy kasr", formula: "\\(\\frac{a}{b}\\)", description: "Oddiy kasrning umumiy ko'rinishi", example: "3/4, 5/8, 7/12" },
                    { name: "Kasrlarni qo'shish", formula: "\\(\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}\\)", description: "Bir xil maxrajli kasrlarni qo'shish", example: "2/7 + 3/7 = 5/7" },
                    { name: "Kasrlarni ayirish", formula: "\\(\\frac{a}{c} - \\frac{b}{c} = \\frac{a-b}{c}\\)", description: "Bir xil maxrajli kasrlarni ayirish", example: "5/9 - 2/9 = 3/9" },
                    { name: "Kasrni qisqartirish", formula: "\\(\\frac{a \\times k}{b \\times k} = \\frac{a}{b}\\)", description: "Kasr surat va maxrajini bir xil songa bo'lish", example: "6/8 = 3/4" },
                    { name: "Kasrni kengaytirish", formula: "\\(\\frac{a}{b} = \\frac{a \\times k}{b \\times k}\\)", description: "Kasr surat va maxrajini bir xil songa ko'paytirish", example: "2/3 = 4/6 = 6/9" },
                    { name: "Aralash son", formula: "\\(a\\frac{b}{c} = a + \\frac{b}{c}\\)", description: "Butun va kasr qismdan iborat son", example: "2¾ = 2 + 3/4" },
                    { name: "Noto'g'ri kasr", formula: "\\(\\frac{a}{b}, \\quad a > b\\)", description: "Surati maxrajidan katta kasr", example: "7/4, 11/3" }
                ]
            },
            {
                name: "O'nli kasrlar",
                formulas: [
                    { name: "O'nli kasr", formula: "\\(a.b = a + \\frac{b}{10}\\)", description: "O'ndan birlar xonasi bilan yozilgan kasr", example: "3.7 = 3 + 7/10" },
                    { name: "Yuzdan birlar", formula: "\\(a.bc = a + \\frac{b}{10} + \\frac{c}{100}\\)", description: "Yuzdan birlar xonasi", example: "5.43 = 5 + 4/10 + 3/100" },
                    { name: "O'nli kasrlarni qo'shish", formula: "\\(a.b + c.d\\)", description: "Vergul ostiga vergulni qo'yib qo'shish", example: "2.5 + 1.3 = 3.8" },
                    { name: "O'nli kasrlarni ayirish", formula: "\\(a.b - c.d\\)", description: "Vergul ostiga vergulni qo'yib ayirish", example: "4.7 - 1.2 = 3.5" },
                    { name: "10 ga ko'paytirish", formula: "\\(a.bc \\times 10 = ab.c\\)", description: "Vergul bir xona o'ngga", example: "3.45 × 10 = 34.5" }
                ]
            },
            {
                name: "Perimetr va yuza",
                formulas: [
                    { name: "To'rtburchak perimetri", formula: "\\(P = 2(a + b)\\)", description: "To'rtburchak perimetri formulasi", example: "a = 8, b = 5, P = 26" },
                    { name: "To'rtburchak yuzasi", formula: "\\(S = a \\times b\\)", description: "To'rtburchak yuzasi formulasi", example: "a = 7, b = 4, S = 28 cm²" },
                    { name: "Kvadrat perimetri", formula: "\\(P = 4a\\)", description: "Kvadrat perimetri formulasi", example: "a = 6, P = 24 cm" },
                    { name: "Kvadrat yuzasi", formula: "\\(S = a^2\\)", description: "Kvadrat yuzasi formulasi", example: "a = 5, S = 25 cm²" },
                    { name: "Uchburchak yuzasi", formula: "\\(S = \\frac{1}{2} \\times a \\times h\\)", description: "Uchburchak yuzasi (asos × balandlik ÷ 2)", example: "a = 10, h = 6, S = 30 cm²" },
                    { name: "Parallelogramm yuzasi", formula: "\\(S = a \\times h\\)", description: "Parallelogramm yuzasi", example: "a = 8, h = 5, S = 40 cm²" }
                ]
            },
            {
                name: "Tezlik, vaqt, masofa",
                formulas: [
                    { name: "Masofa", formula: "\\(S = v \\times t\\)", description: "Masofa tezlik va vaqt ko'paytmasiga teng", example: "v = 60 km/soat, t = 3 soat, S = 180 km" },
                    { name: "Tezlik", formula: "\\(v = \\frac{S}{t}\\)", description: "Tezlik masofa va vaqt bo'linmasiga teng", example: "S = 240 km, t = 4 soat, v = 60 km/soat" },
                    { name: "Vaqt", formula: "\\(t = \\frac{S}{v}\\)", description: "Vaqt masofa va tezlik bo'linmasiga teng", example: "S = 180 km, v = 60 km/soat, t = 3 soat" },
                    { name: "Yaqinlashish", formula: "\\(v_{yaq} = v_1 + v_2\\)", description: "Yaqinlashish tezligi", example: "v₁ = 50, v₂ = 60, vyaq = 110 km/soat" },
                    { name: "Uzoqlashish", formula: "\\(v_{uz} = v_1 + v_2\\)", description: "Uzoqlashish tezligi", example: "v₁ = 40, v₂ = 50, vuz = 90 km/soat" },
                    { name: "Quvish", formula: "\\(v_{quv} = v_1 - v_2\\)", description: "Quvish tezligi", example: "v₁ = 70, v₂ = 50, vquv = 20 km/soat" }
                ]
            }
        ]
    },
    5: {
        title: "5-sinf Matematika",
        sections: [
            {
                name: "Natural sonlar",
                formulas: [
                    { name: "Natural sonlar", formula: "\\(\\mathbb{N} = \\{1, 2, 3, 4, ...\\}\\)", description: "Sanash uchun ishlatiladigan sonlar", example: "1, 2, 3, 100, 1000" },
                    { name: "Tub sonlar", formula: "\\(p = \\{2, 3, 5, 7, 11, ...\\}\\)", description: "Faqat 1 va o'ziga bo'linadigan sonlar", example: "2, 3, 5, 7, 11, 13" },
                    { name: "Murakkab sonlar", formula: "\\(n = a \\times b\\)", description: "Tub ko'paytuvchilarga ajraladigan sonlar", example: "12 = 2 × 2 × 3" },
                    { name: "EKUB", formula: "\\(EKUB(a,b)\\)", description: "Eng katta umumiy bo'luvchi", example: "EKUB(12, 18) = 6" },
                    { name: "EKUK", formula: "\\(EKUK(a,b)\\)", description: "Eng kichik umumiy karrali", example: "EKUK(4, 6) = 12" },
                    { name: "Bo'linish belgilari", formula: "\\(2|n \\Leftrightarrow n\\) juft", description: "2 ga bo'linish belgisi", example: "24 juft, 2 ga bo'linadi" },
                    { name: "3 ga bo'linish", formula: "\\(3|n\\) raqamlari yig'indisi 3 ga bo'linsa", description: "3 ga bo'linish belgisi", example: "123: 1+2+3=6, 3 ga bo'linadi" },
                    { name: "5 ga bo'linish", formula: "\\(5|n \\Leftrightarrow n\\) 0 yoki 5 ga tugasa", description: "5 ga bo'linish belgisi", example: "35, 100 - 5 ga bo'linadi" }
                ]
            },
            {
                name: "Kasrlar",
                formulas: [
                    { name: "Maxrajni tenglash", formula: "\\(\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}\\)", description: "Har xil maxrajli kasrlarni qo'shish", example: "1/2 + 1/3 = 5/6" },
                    { name: "Kasrlarni ko'paytirish", formula: "\\(\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}\\)", description: "Kasrlarni ko'paytirish", example: "2/3 × 3/4 = 6/12 = 1/2" },
                    { name: "Kasrlarni bo'lish", formula: "\\(\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}\\)", description: "Kasrlarni bo'lish - teskari kasrga ko'paytirish", example: "2/3 ÷ 3/4 = 2/3 × 4/3 = 8/9" },
                    { name: "Aralash sonni noto'g'ri kasrga", formula: "\\(a\\frac{b}{c} = \\frac{ac + b}{c}\\)", description: "Aralash sonni noto'g'ri kasrga aylantirish", example: "2¾ = 11/4" },
                    { name: "Noto'g'ri kasrni aralashga", formula: "\\(\\frac{a}{b} = q\\frac{r}{b}\\) (a = bq + r)", description: "Noto'g'ri kasrni aralash songa aylantirish", example: "11/4 = 2¾" }
                ]
            },
            {
                name: "O'nli kasrlar",
                formulas: [
                    { name: "O'nli kasrni ko'paytirish", formula: "\\(a.bc \\times d.ef\\)", description: "Vergulsiz ko'paytirib, vergullarni sanash", example: "2.5 × 1.2 = 3.00 = 3" },
                    { name: "O'nli kasrni bo'lish", formula: "\\(a.bc \\div d.ef\\)", description: "Vergulni o'ngga surib, bo'lish", example: "7.5 ÷ 2.5 = 75 ÷ 25 = 3" },
                    { name: "10 ga bo'lish", formula: "\\(ab.c \\div 10 = a.bc\\)", description: "Vergul bir xona chapga", example: "45.6 ÷ 10 = 4.56" },
                    { name: "100 ga ko'paytirish", formula: "\\(a.bc \\times 100 = abc\\)", description: "Vergul ikki xona o'ngga", example: "3.45 × 100 = 345" },
                    { name: "Oddiy kasrni o'nliga", formula: "\\(\\frac{a}{b} = a \\div b\\)", description: "Oddiy kasrni o'nli kasrga aylantirish", example: "3/4 = 0.75" }
                ]
            },
            {
                name: "Foizlar",
                formulas: [
                    { name: "Foiz", formula: "\\(a\\% = \\frac{a}{100}\\)", description: "Foiz - yuzdan bir qism", example: "25% = 25/100 = 0.25" },
                    { name: "Sonning foizi", formula: "\\(a \\times p\\% = a \\times \\frac{p}{100}\\)", description: "Sonning p foizini topish", example: "200 ning 15% = 30" },
                    { name: "Foiz nisbati", formula: "\\(\\frac{a}{b} \\times 100\\%\\)", description: "a sonning b ga nisbati foizlarda", example: "25 ning 100 ga nisbati = 25%" },
                    { name: "Foiz oshirish", formula: "\\(a \\times (1 + \\frac{p}{100})\\)", description: "Sonni p foizga oshirish", example: "100 ni 20% ga oshirish = 120" },
                    { name: "Foiz kamaytirish", formula: "\\(a \\times (1 - \\frac{p}{100})\\)", description: "Sonni p foizga kamaytirish", example: "100 ni 20% ga kamaytirish = 80" }
                ]
            },
            {
                name: "Geometriya",
                formulas: [
                    { name: "Doira uzunligi", formula: "\\(C = 2\\pi r = \\pi d\\)", description: "Doira aylanasining uzunligi", example: "r = 5, C = 10π ≈ 31.4" },
                    { name: "Doira yuzasi", formula: "\\(S = \\pi r^2\\)", description: "Doira yuzasi", example: "r = 3, S = 9π ≈ 28.26" },
                    { name: "To'g'ri burchak", formula: "\\(90°\\)", description: "To'g'ri burchak 90 gradus", example: "Kvadrat burchaklari to'g'ri" },
                    { name: "Yoyiq burchak", formula: "\\(180°\\)", description: "Yoyiq burchak 180 gradus", example: "To'g'ri chiziq yoyiq burchak" },
                    { name: "To'la burchak", formula: "\\(360°\\)", description: "To'la burchak 360 gradus", example: "Bir marta to'liq aylanish" },
                    { name: "Parallepiped hajmi", formula: "\\(V = a \\times b \\times c\\)", description: "To'g'ri burchakli parallelepipedning hajmi", example: "a=3, b=4, c=5, V=60" }
                ]
            }
        ]
    }
};

const topics = {
    arifmetika: {
        title: "Arifmetika",
        content: [
            { name: "Qo'shish kommutativligi", formula: "\\(a + b = b + a\\)", description: "Qo'shiluvchilarning o'rni farq qilmaydi", example: "5 + 7 = 7 + 5 = 12" },
            { name: "Qo'shish assosiativligi", formula: "\\((a + b) + c = a + (b + c)\\)", description: "Qo'shishda guruhlash farq qilmaydi", example: "(2 + 3) + 4 = 2 + (3 + 4) = 9" },
            { name: "Ko'paytirish kommutativligi", formula: "\\(a \\times b = b \\times a\\)", description: "Ko'paytuvchilarning o'rni farq qilmaydi", example: "6 × 4 = 4 × 6 = 24" },
            { name: "Ko'paytirish assosiativligi", formula: "\\((a \\times b) \\times c = a \\times (b \\times c)\\)", description: "Ko'paytirishda guruhlash farq qilmaydi", example: "(2 × 3) × 5 = 2 × (3 × 5) = 30" },
            { name: "Distributivlik", formula: "\\(a \\times (b + c) = a \\times b + a \\times c\\)", description: "Ko'paytirish qo'shish ustidan taqsimlanadi", example: "3 × (4 + 2) = 3 × 4 + 3 × 2 = 18" },
            { name: "Nol xossalari", formula: "\\(a + 0 = a, \\quad a \\times 0 = 0\\)", description: "Nol bilan amallar", example: "9 + 0 = 9, 9 × 0 = 0" },
            { name: "Bir xossalari", formula: "\\(a \\times 1 = a, \\quad a \\div 1 = a\\)", description: "Bir bilan amallar", example: "8 × 1 = 8, 8 ÷ 1 = 8" }
        ]
    }
};
