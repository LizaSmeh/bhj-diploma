/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if(!element) {
      throw new Error('Элемент не существует');
    }
    this.element = element;
    this.registerEvents()

  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
    
  registerEvents() {
        const btns = Array.from(this.element.querySelectorAll('button'));
    btns.forEach(el => {
      if(el.classList.contains('create-income-button')){
        el.addEventListener('click', event => {
          event.preventDefault();
          App.getModal('newIncome').open();
        });
      }else {
        el.addEventListener('click', event => {
          event.preventDefault();
          App.getModal('newExpense').open();
        });
      }
    })

  }
}
