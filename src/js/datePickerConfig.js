export class DatePickerConfig {
  constructor(props) {
    // initialization - DOM
    this.config = {
      popup: props.popup || 'date-picker__popup',
      format: props.format || 'DD.MM.YYYY',
      weekDays: props.weekDays || ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      months: props.months || ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    };
    this.datePicker = props.datePicker;
    this.popup = this.datePicker?.getElementsByClassName(props.popup);

    // datePickerInput
    this.datePickerInput = document.createElement('div');
    this.datePickerFormat = document.createElement('div');
    this.datePickerImg = document.createElement('div');
    this.spanDay = document.createElement('span');
    this.spanMonth = document.createElement('span');
    this.spanYear = document.createElement('span');
    this.imgPicker = document.createElement('img');

    // datePickerPopup
    this.datePickerPopup = document.createElement('div');

    this.datePickerHeader = document.createElement('div');
    this.h6Header = document.createElement('h6');

    this.datePickerChangeDate = document.createElement('div');
    this.datePickerCurrentDate = document.createElement('div');
    this.currentWeekDay = document.createElement('span');
    this.dateMonth = document.createElement('span');
    this.currentDay = document.createElement('span');

    this.datePickerEditDate = document.createElement('div');
    this.imgEdit = document.createElement('img');

    // datePickerCalendar
    this.datePickerCalendar = document.createElement('div');

    // datePickerSwitcher 
    this.datePickerSwitcher = document.createElement('div');
    this.datePickerDate = document.createElement('div');

    // datePickerSwitch(Month, Years)
    this.datePickerDateYears = document.createElement('div');
    this.spanMonth = document.createElement('span');
    this.spanYear = document.createElement('span');

    this.datePickerMoreYears = document.createElement('div');
    this.imgShowMore = document.createElement('img');

    // datePickerSwitchMonth
    this.datePickerArrows = document.createElement('div');
    this.imgLeft = document.createElement('img');
    this.imgRight = document.createElement('img');

    // datePickerGrid + WeekDays
    this.datePickerMain = document.createElement('div');
    this.datePickerWeekdays = document.createElement('div');
    //todo ?
    this.weekDay = document.createElement('div');

    // datePickerMonthDays
    this.datePickerDays = document.createElement('div');
    // this.monthDays = document.createElement('div');

    // datePickerBtns
    this.datePickerBtns = document.createElement('div');
    this.btnOk = document.createElement('button');
    this.btnCancel = document.createElement('button');
  }


  handlerToggle() {
    this.popup[0]?.classList.toggle('popup__active');
  };


  render() {
    new DatePickerInput({}).render(this.datePicker);
    new DatePickerPopup({}).render(this.datePicker);
  };
};


class DatePickerInput extends DatePickerConfig {
  constructor(props) {
    super(props);
  }

  render(datePicker) {
    // render INPUT
    this.datePickerInput.setAttribute('class', 'date-picker__input');
    this.datePickerFormat.setAttribute('class', 'date-picker__format');
    this.datePickerImg.setAttribute('class', 'date-picker__img');
    this.imgPicker.setAttribute('src', '/calendar.svg');
    this.imgPicker.setAttribute('alt', 'calendar');

    this.datePickerFormat.append(this.spanDay, this.spanMonth, this.spanYear);
    this.datePickerImg.append(this.imgPicker);
    this.datePickerInput.append(this.datePickerFormat, this.datePickerImg);
    datePicker.append(this.datePickerInput);
  }
};


class DatePickerPopup extends DatePickerConfig {
  constructor(props) {
    super(props);
  }

  render(datePicker) {
    this.datePickerPopup.setAttribute('class', 'date-picker__popup');
    this.datePickerHeader.setAttribute('class', 'date-picker__header');
    this.datePickerCalendar.setAttribute('class', 'date-picker__calendar');

    this.h6Header.innerText = "SELECT DATE";

    this.datePickerHeader.append(this.h6Header);
    this.datePickerPopup.append(this.datePickerHeader, this.datePickerCalendar);
    datePicker.append(this.datePickerPopup);

    new DatePickerFormat({}).render(this.datePickerHeader);
    new Calendar({}).render(this.datePickerCalendar);
  }
};


class DatePickerFormat extends DatePickerPopup {
  constructor(props) {
    super(props);
  }


  render(datePickerHeader) {
    this.datePickerChangeDate.setAttribute('class', 'date-picker__date-change');
    this.datePickerCurrentDate.setAttribute('class', 'date-picker__current-date');
    this.currentWeekDay.setAttribute('date-weekDay', '-');
    this.dateMonth.setAttribute('date-month', '-');
    this.currentDay.setAttribute('date-day', '-');
    this.datePickerEditDate.setAttribute('class', 'date-picker__edit-date');
    this.imgEdit.setAttribute('src', '/edit.svg');
    this.imgEdit.setAttribute('alt', 'edit');

    this.currentWeekDay.innerText = 'Wen, ';
    this.dateMonth.innerText = 'Jul ';
    this.currentDay.innerText = '13';

    this.datePickerCurrentDate.append(this.currentWeekDay, this.dateMonth, this.currentDay);
    this.datePickerEditDate.append(this.imgEdit);
    this.datePickerChangeDate.append(this.datePickerCurrentDate, this.datePickerEditDate);

    datePickerHeader.append(this.datePickerChangeDate);

    // Events
    this.datePickerEditDate.addEventListener('click', () => console.log('edit'));
  }
};


class Calendar extends DatePickerConfig {
  constructor(props) {
    super(props);
    this.date = new Date();
  }


