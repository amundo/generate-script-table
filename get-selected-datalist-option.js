
export function getSelectedOption(datalist, value) {
  console.log(datalist)
  const options = datalist.querySelectorAll('option');

  for (let i = 0; i < options.length; i++) {
    if (options[i].value === value) {
      return options[i];
    }
  }

  return null;
}
