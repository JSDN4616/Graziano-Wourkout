/**
 * Graziano Workout - Difficulty Badge Helper
 * Strict 4-level invariant chromatic hierarchy:
 * 1. PRINCIPIANTE (#56CFE1 - Cian)     -> difficulty-badge--beginner
 * 2. INTERMEDIO   (#F4C95D - Ámbar)    -> difficulty-badge--intermediate
 * 3. AVANZADO     (#FF5A5F - Rojo)     -> difficulty-badge--advanced
 * 4. ÉLITE        (#C77DFF - Violeta)  -> difficulty-badge--elite
 */

export function getDifficultyBadgeClass(difficulty) {
  const norm = (difficulty || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  if (norm.includes("elite")) {
    return "difficulty-badge--elite";
  }
  if (norm.includes("avanzad")) {
    return "difficulty-badge--advanced";
  }
  if (norm.includes("intermed")) {
    return "difficulty-badge--intermediate";
  }
  if (norm.includes("princip")) {
    return "difficulty-badge--beginner";
  }
  return "difficulty-badge--neutral";
}


