import React, { useState, useRef, useEffect } from "react";
import "./DateTimePicker.css";

export interface DateTimePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  timePicker?: boolean;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  format?: string; // Not used in this basic version
}

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const pad = (n: number) => n.toString().padStart(2, "0");

export function DateTimePicker({
  value,
  onChange,
  timePicker = false,
  placeholder = "Select date",
  minDate,
  maxDate,
}: DateTimePickerProps) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(value);
  const [viewDate, setViewDate] = useState<Date>(value || new Date());
  const [hour, setHour] = useState(value ? value.getHours() : 0);
  const [minute, setMinute] = useState(value ? value.getMinutes() : 0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (value) {
      setSelected(value);
      setViewDate(value);
      setHour(value.getHours());
      setMinute(value.getMinutes());
    }
  }, [value]);

  const handleSelect = (date: Date) => {
    let newDate = new Date(date);
    if (timePicker) {
      newDate.setHours(hour, minute, 0, 0);
    }
    setSelected(newDate);
    setShow(false);
    onChange?.(newDate);
  };

  const handleTimeChange = (h: number, m: number) => {
    setHour(h);
    setMinute(m);
    if (selected) {
      const newDate = new Date(selected);
      newDate.setHours(h, m, 0, 0);
      setSelected(newDate);
      onChange?.(newDate);
    }
  };

  const renderCalendar = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const startDay = new Date(year, month, 1).getDay();
    const today = new Date();
    const weeks: (Date | null)[][] = [];
    let day = 1 - startDay;
    for (let w = 0; w < 6; w++) {
      const week: (Date | null)[] = [];
      for (let d = 0; d < 7; d++, day++) {
        if (day > 0 && day <= daysInMonth) {
          week.push(new Date(year, month, day));
        } else {
          week.push(null);
        }
      }
      weeks.push(week);
    }
    return (
      <table className="dtp-calendar">
        <thead>
          <tr>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((date, j) => {
                const isToday =
                  date &&
                  date.getDate() === today.getDate() &&
                  date.getMonth() === today.getMonth() &&
                  date.getFullYear() === today.getFullYear();
                const isSelected =
                  date &&
                  selected &&
                  date.getDate() === selected.getDate() &&
                  date.getMonth() === selected.getMonth() &&
                  date.getFullYear() === selected.getFullYear();
                const isDisabled =
                  (minDate && date && date < minDate) ||
                  (maxDate && date && date > maxDate);
                return (
                  <td
                    key={j}
                    className={[
                      "dtp-cell",
                      isToday ? "dtp-today" : "",
                      isSelected ? "dtp-selected" : "",
                      isDisabled ? "dtp-disabled" : "",
                    ].join(" ")}
                    onClick={() => date && !isDisabled && handleSelect(date)}>
                    {date ? date.getDate() : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderTimePicker = () => (
    <div className="dtp-time-picker">
      <select
        value={hour}
        onChange={(e) => handleTimeChange(Number(e.target.value), minute)}>
        {Array.from({ length: 24 }, (_, i) => (
          <option key={i} value={i}>
            {pad(i)}
          </option>
        ))}
      </select>
      :
      <select
        value={minute}
        onChange={(e) => handleTimeChange(hour, Number(e.target.value))}>
        {Array.from({ length: 60 }, (_, i) => (
          <option key={i} value={i}>
            {pad(i)}
          </option>
        ))}
      </select>
    </div>
  );

  const displayValue = selected
    ? `${selected.getFullYear()}-${pad(selected.getMonth() + 1)}-${pad(
        selected.getDate()
      )}${
        timePicker
          ? ` ${pad(selected.getHours())}:${pad(selected.getMinutes())}`
          : ""
      }`
    : "";

  return (
    <div className="dtp-root" ref={ref}>
      <input
        className="dtp-input"
        value={displayValue}
        onFocus={() => setShow(true)}
        onClick={() => setShow(true)}
        onChange={() => {}}
        placeholder={placeholder}
        readOnly
      />
      {show && (
        <div className="dtp-popup">
          <div className="dtp-header">
            <button
              type="button"
              className="dtp-nav"
              onClick={() =>
                setViewDate(
                  new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1)
                )
              }>
              &#8592;
            </button>
            <span className="dtp-month-label">
              {viewDate.toLocaleString("default", { month: "long" })}{" "}
              {viewDate.getFullYear()}
            </span>
            <button
              type="button"
              className="dtp-nav"
              onClick={() =>
                setViewDate(
                  new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1)
                )
              }>
              &#8594;
            </button>
          </div>
          {renderCalendar()}
          {timePicker && renderTimePicker()}
        </div>
      )}
    </div>
  );
}
