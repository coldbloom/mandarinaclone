import React from 'react';
import {createYear} from "../../utils/helpers/createYear";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";



function createDateArray(year) {
    const customYear = []

    for (let i = 0; i < year.length; i++) {
        //console.log(year[i])
        let month = year[i]
        for (let i = 0; i < month.length; i++) {
            customYear.push({
                year: month[i].year,
                month: month[i].monthNumber,
                day: month[i].dayNumber,
            })
        }
    }
    return customYear;
}

function removeMatches(arr1, arr2) {
    const result = []

    for (let i = 0; i < arr1.length; i++) {
        let flag = false;
        for (let j = 0; j < arr2.length; j++) {
            if (JSON.stringify(arr1[i]) === JSON.stringify(arr2[j])) {
                flag = false
                break
            }
            else {
                flag = true
            }
        }
        if (flag) {
            result.push(arr1[i])
        }
    }
    return result
}

// временное решение, актуальные даты мы будем получать с запроса
const arrayOfActualDate = [
    {year: 2023, month: 2, day: 1},
    {year: 2023, month: 2, day: 2},
    {year: 2023, month: 2, day: 3},
    {year: 2023, month: 2, day: 4},
    {year: 2023, month: 2, day: 5},
    {year: 2023, month: 2, day: 6},
    {year: 2023, month: 2, day: 7},
    {year: 2023, month: 2, day: 8},
    {year: 2023, month: 2, day: 9},
    {year: 2023, month: 2, day: 10},
    {year: 2023, month: 2, day: 11},
    {year: 2023, month: 2, day: 12},
    {year: 2023, month: 2, day: 13},
    {year: 2023, month: 2, day: 14},
    {year: 2023, month: 2, day: 15},
    {year: 2023, month: 2, day: 16},
    {year: 2023, month: 2, day: 17},
    {year: 2023, month: 2, day: 18},
    {year: 2023, month: 2, day: 19},
    {year: 2023, month: 2, day: 20},
]

const CustomCalendar = () => {
    //создаем массив всех дат текущего года
    const year = createDateArray(createYear().createYearMonthes())

    const disabledDays = removeMatches(year, arrayOfActualDate)

    const defaultValue = {
        year: 2023,
        month: 2,
        day: 9,
    };

    const minimumDate = {
        year: 2023,
        month: 1,
        day: 10
    };

    const maximumDate = {
        year: 2023,
        month: 12,
        day: 31
    }

    const myCustomLocale = {
        // months list by order
        months: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
        ],

        // week days by order
        weekDays: [
            {
                name: 'Понедельник',
                short: 'Пн',
            },
            {
                name: 'Вторник',
                short: 'Вт',
            },
            {
                name: 'Среда',
                short: 'Ср',
            },
            {
                name: 'Четверг',
                short: 'Чт',
            },
            {
                name: 'Пятница',
                short: 'Пт',
            },
            {
                name: 'Суббота',
                short: 'Сб',
                isWeekend: true,
            },
            {
                name: 'Воскресенье', // used for accessibility
                short: 'Вс', // displayed at the top of days' rows
                isWeekend: true, // is it a formal weekend or not?
            },
        ],

        // just play around with this number between 0 and 6
        weekStartingIndex: 0,

        // return a { year: number, month: number, day: number } object
        getToday(gregorainTodayObject) {
            return gregorainTodayObject;
        },

        // return a native JavaScript date here
        toNativeDate(date) {
            return new Date(date.year, date.month - 1, date.day);
        },

        // return a number for date's month length
        getMonthLength(date) {
            return new Date(date.year, date.month, 0).getDate();
        },

        // return a transformed digit to your locale
        transformDigit(digit) {
            return digit;
        },

        // texts in the date picker
        nextMonth: 'Next Month',
        previousMonth: 'Previous Month',
        openMonthSelector: 'Open Month Selector',
        openYearSelector: 'Open Year Selector',
        closeMonthSelector: 'Close Month Selector',
        closeYearSelector: 'Close Year Selector',
        defaultPlaceholder: 'Select...',

        // for input range value
        from: 'from',
        to: 'to',


        // used for input value when multi dates are selected
        digitSeparator: ',',

        // if your provide -2 for example, year will be 2 digited
        yearLetterSkip: 0,

        // is your language rtl or ltr?
        isRtl: false,
    }

    const [selectedDay, setSelectedDay] = React.useState(defaultValue);

    const onChangeChange = (e) => {
        console.log(e)
        setSelectedDay(e)
    }
    const handleDisabledSelect = disabledDay => {
        console.log('Tried selecting a disabled day', disabledDay);
    };

    return (
        <div>
            <Calendar
                value={selectedDay}
                onChange={(e) => onChangeChange(e)}
                disabledDays={disabledDays} // here we pass them
                onDisabledDayError={handleDisabledSelect} // handle error
                shouldHighlightWeekends
                locale={myCustomLocale} // custom locale object
                minimumDate={minimumDate}
                maximumDate={maximumDate}
                colorPrimary="#3982CB" // added this
            />
        </div>
    );
};

export default CustomCalendar;