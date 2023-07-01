export function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Випадкове значення для червоного каналу (0-255)
    const g = Math.floor(Math.random() * 256); // Випадкове значення для зеленого каналу (0-255)
    const b = Math.floor(Math.random() * 256); // Випадкове значення для синього каналу (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Повертаємо значення у форматі RGB
  }