class UIComponentTemplate {
    renderComponent() {
      this.init();
      this.createStructure();
      this.applyStyles();
      this.finalize();
    }
  
    init() {
      throw new Error("Method 'init()' must be implemented.");
    }
  
    createStructure() {
      throw new Error("Method 'createStructure()' must be implemented.");
    }
  
    applyStyles() {
      throw new Error("Method 'applyStyles()' must be implemented.");
    }
  
    finalize() {
      // Необов'язковий крок — можна перевизначити
      console.log("Компонент успішно згенеровано.");
    }
  }
  
  // Конкретна реалізація: Кнопка
  class ButtonComponent extends UIComponentTemplate {
    init() {
      this.button = document.createElement('button');
      this.button.textContent = 'Натисни мене';
    }
  
    createStructure() {
      document.body.appendChild(this.button);
    }
  
    applyStyles() {
      this.button.style.padding = '10px 20px';
      this.button.style.backgroundColor = '#4CAF50';
      this.button.style.color = '#fff';
      this.button.style.border = 'none';
      this.button.style.borderRadius = '6px';
    }
  
    finalize() {
      this.button.addEventListener('click', () => alert('Кнопку натиснуто!'));
      console.log("Кнопка створена та готова до використання.");
    }
  }
  
  // Інша реалізація: Поле введення
  class InputComponent extends UIComponentTemplate {
    init() {
      this.input = document.createElement('input');
      this.input.placeholder = 'Введіть текст...';
    }
  
    createStructure() {
      document.body.appendChild(this.input);
    }
  
    applyStyles() {
      this.input.style.padding = '8px';
      this.input.style.border = '1px solid #ccc';
      this.input.style.borderRadius = '4px';
    }
  }
  
  // Використання:
  const button = new ButtonComponent();
  button.renderComponent();
  
  const input = new InputComponent();
  input.renderComponent();