import { DatePickerConfig } from "./datePickerConfig";


window.addEventListener('load', () => {
  const datePickers = document.querySelectorAll('.date-picker').forEach(elem => {
    let input = elem;
    const date = new Date();

    elem.addEventListener('click', (e) => { e.target.className === 'date-picker__input' || e.target.innerText === 'CANCEL' ? input.handlerToggle() : null });
    input = new DatePickerConfig({
      datePicker: elem,
      popup: 'date-picker__popup',
      format: 'DD.YYYY.MM',
      weekDays: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    });
    input.render();
    //TODO ????
    // input.handlerChanged(date.getDay() - 1);
  });
});



//? отображать дату по дефоту при открытии попапа или же передавать при инициализации главного класса
//? скрывать календраь при нажатии мимо него
//? при нажатии на ДЕНЬ, МЕСЯЦ, ГОД - будут передваться параметры с (ГОД, МЕСЯЦ, ДЕНЬ)

// создаем класс DatePickerConfig+
// находим все инпуты+
// добавляем события на инпуты+

// отображаем пустые инпуты+
// принажатии рендерим попап+
// вешаем событие+
// рендерим в попапе классы Year, Month, WeekDay, MonthDay, также рендерим Switchers

// добавляем события на Year, Month, MonthDay 
// при смене года - менять дату и чтобы инпут знал
// при смене месяца - менять дату и чтобы инпут знал
// при нажатии на день - записывать выбранную дату в инпут
// при измененении даты в инпуте - менять данные календаря (Year, Month, Day)


// сделать дефолтные значения для класса, чтобы не прописывать каждый раз+
// сделать смену формата (мб drag&drop или писать mm.dd.yyyy, yyyy.mm.dd - задать формат через точку и потом искать совпадения)





class Year {
  constructor(currentYear) {
    this.currentYear = currentYear;
  }

  handlerYearChanged(currentYear) {
    return currentYear;
  }

  render() {
    const year = document.createElement('div')
    year.innerText = year
  }
}


class Month {
  constructor(monthDays) {
    this.monthDays = monthDays;
  }


  handlerMonthChanged(currentMonth) {
    return currentMonth;
  }

  render() {
    for (let i = 0; i < this.monthDays; i++) {
      return new Day(i + 1, this.handlerMonthChanged).render();
    }
  }
}


class Day {
  constructor(day, hand) {
    this.day = day;
    this.hand = hand;
  }

  handlerDayChanged(currentDay) {
    return currentDay;
  }

  render() {
    const day = document.createElement('div')
    day.onclick(() => this.hand(this.day))
    return day.innerText = this.day
  }
}