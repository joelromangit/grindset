const integrales = {
  name: 'Integrales',
  order: 8,
  status: 'locked',
  theoryBlocks: [
    // =========================================================================
    // BLOQUE 1: Concepto de integral indefinida y primitivas inmediatas
    // =========================================================================
    {
      id: 'int-block-1',
      title: 'Concepto de integral indefinida y primitivas inmediatas',
      status: 'available',
      content: `La integral es la operacion inversa de la derivada. Si derivar es "bajar", integrar es "subir". Cuando tenemos una funcion $f(x)$ y buscamos otra funcion $F(x)$ cuya derivada sea $f(x)$, decimos que $F(x)$ es una primitiva de $f(x)$.

Formalmente: $F(x)$ es primitiva de $f(x)$ si $F'(x) = f(x)$.

Pero ojo: si $F(x)$ es primitiva de $f(x)$, entonces $F(x) + C$ (con $C$ cualquier constante) tambien lo es, porque la derivada de una constante es cero. Por eso siempre anadimos $+ C$ al resultado: la constante de integracion.

La integral indefinida se escribe asi:

$\\int f(x)\\,dx = F(x) + C$

Donde $\\int$ es el signo de integracion, $f(x)$ es el integrando, $dx$ indica la variable de integracion y $C$ es la constante de integracion.

Estas son las primitivas inmediatas que DEBES memorizar:

$\\int k\\,dx = kx + C$ (constante)

$\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$ (potencia)

$\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$ (caso $n = -1$)

$\\int e^x\\,dx = e^x + C$ (exponencial)

$\\int a^x\\,dx = \\dfrac{a^x}{\\ln a} + C$ (exponencial general)

$\\int \\sin x\\,dx = -\\cos x + C$ (seno)

$\\int \\cos x\\,dx = \\sin x + C$ (coseno)

$\\int \\dfrac{1}{\\cos^2 x}\\,dx = \\tan x + C$ (secante al cuadrado)

$\\int \\dfrac{1}{\\sqrt{1-x^2}}\\,dx = \\arcsin x + C$ (arcoseno)

$\\int \\dfrac{1}{1+x^2}\\,dx = \\arctan x + C$ (arcotangente)

Propiedades fundamentales:

$\\int [f(x) + g(x)]\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx$ (la integral de una suma es la suma de integrales)

$\\int k \\cdot f(x)\\,dx = k \\cdot \\int f(x)\\,dx$ (se puede sacar una constante fuera de la integral)

Estas propiedades junto con las primitivas inmediatas te permiten resolver muchas integrales directamente.`,
      exercises: [
        {
          id: 'int-1-1',
          type: 'auto',
          question: 'Una primitiva de $f(x) = 3x^2$ es:',
          autoConfig: { type: 'multiple_choice', choices: ['$6x + C$', '$x^3 + C$', '$x^3$', '$3x^3 + C$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-2',
          type: 'auto',
          question: 'El resultado de $\\int 5\\,dx$ es:',
          autoConfig: { type: 'multiple_choice', choices: ['$5$', '$5x$', '$5x + C$', '$\\dfrac{5x^2}{2} + C$'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-3',
          type: 'auto',
          question: '$\\int x^4\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$4x^3 + C$', '$\\dfrac{x^5}{5} + C$', '$\\dfrac{x^4}{4} + C$', '$x^5 + C$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-4',
          type: 'auto',
          question: '$\\int \\dfrac{1}{x}\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\dfrac{x^0}{0} + C$', '$\\ln x + C$', '$\\ln|x| + C$', '$-\\dfrac{1}{x^2} + C$'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-5',
          type: 'auto',
          question: '$\\int e^x\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$xe^{x-1} + C$', '$e^x + C$', '$\\dfrac{e^{x+1}}{x+1} + C$', '$e^x$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-6',
          type: 'auto',
          question: '$\\int \\cos x\\,dx$ es igual a:',
          autoConfig: { type: 'fill_blank', expectedAnswer: 'sin x + C' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-7',
          type: 'auto',
          question: '$\\int x^{-3}\\,dx = \\dfrac{x^n}{n} + C$. El valor de $n$ es:',
          autoConfig: { type: 'fill_blank', expectedAnswer: '-2' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-8',
          type: 'auto',
          question: '$\\int (3x^2 + 2x)\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$6x + 2 + C$', '$x^3 + x^2 + C$', '$3x^3 + 2x^2 + C$', '$x^3 + x^2$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-9',
          type: 'auto',
          question: '$\\int \\sqrt{x}\\,dx = \\int x^{1/2}\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\dfrac{2}{3}x^{3/2} + C$', '$\\dfrac{1}{2\\sqrt{x}} + C$', '$\\dfrac{x^{3/2}}{3} + C$', '$2\\sqrt{x} + C$'], correctIndex: 0 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-10',
          type: 'auto',
          question: '$\\int \\sin x\\,dx$ es igual a:',
          autoConfig: { type: 'fill_blank', expectedAnswer: '-cos x + C' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-11',
          type: 'manual',
          question: 'Calcula $\\int (4x^3 - 6x^2 + 2x - 5)\\,dx$. Muestra cada paso aplicando las propiedades de linealidad y la regla de la potencia.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-12',
          type: 'manual',
          question: 'Calcula $\\int \\left(\\dfrac{3}{x} + 2e^x - \\sin x\\right)\\,dx$. Descompone la integral y aplica las primitivas inmediatas.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-13',
          type: 'manual',
          question: 'Calcula $\\int \\left(\\dfrac{2}{x^3} + 5\\sqrt{x} - \\dfrac{1}{x}\\right)\\,dx$. Reescribe cada termino como potencia de $x$ antes de integrar.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-14',
          type: 'manual',
          question: 'Si $F(x) = x^3 + 2x + 7$, verifica que $F(x)$ es una primitiva de $f(x) = 3x^2 + 2$ calculando $F\'(x)$. Explica por que $G(x) = x^3 + 2x - 10$ tambien es primitiva de $f(x)$.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-1-15',
          type: 'manual',
          question: 'Calcula $\\int \\left(3\\cos x + \\dfrac{4}{1+x^2}\\right)\\,dx$ y comprueba el resultado derivando.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },

    // =========================================================================
    // BLOQUE 2: Integracion por sustitucion (cambio de variable)
    // =========================================================================
    {
      id: 'int-block-2',
      title: 'Integracion por sustitucion (cambio de variable)',
      status: 'locked',
      content: `Cuando la integral no es inmediata, la tecnica mas basica es el cambio de variable (o sustitucion). La idea es simplificar la integral reemplazando una parte del integrando por una nueva variable.

El metodo se basa en la regla de la cadena al reves. Recuerda: si $F'(x) = f(x)$, entonces la derivada de $F(g(x))$ es $f(g(x)) \\cdot g'(x)$. Al integrar, obtenemos:

$\\int f(g(x)) \\cdot g'(x)\\,dx = F(g(x)) + C$

Los pasos del cambio de variable son:

1. Identificar una parte del integrando que, si la llamamos $u = g(x)$, simplifica la expresion.
2. Calcular $du = g'(x)\\,dx$, es decir, derivar $u$ respecto a $x$.
3. Sustituir en la integral: reemplazar $g(x)$ por $u$ y $g'(x)\\,dx$ por $du$.
4. Resolver la integral en funcion de $u$ (deberia ser mas sencilla).
5. Deshacer el cambio: sustituir $u$ por $g(x)$ en el resultado.

Ejemplo: Calcular $\\int 2x \\cdot e^{x^2}\\,dx$

Hacemos $u = x^2$, entonces $du = 2x\\,dx$. La integral se convierte en:

$\\int e^u\\,du = e^u + C = e^{x^2} + C$

Otro ejemplo: $\\int \\dfrac{3x^2}{x^3 + 1}\\,dx$

Hacemos $u = x^3 + 1$, entonces $du = 3x^2\\,dx$:

$\\int \\dfrac{1}{u}\\,du = \\ln|u| + C = \\ln|x^3 + 1| + C$

A veces la derivada no aparece exacta, pero se puede ajustar con constantes:

$\\int x \\cdot e^{x^2}\\,dx$

Hacemos $u = x^2$, $du = 2x\\,dx$, asi que $x\\,dx = \\dfrac{du}{2}$:

$\\int e^u \\cdot \\dfrac{du}{2} = \\dfrac{1}{2}e^u + C = \\dfrac{1}{2}e^{x^2} + C$

Casos tipicos de sustitucion en selectividad:

$\\int f(ax + b)\\,dx$: Cambio $u = ax + b$, $du = a\\,dx$

$\\int \\dfrac{f'(x)}{f(x)}\\,dx = \\ln|f(x)| + C$ (la derivada del denominador esta en el numerador)

$\\int f'(x) \\cdot [f(x)]^n\\,dx = \\dfrac{[f(x)]^{n+1}}{n+1} + C$`,
      exercises: [
        {
          id: 'int-2-1',
          type: 'auto',
          question: 'Para calcular $\\int 2x \\cdot (x^2 + 3)^5\\,dx$, el cambio de variable mas adecuado es:',
          autoConfig: { type: 'multiple_choice', choices: ['$u = 2x$', '$u = x^2 + 3$', '$u = (x^2+3)^5$', '$u = x^2$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-2',
          type: 'auto',
          question: '$\\int \\cos(3x)\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\sin(3x) + C$', '$3\\sin(3x) + C$', '$\\dfrac{\\sin(3x)}{3} + C$', '$-\\sin(3x) + C$'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-3',
          type: 'auto',
          question: '$\\int e^{5x}\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$5e^{5x} + C$', '$\\dfrac{e^{5x}}{5} + C$', '$e^{5x} + C$', '$\\dfrac{e^{5x+1}}{5x+1} + C$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-4',
          type: 'auto',
          question: '$\\int \\dfrac{2x}{x^2 + 1}\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\dfrac{1}{x^2+1} + C$', '$\\arctan(x^2+1) + C$', '$\\ln(x^2 + 1) + C$', '$\\ln|x| + C$'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-5',
          type: 'auto',
          question: 'Si $u = 2x + 7$, entonces $du$ es igual a:',
          autoConfig: { type: 'fill_blank', expectedAnswer: '2 dx' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-6',
          type: 'auto',
          question: '$\\int (2x+1)^4\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\dfrac{(2x+1)^5}{5} + C$', '$\\dfrac{(2x+1)^5}{10} + C$', '$\\dfrac{(2x+1)^5}{2} + C$', '$4(2x+1)^3 + C$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-7',
          type: 'auto',
          question: '$\\int \\dfrac{e^x}{e^x + 1}\\,dx$ es igual a:',
          autoConfig: { type: 'fill_blank', expectedAnswer: 'ln|e^x + 1| + C' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-8',
          type: 'auto',
          question: '$\\int \\sin(4x)\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\cos(4x) + C$', '$-\\cos(4x) + C$', '$\\dfrac{-\\cos(4x)}{4} + C$', '$\\dfrac{\\cos(4x)}{4} + C$'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-9',
          type: 'auto',
          question: '$\\int \\dfrac{6x^2}{x^3 - 5}\\,dx$ es igual a:',
          autoConfig: { type: 'fill_blank', expectedAnswer: '2 ln|x^3 - 5| + C' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-10',
          type: 'manual',
          question: 'Calcula $\\int x \\cdot \\sqrt{x^2 + 4}\\,dx$ usando el cambio de variable $u = x^2 + 4$. Detalla cada paso: sustitucion, integracion y deshacer el cambio.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-11',
          type: 'manual',
          question: 'Calcula $\\int \\dfrac{\\cos x}{\\sin^2 x}\\,dx$ usando el cambio $u = \\sin x$. Explica por que este cambio funciona.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-12',
          type: 'manual',
          question: 'Calcula $\\int \\dfrac{x}{(x^2+1)^3}\\,dx$. Indica el cambio de variable, calcula $du$, resuelve y comprueba derivando.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-13',
          type: 'manual',
          question: 'Calcula $\\int x^2 \\cdot e^{x^3}\\,dx$. Identifica que falta en el integrando respecto al diferencial de $u = x^3$ y ajusta con la constante adecuada.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-2-14',
          type: 'manual',
          question: 'Calcula $\\int \\dfrac{1}{\\sqrt{3x+2}}\\,dx$ con el cambio $u = 3x + 2$.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },

    // =========================================================================
    // BLOQUE 3: Integracion por partes
    // =========================================================================
    {
      id: 'int-block-3',
      title: 'Integracion por partes',
      status: 'locked',
      content: `La integracion por partes es la tecnica que se usa cuando el integrando es un producto de dos funciones de distinta naturaleza (polinomio por exponencial, polinomio por trigonometrica, polinomio por logaritmo, etc.).

Viene de la regla del producto de la derivacion. Si $u$ y $v$ son funciones de $x$:

$(u \\cdot v)' = u' \\cdot v + u \\cdot v'$

Integrando ambos lados y despejando:

$\\int u\\,dv = u \\cdot v - \\int v\\,du$

Esta es la formula de integracion por partes. Para aplicarla:

1. Elegir que parte del integrando es $u$ y que parte es $dv$.
2. Calcular $du$ (derivando $u$) y $v$ (integrando $dv$).
3. Sustituir en la formula.

La clave esta en elegir bien $u$ y $dv$. La regla LIATE te ayuda a decidir que tomar como $u$ (en orden de prioridad):

L - Logaritmicas ($\\ln x$, $\\log x$)
I - Inversas trigonometricas ($\\arctan x$, $\\arcsin x$)
A - Algebraicas (polinomios: $x^2$, $x$, $3x+1$)
T - Trigonometricas ($\\sin x$, $\\cos x$)
E - Exponenciales ($e^x$, $2^x$)

La funcion que este mas arriba en la lista se elige como $u$, y el resto sera $dv$.

Ejemplo: $\\int x \\cdot e^x\\,dx$

Elegimos $u = x$ (algebraica) y $dv = e^x\\,dx$ (exponencial, mas abajo en LIATE).
Entonces $du = dx$ y $v = e^x$.

$\\int x \\cdot e^x\\,dx = x \\cdot e^x - \\int e^x\\,dx = x \\cdot e^x - e^x + C = e^x(x-1) + C$

Ejemplo: $\\int x \\cdot \\ln x\\,dx$

Elegimos $u = \\ln x$ (logaritmica, arriba en LIATE) y $dv = x\\,dx$.
Entonces $du = \\dfrac{1}{x}\\,dx$ y $v = \\dfrac{x^2}{2}$.

$\\int x \\cdot \\ln x\\,dx = \\dfrac{x^2}{2} \\cdot \\ln x - \\int \\dfrac{x^2}{2} \\cdot \\dfrac{1}{x}\\,dx = \\dfrac{x^2}{2} \\ln x - \\dfrac{1}{2}\\int x\\,dx = \\dfrac{x^2}{2} \\ln x - \\dfrac{x^2}{4} + C$

A veces hay que aplicar partes DOS veces (integrales ciclicas). Ejemplo tipico: $\\int e^x \\cdot \\sin x\\,dx$. Al aplicar partes dos veces, la integral original reaparece y se despeja algebraicamente.`,
      exercises: [
        {
          id: 'int-3-1',
          type: 'auto',
          question: 'Para calcular $\\int x \\cdot \\cos x\\,dx$ por partes, segun la regla LIATE debemos elegir:',
          autoConfig: { type: 'multiple_choice', choices: ['$u = \\cos x$, $dv = x\\,dx$', '$u = x$, $dv = \\cos x\\,dx$', '$u = x\\cos x$, $dv = dx$', '$u = 1$, $dv = x\\cos x\\,dx$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-2',
          type: 'auto',
          question: '$\\int x \\cdot e^x\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$x \\cdot e^x + C$', '$e^x(x+1) + C$', '$e^x(x-1) + C$', '$\\dfrac{x^2}{2} \\cdot e^x + C$'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-3',
          type: 'auto',
          question: 'Si elegimos $u = \\ln x$ y $dv = dx$ para calcular $\\int \\ln x\\,dx$, entonces $du$ es:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\dfrac{1}{x}$', '$x\\,dx$', '$\\dfrac{1}{x}\\,dx$', '$\\ln x\\,dx$'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-4',
          type: 'auto',
          question: '$\\int \\ln x\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\dfrac{1}{x} + C$', '$x \\ln x - x + C$', '$x \\ln x + x + C$', '$\\dfrac{\\ln^2 x}{2} + C$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-5',
          type: 'auto',
          question: 'La formula de integracion por partes es:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\int u\\,dv = u \\cdot v + \\int v\\,du$', '$\\int u\\,dv = u \\cdot v - \\int v\\,du$', '$\\int u\\,dv = u \\cdot v - \\int u\\,dv$', '$\\int u\\,dv = v \\cdot du - \\int u\\,dv$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-6',
          type: 'auto',
          question: 'En la regla LIATE, la L se refiere a funciones:',
          autoConfig: { type: 'fill_blank', expectedAnswer: 'logaritmicas' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-7',
          type: 'auto',
          question: 'Para $\\int x^2 \\cdot \\ln x\\,dx$, la eleccion correcta es $u = \\ln x$. Entonces $dv$ es:',
          autoConfig: { type: 'fill_blank', expectedAnswer: 'x^2 dx' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-8',
          type: 'auto',
          question: '$\\int x \\cdot \\sin x\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$-x\\cos x + \\sin x + C$', '$x\\cos x - \\sin x + C$', '$-x\\cos x - \\sin x + C$', '$x\\sin x + \\cos x + C$'], correctIndex: 0 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-9',
          type: 'manual',
          question: 'Calcula $\\int x^2 \\cdot e^x\\,dx$. Necesitaras aplicar integracion por partes DOS veces. Muestra cada aplicacion por separado.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-10',
          type: 'manual',
          question: 'Calcula $\\int x \\cdot \\ln x\\,dx$. Elige $u$ y $dv$ justificando tu eleccion con la regla LIATE, y resuelve paso a paso.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-11',
          type: 'manual',
          question: 'Calcula $\\int (x+1) \\cdot \\cos x\\,dx$ por partes. Comprueba el resultado derivando.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-12',
          type: 'manual',
          question: 'Calcula $\\int e^x \\cdot \\sin x\\,dx$. Esta es una integral ciclica: aplica partes dos veces y despeja la integral original de la ecuacion resultante.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-13',
          type: 'manual',
          question: 'Calcula $\\int \\arctan x\\,dx$ usando integracion por partes con $u = \\arctan x$ y $dv = dx$. (Pista: la integral resultante se resuelve por sustitucion.)',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-3-14',
          type: 'manual',
          question: 'Calcula $\\int x^2 \\cdot \\sin x\\,dx$. Aplica partes dos veces y simplifica el resultado final.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },

    // =========================================================================
    // BLOQUE 4: Integracion de funciones racionales (fracciones simples)
    // =========================================================================
    {
      id: 'int-block-4',
      title: 'Integracion de funciones racionales (fracciones simples)',
      status: 'locked',
      content: `Una funcion racional es un cociente de polinomios: $\\dfrac{P(x)}{Q(x)}$. Para integrarlas, descomponemos la fraccion en fracciones simples (parciales) que son mas faciles de integrar.

Paso previo: si el grado del numerador es mayor o igual que el del denominador, hay que hacer la division de polinomios primero.

Metodo de descomposicion en fracciones simples:

1. Factorizar el denominador $Q(x)$ completamente.
2. Escribir la descomposicion segun el tipo de factores.
3. Hallar las constantes (igualando coeficientes o dando valores a $x$).
4. Integrar cada fraccion simple.

Tipos de factores y su descomposicion:

Factores lineales simples $(ax + b)$:

$\\dfrac{P(x)}{(x-a)(x-b)} = \\dfrac{A}{x-a} + \\dfrac{B}{x-b}$

Cada fraccion $\\dfrac{A}{x-a}$ se integra como $A\\ln|x-a| + C$.

Factores lineales repetidos $(ax+b)^n$:

$\\dfrac{P(x)}{(x-a)^2} = \\dfrac{A}{x-a} + \\dfrac{B}{(x-a)^2}$

La fraccion $\\dfrac{B}{(x-a)^2}$ se integra como $\\dfrac{-B}{x-a} + C$.

Factores cuadraticos irreducibles $(ax^2 + bx + c)$ con $b^2 - 4ac < 0$:

$\\dfrac{P(x)}{(x^2+bx+c)} = \\dfrac{Ax+B}{x^2+bx+c}$

Estas se integran combinando logaritmo y arcotangente.

Ejemplo: $\\int \\dfrac{3x+1}{(x-1)(x+2)}\\,dx$

Descomponemos: $\\dfrac{3x+1}{(x-1)(x+2)} = \\dfrac{A}{x-1} + \\dfrac{B}{x+2}$

Multiplicando: $3x+1 = A(x+2) + B(x-1)$

Si $x = 1$: $4 = 3A \\Rightarrow A = \\dfrac{4}{3}$
Si $x = -2$: $-5 = -3B \\Rightarrow B = \\dfrac{5}{3}$

$\\int \\dfrac{3x+1}{(x-1)(x+2)}\\,dx = \\dfrac{4}{3}\\ln|x-1| + \\dfrac{5}{3}\\ln|x+2| + C$

Ejemplo con factor repetido: $\\int \\dfrac{x+3}{(x+1)^2}\\,dx$

$\\dfrac{x+3}{(x+1)^2} = \\dfrac{A}{x+1} + \\dfrac{B}{(x+1)^2}$

$x + 3 = A(x+1) + B$. Si $x = -1$: $2 = B$. Coeficiente de $x$: $1 = A$.

$\\int \\left(\\dfrac{1}{x+1} + \\dfrac{2}{(x+1)^2}\\right)dx = \\ln|x+1| - \\dfrac{2}{x+1} + C$`,
      exercises: [
        {
          id: 'int-4-1',
          type: 'auto',
          question: 'La descomposicion en fracciones simples de $\\dfrac{5x}{(x-1)(x+3)}$ tiene la forma:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\dfrac{A}{x-1} + \\dfrac{B}{x+3}$', '$\\dfrac{Ax+B}{(x-1)(x+3)}$', '$\\dfrac{A}{(x-1)(x+3)}$', '$\\dfrac{Ax}{x-1} + \\dfrac{Bx}{x+3}$'], correctIndex: 0 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-2',
          type: 'auto',
          question: '$\\int \\dfrac{1}{x-3}\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\dfrac{-1}{(x-3)^2} + C$', '$\\ln(x-3) + C$', '$\\ln|x-3| + C$', '$\\dfrac{1}{(x-3)^2} + C$'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-3',
          type: 'auto',
          question: 'Si $\\dfrac{2x+5}{(x+1)(x-2)} = \\dfrac{A}{x+1} + \\dfrac{B}{x-2}$, el valor de $A$ es:',
          autoConfig: { type: 'multiple_choice', choices: ['$1$', '$-1$', '$3$', '$-3$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-4',
          type: 'auto',
          question: '$\\int \\dfrac{1}{(x-2)^2}\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\ln|x-2| + C$', '$\\dfrac{-1}{x-2} + C$', '$\\dfrac{1}{x-2} + C$', '$\\dfrac{-2}{(x-2)^3} + C$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-5',
          type: 'auto',
          question: 'Antes de descomponer $\\dfrac{x^3 + 1}{x^2 - 1}$ en fracciones simples, lo primero que hay que hacer es:',
          autoConfig: { type: 'multiple_choice', choices: ['Factorizar el numerador', 'Factorizar el denominador', 'Hacer la division de polinomios', 'Completar cuadrados'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-6',
          type: 'auto',
          question: 'Si $\\dfrac{3x+1}{(x-1)(x+2)} = \\dfrac{A}{x-1} + \\dfrac{B}{x+2}$, el valor de $B$ es:',
          autoConfig: { type: 'fill_blank', expectedAnswer: '5/3' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-7',
          type: 'auto',
          question: 'Para el denominador $(x-1)(x^2+1)$, la descomposicion correcta es:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\dfrac{A}{x-1} + \\dfrac{B}{x^2+1}$', '$\\dfrac{A}{x-1} + \\dfrac{Bx+C}{x^2+1}$', '$\\dfrac{A}{x-1} + \\dfrac{B}{x+i} + \\dfrac{C}{x-i}$', '$\\dfrac{Ax+B}{x-1} + \\dfrac{C}{x^2+1}$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-8',
          type: 'auto',
          question: '$\\int \\dfrac{1}{x^2-4}\\,dx = \\int \\dfrac{1}{(x-2)(x+2)}\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\dfrac{1}{4}\\ln\\left|\\dfrac{x-2}{x+2}\\right| + C$', '$\\ln|x^2-4| + C$', '$\\arctan(x/2) + C$', '$\\dfrac{1}{2}\\ln|x^2-4| + C$'], correctIndex: 0 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-9',
          type: 'manual',
          question: 'Calcula $\\int \\dfrac{5x-3}{(x-2)(x+1)}\\,dx$. Descompone en fracciones simples, halla las constantes y resuelve.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-10',
          type: 'manual',
          question: 'Calcula $\\int \\dfrac{x+5}{x^2+4x+3}\\,dx$. Factoriza primero el denominador y luego descompone en fracciones simples.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-11',
          type: 'manual',
          question: 'Calcula $\\int \\dfrac{2x+1}{(x-1)^2}\\,dx$ usando la descomposicion con factor repetido.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-12',
          type: 'manual',
          question: 'Calcula $\\int \\dfrac{x^2 + 2}{x^2 - 1}\\,dx$. Primero realiza la division de polinomios (el grado del numerador es igual al del denominador) y luego integra.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-13',
          type: 'manual',
          question: 'Calcula $\\int \\dfrac{3}{x(x^2+1)}\\,dx$. Descompone en fracciones simples teniendo en cuenta el factor cuadratico irreducible.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-4-14',
          type: 'manual',
          question: 'Calcula $\\int \\dfrac{x^2+3x+2}{x^3+x^2}\\,dx$. Factoriza el denominador ($x^2(x+1)$), descompone y resuelve.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },

    // =========================================================================
    // BLOQUE 5: Integral definida y Regla de Barrow
    // =========================================================================
    {
      id: 'int-block-5',
      title: 'Integral definida y Regla de Barrow',
      status: 'locked',
      content: `La integral definida de $f(x)$ entre $a$ y $b$ se escribe $\\int_a^b f(x)\\,dx$ y representa el area con signo bajo la curva $f(x)$ entre $x = a$ y $x = b$.

Geometricamente, si $f(x) \\geq 0$ en $[a,b]$, la integral definida es el area entre la curva y el eje $x$. Si $f(x) < 0$, el area se cuenta negativa.

La Regla de Barrow (o Teorema Fundamental del Calculo) conecta la integral definida con la indefinida:

$\\int_a^b f(x)\\,dx = F(b) - F(a) = [F(x)]_a^b$

Donde $F(x)$ es cualquier primitiva de $f(x)$ (no hace falta la constante $C$, se cancela).

Esto significa: para calcular una integral definida, primero encuentras la primitiva y luego evaluas en los limites.

Ejemplo: $\\int_1^3 2x\\,dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$

Propiedades de la integral definida:

$\\int_a^a f(x)\\,dx = 0$ (limites iguales dan cero)

$\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$ (invertir limites cambia el signo)

$\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$ (aditividad respecto al intervalo)

$\\int_a^b [f(x) \\pm g(x)]\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$ (linealidad)

$\\int_a^b k \\cdot f(x)\\,dx = k \\cdot \\int_a^b f(x)\\,dx$ (constante fuera)

Ejemplo con Barrow: $\\int_0^{\\pi} \\sin x\\,dx = [-\\cos x]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = -(-1) - (-1) = 1 + 1 = 2$

Ejemplo con sustitucion en integral definida:

$\\int_0^1 2x \\cdot e^{x^2}\\,dx$

Cambio: $u = x^2$, $du = 2x\\,dx$. Cambiamos los limites: si $x=0$, $u=0$; si $x=1$, $u=1$.

$\\int_0^1 e^u\\,du = [e^u]_0^1 = e^1 - e^0 = e - 1$`,
      exercises: [
        {
          id: 'int-5-1',
          type: 'auto',
          question: '$\\int_0^2 3x^2\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$6$', '$8$', '$12$', '$4$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-2',
          type: 'auto',
          question: '$\\int_1^1 (x^3 + 2x)\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$3$', '$1$', '$0$', '$-1$'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-3',
          type: 'auto',
          question: '$\\int_0^1 e^x\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$e$', '$e - 1$', '$e + 1$', '$1$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-4',
          type: 'auto',
          question: 'Si $\\int_1^5 f(x)\\,dx = 7$, entonces $\\int_5^1 f(x)\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$7$', '$0$', '$-7$', '$14$'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-5',
          type: 'auto',
          question: '$\\int_0^{\\pi} \\cos x\\,dx$ es igual a:',
          autoConfig: { type: 'fill_blank', expectedAnswer: '0' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-6',
          type: 'auto',
          question: '$\\int_1^e \\dfrac{1}{x}\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$0$', '$1$', '$e$', '$e - 1$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-7',
          type: 'auto',
          question: 'La Regla de Barrow establece que $\\int_a^b f(x)\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$F(a) - F(b)$', '$F(b) - F(a)$', '$F(a) + F(b)$', '$f(b) - f(a)$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-8',
          type: 'auto',
          question: '$\\int_{-1}^{1} x^3\\,dx$ es igual a:',
          autoConfig: { type: 'fill_blank', expectedAnswer: '0' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-9',
          type: 'auto',
          question: 'Si $\\int_0^3 f(x)\\,dx = 5$ y $\\int_3^7 f(x)\\,dx = 3$, entonces $\\int_0^7 f(x)\\,dx$ es:',
          autoConfig: { type: 'fill_blank', expectedAnswer: '8' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-10',
          type: 'auto',
          question: '$\\int_0^4 \\sqrt{x}\\,dx$ es igual a:',
          autoConfig: { type: 'multiple_choice', choices: ['$4$', '$\\dfrac{16}{3}$', '$8$', '$\\dfrac{8}{3}$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-11',
          type: 'manual',
          question: 'Calcula $\\int_0^2 (3x^2 - 4x + 1)\\,dx$ paso a paso aplicando la Regla de Barrow.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-12',
          type: 'manual',
          question: 'Calcula $\\int_1^4 \\left(\\dfrac{2}{\\sqrt{x}} + 3x\\right)\\,dx$. Reescribe $\\dfrac{2}{\\sqrt{x}}$ como $2x^{-1/2}$ y aplica Barrow.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-13',
          type: 'manual',
          question: 'Calcula $\\int_0^1 x \\cdot e^{x^2}\\,dx$ usando cambio de variable. Recuerda cambiar los limites de integracion al hacer la sustitucion.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-14',
          type: 'manual',
          question: 'Demuestra que $\\int_{-a}^{a} x^3\\,dx = 0$ para cualquier $a > 0$. (Pista: usa que $x^3$ es una funcion impar.)',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-5-15',
          type: 'manual',
          question: 'Calcula $\\int_0^{\\pi/2} (\\sin x + \\cos x)\\,dx$ y da una interpretacion geometrica del resultado.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },

    // =========================================================================
    // BLOQUE 6: Calculo de areas (entre curvas, con el eje x)
    // =========================================================================
    {
      id: 'int-block-6',
      title: 'Calculo de areas (entre curvas y con el eje x)',
      status: 'locked',
      content: `Una de las aplicaciones principales de la integral definida en selectividad es el calculo de areas. Aqui hay que tener MUCHO cuidado con los signos.

Area entre una curva y el eje $x$:

Si $f(x) \\geq 0$ en $[a,b]$, el area es directamente:

$A = \\int_a^b f(x)\\,dx$

Si $f(x) \\leq 0$ en $[a,b]$, la integral da un valor negativo. El area (siempre positiva) es:

$A = -\\int_a^b f(x)\\,dx = \\int_a^b |f(x)|\\,dx$

Si $f(x)$ cambia de signo en $[a,b]$, hay que dividir el intervalo en los puntos donde $f(x) = 0$ (cortes con el eje $x$) y calcular cada trozo por separado, poniendo valor absoluto a los trozos negativos:

$A = \\int_a^c f(x)\\,dx + \\left|\\int_c^b f(x)\\,dx\\right|$

donde $c$ es el punto donde $f(x) = 0$.

Ejemplo: Area entre $f(x) = x^2 - 4$ y el eje $x$ en $[-2, 2]$:

$f(x) = 0 \\Rightarrow x = \\pm 2$. En $[-2, 2]$, $f(x) \\leq 0$.

$A = -\\int_{-2}^{2} (x^2-4)\\,dx = -\\left[\\dfrac{x^3}{3} - 4x\\right]_{-2}^{2} = -\\left[\\left(\\dfrac{8}{3}-8\\right) - \\left(-\\dfrac{8}{3}+8\\right)\\right] = -\\left[-\\dfrac{16}{3} - \\dfrac{16}{3}\\right] = \\dfrac{32}{3}$

Area entre dos curvas:

Si $f(x) \\geq g(x)$ en $[a,b]$, el area entre ambas curvas es:

$A = \\int_a^b [f(x) - g(x)]\\,dx$

Si no sabes cual esta por encima, calcula los puntos de interseccion ($f(x) = g(x)$) y en cada subintervalo resta la de arriba menos la de abajo, o usa valor absoluto:

$A = \\int_a^b |f(x) - g(x)|\\,dx$

Procedimiento para problemas de areas en selectividad:

1. Dibujar (o imaginar) las funciones.
2. Encontrar los puntos de interseccion (entre ellas o con el eje $x$).
3. Determinar que funcion esta por encima en cada intervalo.
4. Plantear la integral (o integrales) correctamente.
5. Calcular usando Barrow.

Ejemplo: Area entre $f(x) = x^2$ y $g(x) = x$:

Intersecciones: $x^2 = x \\Rightarrow x^2 - x = 0 \\Rightarrow x(x-1) = 0 \\Rightarrow x = 0, x = 1$

En $[0,1]$: $g(x) = x \\geq x^2 = f(x)$.

$A = \\int_0^1 (x - x^2)\\,dx = \\left[\\dfrac{x^2}{2} - \\dfrac{x^3}{3}\\right]_0^1 = \\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{1}{6}$`,
      exercises: [
        {
          id: 'int-6-1',
          type: 'auto',
          question: 'El area entre $f(x) = x$ y el eje $x$ en $[0, 3]$ es:',
          autoConfig: { type: 'multiple_choice', choices: ['$3$', '$\\dfrac{9}{2}$', '$9$', '$6$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-2',
          type: 'auto',
          question: 'Si $\\int_0^2 f(x)\\,dx = -5$, el area encerrada entre $f(x)$ y el eje $x$ en $[0,2]$ (suponiendo $f(x) \\leq 0$) es:',
          autoConfig: { type: 'multiple_choice', choices: ['$-5$', '$5$', '$0$', '$10$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-3',
          type: 'auto',
          question: 'Para calcular el area entre dos curvas $f(x)$ y $g(x)$, lo primero que hay que encontrar es:',
          autoConfig: { type: 'multiple_choice', choices: ['Las derivadas', 'Los puntos de interseccion', 'Las asintotas', 'Los maximos y minimos'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-4',
          type: 'auto',
          question: 'Los puntos de interseccion de $f(x) = x^2$ y $g(x) = 2x$ son:',
          autoConfig: { type: 'multiple_choice', choices: ['$x = 0$ y $x = 1$', '$x = 0$ y $x = 2$', '$x = 1$ y $x = 2$', '$x = -2$ y $x = 2$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-5',
          type: 'auto',
          question: 'El area entre $f(x) = x^2$ y $g(x) = 2x$ en $[0, 2]$ es:',
          autoConfig: { type: 'fill_blank', expectedAnswer: '4/3' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-6',
          type: 'auto',
          question: 'Si $f(x) \\geq 0$ en $[a,c]$ y $f(x) \\leq 0$ en $[c,b]$, el area total entre $f(x)$ y el eje $x$ en $[a,b]$ es:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\int_a^b f(x)\\,dx$', '$\\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$', '$\\int_a^c f(x)\\,dx - \\int_c^b f(x)\\,dx$', '$\\left|\\int_a^b f(x)\\,dx\\right|$'], correctIndex: 2 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-7',
          type: 'auto',
          question: 'El area entre $f(x) = \\sin x$ y el eje $x$ en $[0, \\pi]$ es:',
          autoConfig: { type: 'fill_blank', expectedAnswer: '2' },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-8',
          type: 'auto',
          question: 'El area encerrada entre $y = x^2$ y $y = 4$ es:',
          autoConfig: { type: 'multiple_choice', choices: ['$\\dfrac{16}{3}$', '$\\dfrac{32}{3}$', '$8$', '$\\dfrac{8}{3}$'], correctIndex: 1 },
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-9',
          type: 'manual',
          question: 'Calcula el area encerrada entre la funcion $f(x) = x^2 - 1$ y el eje $x$. Primero encuentra los cortes con el eje $x$, luego determina el signo de $f$ en cada intervalo y plantea la integral correctamente.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-10',
          type: 'manual',
          question: 'Calcula el area encerrada entre $f(x) = x^2$ y $g(x) = x + 2$. Encuentra los puntos de interseccion, determina que funcion va por encima e integra.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-11',
          type: 'manual',
          question: 'Calcula el area encerrada entre $f(x) = x^3 - x$ y el eje $x$ en $[-1, 1]$. Ojo: la funcion cambia de signo. Divide el calculo en subintervalos.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-12',
          type: 'manual',
          question: 'Calcula el area encerrada entre las parabolas $y = x^2$ e $y = 6 - x^2$. Haz un esquema de las dos curvas, encuentra intersecciones y resuelve.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-13',
          type: 'manual',
          question: 'Calcula el area encerrada entre $f(x) = e^x$, el eje $x$, la recta $x = 0$ y la recta $x = 2$.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-14',
          type: 'manual',
          question: '(Tipo PAU) Dada la funcion $f(x) = -x^2 + 4x - 3$:\na) Halla los puntos de corte con el eje $x$.\nb) Calcula el area encerrada entre $f(x)$ y el eje $x$.\nc) Calcula el area encerrada entre $f(x)$ y la recta $y = 0$ en el intervalo $[0, 4]$. (Ojo: $f$ puede ser negativa en parte del intervalo.)',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: 'int-6-15',
          type: 'manual',
          question: '(Tipo PAU) Calcula el area de la region acotada encerrada entre $f(x) = x^2 - 2x$ y $g(x) = -x^2 + 4x$. Dibuja un esquema, encuentra las intersecciones y justifica que funcion esta por encima.',
          autoConfig: null,
          status: 'pending',
          studentAnswer: null,
          photoUrl: null
        }
      ]
    }
  ]
};

export default integrales;
