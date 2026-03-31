export default {
  name: "Funciones",
  order: 3,
  status: "locked",
  theoryBlocks: [
    {
      id: "func-1",
      status: "available",
      title: "Dominio, recorrido, simetria y periodicidad",
      content: "Una funcion $f$ asigna a cada valor de $x$ (variable independiente) un unico valor de $y = f(x)$ (variable dependiente). Entender sus propiedades globales es clave antes de estudiar comportamientos locales.\n\nEl dominio $\\text{Dom}(f)$ es el conjunto de valores de $x$ para los que la funcion esta definida. Las restricciones mas habituales son:\n\n- Denominador distinto de cero: si $f(x) = \\dfrac{p(x)}{q(x)}$, hay que excluir los valores donde $q(x) = 0$.\n- Radicandos no negativos (raices de indice par): si $f(x) = \\sqrt{g(x)}$, se necesita $g(x) \\geq 0$.\n- Logaritmos de argumento positivo: si $f(x) = \\ln(g(x))$, se necesita $g(x) > 0$.\n\nEjemplo: $f(x) = \\dfrac{1}{x^2 - 4}$. El denominador $x^2 - 4 = 0$ cuando $x = \\pm 2$. Por tanto $\\text{Dom}(f) = \\mathbb{R} \\setminus \\{-2, 2\\}$.\n\nEjemplo: $f(x) = \\sqrt{x - 3}$. Se necesita $x - 3 \\geq 0$, es decir $x \\geq 3$. Asi $\\text{Dom}(f) = [3, +\\infty)$.\n\nEl recorrido (o imagen) $\\text{Im}(f)$ es el conjunto de valores que toma $y$. Se determina estudiando la funcion o su grafica.\n\nSimetria par: $f(-x) = f(x)$ para todo $x$ del dominio. La grafica es simetrica respecto al eje $Y$. Ejemplo: $f(x) = x^2$.\n\nSimetria impar: $f(-x) = -f(x)$ para todo $x$ del dominio. La grafica es simetrica respecto al origen. Ejemplo: $f(x) = x^3$.\n\nPeriodicidad: $f(x + T) = f(x)$ para todo $x$, donde $T > 0$ es el periodo. Ejemplo: $\\sin(x)$ tiene periodo $2\\pi$.",
      exercises: [
        {
          id: "func-1-1",
          type: "auto",
          question: "El dominio de $f(x) = \\dfrac{1}{x - 5}$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$\\mathbb{R}$", "$\\mathbb{R} \\setminus \\{5\\}$", "$\\mathbb{R} \\setminus \\{-5\\}$", "$(5, +\\infty)$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-1-2",
          type: "auto",
          question: "El dominio de $f(x) = \\sqrt{2x - 6}$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$[3, +\\infty)$", "$(-\\infty, 3]$", "$\\mathbb{R}$", "$(6, +\\infty)$"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-1-3",
          type: "auto",
          question: "La funcion $f(x) = x^4 + 2x^2$ es:",
          autoConfig: { type: "multiple_choice", choices: ["Impar", "Par", "Ni par ni impar", "Periodica"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-1-4",
          type: "auto",
          question: "La funcion $f(x) = x^3 - x$ es:",
          autoConfig: { type: "multiple_choice", choices: ["Par", "Periodica", "Impar", "Ni par ni impar"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-1-5",
          type: "auto",
          question: "El dominio de $f(x) = \\ln(x + 1)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$\\mathbb{R}$", "$(-1, +\\infty)$", "$[0, +\\infty)$", "$(1, +\\infty)$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-1-6",
          type: "auto",
          question: "El dominio de $f(x) = \\dfrac{\\sqrt{x}}{x - 1}$ es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "[0,1)U(1,+inf)" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-1-7",
          type: "auto",
          question: "El periodo de $f(x) = \\sin(2x)$ es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "pi" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-1-8",
          type: "auto",
          question: "Si $f(-x) = -f(x)$, la funcion es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "impar" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-1-9",
          type: "manual",
          question: "Calcula el dominio de $f(x) = \\dfrac{\\sqrt{x + 2}}{x^2 - 9}$. Indica las restricciones por el radical y por el denominador.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-1-10",
          type: "manual",
          question: "Determina si $f(x) = \\dfrac{x}{x^2 + 1}$ es par, impar o ninguna de las dos. Justifica calculando $f(-x)$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-1-11",
          type: "manual",
          question: "Calcula el dominio y el recorrido de $f(x) = \\sqrt{4 - x^2}$. Ayuda: piensa en que forma geometrica representa su grafica.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-1-12",
          type: "manual",
          question: "Dada $f(x) = \\dfrac{x^2 - 1}{x^2 + 1}$, comprueba si es par, impar o ninguna. Calcula tambien su dominio.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "func-2",
      status: "locked",
      title: "Limites y continuidad",
      content: "El concepto de limite describe el comportamiento de una funcion cuando $x$ se acerca a un valor concreto, sin necesidad de que la funcion este definida en ese punto.\n\nEscribimos $\\lim_{x \\to a} f(x) = L$ si los valores de $f(x)$ se acercan a $L$ cuando $x$ se aproxima a $a$ (por la izquierda y por la derecha). Si los limites laterales no coinciden, el limite no existe.\n\nLimites laterales:\n- $\\lim_{x \\to a^-} f(x)$: limite por la izquierda (valores menores que $a$).\n- $\\lim_{x \\to a^+} f(x)$: limite por la derecha (valores mayores que $a$).\n\nIndeterminaciones: al sustituir directamente $x = a$ pueden aparecer expresiones como $\\dfrac{0}{0}$, $\\dfrac{\\infty}{\\infty}$, $\\infty - \\infty$, $0 \\cdot \\infty$. Hay que resolverlas.\n\nPara $\\dfrac{0}{0}$ con polinomios: factorizar numerador y denominador y simplificar. Ejemplo:\n\n$\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\dfrac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x + 2) = 4$\n\nPara $\\dfrac{\\infty}{\\infty}$ con cociente de polinomios: dividir por la mayor potencia de $x$. Si el grado del numerador es mayor, el limite es $\\pm\\infty$. Si son iguales, el cociente de los coeficientes principales. Si el grado del denominador es mayor, el limite es $0$.\n\nEjemplo: $\\lim_{x \\to \\infty} \\dfrac{3x^2 + 1}{5x^2 - 2} = \\dfrac{3}{5}$\n\nContinuidad: $f$ es continua en $x = a$ si se cumplen tres condiciones:\n1. Existe $f(a)$ (la funcion esta definida).\n2. Existe $\\lim_{x \\to a} f(x)$.\n3. $\\lim_{x \\to a} f(x) = f(a)$.\n\nTipos de discontinuidad:\n- Evitable: existe el limite pero $f(a)$ no esta definida o no coincide con el limite.\n- De salto: los limites laterales existen pero son distintos.\n- Esencial: algun limite lateral es infinito.",
      exercises: [
        {
          id: "func-2-1",
          type: "auto",
          question: "$\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$0$", "$6$", "$3$", "No existe"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-2-2",
          type: "auto",
          question: "$\\lim_{x \\to \\infty} \\dfrac{2x^3 + x}{4x^3 - 1}$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$0$", "$\\infty$", "$\\dfrac{1}{2}$", "$2$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-2-3",
          type: "auto",
          question: "Si $\\lim_{x \\to a^-} f(x) = 3$ y $\\lim_{x \\to a^+} f(x) = 5$, la discontinuidad en $x = a$ es de tipo:",
          autoConfig: { type: "multiple_choice", choices: ["Evitable", "Salto finito", "Esencial", "No hay discontinuidad"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-2-4",
          type: "auto",
          question: "$\\lim_{x \\to \\infty} \\dfrac{5x + 1}{x^2 + 3}$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$5$", "$0$", "$\\infty$", "$\\dfrac{5}{3}$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-2-5",
          type: "auto",
          question: "$\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x^2 - x}$ vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "2" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-2-6",
          type: "auto",
          question: "$\\lim_{x \\to \\infty} \\dfrac{x^2 + 1}{3x^2 - 5}$ vale (escribe la fraccion):",
          autoConfig: { type: "fill_blank", expectedAnswer: "1/3" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-2-7",
          type: "auto",
          question: "Para que $f(x)$ sea continua en $x = a$, se necesitan exactamente:",
          autoConfig: { type: "fill_blank", expectedAnswer: "3" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-2-8",
          type: "manual",
          question: "Calcula $\\lim_{x \\to 2} \\dfrac{x^3 - 8}{x^2 - 4}$. Factoriza numerador y denominador paso a paso.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-2-9",
          type: "manual",
          question: "Estudia la continuidad de $f(x) = \\begin{cases} x^2 & \\text{si } x \\leq 1 \\\\ 2x - 1 & \\text{si } x > 1 \\end{cases}$ en $x = 1$. Comprueba las tres condiciones.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-2-10",
          type: "manual",
          question: "Calcula los limites $\\lim_{x \\to +\\infty} \\dfrac{x^2 - 3x + 1}{2x^2 + x - 5}$ y $\\lim_{x \\to -\\infty} \\dfrac{x^2 - 3x + 1}{2x^2 + x - 5}$. Explica la tecnica.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-2-11",
          type: "manual",
          question: "Determina el valor de $k$ para que $f(x) = \\begin{cases} 3x + k & \\text{si } x < 2 \\\\ x^2 + 1 & \\text{si } x \\geq 2 \\end{cases}$ sea continua en $x = 2$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-2-12",
          type: "manual",
          question: "Clasifica la discontinuidad de $f(x) = \\dfrac{x^2 - 4}{x - 2}$ en $x = 2$. Es evitable? Justifica.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "func-3",
      status: "locked",
      title: "Asintotas horizontales, verticales y oblicuas",
      content: "Las asintotas son rectas a las que la grafica de la funcion se aproxima sin llegar a tocarlas (en general). Son fundamentales para esbozar graficas.\n\nAsintota vertical: la recta $x = a$ es asintota vertical si $\\lim_{x \\to a} f(x) = \\pm\\infty$. Se buscan en los puntos donde el denominador se anula (y el numerador no).\n\nEjemplo: $f(x) = \\dfrac{1}{x - 3}$. En $x = 3$ el denominador vale 0 y el numerador vale 1. Ademas:\n$\\lim_{x \\to 3^+} \\dfrac{1}{x-3} = +\\infty$ y $\\lim_{x \\to 3^-} \\dfrac{1}{x-3} = -\\infty$.\nPor tanto $x = 3$ es asintota vertical.\n\nAsintota horizontal: la recta $y = b$ es asintota horizontal si $\\lim_{x \\to \\pm\\infty} f(x) = b$. Se calcula el limite en el infinito.\n\nEjemplo: $f(x) = \\dfrac{2x + 1}{x - 4}$. $\\lim_{x \\to \\infty} \\dfrac{2x+1}{x-4} = 2$. Asintota horizontal: $y = 2$.\n\nAsintota oblicua: la recta $y = mx + n$ es asintota oblicua si:\n$m = \\lim_{x \\to \\pm\\infty} \\dfrac{f(x)}{x}$ y $n = \\lim_{x \\to \\pm\\infty} [f(x) - mx]$\n\nSolo puede haber asintota oblicua cuando NO hay asintota horizontal (es decir, cuando el grado del numerador es exactamente uno mas que el del denominador).\n\nEjemplo: $f(x) = \\dfrac{x^2 + 1}{x}$. $m = \\lim_{x \\to \\infty} \\dfrac{x^2+1}{x^2} = 1$. $n = \\lim_{x \\to \\infty} \\left(\\dfrac{x^2+1}{x} - x\\right) = \\lim_{x \\to \\infty} \\dfrac{1}{x} = 0$. Asintota oblicua: $y = x$.\n\nResumen rapido para funciones racionales $\\dfrac{P(x)}{Q(x)}$:\n- Si grado $P$ < grado $Q$: AH en $y = 0$.\n- Si grado $P$ = grado $Q$: AH en $y = \\dfrac{\\text{coef. principal de } P}{\\text{coef. principal de } Q}$.\n- Si grado $P$ = grado $Q$ + 1: asintota oblicua.\n- Si grado $P$ > grado $Q$ + 1: no hay AH ni AO.",
      exercises: [
        {
          id: "func-3-1",
          type: "auto",
          question: "La funcion $f(x) = \\dfrac{3}{x + 2}$ tiene asintota vertical en:",
          autoConfig: { type: "multiple_choice", choices: ["$x = 3$", "$x = -2$", "$x = 2$", "$x = 0$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-3-2",
          type: "auto",
          question: "La asintota horizontal de $f(x) = \\dfrac{5x - 1}{2x + 3}$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$y = 5$", "$y = \\dfrac{5}{2}$", "$y = \\dfrac{2}{5}$", "No tiene AH"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-3-3",
          type: "auto",
          question: "La funcion $f(x) = \\dfrac{x^2 - 1}{x + 1}$ tiene asintota oblicua. Su pendiente $m$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$m = 0$", "$m = 1$", "$m = -1$", "$m = 2$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-3-4",
          type: "auto",
          question: "Si el grado del numerador es menor que el grado del denominador, la asintota horizontal es:",
          autoConfig: { type: "multiple_choice", choices: ["$y = 1$", "No tiene AH", "$y = 0$", "Depende de los coeficientes"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-3-5",
          type: "auto",
          question: "La funcion $f(x) = \\dfrac{x}{x^2 + 1}$ tiene asintota horizontal en $y =$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-3-6",
          type: "auto",
          question: "Las asintotas verticales de $f(x) = \\dfrac{1}{x^2 - 4}$ estan en $x =$ (escribe los dos valores separados por coma):",
          autoConfig: { type: "fill_blank", expectedAnswer: "-2,2" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-3-7",
          type: "auto",
          question: "Una funcion racional puede tener asintota horizontal y oblicua a la vez:",
          autoConfig: { type: "multiple_choice", choices: ["Verdadero", "Falso, son excluyentes", "Solo si el grado es 3", "Depende de los coeficientes"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-3-8",
          type: "manual",
          question: "Halla todas las asintotas de $f(x) = \\dfrac{2x^2 + 3x - 1}{x^2 - x - 2}$. Identifica AV, AH y AO.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-3-9",
          type: "manual",
          question: "Calcula la asintota oblicua de $f(x) = \\dfrac{x^2 + 3x + 1}{x - 1}$ hallando $m$ y $n$ paso a paso.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-3-10",
          type: "manual",
          question: "Determina todas las asintotas de $f(x) = \\dfrac{x}{(x-1)(x+3)}$ y estudia el signo de $f$ cerca de cada asintota vertical.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-3-11",
          type: "manual",
          question: "Explica por que $f(x) = \\dfrac{x^2 - 4}{x - 2}$ NO tiene asintota vertical en $x = 2$ a pesar de que el denominador se anula. Que tipo de discontinuidad tiene?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "func-4",
      status: "locked",
      title: "Funciones polinomicas y racionales",
      content: "Las funciones polinomicas tienen la forma $f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$. Son continuas en todo $\\mathbb{R}$ y su dominio es siempre $\\mathbb{R}$.\n\nCaracteristicas segun el grado:\n\nGrado 1 (lineal): $f(x) = mx + n$. Recta con pendiente $m$.\n\nGrado 2 (cuadratica): $f(x) = ax^2 + bx + c$. Parabola. Si $a > 0$ abre hacia arriba, si $a < 0$ abre hacia abajo. Vertice en $x = -\\dfrac{b}{2a}$.\n\nGrado 3 (cubica): $f(x) = ax^3 + \\ldots$ Siempre tiene al menos una raiz real. Comportamiento en infinito: si $a > 0$, $f(x) \\to -\\infty$ cuando $x \\to -\\infty$ y $f(x) \\to +\\infty$ cuando $x \\to +\\infty$.\n\nPara cualquier polinomio de grado $n$:\n- Tiene como maximo $n$ raices reales.\n- Si $n$ es par, los limites en $\\pm\\infty$ tienen el mismo signo.\n- Si $n$ es impar, los limites en $\\pm\\infty$ tienen signos opuestos.\n\nLas funciones racionales tienen la forma $f(x) = \\dfrac{P(x)}{Q(x)}$ donde $P$ y $Q$ son polinomios. Su dominio es $\\mathbb{R}$ menos las raices del denominador.\n\nPara estudiar una funcion racional:\n1. Dominio: resolver $Q(x) = 0$.\n2. Puntos de corte con los ejes: $f(0)$ para el eje $Y$; $P(x) = 0$ para el eje $X$.\n3. Signo de la funcion: estudiar el signo en cada intervalo definido por raices y asintotas.\n4. Asintotas (como vimos en el bloque anterior).\n\nEjemplo: $f(x) = \\dfrac{x - 1}{x + 2}$.\n- Dominio: $\\mathbb{R} \\setminus \\{-2\\}$.\n- Corte con eje $X$: $x = 1$. Corte con eje $Y$: $f(0) = -\\dfrac{1}{2}$.\n- AV: $x = -2$. AH: $y = 1$.",
      exercises: [
        {
          id: "func-4-1",
          type: "auto",
          question: "El vertice de $f(x) = 2x^2 - 8x + 3$ tiene coordenada $x$ igual a:",
          autoConfig: { type: "multiple_choice", choices: ["$x = 4$", "$x = -2$", "$x = 2$", "$x = 8$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-4-2",
          type: "auto",
          question: "Una funcion polinomica de grado 4 puede tener como maximo:",
          autoConfig: { type: "multiple_choice", choices: ["2 raices reales", "3 raices reales", "4 raices reales", "5 raices reales"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-4-3",
          type: "auto",
          question: "$\\lim_{x \\to -\\infty} (3x^3 - x + 2)$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$+\\infty$", "$-\\infty$", "$0$", "$2$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-4-4",
          type: "auto",
          question: "El punto de corte con el eje $Y$ de $f(x) = \\dfrac{x + 3}{x - 1}$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$(0, 3)$", "$(0, -3)$", "$(0, -1)$", "$(0, 1)$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-4-5",
          type: "auto",
          question: "El punto de corte con el eje $X$ de $f(x) = \\dfrac{x + 3}{x - 1}$ tiene coordenada $x =$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "-3" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-4-6",
          type: "auto",
          question: "El dominio de $f(x) = \\dfrac{x}{x^2 - 5x + 6}$ excluye los valores $x =$ (separados por coma, de menor a mayor):",
          autoConfig: { type: "fill_blank", expectedAnswer: "2,3" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-4-7",
          type: "auto",
          question: "La parabola $f(x) = -x^2 + 4x - 3$ abre hacia:",
          autoConfig: { type: "fill_blank", expectedAnswer: "abajo" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-4-8",
          type: "manual",
          question: "Estudia completamente la funcion $f(x) = \\dfrac{x^2 - 4}{x - 3}$: dominio, puntos de corte, asintotas y comportamiento en el infinito.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-4-9",
          type: "manual",
          question: "Dada $f(x) = x^3 - 3x^2 + 2x$, factoriza para hallar sus raices y determina su signo en cada intervalo. Esboza la grafica.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-4-10",
          type: "manual",
          question: "Halla el vertice de $f(x) = -2x^2 + 12x - 10$. Indica si es un maximo o un minimo y calcula los puntos de corte con el eje $X$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-4-11",
          type: "manual",
          question: "Estudia el signo de $f(x) = \\dfrac{(x-1)(x+2)}{(x-3)}$ y determina en que intervalos $f(x) > 0$ y en cuales $f(x) < 0$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "func-5",
      status: "locked",
      title: "Funciones exponenciales y logaritmicas",
      content: "La funcion exponencial tiene la forma $f(x) = a^x$ con $a > 0$, $a \\neq 1$. La mas usada es $f(x) = e^x$ donde $e \\approx 2{,}718$.\n\nPropiedades de la exponencial $f(x) = e^x$:\n- Dominio: $\\mathbb{R}$. Recorrido: $(0, +\\infty)$.\n- Siempre positiva: $e^x > 0$ para todo $x$.\n- Creciente si la base $> 1$, decreciente si $0 < $ base $< 1$.\n- $\\lim_{x \\to +\\infty} e^x = +\\infty$ y $\\lim_{x \\to -\\infty} e^x = 0$.\n- Corta al eje $Y$ en $(0, 1)$ porque $e^0 = 1$.\n\nPropiedades algebraicas:\n$a^m \\cdot a^n = a^{m+n}$, $\\dfrac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{m \\cdot n}$, $a^0 = 1$.\n\nLa funcion logaritmica $f(x) = \\log_a(x)$ es la inversa de la exponencial. El logaritmo neperiano es $\\ln(x) = \\log_e(x)$.\n\nPropiedades del logaritmo $f(x) = \\ln(x)$:\n- Dominio: $(0, +\\infty)$. Recorrido: $\\mathbb{R}$.\n- $\\lim_{x \\to 0^+} \\ln(x) = -\\infty$ y $\\lim_{x \\to +\\infty} \\ln(x) = +\\infty$.\n- Corta al eje $X$ en $(1, 0)$ porque $\\ln(1) = 0$.\n- Creciente (para base $> 1$).\n\nPropiedades algebraicas:\n$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$\n$\\ln\\left(\\dfrac{a}{b}\\right) = \\ln(a) - \\ln(b)$\n$\\ln(a^n) = n \\cdot \\ln(a)$\n$\\ln(e) = 1$, $\\ln(1) = 0$\n\nCambio de base: $\\log_a(x) = \\dfrac{\\ln(x)}{\\ln(a)}$\n\nEcuaciones exponenciales: se resuelven aplicando logaritmos. Ejemplo:\n$3^{2x} = 81 \\Rightarrow 3^{2x} = 3^4 \\Rightarrow 2x = 4 \\Rightarrow x = 2$.\n\nEcuaciones logaritmicas: se resuelven convirtiendo a forma exponencial. Ejemplo:\n$\\ln(x - 1) = 2 \\Rightarrow x - 1 = e^2 \\Rightarrow x = e^2 + 1 \\approx 8{,}389$.",
      exercises: [
        {
          id: "func-5-1",
          type: "auto",
          question: "El dominio de $f(x) = \\ln(3 - x)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$(3, +\\infty)$", "$(-\\infty, 3)$", "$\\mathbb{R}$", "$(0, 3)$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-5-2",
          type: "auto",
          question: "$\\lim_{x \\to -\\infty} e^x$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$+\\infty$", "$-\\infty$", "$0$", "$1$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-5-3",
          type: "auto",
          question: "$\\ln(e^5)$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$e^5$", "$5e$", "$5$", "$1$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-5-4",
          type: "auto",
          question: "La funcion $f(x) = e^x$ corta al eje $Y$ en el punto:",
          autoConfig: { type: "multiple_choice", choices: ["$(1, 0)$", "$(0, 0)$", "$(0, 1)$", "$(0, e)$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-5-5",
          type: "auto",
          question: "$\\ln(1)$ vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-5-6",
          type: "auto",
          question: "Si $2^x = 32$, entonces $x =$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "5" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-5-7",
          type: "auto",
          question: "$\\ln(a \\cdot b)$ es igual a:",
          autoConfig: { type: "multiple_choice", choices: ["$\\ln(a) \\cdot \\ln(b)$", "$\\ln(a) + \\ln(b)$", "$\\ln(a) - \\ln(b)$", "$\\ln(a^b)$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-5-8",
          type: "manual",
          question: "Resuelve la ecuacion $e^{2x} - 5e^x + 6 = 0$. Pista: haz el cambio $t = e^x$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-5-9",
          type: "manual",
          question: "Resuelve $\\ln(x) + \\ln(x - 2) = \\ln(3)$. Comprueba que las soluciones pertenecen al dominio.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-5-10",
          type: "manual",
          question: "Estudia dominio, cortes con los ejes, asintota y comportamiento de $f(x) = e^x - 2$. Esboza la grafica.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-5-11",
          type: "manual",
          question: "Simplifica usando propiedades de logaritmos: $\\ln(x^3) - 2\\ln(x) + \\ln\\left(\\dfrac{1}{x}\\right)$. Para que valores de $x$ es valida la expresion?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-5-12",
          type: "manual",
          question: "Demuestra que $\\log_2(8) = 3$ usando la definicion de logaritmo y el cambio de base. Calcula tambien $\\log_2(8)$ usando $\\dfrac{\\ln(8)}{\\ln(2)}$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "func-6",
      status: "locked",
      title: "Estudio completo de una funcion",
      content: "El estudio completo de una funcion consiste en analizar sistematicamente todas sus propiedades para poder trazar su grafica. Es un ejercicio clasico de PAU y requiere seguir un esquema ordenado.\n\nEsquema de estudio:\n\n1. Dominio: determinar donde esta definida $f(x)$.\n\n2. Simetria: comprobar si $f(-x) = f(x)$ (par) o $f(-x) = -f(x)$ (impar).\n\n3. Puntos de corte:\n   - Con eje $Y$: calcular $f(0)$.\n   - Con eje $X$: resolver $f(x) = 0$.\n\n4. Asintotas:\n   - Verticales: donde el denominador se anula.\n   - Horizontales: $\\lim_{x \\to \\pm\\infty} f(x)$.\n   - Oblicuas: $m = \\lim_{x \\to \\infty} \\dfrac{f(x)}{x}$, $n = \\lim_{x \\to \\infty} [f(x) - mx]$.\n\n5. Monotonia (crecimiento y decrecimiento):\n   - Calcular $f'(x)$.\n   - Resolver $f'(x) = 0$ (puntos criticos).\n   - Si $f'(x) > 0$: funcion creciente. Si $f'(x) < 0$: decreciente.\n\n6. Extremos relativos:\n   - Donde $f'(x) = 0$ y cambia de signo.\n   - Maximo: $f'$ pasa de $+$ a $-$. Minimo: $f'$ pasa de $-$ a $+$.\n\n7. Concavidad y puntos de inflexion (si se pide):\n   - Calcular $f''(x)$.\n   - Si $f''(x) > 0$: concava hacia arriba. Si $f''(x) < 0$: concava hacia abajo.\n   - Puntos de inflexion donde $f''(x) = 0$ y cambia de signo.\n\n8. Tabla de valores y grafica: con toda la informacion anterior, trazar la curva.\n\nEjemplo completo: $f(x) = \\dfrac{x^2}{x - 1}$.\n\n1. Dominio: $\\mathbb{R} \\setminus \\{1\\}$.\n2. Simetria: $f(-x) = \\dfrac{x^2}{-x-1} \\neq f(x)$, ni par ni impar.\n3. Cortes: $f(0) = 0$ (pasa por el origen). $f(x) = 0 \\Rightarrow x = 0$.\n4. AV: $x = 1$. No hay AH. AO: $m = 1$, $n = 1$, asi que $y = x + 1$.\n5. $f'(x) = \\dfrac{x^2 - 2x}{(x-1)^2} = \\dfrac{x(x-2)}{(x-1)^2}$. Puntos criticos: $x = 0$ y $x = 2$.\n6. $f'(x)>0$ en $(-\\infty, 0)$ y $(2, +\\infty)$: creciente. $f'(x)<0$ en $(0,1)$ y $(1,2)$: decreciente. Maximo relativo en $(0, 0)$. Minimo relativo en $(2, 4)$.",
      exercises: [
        {
          id: "func-6-1",
          type: "auto",
          question: "En el estudio de una funcion, la monotonia se determina con:",
          autoConfig: { type: "multiple_choice", choices: ["Los limites", "La primera derivada", "La segunda derivada", "Las asintotas"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-6-2",
          type: "auto",
          question: "Un maximo relativo ocurre cuando $f'(x)$:",
          autoConfig: { type: "multiple_choice", choices: ["Pasa de negativo a positivo", "Pasa de positivo a negativo", "Es siempre positiva", "Vale cero"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-6-3",
          type: "auto",
          question: "Los puntos de inflexion se hallan con:",
          autoConfig: { type: "multiple_choice", choices: ["$f(x) = 0$", "$f'(x) = 0$", "$f''(x) = 0$ y cambio de signo", "Las asintotas"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-6-4",
          type: "auto",
          question: "Si $f'(x) > 0$ en un intervalo, la funcion es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "creciente" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-6-5",
          type: "auto",
          question: "Si $f''(x) > 0$ en un intervalo, la funcion es:",
          autoConfig: { type: "multiple_choice", choices: ["Creciente", "Decreciente", "Concava hacia arriba", "Concava hacia abajo"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-6-6",
          type: "auto",
          question: "El primer paso del estudio completo de una funcion es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "dominio" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-6-7",
          type: "manual",
          question: "Realiza el estudio completo de $f(x) = \\dfrac{x^2 - 1}{x}$: dominio, simetria, cortes, asintotas, monotonia y extremos.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-6-8",
          type: "manual",
          question: "Estudia completamente $f(x) = \\dfrac{x}{x^2 - 4}$: dominio, simetria, cortes, asintotas, $f'(x)$ y monotonia. Esboza la grafica.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-6-9",
          type: "manual",
          question: "Haz el estudio completo de $f(x) = x \\cdot e^{-x}$: dominio, limites, cortes, derivada, extremos y concavidad.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-6-10",
          type: "manual",
          question: "Estudia completamente $f(x) = \\dfrac{x^2 + 1}{x - 2}$. Incluye asintota oblicua, monotonia y extremos. Esboza la grafica.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "func-6-11",
          type: "manual",
          question: "(Tipo PAU) Dada $f(x) = \\dfrac{x^2}{x + 1}$, realiza su estudio completo y representa la grafica indicando todos los elementos relevantes.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    }
  ]
};
