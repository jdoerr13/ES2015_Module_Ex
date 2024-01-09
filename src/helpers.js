/** returns a randomly selected item from array of items */

const choice = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

// /** return copy of array w/o first appearance of item
//  *
//  * If not found, return undefined.
//  *
//  **/

// function remove(item, items) {
//     for (let i = 0; i < items.length; i++) {
//       if (items[i] === item) {
//         return [...items.slice(0, i), ...items.slice(i + 1)];
//       }
//     }
//   }
  
function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
      if (items[i] === item) {
        items.splice(i, 1);  // Removes the item from the array
        return item;         // Returns the removed item
      }
    }
    return undefined;  // Returns undefined if the item is not found
  }

  export { choice, remove };