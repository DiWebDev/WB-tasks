function traverseDOM(node, action) {
  action(node); // Выполняем действие с текущим узлом
  node = node.firstChild; // Переходим к первому дочернему узлу
  while (node) {
    traverseDOM(node, action); // Рекурсивно вызываем функцию для каждого дочернего узла
    node = node.nextSibling; // Переходим к следующему соседнему узлу
  }
}

function logTagInfo(node) {
    if (node.nodeType === 1) {
      console.log("Tag Name:", node.tagName);
    }
  }
  
  const rootElement = document.getElementById("root");
  traverseDOM(rootElement, logTagInfo);
