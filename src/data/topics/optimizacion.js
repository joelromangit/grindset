export default {
  name: "Optimizacion",
  order: 5,
  status: "locked",
  theoryBlocks: [
    {
      id: "opt-1",
      status: "available",
      title: "Planteamiento de problemas de optimizacion",
      content: "Los problemas de optimizacion consisten en encontrar el valor maximo o minimo de una magnitud (area, volumen, coste, beneficio...) sujeta a ciertas restricciones. Son uno de los ejercicios estrella de la PAU.\n\nEsquema general para resolver un problema de optimizacion:\n\n1. Leer el enunciado e identificar:\n   - La magnitud a optimizar (funcion objetivo).\n   - Las restricciones o condiciones del problema.\n   - Las variables involucradas.\n\n2. Expresar la funcion objetivo en funcion de UNA sola variable. Para ello, usar la restriccion para eliminar una variable.\n\n3. Determinar el dominio de la funcion (valores fisicamente validos).\n\n4. Derivar e igualar a cero: $f'(x) = 0$. Resolver para hallar los puntos criticos.\n\n5. Comprobar que es maximo o minimo (con la segunda derivada o analizando el signo de la primera).\n\n6. Calcular el valor optimo y responder a lo que pide el problema.\n\nEjemplo sencillo: De todos los rectangulos de perimetro 20 cm, hallar el de area maxima.\n\nSea $x$ la base y $y$ la altura. Restriccion: $2x + 2y = 20$, es decir $y = 10 - x$.\n\nFuncion objetivo: $A(x) = x \\cdot y = x(10 - x) = 10x - x^2$.\n\nDominio: $x > 0$ y $y > 0$, asi que $0 < x < 10$.\n\n$A'(x) = 10 - 2x = 0 \\Rightarrow x = 5$.\n$A''(x) = -2 < 0$: es un maximo.\n\nPara $x = 5$: $y = 5$, $A = 25$ cm$^2$. El rectangulo de area maxima es un cuadrado de lado 5 cm.\n\nErrores frecuentes:\n- Optimizar con dos variables (hay que reducir a una usando la restriccion).\n- Olvidar comprobar si es maximo o minimo.\n- No verificar que la solucion pertenece al dominio fisico.",
      exercises: [
        {
          id: "opt-1-1",
          type: "auto",
          question: "El primer paso en un problema de optimizacion es:",
          autoConfig: { type: "multiple_choice", choices: ["Derivar", "Identificar la funcion objetivo y las restricciones", "Hacer una tabla de valores", "Dibujar la grafica"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-1-2",
          type: "auto",
          question: "La funcion objetivo debe quedar expresada en funcion de:",
          autoConfig: { type: "multiple_choice", choices: ["Dos variables", "Una sola variable", "Tres variables", "Ninguna variable"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-1-3",
          type: "auto",
          question: "Para confirmar que un punto critico es un maximo, se puede usar:",
          autoConfig: { type: "multiple_choice", choices: ["El limite", "La segunda derivada ($f'' < 0$ indica maximo)", "La integral", "El determinante"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-1-4",
          type: "auto",
          question: "De todos los rectangulos de perimetro 12, el de area maxima tiene lados:",
          autoConfig: { type: "multiple_choice", choices: ["$2$ y $4$", "$1$ y $5$", "$3$ y $3$", "$2{,}5$ y $3{,}5$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-1-5",
          type: "auto",
          question: "Si $f'(c) = 0$ y $f''(c) = -5$, en $x = c$ hay:",
          autoConfig: { type: "fill_blank", expectedAnswer: "maximo" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-1-6",
          type: "auto",
          question: "La restriccion del problema sirve para:",
          autoConfig: { type: "fill_blank", expectedAnswer: "eliminar una variable" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-1-7",
          type: "manual",
          question: "Se quiere cercar un terreno rectangular de 200 m$^2$ con la menor cantidad de valla posible. Plantea el problema: identifica variables, restriccion, funcion objetivo. No resuelvas todavia, solo plantea.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-1-8",
          type: "manual",
          question: "Descomponer el numero 10 en dos sumandos positivos tales que su producto sea maximo. Plantea y resuelve completamente.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-1-9",
          type: "manual",
          question: "Descomponer 20 en dos sumandos positivos $x$ e $y$ tales que $x^2 + y^2$ sea minimo. Plantea, reduce a una variable y resuelve.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-1-10",
          type: "manual",
          question: "De todos los numeros positivos cuya suma con su inverso es minima, halla dicho numero. Es decir, minimiza $f(x) = x + \\dfrac{1}{x}$ para $x > 0$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "opt-2",
      status: "locked",
      title: "Optimizacion con funciones polinomicas",
      content: "Muchos problemas de optimizacion llevan a funciones polinomicas como funcion objetivo. Son los mas directos de resolver.\n\nEjemplo 1: Se lanza una pelota hacia arriba y su altura es $h(t) = -5t^2 + 20t + 1$ (en metros, $t$ en segundos). Hallar la altura maxima y cuando se alcanza.\n\n$h'(t) = -10t + 20 = 0 \\Rightarrow t = 2$ s.\n$h''(t) = -10 < 0$: es un maximo.\n$h(2) = -5(4) + 40 + 1 = 21$ m.\n\nLa altura maxima es 21 m y se alcanza a los 2 segundos.\n\nEjemplo 2: Se quiere fabricar una caja sin tapa a partir de una lamina cuadrada de 12 cm de lado, recortando cuadrados iguales de lado $x$ en cada esquina y doblando. Hallar $x$ para que el volumen sea maximo.\n\nLa base sera de $(12 - 2x) \\times (12 - 2x)$ y la altura sera $x$.\n$V(x) = x(12 - 2x)^2 = x(144 - 48x + 4x^2) = 4x^3 - 48x^2 + 144x$\n\nDominio: $0 < x < 6$.\n\n$V'(x) = 12x^2 - 96x + 144 = 12(x^2 - 8x + 12) = 12(x - 2)(x - 6)$.\n\nPuntos criticos: $x = 2$ (esta en el dominio) y $x = 6$ (frontera, no valido).\n\n$V''(x) = 24x - 96$. $V''(2) = 48 - 96 = -48 < 0$: maximo.\n\n$V(2) = 2(12 - 4)^2 = 2 \\cdot 64 = 128$ cm$^3$.\n\nEjemplo 3: Hallar dos numeros positivos cuya suma es $S$ y cuyo producto es maximo.\n\nSean $x$ e $y$ con $x + y = S$, luego $y = S - x$.\n$P(x) = x(S - x) = Sx - x^2$.\n$P'(x) = S - 2x = 0 \\Rightarrow x = \\dfrac{S}{2}$.\n$P''(x) = -2 < 0$: maximo.\n\nAmbos numeros son iguales: $x = y = \\dfrac{S}{2}$. Este resultado aparece frecuentemente.",
      exercises: [
        {
          id: "opt-2-1",
          type: "auto",
          question: "La altura maxima de $h(t) = -4t^2 + 16t + 5$ se alcanza en $t =$:",
          autoConfig: { type: "multiple_choice", choices: ["$t = 1$", "$t = 2$", "$t = 4$", "$t = 8$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-2-2",
          type: "auto",
          question: "Si recortamos cuadrados de lado $x$ de una lamina de $10 \\times 10$ cm, la funcion volumen tiene dominio:",
          autoConfig: { type: "multiple_choice", choices: ["$0 < x < 5$", "$0 < x < 10$", "$0 \\leq x \\leq 5$", "$x > 0$"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-2-3",
          type: "auto",
          question: "Dos numeros positivos cuya suma es 8 y cuyo producto es maximo son:",
          autoConfig: { type: "multiple_choice", choices: ["$2$ y $6$", "$3$ y $5$", "$4$ y $4$", "$1$ y $7$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-2-4",
          type: "auto",
          question: "La altura maxima de $h(t) = -4t^2 + 16t + 5$ vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "21" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-2-5",
          type: "auto",
          question: "Si $V(x) = x(8-2x)^2$ para una caja, $V'(x) = 0$ en $x = \\dfrac{4}{3}$ y $x =$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "4" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-2-6",
          type: "manual",
          question: "De una lamina rectangular de 20 cm por 14 cm se recortan cuadrados de lado $x$ en cada esquina para hacer una caja sin tapa. Halla $x$ para que el volumen sea maximo.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-2-7",
          type: "manual",
          question: "La trayectoria de un proyectil es $y(x) = -\\dfrac{x^2}{50} + 2x$ donde $x$ es la distancia horizontal. Halla la altura maxima y el alcance (donde $y = 0$ de nuevo).",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-2-8",
          type: "manual",
          question: "Descomponer 30 en dos sumandos positivos $a$ y $b$ de modo que $a^2 \\cdot b$ sea maximo.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-2-9",
          type: "manual",
          question: "Se quiere vallar un campo rectangular junto a un rio (el lado del rio no necesita valla). Si se dispone de 100 m de valla, halla las dimensiones que maximizan el area.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-2-10",
          type: "manual",
          question: "Un granjero quiere dividir un campo rectangular en dos partes iguales con una valla interior paralela a uno de los lados. Si dispone de 120 m de valla en total, halla las dimensiones que maximizan el area total.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "opt-3",
      status: "locked",
      title: "Optimizacion geometrica: areas y volumenes",
      content: "Los problemas geometricos de optimizacion son clasicos de PAU. Involucran figuras geometricas con restricciones sobre perimetro, area o volumen.\n\nFormulas utiles:\n- Area del circulo: $A = \\pi r^2$. Perimetro: $P = 2\\pi r$.\n- Area del triangulo equilatero de lado $a$: $A = \\dfrac{a^2 \\sqrt{3}}{4}$.\n- Volumen del cilindro: $V = \\pi r^2 h$. Area lateral: $A_L = 2\\pi r h$. Area total: $A_T = 2\\pi r h + 2\\pi r^2$.\n- Volumen del cono: $V = \\dfrac{1}{3} \\pi r^2 h$.\n- Volumen de la esfera: $V = \\dfrac{4}{3} \\pi r^3$. Area: $A = 4\\pi r^2$.\n\nEjemplo 1 (clasico PAU): Hallar las dimensiones del cilindro de volumen 1000 cm$^3$ que tiene menor area total.\n\nRestricccion: $V = \\pi r^2 h = 1000$, luego $h = \\dfrac{1000}{\\pi r^2}$.\n\nFuncion objetivo: $A(r) = 2\\pi r h + 2\\pi r^2 = 2\\pi r \\cdot \\dfrac{1000}{\\pi r^2} + 2\\pi r^2 = \\dfrac{2000}{r} + 2\\pi r^2$.\n\nDominio: $r > 0$.\n\n$A'(r) = -\\dfrac{2000}{r^2} + 4\\pi r = 0 \\Rightarrow 4\\pi r = \\dfrac{2000}{r^2} \\Rightarrow r^3 = \\dfrac{2000}{4\\pi} = \\dfrac{500}{\\pi}$.\n\n$r = \\left(\\dfrac{500}{\\pi}\\right)^{1/3} \\approx 5{,}42$ cm.\n\n$h = \\dfrac{1000}{\\pi r^2} = \\dfrac{1000}{\\pi \\cdot (500/\\pi)^{2/3}}$. Se puede verificar que $h = 2r$.\n\n$A''(r) = \\dfrac{4000}{r^3} + 4\\pi > 0$: es un minimo.\n\nResultado notable: el cilindro de menor area para un volumen dado tiene $h = 2r$ (la altura es igual al diametro).\n\nEjemplo 2: Rectangulo de area maxima inscrito en un semicirculo de radio $R$.\n\nSea $x$ la mitad de la base y $y$ la altura. Restriccion: $x^2 + y^2 = R^2$ (el vertice esta en el semicirculo), asi que $y = \\sqrt{R^2 - x^2}$.\n\nArea: $A(x) = 2x \\cdot y = 2x\\sqrt{R^2 - x^2}$.\n\nDerivando e igualando a cero se obtiene $x = \\dfrac{R}{\\sqrt{2}}$, $y = \\dfrac{R}{\\sqrt{2}}$, $A_{max} = R^2$.",
      exercises: [
        {
          id: "opt-3-1",
          type: "auto",
          question: "El cilindro de menor area total para un volumen dado cumple:",
          autoConfig: { type: "multiple_choice", choices: ["$h = r$", "$h = 2r$", "$h = 3r$", "$h = \\pi r$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-3-2",
          type: "auto",
          question: "El area total de un cilindro de radio $r$ y altura $h$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$\\pi r^2 h$", "$2\\pi r h$", "$2\\pi r h + 2\\pi r^2$", "$2\\pi r^2 h$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-3-3",
          type: "auto",
          question: "Para inscribir un rectangulo en un semicirculo de radio $R$, la restriccion geometrica es:",
          autoConfig: { type: "multiple_choice", choices: ["$x + y = R$", "$xy = R^2$", "$x^2 + y^2 = R^2$", "$2x + 2y = 2\\pi R$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-3-4",
          type: "auto",
          question: "El volumen de un cono de radio $r$ y altura $h$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$\\pi r^2 h$", "$\\dfrac{1}{3} \\pi r^2 h$", "$\\dfrac{4}{3} \\pi r^3$", "$2\\pi r h$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-3-5",
          type: "auto",
          question: "Si un cilindro tiene $V = 500\\pi$ cm$^3$ y $h = 2r$, entonces $r =$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "5" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-3-6",
          type: "auto",
          question: "El area del triangulo equilatero de lado 6 cm es $k\\sqrt{3}$ cm$^2$. El valor de $k$ es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "9" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-3-7",
          type: "manual",
          question: "Se quiere construir una lata cilindrica (con tapa y base) de 330 cm$^3$ usando la menor cantidad de material posible. Halla $r$ y $h$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-3-8",
          type: "manual",
          question: "(Tipo PAU) Se inscribe un rectangulo en la elipse $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$, con lados paralelos a los ejes. Halla las dimensiones del rectangulo de area maxima.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-3-9",
          type: "manual",
          question: "Un triangulo isosceles tiene perimetro 30 cm. Halla la longitud de los lados para que el area sea maxima. Pista: usa la formula de Heron o la altura del triangulo isosceles.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-3-10",
          type: "manual",
          question: "Se quiere fabricar un cono de volumen 100$\\pi$ cm$^3$ con la menor superficie lateral posible. Halla $r$ y $h$. Recuerda: $A_L = \\pi r \\sqrt{r^2 + h^2}$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-3-11",
          type: "manual",
          question: "Se inscribe un cilindro dentro de una esfera de radio $R$. Halla las dimensiones del cilindro de volumen maximo. Restriccion: $r^2 + (h/2)^2 = R^2$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "opt-4",
      status: "locked",
      title: "Optimizacion economica: costes y beneficios",
      content: "La optimizacion economica aparece frecuentemente en PAU Catalunya. Los problemas tipicos involucran funciones de coste, ingreso y beneficio.\n\nConceptos basicos:\n- Coste total: $C(x)$ = coste de producir $x$ unidades.\n- Coste medio: $C_m(x) = \\dfrac{C(x)}{x}$ = coste por unidad.\n- Coste marginal: $C'(x)$ = coste de producir una unidad mas.\n- Ingreso: $I(x) = p(x) \\cdot x$, donde $p(x)$ es el precio por unidad (puede depender de la demanda).\n- Beneficio: $B(x) = I(x) - C(x)$.\n\nMaximizar beneficios: $B'(x) = 0$, es decir $I'(x) = C'(x)$ (ingreso marginal = coste marginal).\n\nMinimizar coste medio: $C_m'(x) = 0$. Se puede demostrar que esto ocurre cuando $C_m(x) = C'(x)$ (coste medio = coste marginal).\n\nEjemplo 1: Una empresa tiene costes $C(x) = x^2 + 20x + 100$ y vende a precio fijo $p = 60$ euros/unidad.\n\n$I(x) = 60x$.\n$B(x) = 60x - x^2 - 20x - 100 = -x^2 + 40x - 100$.\n$B'(x) = -2x + 40 = 0 \\Rightarrow x = 20$.\n$B''(x) = -2 < 0$: maximo.\n$B(20) = -400 + 800 - 100 = 300$ euros.\n\nEjemplo 2: La demanda de un producto es $p = 100 - 2x$ (el precio baja al aumentar la produccion). Coste: $C(x) = x^2 + 20x + 50$.\n\n$I(x) = p \\cdot x = (100 - 2x)x = 100x - 2x^2$.\n$B(x) = 100x - 2x^2 - x^2 - 20x - 50 = -3x^2 + 80x - 50$.\n$B'(x) = -6x + 80 = 0 \\Rightarrow x = \\dfrac{80}{6} = \\dfrac{40}{3} \\approx 13{,}33$.\n\nComo $x$ debe ser entero (unidades), se evalua $B(13)$ y $B(14)$ para decidir.\n\nEjemplo 3: Minimizar el coste medio de $C(x) = x^3 - 6x^2 + 15x + 10$.\n$C_m(x) = x^2 - 6x + 15 + \\dfrac{10}{x}$.\n$C_m'(x) = 2x - 6 - \\dfrac{10}{x^2} = 0$.\nMultiplicando por $x^2$: $2x^3 - 6x^2 - 10 = 0$, $x^3 - 3x^2 - 5 = 0$. Se resuelve numericamente.",
      exercises: [
        {
          id: "opt-4-1",
          type: "auto",
          question: "El beneficio se maximiza cuando:",
          autoConfig: { type: "multiple_choice", choices: ["$C'(x) = 0$", "$I'(x) = C'(x)$", "$I(x) = C(x)$", "$B(x) = 0$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-4-2",
          type: "auto",
          question: "El coste medio $C_m(x)$ se calcula como:",
          autoConfig: { type: "multiple_choice", choices: ["$C(x) \\cdot x$", "$\\dfrac{C(x)}{x}$", "$C'(x)$", "$C(x) - x$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-4-3",
          type: "auto",
          question: "Si $C(x) = 2x^2 + 10x + 50$ y $p = 30$, el beneficio maximo se alcanza en $x =$:",
          autoConfig: { type: "multiple_choice", choices: ["$x = 5$", "$x = 10$", "$x = 15$", "$x = 7{,}5$"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-4-4",
          type: "auto",
          question: "El coste marginal de $C(x) = 3x^2 + 5x + 100$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$3x^2 + 5x + 100$", "$6x + 5$", "$3x + 5$", "$6x^2 + 5$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-4-5",
          type: "auto",
          question: "Si $I(x) = 50x$ y $C(x) = x^2 + 10x + 200$, el beneficio maximo es de:",
          autoConfig: { type: "fill_blank", expectedAnswer: "200" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-4-6",
          type: "auto",
          question: "Si la demanda es $p = 80 - 4x$, el ingreso es $I(x) =$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "80x-4x^2" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-4-7",
          type: "manual",
          question: "Una empresa tiene costes $C(x) = x^3 - 12x^2 + 60x + 50$. Halla la produccion que minimiza el coste medio.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-4-8",
          type: "manual",
          question: "La funcion de demanda es $p = 200 - 5x$ y los costes son $C(x) = 2x^2 + 40x + 100$. Halla la produccion que maximiza el beneficio y el beneficio maximo.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-4-9",
          type: "manual",
          question: "(Tipo PAU) Un fabricante puede vender $x$ unidades a un precio $p = 300 - x$ euros. Los costes de produccion son $C(x) = x^2 + 20x + 500$. Determina la produccion optima, el precio de venta y el beneficio maximo.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-4-10",
          type: "manual",
          question: "El coste de transporte de una mercancia es $C(v) = \\dfrac{v^2}{100} + \\dfrac{400}{v}$ euros, donde $v$ es la velocidad en km/h. Halla la velocidad que minimiza el coste.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "opt-5",
      status: "locked",
      title: "Problemas tipo PAU Catalunya",
      content: "En la PAU Catalunya, los problemas de optimizacion suelen valer entre 2 y 3 puntos y combinan varias habilidades. Aqui repasamos los tipos mas frecuentes con estrategias especificas.\n\nTipo 1: Geometria + restriccion de perimetro o area.\nEjemplo tipico: \"Una ventana tiene forma de rectangulo coronado por un semicirculo. Si el perimetro total es 6 m, halla las dimensiones que maximizan el area.\"\n\nSea $x$ el ancho y $y$ la altura rectangular. El semicirculo tiene radio $r = x/2$.\nPerimetro: $x + 2y + \\pi \\cdot \\dfrac{x}{2} = 6 \\Rightarrow y = \\dfrac{6 - x - \\pi x/2}{2}$.\nArea: $A = xy + \\dfrac{\\pi}{2}\\left(\\dfrac{x}{2}\\right)^2 = xy + \\dfrac{\\pi x^2}{8}$.\n\nSustituir $y$, derivar, resolver.\n\nTipo 2: Optimizacion con exponenciales/logaritmicas.\nMenos frecuente, pero posible. Ejemplo: minimizar $f(x) = x \\cdot e^x$ para $x > 0$.\n\nTipo 3: Optimizacion con funciones racionales.\nEjemplo: \"Hallar el punto de la curva $y = \\dfrac{1}{x}$ ($x > 0$) mas cercano al origen.\"\nDistancia: $d = \\sqrt{x^2 + \\dfrac{1}{x^2}}$. Minimizar $d^2 = x^2 + x^{-2}$ es mas facil.\n$(d^2)' = 2x - 2x^{-3} = 0 \\Rightarrow x^4 = 1 \\Rightarrow x = 1$.\nPunto: $(1, 1)$.\n\nConsejos para la PAU:\n1. Lee el enunciado dos veces. Subraya que se pide optimizar.\n2. Dibuja un esquema si es geometrico.\n3. Nombra las variables y escribe restriccion y funcion objetivo.\n4. Reduce a una variable SIEMPRE antes de derivar.\n5. Comprueba el dominio: a veces la solucion esta en un extremo del intervalo.\n6. Verifica maximo/minimo con $f''$ (es rapido y queda bien).\n7. Responde con unidades y frase completa.\n\nError comun en PAU: encontrar $x$ pero olvidar calcular lo que pide el problema (area, volumen, dimensiones completas...).",
      exercises: [
        {
          id: "opt-5-1",
          type: "auto",
          question: "En un problema tipo PAU, si te piden maximizar el area, la funcion objetivo es:",
          autoConfig: { type: "multiple_choice", choices: ["El perimetro", "El volumen", "El area expresada en una variable", "La derivada del area"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-5-2",
          type: "auto",
          question: "Para minimizar la distancia de un punto a una curva, conviene minimizar:",
          autoConfig: { type: "multiple_choice", choices: ["La distancia directamente", "El cuadrado de la distancia", "La raiz de la distancia", "La inversa de la distancia"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-5-3",
          type: "auto",
          question: "Si la solucion de $f'(x) = 0$ cae fuera del dominio fisico:",
          autoConfig: { type: "multiple_choice", choices: ["Es la solucion igualmente", "Se ignora y se evalua en los extremos del dominio", "Se usa $f''$", "El problema no tiene solucion"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-5-4",
          type: "auto",
          question: "El punto de $y = x^2$ ($x \\geq 0$) mas cercano al punto $(3, 0)$ se obtiene minimizando $d^2 =$:",
          autoConfig: { type: "multiple_choice", choices: ["$(x-3)^2 + x^2$", "$(x-3)^2 + x^4$", "$x^2 + 9$", "$(x^2 - 3)^2$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-5-5",
          type: "auto",
          question: "En la PAU, un problema de optimizacion suele valer entre:",
          autoConfig: { type: "fill_blank", expectedAnswer: "2 y 3 puntos" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-5-6",
          type: "manual",
          question: "(PAU Catalunya 2023 tipo) Una ventana normanda tiene forma de rectangulo coronado por un semicirculo. Si el perimetro total es 10 m, halla las dimensiones que maximizan la superficie total de la ventana.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-5-7",
          type: "manual",
          question: "(PAU Catalunya tipo) Halla el punto de la parabola $y = x^2$ mas cercano al punto $(0, 4)$. Minimiza el cuadrado de la distancia.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-5-8",
          type: "manual",
          question: "(PAU Catalunya tipo) Se quiere construir un deposito cilindrico cerrado de 2000 cm$^3$ de capacidad. El material de las tapas cuesta el doble que el de la pared lateral. Halla las dimensiones que minimizan el coste total del material.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-5-9",
          type: "manual",
          question: "(PAU Catalunya tipo) Un ganadero quiere cercar tres corrales rectangulares iguales y contiguos (compartiendo paredes), usando 240 m de valla. Halla las dimensiones que maximizan el area total.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-5-10",
          type: "manual",
          question: "(PAU Catalunya tipo) Una empresa de mensajeria cobra el envio de paquetes cuya suma de largo + ancho + alto no supere 150 cm. Halla las dimensiones del paquete de base cuadrada que maximiza el volumen.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "opt-5-11",
          type: "manual",
          question: "(PAU Catalunya tipo) Se inscribe un triangulo isosceles de base sobre el eje $X$ en la parabola $y = 4 - x^2$ (vertice superior en el vertice de la parabola). Halla las dimensiones del triangulo de area maxima.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    }
  ]
};
