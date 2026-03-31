const probabilidad = {
  name: "Probabilidad",
  order: 3,
  status: "locked",
  theoryBlocks: [
    {
      id: "prob-1",
      status: "available",
      title: "Espacio muestral, sucesos y operaciones",
      content: "La **probabilidad** es la rama de las matematicas que estudia los fenomenos aleatorios: aquellos cuyo resultado no se puede predecir con certeza.\n\nUn **experimento aleatorio** es aquel que, realizado en las mismas condiciones, puede dar resultados diferentes. Ejemplo: lanzar un dado, extraer una carta, elegir una persona al azar.\n\nEl **espacio muestral** $\\Omega$ (o $E$) es el conjunto de todos los resultados posibles. Ejemplo: al lanzar un dado, $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$.\n\nUn **suceso** es cualquier subconjunto de $\\Omega$. Tipos de sucesos:\n- **Suceso elemental:** un solo resultado. Ejemplo: $A = \\{3\\}$ (sacar un 3).\n- **Suceso compuesto:** varios resultados. Ejemplo: $B = \\{2, 4, 6\\}$ (sacar par).\n- **Suceso seguro:** $\\Omega$ completo. Siempre ocurre.\n- **Suceso imposible:** $\\emptyset$. Nunca ocurre.\n- **Suceso complementario:** $\\bar{A}$ contiene los resultados de $\\Omega$ que no estan en $A$.\n\n**Operaciones con sucesos:**\n- **Union** $A \\cup B$: ocurre $A$ o $B$ (o ambos).\n- **Interseccion** $A \\cap B$: ocurren $A$ y $B$ a la vez.\n- **Complementario** $\\bar{A}$: no ocurre $A$.\n- **Diferencia** $A - B = A \\cap \\bar{B}$: ocurre $A$ pero no $B$.\n\n**Regla de Laplace:** si todos los resultados son equiprobables:\n$P(A) = \\frac{\\text{casos favorables}}{\\text{casos posibles}} = \\frac{|A|}{|\\Omega|}$\n\n**Propiedades fundamentales (axiomas de Kolmogorov):**\n1. $0 \\leq P(A) \\leq 1$ para todo suceso $A$.\n2. $P(\\Omega) = 1$.\n3. Si $A \\cap B = \\emptyset$, entonces $P(A \\cup B) = P(A) + P(B)$.\n\nDe los axiomas se deducen: $P(\\bar{A}) = 1 - P(A)$ y $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.\n\nDos sucesos son **mutuamente excluyentes** (o incompatibles) si $A \\cap B = \\emptyset$, es decir, no pueden ocurrir a la vez. En ese caso: $P(A \\cup B) = P(A) + P(B)$.",
      exercises: [
        {
          id: "prob-1-1",
          type: "auto",
          question: "El espacio muestral al lanzar dos monedas es:",
          autoConfig: { type: "multiple_choice", choices: ["$\\{C, X\\}$", "$\\{CC, CX, XC, XX\\}$", "$\\{CC, CX, XX\\}$", "$\\{0, 1, 2\\}$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-1-2",
          type: "auto",
          question: "Si $P(A) = 0.7$, entonces $P(\\bar{A})$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$0.7$", "$0.3$", "$1.4$", "$-0.7$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-1-3",
          type: "auto",
          question: "Si $P(A) = 0.4$, $P(B) = 0.5$ y $P(A \\cap B) = 0.2$, entonces $P(A \\cup B)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$0.9$", "$0.7$", "$0.2$", "$0.1$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-1-4",
          type: "auto",
          question: "Dos sucesos mutuamente excluyentes cumplen:",
          autoConfig: { type: "multiple_choice", choices: ["$P(A \\cap B) = P(A) \\cdot P(B)$", "$A \\cap B = \\emptyset$", "$P(A \\cup B) = P(A) \\cdot P(B)$", "$P(A) + P(B) = 1$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-1-5",
          type: "auto",
          question: "La probabilidad de sacar un 7 al lanzar un dado de 6 caras es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-1-6",
          type: "auto",
          question: "Al lanzar un dado justo, la probabilidad de obtener un numero mayor que 4 es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "1/3" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-1-7",
          type: "auto",
          question: "Si $A$ y $B$ son mutuamente excluyentes y $P(A) = 0.3$, $P(B) = 0.5$, entonces $P(A \\cup B)$:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0.8" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-1-8",
          type: "manual",
          question: "Se lanza un dado de 6 caras. Define los sucesos: $A$ = 'sacar par', $B$ = 'sacar mayor que 3'. Calcula: a) $P(A)$, b) $P(B)$, c) $P(A \\cap B)$, d) $P(A \\cup B)$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-1-9",
          type: "manual",
          question: "En una clase de 40 alumnos, 25 estudian ingles, 15 estudian frances y 8 estudian ambos. Si se elige un alumno al azar, calcula: a) $P(\\text{ingles o frances})$, b) $P(\\text{ni ingles ni frances})$, c) $P(\\text{solo ingles})$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-1-10",
          type: "manual",
          question: "Se extraen 2 cartas de una baraja espanola de 40 cartas (sin devolver la primera). Calcula la probabilidad de que las dos sean oros. Usa la regla de Laplace con combinaciones.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-1-11",
          type: "manual",
          question: "Demuestra que para dos sucesos cualesquiera se cumple $P(A \\cup B) \\leq P(A) + P(B)$. Da un ejemplo donde la igualdad se cumple y otro donde no.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "prob-2",
      status: "locked",
      title: "Probabilidad condicionada",
      content: "La **probabilidad condicionada** $P(A|B)$ es la probabilidad de que ocurra $A$ sabiendo que ya ha ocurrido $B$. Se define como:\n\n$P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0$\n\nDe esta definicion se deduce la **regla del producto** (o regla de la multiplicacion):\n$P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)$\n\nEjemplo: en una urna hay 5 bolas rojas y 3 azules. Se extraen 2 sin reposicion. Sea $A$ = 'la 2a es roja' y $B$ = 'la 1a es roja'. Entonces:\n$P(B) = 5/8$\n$P(A|B) = 4/7$ (tras sacar una roja quedan 4 rojas de 7 bolas)\n$P(A \\cap B) = \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$\n\n**Sucesos independientes:** dos sucesos $A$ y $B$ son independientes si la ocurrencia de uno no afecta la probabilidad del otro:\n$P(A|B) = P(A) \\quad \\text{y equivalentemente} \\quad P(A \\cap B) = P(A) \\cdot P(B)$\n\nEjemplo: al lanzar un dado dos veces, los resultados son independientes. Si $A$ = 'sacar 6 en el primero' y $B$ = 'sacar par en el segundo': $P(A \\cap B) = \\frac{1}{6} \\cdot \\frac{1}{2} = \\frac{1}{12}$.\n\n**Cuidado:** independencia $\\neq$ exclusion mutua.\n- Si $A$ y $B$ son mutuamente excluyentes ($A \\cap B = \\emptyset$), $P(A \\cap B) = 0$. Si ademas $P(A) > 0$ y $P(B) > 0$, NO son independientes.\n- Si $A$ y $B$ son independientes con $P(A) > 0$ y $P(B) > 0$, entonces $P(A \\cap B) = P(A) \\cdot P(B) > 0$, asi que NO son mutuamente excluyentes.\n\n**Diagramas de arbol:** herramienta visual esencial. En cada rama se escribe la probabilidad condicionada. Para obtener $P(A \\cap B)$, se multiplican las probabilidades del camino. Para obtener $P(A)$, se suman todos los caminos que terminan en $A$.",
      exercises: [
        {
          id: "prob-2-1",
          type: "auto",
          question: "Si $P(A) = 0.6$, $P(B) = 0.5$ y $P(A \\cap B) = 0.3$, entonces $P(A|B)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$0.5$", "$0.6$", "$0.3$", "$0.15$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-2-2",
          type: "auto",
          question: "Dos sucesos independientes cumplen:",
          autoConfig: { type: "multiple_choice", choices: ["$P(A \\cap B) = 0$", "$P(A|B) = P(A)$", "$P(A \\cup B) = 1$", "$P(A) + P(B) = 1$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-2-3",
          type: "auto",
          question: "Si $A$ y $B$ son independientes con $P(A) = 0.4$ y $P(B) = 0.3$, entonces $P(A \\cap B)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$0.7$", "$0.12$", "$0.1$", "$0$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-2-4",
          type: "auto",
          question: "Si $A$ y $B$ son mutuamente excluyentes con $P(A) > 0$ y $P(B) > 0$, entonces son:",
          autoConfig: { type: "multiple_choice", choices: ["Siempre independientes", "Nunca independientes", "A veces independientes", "No se puede saber"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-2-5",
          type: "auto",
          question: "Si $P(B) = 0.4$ y $P(A \\cap B) = 0.1$, entonces $P(A|B)$ vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0.25" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-2-6",
          type: "auto",
          question: "En un diagrama de arbol, la probabilidad de un camino completo se obtiene:",
          autoConfig: { type: "multiple_choice", choices: ["Sumando las probabilidades de las ramas", "Multiplicando las probabilidades de las ramas", "Restando las probabilidades", "Dividiendo las probabilidades"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-2-7",
          type: "auto",
          question: "Si $P(A) = 0.3$ y $P(B|A) = 0.5$, entonces $P(A \\cap B)$ es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0.15" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-2-8",
          type: "manual",
          question: "Una urna tiene 6 bolas rojas y 4 azules. Se extraen 2 bolas sin reposicion. Usando un diagrama de arbol, calcula: a) $P(\\text{ambas rojas})$, b) $P(\\text{una de cada color})$, c) $P(\\text{la 2a es azul})$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-2-9",
          type: "manual",
          question: "Se lanzan dos dados. Sean $A$ = 'la suma es 7' y $B$ = 'el primer dado es 3'. Calcula $P(A)$, $P(B)$, $P(A \\cap B)$ y $P(A|B)$. Determina si $A$ y $B$ son independientes.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-2-10",
          type: "manual",
          question: "En un instituto, el 60% de los alumnos aprueba matematicas. De los que aprueban matematicas, el 80% aprueba fisica. De los que suspenden matematicas, el 30% aprueba fisica. Se elige un alumno al azar. Calcula: a) $P(\\text{aprueba ambas})$, b) $P(\\text{aprueba fisica})$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-2-11",
          type: "manual",
          question: "Explica con un ejemplo concreto por que independencia y exclusion mutua son conceptos distintos. Demuestra que si dos sucesos son mutuamente excluyentes (con probabilidad positiva) no pueden ser independientes.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "prob-3",
      status: "locked",
      title: "Teorema de la probabilidad total",
      content: "El **teorema de la probabilidad total** permite calcular la probabilidad de un suceso $A$ cuando se conoce su probabilidad condicionada respecto a una particion del espacio muestral.\n\nUna **particion** de $\\Omega$ es un conjunto de sucesos $B_1, B_2, \\ldots, B_n$ que cumplen:\n1. Son mutuamente excluyentes: $B_i \\cap B_j = \\emptyset$ para $i \\neq j$.\n2. Su union es $\\Omega$: $B_1 \\cup B_2 \\cup \\cdots \\cup B_n = \\Omega$.\n3. Cada $B_i$ tiene probabilidad positiva: $P(B_i) > 0$.\n\n**Enunciado:** Si $\\{B_1, B_2, \\ldots, B_n\\}$ es una particion de $\\Omega$, entonces para cualquier suceso $A$:\n\n$P(A) = \\sum_{i=1}^{n} P(B_i) \\cdot P(A|B_i) = P(B_1) \\cdot P(A|B_1) + P(B_2) \\cdot P(A|B_2) + \\cdots + P(B_n) \\cdot P(A|B_n)$\n\nLa idea es descomponer $A$ en partes disjuntas: $A = (A \\cap B_1) \\cup (A \\cap B_2) \\cup \\cdots \\cup (A \\cap B_n)$, y sumar las probabilidades de cada parte.\n\nEjemplo clasico (fabricas): Una empresa tiene tres fabricas. La fabrica I produce el 40% de las piezas, la II el 35% y la III el 25%. Los porcentajes de piezas defectuosas son: I: 2%, II: 3%, III: 5%.\n\nSea $D$ = 'pieza defectuosa'. Aplicando el teorema:\n$P(D) = P(F_I) \\cdot P(D|F_I) + P(F_{II}) \\cdot P(D|F_{II}) + P(F_{III}) \\cdot P(D|F_{III})$\n$P(D) = 0.40 \\cdot 0.02 + 0.35 \\cdot 0.03 + 0.25 \\cdot 0.05$\n$P(D) = 0.008 + 0.0105 + 0.0125 = 0.031$\n\nEs decir, el 3.1% de las piezas son defectuosas.\n\nEn un **diagrama de arbol**, la probabilidad total es la suma de todos los caminos que terminan en el suceso de interes (la ultima columna). Es como sumar todas las \"hojas\" que corresponden al suceso $A$.",
      exercises: [
        {
          id: "prob-3-1",
          type: "auto",
          question: "Para aplicar el teorema de la probabilidad total, los sucesos $B_i$ deben formar:",
          autoConfig: { type: "multiple_choice", choices: ["Un conjunto cualquiera", "Una particion del espacio muestral", "Sucesos independientes", "Sucesos equiprobables"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-3-2",
          type: "auto",
          question: "Si $P(B_1) = 0.6$, $P(B_2) = 0.4$, $P(A|B_1) = 0.3$ y $P(A|B_2) = 0.5$, entonces $P(A)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$0.38$", "$0.42$", "$0.80$", "$0.12$"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-3-3",
          type: "auto",
          question: "El teorema de la probabilidad total descompone $P(A)$ como suma de:",
          autoConfig: { type: "multiple_choice", choices: ["$P(A|B_i)$ para cada $i$", "$P(B_i \\cap A)$ para cada $i$", "$P(B_i)$ para cada $i$", "$P(A \\cup B_i)$ para cada $i$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-3-4",
          type: "auto",
          question: "Si hay 2 maquinas: $M_1$ produce el 70% y $M_2$ el 30%. $M_1$ tiene 4% de defectos y $M_2$ tiene 6%. La probabilidad de pieza defectuosa es:",
          autoConfig: { type: "multiple_choice", choices: ["$0.028$", "$0.046$", "$0.10$", "$0.018$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-3-5",
          type: "auto",
          question: "Si $P(B_1) = 0.5$, $P(B_2) = 0.3$, $P(B_3) = 0.2$ y $P(A|B_1) = 0.1$, $P(A|B_2) = 0.2$, $P(A|B_3) = 0.3$, la probabilidad total $P(A)$ es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0.17" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-3-6",
          type: "auto",
          question: "En un diagrama de arbol, la probabilidad total de un suceso se calcula:",
          autoConfig: { type: "multiple_choice", choices: ["Multiplicando todas las ramas finales", "Sumando las probabilidades de todos los caminos que terminan en ese suceso", "Dividiendo entre el numero de ramas", "Tomando la probabilidad del camino mas probable"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-3-7",
          type: "manual",
          question: "Una tienda compra moviles a tres proveedores: A (50%), B (30%) y C (20%). Las tasas de defectos son: A: 1%, B: 3%, C: 5%. Calcula la probabilidad de que un movil elegido al azar sea defectuoso. Dibuja el diagrama de arbol.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-3-8",
          type: "manual",
          question: "El 40% de los alumnos de un instituto va andando, el 35% en autobus y el 25% en coche. La probabilidad de llegar tarde es: andando 5%, autobus 15%, coche 8%. Calcula la probabilidad de que un alumno elegido al azar llegue tarde.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-3-9",
          type: "manual",
          question: "Un test medico detecta una enfermedad que afecta al 2% de la poblacion. El test da positivo en el 95% de los enfermos (sensibilidad) y da negativo en el 90% de los sanos (especificidad). Calcula la probabilidad de dar positivo en el test.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-3-10",
          type: "manual",
          question: "En una bolsa hay 3 monedas: una normal (cara/cruz equiprobable), una trucada (siempre cara) y otra trucada (cara con probabilidad 1/3). Se elige una moneda al azar y se lanza. Calcula la probabilidad de obtener cara.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "prob-4",
      status: "locked",
      title: "Teorema de Bayes",
      content: "El **teorema de Bayes** permite \"invertir\" probabilidades condicionadas. Dada una particion $\\{B_1, B_2, \\ldots, B_n\\}$ de $\\Omega$ y un suceso $A$ con $P(A) > 0$:\n\n$P(B_i|A) = \\frac{P(B_i) \\cdot P(A|B_i)}{P(A)} = \\frac{P(B_i) \\cdot P(A|B_i)}{\\sum_{j=1}^{n} P(B_j) \\cdot P(A|B_j)}$\n\nEl denominador es la **probabilidad total** $P(A)$.\n\nInterpretacion: conocemos las probabilidades \"directas\" $P(A|B_i)$ (probabilidad del efecto dada la causa) y queremos las \"inversas\" $P(B_i|A)$ (probabilidad de la causa dado el efecto).\n\nTerminologia bayesiana:\n- $P(B_i)$: probabilidad **a priori** (antes de observar $A$).\n- $P(B_i|A)$: probabilidad **a posteriori** (despues de observar $A$).\n- $P(A|B_i)$: **verosimilitud** (como de probable es $A$ si la causa es $B_i$).\n\nEjemplo (continuacion del problema de fabricas): $P(F_I) = 0.40$, $P(F_{II}) = 0.35$, $P(F_{III}) = 0.25$. Defectos: $P(D|F_I) = 0.02$, $P(D|F_{II}) = 0.03$, $P(D|F_{III}) = 0.05$.\n\nYa calculamos $P(D) = 0.031$. Si una pieza es defectuosa, de que fabrica viene?\n\n$P(F_I|D) = \\frac{0.40 \\cdot 0.02}{0.031} = \\frac{0.008}{0.031} \\approx 0.258$\n\n$P(F_{II}|D) = \\frac{0.35 \\cdot 0.03}{0.031} = \\frac{0.0105}{0.031} \\approx 0.339$\n\n$P(F_{III}|D) = \\frac{0.25 \\cdot 0.05}{0.031} = \\frac{0.0125}{0.031} \\approx 0.403$\n\nA pesar de que la fabrica III produce menos piezas, es la mas probable de ser el origen de una pieza defectuosa, porque tiene la mayor tasa de defectos.\n\nNota: $P(F_I|D) + P(F_{II}|D) + P(F_{III}|D) = 1$ (las probabilidades a posteriori suman 1).\n\n**En PAU**, Bayes aparece tipicamente como: \"Si ocurrio A, cual es la probabilidad de que viniera de $B_i$?\". Siempre hay que calcular primero $P(A)$ con probabilidad total y luego aplicar Bayes.",
      exercises: [
        {
          id: "prob-4-1",
          type: "auto",
          question: "El teorema de Bayes permite calcular:",
          autoConfig: { type: "multiple_choice", choices: ["$P(A \\cup B)$", "$P(B_i|A)$ a partir de $P(A|B_i)$", "$P(A \\cap B)$", "$P(A) + P(B)$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-4-2",
          type: "auto",
          question: "En el teorema de Bayes, $P(B_i)$ se llama probabilidad:",
          autoConfig: { type: "multiple_choice", choices: ["A posteriori", "Condicionada", "A priori", "Total"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-4-3",
          type: "auto",
          question: "Si $P(B_1) = 0.7$, $P(A|B_1) = 0.2$, $P(B_2) = 0.3$, $P(A|B_2) = 0.6$ y $P(A) = 0.32$, entonces $P(B_1|A)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$0.4375$", "$0.5625$", "$0.14$", "$0.70$"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-4-4",
          type: "auto",
          question: "Las probabilidades a posteriori $P(B_i|A)$ para todos los $B_i$ de la particion suman:",
          autoConfig: { type: "multiple_choice", choices: ["$P(A)$", "$0$", "$1$", "No se puede saber"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-4-5",
          type: "auto",
          question: "Para aplicar Bayes, primero hay que calcular $P(A)$ usando el teorema de:",
          autoConfig: { type: "fill_blank", expectedAnswer: "probabilidad total" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-4-6",
          type: "auto",
          question: "Si $P(B) = 0.3$, $P(A|B) = 0.8$ y $P(A) = 0.5$, entonces $P(B|A)$ vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0.48" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-4-7",
          type: "manual",
          question: "(PAU) Una fabrica tiene 2 maquinas. $M_1$ produce el 60% y $M_2$ el 40%. El 3% de piezas de $M_1$ y el 5% de $M_2$ son defectuosas. a) Calcula la probabilidad de que una pieza sea defectuosa. b) Si una pieza es defectuosa, calcula la probabilidad de que venga de $M_2$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-4-8",
          type: "manual",
          question: "Un test detecta una enfermedad que afecta al 1% de la poblacion. El test da positivo en el 99% de los enfermos y en el 5% de los sanos. Si una persona da positivo, cual es la probabilidad de que realmente este enferma? Interpreta el resultado.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-4-9",
          type: "manual",
          question: "En un sorteo hay 3 puertas. Detras de una hay un premio y detras de las otras dos no hay nada. Eliges una puerta. El presentador, que sabe donde esta el premio, abre otra puerta que no tiene premio. Calcula con Bayes si conviene cambiar de puerta (problema de Monty Hall).",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-4-10",
          type: "manual",
          question: "Un alumno puede estudiar (70% de probabilidad) o no estudiar (30%). Si estudia, aprueba el 90% de las veces. Si no estudia, aprueba el 20%. a) Probabilidad de aprobar. b) Si aprobo, probabilidad de que hubiera estudiado. c) Si suspendio, probabilidad de que no hubiera estudiado.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-4-11",
          type: "manual",
          question: "Tres cajas contienen bolas: Caja 1: 4 blancas y 2 negras. Caja 2: 3 blancas y 3 negras. Caja 3: 1 blanca y 5 negras. Se elige una caja al azar y se saca una bola. a) Probabilidad de que sea blanca. b) Si es blanca, probabilidad de que sea de la Caja 1.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "prob-5",
      status: "locked",
      title: "Distribucion Binomial",
      content: "La **distribucion binomial** $B(n, p)$ modela el numero de exitos en $n$ ensayos independientes de Bernoulli, donde cada ensayo tiene probabilidad de exito $p$ y de fracaso $q = 1 - p$.\n\nCondiciones para que una variable siga una binomial:\n1. Se realiza un numero fijo $n$ de ensayos.\n2. Cada ensayo es independiente de los demas.\n3. Cada ensayo tiene solo dos resultados: exito (probabilidad $p$) o fracaso (probabilidad $q = 1-p$).\n4. La probabilidad de exito $p$ es constante en todos los ensayos.\n\nLa **funcion de probabilidad** es:\n$P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot q^{n-k}, \\quad k = 0, 1, 2, \\ldots, n$\n\ndonde $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ es el numero combinatorio.\n\n**Parametros:**\n- Media (esperanza): $E(X) = \\mu = n \\cdot p$\n- Varianza: $\\text{Var}(X) = \\sigma^2 = n \\cdot p \\cdot q$\n- Desviacion tipica: $\\sigma = \\sqrt{n \\cdot p \\cdot q}$\n\nEjemplo: si lanzamos un dado 10 veces, $X$ = numero de seises sigue $B(10, 1/6)$.\n$P(X = 2) = \\binom{10}{2} \\cdot \\left(\\frac{1}{6}\\right)^2 \\cdot \\left(\\frac{5}{6}\\right)^8 = 45 \\cdot \\frac{1}{36} \\cdot \\frac{390625}{1679616} \\approx 0.2907$\n\n**Probabilidades acumuladas:**\n- $P(X \\leq k) = \\sum_{i=0}^{k} P(X = i)$ (sumar desde 0 hasta $k$)\n- $P(X \\geq k) = 1 - P(X \\leq k-1)$ (complementario, mas comodo)\n- $P(X > k) = 1 - P(X \\leq k)$\n- $P(a \\leq X \\leq b) = P(X \\leq b) - P(X \\leq a-1)$\n\n**Simetria:** si $X \\sim B(n, p)$, entonces $n - X \\sim B(n, 1-p)$. Esto es util para simplificar calculos cuando $p$ es grande.",
      exercises: [
        {
          id: "prob-5-1",
          type: "auto",
          question: "Si $X \\sim B(8, 0.5)$, la media $E(X)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$8$", "$0.5$", "$4$", "$2$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-5-2",
          type: "auto",
          question: "Si $X \\sim B(10, 0.3)$, la varianza $\\text{Var}(X)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$3$", "$7$", "$2.1$", "$0.21$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-5-3",
          type: "auto",
          question: "$P(X \\geq 3)$ se puede calcular como:",
          autoConfig: { type: "multiple_choice", choices: ["$P(X = 3) + P(X = 4) + \\cdots$", "$1 - P(X \\leq 2)$", "Ambas son correctas", "Ninguna es correcta"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-5-4",
          type: "auto",
          question: "En $B(5, 0.4)$, el numero combinatorio $\\binom{5}{3}$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$15$", "$10$", "$20$", "$60$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-5-5",
          type: "auto",
          question: "Si $X \\sim B(6, 0.5)$, entonces $P(X = 0)$ es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "1/64" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-5-6",
          type: "auto",
          question: "La desviacion tipica de $B(100, 0.2)$ es $\\sigma = \\sqrt{100 \\cdot 0.2 \\cdot 0.8}$, que vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "4" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-5-7",
          type: "manual",
          question: "Un examen tipo test tiene 10 preguntas con 4 opciones cada una. Si un alumno responde al azar, calcula: a) La probabilidad de acertar exactamente 3. b) La probabilidad de acertar al menos 1. c) El numero esperado de aciertos y la desviacion tipica.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-5-8",
          type: "manual",
          question: "Un tirador acierta el 80% de sus disparos. Si dispara 6 veces: a) Calcula $P(X = 6)$ (acierta todos). b) Calcula $P(X \\geq 5)$. c) Cual es el numero mas probable de aciertos?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-5-9",
          type: "manual",
          question: "En una linea de produccion, el 5% de las piezas son defectuosas. Se eligen 20 piezas al azar. Calcula: a) $P(X = 0)$ (ninguna defectuosa). b) $P(X \\leq 2)$ (como maximo 2 defectuosas). c) $P(X \\geq 3)$ (al menos 3 defectuosas).",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-5-10",
          type: "manual",
          question: "(PAU) Se sabe que el 30% de los votantes prefiere el partido A. Se eligen 5 votantes al azar. a) Justifica que $X$ sigue una distribucion binomial e indica sus parametros. b) Calcula $P(X = 2)$, $P(X > 3)$ y $E(X)$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-5-11",
          type: "manual",
          question: "Un medicamento tiene una eficacia del 75%. Se administra a 8 pacientes. a) Calcula la probabilidad de que sea eficaz en exactamente 6 pacientes. b) Calcula la probabilidad de que sea eficaz en al menos 7. c) Cuantos pacientes se espera que mejoren?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "prob-6",
      status: "locked",
      title: "Distribucion Normal y tipificacion",
      content: "La **distribucion normal** $N(\\mu, \\sigma)$ es la distribucion continua mas importante en estadistica. Su grafica es la famosa \"campana de Gauss\".\n\n**Parametros:**\n- $\\mu$ (media): centro de la campana.\n- $\\sigma$ (desviacion tipica): controla la anchura. A mayor $\\sigma$, mas dispersa.\n\n**Propiedades:**\n1. La curva es simetrica respecto a $x = \\mu$.\n2. El area total bajo la curva es 1.\n3. Regla empirica (68-95-99.7):\n   - $P(\\mu - \\sigma < X < \\mu + \\sigma) \\approx 0.6827$\n   - $P(\\mu - 2\\sigma < X < \\mu + 2\\sigma) \\approx 0.9545$\n   - $P(\\mu - 3\\sigma < X < \\mu + 3\\sigma) \\approx 0.9973$\n\n**Tipificacion:** para usar la tabla, se transforma cualquier $N(\\mu, \\sigma)$ en la **normal estandar** $N(0, 1)$ mediante:\n\n$Z = \\frac{X - \\mu}{\\sigma}$\n\nLa tabla de la normal estandar da $P(Z \\leq z)$ para valores de $z$.\n\n**Calculos con la tabla:**\n- $P(X \\leq a)$: tipificar $a$, buscar en tabla.\n- $P(X \\geq a) = 1 - P(X \\leq a) = 1 - P(Z \\leq z_a)$.\n- $P(a \\leq X \\leq b) = P(Z \\leq z_b) - P(Z \\leq z_a)$.\n- Por simetria: $P(Z \\leq -z) = 1 - P(Z \\leq z)$.\n\nEjemplo: las alturas de estudiantes siguen $N(170, 8)$ (en cm).\na) $P(X < 180)$: $z = (180-170)/8 = 1.25$. En tabla: $P(Z \\leq 1.25) = 0.8944$.\nb) $P(X > 165)$: $z = (165-170)/8 = -0.625$. $P(Z > -0.625) = P(Z \\leq 0.625) = 0.7340$.\nc) $P(160 < X < 175)$: $z_1 = (160-170)/8 = -1.25$, $z_2 = (175-170)/8 = 0.625$. $P = P(Z \\leq 0.625) - P(Z \\leq -1.25) = 0.7340 - 0.1056 = 0.6284$.\n\n**Aproximacion de la binomial por la normal:** si $X \\sim B(n,p)$ con $np \\geq 5$ y $nq \\geq 5$, entonces $X$ se puede aproximar por $N(np, \\sqrt{npq})$. Con **correccion de continuidad**: $P(X \\leq k) \\approx P\\left(Z \\leq \\frac{k + 0.5 - np}{\\sqrt{npq}}\\right)$.",
      exercises: [
        {
          id: "prob-6-1",
          type: "auto",
          question: "Si $X \\sim N(100, 15)$, al tipificar $X = 130$ se obtiene $Z =$",
          autoConfig: { type: "multiple_choice", choices: ["$2$", "$1.5$", "$30$", "$0.5$"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-6-2",
          type: "auto",
          question: "En una $N(0,1)$, $P(Z \\leq 0) =$",
          autoConfig: { type: "multiple_choice", choices: ["$0$", "$0.5$", "$1$", "$0.68$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-6-3",
          type: "auto",
          question: "Si $P(Z \\leq 1.5) = 0.9332$, entonces $P(Z \\geq 1.5)$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$0.9332$", "$0.0668$", "$0.5$", "$0.4332$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-6-4",
          type: "auto",
          question: "Por simetria, $P(Z \\leq -1.96)$ es igual a:",
          autoConfig: { type: "multiple_choice", choices: ["$P(Z \\geq 1.96)$", "$P(Z \\leq 1.96)$", "$1$", "$0$"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-6-5",
          type: "auto",
          question: "Si $X \\sim N(50, 10)$, $P(X < 50)$ vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0.5" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-6-6",
          type: "auto",
          question: "La binomial $B(100, 0.4)$ se puede aproximar por una normal $N(\\mu, \\sigma)$ con $\\mu =$",
          autoConfig: { type: "fill_blank", expectedAnswer: "40" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-6-7",
          type: "auto",
          question: "Segun la regla 68-95-99.7, el porcentaje de datos entre $\\mu - 2\\sigma$ y $\\mu + 2\\sigma$ es aproximadamente:",
          autoConfig: { type: "fill_blank", expectedAnswer: "95.45" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-6-8",
          type: "manual",
          question: "Las notas de un examen siguen $N(6, 1.5)$. Calcula: a) $P(X > 8)$ (nota mayor que 8). b) $P(5 \\leq X \\leq 7)$. c) La nota minima del 10% de alumnos con mejores notas.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-6-9",
          type: "manual",
          question: "El peso de un producto sigue $N(500, 20)$ gramos. Se rechaza si pesa menos de 470 g o mas de 540 g. Calcula: a) $P(\\text{rechazo})$. b) En una produccion de 1000 unidades, cuantas se espera rechazar?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-6-10",
          type: "manual",
          question: "(PAU) Si $X \\sim B(200, 0.3)$, usa la aproximacion normal para calcular: a) $P(X \\leq 50)$. b) $P(55 \\leq X \\leq 70)$. Indica que normal usas y aplica la correccion de continuidad.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "prob-6-11",
          type: "manual",
          question: "La duracion de las llamadas a un call center sigue $N(4.5, 1.2)$ minutos. a) Que porcentaje dura mas de 6 minutos? b) Que porcentaje dura entre 3 y 5 minutos? c) Halla la duracion $d$ tal que solo el 5% de las llamadas duran mas de $d$ minutos.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    }
  ]
};

export default probabilidad;
