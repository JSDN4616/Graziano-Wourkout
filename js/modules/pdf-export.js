/**
 * Graziano Workout - PDF Export & Technical Print Module
 * Triggers clean editorial PDF formatting without external dependencies
 */

export function exportRoutineToPDF(routine) {
  if (!routine) return;

  const originalTitle = document.title;
  const safeName = routine.character.replace(/[\s\W]+/g, "_");
  document.title = `Graziano_Workout_${safeName}_Ficha_Tecnica`;

  // Provide slight delay for style stabilization before print dialog
  setTimeout(() => {
    window.print();
    // Restore document title after print dialog closes
    setTimeout(() => {
      document.title = originalTitle;
    }, 500);
  }, 100);
}
