/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    const accSelect = this.element.querySelector('.accounts-select');
    accSelect.innerHTML = '';
    const data = User.current();
      Account.list(data, (err, response) => {
        if(response && response.success){
         // accSelect.innerHTML = response.data.reduce(...);
          response.data.forEach(el => {
            accSelect.insertAdjacentHTML(`beforeEnd`, `<option value="${el.id}">${el.name}</option>`);
          });
        }

      });
    

  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err, response) => {
      if(response && response.success) {
        App.update();
        this.element.reset();        
      }
    })

  }
}