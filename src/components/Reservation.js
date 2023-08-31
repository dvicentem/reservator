import React, { useEffect, Fragment } from "react";
import M from "materialize-css";
import { auth } from "../firebase/firebase";

const Reservation = () => {
  useEffect(() => {
    var elemsDatepicker = document.querySelectorAll(".datepicker");
    var optionsDatepicker = {
      autoClose: true,
      showClearBtn: true,
      format: "yyyy-mm-dd",
      i18n: {
        cancel: "Cancelar",
        clear: "Borrar",
        done: "Ok",
        months: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ],
        monthsShort: [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic",
        ],
        weekdays: [
          "Domingo",
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
        ],
        weekdaysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"],
      },
      firstDay: 1,
    };
    var instanceDatepicker = M.Datepicker.init(
      elemsDatepicker,
      optionsDatepicker
    );

    var elemsTimepicker = document.querySelectorAll(".timepicker");
    var optionsTimepicker = {
      twelveHour: false,
      autoClose: true,
    };
    var instancesTimepicker = M.Timepicker.init(
      elemsTimepicker,
      optionsTimepicker
    );

    var elems4 = document.querySelectorAll("select");
    var instances4 = M.FormSelect.init(elems4);
  }, []);

  return (
    <Fragment>
      <div className="container">
        <form autoComplete="off">
          <div className="row">
            <div className="input-field col s4">
              <input id="startdate" type="text" className="datepicker" />
              <label htmlFor="startdate">Fecha</label>
            </div>
            <div className="input-field col s4">
              <input id="start_time" type="text" className="timepicker" />
              <label htmlFor="start_time">Hora de inicio</label>
            </div>
            <div className="input-field col s4">
              <input
                id="duration"
                type="time"
                className="validate"
                min="00:30"
                max="12:00"
                defaultValue="01:00"
              />
              <label htmlFor="duration">Duración (h:mm)</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s3">
              <select id="select-room">
                <option value="" disabled selected>
                  Elige sala
                </option>
                <option value="SP">Pecera</option>
                <option value="S1">Sala 1</option>
                <option value="S2">Sala 2</option>
                <option value="S3">Sala 3</option>
                <option value="S4">Sala 4</option>
              </select>
              <label>Sala</label>
            </div>
            <div className="input-field col s3">
              <select id="select-game-type">
                <option value="" disabled selected>
                  Tipo de juego
                </option>
                <option value="JdR">Rol</option>
                <option value="JdT">Tablero</option>
                <option value="JdM">Minis</option>
              </select>
              <label>Tipo</label>
            </div>
            <div className="input-field col s6">
              <input id="game-name" type="text" />
              <label htmlFor="game-name">Nombre del juego</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input id="owner" type="text" />
              <label htmlFor="owner">Organizador</label>
            </div>
            <div className="input-field col s4">
              <input
                id="members"
                type="number"
                className="validate"
                min="0"
                max="20"
                defaultValue="2"
                step="1"
              />
              <label htmlFor="members" className="active">
                Goblins
              </label>
            </div>
            <div className="input-field col s4">
              <input
                id="guests"
                type="number"
                className="validate"
                min="0"
                max="20"
                defaultValue="0"
                step="1"
              />
              <label htmlFor="guests" className="active">
                Invitados
              </label>
            </div>
          </div>{" "}
        </form>
      </div>
    </Fragment>
  );
};

export default Reservation;