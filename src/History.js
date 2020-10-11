import React, { useState, useEffect } from "react";
import "./History.css";
import { Form, Col, InputGroup, Button } from "react-bootstrap";
import UserScreen from "./UserScreen";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import swal from "sweetalert";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tune } from "@material-ui/icons";
// import { Link } from "@material-ui/core";

function History(props) {
  const [state, setstate] = useState(true);
  const [val, setval] = useState("");
  const [modal, setmodal] = useState("modal-1");
  const [sum, setsum] = useState(0);
  // const [modalSwl, setmodalSwl] = useState(false);

  const handleChange = (e) => {
    setval(e.target.value);
  };

  // useEffect(() => {
  //   // alert(555)
  //   if(modalSwl == true) {
  //       alert(555)
  //     if( val.length !==0) {
  //       setmodal("modal");
  //           swal({
  //      title: "บันทึกข้อมูลเสร็จสิ้น",
  //      text: " ",
  //      text: " ",
  //      className: "font",
  //      icon: "success",
  //      timer: 4000,
  //      buttons: false,
  //    });
  //      setval("");
  //     }
  //   }
  // }, [modalSwl])

  const handleCloseS = () => {
    // setstate(true);
// setmodalSwl(true);
   if( val.length !==0) {
     setmodal("modal");
         swal({
    title: "บันทึกข้อมูลเสร็จสิ้น",
    text: " ",
    text: " ",
    className: "font",
    icon: "success",
    timer: 2000,
    buttons: false,
  });
    setval("");
   }

//    if(modal=="modal"){
//     swal({
//     title: "บันทึกข้อมูลเสร็จสิ้น",
//     text: " ",
//     text: " ",
//     className: "font",
//     icon: "success",
//     timer: 900,
//     buttons: false,
//   })
// }

  };

  // function mySwal() {
  //   if(modal=="modal"){
  //     swal({
  //     title: "บันทึกข้อมูลเสร็จสิ้น",
  //     text: " ",
  //     text: " ",
  //     className: "font",
  //     icon: "success",
  //     timer: 900,
  //     buttons: false,
  //   });
  //   }
    
  // }

  const handleCloseY = () => {
    swal({
      title: "คุณแน่ใจหรือไม่?",
      text: "คุณต้องการลบข้อมูลหรือไม่",
      className: "font",
      icon: "warning",
      buttons: {
        cancel: "ยกเลิก",
        confirm: {
          text: "ตกลง",
        },
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: "ลบข้อมูลเสร็จสิ้น",
          text: " ",
          text: " ",
          className: "font",
          icon: "success",
          timer: 2200,
          buttons: false,
        });
      }
    });
  };

  function SwitchCase(props) {
    switch (props.value) {
      case "01":
        return "ม.ค.";
      case "02":
        return "ก.พ.";
      case "03":
        return "มี.ค.";
      case "04":
        return "เม.ย.";
      case "05":
        return "พ.ค.";
      case "06":
        return "มิ.ย.";
      case "07":
        return "ก.ค.";
      case "08":
        return "ส.ค.";
      case "09":
        return "ก.ย.";
      case "10":
        return "ต.ค.";
      case "11":
        return "พ.ย.";

      default:
        return "ธ.ค";
    }
  }

  const His = [
    {
      id: "A3",
      inputID: "1",
      keyID: "1",
      value: "1",
      jodDate: "2020-01-7",
      updatDate: "2020-01-25",
      updatBy: "1",
    },
    {
      id: "A4",
      inputID: "2",
      keyID: "1",
      value:
        "ผลการประเมินความผลการประเมินความผลการประเมินความผลการประเมินความผลการประเมินความ",
      jodDate: "2020-03-24",
      updatDate: "2020-03-25",
      updatBy: "2",
    },
    {
      id: "A4",
      inputID: "3",
      keyID: "2",
      value: "ผลการประเมินความ",
      jodDate: "2020-04-21",
      updatDate: "2020-04-25",
      updatBy: "3",
    },
    {
      id: "A5",
      inputID: "4",
      keyID: "1",
      value: "1",
      jodDate: "2020-05-10",
      updatDate: "2020-05-25",
      updatBy: "4",
    },
    {
      id: "A6",
      inputID: "5",
      keyID: "1",
      value: "5",
      jodDate: "2020-06-2",
      updatDate: "2020-06-25",
      updatBy: "5",
    },
    {
      id: "A4",
      inputID: "2",
      keyID: "1",
      value: "2",
      jodDate: "2020-03-24",
      updatDate: "2020-03-25",
      updatBy: "2",
    },
    {
      id: "A4",
      inputID: "3",
      keyID: "2",
      value: "ผลการประเมินความ",
      jodDate: "2020-04-21",
      updatDate: "2020-04-25",
      updatBy: "3",
    },
    {
      id: "A5",
      inputID: "4",
      keyID: "1",
      value: "1",
      jodDate: "2020-05-10",
      updatDate: "2020-05-25",
      updatBy: "4",
    },
    {
      id: "A6",
      inputID: "5",
      keyID: "1",
      value: "5",
      jodDate: "2020-06-2",
      updatDate: "2020-06-25",
      updatBy: "5",
    },
  ];


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
   
    // setTimeout(()=> {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        // alert("if")
        event.preventDefault();
        // setTimeout(() => {
          event.stopPropagation();
        // }, 5000)
       
      }
     
  
    //  }, 2000)
    
    setValidated(true);
    

   
  };

  return (
    <div className="background">
      <UserScreen />
      <div class="container-fluid">
        <div class="row my-row">
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col2-2">
            <Link to="/process" style={{ textDecoration: "none" }}>
              <div className="B-back">
                <div className="iconBack">
                  <ion-icon
                    style={{ width: 20, height: 20 }}
                    name="arrow-back-circle-outline"
                  ></ion-icon>
                </div>
                <div className="back">ย้อนกลับ</div>
              </div>

              <div className="B-back-2">
                <div className="iconBack">
                  <ion-icon
                    style={{ width: 35, height: 35 }}
                    name="arrow-back-circle-outline"
                  ></ion-icon>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-8   my-col3 ">
            <div className="head-barH2">
              <Link to="/process" style={{ textDecoration: "none" }}>
                <div className="B-back-H">
                  <div className="iconBack">
                    <ion-icon
                      style={{ width: 35, height: 35 }}
                      name="arrow-back-circle-outline"
                    ></ion-icon>
                  </div>
                  <div className="back">ย้อนกลับ</div>
                </div>
              </Link>

              <div className="head-barH0">
                <div className="head-barH">
                  <div className="barH"> </div>
                  <div className="fontH1">ประวัติการกรอกข้อมูล</div>
                </div>
                <div className="head-barH1">
                  <div className="Eyear">ปีการศึกษา</div>
                  <div className="year">2555</div>
                </div>
              </div>

              <div className="B-back-H3">
                <div className="iconBack">
                  <ion-icon
                    style={{ width: 0, height: 0 }}
                    name="arrow-back-circle-outline"
                  ></ion-icon>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2 my-col2-1"></div>
        </div>

        <div class="row my-row ">
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col2-1"></div>

          <div class="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-8   my-col2">
            <label className="HP-name">ชื่อกระบวนการ</label>
            <div className="P-name">
              การให้บริการไฟฟ้าการให้บริการไฟฟ้าการให้บริการไฟฟ้าการให้บริการไฟฟ้า
            </div>
          </div>

          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col2-1"></div>
        </div>

        <div class="row my-row ">
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col2-1"></div>
          <div class="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-8 my-col2">
            <label className="HP-nameP">ชื่อตัวชี้วัด</label>
            <div className="P-name">
              จำนวนครั้งที่ไฟฟ้าขัดข้อง / ดับทั้งวิทยาเขต รวมทั้งปี (ครั้ง)
            </div>
          </div>

          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col2-1"></div>
        </div>

        <div class="row my-row ">
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2 my-col2-1"></div>
          <div class="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-8  my-col2">
            <div className="Line"> </div>
          </div>
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col2-1"></div>
        </div>

        <div class="row  my-row ">
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col2-1"></div>
          <div className="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-8 my-col col-Table">
            <div></div>
            <Table className="table table-hover">
              <Thead>
                <Tr>
                  <Th className="No">อันดับที่</Th>
                  <Th className="Data">ข้อมูลที่กรอก</Th>
                  <Th className="AddData">วันที่กรอก</Th>
                  <Th className="EditData">วันที่แก้ไข</Th>
                  <Th className="Edit">
                    <div className="M-icon">
                      <div className="iconBack">
                        <ion-icon
                          style={{ width: 20, height: 20 }}
                          name="create-outline"
                        ></ion-icon>
                      </div>
                      <div className="T-Edit">แก้ไข</div>
                    </div>
                  </Th>
                  <Th className="Delete">
                    <div className="M-icon">
                      <div className="iconBack">
                        <ion-icon
                          style={{ width: 20, height: 20 }}
                          name="trash-outline"
                        ></ion-icon>
                      </div>
                      <div className="T-Edit">ลบ</div>
                    </div>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {His &&
                  His.map((His, index) => (
                    <Tr>
                      <Th>{index + 1}</Th>
                      {/* <Td className="No">{His.inputID}</Td> */}
                      <Td className="DataV">{His.value}</Td>
                      <Td className="AddData">
                        {`${His.jodDate.split("-")[2]}`}-
                        <SwitchCase value={His.jodDate.split("-")[1]} />-
                        {`${His.jodDate.split("-")[0] * 1 + 543}`}
                      </Td>

                      <Td className="EditData">
                        {`${His.updatDate.split("-")[2]}`}-
                        <SwitchCase value={His.updatDate.split("-")[1]} />-
                        {`${His.updatDate.split("-")[0] * 1 + 543}`}
                      </Td>
                      <Td className="Edit">
                        {His.keyID == 1 && (
                          <div
                            type="button"
                            className=" button button1 "
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            แก้ไข
                          </div>
                        )}
                        {His.keyID == 2 && (
                          <div
                            type="button"
                            className=" button button1 "
                            data-toggle="modal"
                            data-target="#exampleModalCenterS"
                          >
                            แก้ไข
                          </div>
                        )}
                      </Td>
                      <Td className="Delete">
                        <div className="button cancle" onClick={handleCloseY}>
                          ลบ
                        </div>
                      </Td>
                    </Tr>
                    
                  ))}
              </Tbody>
            </Table>
            <p className="Sum">ทั้งหมด {His.length} คำตอบ</p>
          </div>
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col2-1"></div>
        </div>

        <Form noValidate validated={validated} onSubmit={handleSubmit} >
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              class="modal-dialog modal-dialog-centered modal-md"
              role="document"
            >
              <div class="M-content">
                <div class="modal-h">
                  <div className="B-Question">คำถาม</div>
                  <div class="Mo-title" id="exampleModalLongTitle">
                    คะแนนเฉลี่ยผลการประเมินความพึงพอใจของบุคลากรหรือหน่วยงานที่มีต่อการให้บริการห้องประชุม/ห้องปฏิบัติการคอมพิวเตอร์
                  </div>
                </div>

                <div class="modal-body">
                  <label className="font-modal">*คำตอบ</label>
                  
                  <NumberFormat
                    allowNegative={false}
                    isNumericString={false}
                    className="form-control form-control-md"
                    required
                    onChange={handleChange} 
                  />

                  <Form.Control.Feedback type="invalid" className="font-T">
                    *หมายเหตุ : กรุณากรอกข้อมูล
                  </Form.Control.Feedback>
                  <div className="font-modal1">ข้อมูลเพิ่มเติม</div>
                  <textarea
                    className="form-control font-modal Textarea"
                    id="exampleFormControlTextarea1"
                    placeholder="อธิบายเพิ่มเติม"
                    rows="5"
                  ></textarea>
                  {/* <label className="font-T">
                    * หมายเหตุ : กรุณาตรวจสอบข้อมูลก่อนบันทึก
                  </label> */}
                </div>
                <div class="Mo-footer">
                  <button
                    // type="button"
                    className="buttonSave font "
                    onClick={handleCloseS}
                    // event onClick={mySwal()}
                    data-dismiss= {modal}
                  >
                    บันทึก
                  </button>
                  <button
                    type="button"
                    className="buttonCancle font"
                    data-dismiss="modal"
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>

        <Form noValidate validated={validated} onSubmit={handleSubmit} >
          <div
            class="modal fade"
            id="exampleModalCenterS"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            // show="false"
          >
            <div
              class="modal-dialog modal-dialog-centered modal-md"
              role="document"
            >
              <div class="M-content">
                <div class="modal-h">
                  <div className="B-Question">คำถาม</div>
                  <div class="Mo-title" id="exampleModalLongTitle">
                    คะแนนเฉลี่ยผลการประเมินความพึงพอใจของบุคลากรหรือหน่วยงานที่มีต่อการให้บริการห้องประชุม/ห้องปฏิบัติการคอมพิวเตอร์ String
                  </div>
                </div>

                <div class="modal-body">
                  <label className="font-modal">*คำตอบ</label>
                  
                  <input
                    
                    className="form-control form-control-md"
                    required
                    onChange={handleChange} 
                  />

                  <Form.Control.Feedback type="invalid" className="font-T">
                    *หมายเหตุ : กรุณากรอกข้อมูล
                  </Form.Control.Feedback>
                  <div className="font-modal1">ข้อมูลเพิ่มเติม</div>
                  <textarea
                    className="form-control font-modal Textarea"
                    id="exampleFormControlTextarea1"
                    placeholder="อธิบายเพิ่มเติม"
                    rows="5"
                  ></textarea>
                  {/* <label className="font-T">
                    * หมายเหตุ : กรุณาตรวจสอบข้อมูลก่อนบันทึก
                  </label> */}
                </div>
                <div class="Mo-footer">
                  <button
                    type="submit"
                    className="buttonSave font "
                    onClick={() => {
                      
                      handleCloseS();
                    }}
                    // {setTimeout(() => {

                    // },2000)}
                    // data-dismiss="modal"
                  >
                    บันทึก
                  </button>
                  <button
                    type="button"
                    className="buttonCancle font"
                    data-dismiss="modal"
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>

        <div class="row my-rowEnd">
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col2"></div>

          <div class="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-8  my-col2"></div>
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col2"></div>
        </div>
      </div>
      <div>{val.length}</div>
    </div>
  );
}

export default History;
