// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const list = document.querySelector("#ingredients");
const arr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const newItem = document.createElement("li");
  newItem.textContent = ingredients[i];
  newItem.classList.add("item");
  arr.push(newItem);
}
list.append(...arr);