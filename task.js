
// Створена змінна яка має в собі ф-ю sum
const variable = {
    current: 0,
    sum(n) {
      // this описує об'єкт в якому він був описан. 
      //  this.current пряма силка на змінну яка зберігається в ф-ї 
      this.current = this.current + n;
      return this.current;
    }
  };

  variable.sum(5);
  variable.sum(6);
  console.log(variable.sum(2));