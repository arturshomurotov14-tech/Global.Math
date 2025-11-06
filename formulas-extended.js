// 6-11 sinflar formulalari

formulas[6] = {
    title: "6-sinf Matematika",
    sections: [
        {
            name: "Musbat va manfiy sonlar",
            formulas: [
                { name: "Musbat sonlar", formula: "\\(a > 0\\)", description: "Noldan katta sonlar", example: "+5, +12, +100" },
                { name: "Manfiy sonlar", formula: "\\(a < 0\\)", description: "Noldan kichik sonlar", example: "-3, -8, -25" },
                { name: "Qarama-qarshi sonlar", formula: "\\(a + (-a) = 0\\)", description: "Yig'indisi nolga teng sonlar", example: "5 + (-5) = 0" },
                { name: "Modul", formula: "\\(|a| = \\begin{cases} a, & a \\geq 0 \\\\ -a, & a < 0 \\end{cases}\\)", description: "Sonning absolyut qiymati", example: "|5| = 5, |-5| = 5" },
                { name: "Manfiylarni qo'shish", formula: "\\((-a) + (-b) = -(a + b)\\)", description: "Ikkita manfiy son yig'indisi", example: "(-3) + (-5) = -8" },
                { name: "Har xil ishorali", formula: "\\(a + (-b) = a - b\\)", description: "Har xil ishorali sonlar yig'indisi", example: "7 + (-3) = 4" },
                { name: "Manfiylarni ko'paytirish", formula: "\\((-a) \\times (-b) = ab\\)", description: "Ikkita manfiy son ko'paytmasi musbat", example: "(-2) × (-3) = 6" },
                { name: "Har xil ishorali ko'paytma", formula: "\\((-a) \\times b = -(ab)\\)", description: "Har xil ishorali sonlar ko'paytmasi manfiy", example: "(-4) × 5 = -20" }
            ]
        },
        {
            name: "Nisbat va proporsiya",
            formulas: [
                { name: "Nisbat", formula: "\\(\\frac{a}{b}\\) yoki \\(a:b\\)", description: "Ikki sonning nisbati", example: "6:3 = 2" },
                { name: "Proporsiya", formula: "\\(\\frac{a}{b} = \\frac{c}{d}\\) yoki \\(a:b = c:d\\)", description: "Ikkita nisbatning tengligi", example: "2:3 = 4:6" },
                { name: "Asosiy xossa", formula: "\\(ad = bc\\)", description: "Proporsiyaning asosiy xossasi", example: "2×6 = 3×4 = 12" },
                { name: "To'g'ri proporsional", formula: "\\(y = kx\\)", description: "To'g'ri proporsionallik", example: "y = 3x" },
                { name: "Teskari proporsional", formula: "\\(y = \\frac{k}{x}\\)", description: "Teskari proporsionallik", example: "y = 12/x" },
                { name: "Ulush", formula: "\\(x = \\frac{a \\cdot n}{a+b+c}\\)", description: "Umumiy miqdorni nisbatda bo'lish", example: "120 ni 2:3 nisbatda" },
                { name: "Masshtab", formula: "\\(M = \\frac{l}{L}\\)", description: "Xaritadagi masshtab", example: "1:100000" }
            ]
        },
        {
            name: "Koordinatalar",
            formulas: [
                { name: "Koordinatalar o'qi", formula: "\\(O\\) - boshlanish, \\(A(x)\\)", description: "Sonlar o'qida nuqta", example: "A(5), B(-3)" },
                { name: "Koordinatalar tekisligi", formula: "\\(A(x, y)\\)", description: "Tekislikda nuqtaning koordinatalari", example: "A(2, 3), B(-1, 4)" },
                { name: "Masofa o'qda", formula: "\\(|x_2 - x_1|\\)", description: "O'qdagi ikki nuqta orasidagi masofa", example: "|5 - 2| = 3" },
                { name: "I chorak", formula: "\\(x > 0, y > 0\\)", description: "Birinchi chorak - ikkala koordinata musbat", example: "(3, 4)" },
                { name: "II chorak", formula: "\\(x < 0, y > 0\\)", description: "Ikkinchi chorak", example: "(-2, 5)" },
                { name: "III chorak", formula: "\\(x < 0, y < 0\\)", description: "Uchinchi chorak", example: "(-3, -2)" },
                { name: "IV chorak", formula: "\\(x > 0, y < 0\\)", description: "To'rtinchi chorak", example: "(4, -1)" }
            ]
        },
        {
            name: "Sonli tengsizliklar",
            formulas: [
                { name: "Katta", formula: "\\(a > b\\)", description: "a soni b dan katta", example: "7 > 3" },
                { name: "Kichik", formula: "\\(a < b\\)", description: "a soni b dan kichik", example: "2 < 5" },
                { name: "Katta yoki teng", formula: "\\(a \\geq b\\)", description: "a soni b dan katta yoki teng", example: "5 ≥ 5" },
                { name: "Kichik yoki teng", formula: "\\(a \\leq b\\)", description: "a soni b dan kichik yoki teng", example: "3 ≤ 4" },
                { name: "Qo'shish xossasi", formula: "\\(a > b \\Rightarrow a + c > b + c\\)", description: "Ikkala tomonini qo'shish", example: "5 > 3 ⇒ 5+2 > 3+2" },
                { name: "Ko'paytirish xossasi", formula: "\\(a > b, c > 0 \\Rightarrow ac > bc\\)", description: "Musbat songa ko'paytirish", example: "4 > 2 ⇒ 4×3 > 2×3" }
            ]
        },
        {
            name: "Davr va chastota",
            formulas: [
                { name: "Davr", formula: "\\(T = \\frac{t}{n}\\)", description: "Bir aylanish vaqti", example: "60 sek da 10 aylanish, T = 6 sek" },
                { name: "Chastota", formula: "\\(f = \\frac{n}{t}\\)", description: "Vaqt birligidagi aylanishlar soni", example: "10 aylanish/60 sek = 1/6 Hz" },
                { name: "Bog'liqlik", formula: "\\(T = \\frac{1}{f}\\)", description: "Davr va chastota bog'liqligi", example: "f = 2 Hz, T = 0.5 sek" }
            ]
        }
    ]
};

