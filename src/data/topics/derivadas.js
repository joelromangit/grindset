export default {
  name: "Derivadas",
  order: 4,
  status: "locked",
  theoryBlocks: [
    {
      id: "der-1",
      status: "available",
      title: "Concepto de derivada e interpretacion geometrica",
      content: "La derivada de una funcion en un punto mide la tasa de cambio instantanea de la funcion en ese punto. Geometricamente, es la pendiente de la recta tangente a la curva en ese punto.\n\nPartimos de la tasa de variacion media (TVM) entre dos puntos $a$ y $a + h$:\n\n$\\text{TVM} = \\dfrac{f(a+h) - f(a)}{h}$\n\nEsta expresion representa la pendiente de la recta secante que pasa por $(a, f(a))$ y $(a+h, f(a+h))$.\n\nSi hacemos que $h \\to 0$, la secante se convierte en la tangente, y obtenemos la derivada:\n\n$f'(a) = \\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h}$\n\nSi este limite existe, decimos que $f$ es derivable en $x = a$.\n\nEjemplo: $f(x) = x^2$ en $x = 3$.\n$f'(3) = \\lim_{h \\to 0} \\dfrac{(3+h)^2 - 9}{h} = \\lim_{h \\to 0} \\dfrac{9 + 6h + h^2 - 9}{h} = \\lim_{h \\to 0} \\dfrac{6h + h^2}{h} = \\lim_{h \\to 0} (6 + h) = 6$.\n\nLa pendiente de la tangente a $y = x^2$ en $x = 3$ es $6$.\n\nNotacion: se usa $f'(x)$, $\\dfrac{df}{dx}$, o $\\dfrac{dy}{dx}$.\n\nRelacion con continuidad: si $f$ es derivable en $a$, entonces $f$ es continua en $a$. Pero el reciproco NO es cierto: $f(x) = |x|$ es continua en $x = 0$ pero no derivable (tiene un pico).\n\nLa funcion derivada $f'(x)$ se obtiene aplicando la definicion (o las reglas de derivacion) para un $x$ generico. Si $f(x) = x^2$, entonces $f'(x) = 2x$.",
      exercises: [
        {
          id: "der-1-1",
          type: "auto",
          question: "La derivada de una funcion en un punto representa geometricamente:",
          autoConfig: { type: "multiple_choice", choices: ["El area bajo la curva", "La pendiente de la recta tangente", "La distancia al origen", "El valor maximo de la funcion"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-1-2",
          type: "auto",
          question: "Si $f(x) = x^2$, entonces $f'(1)$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$1$", "$0$", "$2$", "$4$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-1-3",
          type: "auto",
          question: "Toda funcion derivable en un punto es continua en ese punto:",
          autoConfig: { type: "multiple_choice", choices: ["Verdadero", "Falso", "Solo si es polinomica", "Solo si la derivada es positiva"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-1-4",
          type: "auto",
          question: "La funcion $f(x) = |x|$ en $x = 0$ es:",
          autoConfig: { type: "multiple_choice", choices: ["Derivable y continua", "Continua pero no derivable", "Derivable pero no continua", "Ni derivable ni continua"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-1-5",
          type: "auto",
          question: "La TVM de $f(x) = x^2$ entre $x = 1$ y $x = 3$ vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "4" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-1-6",
          type: "auto",
          question: "Si $f(x) = 3x$, entonces $f'(x)$ vale para todo $x$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "3" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-1-7",
          type: "auto",
          question: "La derivada se define como un:",
          autoConfig: { type: "fill_blank", expectedAnswer: "limite" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-1-8",
          type: "manual",
          question: "Usando la definicion de derivada como limite, calcula $f'(2)$ para $f(x) = x^3$. Desarrolla $(2+h)^3$ paso a paso.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-1-9",
          type: "manual",
          question: "Calcula la TVM de $f(x) = \\dfrac{1}{x}$ entre $x = 1$ y $x = 4$. Compara con $f'(2)$ (derivada en el punto medio). Son iguales?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-1-10",
          type: "manual",
          question: "Usando la definicion, calcula $f'(x)$ para $f(x) = \\dfrac{1}{x}$. Es decir, calcula $\\lim_{h \\to 0} \\dfrac{\\frac{1}{x+h} - \\frac{1}{x}}{h}$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-1-11",
          type: "manual",
          question: "Explica con un dibujo por que $f(x) = |x|$ no es derivable en $x = 0$. Calcula los limites laterales $\\lim_{h \\to 0^+}$ y $\\lim_{h \\to 0^-}$ de la definicion de derivada.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "der-2",
      status: "locked",
      title: "Reglas de derivacion: suma, producto, cociente y cadena",
      content: "Derivar usando la definicion es lento. Las reglas de derivacion permiten calcular derivadas de forma rapida y sistematica.\n\nDerivadas basicas:\n- Constante: $(c)' = 0$\n- Potencia: $(x^n)' = n \\cdot x^{n-1}$\n- Exponencial: $(e^x)' = e^x$\n- Logaritmo: $(\\ln x)' = \\dfrac{1}{x}$\n- Seno: $(\\sin x)' = \\cos x$\n- Coseno: $(\\cos x)' = -\\sin x$\n\nRegla de la suma: $(f + g)' = f' + g'$.\n\nMultiplicacion por constante: $(k \\cdot f)' = k \\cdot f'$.\n\nRegla del producto: $(f \\cdot g)' = f' \\cdot g + f \\cdot g'$.\n\nEjemplo: $(x^2 \\cdot e^x)' = 2x \\cdot e^x + x^2 \\cdot e^x = e^x(2x + x^2)$.\n\nRegla del cociente: $\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f' \\cdot g - f \\cdot g'}{g^2}$.\n\nEjemplo: $\\left(\\dfrac{x}{x+1}\\right)' = \\dfrac{1 \\cdot (x+1) - x \\cdot 1}{(x+1)^2} = \\dfrac{1}{(x+1)^2}$.\n\nRegla de la cadena: si $h(x) = f(g(x))$, entonces $h'(x) = f'(g(x)) \\cdot g'(x)$. Se deriva \"de fuera a dentro\".\n\nEjemplo: $(e^{3x})' = e^{3x} \\cdot 3 = 3e^{3x}$ (derivada de la exponencial por la derivada del exponente).\n\nEjemplo: $(\\ln(x^2 + 1))' = \\dfrac{1}{x^2+1} \\cdot 2x = \\dfrac{2x}{x^2+1}$.\n\nEjemplo: $((2x+1)^5)' = 5(2x+1)^4 \\cdot 2 = 10(2x+1)^4$.\n\nTabla resumida de derivadas compuestas:\n- $(f^n)' = n \\cdot f^{n-1} \\cdot f'$\n- $(e^f)' = e^f \\cdot f'$\n- $(\\ln f)' = \\dfrac{f'}{f}$\n- $(\\sin f)' = \\cos f \\cdot f'$\n- $(\\cos f)' = -\\sin f \\cdot f'$",
      exercises: [
        {
          id: "der-2-1",
          type: "auto",
          question: "La derivada de $f(x) = 5x^3$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$15x^2$", "$5x^2$", "$15x^3$", "$3x^2$"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-2-2",
          type: "auto",
          question: "La derivada de $f(x) = e^{2x}$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$e^{2x}$", "$2e^{2x}$", "$2xe^{2x}$", "$e^{2}$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-2-3",
          type: "auto",
          question: "Usando la regla del cociente, $\\left(\\dfrac{x^2}{x+1}\\right)'$ en $x = 0$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$0$", "$1$", "$-1$", "$2$"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-2-4",
          type: "auto",
          question: "La derivada de $\\ln(3x)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$\\dfrac{3}{x}$", "$\\dfrac{1}{3x}$", "$\\dfrac{1}{x}$", "$3\\ln(x)$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-2-5",
          type: "auto",
          question: "La derivada de $f(x) = (x^2 + 3)^4$ es $k(x^2+3)^3 \\cdot 2x$. El valor de $k$ es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "4" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-2-6",
          type: "auto",
          question: "Si $f(x) = x^2 \\cdot \\ln(x)$, entonces $f'(x) = 2x \\cdot \\ln(x) + \\ldots$ Completa el segundo termino (sin simplificar):",
          autoConfig: { type: "fill_blank", expectedAnswer: "x" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-2-7",
          type: "auto",
          question: "$(\\cos(2x))'$ es igual a:",
          autoConfig: { type: "multiple_choice", choices: ["$-\\sin(2x)$", "$-2\\sin(2x)$", "$2\\cos(2x)$", "$\\sin(2x)$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-2-8",
          type: "manual",
          question: "Deriva $f(x) = \\dfrac{x^2 - 1}{x^2 + 1}$ usando la regla del cociente. Simplifica el resultado.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-2-9",
          type: "manual",
          question: "Deriva $f(x) = x^3 \\cdot e^{-x}$ usando la regla del producto. Factoriza el resultado.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-2-10",
          type: "manual",
          question: "Calcula la derivada de $f(x) = \\ln(x^2 + 2x + 1)$. Simplifica. Pista: factoriza el argumento del logaritmo antes o despues de derivar.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-2-11",
          type: "manual",
          question: "Deriva $f(x) = \\sqrt{1 - x^2}$. Reescribe como potencia fraccionaria y aplica la regla de la cadena. Donde no existe la derivada?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-2-12",
          type: "manual",
          question: "Deriva $f(x) = e^{x^2 - 3x + 1}$ y halla los puntos donde $f'(x) = 0$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "der-3",
      status: "locked",
      title: "Derivadas de funciones compuestas",
      content: "La regla de la cadena se aplica cuando una funcion esta dentro de otra. En PAU es muy frecuente encontrar composiciones de dos o incluso tres funciones. La clave es identificar la funcion exterior y la interior.\n\nEstrategia: identifica las \"capas\" de la funcion, como si fueran munecas rusas, y deriva de fuera a dentro.\n\nEjemplo con dos capas:\n$f(x) = \\sqrt{3x^2 + 1} = (3x^2 + 1)^{1/2}$\n\nCapa exterior: $u^{1/2}$, derivada: $\\dfrac{1}{2} u^{-1/2}$.\nCapa interior: $u = 3x^2 + 1$, derivada: $6x$.\n\n$f'(x) = \\dfrac{1}{2}(3x^2+1)^{-1/2} \\cdot 6x = \\dfrac{6x}{2\\sqrt{3x^2+1}} = \\dfrac{3x}{\\sqrt{3x^2+1}}$\n\nEjemplo con tres capas:\n$f(x) = e^{\\sin(x^2)}$\n\nCapa exterior: $e^u$, derivada: $e^u$.\nCapa media: $u = \\sin(v)$, derivada: $\\cos(v)$.\nCapa interior: $v = x^2$, derivada: $2x$.\n\n$f'(x) = e^{\\sin(x^2)} \\cdot \\cos(x^2) \\cdot 2x$\n\nDerivadas de funciones frecuentes en PAU:\n\n$(\\sqrt{f})' = \\dfrac{f'}{2\\sqrt{f}}$\n\n$\\left(\\dfrac{1}{f}\\right)' = -\\dfrac{f'}{f^2}$\n\n$(a^{f(x)})' = a^{f(x)} \\cdot \\ln(a) \\cdot f'(x)$\n\n$(\\log_a(f))' = \\dfrac{f'}{f \\cdot \\ln(a)}$\n\nDerivada implicita: cuando $y$ viene definida de forma implicita por una ecuacion como $x^2 + y^2 = 25$, se deriva ambos lados respecto a $x$, tratando $y$ como funcion de $x$:\n$2x + 2y \\cdot y' = 0 \\Rightarrow y' = -\\dfrac{x}{y}$",
      exercises: [
        {
          id: "der-3-1",
          type: "auto",
          question: "La derivada de $f(x) = (2x + 5)^7$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$7(2x+5)^6$", "$14(2x+5)^6$", "$7(2x+5)^6 \\cdot 2x$", "$2(2x+5)^7$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-3-2",
          type: "auto",
          question: "La derivada de $f(x) = \\sqrt{x^2 + 9}$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$\\dfrac{1}{2\\sqrt{x^2+9}}$", "$\\dfrac{2x}{\\sqrt{x^2+9}}$", "$\\dfrac{x}{\\sqrt{x^2+9}}$", "$\\dfrac{x^2}{\\sqrt{x^2+9}}$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-3-3",
          type: "auto",
          question: "La derivada de $f(x) = e^{-x^2}$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$-x^2 \\cdot e^{-x^2}$", "$-2x \\cdot e^{-x^2}$", "$e^{-2x}$", "$2x \\cdot e^{-x^2}$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-3-4",
          type: "auto",
          question: "La derivada de $f(x) = \\ln(\\sin x)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$\\dfrac{1}{\\sin x}$", "$\\dfrac{\\cos x}{\\sin x}$", "$\\cos(\\ln x)$", "$-\\dfrac{\\cos x}{\\sin x}$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-3-5",
          type: "auto",
          question: "Si $f(x) = (\\ln x)^3$, entonces $f'(x) = k \\cdot (\\ln x)^2 \\cdot \\dfrac{1}{x}$. El valor de $k$ es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "3" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-3-6",
          type: "auto",
          question: "La derivada de $f(x) = \\sin^2(x)$ (es decir, $(\\sin x)^2$) es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "2sinxcosx" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-3-7",
          type: "auto",
          question: "Al derivar implicitamente $x^2 + y^2 = 25$, se obtiene $y' =$:",
          autoConfig: { type: "multiple_choice", choices: ["$-\\dfrac{x}{y}$", "$\\dfrac{x}{y}$", "$-\\dfrac{y}{x}$", "$-\\dfrac{2x}{y}$"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-3-8",
          type: "manual",
          question: "Deriva $f(x) = e^{\\sqrt{x+1}}$. Identifica las tres capas de la composicion y aplica la regla de la cadena paso a paso.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-3-9",
          type: "manual",
          question: "Deriva $f(x) = \\ln\\left(\\dfrac{x+1}{x-1}\\right)$. Hazlo de dos formas: (a) usando propiedades de logaritmos primero, (b) directamente con la regla de la cadena. Comprueba que el resultado es el mismo.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-3-10",
          type: "manual",
          question: "Dada la curva $x^3 + y^3 = 6xy$, calcula $y'$ por derivacion implicita. Halla la pendiente de la tangente en el punto $(3, 3)$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-3-11",
          type: "manual",
          question: "Deriva $f(x) = \\left(\\dfrac{x^2 + 1}{x^2 - 1}\\right)^3$. Aplica primero la regla de la cadena y luego la del cociente para la funcion interior.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "der-4",
      status: "locked",
      title: "Recta tangente y recta normal",
      content: "La recta tangente a la curva $y = f(x)$ en el punto $x = a$ es la recta que mejor aproxima la curva localmente. Su ecuacion es:\n\n$y - f(a) = f'(a) \\cdot (x - a)$\n\nDonde $f'(a)$ es la pendiente de la tangente (la derivada en ese punto).\n\nLa recta normal es perpendicular a la tangente. Si la pendiente de la tangente es $m$, la de la normal es $-\\dfrac{1}{m}$ (siempre que $m \\neq 0$). Su ecuacion:\n\n$y - f(a) = -\\dfrac{1}{f'(a)} \\cdot (x - a)$\n\nEjemplo: Hallar la recta tangente a $f(x) = x^2 - 3x + 2$ en $x = 1$.\n\n$f(1) = 1 - 3 + 2 = 0$. El punto es $(1, 0)$.\n$f'(x) = 2x - 3$, asi que $f'(1) = -1$.\n\nTangente: $y - 0 = -1(x - 1)$, es decir, $y = -x + 1$.\nNormal: $y - 0 = 1(x - 1)$, es decir, $y = x - 1$.\n\nProblema tipo PAU: hallar los puntos de la curva donde la tangente es horizontal.\n\nLa tangente es horizontal cuando su pendiente es $0$, es decir, cuando $f'(x) = 0$.\n\nEjemplo: $f(x) = x^3 - 3x$. $f'(x) = 3x^2 - 3 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm 1$.\n\nEn $x = 1$: $f(1) = -2$, punto $(1, -2)$. Tangente: $y = -2$.\nEn $x = -1$: $f(-1) = 2$, punto $(-1, 2)$. Tangente: $y = 2$.\n\nOtro tipo PAU: hallar las tangentes a una curva que pasan por un punto exterior.\n\nSea $f(x) = x^2$ y el punto exterior $P = (0, -1)$. La tangente en $x = a$ es:\n$y - a^2 = 2a(x - a)$, es decir $y = 2ax - a^2$.\nPara que pase por $(0, -1)$: $-1 = 2a \\cdot 0 - a^2 = -a^2$, asi que $a^2 = 1$, $a = \\pm 1$.\n\nTangentes: $y = 2x - 1$ y $y = -2x - 1$.",
      exercises: [
        {
          id: "der-4-1",
          type: "auto",
          question: "La pendiente de la tangente a $f(x) = x^3$ en $x = 2$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$6$", "$8$", "$12$", "$4$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-4-2",
          type: "auto",
          question: "La tangente a $f(x) = x^2$ en $x = 0$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$y = x$", "$y = 2x$", "$y = 0$", "$y = 1$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-4-3",
          type: "auto",
          question: "Si la tangente tiene pendiente $3$, la normal tiene pendiente:",
          autoConfig: { type: "multiple_choice", choices: ["$3$", "$-3$", "$\\dfrac{1}{3}$", "$-\\dfrac{1}{3}$"], correctIndex: 3 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-4-4",
          type: "auto",
          question: "La tangente es horizontal cuando:",
          autoConfig: { type: "multiple_choice", choices: ["$f(x) = 0$", "$f'(x) = 0$", "$f''(x) = 0$", "$f'(x) = 1$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-4-5",
          type: "auto",
          question: "La ecuacion de la tangente a $f(x) = e^x$ en $x = 0$ es $y =$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "x+1" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-4-6",
          type: "auto",
          question: "La tangente horizontal de $f(x) = x^2 - 4x + 7$ esta en $x =$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "2" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-4-7",
          type: "manual",
          question: "Halla la ecuacion de la recta tangente y la recta normal a $f(x) = \\dfrac{x}{x+1}$ en $x = 1$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-4-8",
          type: "manual",
          question: "Encuentra los puntos de $f(x) = x^3 - 6x^2 + 9x + 1$ donde la tangente es horizontal. Calcula las ecuaciones de esas tangentes.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-4-9",
          type: "manual",
          question: "(Tipo PAU) Halla las rectas tangentes a la parabola $y = x^2$ que pasan por el punto $(2, -4)$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-4-10",
          type: "manual",
          question: "Halla la ecuacion de la tangente a $f(x) = \\ln(x)$ en $x = e$. Determina en que punto corta al eje $X$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-4-11",
          type: "manual",
          question: "Determina el valor de $a$ para que la tangente a $f(x) = ax^2 + 1$ en $x = 1$ tenga pendiente $6$. Escribe la ecuacion de esa tangente.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "der-5",
      status: "locked",
      title: "Crecimiento, decrecimiento y extremos relativos",
      content: "La primera derivada proporciona informacion sobre el crecimiento y decrecimiento de la funcion.\n\nTeorema: Sea $f$ derivable en un intervalo $(a, b)$.\n- Si $f'(x) > 0$ para todo $x \\in (a,b)$, entonces $f$ es estrictamente creciente en $(a,b)$.\n- Si $f'(x) < 0$ para todo $x \\in (a,b)$, entonces $f$ es estrictamente decreciente en $(a,b)$.\n\nPuntos criticos: son los valores de $x$ donde $f'(x) = 0$ o donde $f'$ no existe. Son los candidatos a extremos relativos.\n\nCriterio de la primera derivada:\n- Si $f'$ cambia de $+$ a $-$ en $x = c$: maximo relativo en $x = c$.\n- Si $f'$ cambia de $-$ a $+$ en $x = c$: minimo relativo en $x = c$.\n- Si $f'$ no cambia de signo: no hay extremo (punto de inflexion de tangente horizontal).\n\nCriterio de la segunda derivada (alternativo):\nSea $c$ un punto critico ($f'(c) = 0$).\n- Si $f''(c) < 0$: maximo relativo.\n- Si $f''(c) > 0$: minimo relativo.\n- Si $f''(c) = 0$: el criterio no decide, usar la primera derivada.\n\nEjemplo completo: $f(x) = x^3 - 12x + 1$.\n\n$f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x-2)(x+2)$.\n\nPuntos criticos: $x = -2$ y $x = 2$.\n\nEstudio de signo de $f'(x)$:\n- $x < -2$: $f'(x) > 0$ (creciente).\n- $-2 < x < 2$: $f'(x) < 0$ (decreciente).\n- $x > 2$: $f'(x) > 0$ (creciente).\n\nMaximo relativo en $x = -2$: $f(-2) = -8 + 24 + 1 = 17$. Punto: $(-2, 17)$.\nMinimo relativo en $x = 2$: $f(2) = 8 - 24 + 1 = -15$. Punto: $(2, -15)$.\n\nVerificacion con segunda derivada: $f''(x) = 6x$.\n$f''(-2) = -12 < 0$ (maximo). $f''(2) = 12 > 0$ (minimo). Coincide.",
      exercises: [
        {
          id: "der-5-1",
          type: "auto",
          question: "Si $f'(x) < 0$ en $(1, 5)$, la funcion $f$ es:",
          autoConfig: { type: "multiple_choice", choices: ["Creciente en $(1,5)$", "Decreciente en $(1,5)$", "Constante en $(1,5)$", "No se puede saber"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-5-2",
          type: "auto",
          question: "Si $f'(c) = 0$ y $f''(c) > 0$, en $x = c$ hay:",
          autoConfig: { type: "multiple_choice", choices: ["Maximo relativo", "Minimo relativo", "Punto de inflexion", "No se puede decidir"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-5-3",
          type: "auto",
          question: "Los puntos criticos de $f(x) = x^3 - 3x$ son:",
          autoConfig: { type: "multiple_choice", choices: ["$x = 0$", "$x = 1$ y $x = -1$", "$x = 3$", "$x = 0$ y $x = 3$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-5-4",
          type: "auto",
          question: "La funcion $f(x) = x^4$ tiene en $x = 0$:",
          autoConfig: { type: "multiple_choice", choices: ["Maximo relativo", "Minimo relativo", "Punto de inflexion", "Nada especial"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-5-5",
          type: "auto",
          question: "Los puntos criticos de $f(x) = 2x^3 - 9x^2 + 12x$ son $x = 1$ y $x =$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "2" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-5-6",
          type: "auto",
          question: "Si $f'$ pasa de positivo a negativo en $x = c$, hay un:",
          autoConfig: { type: "fill_blank", expectedAnswer: "maximo" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-5-7",
          type: "manual",
          question: "Halla los intervalos de crecimiento y decrecimiento y los extremos relativos de $f(x) = x^3 - 6x^2 + 9x + 2$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-5-8",
          type: "manual",
          question: "Estudia la monotonia y extremos de $f(x) = x \\cdot e^{-x}$. Usa ambos criterios (primera y segunda derivada) para confirmar el tipo de extremo.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-5-9",
          type: "manual",
          question: "Halla los extremos relativos de $f(x) = \\dfrac{x^2}{x + 1}$ y clasificalos. Estudia la monotonia en todos los intervalos del dominio.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-5-10",
          type: "manual",
          question: "(Tipo PAU) Dada $f(x) = \\dfrac{x^2 - 4}{x}$, halla los extremos relativos y los intervalos de crecimiento y decrecimiento.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-5-11",
          type: "manual",
          question: "Demuestra que $f(x) = x^3 + x$ es siempre creciente. Tiene extremos relativos? Justifica.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "der-6",
      status: "locked",
      title: "Concavidad, convexidad y puntos de inflexion",
      content: "La segunda derivada $f''(x)$ informa sobre la curvatura de la grafica.\n\nConvexidad (concava hacia arriba): si $f''(x) > 0$ en un intervalo, la grafica \"mira hacia arriba\" (tiene forma de cuenco). La tangente queda por debajo de la curva.\n\nConcavidad (concava hacia abajo): si $f''(x) < 0$ en un intervalo, la grafica \"mira hacia abajo\" (tiene forma de montana). La tangente queda por encima de la curva.\n\nPunto de inflexion: es un punto donde la funcion cambia de concavidad. Condiciones:\n1. $f''(c) = 0$ (condicion necesaria, no suficiente).\n2. $f''$ cambia de signo en $x = c$ (condicion necesaria y suficiente).\n\nEjemplo: $f(x) = x^3 - 3x^2 + 2$.\n\n$f'(x) = 3x^2 - 6x$\n$f''(x) = 6x - 6$\n\n$f''(x) = 0 \\Rightarrow 6x - 6 = 0 \\Rightarrow x = 1$.\n\nEstudio de signo de $f''$:\n- $x < 1$: $f''(x) < 0$ (concava hacia abajo).\n- $x > 1$: $f''(x) > 0$ (concava hacia arriba).\n\nComo $f''$ cambia de signo en $x = 1$, hay punto de inflexion en $(1, f(1)) = (1, 0)$.\n\nEjemplo con falso candidato: $f(x) = x^4$.\n$f''(x) = 12x^2$. $f''(0) = 0$, pero $f''(x) \\geq 0$ para todo $x$: no cambia de signo. No hay punto de inflexion en $x = 0$ (es un minimo).\n\nResumen del estudio completo con derivadas:\n- $f'(x) = 0$: puntos criticos (posibles extremos).\n- Signo de $f'$: crecimiento/decrecimiento.\n- $f''(x) = 0$: posibles puntos de inflexion.\n- Signo de $f''$: concavidad/convexidad.\n- $f''$ en puntos criticos: clasificacion de extremos.",
      exercises: [
        {
          id: "der-6-1",
          type: "auto",
          question: "Si $f''(x) > 0$ en un intervalo, la funcion es:",
          autoConfig: { type: "multiple_choice", choices: ["Creciente", "Decreciente", "Convexa (concava hacia arriba)", "Concava hacia abajo"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-6-2",
          type: "auto",
          question: "Un punto de inflexion ocurre cuando:",
          autoConfig: { type: "multiple_choice", choices: ["$f'(x) = 0$", "$f''(x) = 0$ y cambia de signo", "$f(x) = 0$", "$f''(x) > 0$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-6-3",
          type: "auto",
          question: "La funcion $f(x) = x^4$ en $x = 0$:",
          autoConfig: { type: "multiple_choice", choices: ["Tiene punto de inflexion", "Tiene maximo relativo", "Tiene minimo relativo", "No tiene nada especial"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-6-4",
          type: "auto",
          question: "El punto de inflexion de $f(x) = x^3$ esta en:",
          autoConfig: { type: "multiple_choice", choices: ["$(1, 1)$", "$(-1, -1)$", "$(0, 0)$", "No tiene"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-6-5",
          type: "auto",
          question: "Si $f(x) = x^3 - 6x^2 + 12x$, entonces $f''(x) = 0$ en $x =$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "2" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-6-6",
          type: "auto",
          question: "La segunda derivada de $f(x) = x^4 - 4x^3$ se anula en $x = 0$ y $x =$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "2" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-6-7",
          type: "manual",
          question: "Halla los puntos de inflexion de $f(x) = x^4 - 6x^2 + 8x + 1$ y estudia la concavidad en cada intervalo.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-6-8",
          type: "manual",
          question: "Estudia la concavidad y los puntos de inflexion de $f(x) = \\dfrac{x}{x^2 + 1}$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-6-9",
          type: "manual",
          question: "(Tipo PAU) Dada $f(x) = x^3 - 3x^2 + 4$, realiza el estudio completo: monotonia, extremos, concavidad y puntos de inflexion. Esboza la grafica.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-6-10",
          type: "manual",
          question: "Explica por que $f''(c) = 0$ NO es condicion suficiente para punto de inflexion. Pon un contraejemplo.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "der-6-11",
          type: "manual",
          question: "Estudia concavidad y puntos de inflexion de $f(x) = e^{-x^2}$. Calcula $f''(x)$ y determina donde cambia de signo.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    }
  ]
};
