/**
 * Graziano Workout - Routine Technical Sheet / Detail View Controller
 * Full-screen modal overlay, keyboard navigation & URL hash sync
 */

import { ICONS } from "./icons.js";
import { exportRoutineToPDF } from "./pdf-export.js";

export class RoutineDetailView {
  constructor(allRoutines) {
    this.allRoutines = allRoutines;
    this.currentRoutine = null;
    this.modalEl = document.getElementById("routineModalOverlay");
    this.sheetContentEl = document.getElementById("routineSheetBody");

    this.bindEvents();
  }

  bindEvents() {
    // Close button inside modal action bar
    const closeBtn = document.getElementById("btnModalClose");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.close());
    }

    // PDF Export button inside modal
    const pdfBtn = document.getElementById("btnModalPdf");
    if (pdfBtn) {
      pdfBtn.addEventListener("click", () => {
        if (this.currentRoutine) {
          exportRoutineToPDF(this.currentRoutine);
        }
      });
    }

    // Click outside to close
    if (this.modalEl) {
      this.modalEl.addEventListener("click", (e) => {
        if (e.target === this.modalEl) {
          this.close();
        }
      });
    }

    // Keyboard ESC listener
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen()) {
        this.close();
      }
    });

    // Hashchange event for browser back/forward buttons
    window.addEventListener("hashchange", () => {
      this.handleHashChange();
    });
  }

  isOpen() {
    return this.modalEl && this.modalEl.classList.contains("active");
  }

  handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith("#rutina/")) {
      const routineId = hash.replace("#rutina/", "");
      const routine = this.allRoutines.find((r) => r.id === routineId);
      if (routine) {
        this.open(routine, false);
      }
    } else if (this.isOpen()) {
      this.close(false);
    }
  }

  open(routine, updateHash = true) {
    this.currentRoutine = routine;

    if (updateHash) {
      window.location.hash = `rutina/${routine.id}`;
    }

    this.renderRoutineContent(routine);

    // Show modal & prevent background scroll
    this.modalEl.classList.add("active");
    this.modalEl.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Scroll sheet to top
    const sheet = this.modalEl.querySelector(".routine-sheet");
    if (sheet) {
      sheet.scrollTop = 0;
    }
    this.modalEl.scrollTop = 0;
  }

  close(updateHash = true) {
    if (!this.isOpen()) return;

    this.modalEl.classList.remove("active");
    this.modalEl.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    this.currentRoutine = null;

    if (updateHash && window.location.hash.startsWith("#rutina/")) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }

  renderRoutineContent(routine) {
    if (!this.sheetContentEl) return;

    // Difficulty badge color class
    let diffBadgeClass = "tech-badge--dim";
    if (routine.difficulty === "Élite") {
      diffBadgeClass = "tech-badge--danger";
    } else if (routine.difficulty === "Avanzado") {
      diffBadgeClass = "tech-badge--filled";
    }

    // Related routines data
    const relatedList = (routine.relatedIds || [])
      .map((id) => this.allRoutines.find((r) => r.id === id))
      .filter(Boolean);

    this.sheetContentEl.innerHTML = `
      <!-- Technical Header -->
      <header class="sheet-header-block">
        <div class="sheet-meta-eyebrow">
          <span>// FICHA TÉCNICA #${routine.badgeNumber}</span>
          <span>${routine.anime}</span>
        </div>

        <h1 class="sheet-character-title">${routine.character}</h1>
        <h2 class="sheet-routine-subtitle">${routine.name} — <span style="font-weight:400;">${routine.archetype}</span></h2>

        <!-- Specifications Grid -->
        <div class="sheet-spec-grid">
          <div class="spec-cell">
            <span class="spec-cell-label">DIFICULTAD</span>
            <span class="spec-cell-value">
              <span class="tech-badge ${diffBadgeClass}">${routine.difficulty}</span>
            </span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">MODALIDAD</span>
            <span class="spec-cell-value">${routine.modality}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">DURACIÓN ESTIMADA</span>
            <span class="spec-cell-value">${routine.duration}</span>
          </div>
          ${
            routine.frequency
              ? `
          <div class="spec-cell">
            <span class="spec-cell-label">FRECUENCIA SEMANAL</span>
            <span class="spec-cell-value">${routine.frequency}</span>
          </div>
          `
              : ""
          }
          <div class="spec-cell spec-cell--full">
            <span class="spec-cell-label">ENFOQUE PRINCIPAL</span>
            <span class="spec-cell-value">${routine.focus}</span>
          </div>
        </div>
      </header>

      <!-- Stimulus & Description -->
      <section class="sheet-section">
        <h3 class="sheet-section-title">Concepto de Entrenamiento y Estímulo Fisiológico</h3>
        <p class="sheet-stimulus-text">${routine.description}</p>
      </section>

      <!-- Equipment Section -->
      ${
        routine.equipment && routine.equipment.length > 0
          ? `
      <section class="sheet-section">
        <h3 class="sheet-section-title">Equipamiento & Material Requerido</h3>
        <div class="sheet-equipment-box">
          <div class="equipment-tags">
            ${routine.equipment
              .map(
                (item) => `
              <span class="equipment-tag">
                <span class="equipment-tag-bullet">▪</span> ${item}
              </span>
            `
              )
              .join("")}
          </div>
        </div>
      </section>
      `
          : ""
      }

      <!-- Training Pillars Section -->
      ${
        routine.trainingPillars && routine.trainingPillars.length > 0
          ? `
      <section class="sheet-section">
        <h3 class="sheet-section-title">Pilares Fundamentales del Método</h3>
        <div class="sheet-pillars-grid">
          ${routine.trainingPillars
            .map(
              (pillar, idx) => `
            <div class="pillar-card">
              <div class="pillar-header">
                <span class="pillar-num">0${idx + 1}</span>
                <h4 class="pillar-title">${pillar.title}</h4>
              </div>
              <p class="pillar-detail">${pillar.detail}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </section>
      `
          : ""
      }

      <!-- Warmup Protocol -->
      ${
        routine.warmup && routine.warmup.length > 0
          ? `
      <section class="sheet-section">
        <h3 class="sheet-section-title">Protocolo de Activación & Calentamiento Previo</h3>
        <div class="sheet-warmup-box">
          <ul class="warmup-list">
            ${routine.warmup.map((step) => `<li class="warmup-item">${step}</li>`).join("")}
          </ul>
        </div>
      </section>
      `
          : ""
      }

      <!-- Technical Exercise Table -->
      ${
        routine.exercises && routine.exercises.length > 0
          ? `
      <section class="sheet-section">
        <h3 class="sheet-section-title">Matriz Técnica de Ejercicios</h3>
        <div class="exercise-table-container">
          <table class="exercise-table" aria-label="Tabla de ejercicios para ${routine.character}">
            <thead>
              <tr>
                <th scope="col" class="col-order">#</th>
                <th scope="col" class="col-name">Ejercicio</th>
                <th scope="col" class="col-sets">Series</th>
                <th scope="col" class="col-reps">Reps</th>
                <th scope="col" class="col-rest">Descanso</th>
                <th scope="col" class="col-notes">Notas Técnicas & RPE</th>
              </tr>
            </thead>
            <tbody>
              ${routine.exercises
                .map(
                  (ex) => `
                <tr>
                  <td class="col-order">${ex.order}</td>
                  <td class="col-name">${ex.name}</td>
                  <td class="col-sets">${ex.sets}</td>
                  <td class="col-reps">${ex.reps}</td>
                  <td class="col-rest">${ex.rest}</td>
                  <td class="col-notes">${ex.notes}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
      `
          : ""
      }

      <!-- Nutrition Strategy & Recipes -->
      ${
        routine.nutrition
          ? `
      <section class="sheet-section">
        <h3 class="sheet-section-title">Estrategia Nutricional & Recetas de Rendimiento</h3>
        <div class="sheet-nutrition-box">
          ${
            routine.nutrition.calorieStrategy
              ? `
            <div class="nutrition-strategy-block">
              <span class="nutrition-strategy-label">// ENFOQUE ENERGÉTICO & CALÓRICO</span>
              <p class="nutrition-strategy-text">${routine.nutrition.calorieStrategy}</p>
            </div>
          `
              : ""
          }

          ${
            routine.nutrition.recipes && routine.nutrition.recipes.length > 0
              ? `
            <div class="recipes-grid">
              ${routine.nutrition.recipes
                .map(
                  (recipe) => `
                <div class="recipe-card">
                  <div class="recipe-header">
                    <span class="recipe-name">${recipe.name}</span>
                    <span class="tech-badge tech-badge--dim">${recipe.type}</span>
                  </div>
                  <div class="recipe-ingredients-box">
                    <span class="recipe-sublabel">INGREDIENTES CLAVE:</span>
                    <div class="recipe-ingredients-list">
                      ${recipe.ingredients
                        .map(
                          (ing) => `<span class="recipe-ingredient-chip">${ing}</span>`
                        )
                        .join("")}
                    </div>
                  </div>
                  <div class="recipe-purpose-box">
                    <span class="recipe-sublabel">OBJETIVO FISIOLÓGICO:</span>
                    <p class="recipe-purpose-text">${recipe.purpose}</p>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }
        </div>
      </section>
      `
          : ""
      }

      <!-- Lifestyle Notes -->
      ${
        routine.lifestyleNotes && routine.lifestyleNotes.length > 0
          ? `
      <section class="sheet-section">
        <h3 class="sheet-section-title">Pautas de Estilo de Vida & Adaptación</h3>
        <div class="sheet-lifestyle-box">
          <ul class="lifestyle-list">
            ${routine.lifestyleNotes.map((note) => `<li class="lifestyle-item">${note}</li>`).join("")}
          </ul>
        </div>
      </section>
      `
          : ""
      }

      <!-- Safety & Notes -->
      ${
        routine.safetyNotes && routine.safetyNotes.length > 0
          ? `
      <section class="sheet-section">
        <h3 class="sheet-section-title">Directrices de Seguridad & Recuperación</h3>
        <div class="sheet-safety-box">
          <ul class="safety-list">
            ${routine.safetyNotes
              .map((note) => `<li class="safety-item">${note}</li>`)
              .join("")}
          </ul>
        </div>
      </section>
      `
          : ""
      }

      <!-- Related Routines -->
      ${
        relatedList.length > 0
          ? `
        <section class="sheet-related-section">
          <h3 class="sheet-section-title">Rutinas Relacionadas en el Repositorio</h3>
          <div class="related-grid">
            ${relatedList
              .map(
                (rel) => `
              <div class="related-card" data-related-id="${rel.id}">
                <span class="related-character">${rel.character}</span>
                <span class="related-routine">${rel.name}</span>
                <span class="tech-label" style="margin-top:0.25rem;">${rel.modality} • ${rel.difficulty}</span>
              </div>
            `
              )
              .join("")}
          </div>
        </section>
      `
          : ""
      }
    `;

    // Bind related cards clicks
    this.sheetContentEl.querySelectorAll(".related-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.relatedId;
        const targetRoutine = this.allRoutines.find((r) => r.id === id);
        if (targetRoutine) {
          this.open(targetRoutine, true);
        }
      });
    });
  }
}
