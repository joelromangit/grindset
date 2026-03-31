const estadistica = {
  name: "Estadistica",
  order: 4,
  status: "locked",
  theoryBlocks: [
    {
      id: "est-1",
      status: "available",
      title: "Estadistica descriptiva: medidas de centralizacion y dispersion",
      content: "La **estadistica descriptiva** se ocupa de recopilar, organizar y resumir datos. Las herramientas fundamentales son las medidas de centralizacion (donde se situan los datos) y las medidas de dispersion (como de dispersos estan).\n\n**Medidas de centralizacion:**\n\n**Media aritmetica** ($\\bar{x}$): la suma de todos los valores dividida por el numero de datos.\n$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$\n\nSi los datos estan en una tabla de frecuencias: $\\bar{x} = \\frac{\\sum_{i=1}^{k} x_i \\cdot f_i}{n}$, donde $f_i$ es la frecuencia absoluta de cada valor $x_i$.\n\n**Mediana** ($Me$): el valor central al ordenar los datos de menor a mayor.\n- Si $n$ es impar: el valor de la posicion $\\frac{n+1}{2}$.\n- Si $n$ es par: la media de los valores en las posiciones $\\frac{n}{2}$ y $\\frac{n}{2}+1$.\n\n**Moda** ($Mo$): el valor que mas se repite (puede haber varias modas o ninguna).\n\n**Medidas de dispersion:**\n\n**Varianza** ($\\sigma^2$ o $s^2$): mide la dispersion promedio de los datos respecto a la media.\n$\\sigma^2 = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n} = \\frac{\\sum x_i^2}{n} - \\bar{x}^2$\n\nLa segunda expresion (formula de Konig) es mas comoda para calcular.\n\n**Desviacion tipica** ($\\sigma$ o $s$): la raiz cuadrada de la varianza. Tiene las mismas unidades que los datos.\n$\\sigma = \\sqrt{\\sigma^2}$\n\n**Coeficiente de variacion** ($CV$): permite comparar dispersiones de datos con distintas unidades o escalas.\n$CV = \\frac{\\sigma}{\\bar{x}}$\n\nCuanto menor es $CV$, mas homogeneos son los datos.\n\n**Cuartiles, percentiles y diagrama de caja:** los cuartiles $Q_1$, $Q_2$ (= mediana) y $Q_3$ dividen los datos ordenados en cuatro partes iguales. El rango intercuartilico $IQR = Q_3 - Q_1$ mide la dispersion del 50% central.",
      exercises: [
        {
          id: "est-1-1",
          type: "auto",
          question: "La media de los datos $\\{2, 4, 6, 8, 10\\}$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$5$", "$6$", "$4$", "$8$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-1-2",
          type: "auto",
          question: "La mediana de $\\{3, 7, 1, 9, 5\\}$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$7$", "$1$", "$5$", "$9$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-1-3",
          type: "auto",
          question: "La varianza se calcula como la media de:",
          autoConfig: { type: "multiple_choice", choices: ["Las desviaciones respecto a la media", "Los cuadrados de las desviaciones respecto a la media", "Los valores absolutos de las desviaciones", "Los datos al cuadrado"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-1-4",
          type: "auto",
          question: "El coeficiente de variacion sirve para:",
          autoConfig: { type: "multiple_choice", choices: ["Calcular la media", "Comparar dispersiones de datos con distintas unidades", "Hallar la mediana", "Calcular la moda"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-1-5",
          type: "auto",
          question: "Si $\\bar{x} = 5$ y $\\sum x_i^2 / n = 30$, la varianza es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "5" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-1-6",
          type: "auto",
          question: "La mediana de $\\{2, 4, 6, 8\\}$ es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "5" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-1-7",
          type: "auto",
          question: "Si la varianza es $16$, la desviacion tipica es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "4" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-1-8",
          type: "manual",
          question: "Dada la serie de datos: $\\{3, 5, 7, 5, 8, 5, 9, 4, 6, 8\\}$, calcula: a) Media. b) Mediana. c) Moda. d) Varianza y desviacion tipica.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-1-9",
          type: "manual",
          question: "Las notas de 30 alumnos se resumen en la tabla:\n| Nota | 3 | 4 | 5 | 6 | 7 | 8 | 9 |\n| Frecuencia | 2 | 3 | 6 | 8 | 5 | 4 | 2 |\n\nCalcula la media, la varianza y la desviacion tipica usando la tabla de frecuencias.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-1-10",
          type: "manual",
          question: "Dos grupos de alumnos tienen estas notas medias y desviaciones tipicas: Grupo A: $\\bar{x}_A = 6.5$, $\\sigma_A = 1.2$. Grupo B: $\\bar{x}_B = 7.8$, $\\sigma_B = 2.1$. Cual es mas homogeneo? Justifica usando el coeficiente de variacion.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-1-11",
          type: "manual",
          question: "Las edades de un grupo son: $\\{18, 20, 22, 19, 25, 21, 20, 23, 19, 20\\}$. Calcula: a) Cuartiles $Q_1$, $Q_2$ y $Q_3$. b) Rango intercuartilico. c) Identifica si hay algun dato atipico (outlier) usando el criterio $Q_1 - 1.5 \\cdot IQR$ y $Q_3 + 1.5 \\cdot IQR$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-1-12",
          type: "manual",
          question: "Demuestra que si se suman $k$ unidades a todos los datos, la media aumenta en $k$ pero la varianza no cambia. Si se multiplican todos por $k$, como cambian la media y la varianza?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "est-2",
      status: "locked",
      title: "Distribuciones bidimensionales y recta de regresion",
      content: "Una **distribucion bidimensional** estudia la relacion entre dos variables $X$ e $Y$ medidas sobre los mismos individuos. Los datos se representan como pares $(x_i, y_i)$ y se visualizan en un **diagrama de dispersion** (nube de puntos).\n\nLa **covarianza** mide como varian conjuntamente dos variables:\n$\\sigma_{XY} = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{n} = \\frac{\\sum x_i y_i}{n} - \\bar{x} \\cdot \\bar{y}$\n\nLa segunda formula es mas practica para calcular.\n\n- Si $\\sigma_{XY} > 0$: relacion directa (cuando $X$ crece, $Y$ tiende a crecer).\n- Si $\\sigma_{XY} < 0$: relacion inversa (cuando $X$ crece, $Y$ tiende a decrecer).\n- Si $\\sigma_{XY} = 0$: no hay relacion lineal.\n\nLa **recta de regresion de $Y$ sobre $X$** es la recta que mejor se ajusta a la nube de puntos (minimiza la suma de errores al cuadrado en la direccion vertical). Su ecuacion es:\n\n$y - \\bar{y} = \\frac{\\sigma_{XY}}{\\sigma_X^2} \\cdot (x - \\bar{x})$\n\no equivalentemente: $y = \\bar{y} + \\frac{\\sigma_{XY}}{\\sigma_X^2} (x - \\bar{x})$\n\nEsta recta pasa siempre por el punto $(\\bar{x}, \\bar{y})$ (centro de gravedad de la nube).\n\nTambien existe la **recta de regresion de $X$ sobre $Y$**:\n$x - \\bar{x} = \\frac{\\sigma_{XY}}{\\sigma_Y^2} \\cdot (y - \\bar{y})$\n\nEsta recta se usa para predecir $X$ a partir de $Y$.\n\n**Importante en PAU:** para hacer predicciones, se usa la recta de $Y$ sobre $X$ si se conoce $x$ y se quiere estimar $y$, o la de $X$ sobre $Y$ si se conoce $y$ y se quiere estimar $x$. Las predicciones solo son fiables si la correlacion es fuerte y el valor esta dentro del rango de los datos observados (no extrapolar demasiado).",
      exercises: [
        {
          id: "est-2-1",
          type: "auto",
          question: "La covarianza mide:",
          autoConfig: { type: "multiple_choice", choices: ["La dispersion de una variable", "La relacion lineal entre dos variables", "La media de dos variables", "La diferencia entre dos variables"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-2-2",
          type: "auto",
          question: "Si $\\sigma_{XY} < 0$, la relacion entre $X$ e $Y$ es:",
          autoConfig: { type: "multiple_choice", choices: ["Directa", "Inversa", "Nula", "No se puede saber"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-2-3",
          type: "auto",
          question: "La recta de regresion de $Y$ sobre $X$ siempre pasa por el punto:",
          autoConfig: { type: "multiple_choice", choices: ["$(0, 0)$", "$(\\bar{x}, \\bar{y})$", "$(1, 1)$", "$(\\sigma_X, \\sigma_Y)$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-2-4",
          type: "auto",
          question: "Para predecir $y$ conociendo $x$, se usa la recta de regresion de:",
          autoConfig: { type: "multiple_choice", choices: ["$X$ sobre $Y$", "$Y$ sobre $X$", "Cualquiera de las dos", "Ninguna"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-2-5",
          type: "auto",
          question: "Si $\\bar{x} = 3$, $\\bar{y} = 5$, $\\sigma_{XY} = 6$ y $\\sigma_X^2 = 4$, la pendiente de la recta de $Y$ sobre $X$ es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "1.5" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-2-6",
          type: "auto",
          question: "La covarianza se puede calcular como $\\frac{\\sum x_i y_i}{n}$ menos:",
          autoConfig: { type: "fill_blank", expectedAnswer: "el producto de las medias" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-2-7",
          type: "manual",
          question: "Dados los datos:\n| $x$ | 1 | 2 | 3 | 4 | 5 |\n| $y$ | 3 | 5 | 6 | 8 | 9 |\n\nCalcula: a) $\\bar{x}$, $\\bar{y}$. b) $\\sigma_X^2$, $\\sigma_Y^2$, $\\sigma_{XY}$. c) La recta de regresion de $Y$ sobre $X$. d) Predice $y$ para $x = 6$.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-2-8",
          type: "manual",
          question: "Las horas de estudio y notas de 6 alumnos son:\n| Horas | 2 | 3 | 4 | 5 | 6 | 7 |\n| Nota  | 3 | 4 | 5 | 6 | 8 | 9 |\n\nCalcula la recta de regresion de Nota sobre Horas. Estima la nota de un alumno que estudia 8 horas. Es fiable esta prediccion?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-2-9",
          type: "manual",
          question: "Calcula las dos rectas de regresion para los datos:\n| $x$ | 1 | 2 | 3 | 4 | 5 |\n| $y$ | 10 | 8 | 7 | 5 | 3 |\n\nVerifica que ambas pasan por $(\\bar{x}, \\bar{y})$. Que tipo de relacion hay?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-2-10",
          type: "manual",
          question: "(PAU) Una empresa registra sus gastos en publicidad ($X$, en miles de euros) y ventas ($Y$, en miles de unidades):\n| Publicidad | 1 | 3 | 5 | 7 | 9 |\n| Ventas     | 5 | 8 | 12 | 15 | 18 |\n\na) Calcula la recta de regresion de $Y$ sobre $X$. b) Estima las ventas si se gastan 6000 euros en publicidad.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "est-3",
      status: "locked",
      title: "Correlacion y coeficiente de Pearson",
      content: "El **coeficiente de correlacion lineal de Pearson** ($r$) mide la intensidad y el sentido de la relacion lineal entre dos variables. Se define como:\n\n$r = \\frac{\\sigma_{XY}}{\\sigma_X \\cdot \\sigma_Y}$\n\ndonde $\\sigma_{XY}$ es la covarianza, $\\sigma_X$ y $\\sigma_Y$ son las desviaciones tipicas.\n\n**Propiedades de $r$:**\n1. $-1 \\leq r \\leq 1$ (siempre esta acotado).\n2. $r = 1$: correlacion lineal positiva perfecta (todos los puntos sobre una recta creciente).\n3. $r = -1$: correlacion lineal negativa perfecta (todos los puntos sobre una recta decreciente).\n4. $r = 0$: no hay correlacion lineal (puede haber otro tipo de relacion no lineal).\n5. $r$ no cambia si se intercambian $X$ e $Y$.\n6. $r$ no tiene unidades (es adimensional).\n\n**Interpretacion orientativa:**\n- $|r| > 0.9$: correlacion muy fuerte.\n- $0.7 < |r| < 0.9$: correlacion fuerte.\n- $0.4 < |r| < 0.7$: correlacion moderada.\n- $|r| < 0.4$: correlacion debil.\n\nEl **coeficiente de determinacion** $R^2 = r^2$ indica el porcentaje de variabilidad de $Y$ que explica la relacion lineal con $X$. Ejemplo: si $r = 0.9$, entonces $R^2 = 0.81$, es decir, la recta de regresion explica el 81% de la variabilidad de $Y$.\n\n**Relacion entre las rectas de regresion:** el producto de las pendientes de las dos rectas de regresion es $r^2$:\n$m_{Y/X} \\cdot m_{X/Y} = r^2$\n\nDe donde: si ambas pendientes tienen el mismo signo, $r$ es positivo; si tienen signos opuestos, $r$ es negativo. Ademas, cuanto mas cerca esten las dos rectas (hasta coincidir cuando $|r| = 1$), mas fuerte es la correlacion.\n\n**En PAU** es comun que pidan: calcular $r$, interpretar su valor, y opinar sobre la fiabilidad de una prediccion basandose en $r$.",
      exercises: [
        {
          id: "est-3-1",
          type: "auto",
          question: "El coeficiente de correlacion $r$ siempre cumple:",
          autoConfig: { type: "multiple_choice", choices: ["$0 \\leq r \\leq 1$", "$-1 \\leq r \\leq 1$", "$r \\geq 0$", "$r \\leq 0$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-3-2",
          type: "auto",
          question: "Si $r = -0.95$, la correlacion es:",
          autoConfig: { type: "multiple_choice", choices: ["Fuerte positiva", "Debil negativa", "Muy fuerte negativa", "Nula"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-3-3",
          type: "auto",
          question: "Si $r = 0$, esto significa que:",
          autoConfig: { type: "multiple_choice", choices: ["No hay ninguna relacion entre las variables", "No hay relacion lineal (puede haber otra)", "Las variables son independientes", "La covarianza es positiva"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-3-4",
          type: "auto",
          question: "Si $r = 0.8$, el coeficiente de determinacion $R^2$ es:",
          autoConfig: { type: "multiple_choice", choices: ["$0.8$", "$0.64$", "$0.4$", "$1.6$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-3-5",
          type: "auto",
          question: "Si $\\sigma_{XY} = 12$, $\\sigma_X = 4$ y $\\sigma_Y = 5$, entonces $r$ vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0.6" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-3-6",
          type: "auto",
          question: "Si $R^2 = 0.81$, la recta de regresion explica el porcentaje de variabilidad:",
          autoConfig: { type: "fill_blank", expectedAnswer: "81" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-3-7",
          type: "auto",
          question: "El producto de las pendientes de las dos rectas de regresion es igual a:",
          autoConfig: { type: "fill_blank", expectedAnswer: "r^2" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-3-8",
          type: "manual",
          question: "Con los datos del ejercicio anterior de horas de estudio y notas, calcula el coeficiente de correlacion $r$. Interpreta su valor y comenta la fiabilidad de las predicciones.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-3-9",
          type: "manual",
          question: "Dados los datos:\n| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |\n| $y$ | 8 | 6 | 7 | 4 | 3 | 2 |\n\nCalcula $r$ y $R^2$. Interpreta el resultado. Es fiable predecir $y$ para $x = 10$?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-3-10",
          type: "manual",
          question: "(PAU) Las rectas de regresion de un estudio bidimensional son $y = 2x + 1$ e $x = 0.4y + 0.2$. Calcula: a) El punto medio $(\\bar{x}, \\bar{y})$. b) El coeficiente de correlacion $r$. c) El coeficiente de determinacion $R^2$ e interpretalo.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-3-11",
          type: "manual",
          question: "Explica con tus palabras la diferencia entre correlacion y causalidad. Da un ejemplo de dos variables con alta correlacion que no tengan relacion causal. Por que es importante esta distincion?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "est-4",
      status: "locked",
      title: "Inferencia: intervalos de confianza para la media",
      content: "La **inferencia estadistica** permite obtener conclusiones sobre una poblacion a partir de una muestra. Una de las herramientas principales es el **intervalo de confianza**.\n\nConceptos previos:\n- **Poblacion:** conjunto total de individuos que se quiere estudiar.\n- **Muestra:** subconjunto de la poblacion que se observa.\n- **Parametro:** valor que describe la poblacion (desconocido): $\\mu$ (media), $p$ (proporcion), $\\sigma$ (desviacion tipica).\n- **Estadistico:** valor calculado a partir de la muestra: $\\bar{x}$ (media muestral), $\\hat{p}$ (proporcion muestral).\n\nPor el **Teorema Central del Limite**, si la muestra es grande ($n \\geq 30$), la media muestral $\\bar{X}$ sigue aproximadamente una distribucion normal:\n$\\bar{X} \\sim N\\left(\\mu, \\frac{\\sigma}{\\sqrt{n}}\\right)$\n\nEl **intervalo de confianza para la media** $\\mu$ al nivel de confianza $(1-\\alpha)$ es:\n\n$\\bar{x} - z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}} < \\mu < \\bar{x} + z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}$\n\no de forma compacta: $IC = \\left(\\bar{x} \\pm z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}\\right)$\n\n**Valores criticos habituales:**\n| Confianza | $z_{\\alpha/2}$ |\n|-----------|----------------|\n| 90%       | $1.645$        |\n| 95%       | $1.96$         |\n| 99%       | $2.576$        |\n\nEl **margen de error** $E$ es la mitad de la amplitud del intervalo:\n$E = z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}$\n\nDe esta formula se puede despejar el **tamano de muestra minimo** para un margen de error deseado:\n$n = \\left(\\frac{z_{\\alpha/2} \\cdot \\sigma}{E}\\right)^2$\n\nSi el resultado no es entero, se redondea al entero **superior**.\n\n**Interpretacion correcta:** un IC del 95% significa que, si repitieramos el muestreo muchas veces, el 95% de los intervalos construidos contendrian el verdadero valor de $\\mu$. NO significa que hay un 95% de probabilidad de que $\\mu$ este en ese intervalo concreto.\n\n**Factores que afectan la amplitud del intervalo:**\n- Mayor confianza $\\to$ mayor $z \\to$ intervalo mas ancho.\n- Mayor $n \\to$ menor $\\sigma/\\sqrt{n} \\to$ intervalo mas estrecho.\n- Mayor $\\sigma \\to$ intervalo mas ancho.",
      exercises: [
        {
          id: "est-4-1",
          type: "auto",
          question: "El valor critico $z_{\\alpha/2}$ para un nivel de confianza del 95% es:",
          autoConfig: { type: "multiple_choice", choices: ["$1.645$", "$1.96$", "$2.576$", "$1.28$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-4-2",
          type: "auto",
          question: "Si se duplica el tamano de la muestra, el margen de error:",
          autoConfig: { type: "multiple_choice", choices: ["Se reduce a la mitad", "Se divide por $\\sqrt{2}$", "Se mantiene igual", "Se duplica"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-4-3",
          type: "auto",
          question: "Si se aumenta el nivel de confianza (de 95% a 99%), el intervalo:",
          autoConfig: { type: "multiple_choice", choices: ["Se hace mas estrecho", "Se hace mas ancho", "No cambia", "Depende de la muestra"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-4-4",
          type: "auto",
          question: "El Teorema Central del Limite se aplica cuando $n$ es al menos:",
          autoConfig: { type: "multiple_choice", choices: ["$5$", "$10$", "$30$", "$100$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-4-5",
          type: "auto",
          question: "Si $\\bar{x} = 50$, $\\sigma = 10$, $n = 100$ y confianza 95%, el margen de error $E$ es:",
          autoConfig: { type: "fill_blank", expectedAnswer: "1.96" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-4-6",
          type: "auto",
          question: "El error estandar de la media es $\\sigma / \\sqrt{n}$. Si $\\sigma = 6$ y $n = 36$, vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "1" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-4-7",
          type: "auto",
          question: "Al calcular el tamano de muestra minimo, si el resultado es $n = 96.3$, se toma $n =$",
          autoConfig: { type: "fill_blank", expectedAnswer: "97" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-4-8",
          type: "manual",
          question: "Se mide el peso de 64 paquetes de arroz y se obtiene $\\bar{x} = 998$ gramos. Si $\\sigma = 12$ gramos: a) Construye un IC al 95% para la media. b) Construye un IC al 99%. c) Compara las amplitudes e interpreta.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-4-9",
          type: "manual",
          question: "(PAU) La duracion de 100 llamadas tiene media $\\bar{x} = 4.2$ minutos y $\\sigma = 1.8$. a) IC al 95%. b) Tamano de muestra para que $E < 0.2$ con confianza del 99%.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-4-10",
          type: "manual",
          question: "Una muestra de 50 alumnos tiene una nota media de $\\bar{x} = 6.3$ con $\\sigma = 1.5$. a) Calcula el IC al 95%. b) Si se quisiera que el margen de error fuese menor que 0.3 puntos con confianza del 95%, cuantos alumnos habria que encuestar?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-4-11",
          type: "manual",
          question: "Explica con tus palabras que significa un intervalo de confianza del 95%. Por que NO es correcto decir \"hay un 95% de probabilidad de que $\\mu$ este en este intervalo\"? Pon una analogia para explicarlo.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    },
    {
      id: "est-5",
      status: "locked",
      title: "Inferencia: intervalos de confianza para la proporcion",
      content: "Cuando el parametro de interes es una **proporcion poblacional** $p$ (porcentaje de individuos con cierta caracteristica), se construye un intervalo de confianza de forma similar al de la media.\n\nSea $\\hat{p}$ la proporcion muestral (numero de exitos dividido por $n$). Por el Teorema Central del Limite, si $n$ es grande ($n \\cdot \\hat{p} \\geq 5$ y $n \\cdot (1-\\hat{p}) \\geq 5$):\n\n$\\hat{p} \\sim N\\left(p, \\sqrt{\\frac{p \\cdot (1-p)}{n}}\\right)$\n\nEl **intervalo de confianza para la proporcion** al nivel $(1-\\alpha)$ es:\n\n$IC = \\left(\\hat{p} \\pm z_{\\alpha/2} \\cdot \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}\\right)$\n\nNota: como no conocemos $p$, usamos $\\hat{p}$ en la formula del error estandar.\n\nEl **margen de error** es:\n$E = z_{\\alpha/2} \\cdot \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$\n\nPara calcular el **tamano de muestra minimo**:\n$n = \\frac{z_{\\alpha/2}^2 \\cdot \\hat{p}(1-\\hat{p})}{E^2}$\n\nSi no se tiene una estimacion previa de $p$, se usa $\\hat{p} = 0.5$ (peor caso, maximiza el producto $\\hat{p}(1-\\hat{p})$, dando el mayor $n$ posible):\n$n = \\frac{z_{\\alpha/2}^2 \\cdot 0.25}{E^2} = \\frac{z_{\\alpha/2}^2}{4 E^2}$\n\nEjemplo: en una encuesta a 400 personas, 180 prefieren el producto A. Entonces $\\hat{p} = 180/400 = 0.45$.\n\nIC al 95%: $0.45 \\pm 1.96 \\cdot \\sqrt{\\frac{0.45 \\cdot 0.55}{400}} = 0.45 \\pm 1.96 \\cdot 0.0249 = 0.45 \\pm 0.0488$\n\nEs decir: $IC = (0.4012,\\ 0.4988)$. Con un 95% de confianza, entre el 40.1% y el 49.9% de la poblacion prefiere A.\n\n**En PAU** los problemas tipicos son: calcular IC para la proporcion, determinar tamano de muestra, o interpretar un IC dado.",
      exercises: [
        {
          id: "est-5-1",
          type: "auto",
          question: "Si en una muestra de 200, 60 tienen cierta caracteristica, $\\hat{p}$ vale:",
          autoConfig: { type: "multiple_choice", choices: ["$60$", "$0.3$", "$0.6$", "$200$"], correctIndex: 1 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-5-2",
          type: "auto",
          question: "Para maximizar el tamano de muestra cuando no se conoce $p$, se usa $\\hat{p} =$",
          autoConfig: { type: "multiple_choice", choices: ["$0$", "$0.25$", "$0.5$", "$1$"], correctIndex: 2 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-5-3",
          type: "auto",
          question: "Si se cuadruplica el tamano de la muestra, el margen de error del IC para $p$:",
          autoConfig: { type: "multiple_choice", choices: ["Se reduce a la mitad", "Se reduce a la cuarta parte", "Se duplica", "No cambia"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-5-4",
          type: "auto",
          question: "El error estandar de la proporcion es $\\sqrt{\\hat{p}(1-\\hat{p})/n}$. Si $\\hat{p} = 0.4$ y $n = 100$, vale:",
          autoConfig: { type: "multiple_choice", choices: ["$0.049$", "$0.24$", "$0.024$", "$0.49$"], correctIndex: 0 },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-5-5",
          type: "auto",
          question: "Si $\\hat{p} = 0.5$ y $n = 400$, el error estandar vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0.025" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-5-6",
          type: "auto",
          question: "El producto $\\hat{p}(1-\\hat{p})$ es maximo cuando $\\hat{p}$ vale:",
          autoConfig: { type: "fill_blank", expectedAnswer: "0.5" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-5-7",
          type: "auto",
          question: "Para un IC al 90% con $\\hat{p} = 0.5$ y $E = 0.05$, se necesita $n = (1.645)^2 \\cdot 0.25 / (0.05)^2$, que es aproximadamente:",
          autoConfig: { type: "fill_blank", expectedAnswer: "271" },
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-5-8",
          type: "manual",
          question: "En una encuesta a 500 personas, 320 estan a favor de una medida. a) Calcula $\\hat{p}$. b) Construye un IC al 95% para la proporcion poblacional. c) Interpreta el resultado.",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-5-9",
          type: "manual",
          question: "(PAU) Se quiere estimar la proporcion de estudiantes que usan transporte publico con un margen de error menor que 3% y confianza del 95%. a) Si no se tiene estimacion previa de $p$, que tamano de muestra se necesita? b) Si se sabe que aproximadamente $p \\approx 0.6$, como cambia el tamano necesario?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-5-10",
          type: "manual",
          question: "En un control de calidad, de 300 piezas se encuentran 18 defectuosas. a) IC al 99% para la proporcion de defectuosas. b) La empresa afirma que la tasa de defectos es menor del 8%. Es coherente con el intervalo?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-5-11",
          type: "manual",
          question: "Compara los intervalos de confianza para la media y para la proporcion: a) Que formula usa cada uno? b) En que se diferencia el calculo del error estandar? c) En que se parecen? d) Para que tipo de datos se usa cada uno?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        },
        {
          id: "est-5-12",
          type: "manual",
          question: "(PAU) Una encuesta a 1000 personas indica que el 55% votaria 'si' en un referendum. a) Calcula el IC al 95%. b) Se puede afirmar con un 95% de confianza que ganaria el 'si'? Justifica. c) Que tamano de muestra haria falta para que el margen de error fuera del 1%?",
          autoConfig: null,
          status: "pending",
          studentAnswer: null,
          photoUrl: null
        }
      ]
    }
  ]
};

export default estadistica;
