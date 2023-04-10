import React, { useState } from "react";
import View from "../../../Components/View";

import { BsPlusLg } from "react-icons/bs";
import moment from "moment";
import { RiUnderline } from "react-icons/ri";
import ActionButtonInAbsolute from "../../../Components/ActionButtonInAbsolute";
import Modal from "../../../Components/Modal";

const Habits = () => {
  const [showModal, updateShowModal] = useState(false);
  const [dailyActitvityData, updateDailyActivityData] = useState({});

  return (
    <>
      {showModal && (
        <Modal
          onClose={() => {
            updateShowModal(false);
          }}
          showOnCenter
          heading={"Add activity"}
        >
          <View style={{ padding: 10 }}>
            <input type={"text"} />
          </View>
        </Modal>
      )}
      <View
        style={{
          bgColor: "blue",
          flex: 1,
          position: "relative",
          flexDirection: "column",
          padding: 20,
        }}
      >
        <ActionButtonInAbsolute
          onPress={() => {
            updateShowModal(true);
          }}
        />
        {/* {Object.keys(data).map((x, y) => {
        return (
          <View
            style={{
              borderTopWidth: 2,
              borderTopStyle: "solid",
              borderTopColor: "white",
            }}
          >
            <View style={{ marginTop: 5, marginLeft: 5 }}>{x}</View>
            <View
              style={{
                flexDirection: "column",
                // borderLeftWidth: 2,
                // borderLeftStyle: "solid",
                // borderLeftColor: "white",
                flex: 1,
                padding: 5,
              }}
            >
              {Object.keys(data[x]).map((value, index) => {
                return (
                  <View
                    style={{
                      padding: 2,
                      marginLeft: 10,
                      ...(index !== Object.keys(data[x]).length - 1
                        ? {
                            borderBottomWidth: 2,
                            borderBottomColor: "ghostWhite",
                            borderBottomStyle: "solid",
                            flex: 1,
                          }
                        : {}),
                    }}
                  >
                    {value} -> {data[x][value]}
                  </View>
                );
              })}
            </View>
          </View>
        );
      })} */}
      </View>
    </>
  );
};

export default Habits;
