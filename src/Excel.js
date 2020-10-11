import React from "react";
import { Link } from "react-router-dom";
import ReactToExcel from "react-html-table-to-excel";
// import PageBversion2 from "./PageBversion2";
function Excel() {
  const User = [
    {
      name: "การประปา",
      day: "12/01/13",
      number: "13",
    },
    {
      name: "การให้บริการโทรศัพท์",
      day: "11/11/13",
      number: "10",
    },
    {
      name: "การให้บริการไฟฟ้า",
      day: "15/11/13",
      number: "9",
    },
    {
      name: "การให้บริการคมนาคม-ขนส่ง",
      day: "15/11/13",
      number: "20",
    },
  ];
  return (
    <div className="TABLE">
      <table boder="1" id="gotoexcel" className="bordertable">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {User &&
            User.map((User, index) => (
              <tr>
                <th className="fontexcel">{User.name}</th>
                <th className="fontexcel">{User.day}</th>
                <th className="fontexcel">{User.number}</th>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactToExcel
        table="gotoexcel"
        filename="excelfile"
        sheet="sheet 1"
        className="setbuttonToEXCEL"
        buttonText="ดาวน์โหลดเอกสาร คลิ้ก "
      ></ReactToExcel>
    </div>
  );
}
export default Excel;