formulas[7] = {
    title: "7-sinf Matematika",
    sections: [
        {
            name: "Daraja va ildiz",
            formulas: [
                { name: "Darajaning ta'rifi", formula: "\\(a^n = \\underbrace{a \\times a \\times ... \\times a}_{n}\\)", description: "n-darajaga ko'tarish", example: "2³ = 8" },
                { name: "Ko'paytirish", formula: "\\(a^m \\times a^n = a^{m+n}\\)", description: "Bir xil asosli darajalarni ko'paytirish", example: "2³ × 2² = 2⁵ = 32" },
                { name: "Bo'lish", formula: "\\(\\frac{a^m}{a^n} = a^{m-n}\\)", description: "Bir xil asosli darajalarni bo'lish", example: "2⁵ ÷ 2² = 2³ = 8" },
                { name: "Darajaning darajasi", formula: "\\((a^m)^n = a^{mn}\\)", description: "Darajani darajaga ko'tarish", example: "(2²)³ = 2⁶ = 64" },
                { name: "Ko'paytmaning darajasi", formula: "\\((ab)^n = a^n b^n\\)", description: "Ko'paytmani darajaga ko'tarish", example: "(2×3)² = 2² × 3² = 36" },
                { name: "Nolga teng daraja", formula: "\\(a^0 = 1\\)", description: "Nolga teng daraja birga teng", example: "5⁰ = 1" },
                { name: "Manfiy daraja", formula: "\\(a^{-n} = \\frac{1}{a^n}\\)", description: "Manfiy darajadagi son", example: "2⁻³ = 1/8" },
                { name: "Kvadrat ildiz", formula: "\\(\\sqrt{a^2} = |a|\\)", description: "Kvadrat ildiz", example: "√16 = 4" },
                { name: "Ildiz ko'paytmasi", formula: "\\(\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}\\)", description: "Ildizlar ko'paytmasi", example: "√2 × √8 = √16 = 4" },
                { name: "Ildiz bo'linmasi", formula: "\\(\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}\\)", description: "Ildizlar bo'linmasi", example: "√50 ÷ √2 = √25 = 5" }
            ]
        },
        {
            name: "Qisqartirilgan ko'paytirish formulalari",
            formulas: [
                { name: "Kvadrat yig'indi", formula: "\\((a+b)^2 = a^2 + 2ab + b^2\\)", description: "Yig'indining kvadrati", example: "(x+3)² = x² + 6x + 9" },
                { name: "Kvadrat ayirma", formula: "\\((a-b)^2 = a^2 - 2ab + b^2\\)", description: "Ayirmaning kvadrati", example: "(x-2)² = x² - 4x + 4" },
                { name: "Kvadratlar ayirmasi", formula: "\\(a^2 - b^2 = (a-b)(a+b)\\)", description: "Ikki hadning kvadratlari ayirmasi", example: "x² - 9 = (x-3)(x+3)" },
                { name: "Kub yig'indi", formula: "\\((a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\\)", description: "Yig'indining kubi", example: "(x+1)³ = x³ + 3x² + 3x + 1" },
                { name: "Kub ayirma", formula: "\\((a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3\\)", description: "Ayirmaning kubi", example: "(x-2)³ = x³ - 6x² + 12x - 8" },
                { name: "Kublar yig'indisi", formula: "\\(a^3 + b^3 = (a+b)(a^2-ab+b^2)\\)", description: "Ikki hadning kublari yig'indisi", example: "x³ + 8 = (x+2)(x²-2x+4)" },
                { name: "Kublar ayirmasi", formula: "\\(a^3 - b^3 = (a-b)(a^2+ab+b^2)\\)", description: "Ikki hadning kublari ayirmasi", example: "x³ - 27 = (x-3)(x²+3x+9)" }
            ]
        },
        {
            name: "Tenglamalar",
            formulas: [
                { name: "Chiziqli tenglama", formula: "\\(ax + b = 0 \\Rightarrow x = -\\frac{b}{a}\\)", description: "Chiziqli tenglama yechish", example: "2x + 6 = 0, x = -3" },
                { name: "Koeffitsiyentlar", formula: "\\(ax + by = c\\)", description: "Ikkita noma'lumli chiziqli tenglama", example: "2x + 3y = 6" },
                { name: "Tenglamalar sistemasi", formula: "\\(\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}\\)", description: "Chiziqli tenglamalar sistemasi", example: "x+y=5, x-y=1" },
                { name: "O'rniga qo'yish usuli", formula: "\\(x = ..., \\text{ ikkinchisiga qo'yish}\\)", description: "Sistemani yechish usuli", example: "y=5-x ni ikkinchisiga" },
                { name: "Qo'shish usuli", formula: "\\(a_1x + b_1y + a_2x + b_2y\\)", description: "Tenglamalarni qo'shib yechish", example: "Koeffitsiyentlarni tenglash" }
            ]
        },
        {
            name: "Geometriya - Uchburchak",
            formulas: [
                { name: "Ichki burchaklar", formula: "\\(\\alpha + \\beta + \\gamma = 180°\\)", description: "Uchburchak ichki burchaklari yig'indisi", example: "60° + 70° + 50° = 180°" },
                { name: "Tashqi burchak", formula: "\\(\\delta = \\alpha + \\beta\\)", description: "Tashqi burchak qo'shni bo'lmagan ichki burchaklar yig'indisiga teng", example: "Tashqi 120° = 60° + 60°" },
                { name: "Uchburchak tengsizligi", formula: "\\(a + b > c\\)", description: "Ikki tomon yig'indisi uchinchisidan katta", example: "3 + 4 > 5" },
                { name: "Teng yonli uchburchak", formula: "\\(a = b, \\quad \\alpha = \\beta\\)", description: "Teng tomonlar qarshisidagi burchaklar teng", example: "AB = AC ⇒ ∠B = ∠C" },
                { name: "Teng tomonli uchburchak", formula: "\\(a = b = c, \\quad \\alpha = \\beta = \\gamma = 60°\\)", description: "Barcha tomonlari va burchaklari teng", example: "Har bir burchak 60°" },
                { name: "Pifagor teoremasi", formula: "\\(a^2 + b^2 = c^2\\)", description: "To'g'ri burchakli uchburchakda", example: "3² + 4² = 5²" },
                { name: "Mediana", formula: "\\(m_a^2 = \\frac{2b^2 + 2c^2 - a^2}{4}\\)", description: "Mediana uzunligi", example: "Tomonning o'rtasiga" },
                { name: "Balandlik va yuza", formula: "\\(S = \\frac{1}{2}ah_a\\)", description: "Uchburchak yuzasi", example: "a=10, h=6, S=30" }
            ]
        },
        {
            name: "Statistika",
            formulas: [
                { name: "O'rtacha arifmetik", formula: "\\(\\bar{x} = \\frac{x_1 + x_2 + ... + x_n}{n}\\)", description: "Qiymatlar o'rtachasi", example: "(2+4+6+8)/4 = 5" },
                { name: "Moda", formula: "\\(Mo\\) - eng ko'p uchraydigan qiymat", description: "Eng ko'p takrorlanuvchi element", example: "2,3,3,3,5 → Mo=3" },
                { name: "Mediana", formula: "\\(Me\\) - o'rtadagi qiymat", description: "Tartiblangandagi o'rta element", example: "1,3,5,7,9 → Me=5" },
                { name: "Variatsiya kengligi", formula: "\\(R = x_{max} - x_{min}\\)", description: "Eng katta va eng kichik ayirmasi", example: "Max=10, Min=2, R=8" }
            ]
        }
    ]
};

formulas[8] = {
    title: "8-sinf Matematika",
    sections: [
        {
            name: "Kvadrat tenglama",
            formulas: [
                { name: "Umumiy ko'rinish", formula: "\\(ax^2 + bx + c = 0\\)", description: "Kvadrat tenglamaning umumiy ko'rinishi", example: "2x² + 5x - 3 = 0" },
                { name: "Diskriminant", formula: "\\(D = b^2 - 4ac\\)", description: "Ildizlar mavjudligini aniqlaydi", example: "D = 25 - 4(2)(-3) = 49" },
                { name: "Ildizlar soni", formula: "\\(D > 0\\) - 2 ta, \\(D = 0\\) - 1 ta, \\(D < 0\\) - yo'q", description: "Diskriminant orqali ildizlar soni", example: "D=49 > 0, 2 ta ildiz" },
                { name: "Ildizlar formulasi", formula: "\\(x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}\\)", description: "Kvadrat tenglama ildizlari", example: "x = (-5±7)/4" },
                { name: "Viyet teoremasi (yig'indi)", formula: "\\(x_1 + x_2 = -\\frac{b}{a}\\)", description: "Ildizlar yig'indisi", example: "x₁ + x₂ = -5/2" },
                { name: "Viyet teoremasi (ko'paytma)", formula: "\\(x_1 \\times x_2 = \\frac{c}{a}\\)", description: "Ildizlar ko'paytmasi", example: "x₁ × x₂ = -3/2" },
                { name: "Keltirilgan tenglama", formula: "\\(x^2 + px + q = 0\\)", description: "Birinchi koeffitsiyent 1 ga teng", example: "x² + 3x - 4 = 0" },
                { name: "Keltirilgan Viyet", formula: "\\(x_1 + x_2 = -p, \\quad x_1 x_2 = q\\)", description: "Keltirilgan tenglama uchun Viyet", example: "x₁+x₂=-3, x₁x₂=-4" },
                { name: "To'la kvadrat", formula: "\\(x^2 + 2px + p^2 = (x+p)^2\\)", description: "To'la kvadratga keltirish", example: "x²+6x+9=(x+3)²" },
                { name: "Biquadrat tenglama", formula: "\\(ax^4 + bx^2 + c = 0\\)", description: "To'rtinchi darajali maxsus tenglama", example: "x⁴ - 5x² + 4 = 0" }
            ]
        },
        {
            name: "Kasrli ratsional ifodalar",
            formulas: [
                { name: "Kasr qisqartirish", formula: "\\(\\frac{a \\cdot c}{b \\cdot c} = \\frac{a}{b}\\)", description: "Surat va maxrajning umumiy ko'paytuvchisi", example: "(x²-4)/(x+2) = x-2" },
                { name: "Kasrlarni qo'shish", formula: "\\(\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}\\)", description: "Bir xil maxrajli kasrlar", example: "2/x + 3/x = 5/x" },
                { name: "Har xil maxrajli", formula: "\\(\\frac{a}{b} + \\frac{c}{d} = \\frac{ad+bc}{bd}\\)", description: "Har xil maxrajli kasrlarni qo'shish", example: "1/x + 1/y = (y+x)/xy" },
                { name: "Kasrlarni ko'paytirish", formula: "\\(\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}\\)", description: "Kasrlarni ko'paytirish", example: "(2/x) × (3/y) = 6/xy" },
                { name: "Kasrlarni bo'lish", formula: "\\(\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}\\)", description: "Teskari kasrga ko'paytirish", example: "(x/2) ÷ (x/3) = 3/2" }
            ]
        },
        {
            name: "Geometriya - To'rtburchaklar",
            formulas: [
                { name: "Parallelogramm yuzasi", formula: "\\(S = a \\cdot h\\)", description: "Asos va balandlik ko'paytmasi", example: "a=8, h=5, S=40" },
                { name: "Parallelogramm (burchak)", formula: "\\(S = ab\\sin\\alpha\\)", description: "Ikki tomon va ular orasidagi burchak", example: "a=6, b=4, α=30°, S=12" },
                { name: "Romb yuzasi (diagonallar)", formula: "\\(S = \\frac{d_1 \\cdot d_2}{2}\\)", description: "Diagonallar ko'paytmasining yarmi", example: "d₁=6, d₂=8, S=24" },
                { name: "Trapetsiya yuzasi", formula: "\\(S = \\frac{(a+b)h}{2}\\)", description: "Asoslar yig'indisi va balandlik", example: "a=5, b=9, h=4, S=28" },
                { name: "Trapetsiya o'rta chizig'i", formula: "\\(m = \\frac{a+b}{2}\\)", description: "Asoslar o'rtachasi", example: "a=4, b=8, m=6" },
                { name: "To'rtburchak diagonallari", formula: "\\(S = \\frac{1}{2}d_1 d_2 \\sin\\alpha\\)", description: "Diagonallar va ular orasidagi burchak", example: "d₁=10, d₂=8, α=90°, S=40" },
                { name: "Teng yonli trapetsiya", formula: "\\(c = d, \\quad \\alpha + \\beta = 180°\\)", description: "Yon tomonlari teng", example: "Qarshiligi burchaklar yig'indisi 180°" }
            ]
        },
        {
            name: "Tengsizliklar",
            formulas: [
                { name: "Chiziqli tengsizlik", formula: "\\(ax + b > 0 \\Rightarrow x > -\\frac{b}{a}\\)", description: "Chiziqli tengsizlik yechish", example: "2x + 6 > 0, x > -3" },
                { name: "Intervallar ko'rinishi", formula: "\\((a; b), [a; b], (a; b], [a; b)\\)", description: "Ochiq, yopiq, yarim ochiq intervallar", example: "x ∈ (2; 5]" },
                { name: "Tengsizliklar sistemasi", formula: "\\(\\begin{cases} f(x) > 0 \\\\ g(x) > 0 \\end{cases}\\)", description: "Ikkala shart bajarilishi kerak", example: "x>2 va x<5" },
                { name: "Tengsizliklar to'plami", formula: "\\([f(x) > 0] \\cup [g(x) > 0]\\)", description: "Kamida biri bajarilishi kerak", example: "x<2 yoki x>5" },
                { name: "Kvadrat tengsizlik", formula: "\\(ax^2 + bx + c > 0\\)", description: "Kvadrat tengsizlik", example: "x² - 5x + 6 > 0" }
            ]
        },
        {
            name: "O'xshashlik",
            formulas: [
                { name: "O'xshashlik koeffitsiyenti", formula: "\\(k = \\frac{a'}{a} = \\frac{b'}{b} = \\frac{c'}{c}\\)", description: "Mos tomonlar nisbati", example: "k = 2 (ikki marta katta)" },
                { name: "Perimetrlar nisbati", formula: "\\(\\frac{P'}{P} = k\\)", description: "Perimetrlar nisbati k ga teng", example: "k=3 ⇒ P'=3P" },
                { name: "Yuzalar nisbati", formula: "\\(\\frac{S'}{S} = k^2\\)", description: "Yuzalar nisbati k² ga teng", example: "k=2 ⇒ S'=4S" },
                { name: "Hajmlar nisbati", formula: "\\(\\frac{V'}{V} = k^3\\)", description: "Hajmlar nisbati k³ ga teng", example: "k=2 ⇒ V'=8V" }
            ]
        }
    ]
};