  render(datePickerCalendar, days) {
    // input values
    const currentYear = parseInt(this.spanYear.innerText);
    const currentMonth = parseInt(this.spanMonth.innerText);
    const currentDay = parseInt(this.spanDay.innerText);

    this.datePickerSwitcher.setAttribute('class', 'date-picker__switcher');
    this.datePickerMain.setAttribute('class', 'date-picker__main');
    this.datePickerBtns.setAttribute('class', 'date-picker__btns');
    this.datePickerWeekdays.setAttribute('class', 'date-picker__weekdays');
    this.config.weekDays.forEach(el => {
      this.datePickerWeekdays.innerHTML += `<div>${el}</div>`;
    });

    this.btnOk.innerText = 'OK';
    this.btnCancel.innerText = 'CANCEL';

    this.datePickerMain.append(this.datePickerWeekdays);
    this.datePickerBtns.append(this.btnCancel, this.btnOk);
    datePickerCalendar.append(this.datePickerSwitcher, this.datePickerMain, this.datePickerBtns);

    // Events
    this.btnOk.addEventListener('click', () => console.log('click ok'));
    this.btnCancel.addEventListener('click', () => console.log('click cancel'));

    new DatePickerSwitcher({}).render(this.datePickerSwitcher);
    new Year({}, this.datePickerMain).render(currentYear, currentMonth, currentDay);
  }
};


class DatePickerSwitcher extends DatePickerPopup {
  constructor(props) {
    super(props);
  }


  render(datePickerSwitcher) {
    this.datePickerDate.setAttribute('class', 'date-picker__date');
    this.datePickerDateYears.setAttribute('class', 'date-picker__date-years');
    this.datePickerMoreYears.setAttribute('class', 'date-picker__more-years');
    this.imgShowMore.setAttribute('src', '/more.svg');
    this.imgShowMore.setAttribute('alt', 'more..');
    this.datePickerArrows.setAttribute('class', 'date-picker__arrows');
    this.imgLeft.setAttribute('src', '/left.svg');
    this.imgLeft.setAttribute('alt', 'left arrow');
    this.imgRight.setAttribute('src', '/right.svg');
    this.imgRight.setAttribute('alt', 'right arrow');

    this.spanMonth.innerText = 'July';
    this.spanYear.innerText = '2022';

    this.datePickerDateYears.append(this.spanMonth, this.spanYear);
    this.datePickerMoreYears.append(this.imgShowMore);
    this.datePickerArrows.append(this.imgLeft, this.imgRight);
    this.datePickerDate.append(this.datePickerDateYears, this.datePickerMoreYears);
    datePickerSwitcher.append(this.datePickerDate, this.datePickerArrows);

    // Events
    this.imgLeft.addEventListener('click', () => console.log('click left'));
    this.imgRight.addEventListener('click', () => console.log('click right'));
    this.spanYear.addEventListener('click', () => console.log('show more'));
    this.imgShowMore.addEventListener('click', () => console.log('show more'));
  }
};


class Year extends DatePickerPopup {
  constructor(props, datePickerMain) {
    super(props);
    this.date = new Date();
    this.datePickerMain = datePickerMain;
    this.dateMonthDay = this.date.getDate();
    this.dateMonth = this.date.getMonth();
    this.dateYear = this.date.getFullYear();
    this.currentDate = new Date(this.dateYear, this.dateMonth, this.dateMonthDay);
  }


  handlerYearChanged(month) {
    console.log('change month' + month)
  }


  render(year, month, day) {
    if (year && month && day) {
      this.selectedDate = new Date(year, month, day);
    } else {
      this.selectedDate = new Date();
    }
    new Month({}, this.selectedDate, this.datePickerMain, this.handlerYearChanged).render();
  }

};


class Month extends Year {
  constructor(props, selectedDate, datePickerMain, handlerYearChanged) {
    super(props);
    this.selectedDate = selectedDate;
    this.datePickerMain = datePickerMain;
    this.handler = handlerYearChanged;
    this.currentMonth = selectedDate.getMonth();
    this.currentYear = selectedDate.getFullYear();
    this.firstMonthDay = new Date(this.currentYear, this.currentMonth, 1);
    this.daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.firstWeekDay = this.firstMonthDay.getDay() - 1;
  }


  handlerMonthChanged(day) {
    console.log('change day' + day)
  }


  render() {
    this.datePickerDays.setAttribute('class', 'date-picker__days');

    for (let i = 0; i < this.firstWeekDay; i++) {
      this.datePickerDays.append(new Day({}, null).render());
    }

    for (let i = 0; i < this.daysInMonth; i++) {
      this.datePickerDays.append(new Day({}, i + 1, this.handlerMonthChanged).render());
    }

    this.datePickerMain.append(this.datePickerDays);

    console.log(this.firstWeekDay)
  }
};


class Day extends Year {
  constructor(props, day, handlerMonthChanged) {
    super(props);
    this.day = day;
    this.handler = handlerMonthChanged;

    console.log(this.dateMonthDay)
  }


  handlerDayChanged() {
    console.log('click day')
  }


  render() {
    this.monthDays = document.createElement('div');
    this.monthDays.innerText = this.day;
    this.monthDays.innerText === '' ? this.monthDays.style.cursor = 'default' : null;
    this.dateMonthDay === this.day ? this.monthDays.classList.add('day__active') : null;

    // Events
    this.day ? this.monthDays.addEventListener('click', () => this.handler(this.day)) : null;

    return this.monthDays;
  }
};