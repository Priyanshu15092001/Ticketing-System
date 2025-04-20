// TimePicker.js
import React, { useState } from "react";
import styles from "./TimePicker.module.css";

const TimePicker = () => {
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i < 10 ? "0" + i : i.toString()
  );
  const ampm = ["AM", "PM"];

  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedAmPm, setSelectedAmPm] = useState("AM");

  const renderScrollColumn = (items, selected, setSelected) => (
    <div className={styles.scrollColumn}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.scrollItem} ${
            selected === item ? styles.active : ""
          }`}
          onClick={() => setSelected(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.timePicker}>
      {renderScrollColumn(hours, selectedHour, setSelectedHour)}:
      {renderScrollColumn(minutes, selectedMinute, setSelectedMinute)}:
      {renderScrollColumn(ampm, selectedAmPm, setSelectedAmPm)}
    </div>
  );
};

export default TimePicker;
