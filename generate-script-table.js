function generateScriptTable(lower, upper) {
  // Create the table element
  const table = document.createElement('table');

  // Create the table header row
  const headerRow = document.createElement('tr');

  // Add an empty cell in the header row
  const emptyHeaderCell = document.createElement('th');
  emptyHeaderCell.textContent = '\u00A0'; // Non-breaking space
  headerRow.appendChild(emptyHeaderCell);

  // Add the hexadecimal digit cells in the header row
  for (let i = 0; i <= 15; i++) {
    const headerCell = document.createElement('th');
    headerCell.textContent = i.toString(16).toUpperCase();
    headerRow.appendChild(headerCell);
  }

  // Append the header row to the table
  table.appendChild(headerRow);

  // Generate the table rows for the Unicode characters
  for (let i = parseInt(lower, 16); i <= parseInt(upper, 16); i++) {
    let char = String.fromCodePoint(i);

    // Create a table row
    const row = document.createElement('tr');

    // Add the Unicode range cell (first cell)
    const rangeCell = document.createElement('th');
    rangeCell.textContent = `U+${i.toString(16).toUpperCase()}`;
    row.appendChild(rangeCell);

    // Add the character cells for each hexadecimal digit
    for (let j = 0; j <= 15; j++) {
      const charCell = document.createElement('td');
      charCell.classList.add('unicode-char');
      charCell.title = `U+${i.toString(16).toUpperCase()}: ${char}`;
      charCell.textContent = char;
      row.appendChild(charCell);

      i++; // Increment the Unicode codepoint
      char = String.fromCodePoint(i); // Get the next character
    }

    // Append the row to the table
    table.appendChild(row);
  }

  // Return the generated table
  return table;
}

export {generateScriptTable}