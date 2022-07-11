export class DatePickerConfig {
  constructor(props) {
    // initialization - DOM
    this.config = {
      options: props,
      format: props.format || 'DD.MM.YYYY',
      weekDays: props.weekDays || ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      months: props.months || ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    };
    this.popup = document.querySelector(props.popup);
    this.datePicker = props.datePicker;

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
    this.currentMonth = document.createElement('span');
    this.currentDay = document.createElement('span');

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
    this.weekDays = document.createElement('div');

    // datePickerMonthDays
    this.datePickerDays = document.createElement('div');
    this.monthDays = document.createElement('div');

    // datePickerBtns
    this.datePickerBtns = document.createElement('div');
    this.btnOk = document.createElement('button');
    this.btnCancel = document.createElement('button');
  }

  handlerToggle() {
    this.popup?.classList.toggle('popup__active');
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
}


class DatePickerPopup extends DatePickerConfig {
  constructor(props) {
    super(props);
  }


  render(datePicker) {
    this.datePickerPopup.setAttribute('class', 'date-picker__popup');
    this.datePickerHeader.setAttribute('class', 'date-picker__header');
    this.h6Header.innerText = "SELECT DATE";
    this.datePickerChangeDate.setAttribute('class', 'date-picker__date-change');
    this.datePickerCalendar.setAttribute('class', 'date-picker__calendar');


    this.datePickerHeader.append(this.h6Header, this.datePickerChangeDate);

    // datePickerPopup
    this.datePickerPopup.append(this.datePickerHeader, this.datePickerCalendar);
    datePicker.append(this.datePickerPopup);
  }
};

