import React, { useEffect, useState } from "react";
import images from "../../assets/images";
import styles from "./cusd.module.scss";
import * as facility from "../../service/facility_service/Facility";

function Cusd() {
  const [dataCardHouse, setDataCardHouse] = useState([]);
  const [dataCardVilla, setdataCardVilla] = useState([]);
  const [dataCardRoom, setdataCardRoom] = useState([]);

  const displayHouse = async () => {
    try {
      const dataHouse = facility.getAllHouse;
      setDataCardHouse(dataHouse);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };
  const displayVilla = async () => {
    try {
      const dataVilla = facility.getAllVilla;
      setdataCardVilla(dataVilla);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  const displayRoom = async () => {
    try {
      const dataRoom = facility.getAllRoom;
      setdataCardRoom(dataRoom);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  useEffect(() => {
    displayHouse();
    displayVilla();
    displayRoom();
  }, []);
  return (
    <div className={styles.Cusd}>
      <div className=" cusd-list">
        {dataCardHouse.map((item, index) => (
          <div className="bg-pink-300 cusd-list-content" key={index}>
            <div className="">
              <img alt="" src={item.img} className="w-full cusd-img" />
            </div>
            <div className=" cusd-trading">
              <div className="cusd__content">
                <div className="trading">{item.title}</div>
              </div>
              <div className="cusd__content">
                <div className="">{item.rentPrice}</div>
              </div>
              <div className="cusd__content">
                <div className="">{item.roomStandard}</div>
              </div>
              <div className="flex justify-between p-5 btn-class">
                <div className="p-2 mr-6 bg-orange-400 rounded-lg">
                  chỉnh sửa
                </div>
                <div className="p-2 bg-orange-400 rounded-lg">delete</div>
              </div>
            </div>
          </div>
        ))}
        {dataCardRoom.map((item, index) => (
          <div className="bg-pink-300 cusd-list-content" key={index}>
            <div className="img">
              <img alt="" src={item.img} className="w-full cusd-img" />
            </div>
            <div className=" cusd-trading">
              <div className="cusd__content">
                <div className="trading">{item.title}</div>
              </div>
              <div className="cusd__content">
                <div className="">{item.rentPrice}</div>
              </div>
              <div className="cusd__content">
                <div className="">miễn phí: {item.freeService}</div>
              </div>
              <div className="flex justify-between p-5 btn-class">
                <div className="p-2 mr-6 bg-orange-400 rounded-lg">
                  chỉnh sửa
                </div>
                <div className="p-2 bg-orange-400 rounded-lg">delete</div>
              </div>
            </div>
          </div>
        ))}
        {dataCardVilla.map((item, index) => (
          <div className="bg-pink-300 cusd-list-content" key={index}>
            <div className="img">
              <img alt="" src={item.img} className="w-full cusd-img" />
            </div>
            <div className=" cusd-trading">
              <div className="cusd__content">
                <div className="trading">{item.title}</div>
              </div>
              <div className="cusd__content">
                <div className="">size : {item.size}</div>
              </div>
              <div className="flex justify-between p-5 btn-class">
                <div className="p-2 mr-6 bg-orange-400 rounded-lg">
                  chỉnh sửa
                </div>
                <div className="p-2 bg-orange-400 rounded-lg">delete</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cusd;
