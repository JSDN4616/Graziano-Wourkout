/**
 * Graziano Workout - Base de Datos Centralizada de Rutinas
 * Cada rutina cuenta con rigor técnico biomecánico, estímulo programado y notas precisas de RPE/tempo.
 */

export const ROUTINES = [
  {
    id: "toji-fushiguro-gimnasio",
    name: "Protocolo de Restricción Divina",
    character: "Toji Fushiguro (Gym)",
    anime: "Jujutsu Kaisen",
    archetype: "Fuerza Bruta & Densidad Muscular",
    difficulty: "Avanzado",
    focus: "Hipertrofia Estética, Fuerza Explosiva y Agilidad Funcional",
    modality: "Gimnasio",
    duration: "60 - 75 min",
    frequency: "4 - 6 días / semana (según recuperación)",
    badgeNumber: "01",
    summary:
      "Rutina diseñada para emular la composición física de Toji Fushiguro: musculatura densa, hombros prominentes y capacidad atlética excepcional que combina velocidad y fuerza bruta.",
    description:
      "Protocolo de acondicionamiento físico basado en los pilares de sobrecarga progresiva, tiempo bajo tensión (TUT) y conexión neuromuscular. Prioriza movimientos compuestos pesados de empuje y tracción, combinados con trabajo de piernas y aislamiento de deltoides para maximizar la densidad muscular y la fuerza funcional.",
    equipment: ["Pesas libres", "Máquinas de poleas", "Racks de potencia"],
    trainingPillars: [
      {
        title: "Sobrecarga Progresiva",
        detail:
          "El núcleo del progreso radica en el incremento gradual de la carga o el volumen para forzar la adaptación del sistema musculoesquelético."
      },
      {
        title: "Tiempo Bajo Tensión (TUT)",
        detail:
          "Se enfatiza el control del movimiento para maximizar el reclutamiento de fibras musculares, especialmente en las fases de aislamiento."
      },
      {
        title: "Conexión Neuromuscular",
        detail:
          "Cada repetición debe ejecutarse con intención consciente sobre el músculo objetivo para optimizar la hipertrofia."
      }
    ],
    warmup: [
      "5 min de movilidad articular dinámica (cadera, hombros y muñecas)",
      "2 series de 10 dislocaciones de hombro con banda elástica",
      "2 series de aproximación progresiva al 40% y 60% del peso de trabajo en el primer ejercicio"
    ],
    exercises: [
      {
        order: "01",
        name: "Press de Banca",
        sets: "3",
        reps: "5 - 8",
        rest: "180s",
        notes: "Fuerza de empuje. Control excéntrico y bloqueo completo en la fase concéntrica."
      },
      {
        order: "02",
        name: "Dominadas Lastradas",
        sets: "3",
        reps: "6 - 10",
        rest: "180s",
        notes: "Tracción vertical. Rango completo, barbilla superando la barra en cada repetición."
      },
      {
        order: "03",
        name: "Press Militar con Barra",
        sets: "3",
        reps: "8 - 10",
        rest: "120s",
        notes: "Hombros de acero. Core bloqueado, evitar hiperextensión lumbar."
      },
      {
        order: "04",
        name: "Remo con Barra",
        sets: "3",
        reps: "8 - 12",
        rest: "120s",
        notes: "Grosor de espalda. Torso estable, tirón hacia el abdomen bajo."
      },
      {
        order: "05",
        name: "Sentadilla Profunda",
        sets: "4",
        reps: "6 - 8",
        rest: "180s",
        notes: "Potencia de piernas. Profundidad completa, rodillas alineadas con la punta del pie."
      },
      {
        order: "06",
        name: "Peso Muerto Rumano",
        sets: "3",
        reps: "10 - 12",
        rest: "120s",
        notes: "Cadena posterior. Cadera hacia atrás, espalda neutra durante todo el recorrido."
      },
      {
        order: "07",
        name: "Vuelos Laterales en Polea",
        sets: "4",
        reps: "12 - 15",
        rest: "90s",
        notes: "Aislamiento de deltoides. Movimiento controlado, evitar impulso con el trapecio."
      }
    ],
    nutrition: {
      calorieStrategy:
        "Superávit calórico controlado: aporte energético superior al gasto diario, priorizando fuentes de proteína de alta calidad para desarrollar densidad muscular.",
      recipes: [
        {
          name: "Tortilla de Proteína 'Divina'",
          type: "Receta de Recuperación",
          ingredients: ["3 a 4 huevos", "15g de manteca", "queso magro", "sal y provenzal"],
          purpose:
            "Aporte rápido de aminoácidos y grasas saludables para la reparación de tejidos tras sesiones intensas."
        },
        {
          name: "Tostadas Francesas de Alto Rendimiento",
          type: "Estrategia de Volumen",
          ingredients: ["huevos", "canela", "edulcorante", "pan integral", "crema de maní"],
          purpose:
            "Proporciona los carbohidratos necesarios para reponer el glucógeno muscular y mantener la intensidad en días de pierna o torso pesado."
        }
      ]
    },
    lifestyleNotes: [
      "Complementar el físico obtenido con vestimenta que resalte la musculatura, como prendas de compresión y calzado técnico."
    ],
    safetyNotes: [
      "Prioriza la técnica estricta sobre la carga externa, especialmente en sentadilla y peso muerto rumano, para proteger la zona lumbar.",
      "Si no dominas las dominadas lastradas, ejecuta dominadas estrictas con peso corporal antes de añadir sobrecarga.",
      "Respeta los tiempos de descanso indicados para permitir la recuperación neural entre series pesadas."
    ],
    relatedIds: ["toji-fushiguro-calistenia", "guts-berserker", "baki-hanma"]
  },
  {
    id: "toji-fushiguro-calistenia",
    name: "Protocolo de Restricción Divina",
    character: "Toji Fushiguro (Casa)",
    anime: "Jujutsu Kaisen",
    archetype: "Fuerza Bruta & Densidad Muscular",
    difficulty: "Avanzado",
    focus: "Hipertrofia Estética, Fuerza Explosiva y Agilidad Funcional",
    modality: "Calistenia",
    duration: "60 - 75 min",
    frequency: "4 - 6 días / semana (según recuperación)",
    badgeNumber: "02",
    summary:
      "Versión con peso corporal del protocolo de Toji Fushiguro, orientada a fuerza explosiva, control corporal y agilidad funcional.",
    description:
      "Adaptación en calistenia del protocolo original, manteniendo los mismos pilares de sobrecarga progresiva, tiempo bajo tensión y conexión neuromuscular, pero utilizando el peso corporal como principal fuente de resistencia mediante tracciones explosivas, empujes en paralelas y trabajo unilateral de piernas.",
    equipment: ["Barra de dominadas", "Barras paralelas", "Espacio para ejercicios de suelo"],
    trainingPillars: [
      {
        title: "Sobrecarga Progresiva",
        detail:
          "El núcleo del progreso radica en el incremento gradual de la carga o el volumen para forzar la adaptación del sistema musculoesquelético."
      },
      {
        title: "Tiempo Bajo Tensión (TUT)",
        detail:
          "Se enfatiza el control del movimiento para maximizar el reclutamiento de fibras musculares, especialmente en las fases de aislamiento."
      },
      {
        title: "Conexión Neuromuscular",
        detail:
          "Cada repetición debe ejecutarse con intención consciente sobre el músculo objetivo para optimizar la hipertrofia."
      }
    ],
    warmup: [
      "5 min de movilidad articular dinámica (cadera, hombros y muñecas)",
      "2 series de 10 dislocaciones de hombro con banda elástica",
      "1 serie ligera de dominadas y fondos sin lastre como activación"
    ],
    exercises: [
      {
        order: "01",
        name: "Dominadas Explosivas",
        sets: "4",
        reps: "Al fallo técnico",
        rest: "180s",
        notes: "Tracción vertical explosiva. Detener antes de perder la técnica estricta."
      },
      {
        order: "02",
        name: "Fondos en Paralelas (Dips)",
        sets: "4",
        reps: "10 - 15",
        rest: "120s",
        notes: "Empuje de tríceps y pecho. Descenso controlado, evitar rotación de hombros."
      },
      {
        order: "03",
        name: "Flexiones en Pica (Pike Push-ups)",
        sets: "3",
        reps: "8 - 12",
        rest: "120s",
        notes: "Empuje vertical de hombros. Cadera elevada, mirada hacia los pies."
      },
      {
        order: "04",
        name: "Sentadillas Pistola (Pistol Squats)",
        sets: "3",
        reps: "6 - 10 por pierna",
        rest: "120s",
        notes: "Fuerza unilateral de piernas. Control del descenso, talón siempre en contacto con el suelo."
      },
      {
        order: "05",
        name: "Muscle Ups (Opcional - Nivel Experto)",
        sets: "3",
        reps: "Las que salgan",
        rest: "180s",
        notes: "Tracción y empuje combinados. Requiere dominio previo de dominadas explosivas y fondos."
      },
      {
        order: "06",
        name: "L-Sit o Elevación de Piernas",
        sets: "3",
        reps: "30 seg / 12 reps",
        rest: "90s",
        notes: "Control de core. Mantener escápulas deprimidas y piernas extendidas."
      }
    ],
    nutrition: {
      calorieStrategy:
        "Superávit calórico controlado: aporte energético superior al gasto diario, priorizando fuentes de proteína de alta calidad para desarrollar densidad muscular.",
      recipes: [
        {
          name: "Tortilla de Proteína 'Divina'",
          type: "Receta de Recuperación",
          ingredients: ["3 a 4 huevos", "15g de manteca", "queso magro", "sal y provenzal"],
          purpose:
            "Aporte rápido de aminoácidos y grasas saludables para la reparación de tejidos tras sesiones intensas."
        },
        {
          name: "Tostadas Francesas de Alto Rendimiento",
          type: "Estrategia de Volumen",
          ingredients: ["huevos", "canela", "edulcorante", "pan integral", "crema de maní"],
          purpose:
            "Proporciona los carbohidratos necesarios para reponer el glucógeno muscular y mantener la intensidad en días de pierna o torso pesado."
        }
      ]
    },
    lifestyleNotes: [
      "Complementar el físico obtenido con vestimenta que resalte la musculatura, como prendas de compresión y calzado técnico."
    ],
    safetyNotes: [
      "No intentar Muscle Ups sin dominio previo de dominadas explosivas y fondos estrictos, por riesgo de lesión en el manguito rotador.",
      "En sentadillas pistola, priorizar movilidad de tobillo y cadera antes de aumentar el rango o la velocidad.",
      "Respeta los tiempos de descanso indicados para permitir la recuperación neural entre series de alta exigencia."
    ],
    relatedIds: ["toji-fushiguro-gimnasio", "guts-berserker", "baki-hanma"]
  }
];