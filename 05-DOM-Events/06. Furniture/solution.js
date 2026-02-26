/* function solve() {

  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const [inputArea, outputArea] = document.querySelectorAll('textarea');
  const tbody = document.querySelector('tbody');

  generateBtn.addEventListener('click', () => {
    const items = JSON.parse(inputArea.value);

    items.forEach(item => {
      const row = document.createElement('tr');

      row.innerHTML = `
      <td><img src="${item.img}"></td>
      <td><p>${item.name}</p></td>
      <td><p>${item.price}</p></td>
      <td><p>${item.decFactor}</p></td>
      <td><input type="checkbox" /></td>
      `;
      tbody.appendChild(row);
    });
  });
  //BUY
  buyBtn.addEventListener('click', () => {
    // find all checked checkboxes and get their rows(tr)
    const checkedRows = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.parentElement.parentElement);

    if (checkedRows.length === 0) return;

    const names = checkedRows.map(row => row.children[1].textContent.trim());
    const prices = checkedRows.map(row => Number(row.children[2].textContent));
    const factors = checkedRows.map(row => Number(row.children[3].textContent));

    // calculate the sum by reduce
    const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
    const totalFactor = factors.reduce((acc, curr) => acc + curr, 0);
    const avgFactor = totalFactor / factors.length;

    // output the result
    outputArea.value = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgFactor}`;

  });
} */











function solve() {
  // find all necessary elements
  // use querySelectorAll, because the buttons don't have ID
  let textares = document.querySelectorAll('textarea');
  let buttons = document.querySelectorAll('button');
  let tbody = document.querySelector('tbody');

  let inputArea = textares[0];
  let outputArea = textares[1];
  let generateBtn = buttons[0];
  let buyBtn = buttons[1];

  // logic for button GENERATE
  generateBtn.addEventListener('click', function() {
    // make text from JSON to array of objects
    let items = JSON.parse(inputArea.value);

    // go through each item 
    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      // create a new row for the table <tr>
      let row = document.createElement('tr');

      // cells with content
      let imgCell = document.createElement('td');
      let img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);
      row.appendChild(imgCell);

      // name
      let nameCell = document.createElement('td');
      let nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameCell.appendChild(nameP);
      row.appendChild(nameCell);

      // price
      let priceCell = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceCell.appendChild(priceP);
      row.appendChild(priceCell);

      // decoration factor
      let decCell = document.createElement('td');
      let decP = document.createElement('p');
      decP.textContent = item.decFactor;
      decCell.appendChild(decP);
      row.appendChild(decCell);

      // checkbox
      let checkCell = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkCell.appendChild(checkbox);
      row.appendChild(checkCell);

      // add the row to the table body
      tbody.appendChild(row);

    }
  });

  // logic for button BUY
  buyBtn.addEventListener('click', function() {
    // find all checked checkboxes 
    let allCheckedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));

    let boughtFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    // go through each checked checkbox 
    for (let i = 0; i < allCheckedBoxes.length; i++) {
      let checkbox = allCheckboxes[i];

      //we need to go up to the row <tr> to find data in neighboring cells
      let row = checkbox.parentNode.parentNode;

      // row.children[1] - this 2 cell (Name)
      let name = row.children[1].textContent;

      //row.children[2] - this 3 cell (Price)
      let price = Number(row.children[2].textContent);

      //row.children[3] - this 4 cell (Decoration factor)
      let decFactor = Number(row.children[3].textContent);

      boughtFurniture.push(name);
      totalPrice += price;
      totalDecFactor += decFactor;
    }
    // calculate average decoration factor
    let avgDecFactor = 0;
    if (boughtFurniture.length > 0) {
      avgDecFactor = totalDecFactor / boughtFurniture.length;

    }
    // form beutiful output
    let result = `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    result += `Total price: ${totalPrice.toFixed(2)}\n`;
    result += `Average decoration factor: ${avgDecFactor}`;

    // output the result
    outputArea.value = result;
  });
}