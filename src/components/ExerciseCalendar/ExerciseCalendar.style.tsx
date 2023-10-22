import { styled } from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleCalendar = styled(Calendar)`
  max-width: 100%;
  border: none;
  margin-bottom: 15px;
  padding: 20px;

  .react-calendar__navigation {
    display: flex;
    height: 32px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 32px;
    font-size: ${FONT.M};
    font-weight: ${FONT.Bold};
    background-color: none;
  }
  .react-calendar__navigation button:disabled {
    background-color: #e8e8e8;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e8e8e8;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${FONT.XS};
  }
  .react-calendar__month-view__days__day--weekend {
    color: ${COLOR.Gray4};
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1.2em 0.5em;
    color: ${COLOR.Gray4};
  }

  .react-calendar__tile--hasActive {
    color: #ffffff;
    border-radius: 5px;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
  }

  .react-calendar__tile--active {
    color: #ffffff;
    border-radius: 7px;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${COLOR.Primary};
    border-radius: 5px;
  }

  .react-calendar__tile:disabled {
  }
  .react-calendar__tile {
    position: relative;
  }
  .dot {
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    height: 6px;
    width: 6px;
    background-color: ${COLOR.Primary};
    border-radius: 50%;
    display: flex;
    margin-left: 1px;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${COLOR.Primary};
    border-radius: 5px;
  }
  .react-calendar__tile--now {
    background: ${COLOR.Sub1};
    border-radius: 5px;
  }

  .react-calendar__tile--active {
    background: ${COLOR.Primary};
    color: white;
  }
`;
