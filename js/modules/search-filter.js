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

    // Initialize accessibility aria-checked states
    this.filterChips.forEach((chip) => {
      chip.setAttribute("role", "radio");
      chip.setAttribute("aria-checked", chip.classList.contains("active") ? "true" : "false");
    });
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

      // Keyboard shortcuts '/' and Cmd+K / Ctrl+K to focus search
      window.addEventListener("keydown", (e) => {
        const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
        const isSlash = e.key === "/" && document.activeElement !== this.searchInput;
        if ((isCmdK || isSlash) && !document.querySelector(".routine-modal-overlay.active")) {
          e.preventDefault();
          this.searchInput.focus();
          this.searchInput.select();
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
          c.setAttribute("aria-checked", "false");
        });

        // Activate clicked chip
        chip.classList.add("active");
        chip.setAttribute("aria-checked", "true");
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
        chip.setAttribute("aria-checked", "true");
      } else {
        chip.classList.remove("active");
        chip.setAttribute("aria-checked", "false");
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
      // 1. Difficulty match (Exact 4 official normalized levels)
      if (normDiff !== "todos") {
        const rDiff = normalizeText(routine.difficulty);
        let matchesDiff = false;

        if (normDiff === "elite") {
          matchesDiff = rDiff === "elite";
        } else if (normDiff === "avanzado") {
          matchesDiff = rDiff === "avanzado";
        } else if (normDiff === "intermedio") {
          matchesDiff = rDiff === "intermedio";
        } else if (normDiff === "principiante") {
          matchesDiff = rDiff === "principiante";
        }

        if (!matchesDiff) {
          return false;
        }
      }

      // 2. Focus match
      if (normFoc !== "todos") {
        const rFocus = normalizeText(routine.focus);
        const rMod = normalizeText(routine.modality);
        const rArch = normalizeText(routine.archetype);

        let matchesFocus = false;
        if (normFoc === "fuerza") {
          matchesFocus = rFocus.includes("fuerza") || rFocus.includes("hipertrofia") || rArch.includes("fuerza");
        } else if (normFoc === "calistenia") {
          matchesFocus =
            rMod.includes("calistenia") ||
            rFocus.includes("calistenia") ||
            rArch.includes("calistenia") ||
            rMod.includes("peso corporal");
        } else if (normFoc === "resistencia") {
          matchesFocus = rFocus.includes("resistencia") || rFocus.includes("cardio") || rArch.includes("resistencia");
        } else if (normFoc === "hibrido") {
          matchesFocus =
            rFocus.includes("hibrid") ||
            rMod.includes("hibrid") ||
            rArch.includes("hibrid") ||
            rFocus.includes("funcional");
        }

        if (!matchesFocus) {
          return false;
        }
      }

      // 3. Modality match
      if (normMod !== "todos") {
        const rMod = normalizeText(routine.modality);
        const rArch = normalizeText(routine.archetype);
        const equipList = (routine.equipment || []).map(normalizeText).join(" ");
        const allDays = (routine.days || []).map((d) => normalizeText(d.dayLabel)).join(" ");

        let matchesMod = false;
        if (normMod === "gimnasio") {
          matchesMod =
            rMod.includes("gimnasio") ||
            rMod.includes("gym") ||
            equipList.includes("rack") ||
            equipList.includes("pesas libres") ||
            equipList.includes("mancuerna") ||
            equipList.includes("polea") ||
            allDays.includes("gimnasio") ||
            allDays.includes("gym");
        } else if (normMod === "peso corporal" || normMod === "calistenia") {
          matchesMod =
            rMod.includes("calistenia") ||
            rMod.includes("peso corporal") ||
            rMod.includes("autocarga") ||
            equipList.includes("dominada") ||
            allDays.includes("calistenia");
        } else if (normMod === "hibrido") {
          matchesMod =
            rMod.includes("hibrid") ||
            rArch.includes("hibrid") ||
            (allDays.includes("gimnasio") && allDays.includes("calistenia"));
        }

        if (!matchesMod) {
          return false;
        }
      }

      // Query match (across all text fields, exercises across days, pillars, schedule, and recipes)
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

        const allExercises = [
          ...(routine.exercises || []),
          ...(routine.days ? routine.days.flatMap((d) => d.exercises || []) : [])
        ];

        const matchExercises = allExercises.some((ex) =>
          normalizeText(ex.name).includes(normQ) ||
          normalizeText(ex.notes).includes(normQ) ||
          normalizeText(ex.tut).includes(normQ)
        );

        const matchDays = (routine.days || []).some((d) =>
          normalizeText(d.dayLabel).includes(normQ)
        );

        const matchPillars = (routine.trainingPillars || []).some((pil) =>
          normalizeText(pil.title).includes(normQ) || normalizeText(pil.detail).includes(normQ)
        );

        const matchVariants = (routine.progressionVariants || []).some((v) =>
          normalizeText(v.name).includes(normQ) || normalizeText(v.detail).includes(normQ)
        );

        const matchNutrition = routine.nutrition && (
          normalizeText(routine.nutrition.calorieStrategy).includes(normQ) ||
          (routine.nutrition.recipes || []).some((rec) =>
            normalizeText(rec.name).includes(normQ) ||
            normalizeText(rec.purpose).includes(normQ) ||
            normalizeText(rec.preparation).includes(normQ) ||
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
          !matchDays &&
          !matchPillars &&
          !matchVariants &&
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
