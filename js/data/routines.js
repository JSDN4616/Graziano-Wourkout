/**
 * Graziano Workout - Base de Datos Centralizada de Rutinas Híbridas
 * Cada protocolo unifica sus variantes (gimnasio, calistenia, hogar) en una estructura
 * de entrenamiento híbrida coherente con rigor biomecánico, RPE, TUT y sobrecarga progresiva.
 */

export const ROUTINES = [
  // ============================================================
  // 01. TOJI FUSHIGURO - "Protocolo de Restricción Divina"
  // ============================================================
  {
    id: "toji-fushiguro",
    name: "Protocolo de Restricción Divina",
    character: "Toji Fushiguro",
    anime: "Jujutsu Kaisen",
    archetype: "Fuerza Bruta & Densidad Muscular Híbrida",
    difficulty: "Avanzado / Élite",
    focus: "Hipertrofia Estética, Fuerza Explosiva y Agilidad Funcional",
    modality: "Híbrido (Gimnasio & Calistenia)",
    duration: "60 - 75 min por sesión",
    frequency: "4 - 6 días / semana (División Híbrida)",
    badgeNumber: "01",
    summary:
      "Protocolo integral de acondicionamiento físico inspirado en Toji Fushiguro. Combina levantamientos compuestos pesados de gimnasio con la máxima exigencia de calistenia explosiva y peso corporal para forjar una densidad muscular sobrehumana y agilidad funcional.",
    description:
      "Sistema biomecánico híbrido que amalgama la tensión mecánica de las cargas libres con la potencia neuromuscular de las autocargas. Se estructuran cuatro jornadas especializadas que permiten alternar entre estímulos de gimnasio (fuerza de empuje, tracción pesada y cadena posterior con barra) y bloques de calistenia explosiva (dominadas al fallo, fondos en paralelas y trabajo unilateral de piernas), optimizando tanto la fuerza absoluta como la relativa sin puntos débiles.",
    equipment: [
      "Pesas libres (barras y mancuernas)",
      "Máquinas de poleas y racks",
      "Barra de dominadas",
      "Barras paralelas",
      "Suelo despejado"
    ],
    trainingPillars: [
      {
        title: "Sobrecarga Progresiva",
        detail:
          "El núcleo del progreso radica en el incremento gradual de la carga, el volumen o la densidad para forzar la adaptación del sistema musculoesquelético."
      },
      {
        title: "Tiempo Bajo Tensión (TUT)",
        detail:
          "Se enfatiza el control consciente del movimiento para maximizar el reclutamiento de fibras musculares, especialmente en las fases excéntricas y de aislamiento."
      },
      {
        title: "Conexión Neuromuscular",
        detail:
          "Cada repetición debe ejecutarse con intención consciente sobre el músculo objetivo para optimizar la hipertrofia y la eficiencia motora."
      }
    ],
    warmup: [
      "5 min de movilidad articular dinámica (cadera, hombros y muñecas)",
      "2 series de 10 dislocaciones de hombro con banda elástica",
      "2 series de aproximación progresiva al 40% y 60% del peso de trabajo en el primer ejercicio"
    ],
    days: [
      {
        dayLabel: "Día 1: Torso Hipertrofia & Fuerza Pesada (Gimnasio)",
        exercises: [
          {
            order: "01",
            name: "Press de Banca con Barra",
            sets: "3",
            reps: "5 - 8",
            rest: "180s",
            notes: "Fuerza de empuje. Retracción escapular, control excéntrico y bloqueo completo en la fase concéntrica."
          },
          {
            order: "02",
            name: "Dominadas Lastradas",
            sets: "3",
            reps: "6 - 10",
            rest: "180s",
            notes: "Tracción vertical pesada. Rango completo, barbilla superando la barra en cada repetición."
          },
          {
            order: "03",
            name: "Press Militar con Barra",
            sets: "3",
            reps: "8 - 10",
            rest: "120s",
            notes: "Hombros de acero. Core bloqueado, glúteos compactos, evitar hiperextensión lumbar."
          },
          {
            order: "04",
            name: "Remo con Barra Pendlay o 45°",
            sets: "3",
            reps: "8 - 12",
            rest: "120s",
            notes: "Grosor de espalda. Torso estable a 45°, tirón controlado hacia el abdomen bajo."
          },
          {
            order: "05",
            name: "Vuelos Laterales en Polea",
            sets: "4",
            reps: "12 - 15",
            rest: "90s",
            notes: "Aislamiento de deltoides lateral. Tensión constante sin balanceo ni impulso trapecial."
          }
        ]
      },
      {
        dayLabel: "Día 2: Pierna & Potencia de Choque (Gimnasio)",
        exercises: [
          {
            order: "01",
            name: "Sentadilla Trasera Profunda",
            sets: "4",
            reps: "6 - 8",
            rest: "180s",
            notes: "Potencia de piernas. Romper el paralelo con rodillas alineadas a la punta de los pies."
          },
          {
            order: "02",
            name: "Peso Muerto Rumano con Barra",
            sets: "3",
            reps: "10 - 12",
            rest: "120s",
            notes: "Cadena posterior. Bisagra de cadera estricta, espalda neutra durante todo el recorrido."
          },
          {
            order: "03",
            name: "Zancadas Dinámicas con Mancuernas",
            sets: "3",
            reps: "10 - 12 por pierna",
            rest: "90s",
            notes: "Estabilidad unilateral, paso amplio para máxima activación de glúteo e isquiotibial."
          },
          {
            order: "04",
            name: "Elevación de Talones en Máquina",
            sets: "4",
            reps: "15 - 20",
            rest: "60s",
            notes: "Gemelos densos. Pausa isométrica de 2 segundos en el pico de contracción."
          }
        ]
      },
      {
        dayLabel: "Día 3: Calistenia Explosiva & Tensión Neuromuscular (Peso Corporal)",
        exercises: [
          {
            order: "01",
            name: "Dominadas Explosivas al Esternón",
            sets: "4",
            reps: "Al fallo técnico",
            rest: "180s",
            notes: "Tracción vertical explosiva. Acelerar la fase concéntrica y detener antes de perder la forma estricta."
          },
          {
            order: "02",
            name: "Fondos en Paralelas (Dips)",
            sets: "4",
            reps: "10 - 15",
            rest: "120s",
            notes: "Empuje de tríceps y pectoral inferior. Torso ligeramente inclinado, descenso a 90°."
          },
          {
            order: "03",
            name: "Flexiones en Pica (Pike Push-ups)",
            sets: "3",
            reps: "8 - 12",
            rest: "120s",
            notes: "Empuje vertical de hombros. Cadera elevada, trayectoria de cabeza en trípode hacia el frente."
          },
          {
            order: "04",
            name: "Muscle Ups (Opcional - Nivel Experto)",
            sets: "3",
            reps: "Las que salgan limpias",
            rest: "180s",
            notes: "Tracción y empuje combinados. Requiere dominio previo de dominada al esternón y fondos profundos."
          }
        ]
      },
      {
        dayLabel: "Día 4: Pierna Unilateral & Core de Acero (Autocarga Funcional)",
        exercises: [
          {
            order: "01",
            name: "Sentadillas Pistola (Pistol Squats)",
            sets: "3",
            reps: "6 - 10 por pierna",
            rest: "120s",
            notes: "Fuerza unilateral y balance. Control excéntrico, talón clavado al suelo."
          },
          {
            order: "02",
            name: "Curl Nórdico o Peso Muerto Unilateral",
            sets: "3",
            reps: "8 - 10",
            rest: "90s",
            notes: "Frenado excéntrico estricto de isquiotibiales y estabilidad pélvica."
          },
          {
            order: "03",
            name: "L-Sit o Elevación de Piernas Colgado",
            sets: "3",
            reps: "30 seg / 12 reps",
            rest: "90s",
            notes: "Control de core. Mantener escápulas activas, deprimidas y piernas extendidas."
          },
          {
            order: "04",
            name: "Plancha Hollow Body Isométrica",
            sets: "3",
            reps: "45 - 60 seg",
            rest: "60s",
            notes: "Tensión corporal total. Pelvis en retroversión sin arquear la zona lumbar."
          }
        ]
      }
    ],
    nutrition: {
      calorieStrategy:
        "Superávit calórico controlado: aporte energético superior al gasto diario, priorizando fuentes de proteína de alta calidad para forjar densidad muscular densa sin acumulación excesiva de grasa.",
      recipes: [
        {
          name: "Tortilla de Proteína 'Divina'",
          type: "Receta de Recuperación",
          ingredients: ["3 a 4 huevos", "15g de manteca", "queso magro", "sal y provenzal"],
          purpose:
            "Aporte rápido de aminoácidos esenciales y ácidos grasos para la reparación muscular tras sesiones intensas."
        },
        {
          name: "Tostadas Francesas de Alto Rendimiento",
          type: "Estrategia de Volumen",
          ingredients: ["huevos", "canela", "edulcorante", "pan integral", "crema de maní"],
          purpose:
            "Carbohidratos complejos y grasas saludables para reponer reservas de glucógeno y mantener la intensidad en días de fuerza pesada."
        }
      ]
    },
    lifestyleNotes: [
      "Complementar el físico obtenido con vestimenta que resalte la musculatura funcional, como prendas de compresión y calzado plano técnico.",
      "Monitorear la recuperación neural del sistema nervioso alternando jornadas de levantamientos máximos con sesiones de autocarga fluida."
    ],
    safetyNotes: [
      "Prioriza la técnica estricta sobre la carga externa, especialmente en sentadillas y peso muerto rumano, para proteger la columna.",
      "En calistenia explosiva, no forzar repeticiones de muscle up si la fatiga compromete la articulación glenohumeral.",
      "Respeta los tiempos de descanso pautados de 180s para permitir una recuperación de ATP adecuada entre series pesadas."
    ],
    relatedIds: ["gojo-satoru", "garou", "barou-protocolo-imperial"]
  },

  // ============================================================
  // 02. GOJO SATORU - "Forjando el Infinito"
  // ============================================================
  {
    id: "gojo-satoru",
    name: "Forjando el Infinito",
    character: "Gojo Satoru",
    anime: "Jujutsu Kaisen",
    archetype: "Agilidad y Potencia del Hechicero Más Fuerte",
    difficulty: "Avanzado",
    focus: "Hipertrofia, Funcionalidad y Explosividad",
    modality: "Híbrido (Calistenia con Lastre & Gimnasio)",
    duration: "~60 min por sesión",
    frequency: "4 días / semana (Upper/Lower Split)",
    badgeNumber: "02",
    summary:
      "Programa híbrido de división Upper/Lower diseñado para desarrollar un físico imponente, ágil y funcional, emulando la velocidad y potencia del 'Hechicero más fuerte'.",
    description:
      "División técnica de Tren Superior y Tren Inferior distribuida en cuatro jornadas semanales, alternando el estímulo entre empujes explosivos, tracciones pesadas y estabilidad de cadera, combinando calistenia avanzada con implementos de sobrecarga y accesorios de gimnasio para maximizar el rendimiento atlético.",
    equipment: ["Mochila con carga o lastre", "Barra de dominadas", "Mesa firme o paralelas", "Colchoneta"],
    trainingPillars: [
      {
        title: "Principio de Progresión Continua",
        detail:
          "Incrementar sistemáticamente la carga externa, el número de repeticiones o la complejidad geométrica de las palancas para evitar el estancamiento motor."
      }
    ],
    warmup: [
      "5 min de calentamiento articular dinámico (hombros, cadera y columna torácica)",
      "Series de aproximación y activación neuromuscular ligera antes del primer ejercicio"
    ],
    days: [
      {
        dayLabel: "Día 1: Upper 1 – Explosividad y Empuje",
        exercises: [
          { order: "01", name: "Calentamiento articular dinámico", sets: "X", reps: "~2 minutos", rest: "N/A", notes: "" },
          { order: "02", name: "Flexiones explosivas con despegue", sets: "3", reps: "12-15 (o al fallo)", rest: "3 min", notes: "Aceleración máxima en fase concéntrica." },
          { order: "03", name: "Pullovers acostado (con mochila lastrada)", sets: "3", reps: "8-12", rest: "2 min", notes: "Apertura torácica y activación de dorsal ancho." },
          { order: "04", name: "Flexiones diamante estrictas", sets: "3", reps: "8-12 (o al fallo)", rest: "3 min", notes: "Énfasis tricipital y haz esternal." },
          { order: "05", name: "Remos unilaterales con mochila", sets: "3", reps: "10-12 por lado", rest: "2 min", notes: "Tracción horizontal con espalda plana." },
          { order: "06", name: "Curl de bíceps unilateral", sets: "3", reps: "12-15 por lado", rest: "2 min", notes: "Supinación completa en pico de contracción." },
          { order: "07", name: "Curl martillo unilateral", sets: "2", reps: "Al fallo técnico", rest: "2 min", notes: "Braquial anterior y antebrazo." },
          { order: "08", name: "Estiramientos finales", sets: "X", reps: "30 seg por zona", rest: "N/A", notes: "" }
        ]
      },
      {
        dayLabel: "Día 2: Lower 1 – Estabilidad y Hombros",
        exercises: [
          { order: "01", name: "Calentamiento articular de tren inferior", sets: "X", reps: "~2 minutos", rest: "N/A", notes: "" },
          { order: "02", name: "Sentadillas lado a lado (Cosacas)", sets: "4", reps: "10-12", rest: "3 min", notes: "Movilidad de aductores y tobillos." },
          { order: "03", name: "Vuelos laterales unilaterales", sets: "3", reps: "8-12 por lado", rest: "2 min", notes: "Aislamiento de deltoides lateral." },
          { order: "04", name: "Estocadas explosivas en el lugar", sets: "3", reps: "8-10 por lado", rest: "3 min", notes: "Potencia de zancada y reactividad del cuádriceps." },
          { order: "05", name: "Press militar unilateral sentado", sets: "2", reps: "6-8 por lado", rest: "2 min", notes: "Empuje vertical con core bloqueado." },
          { order: "06", name: "Peso muerto unilateral con carga", sets: "2", reps: "12-15 por lado", rest: "2 min", notes: "Estabilidad de tobillo y cadena posterior." },
          { order: "07", name: "Crunches abdominales controlados", sets: "3", reps: "12-15", rest: "2 min", notes: "Flexión espinal consciente sin tironear del cuello." },
          { order: "08", name: "Levantamiento de piernas colgado o en suelo", sets: "3", reps: "8-12", rest: "2 min", notes: "Flexión de cadera con retroversión pélvica." },
          { order: "09", name: "Estiramientos finales", sets: "X", reps: "30 seg por zona", rest: "N/A", notes: "" }
        ]
      },
      {
        dayLabel: "Día 3: Upper 2 – Tracción y Resistencia",
        exercises: [
          { order: "01", name: "Calentamiento articular", sets: "X", reps: "~2 minutos", rest: "N/A", notes: "" },
          { order: "02", name: "Dominadas estrictas (barra o mesa firme)", sets: "2", reps: "Al fallo técnico", rest: "3 min", notes: "Tracción vertical con retracción escapular." },
          { order: "03", name: "Flexiones diamante pausadas (2s abajo)", sets: "3", reps: "8-10", rest: "3 min", notes: "Elimina reflejo miotático para máxima hipertrofia." },
          { order: "04", name: "Remos unilaterales con mochila", sets: "3", reps: "10-12 por lado", rest: "2 min", notes: "Control excéntrico de 3 segundos." },
          { order: "05", name: "Flexiones declinadas (pies elevados)", sets: "3", reps: "8-12", rest: "3 min", notes: "Foco en el haz clavicular del pectoral." },
          { order: "06", name: "Extensiones de tríceps unilaterales", sets: "2", reps: "10-12 por lado", rest: "2 min", notes: "Aislamiento de la cabeza larga del tríceps." },
          { order: "07", name: "Flexiones en pica (Pike push-ups)", sets: "2", reps: "8-10", rest: "2 min", notes: "Fuerza de hombros en ángulo vertical." },
          { order: "08", name: "Estiramientos post-entreno", sets: "X", reps: "30 seg por zona", rest: "N/A", notes: "" }
        ]
      },
      {
        dayLabel: "Día 4: Lower 2 – Potencia y Resistencia Isométrica",
        exercises: [
          { order: "01", name: "Calentamiento articular", sets: "X", reps: "~2 minutos", rest: "N/A", notes: "" },
          { order: "02", name: "Sentadillas búlgaras profundas", sets: "3", reps: "8-10 por lado", rest: "3 min", notes: "Descenso controlado, torso levemente inclinado." },
          { order: "03", name: "Peso muerto unilateral con carga", sets: "3", reps: "12-15 por lado", rest: "2 min", notes: "Equilibrio monopodal y activación de isquiotibiales." },
          { order: "04", name: "Sentadillas explosivas con salto", sets: "2", reps: "6-8", rest: "3 min", notes: "Aterrizaje suave amortiguando con metatarsos." },
          { order: "05", name: "Sentadilla isométrica contra pared", sets: "2", reps: "30-45 segundos", rest: "3 min", notes: "Rodillas a 90°, cuádriceps en tensión constante." },
          { order: "06", name: "Planchas frontales y laterales", sets: "3", reps: "30-60 seg por lado", rest: "2 min", notes: "Core rígido como pilar de estabilidad." },
          { order: "07", name: "Estiramientos finales", sets: "X", reps: "30 seg por zona", rest: "N/A", notes: "" }
        ]
      }
    ],
    safetyNotes: [
      "Completa el ciclo de 4 semanas de forma estricta antes de aumentar la dificultad o añadir carga externa.",
      "Al finalizar el primer mes, aplica el principio de progresión aumentando el peso en la mochila o la complejidad de las variantes."
    ],
    relatedIds: ["toji-fushiguro", "garou", "sung-jinwoo"]
  },

  // ============================================================
  // 03. GAROU - "El Despertar del Monstruo"
  // ============================================================
  {
    id: "garou",
    name: "El Despertar del Monstruo",
    character: "Garou",
    anime: "One Punch Man",
    archetype: "Condición Física Híbrida - Cazador de Héroes",
    difficulty: "Intermedio / Avanzado",
    focus: "Hipertrofia, Explosividad y Movilidad Funcional",
    modality: "Híbrido (Peso Corporal & Lastre)",
    duration: "60 minutos por sesión",
    frequency: "3 días / semana (Estructura A/B Rotativa)",
    badgeNumber: "03",
    summary:
      "Sistema híbrido de cuerpo completo que alterna dos bloques complementarios (A y B) tres días por semana para forjar adaptabilidad, agilidad marcial y un desarrollo muscular sin puntos débiles.",
    description:
      "Protocolo dinámico de 4 semanas que rota la prioridad entre el Bloque A (Fuerza y Tracción) y el Bloque B (Empuje y Estabilidad), incorporando variantes de progresión complejas para aplicar sobrecarga progresiva mediante pesos corporales, lastres improvisados y tensión continua.",
    equipment: [
      "Mochila con peso o chaleco lastrado",
      "Barra de dominadas (o mesa resistente)",
      "Superficie elevada (banco / silla firme)",
      "Colchoneta"
    ],
    schedule: {
      semanas1y3: "Lunes (Bloque A) - Miércoles (Bloque B) - Viernes (Bloque A)",
      semanas2y4: "Lunes (Bloque B) - Miércoles (Bloque A) - Viernes (Bloque B)"
    },
    warmup: [
      "Movilidad articular dinámica y estiramientos activos de hombros y caderas (~3 min)",
      "Series de activación ligera sin peso"
    ],
    days: [
      {
        dayLabel: "Bloque A: Fuerza y Tracción",
        exercises: [
          { order: "01", name: "Calentamiento articular / Movilidad", sets: "X", reps: "2 min", rest: "-", notes: "" },
          { order: "02", name: "Dominadas (Pronas o Supinas)", sets: "3", reps: "Al fallo técnico", rest: "2 min", notes: "Tracción vertical completa sin balanceo." },
          { order: "03", name: "Flexiones Diamante", sets: "3", reps: "6 - 10", rest: "2 min", notes: "Manos juntas, codos pegados al cuerpo." },
          { order: "04", name: "Sentadilla Explosiva", sets: "3", reps: "6 - 10", rest: "2 min", notes: "Velocidad máxima en despegue." },
          { order: "05", name: "Remos australianos (mesa o barra baja)", sets: "3", reps: "8 - 12", rest: "2 min", notes: "Retracción escapular activa en pico de contracción." },
          { order: "06", name: "Curl de Bíceps Unilateral con Lastre", sets: "2", reps: "12 - 15 por lado", rest: "2 min", notes: "Aislamiento y control excéntrico." },
          { order: "07", name: "Levantamiento de Piernas Colgado", sets: "2", reps: "Al fallo técnico", rest: "2 min", notes: "Control abdominal sin balancear el torso." }
        ]
      },
      {
        dayLabel: "Bloque B: Empuje y Estabilidad",
        exercises: [
          { order: "01", name: "Calentamiento articular / Movilidad", sets: "X", reps: "2 min", rest: "-", notes: "" },
          { order: "02", name: "Estocadas (Zancadas Dinámicas)", sets: "3", reps: "8 - 10 por lado", rest: "2 min", notes: "Paso amplio y torso erguido." },
          { order: "03", name: "Flexiones Tradicionales con Pausa", sets: "3", reps: "8 - 12", rest: "2 min", notes: "Pausa de 1 segundo en el suelo." },
          { order: "04", name: "Vuelos Laterales Unilaterales con Lastre", sets: "3", reps: "12 - 15 por lado", rest: "2 min", notes: "Aislamiento lateral de hombros." },
          { order: "05", name: "Press Francés Sentado con Lastre", sets: "3", reps: "12 - 15 por lado", rest: "2 min", notes: "Extensión tricipital sobre la cabeza." },
          { order: "06", name: "Gada Swings (con mochila o lastre)", sets: "2", reps: "8 - 12 por lado", rest: "2 min", notes: "Control rotacional de hombros y core." },
          { order: "07", name: "Abdominales con Rotación (Russian Twists)", sets: "2", reps: "8 - 12 por lado", rest: "2 min", notes: "Torsión controlada de oblicuos." }
        ]
      }
    ],
    progressionVariants: [
      {
        name: "Sentadilla + Estocada Combinada",
        detail: "Realizar una sentadilla seguida de una zancada con cada pierna en una misma serie para disparar el tiempo bajo tensión."
      },
      {
        name: "Flexiones Explosivas con Palmada",
        detail: "Fase concéntrica de máxima aceleración para reclutar fibras motoras de contracción rápida."
      },
      {
        name: "Dominadas 'Dead Hang' Pausadas",
        detail: "Pausa total de 1 segundo en el punto inferior para eliminar cualquier inercia elástica."
      },
      {
        name: "Burpees Completos con Salto Vertical",
        detail: "Integración fluida de sentadilla, flexión estricta y salto con rodillas al pecho."
      }
    ],
    safetyNotes: [
      "Al finalizar cada sesión, realizar estiramientos estáticos (30 segundos por grupo muscular) para restaurar el tono muscular y favorecer la relajación del SNC.",
      "Al completar el ciclo mensual, reiniciar aumentando la dificultad mediante las variantes de progresión o añadiendo peso al lastre."
    ],
    relatedIds: ["toji-fushiguro", "gojo-satoru", "fisico-anime"]
  },

  // ============================================================
  // 04. ESPECIALIZACIÓN DE PECHO - Protocolo Maestro Unificado
  // ============================================================
  {
    id: "especializacion-pecho",
    name: "Protocolo de Especialización de Pecho",
    character: "Programa Especializado",
    anime: "Protocolo Biomecánico",
    archetype: "Especialización de Pectoral & Hipertrofia Clavicular",
    difficulty: "Multinivel (Adaptable según modalidad)",
    focus: "Hipertrofia Prioritaria del Pectoral y Tren Superior",
    modality: "Híbrido (Gimnasio, Calistenia & Casa)",
    duration: "4 días por semana durante 4 a 8 semanas",
    frequency: "Lunes, Martes, Miércoles y Viernes (descanso Jueves y fin de semana)",
    badgeNumber: "04",
    summary:
      "Programa maestro unificado de especialización para el desarrollo integral del pectoral. Integra las tres vías de progresión técnica: Gimnasio (barras y mancuernas), Calistenia (fondos pesados y palancas) y Casa (variantes con lastre graduable), permitiendo seleccionar la vía óptima o combinarlas de forma híbrida.",
    description:
      "Estructura de choque de Tren Superior y Tren Inferior diseñada para inducir adaptaciones hipertróficas prioritarias en el pectoral mayor (haz clavicular y esternal) y deltoides anterior, manteniendo el resto de la musculatura en un volumen de mantenimiento óptimo. Contiene los módulos completos para ejecución en Gimnasio, Calistenia o Entrenamiento en Casa, detallando series, repeticiones y tempos para cada entorno.",
    equipment: [
      "Barras y Mancuernas",
      "Poleas y Bancos regulables",
      "Barras paralelas y de dominadas",
      "Mochila con peso graduable"
    ],
    schedule: {
      diasEntrenamiento: "Lunes (Día 1), Martes (Día 2), Miércoles (Día 3) y Viernes (Día 4)",
      diaDescanso: "Jueves y fin de semana (recuperación neural)"
    },
    days: [
      {
        dayLabel: "Módulo Gym - Día 1: Empuje Pesado & Densidad Pectoral",
        exercises: [
          { order: "01", name: "Press de Banca Plano con Barra", sets: "3", reps: "4 - 6", rest: "3 min", notes: "Carga pesada. Arco fisiológico y retracción escapular activa." },
          { order: "02", name: "Press Inclinado con Mancuernas (30°)", sets: "3", reps: "8 - 12", rest: "2 min", notes: "Énfasis haz clavicular. Rango profundo de estiramiento." },
          { order: "03", name: "Jalón al Pecho en Polea", sets: "3", reps: "10 - 12", rest: "2 min", notes: "Tracción antagonista para mantener balance postural." },
          { order: "04", name: "Remo con Barra", sets: "3", reps: "8 - 12", rest: "2 min", notes: "Estabilidad dorsal. Tirón hacia el abdomen bajo." },
          { order: "05", name: "Vuelos Laterales con Mancuernas", sets: "3", reps: "12 - 15", rest: "2 min", notes: "Anchura escapular sin balanceo." }
        ]
      },
      {
        dayLabel: "Módulo Gym - Día 2: Bombeo, Aislamiento & Tren Inferior",
        exercises: [
          { order: "01", name: "Press Plano con Mancuernas", sets: "3", reps: "8 - 10 (última al fallo)", rest: "3 min", notes: "Apertura amplia y máxima aducción en pico concéntrico." },
          { order: "02", name: "Aperturas en Polea Media", sets: "3", reps: "12 - 15", rest: "2 min", notes: "Tensión constante en el cruce de manos con 1s isométrico." },
          { order: "03", name: "Peso Muerto Rumano", sets: "3", reps: "6 - 10", rest: "3 min", notes: "Cadena posterior sin sobrecargar la columna." },
          { order: "04", name: "Sentadilla o Prensa Inclinada", sets: "3", reps: "8 - 12", rest: "3 min", notes: "Volumen de pierna suficiente para mantenimiento de fuerza." },
          { order: "05", name: "Curl de Bíceps & Extensión de Tríceps", sets: "3", reps: "12 - 15", rest: "2 min", notes: "Biserie de brazos para balance estético general." }
        ]
      },
      {
        dayLabel: "Módulo Calistenia - Día 1: Fuerza Pura & Fondos Lastrados",
        exercises: [
          { order: "01", name: "Fondos en Paralelas Inclinados", sets: "3", reps: "Al fallo técnico", rest: "3 min", notes: "Torso inclinado 30° para activación máxima de pectoral." },
          { order: "02", name: "Dominadas Estrictas (Pronas o Neutras)", sets: "3", reps: "8 - 12", rest: "2-3 min", notes: "Tracción vertical completa." },
          { order: "03", name: "Flexiones Diamante", sets: "3", reps: "8 - 10", rest: "2 min", notes: "Empuje cerrado con codos a 45°." },
          { order: "04", name: "Flexiones en Pike", sets: "3", reps: "8 - 10", rest: "2 min", notes: "Trabajo deltoides anterior y estabilizador clavicular." },
          { order: "05", name: "Flexiones Inclinadas de Estiramiento", sets: "2", reps: "8 - 10", rest: "2 min", notes: "Pausa en máximo estiramiento inferior." }
        ]
      },
      {
        dayLabel: "Módulo Calistenia - Día 2: Control Escapular & Piernas",
        exercises: [
          { order: "01", name: "Sentadillas Pistola", sets: "3", reps: "8 - 10 por pierna", rest: "3 min", notes: "Potencia unilateral y balance." },
          { order: "02", name: "Flexiones Declinadas (Pies elevados)", sets: "3", reps: "10 - 12", rest: "2 min", notes: "Foco en la porción superior del pecho." },
          { order: "03", name: "Sentadillas Explosivas con Salto", sets: "3", reps: "10 - 12", rest: "2 min", notes: "Aceleración de fibras rápidas." },
          { order: "04", name: "Curl Nórdico en Suelo", sets: "3", reps: "10 - 12", rest: "2 min", notes: "Frenado excéntrico estricto de isquiotibiales." },
          { order: "05", name: "Fondos para Tríceps en Banco", sets: "3", reps: "12 - 15", rest: "2 min", notes: "Cierre de sesión con bombeo de brazos." }
        ]
      },
      {
        dayLabel: "Módulo Casa - Día 1: Tensión Mecánica con Mochila y Apoyos",
        exercises: [
          { order: "01", name: "Flexiones con Mochila Lastrada", sets: "3", reps: "Al fallo técnico", rest: "3 min", notes: "Añadir botellas o libros para sobrecarga progresiva." },
          { order: "02", name: "Remos Unilaterales con Mochila", sets: "3", reps: "10 - 12 por lado", rest: "2 min", notes: "Espalda firme, apoyo en mesa resistente." },
          { order: "03", name: "Press Militar Unilateral con Mochila", sets: "3", reps: "8 - 10 por lado", rest: "2 min", notes: "Control en descenso, core firme." },
          { order: "04", name: "Flexiones Pausadas (2s en el suelo)", sets: "3", reps: "8 - 10", rest: "3 min", notes: "Elimina inercia y amplifica reclutamiento muscular." },
          { order: "05", name: "Vuelos Laterales con Mochila o Botellas", sets: "3", reps: "12 - 15", rest: "2 min", notes: "Control estricto de tempo sin balanceo." },
          { order: "06", name: "Curl de Bíceps con Mochila", sets: "3", reps: "12 - 15", rest: "3 min", notes: "Tensión en bíceps braquial." }
        ]
      },
      {
        dayLabel: "Módulo Casa - Día 2: Densidad Metabólica & Piernas",
        exercises: [
          { order: "01", name: "Sentadillas Explosivas", sets: "3", reps: "10 - 12", rest: "3 min", notes: "Velocidad concéntrica máxima." },
          { order: "02", name: "Flexiones Declinadas (Pies en cama/silla)", sets: "3", reps: "10 - 12", rest: "2-3 min", notes: "Pectoral superior en casa." },
          { order: "03", name: "Estocadas Dinámicas con Mochila", sets: "3", reps: "8 - 10 por pierna", rest: "2 min", notes: "Rango profundo de rodilla." },
          { order: "04", name: "Peso Muerto Unilateral con Mochila", sets: "3", reps: "8 - 10 por pierna", rest: "3 min", notes: "Equilibrio y activación de glúteo e isquiotibial." },
          { order: "05", name: "Puente de Glúteos con Lastre", sets: "3", reps: "10 - 12", rest: "2 min", notes: "Pausa isométrica de 2 segundos en el pico." }
        ]
      }
    ],
    safetyNotes: [
      "Al finalizar cada sesión, realizar estiramientos estáticos de 30 segundos por grupo muscular trabajado.",
      "Alterna los módulos según el equipamiento que tengas cada día (por ejemplo, gimnasio lunes/miércoles y calistenia/casa martes/viernes).",
      "No aumentes la carga si no mantienes retracción escapular durante los press o fondos."
    ],
    relatedIds: ["toji-fushiguro", "barou-protocolo-imperial", "garou"]
  },

  // ============================================================
  // 05. SHOEI BAROU - "Protocolo Imperial: Rey Barou"
  // ============================================================
  {
    id: "barou-protocolo-imperial",
    name: "Protocolo Imperial: Rey Barou",
    character: "Shoei Barou",
    anime: "Blue Lock",
    archetype: "Hipertrofia en V & Fuerza de Disparo",
    difficulty: "Intermedio / Avanzado",
    focus: "Hipertrofia en V (Espalda y Hombros), Fuerza de Disparo y Resistencia",
    modality: "Híbrido (Gimnasio & Calistenia)",
    duration: "4 a 5 días por semana (~60-70 min)",
    frequency: "4 - 5 días / semana (División Híbrida)",
    badgeNumber: "05",
    summary:
      "Programa unificado inspirado en la estética demoledora y juego físico implacable de Shoei Barou. Combina la sobrecarga pesada con barra para tren superior e inferior con sesiones de calistenia atlética para ensanchar el dorsal y los deltoides en una silueta en V imponente.",
    description:
      "El Protocolo Imperial fusiona el levantamiento de pesas libres pesadas en gimnasio con el trabajo de autocarga de alto volumen. Prioriza el deltoides lateral y el dorsal ancho para ensanchar el torso ('Estética en V del Rey'), complementado con fuerza explosiva de tren inferior y cadena posterior indispensable para una aceleración imparable y potencia en el choque físico.",
    equipment: [
      "Barras y Mancuernas",
      "Poleas y Bancos",
      "Máquinas de piernas",
      "Barra de dominadas",
      "Barras paralelas"
    ],
    trainingPillars: [
      {
        title: "La Estética en V",
        detail:
          "Se prioriza el trabajo del deltoides lateral y el dorsal ancho para ensanchar el torso, junto con el desarrollo de la cadena posterior (glúteos y lumbares) para la potencia motriz."
      },
      {
        title: "Sobrecarga Progresiva",
        detail:
          "Incrementar gradualmente el peso de trabajo o el número de repeticiones de semana a semana para forzar adaptaciones hipertróficas continuas."
      },
      {
        title: "Conexión Mente-Músculo",
        detail:
          "Especialmente en ejercicios de aislamiento, controlar la fase excéntrica (bajada de 2-3s) para maximizar la tensión mecánica sobre las fibras objetivo."
      }
    ],
    days: [
      {
        dayLabel: "Día 1: Torso Superior: Fuerza & Grosor Imperial (Gimnasio)",
        exercises: [
          { order: "01", name: "Press de Banca con Barra", sets: "3", reps: "8 - 10", rest: "2 - 3 min", notes: "Empuje horizontal pesado. Retracción escapular activa." },
          { order: "02", name: "Dominadas Pronas (Pull Ups)", sets: "3", reps: "Al fallo técnico", rest: "2 - 3 min", notes: "Tracción vertical estricta. Barbilla superando la barra." },
          { order: "03", name: "Press Militar con Mancuernas o Barra", sets: "3", reps: "8 - 10", rest: "2 min", notes: "Potencia de deltoides. Core tenso, sin arquear la espalda." },
          { order: "04", name: "Remo con Barra 45°", sets: "3", reps: "8 - 12", rest: "2 min", notes: "Densidad de espalda media y dorsal ancho." },
          { order: "05", name: "Vuelos Laterales (Enfoque Silueta en V)", sets: "4", reps: "12 - 15", rest: "2 min", notes: "Anchura lateral para ensanchar el torso. Tempo 2-0-1." }
        ]
      },
      {
        dayLabel: "Día 2: Potencia de Disparo & Tren Inferior (Gimnasio)",
        exercises: [
          { order: "01", name: "Sentadillas Pesadas con Barra", sets: "3", reps: "6 - 8", rest: "2 - 3 min", notes: "Fuerza propulsiva en cuádriceps y glúteos." },
          { order: "02", name: "Peso Muerto Rumano", sets: "3", reps: "10 - 12", rest: "2 min", notes: "Cadena posterior y fuerza en isquiotibiales." },
          { order: "03", name: "Prensa de Piernas Inclinada", sets: "3", reps: "12 - 15", rest: "2 min", notes: "Tensión mecánica continua en piernas." },
          { order: "04", name: "Elevación de Talones de Pie (Gemelos)", sets: "4", reps: "15 - 20", rest: "1 min", notes: "Gemelos reactivos para aceleración y salto." },
          { order: "05", name: "Rueda Abdominal o Plank con Carga", sets: "3", reps: "Al fallo técnico", rest: "1 min", notes: "Core blindado para resistencia total al choque." }
        ]
      },
      {
        dayLabel: "Día 3: Torso en V & Calistenia de Combate (Autocarga)",
        exercises: [
          { order: "01", name: "Dominadas Pronas con Agarre Amplio", sets: "4", reps: "Al fallo técnico", rest: "2 - 3 min", notes: "Enfoque máximo en la expansión del dorsal ancho." },
          { order: "02", name: "Fondos en Paralelas (Dips)", sets: "4", reps: "10 - 12", rest: "2 min", notes: "Poder de empuje para tríceps y haz inferior del pecho." },
          { order: "03", name: "Flexiones en Pica (Pike Push-ups)", sets: "3", reps: "8 - 10", rest: "2 min", notes: "Fuerza de hombros con peso corporal." },
          { order: "04", name: "Remos Invertidos Australianos", sets: "3", reps: "12 - 15", rest: "2 min", notes: "Tracción horizontal y densidad de escápulas." },
          { order: "05", name: "Sentadilla Búlgara con Peso Corporal", sets: "3", reps: "12 - 15 por pierna", rest: "1.5 min", notes: "Equilibrio y fuerza unilateral de piernas." }
        ]
      }
    ],
    nutrition: {
      calorieStrategy:
        "El desarrollo muscular exige un entorno anabólico constante. Se recomienda un superávit calórico controlado con alta densidad de nutrientes, enfatizando proteínas magras y grasas saludables.",
      recipes: [
        {
          name: "Tortilla de Proteína Pura",
          type: "Receta Destacada",
          ingredients: ["3 huevos", "15g de manteca", "queso magro", "sal y provenzal"],
          preparation:
            "Calentar la sartén con manteca, verter la mezcla de huevos y queso, sazonar y cocinar a fuego medio hasta dorar."
        },
        {
          name: "Tostadas Francesas Fitness",
          type: "Snack Energético",
          ingredients: ["3 huevos", "canela", "edulcorante", "4 panes lactales integrales", "crema de maní"],
          purpose:
            "Aporte de carbohidratos complejos y grasas saludables ideal para fases de volumen y ganancia de masa magra."
        }
      ]
    },
    safetyNotes: [
      "No comprometer la técnica en sentadillas y peso muerto rumano para evitar sobrecarga en la zona lumbar.",
      "En calistenia, mantener los hombros deprimidos durante los fondos para proteger el manguito rotador."
    ],
    relatedIds: ["toji-fushiguro", "gojo-satoru", "especializacion-pecho"]
  },

  // ============================================================
  // 06. GUERRERO ANIME - "Forjando el Cuerpo de un Guerrero"
  // ============================================================
  {
    id: "fisico-anime",
    name: "Forjando el Cuerpo de un Guerrero",
    character: "Guerrero Anime",
    anime: "Inspiración Anime General",
    archetype: "Físico Funcional, Estético y Explosivo",
    difficulty: "Principiante / Intermedio",
    focus: "Hipertrofia, Agilidad y Explosividad",
    modality: "Híbrido (Calistenia & Implementos del Hogar)",
    duration: "60 min por sesión",
    frequency: "3 días / semana (Lunes, Miércoles y Viernes)",
    badgeNumber: "06",
    summary:
      "Programa híbrido de cuerpo completo diseñado para desarrollar una musculatura estética, funcional y explosiva utilizando principalmente el peso corporal y elementos del hogar con sobrecarga.",
    description:
      "Ciclo mensual de 3 días a la semana enfocado en movimientos multiarticulares de tracción, empuje y aceleración de piernas para maximizar la respuesta anabólica natural, combinando calistenia progresiva y elementos cotidianos cargados de forma estratégica.",
    equipment: [
      "Mochila con carga graduable",
      "Barra de dominadas (opcional)",
      "Mesa resistente",
      "Colchoneta y sillas firmes"
    ],
    days: [
      {
        dayLabel: "Día 1: Tracción y Estabilidad del Core",
        exercises: [
          { order: "01", name: "Calentamiento articular dinámico", sets: "X", reps: "2 min", rest: "N/A", notes: "" },
          { order: "02", name: "Remo unilateral con mochila", sets: "3", reps: "10 - 12 por lado", rest: "3 min", notes: "Apoyo en mesa, espalda neutra." },
          { order: "03", name: "Flexiones con pausa (2 seg en suelo)", sets: "3", reps: "10 - 12", rest: "2 min", notes: "Fuerza pura sin rebote." },
          { order: "04", name: "Vuelos laterales unilaterales con mochila", sets: "3", reps: "12 - 15 por lado", rest: "2 min", notes: "Deltoides lateral aislado." },
          { order: "05", name: "Dominadas australianas en mesa firme", sets: "3", reps: "8 - 10", rest: "2 min", notes: "Cuerpo recto como una tabla." },
          { order: "06", name: "Fondos inclinados entre dos sillas", sets: "2", reps: "Al fallo técnico", rest: "3 min", notes: "Descenso controlado a 90°." },
          { order: "07", name: "Planchas frontales y laterales", sets: "2", reps: "30 - 60 seg por lado", rest: "1 min", notes: "Tensión de pared abdominal." },
          { order: "08", name: "Estiramientos generales", sets: "X", reps: "30 seg", rest: "N/A", notes: "" }
        ]
      },
      {
        dayLabel: "Día 2: Potencia y Tren Inferior",
        exercises: [
          { order: "01", name: "Calentamiento articular", sets: "X", reps: "2 min", rest: "N/A", notes: "" },
          { order: "02", name: "Pullover acostado con mochila", sets: "3", reps: "8 - 10", rest: "2 min", notes: "Estiramiento dorsal y caja torácica." },
          { order: "03", name: "Flexiones explosivas con despegue", sets: "3", reps: "8 - 10", rest: "3 min", notes: "Velocidad de empuje máxima." },
          { order: "04", name: "Vuelos laterales unilaterales", sets: "3", reps: "12 - 15 por lado", rest: "3 min", notes: "Control excéntrico de 2s." },
          { order: "05", name: "Fondos en banco o silla firme", sets: "3", reps: "10 - 12", rest: "2 min", notes: "Tríceps con piernas extendidas." },
          { order: "06", name: "Estocadas explosivas alternadas", sets: "3", reps: "10 - 12 por lado", rest: "2 min", notes: "Potencia de zancada en el lugar." },
          { order: "07", name: "Elevaciones de piernas acostado", sets: "2", reps: "12 - 15", rest: "2 min", notes: "Abdomen bajo sin arquear lumbares." },
          { order: "08", name: "Estiramientos", sets: "X", reps: "30 seg", rest: "N/A", notes: "" }
        ]
      },
      {
        dayLabel: "Día 3: Fuerza Específica y Aislamiento",
        exercises: [
          { order: "01", name: "Calentamiento articular", sets: "X", reps: "2 min", rest: "N/A", notes: "" },
          { order: "02", name: "Flexiones diamante estrictas", sets: "3", reps: "8 - 10", rest: "3 min", notes: "Énfasis en tríceps y pecho central." },
          { order: "03", name: "Sentadillas explosivas con salto", sets: "3", reps: "8 - 10", rest: "2 min", notes: "Potencia reactiva de cuádriceps." },
          { order: "04", name: "Flexiones en pica (Pike push-ups)", sets: "2", reps: "6 - 8", rest: "2 min", notes: "Empuje de hombros." },
          { order: "05", name: "Curl de bíceps con mochila", sets: "3", reps: "10 - 12", rest: "2 min", notes: "Tensión continua sin balancear el torso." },
          { order: "06", name: "Peso muerto unilateral con carga", sets: "3", reps: "10 - 12 por lado", rest: "2 min", notes: "Cadena posterior y equilibrio." },
          { order: "07", name: "Crunches abdominales", sets: "2", reps: "12 - 15", rest: "1 min", notes: "Contracción máxima en flexión de tronco." },
          { order: "08", name: "Estiramientos", sets: "X", reps: "30 seg", rest: "N/A", notes: "" }
        ]
      }
    ],
    safetyNotes: [
      "Consistencia Mensual: completa el ciclo de 4 semanas de manera rigurosa.",
      "Principio de Adaptación: una vez finalizado el primer mes, aumenta la dificultad añadiendo más peso a la mochila o mejorando la calidad del tempo.",
      "Higiene del Sueño y Nutrición: asegura al menos 7-8 horas de descanso nocturno para permitir la reparación del tejido muscular."
    ],
    relatedIds: ["garou", "sung-jinwoo", "gojo-satoru"]
  },

  // ============================================================
  // 07. SUNG JIN-WOO - "Proyecto de Ascenso"
  // ============================================================
  {
    id: "sung-jinwoo",
    name: "Proyecto de Ascenso",
    character: "Sung Jin-Woo",
    anime: "Solo Leveling",
    archetype: "Nivelación de Físico - Fuerza y Resistencia",
    difficulty: "Principiante - Intermedio",
    focus: "Fuerza, Resistencia y Desarrollo Estético Funcional",
    modality: "Híbrido (Calistenia con Lastre & TUT)",
    duration: "45 - 60 min por sesión",
    frequency: "4 días / semana (Upper/Lower Split con TUT)",
    badgeNumber: "07",
    summary:
      "Rutina híbrida inspirada en la disciplina del protagonista de Solo Leveling. Transforma el físico mediante ejercicios fundamentales de peso corporal, cargas progresivas con lastre y control estricto de Tiempo Bajo Tensión (TUT).",
    description:
      "Busca transformar el físico de forma metódica mediante ejercicios multiarticulares de peso corporal combinados con sobrecarga externa graduable (mochila con peso), dividiendo el entrenamiento en dos bloques alternos de Tren Superior y Tren Inferior/Core con pautas exactas de TUT para maximizar la hipertrofia miofibrilar.",
    equipment: [
      "Mochila con peso (libros, botellas de agua o discos)",
      "Barra de dominadas (o marco resistente)",
      "Suelo despejado y colchoneta"
    ],
    trainingPillars: [
      {
        title: "Sobrecarga Progresiva",
        detail:
          "Consiste en aumentar gradualmente la dificultad incrementando el peso en la mochila, realizando más repeticiones o mejorando la técnica estricta para que el cuerpo se adapte continuamente."
      },
      {
        title: "TUT (Time Under Tension)",
        detail:
          "Se refiere al tiempo exacto que el músculo permanece bajo esfuerzo. Mantener los rangos indicados de 20-40 segundos asegura un estímulo de reclutamiento hipertrófico óptimo."
      }
    ],
    days: [
      {
        dayLabel: "Día 1: Tren Superior (Enfoque Empuje y Tracción 1)",
        exercises: [
          { order: "01", name: "Dominadas (Pull Ups)", sets: "4", reps: "8 - 10", rest: "3 min", tut: "0 - 20s", notes: "Tracción vertical limpia superando la barra." },
          { order: "02", name: "Flexiones estrictas (Push Ups)", sets: "3", reps: "10 - 12", rest: "3 min", tut: "20 - 40s", notes: "Rango completo de pecho a suelo." },
          { order: "03", name: "Remos unilaterales con mochila", sets: "3", reps: "8 - 12", rest: "2 min", tut: "20 - 40s", notes: "Tirón controlado hacia la cadera." },
          { order: "04", name: "Flexiones diamante", sets: "3", reps: "8 - 12", rest: "2 min", tut: "20 - 40s", notes: "Énfasis tricipital y haz esternal." },
          { order: "05", name: "Vuelos laterales con mochila", sets: "3", reps: "10 - 12", rest: "2 min", tut: "30 - 60s", notes: "Deltoides medio sin balanceo." },
          { order: "06", name: "Press francés con mochila", sets: "2", reps: "10 - 12", rest: "1 min", tut: "30 - 60s", notes: "Extensión sobre la cabeza con codos fijos." }
        ]
      },
      {
        dayLabel: "Día 2: Tren Inferior y Core (Enfoque Potencia 1)",
        exercises: [
          { order: "01", name: "Sentadillas con mochila lastrada", sets: "4", reps: "8 - 10", rest: "3 min", tut: "20 - 40s", notes: "Profundidad completa, rodillas alineadas." },
          { order: "02", name: "Estocadas (Zancadas)", sets: "3", reps: "8 - 10 por pierna", rest: "2 min", tut: "20 - 40s", notes: "Control unilateral y torso vertical." },
          { order: "03", name: "Curl nórdico en suelo", sets: "3", reps: "8 - 12", rest: "2 min", tut: "20 - 40s", notes: "Frenado excéntrico estricto de isquiotibiales." },
          { order: "04", name: "Hip Thrust (Empuje de cadera)", sets: "3", reps: "8 - 12", rest: "2 min", tut: "20 - 40s", notes: "Pausa isométrica de 1s en pico de contracción." },
          { order: "05", name: "Elevaciones de talones con mochila", sets: "2", reps: "8 - 10", rest: "1 min", tut: "30 - 60s", notes: "Gemelos con tempo controlado." },
          { order: "06", name: "Crunches abdominales", sets: "3", reps: "8 - 12", rest: "1 min", tut: "30 - 60s", notes: "Flexión consciente de tronco." }
        ]
      },
      {
        dayLabel: "Día 3: Tren Superior (Enfoque Hipertrofia 2)",
        exercises: [
          { order: "01", name: "Chin ups (Dominadas supinas)", sets: "4", reps: "8 - 10", rest: "3 min", tut: "0 - 20s", notes: "Énfasis en bíceps y dorsal inferior." },
          { order: "02", name: "Flexiones pausadas (2s abajo)", sets: "3", reps: "8 - 10", rest: "3 min", tut: "20 - 40s", notes: "Elimina rebote elástico." },
          { order: "03", name: "Remos unilaterales con mochila", sets: "3", reps: "8 - 12", rest: "2 min", tut: "20 - 40s", notes: "Tracción horizontal estricta." },
          { order: "04", name: "Flexiones inclinadas", sets: "3", reps: "8 - 12", rest: "2 min", tut: "20 - 40s", notes: "Manos elevadas para acumular volumen." },
          { order: "05", name: "Curl de bíceps con mochila", sets: "3", reps: "10 - 12", rest: "2 min", tut: "30 - 60s", notes: "Tensión constante en supinación." },
          { order: "06", name: "Press militar con mochila", sets: "2", reps: "8 - 10", rest: "2 min", tut: "30 - 60s", notes: "Empuje vertical con core firme." }
        ]
      },
      {
        dayLabel: "Día 4: Tren Inferior y Core (Enfoque Resistencia 2)",
        exercises: [
          { order: "01", name: "Sentadilla búlgara", sets: "4", reps: "8 - 10 por pierna", rest: "3 min", tut: "20 - 40s", notes: "Pies en banco/silla, cuádriceps al límite." },
          { order: "02", name: "Peso muerto rumano con mochila", sets: "3", reps: "10 - 12", rest: "2 min", tut: "20 - 40s", notes: "Cadena posterior y bisagra de cadera." },
          { order: "03", name: "Step Ups (Subida al cajón/silla firme)", sets: "3", reps: "8 - 10 por pierna", rest: "2 min", tut: "20 - 40s", notes: "Impulso desde el talón de la pierna activa." },
          { order: "04", name: "Glute Bridge (Puente de glúteos)", sets: "3", reps: "12 - 15", rest: "2 min", tut: "30 - 60s", notes: "Alineación pélvica en extensión." },
          { order: "05", name: "Plancha abdominal frontal", sets: "3", reps: "Al fallo técnico", rest: "1 min", tut: "N/A", notes: "Resistencia isométrica del cinturón lumbopélvico." },
          { order: "06", name: "Press militar unilateral de hombros", sets: "2", reps: "8 - 10", rest: "2 min", tut: "30 - 60s", notes: "Estabilidad unilateral." }
        ]
      }
    ],
    safetyNotes: [
      "Al entrenar en casa con lastre improvisado, asegurarse de que la mochila esté bien asegurada para evitar movimientos bruscos de la carga.",
      "Las superficies utilizadas para remos o fondos (sillas o mesas) deben tener estabilidad absoluta para evitar accidentes."
    ],
    relatedIds: ["gojo-satoru", "fisico-anime", "toji-fushiguro"]
  }
];