// 9-11 sinflar davom etadi...
formulas[9] = {
    title: "9-sinf Matematika",
    sections: [
        {
            name: "Funksiyalar",
            formulas: [
                { name: "Funksiya ta'rifi", formula: "\\(y = f(x)\\)", description: "Har bir x ga bitta y mos keladi", example: "y = 2x + 1" },
                { name: "Aniqlanish sohasi", formula: "\\(D(f)\\)", description: "x ning qabul qilishi mumkin bo'lgan qiymatlar", example: "D(1/x) = ℝ\\{0}" },
                { name: "Qiymatlar sohasi", formula: "\\(E(f)\\)", description: "y ning qabul qilishi mumkin bo'lgan qiymatlar", example: "E(x²) = [0; +∞)" },
                { name: "O'suvchi funksiya", formula: "\\(x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)\\)", description: "x ortsa, y ham ortadi", example: "y = x + 1" },
                { name: "Kamayuvchi funksiya", formula: "\\(x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)\\)", description: "x ortsa, y kamayadi", example: "y = -x" },
                { name: "Juft funksiya", formula: "\\(f(-x) = f(x)\\)", description: "y o'qiga simmetrik", example: "y = x²" },
                { name: "Toq funksiya", formula: "\\(f(-x) = -f(x)\\)", description: "Boshlanishga simmetrik", example: "y = x³" },
                { name: "Chiziqli funksiya", formula: "\\(y = kx + b\\)", description: "Grafigi to'g'ri chiziq", example: "y = 2x - 3" },
                { name: "Kvadrat funksiya", formula: "\\(y = ax^2 + bx + c\\)", description: "Grafigi parabola", example: "y = x² - 4x + 3" },
                { name: "Parabola cho'qqisi", formula: "\\(x_0 = -\\frac{b}{2a}, \\quad y_0 = f(x_0)\\)", description: "Parabolaning cho'qqi nuqtasi", example: "y=x²-4x+3, x₀=2, y₀=-1" },
                { name: "Teskari proporsionallik", formula: "\\(y = \\frac{k}{x}\\)", description: "Grafigi giperbola", example: "y = 6/x" }
            ]
        },
        {
            name: "Progressiyalar",
            formulas: [
                { name: "Arifmetik progressiya", formula: "\\(a_{n+1} = a_n + d\\)", description: "Har bir had oldingisiga d qo'shish", example: "2, 5, 8, 11, ... (d=3)" },
                { name: "n-had (arifmetik)", formula: "\\(a_n = a_1 + (n-1)d\\)", description: "Arifmetik progressiya n-hadi", example: "a₁=2, d=3, a₅=14" },
                { name: "Yig'indi (arifmetik)", formula: "\\(S_n = \\frac{n(a_1 + a_n)}{2}\\)", description: "Dastlabki n ta had yig'indisi", example: "S₅ = 5(2+14)/2 = 40" },
                { name: "Yig'indi (arifmetik, 2)", formula: "\\(S_n = \\frac{n(2a_1 + (n-1)d)}{2}\\)", description: "Ikkinchi formula", example: "S₅ = 5(4+12)/2 = 40" },
                { name: "O'rta arifmetik", formula: "\\(a_n = \\frac{a_{n-1} + a_{n+1}}{2}\\)", description: "Har bir had qo'shnilarining o'rtachasi", example: "5 = (2+8)/2" },
                { name: "Geometrik progressiya", formula: "\\(b_{n+1} = b_n \\cdot q\\)", description: "Har bir had oldingisiga q ko'paytirish", example: "2, 6, 18, 54, ... (q=3)" },
                { name: "n-had (geometrik)", formula: "\\(b_n = b_1 \\cdot q^{n-1}\\)", description: "Geometrik progressiya n-hadi", example: "b₁=2, q=3, b₅=162" },
                { name: "Yig'indi (geometrik)", formula: "\\(S_n = \\frac{b_1(q^n - 1)}{q - 1}\\)", description: "Geometrik progressiya yig'indisi (q≠1)", example: "S₅ = 2(243-1)/2 = 242" },
                { name: "O'rta geometrik", formula: "\\(b_n = \\sqrt{b_{n-1} \\cdot b_{n+1}}\\)", description: "Har bir had qo'shnilarining geometrik o'rtachasi", example: "6 = √(2×18)" },
                { name: "Cheksiz geometrik", formula: "\\(S = \\frac{b_1}{1-q}, \\quad |q| < 1\\)", description: "Cheksiz kamayuvchi progressiya yig'indisi", example: "1+1/2+1/4+... = 2" }
            ]
        },
        {
            name: "Trigonometriya asoslari",
            formulas: [
                { name: "Sinus", formula: "\\(\\sin\\alpha = \\frac{BC}{AB}\\)", description: "Qarama-qarshi katet / Gipote nuza", example: "sin 30° = 1/2" },
                { name: "Kosinus", formula: "\\(\\cos\\alpha = \\frac{AC}{AB}\\)", description: "Yonlama katet / Gipotenuz", example: "cos 60° = 1/2" },
                { name: "Tangens", formula: "\\(\\tan\\alpha = \\frac{BC}{AC} = \\frac{\\sin\\alpha}{\\cos\\alpha}\\)", description: "Qarama-qarshi / Yonlama", example: "tan 45° = 1" },
                { name: "Kotangens", formula: "\\(\\cot\\alpha = \\frac{AC}{BC} = \\frac{\\cos\\alpha}{\\sin\\alpha}\\)", description: "Yonlama / Qarama-qarshi", example: "cot 45° = 1" },
                { name: "Asosiy ayniyat", formula: "\\(\\sin^2\\alpha + \\cos^2\\alpha = 1\\)", description: "Trigonometriyaning asosiy ayniyati", example: "sin²30° + cos²30° = 1/4 + 3/4 = 1" },
                { name: "Tangens va kotangens", formula: "\\(\\tan\\alpha \\cdot \\cot\\alpha = 1\\)", description: "Tangens va kotangens ko'paytmasi", example: "tan α × cot α = 1" },
                { name: "1 + tan²", formula: "\\(1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}\\)", description: "Tangens orqali kosinus", example: "Trigonometrik ayniyat" },
                { name: "1 + cot²", formula: "\\(1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha}\\)", description: "Kotangens orqali sinus", example: "Trigonometrik ayniyat" },
                { name: "Sinuslar teoremasi", formula: "\\(\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma} = 2R\\)", description: "Ixtiyoriy uchburchak uchun", example: "Tomonlar va burchaklar bog'liqligi" },
                { name: "Kosinuslar teoremasi", formula: "\\(c^2 = a^2 + b^2 - 2ab\\cos\\gamma\\)", description: "Ixtiyoriy uchburchak uchun", example: "Uchinchi tomonni topish" }
            ]
        },
        {
            name: "Aylanalar va doiralar",
            formulas: [
                { name: "Markaziy burchak", formula: "\\(\\alpha = \\frac{l}{r}\\) (radianda)", description: "Yoy uzunligining radiusga nisbati", example: "l=π, r=2, α=π/2" },
                { name: "Yoy uzunligi", formula: "\\(l = \\frac{\\pi r n}{180}\\)", description: "n gradusli yoy uzunligi", example: "r=6, n=60°, l=2π" },
                { name: "Sektor yuzasi", formula: "\\(S = \\frac{\\pi r^2 n}{360}\\)", description: "n gradusli sektor yuzasi", example: "r=4, n=90°, S=4π" },
                { name: "Urunma", formula: "\\(AT \\perp OA\\)", description: "Urunma radiusga perpendikulyar", example: "Urunma xossasi" },
                { name: "Vatarlar", formula: "\\(AB \\cdot CD = AE \\cdot ED\\)", description: "Kesishuvchi vatarlar", example: "Vatar xossasi" },
                { name: "Tashqi nuqtadan", formula: "\\(PA \\cdot PB = PC \\cdot PD\\)", description: "Tashqi nuqtadan o'tkazilgan", example: "Vatar va urunma" }
            ]
        },
        {
            name: "Vektorlar",
            formulas: [
                { name: "Vektor", formula: "\\(\\vec{a} = \\overrightarrow{AB}\\)", description: "Yo'nalgan kesma", example: "A dan B ga vektor" },
                { name: "Vektor uzunligi", formula: "\\(|\\vec{a}| = \\sqrt{x^2 + y^2}\\)", description: "Vektor moduli", example: "|(3,4)| = 5" },
                { name: "Vektorlar yig'indisi", formula: "\\(\\vec{a} + \\vec{b} = (x_1+x_2, y_1+y_2)\\)", description: "Koordinatalari qo'shiladi", example: "(1,2)+(3,4)=(4,6)" },
                { name: "Vektorni songa ko'paytirish", formula: "\\(k\\vec{a} = (kx, ky)\\)", description: "Har bir koordinata k marta", example: "3(1,2) = (3,6)" },
                { name: "Skalyar ko'paytma", formula: "\\(\\vec{a} \\cdot \\vec{b} = x_1x_2 + y_1y_2\\)", description: "Koordinatalar ko'paytmalari yig'indisi", example: "(1,2)·(3,4) = 11" },
                { name: "Burchak", formula: "\\(\\cos\\alpha = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}\\)", description: "Vektorlar orasidagi burchak", example: "Kosinusni topish" }
            ]
        }
    ]
};

