import React, { useState, useEffect } from "react";
import UserScreen from "./UserScreen";
import { Link } from "react-router-dom";
import "./News.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { Form, Button, Col, InputGroup } from "react-bootstrap";

function News(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const News = [
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

  return (
    <div className="background-1">
      <UserScreen />

      <div class="container-fluid">
        <div class="row my-row-1">
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col1-1"></div>
          <div class="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-8   my-col1-2 ">
            <div className="head-barH">
              <div className="barH"> </div>
              <div className="fontH1">ข่าวสารประชาสัมพันธั</div>
            </div>
          </div>
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col1-3"></div>
        </div>

        <div class="row my-row-2">
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col1-1"></div>
          <div class="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-8   col2-2 ">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item ">
                <div
                  className="B-Add-news "
                  onclick="setColor('button', '#101010')"
                  id="pills-news-tab"
                  data-toggle="pill"
                  href="#news"
                  role="tab"
                  aria-controls="pills-news"
                  aria-selected="true"
                >
                  <div className="Add-news">ข่าวสาร</div>
                  <ion-icon name="newspaper-outline"></ion-icon>
                </div>
              </li>
              <li class="nav-item">
                <div
                  className="B-Add-news-2 "
                  id="pills-Add-news-tab"
                  data-toggle="pill"
                  href="#Add-news"
                  role="tab"
                  aria-controls="pills-Add-news"
                  aria-selected="false"
                >
                  <div className="Add-news">เพิ่มข่าวสาร</div>
                  <ion-icon name="add-circle-outline"></ion-icon>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col1-3"></div>
        </div>

        <div class="row my-row-2">
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col1-1"></div>
          <div class="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-8   my-col1-Table ">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="news"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <Table className="table Table-News table-hover">
                  <Thead>
                    <Tr>
                      <Th>อันดับที่</Th>
                      <Th>ข่าวสาร</Th>
                      <Th>วันที่</Th>
                      <Th className="Th-Edit-Delete">
                        <div>
                          <div className="Th-Edit">
                            <ion-icon
                              style={{ width: 20, height: 20 }}
                              name="create-outline"
                            ></ion-icon>
                            <div>แก้ไข</div>
                          </div>
                        </div>
                      </Th>
                      <Th className="Th-Edit-Delete">
                        <div>
                          <div className="Th-Edit">
                            <ion-icon
                              style={{ width: 20, height: 20 }}
                              name="trash-outline"
                            ></ion-icon>
                            <div>ลบ</div>
                          </div>
                        </div>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {News &&
                      News.map((News, index) => (
                        <Tr>
                          <Th>{index + 1}</Th>
                          <Td className="Data-News">{News.value}</Td>
                          <Td className="Data-News">
                            {`${News.jodDate.split("-")[2]}`}-
                            <SwitchCase value={News.jodDate.split("-")[1]} />-
                            {`${News.jodDate.split("-")[0] * 1 + 543}`}
                          </Td>
                          <Td>
                            {News.keyID == 1 && (
                              <div
                                type="button"
                                className=" button button1 "
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                              >
                                แก้ไข
                              </div>
                            )}
                            {News.keyID == 2 && (
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
                          <Td>
                            <div
                              className="button cancle"
                              // onClick={handleCloseY}
                            >
                              ลบ
                            </div>
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </div>

              <div
                class="tab-pane fade"
                id="Add-news"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <div className="H-s-news">
                    <div className="s-news">
                      <div className="Topic">หัวข้อ</div>
                      <div className="input-H-news">
                        <input
                          className="form-control "
                          form-control-md
                          required
                        />

                        <Form.Control.Feedback
                          type="invalid"
                          className="font-T"
                        >
                          *หมายเหตุ : กรุณากรอกหัวข้อข่าวสาร
                        </Form.Control.Feedback>
                      </div>

                      <div className=" Detail">รายละเอียด</div>
                      <div className="input-H-news">
                        <textarea class="form-control" rows="7" required />
                        <Form.Control.Feedback
                          type="invalid"
                          className="font-T"
                        >
                          *หมายเหตุ : กรุณากรอกรายละเอียดข่าวสาร
                        </Form.Control.Feedback>
                      </div>

                      <button type="submit" className=" Button-Save ">
                        บันทึก
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-2  my-col1-3"></div>
        </div>
      </div>
    </div>
  );
}

export default News;
