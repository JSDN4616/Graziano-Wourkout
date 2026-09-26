/**
 * Graziano Workout - Main Application Orchestrator
 * High Performance, Zero Heavy Dependencies, Native Modern Web
 */

import { ROUTINES } from "./data/routines.js";
import { ICONS } from "./modules/icons.js";
import { RoutineFilterEngine } from "./modules/search-filter.js";
import { RoutineDetailView } from "./modules/detail-view.js";

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
        let diffBadgeClass = "tech-badge--dim";
        const lowerDiff = (routine.difficulty || "").toLowerCase();
        if (lowerDiff.includes("elite") || lowerDiff.includes("élite")) {
          diffBadgeClass = "tech-badge--danger";
        } else if (lowerDiff.includes("avanzad")) {
          diffBadgeClass = "tech-badge--filled";
        }

        // Japanese or stylized letter for art card
        const initialLetter = routine.character.charAt(0);

        return `
          <article class="routine-card manga-corner-accent" data-id="${routine.id}">
            <div class="card-header-art">
              <div class="card-screentone-bg"></div>
              <span class="card-badge-number">#${routine.badgeNumber}</span>
              <span class="card-difficulty-badge">
                <span class="tech-badge ${diffBadgeClass}">${routine.difficulty}</span>
              </span>
              <span class="card-art-symbol">${initialLetter}</span>
            </div>

            <div class="card-body">
              <span class="card-anime-tag">${routine.anime}</span>
              <h3 class="card-character-name">${routine.character}</h3>
              <h4 class="card-routine-title">${routine.name}</h4>
              <p class="card-summary-text">${routine.summary}</p>

              <div class="card-meta-chips">
                <span class="tech-badge tech-badge--dim">${routine.modality}</span>
                <span class="tech-badge tech-badge--dim">${routine.duration}</span>
                ${routine.frequency ? `<span class="tech-badge tech-badge--dim">${routine.frequency.split("(")[0].trim()}</span>` : ""}
              </div>
            </div>

            <div class="card-footer">
              <button type="button" class="btn btn-secondary btn-sm btn-open-routine" data-id="${routine.id}">
                <span>VER FICHA TÉCNICA</span>
                ${ICONS.arrowRight}
              </button>
            </div>
          </article>
        `;
      })
      .join("");

    // Bind click events on cards
    this.gridContainer.querySelectorAll(".btn-open-routine").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const routine = this.routines.find((r) => r.id === id);
        if (routine) {
          this.detailView.open(routine, true);
        }
      });
    });

    // Also make the whole card clickable for mobile convenience
    this.gridContainer.querySelectorAll(".routine-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        const routine = this.routines.find((r) => r.id === id);
        if (routine) {
          this.detailView.open(routine, true);
        }
      });
    });
  }
}

// Bootstrap on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  new GrazianoWorkoutApp();
});