// Topiclarni to'ldirish
Object.assign(topics, {
    algebra: {
        title: "Algebra",
        content: [
            { name: "Kvadrat yig'indi", formula: "\\((a+b)^2 = a^2 + 2ab + b^2\\)", description: "Ikki had yig'indisining kvadrati", example: "(x+3)² = x²+6x+9" },
            { name: "Kvadrat ayirma", formula: "\\((a-b)^2 = a^2 - 2ab + b^2\\)", description: "Ikki had ayirmasining kvadrati", example: "(x-2)² = x²-4x+4" },
            { name: "Kvadratlar ayirmasi", formula: "\\(a^2 - b^2 = (a-b)(a+b)\\)", description: "Ikki kvadrat ayirmasi", example: "x²-9 = (x-3)(x+3)" },
            { name: "Kub yig'indi", formula: "\\(a^3 + b^3 = (a+b)(a^2-ab+b^2)\\)", description: "Ikki kub yig'indisi", example: "x³+8 = (x+2)(x²-2x+4)" },
            { name: "Kub ayirma", formula: "\\(a^3 - b^3 = (a-b)(a^2+ab+b^2)\\)", description: "Ikki kub ayirmasi", example: "x³-27 = (x-3)(x²+3x+9)" },
            { name: "Yig'indining kubi", formula: "\\((a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\\)", description: "Kub yig'indi formulasi", example: "(x+1)³" },
            { name: "Ayirmaning kubi", formula: "\\((a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3\\)", description: "Kub ayirma formulasi", example: "(x-2)³" }
        ]
    },
    geometriya: {
        title: "Geometriya",
        content: [
            { name: "To'rtburchak yuzasi", formula: "\\(S = a \\times b\\)", description: "Tomonlar ko'paytmasi", example: "a=5, b=3, S=15" },
            { name: "Uchburchak yuzasi", formula: "\\(S = \\frac{1}{2}ah\\)", description: "Asos va balandlik", example: "a=10, h=6, S=30" },
            { name: "Doira yuzasi", formula: "\\(S = \\pi r^2\\)", description: "Pi × radius kvadrati", example: "r=5, S=25π" },
            { name: "Doira uzunligi", formula: "\\(C = 2\\pi r\\)", description: "Aylana uzunligi", example: "r=3, C=6π" },
            { name: "Parallelogramm", formula: "\\(S = ah = ab\\sin\\alpha\\)", description: "Parallelogramm yuzasi", example: "a=6, h=4, S=24" },
            { name: "Trapetsiya", formula: "\\(S = \\frac{(a+b)h}{2}\\)", description: "Trapetsiya yuzasi", example: "a=4, b=8, h=5, S=30" },
            { name: "Silindr hajmi", formula: "\\(V = \\pi r^2 h\\)", description: "Silindr hajmi", example: "r=2, h=5, V=20π" },
            { name: "Konus hajmi", formula: "\\(V = \\frac{1}{3}\\pi r^2 h\\)", description: "Konus hajmi", example: "r=3, h=4, V=12π" },
            { name: "Shar hajmi", formula: "\\(V = \\frac{4}{3}\\pi r^3\\)", description: "Shar hajmi", example: "r=3, V=36π" },
            { name: "Shar yuzasi", formula: "\\(S = 4\\pi r^2\\)", description: "Shar sirti yuzasi", example: "r=5, S=100π" }
        ]
    },
    trigonometriya: {
        title: "Trigonometriya",
        content: [
            { name: "Asosiy ayniyat", formula: "\\(\\sin^2\\alpha + \\cos^2\\alpha = 1\\)", description: "Trigonometrik ayniyat", example: "Barcha burchaklar uchun to'g'ri" },
            { name: "Tangens", formula: "\\(\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}\\)", description: "Tangens ta'rifi", example: "tan 45° = 1" },
            { name: "Kotangens", formula: "\\(\\cot\\alpha = \\frac{\\cos\\alpha}{\\sin\\alpha}\\)", description: "Kotangens ta'rifi", example: "cot 45° = 1" },
            { name: "Yig'indi sinusi", formula: "\\(\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta\\)", description: "Yig'indi sinusi", example: "sin(30°+60°) = sin 90° = 1" },
            { name: "Ayirma sinusi", formula: "\\(\\sin(\\alpha-\\beta) = \\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta\\)", description: "Ayirma sinusi", example: "Formuladan foydalanish" },
            { name: "Yig'indi kosinusi", formula: "\\(\\cos(\\alpha+\\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta\\)", description: "Yig'indi kosinusi", example: "cos(30°+60°) = cos 90° = 0" },
            { name: "Ikkilangan burchak (sin)", formula: "\\(\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha\\)", description: "Ikki burchak sinusi", example: "sin 60° = 2 sin 30° cos 30°" },
            { name: "Ikkilangan burchak (cos)", formula: "\\(\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha\\)", description: "Ikki burchak kosinusi", example: "Formuladan foydalanish" }
        ]
    },
    logarifm: {
        title: "Logarifmlar",
        content: [
            { name: "Logarifm ta'rifi", formula: "\\(\\log_a b = c \\Leftrightarrow a^c = b\\)", description: "Logarifm asosiy ta'rifi", example: "log₂ 8 = 3, chunki 2³=8" },
            { name: "Ko'paytma logarifmi", formula: "\\(\\log_a(xy) = \\log_a x + \\log_a y\\)", description: "Ko'paytma logarifmi yig'indiga", example: "log(6) = log(2×3) = log 2 + log 3" },
            { name: "Bo'linma logarifmi", formula: "\\(\\log_a\\frac{x}{y} = \\log_a x - \\log_a y\\)", description: "Bo'linma logarifmi ayirmaga", example: "log(2/3) = log 2 - log 3" },
            { name: "Daraja logarifmi", formula: "\\(\\log_a x^n = n\\log_a x\\)", description: "Daraja ko'rsatkichi oldinga", example: "log x² = 2 log x" },
            { name: "Asosni o'zgartirish", formula: "\\(\\log_a b = \\frac{\\log_c b}{\\log_c a}\\)", description: "Logarifm asosini o'zgartirish", example: "log₂ 8 = ln 8 / ln 2" },
            { name: "O'ziga logarifm", formula: "\\(\\log_a a = 1\\)", description: "Asosga teng son logarifmi", example: "log₅ 5 = 1" },
            { name: "Birga logarifm", formula: "\\(\\log_a 1 = 0\\)", description: "Birning logarifmi nolga teng", example: "log 1 = 0" }
        ]
    },
    funksiya: {
        title: "Funksiyalar",
        content: [
            { name: "Chiziqli", formula: "\\(y = kx + b\\)", description: "Grafigi to'g'ri chiziq", example: "y = 2x + 3" },
            { name: "Kvadrat", formula: "\\(y = ax^2 + bx + c\\)", description: "Grafigi parabola", example: "y = x² - 4x + 3" },
            { name: "Daraja", formula: "\\(y = x^n\\)", description: "Daraja funksiya", example: "y = x³" },
            { name: "Eksponenta", formula: "\\(y = a^x\\)", description: "Ko'rsatkichli funksiya", example: "y = 2ˣ" },
            { name: "Logarifmik", formula: "\\(y = \\log_a x\\)", description: "Logarifmik funksiya", example: "y = log₂ x" },
            { name: "Giperbola", formula: "\\(y = \\frac{k}{x}\\)", description: "Teskari proporsionallik", example: "y = 6/x" }
        ]
    },
    tenglamalar: {
        title: "Tenglamalar",
        content: [
            { name: "Chiziqli", formula: "\\(ax + b = 0\\)", description: "Birinchi darajali tenglama", example: "2x + 5 = 0" },
            { name: "Kvadrat", formula: "\\(ax^2 + bx + c = 0\\)", description: "Ikkinchi darajali tenglama", example: "x² - 5x + 6 = 0" },
            { name: "Biquadrat", formula: "\\(ax^4 + bx^2 + c = 0\\)", description: "To'rtinchi darajali", example: "x⁴ - 5x² + 4 = 0" },
            { name: "Irratsional", formula: "\\(\\sqrt{f(x)} = g(x)\\)", description: "Ildiz ostida noma'lum", example: "√(x+1) = 2" },
            { name: "Ko'rsatkichli", formula: "\\(a^{f(x)} = b\\)", description: "Daraja ko'rsatkichida noma'lum", example: "2ˣ = 8" },
            { name: "Logarifmik", formula: "\\(\\log_a f(x) = b\\)", description: "Logarifm ostida noma'lum", example: "log x = 2" }
        ]
    },
    tengsizliklar: {
        title: "Tengsizliklar",
        content: [
            { name: "Chiziqli tengsizlik", formula: "\\(ax + b > 0\\)", description: "Birinchi darajali tengsizlik", example: "2x - 3 > 0" },
            { name: "Kvadrat tengsizlik", formula: "\\(ax^2 + bx + c > 0\\)", description: "Ikkinchi darajali tengsizlik", example: "x² - 4 > 0" },
            { name: "Ratsional tengsizlik", formula: "\\(\\frac{P(x)}{Q(x)} > 0\\)", description: "Kasr ko'rinishidagi tengsizlik", example: "(x-1)/(x+2) > 0" },
            { name: "Modul tengsizligi", formula: "\\(|x| < a \\Leftrightarrow -a < x < a\\)", description: "Modul bilan tengsizlik", example: "|x| < 3 ⇒ -3 < x < 3" },
            { name: "Modulli katta", formula: "\\(|x| > a \\Leftrightarrow x < -a \\text{ yoki } x > a\\)", description: "Modul katta", example: "|x| > 2" }
        ]
    },
    ehtimollik: {
        title: "Ehtimollik nazariyasi",
        content: [
            { name: "Klassik ehtimollik", formula: "\\(P(A) = \\frac{m}{n}\\)", description: "Qulayliklaryekli holatlarga", example: "Toshda 6 yoq, P(5) = 1/6" },
            { name: "Qarama-qarshi hodisa", formula: "\\(P(\\overline{A}) = 1 - P(A)\\)", description: "Qarama-qarshi hodisa ehtimoli", example: "P(A)=0.3, P(Ā)=0.7" },
            { name: "Qo'shish teoremasi", formula: "\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)", description: "Birlashma ehtimoli", example: "Umumiy bo'lsa ayiriladi" },
            { name: "Ko'paytirish teoremasi", formula: "\\(P(A \\cap B) = P(A) \\cdot P(B)\\)", description: "Bog'liq bo'lmagan hodisalar", example: "Ikki tosh tashlash" },
            { name: "Shartli ehtimollik", formula: "\\(P(A|B) = \\frac{P(A \\cap B)}{P(B)}\\)", description: "B ro'y bergan shartda A", example: "Kartadan keyin karta" },
            { name: "Factorial", formula: "\\(n! = 1 \\times 2 \\times 3 \\times ... \\times n\\)", description: "Faktorial ta'rifi", example: "5! = 120" },
            { name: "O'rinlashtirishlar", formula: "\\(A_n^k = \\frac{n!}{(n-k)!}\\)", description: "Tartibli tanlov", example: "A₅² = 20" },
            { name: "Birikmalar", formula: "\\(C_n^k = \\frac{n!}{k!(n-k)!}\\)", description: "Tartibsiz tanlov", example: "C₅² = 10" }
        ]
    },
    statistika: {
        title: "Statistika",
        content: [
            { name: "O'rtacha arifmetik", formula: "\\(\\bar{x} = \\frac{\\sum x_i}{n}\\)", description: "Qiymatlarning o'rtachasi", example: "(2+4+6)/3 = 4" },
            { name: "Dispersiya", formula: "\\(D(X) = \\frac{\\sum(x_i - \\bar{x})^2}{n}\\)", description: "Tarqalish o'lchovi", example: "Ma'lumotlar tarqoqligi" },
            { name: "Standart og'ish", formula: "\\(\\sigma = \\sqrt{D(X)}\\)", description: "O'rtacha kvadratik og'ish", example: "Dispersiya ildizi" },
            { name: "Moda", formula: "\\(Mo\\) - eng ko'p takrorlanuvchi", description: "Eng ko'p uchraydigan qiymat", example: "2,3,3,3,5 → Mo=3" },
            { name: "Mediana", formula: "\\(Me\\) - o'rtadagi qiymat", description: "Tartiblangandagi o'rta", example: "1,3,5,7,9 → Me=5" },
            { name: "Variatsiya", formula: "\\(R = x_{max} - x_{min}\\)", description: "Eng katta va kichik ayirmasi", example: "Max=10, Min=2, R=8" }
        ]
    }
});

