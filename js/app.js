/**
 * Graziano Workout - Main Application Orchestrator
 * High Performance, Zero Heavy Dependencies, Native Modern Web
 */

import { ROUTINES } from "./data/routines.js";
import { ICONS } from "./modules/icons.js";
import { RoutineFilterEngine } from "./modules/search-filter.js";
import { RoutineDetailView } from "./modules/detail-view.js";
import { getDifficultyBadgeClass } from "./modules/badge-helper.js";

class GrazianoWorkoutApp {
  constructor() {
    this.routines = ROUTINES;
    this.gridContainer = document.getElementById("routineGrid");
    this.emptyStateContainer = document.getElementById("catalogEmptyState");

    // Initialize Detail View
    this.detailView = new RoutineDetailView(this.routines);

    // Initialize Filter Engine
    this.filterEngine = new RoutineFilterEngine(this.routines, (filtered) => {
      this.renderRoutineGrid(filtered);
    });

    this.init();
  }

  init() {
    // Initial Render
    this.renderRoutineGrid(this.routines);

    // Update hero routine count
    const heroCount = document.getElementById("heroRoutineCount");
    if (heroCount) {
      heroCount.textContent = String(this.routines.length).padStart(2, "0");
    }

    // Check URL Hash on initial page load
    if (window.location.hash.startsWith("#rutina/")) {
      const routineId = window.location.hash.replace("#rutina/", "");
      const matched = this.routines.find((r) => r.id === routineId);
      if (matched) {
        this.detailView.open(matched, false);
      }
    }

    // Bind Hero CTA anchor
    const btnExplore = document.getElementById("btnExploreHero");
    if (btnExplore) {
      btnExplore.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById("seccion-rutinas");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          const searchInput = document.getElementById("searchInput");
          if (searchInput) {
            setTimeout(() => searchInput.focus(), 400);
          }
        }
      });
    }

    // Configure OS-aware search shortcut hint
    const searchKbd = document.getElementById("searchKbd");
    if (searchKbd) {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      searchKbd.textContent = isMac ? "⌘ K" : "CTRL K";
    }

    // Populate static icon placeholders if any
    this.injectStaticIcons();
  }

  injectStaticIcons() {
    document.querySelectorAll("[data-icon]").forEach((el) => {
      const iconKey = el.dataset.icon;
      if (ICONS[iconKey]) {
        el.innerHTML = ICONS[iconKey];
      }
    });
  }

  renderRoutineGrid(routinesToRender) {
    if (!this.gridContainer) return;

    if (routinesToRender.length === 0) {
      this.gridContainer.innerHTML = "";
      if (this.emptyStateContainer) {
        this.emptyStateContainer.style.display = "flex";
      }
      return;
    }

    if (this.emptyStateContainer) {
      this.emptyStateContainer.style.display = "none";
    }

    this.gridContainer.innerHTML = routinesToRender
      .map((routine) => {
        const diffBadgeClass = getDifficultyBadgeClass(routine.difficulty);

        // Japanese or stylized letter for fallback art
        const initialLetter = routine.character.charAt(0);

        // Image rendering — pure untouched image asset
        const imageHtml = routine.cardImage
          ? `<img src="${routine.cardImage}" alt="${routine.character} — ${routine.name}" loading="lazy">`
          : `<div class="card-image-fallback">
               <span class="card-art-symbol">${initialLetter}</span>
             </div>`;

        return `
          <article class="routine-card manga-corner-accent" data-id="${routine.id}" tabindex="0" role="article" aria-label="${routine.character} — ${routine.name}">
            <div class="card-image">
              ${imageHtml}
              <span class="card-badge-number">#${routine.badgeNumber}</span>
              <span class="card-difficulty-badge">
                <span class="difficulty-badge ${diffBadgeClass}">${routine.difficulty}</span>
              </span>
            </div>

            <div class="card-body">
              <span class="card-anime-tag">${routine.anime}</span>
              <h3 class="card-character-name">${routine.character}</h3>
              <h4 class="card-routine-title">${routine.name}</h4>
              <p class="card-summary-text">${routine.summary}</p>

              <div class="card-editorial-spec">
                <span>${routine.modality}</span>
                <span class="spec-sep" aria-hidden="true">/</span>
                <span>${routine.duration}</span>
              </div>
            </div>

            <div class="card-cta" role="button" tabindex="0" data-id="${routine.id}" aria-label="Explorar ficha de ${routine.character}">
              <span>EXPLORAR FICHA</span>
              <span class="cta-arrow" aria-hidden="true">${ICONS.arrowRight}</span>
            </div>
          </article>
        `;
      })
      .join("");

    // Bind click and keyboard events on CTA buttons
    this.gridContainer.querySelectorAll(".card-cta").forEach((btn) => {
      const triggerOpen = (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const routine = this.routines.find((r) => r.id === id);
        if (routine) {
          this.detailView.open(routine, true);
        }
      };

      btn.addEventListener("click", triggerOpen);
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          triggerOpen(e);
        }
      });
    });

    // Make whole card clickable and keyboard-accessible
    this.gridContainer.querySelectorAll(".routine-card").forEach((card) => {
      const triggerCardOpen = () => {
        const id = card.dataset.id;
        const routine = this.routines.find((r) => r.id === id);
        if (routine) {
          this.detailView.open(routine, true);
        }
      };

      card.addEventListener("click", triggerCardOpen);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          // If event target is CTA, CTA already handles it
          if (e.target.closest(".card-cta")) return;
          e.preventDefault();
          triggerCardOpen();
        }
      });
    });
  }
}

// Bootstrap on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  new GrazianoWorkoutApp();
});
