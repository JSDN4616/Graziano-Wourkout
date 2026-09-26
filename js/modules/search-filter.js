/**
 * Graziano Workout - Search & Filtering Engine
 * Real-time filter evaluation across multiple dimensions
 */

export class RoutineFilterEngine {
  constructor(routines, onFilterChange) {
    this.allRoutines = routines;
    this.onFilterChange = onFilterChange;

    this.state = {
      searchQuery: "",
      difficulty: "todos",
      focus: "todos",
      modality: "todos"
    };

    this.initElements();
    this.bindEvents();
  }

  initElements() {
    this.searchInput = document.getElementById("searchInput");
    this.searchClearBtn = document.getElementById("searchClearBtn");
    this.btnResetFilters = document.getElementById("btnResetFilters");
    this.resultsCountEl = document.getElementById("resultsCount");
    this.filterChips = document.querySelectorAll(".filter-chip");
  }

  bindEvents() {
    // Live Search
    if (this.searchInput) {
      this.searchInput.addEventListener("input", (e) => {
        this.state.searchQuery = e.target.value.trim().toLowerCase();
        if (this.searchClearBtn) {
          if (this.state.searchQuery.length > 0) {
            this.searchClearBtn.classList.add("active");
          } else {
            this.searchClearBtn.classList.remove("active");
          }
        }
        this.applyFilters();
      });

      // Keyboard shortcut '/' to focus search
      window.addEventListener("keydown", (e) => {
        if (e.key === "/" && document.activeElement !== this.searchInput && !document.querySelector(".routine-modal-overlay.active")) {
          e.preventDefault();
          this.searchInput.focus();
        }
      });
    }

    // Clear Search Button
    if (this.searchClearBtn) {
      this.searchClearBtn.addEventListener("click", () => {
        this.searchInput.value = "";
        this.state.searchQuery = "";
        this.searchClearBtn.classList.remove("active");
        this.searchInput.focus();
        this.applyFilters();
      });
    }

    // Filter Chips
    this.filterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const group = chip.dataset.group;
        const value = chip.dataset.value;

        // Deselect other chips in same group
        document.querySelectorAll(`.filter-chip[data-group="${group}"]`).forEach((c) => {
          c.classList.remove("active");
        });

        // Activate clicked chip
        chip.classList.add("active");
        this.state[group] = value;

        this.applyFilters();
      });
    });

    // Reset All Filters Button
    if (this.btnResetFilters) {
      this.btnResetFilters.addEventListener("click", () => {
        this.resetFilters();
      });
    }
  }

  resetFilters() {
    this.state = {
      searchQuery: "",
      difficulty: "todos",
      focus: "todos",
      modality: "todos"
    };

    if (this.searchInput) {
      this.searchInput.value = "";
    }
    if (this.searchClearBtn) {
      this.searchClearBtn.classList.remove("active");
    }

    // Reset chips to 'todos'
    this.filterChips.forEach((chip) => {
      if (chip.dataset.value === "todos") {
        chip.classList.add("active");
      } else {
        chip.classList.remove("active");
      }
    });

    this.applyFilters();
  }

  hasActiveFilters() {
    return (
      this.state.searchQuery.length > 0 ||
      this.state.difficulty !== "todos" ||
      this.state.focus !== "todos" ||
      this.state.modality !== "todos"
    );
  }

  applyFilters() {
    const q = this.state.searchQuery;
    const diff = this.state.difficulty;
    const foc = this.state.focus;
    const mod = this.state.modality;

    const normalizeText = (text) =>
      (text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    const normQ = normalizeText(q);
    const normDiff = normalizeText(diff);
    const normFoc = normalizeText(foc);
    const normMod = normalizeText(mod);

    const filtered = this.allRoutines.filter((routine) => {
      // Difficulty match
      if (normDiff !== "todos") {
        const rDiff = normalizeText(routine.difficulty);
        if (rDiff !== normDiff) {
          return false;
        }
      }

      // Focus match (flexible check across focus, archetype, and modality)
      if (normFoc !== "todos") {
        const rFocus = normalizeText(routine.focus);
        const rMod = normalizeText(routine.modality);
        const rArch = normalizeText(routine.archetype);

        let matchesFocus = rFocus.includes(normFoc) || rArch.includes(normFoc);
        if (normFoc === "calistenia" && (rMod.includes("calistenia") || rFocus.includes("calistenia"))) {
          matchesFocus = true;
        }
        if (normFoc === "fuerza" && (rFocus.includes("fuerza") || rFocus.includes("hipertrofia"))) {
          matchesFocus = true;
        }
        if (normFoc === "resistencia" && (rFocus.includes("resistencia") || rFocus.includes("cardio"))) {
          matchesFocus = true;
        }
        if (normFoc === "hibrido" && (rFocus.includes("hibrid") || rMod.includes("hibrid"))) {
          matchesFocus = true;
        }
        if (!matchesFocus) {
          return false;
        }
      }

      // Modality match
      if (normMod !== "todos") {
        const rMod = normalizeText(routine.modality);
        let matchesMod = rMod.includes(normMod);
        if ((normMod === "peso corporal" || normMod === "calistenia") && (rMod.includes("calistenia") || rMod.includes("peso corporal"))) {
          matchesMod = true;
        }
        if (normMod === "gimnasio" && (rMod.includes("gimnasio") || rMod.includes("barra") || rMod.includes("pesas"))) {
          matchesMod = true;
        }
        if (normMod === "hibrido" && rMod.includes("hibrid")) {
          matchesMod = true;
        }
        if (!matchesMod) {
          return false;
        }
      }

      // Query match (across name, character, anime, archetype, summary, description, focus, modality, equipment, exercises, and pillars)
      if (normQ.length > 0) {
        const matchName = normalizeText(routine.name).includes(normQ);
        const matchChar = normalizeText(routine.character).includes(normQ);
        const matchAnime = normalizeText(routine.anime).includes(normQ);
        const matchArch = normalizeText(routine.archetype).includes(normQ);
        const matchSumm = normalizeText(routine.summary).includes(normQ);
        const matchDesc = normalizeText(routine.description).includes(normQ);
        const matchFocus = normalizeText(routine.focus).includes(normQ);
        const matchMod = normalizeText(routine.modality).includes(normQ);

        const matchEquip = (routine.equipment || []).some((eq) =>
          normalizeText(eq).includes(normQ)
        );

        const matchExercises = (routine.exercises || []).some((ex) =>
          normalizeText(ex.name).includes(normQ) || normalizeText(ex.notes).includes(normQ)
        );

        const matchPillars = (routine.trainingPillars || []).some((pil) =>
          normalizeText(pil.title).includes(normQ) || normalizeText(pil.detail).includes(normQ)
        );

        const matchNutrition = routine.nutrition && (
          normalizeText(routine.nutrition.calorieStrategy).includes(normQ) ||
          (routine.nutrition.recipes || []).some((rec) =>
            normalizeText(rec.name).includes(normQ) ||
            (rec.ingredients || []).some((ing) => normalizeText(ing).includes(normQ))
          )
        );

        if (
          !matchName &&
          !matchChar &&
          !matchAnime &&
          !matchArch &&
          !matchSumm &&
          !matchDesc &&
          !matchFocus &&
          !matchMod &&
          !matchEquip &&
          !matchExercises &&
          !matchPillars &&
          !matchNutrition
        ) {
          return false;
        }
      }

      return true;
    });

    // Update status bar
    if (this.resultsCountEl) {
      this.resultsCountEl.innerHTML = `Mostrando <strong>${filtered.length}</strong> de <strong>${this.allRoutines.length}</strong> rutinas`;
    }

    if (this.btnResetFilters) {
      if (this.hasActiveFilters()) {
        this.btnResetFilters.classList.add("visible");
      } else {
        this.btnResetFilters.classList.remove("visible");
      }
    }

    // Trigger callback to render
    this.onFilterChange(filtered);
  }
}