// 10-11 sinflar
formulas[10] = {
    title: "10-sinf Matematika",
    sections: [
        {
            name: "Trigonometriya (kengaytirilgan)",
            formulas: [
                { name: "Yig'indi sinusi", formula: "\\(\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta\\)", description: "Ikki burchak yig'indisining sinusi", example: "sin 75° = sin(45°+30°)" },
                { name: "Ayirma sinusi", formula: "\\(\\sin(\\alpha - \\beta) = \\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta\\)", description: "Ikki burchak ayirmasining sinusi", example: "sin 15° = sin(45°-30°)" },
                { name: "Yig'indi kosinusi", formula: "\\(\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta\\)", description: "Ikki burchak yig'indisining kosinusi", example: "cos(α+β)" },
                { name: "Ayirma kosinusi", formula: "\\(\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta\\)", description: "Ikki burchak ayirmasining kosinusi", example: "cos(α-β)" },
                { name: "Ikkilangan burchak (sin)", formula: "\\(\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha\\)", description: "Ikkilangan burchak sinusi", example: "sin 60° = 2 sin 30° cos 30°" },
                { name: "Ikkilangan burchak (cos1)", formula: "\\(\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha\\)", description: "Ikkilangan burchak kosinusi (1-usul)", example: "cos 2α" },
                { name: "Ikkilangan burchak (cos2)", formula: "\\(\\cos 2\\alpha = 2\\cos^2\\alpha - 1\\)", description: "Ikkilangan burchak kosinusi (2-usul)", example: "cos 2α" },
                { name: "Ikkilangan burchak (cos3)", formula: "\\(\\cos 2\\alpha = 1 - 2\\sin^2\\alpha\\)", description: "Ikkilangan burchak kosinusi (3-usul)", example: "cos 2α" },
                { name: "Ikkilangan burchak (tan)", formula: "\\(\\tan 2\\alpha = \\frac{2\\tan\\alpha}{1-\\tan^2\\alpha}\\)", description: "Ikkilangan burchak tangensi", example: "tan 2α" },
                { name: "Yarim burchak (sin)", formula: "\\(\\sin\\frac{\\alpha}{2} = \\pm\\sqrt{\\frac{1-\\cos\\alpha}{2}}\\)", description: "Yarim burchak sinusi", example: "sin α/2" },
                { name: "Yarim burchak (cos)", formula: "\\(\\cos\\frac{\\alpha}{2} = \\pm\\sqrt{\\frac{1+\\cos\\alpha}{2}}\\)", description: "Yarim burchak kosinusi", example: "cos α/2" },
                { name: "Yarim burchak (tan)", formula: "\\(\\tan\\frac{\\alpha}{2} = \\frac{\\sin\\alpha}{1+\\cos\\alpha} = \\frac{1-\\cos\\alpha}{\\sin\\alpha}\\)", description: "Yarim burchak tangensi", example: "tan α/2" },
                { name: "Yig'indini ko'paytmaga (sin)", formula: "\\(\\sin\\alpha + \\sin\\beta = 2\\sin\\frac{\\alpha+\\beta}{2}\\cos\\frac{\\alpha-\\beta}{2}\\)", description: "Sinuslar yig'indisi", example: "Formuladan foydalanish" },
                { name: "Ayirmani ko'paytmaga (sin)", formula: "\\(\\sin\\alpha - \\sin\\beta = 2\\cos\\frac{\\alpha+\\beta}{2}\\sin\\frac{\\alpha-\\beta}{2}\\)", description: "Sinuslar ayirmasi", example: "Formuladan foydalanish" },
                { name: "Yig'indini ko'paytmaga (cos)", formula: "\\(\\cos\\alpha + \\cos\\beta = 2\\cos\\frac{\\alpha+\\beta}{2}\\cos\\frac{\\alpha-\\beta}{2}\\)", description: "Kosinuslar yig'indisi", example: "Formuladan foydalanish" },
                { name: "Ayirmani ko'paytmaga (cos)", formula: "\\(\\cos\\alpha - \\cos\\beta = -2\\sin\\frac{\\alpha+\\beta}{2}\\sin\\frac{\\alpha-\\beta}{2}\\)", description: "Kosinuslar ayirmasi", example: "Formuladan foydalanish" },
                { name: "Ko'paytmani yig'indiga (sin×cos)", formula: "\\(\\sin\\alpha\\cos\\beta = \\frac{1}{2}(\\sin(\\alpha+\\beta) + \\sin(\\alpha-\\beta))\\)", description: "Sinus va kosinus ko'paytmasi", example: "Formuladan foydalanish" },
                { name: "Ko'paytmani yig'indiga (sin×sin)", formula: "\\(\\sin\\alpha\\sin\\beta = \\frac{1}{2}(\\cos(\\alpha-\\beta) - \\cos(\\alpha+\\beta))\\)", description: "Sinuslar ko'paytmasi", example: "Formuladan foydalanish" },
                { name: "Ko'paytmani yig'indiga (cos×cos)", formula: "\\(\\cos\\alpha\\cos\\beta = \\frac{1}{2}(\\cos(\\alpha+\\beta) + \\cos(\\alpha-\\beta))\\)", description: "Kosinuslar ko'paytmasi", example: "Formuladan foydalanish" },
                { name: "Universal almashtirish", formula: "\\(\\sin\\alpha = \\frac{2\\tan\\frac{\\alpha}{2}}{1+\\tan^2\\frac{\\alpha}{2}}\\)", description: "Sinus orqali yarim burchak tangentsi", example: "Universal almashtirish" }
            ]
        },
        {
            name: "Logarifmlar va daraja",
            formulas: [
                { name: "Logarifm ta'rifi", formula: "\\(\\log_a b = c \\Leftrightarrow a^c = b\\)", description: "Logarifm asosiy ta'rifi", example: "log₂ 8 = 3" },
                { name: "Ko'paytma logarifmi", formula: "\\(\\log_a(xy) = \\log_a x + \\log_a y\\)", description: "Ko'paytma logarifmi yig'indiga teng", example: "log(6) = log 2 + log 3" },
                { name: "Bo'linma logarifmi", formula: "\\(\\log_a\\frac{x}{y} = \\log_a x - \\log_a y\\)", description: "Bo'linma logarifmi ayirmaga teng", example: "log(x/y)" },
                { name: "Daraja logarifmi", formula: "\\(\\log_a x^n = n\\log_a x\\)", description: "Daraja ko'rsatkichi oldinga chiqadi", example: "log x² = 2 log x" },
                { name: "Asosni o'zgartirish", formula: "\\(\\log_a b = \\frac{\\log_c b}{\\log_c a}\\)", description: "Logarifm asosini o'zgartirish formulasi", example: "log₂ x = (ln x)/(ln 2)" },
                { name: "O'zaro teskari", formula: "\\(\\log_a b \\cdot \\log_b a = 1\\)", description: "O'zaro teskari logarifmlar", example: "log₂ 8 × log₈ 2 = 1" },
                { name: "Daraja asosi", formula: "\\(\\log_{a^n} b = \\frac{1}{n}\\log_a b\\)", description: "Asosi daraja bo'lgan logarifm", example: "log₄ 16 = ½ log₂ 16" },
                { name: "Natural logarifm", formula: "\\(\\ln x = \\log_e x\\)", description: "e asosli logarifm", example: "ln e = 1" },
                { name: "O'nli logarifm", formula: "\\(\\lg x = \\log_{10} x\\)", description: "10 asosli logarifm", example: "lg 100 = 2" },
                { name: "Daraja xossalari", formula: "\\(a^{m+n} = a^m \\cdot a^n\\)", description: "Bir xil asosli darajalarni ko'paytirish", example: "2³ × 2² = 2⁵" }
            ]
        },
        {
            name: "Fazoviy geometriya",
            formulas: [
                { name: "Parallelepiped hajmi", formula: "\\(V = abc\\)", description: "To'g'ri burchakli parallelepiped hajmi", example: "a=3, b=4, c=5, V=60" },
                { name: "Parallelepiped yuzasi", formula: "\\(S = 2(ab + bc + ac)\\)", description: "To'la sirt yuzasi", example: "Barcha yoqlar yuzasi" },
                { name: "Kub hajmi", formula: "\\(V = a^3\\)", description: "Kub hajmi", example: "a=5, V=125" },
                { name: "Kub yuzasi", formula: "\\(S = 6a^2\\)", description: "Kub to'la sirti", example: "a=4, S=96" },
                { name: "Prizma hajmi", formula: "\\(V = S_{asos} \\cdot h\\)", description: "Prizma hajmi", example: "S=20, h=5, V=100" },
                { name: "Piramida hajmi", formula: "\\(V = \\frac{1}{3}S_{asos} \\cdot h\\)", description: "Piramida hajmi", example: "S=30, h=6, V=60" },
                { name: "Silindr hajmi", formula: "\\(V = \\pi r^2 h\\)", description: "Silindr hajmi", example: "r=3, h=5, V=45π" },
                { name: "Silindr yuzasi", formula: "\\(S = 2\\pi r(r + h)\\)", description: "Silindr to'la sirti", example: "r=3, h=5, S=48π" },
                { name: "Konus hajmi", formula: "\\(V = \\frac{1}{3}\\pi r^2 h\\)", description: "Konus hajmi", example: "r=4, h=6, V=32π" },
                { name: "Konus yuzasi", formula: "\\(S = \\pi r(r + l)\\)", description: "Konus to'la sirti (l - yasovchi)", example: "r=3, l=5, S=24π" },
                { name: "Shar hajmi", formula: "\\(V = \\frac{4}{3}\\pi r^3\\)", description: "Shar hajmi", example: "r=3, V=36π" },
                { name: "Shar yuzasi", formula: "\\(S = 4\\pi r^2\\)", description: "Shar sirti yuzasi", example: "r=5, S=100π" },
                { name: "Shar kesimi yuzasi", formula: "\\(S = \\pi r^2\\)", description: "Shar kesimining maksimal yuzasi", example: "r=4, S=16π" }
            ]
        },
        {
            name: "Hosilalar (kirish)",
            formulas: [
                { name: "Hosila ta'rifi", formula: "\\(f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x) - f(x)}{\\Delta x}\\)", description: "Hosilaning ta'rifi", example: "Limitdan foydalanish" },
                { name: "Doimiy hosila", formula: "\\((c)' = 0\\)", description: "Doimiy son hosilasi nolga teng", example: "(5)' = 0" },
                { name: "x hosila", formula: "\\((x)' = 1\\)", description: "x ning hosilasi birga teng", example: "Oddiy hosila" },
                { name: "Daraja hosilasi", formula: "\\((x^n)' = nx^{n-1}\\)", description: "Daraja funksiya hosilasi", example: "(x³)' = 3x²" },
                { name: "Yig'indi hosilasi", formula: "\\((u + v)' = u' + v'\\)", description: "Yig'indining hosilasi", example: "(x²+x³)' = 2x+3x²" },
                { name: "Ko'paytma hosilasi", formula: "\\((uv)' = u'v + uv'\\)", description: "Ko'paytmaning hosilasi", example: "(x·sin x)' = sin x + x·cos x" },
                { name: "Bo'linma hosilasi", formula: "\\(\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}\\)", description: "Bo'linmaning hosilasi", example: "(x/sin x)'" },
                { name: "Murakkab funksiya", formula: "\\((f(g(x)))' = f'(g(x)) \\cdot g'(x)\\)", description: "Zanjir qoidasi", example: "(sin(x²))' = cos(x²)·2x" }
            ]
        },
        {
            name: "Kombinatorika",
            formulas: [
                { name: "Faktorial", formula: "\\(n! = 1 \\times 2 \\times 3 \\times ... \\times n\\)", description: "n faktorial", example: "5! = 120" },
                { name: "0 faktorial", formula: "\\(0! = 1\\)", description: "Nol faktorial birga teng", example: "Ta'rif bo'yicha" },
                { name: "O'rin almashtirishlar", formula: "\\(P_n = n!\\)", description: "n ta elementning o'rin almashtirishlari soni", example: "P₃ = 6" },
                { name: "O'rinlashtirishlar", formula: "\\(A_n^k = \\frac{n!}{(n-k)!}\\)", description: "n ta elementdan k talik o'rinlashtirishlar", example: "A₅² = 20" },
                { name: "Birikmalar", formula: "\\(C_n^k = \\frac{n!}{k!(n-k)!}\\)", description: "n ta elementdan k talik birikmalar", example: "C₅² = 10" },
                { name: "Birikmalar xossasi", formula: "\\(C_n^k = C_n^{n-k}\\)", description: "Simmetrik xossa", example: "C₅² = C₅³ = 10" },
                { name: "Paskal formulasi", formula: "\\(C_n^k = C_{n-1}^{k-1} + C_{n-1}^k\\)", description: "Paskal uchburchagi", example: "C₅³ = C₄² + C₄³" },
                { name: "Binom formulasi", formula: "\\((a+b)^n = \\sum_{k=0}^{n} C_n^k a^{n-k} b^k\\)", description: "Nyuton binomi", example: "(a+b)³ = a³+3a²b+3ab²+b³" }
            ]
        }
    ]
};

formulas[11] = {
    title: "11-sinf Matematika",
    sections: [
        {
            name: "Hosilalar",
            formulas: [
                { name: "Doimiy hosila", formula: "\\((c)' = 0\\)", description: "Doimiy son hosilasi", example: "(7)' = 0" },
                { name: "Daraja hosilasi", formula: "\\((x^n)' = nx^{n-1}\\)", description: "Daraja funksiya hosilasi", example: "(x⁵)' = 5x⁴" },
                { name: "Ildiz hosilasi", formula: "\\((\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}\\)", description: "Kvadrat ildiz hosilasi", example: "x > 0" },
                { name: "1/x hosilasi", formula: "\\(\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}\\)", description: "1/x funksiya hosilasi", example: "x ≠ 0" },
                { name: "Sinus hosilasi", formula: "\\((\\sin x)' = \\cos x\\)", description: "Sinus funksiya hosilasi", example: "Trigonometrik hosila" },
                { name: "Kosinus hosilasi", formula: "\\((\\cos x)' = -\\sin x\\)", description: "Kosinus funksiya hosilasi", example: "Manfiy sinus" },
                { name: "Tangens hosilasi", formula: "\\((\\tan x)' = \\frac{1}{\\cos^2 x}\\)", description: "Tangens funksiya hosilasi", example: "Kosinus kvadrati" },
                { name: "Kotangens hosilasi", formula: "\\((\\cot x)' = -\\frac{1}{\\sin^2 x}\\)", description: "Kotangens funksiya hosilasi", example: "Manfiy sinus kvadrati" },
                { name: "Eksponenta hosilasi", formula: "\\((e^x)' = e^x\\)", description: "Eksponenta o'zining hosilasiga teng", example: "Unikal xossa" },
                { name: "a^x hosilasi", formula: "\\((a^x)' = a^x \\ln a\\)", description: "Ko'rsatkichli funksiya hosilasi", example: "(2ˣ)' = 2ˣ ln 2" },
                { name: "ln x hosilasi", formula: "\\((\\ln x)' = \\frac{1}{x}\\)", description: "Natural logarifm hosilasi", example: "x > 0" },
                { name: "log_a x hosilasi", formula: "\\((\\log_a x)' = \\frac{1}{x \\ln a}\\)", description: "Logarifm hosilasi", example: "x > 0" },
                { name: "Yig'indi hosilasi", formula: "\\((u + v)' = u' + v'\\)", description: "Hadlar alohida hosilaga olinadi", example: "(x²+sin x)' = 2x+cos x" },
                { name: "Ayirma hosilasi", formula: "\\((u - v)' = u' - v'\\)", description: "Ayirmaning hosilasi", example: "(x³-cos x)' = 3x²+sin x" },
                { name: "Doimiy ko'paytuvchi", formula: "\\((cu)' = cu'\\)", description: "Doimiy ko'paytuvchi qavs oldiga", example: "(5x²)' = 10x" },
                { name: "Ko'paytma hosilasi", formula: "\\((uv)' = u'v + uv'\\)", description: "Leibniz qoidasi", example: "(x·sin x)' = sin x + x·cos x" },
                { name: "Bo'linma hosilasi", formula: "\\(\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}\\)", description: "Kasr hosilasi", example: "v ≠ 0" },
                { name: "Murakkab funksiya", formula: "\\((f(g(x)))' = f'(g(x)) \\cdot g'(x)\\)", description: "Zanjir qoidasi", example: "(sin(3x))' = 3cos(3x)" },
                { name: "Teskari funksiya", formula: "\\((f^{-1})'(x) = \\frac{1}{f'(f^{-1}(x))}\\)", description: "Teskari funksiya hosilasi", example: "Maxsus holat" },
                { name: "Ekstremum sharti", formula: "\\(f'(x_0) = 0\\)", description: "Ekstremum nuqtasida hosila nol", example: "Zaruriy shart" },
                { name: "O'sish sharti", formula: "\\(f'(x) > 0\\)", description: "Funksiya o'suvchi bo'lsa", example: "Musbat hosila" },
                { name: "Kamayish sharti", formula: "\\(f'(x) < 0\\)", description: "Funksiya kamayuvchi bo'lsa", example: "Manfiy hosila" }
            ]
        },
        {
            name: "Integrallar",
            formulas: [
                { name: "Aniqmas integral", formula: "\\(\\int f(x)dx = F(x) + C\\)", description: "F'(x) = f(x)", example: "Hosilasi f(x) bo'lgan funksiya" },
                { name: "Doimiy integrali", formula: "\\(\\int c\\,dx = cx + C\\)", description: "Doimiy integral", example: "∫5 dx = 5x + C" },
                { name: "Daraja integrali", formula: "\\(\\int x^n dx = \\frac{x^{n+1}}{n+1} + C\\)", description: "Daraja funksiya integrali (n≠-1)", example: "∫x² dx = x³/3 + C" },
                { name: "1/x integrali", formula: "\\(\\int \\frac{1}{x}dx = \\ln |x| + C\\)", description: "1/x funksiya integrali", example: "x ≠ 0" },
                { name: "Eksponenta integrali", formula: "\\(\\int e^x dx = e^x + C\\)", description: "Eksponenta integrali", example: "O'ziga teng" },
                { name: "a^x integrali", formula: "\\(\\int a^x dx = \\frac{a^x}{\\ln a} + C\\)", description: "Ko'rsatkichli funksiya integrali", example: "a > 0, a ≠ 1" },
                { name: "Sinus integrali", formula: "\\(\\int \\sin x\\, dx = -\\cos x + C\\)", description: "Sinus integrali", example: "Manfiy kosinus" },
                { name: "Kosinus integrali", formula: "\\(\\int \\cos x\\, dx = \\sin x + C\\)", description: "Kosinus integrali", example: "Sinus" },
                { name: "1/cos² integrali", formula: "\\(\\int \\frac{1}{\\cos^2 x}dx = \\tan x + C\\)", description: "Tangens kelib chiqadi", example: "Trigonometrik integral" },
                { name: "1/sin² integrali", formula: "\\(\\int \\frac{1}{\\sin^2 x}dx = -\\cot x + C\\)", description: "Kotangens kelib chiqadi", example: "Trigonometrik integral" },
                { name: "Yig'indi integrali", formula: "\\(\\int (f + g)dx = \\int f\\,dx + \\int g\\,dx\\)", description: "Hadlar alohida integrallanadi", example: "∫(x+sin x)dx" },
                { name: "Doimiy ko'paytuvchi", formula: "\\(\\int cf(x)dx = c\\int f(x)dx\\)", description: "Doimiy integral belgisidan tashqariga", example: "∫3x dx = 3∫x dx" },
                { name: "Newton-Leibniz", formula: "\\(\\int_a^b f(x)dx = F(b) - F(a)\\)", description: "Aniq integral hisoblash", example: "∫₀¹ x dx = 1/2" },
                { name: "Yuza", formula: "\\(S = \\int_a^b f(x)dx\\)", description: "Egri chiziq ostidagi yuza", example: "f(x) ≥ 0" },
                { name: "Hajm (aylanish)", formula: "\\(V = \\pi\\int_a^b f^2(x)dx\\)", description: "Aylanish jismining hajmi", example: "Ox o'qi atrofida" },
                { name: "Integral xossalari", formula: "\\(\\int_a^b f = -\\int_b^a f\\)", description: "Chegaralarni almashtirish", example: "Ishorasi o'zgaradi" }
            ]
        },
        {
            name: "Kompleks sonlar",
            formulas: [
                { name: "Kompleks son", formula: "\\(z = a + bi\\)", description: "a - haqiqiy qism, b - mavhum qism", example: "3 + 4i" },
                { name: "Mavhum birlik", formula: "\\(i^2 = -1\\)", description: "i ning kvadrati -1 ga teng", example: "i = √(-1)" },
                { name: "Qo'shma son", formula: "\\(\\overline{z} = a - bi\\)", description: "Mavhum qismning ishorasi teskari", example: "z̄ = 3 - 4i" },
                { name: "Modul", formula: "\\(|z| = \\sqrt{a^2 + b^2}\\)", description: "Kompleks sonning uzunligi", example: "|3+4i| = 5" },
                { name: "Qo'shish", formula: "\\((a+bi) + (c+di) = (a+c) + (b+d)i\\)", description: "Haqiqiy va mavhum qismlarni qo'shish", example: "(1+2i)+(3+4i)=4+6i" },
                { name: "Ko'paytirish", formula: "\\((a+bi)(c+di) = (ac-bd) + (ad+bc)i\\)", description: "Qavs ochib, i²=-1", example: "(1+i)(2+3i)=-1+5i" },
                { name: "Bo'lish", formula: "\\(\\frac{a+bi}{c+di} = \\frac{(a+bi)(c-di)}{c^2+d^2}\\)", description: "Qo'shma songa ko'paytirish", example: "Maxrajni haqiqiylashtirish" },
                { name: "Trigonometrik shakl", formula: "\\(z = r(\\cos\\varphi + i\\sin\\varphi)\\)", description: "r - modul, φ - argument", example: "r=5, φ=53°" },
                { name: "Eyler formulasi", formula: "\\(e^{i\\varphi} = \\cos\\varphi + i\\sin\\varphi\\)", description: "Kompleks eksponenta", example: "e^{iπ} = -1" }
            ]
        },
        {
            name: "Limitlar",
            formulas: [
                { name: "Limit ta'rifi", formula: "\\(\\lim_{x \\to a} f(x) = L\\)", description: "x a ga intilganda f(x) L ga intiladi", example: "Limitning ta'rifi" },
                { name: "Yig'indi limiti", formula: "\\(\\lim(f + g) = \\lim f + \\lim g\\)", description: "Limitlar yig'indisi", example: "Xossa" },
                { name: "Ko'paytma limiti", formula: "\\(\\lim(f \\cdot g) = \\lim f \\cdot \\lim g\\)", description: "Limitlar ko'paytmasi", example: "Xossa" },
                { name: "Bo'linma limiti", formula: "\\(\\lim\\frac{f}{g} = \\frac{\\lim f}{\\lim g}\\)", description: "Limitlar nisbati (lim g ≠ 0)", example: "Xossa" },
                { name: "Birinchi ajoyib limit", formula: "\\(\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1\\)", description: "Asosiy trigonometrik limit", example: "Muhim limit" },
                { name: "Ikkinchi ajoyib limit", formula: "\\(\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e\\)", description: "Eyler soni ta'rifi", example: "e ≈ 2.718" },
                { name: "Cheksizlikka limit", formula: "\\(\\lim_{x \\to \\infty} \\frac{1}{x} = 0\\)", description: "1/x nolga intiladi", example: "x → ∞" },
                { name: "Uzluksizlik", formula: "\\(\\lim_{x \\to a} f(x) = f(a)\\)", description: "Funksiya a nuqtada uzluksiz", example: "Limit qiymatga teng" }
            ]
        },
        {
            name: "Ehtimollik va statistika",
            formulas: [
                { name: "Klassik ehtimollik", formula: "\\(P(A) = \\frac{m}{n}\\)", description: "Qulay/Barcha hollar", example: "Tosh tashlash" },
                { name: "Geometrik ehtimollik", formula: "\\(P(A) = \\frac{S_A}{S}\\)", description: "Yuzalar nisbati", example: "Nuqta tasodifiy tushadi" },
                { name: "Shartli ehtimollik", formula: "\\(P(A|B) = \\frac{P(A \\cap B)}{P(B)}\\)", description: "B ro'y bergandagi A ehtimoli", example: "Shartli hodisa" },
                { name: "Mustaqillik", formula: "\\(P(A \\cap B) = P(A) \\cdot P(B)\\)", description: "Mustaqil hodisalar", example: "Ikki tosh" },
                { name: "To'la ehtimollik", formula: "\\(P(A) = \\sum P(H_i) \\cdot P(A|H_i)\\)", description: "To'la ehtimollik formulasi", example: "Gipotezalar orqali" },
                { name: "Bayes formulasi", formula: "\\(P(H_i|A) = \\frac{P(H_i) \\cdot P(A|H_i)}{\\sum P(H_j) \\cdot P(A|H_j)}\\)", description: "Bayes teoremasi", example: "Gipotezani aniqlash" },
                { name: "Bernulli sxemasi", formula: "\\(P_n(k) = C_n^k p^k (1-p)^{n-k}\\)", description: "k marta muvaffaqiyat", example: "n ta bog'liq bo'lmagan sinovda" },
                { name: "Kutilayotgan qiymat", formula: "\\(M(X) = \\sum x_i p_i\\)", description: "Matematik kutilma", example: "O'rtacha qiymat" },
                { name: "Dispersiya", formula: "\\(D(X) = M(X^2) - (M(X))^2\\)", description: "Tarqalish o'lchovi", example: "Variaciya" },
                { name: "Standart og'ish", formula: "\\(\\sigma = \\sqrt{D(X)}\\)", description: "O'rtacha kvadratik og'ish", example: "Dispersiya ildizi" },
                { name: "Korrelyatsiya", formula: "\\(r = \\frac{cov(X,Y)}{\\sigma_X \\sigma_Y}\\)", description: "Bog'liqlik koeffitsiyenti", example: "-1 ≤ r ≤ 1" }
            ]
        }
    ]
};
