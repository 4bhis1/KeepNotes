import React, { useEffect, useRef, useState } from "react";
import Modal from "../../Components/Modal";
import View from "../../Components/View";
import RCE from "../components/ReachCodeEditor";
let userId = "63ae74ab20820f243525ca23";

const Notes = () => {
  let [pages, updatePages] = useState();
  let [pageId, updatePageId] = useState();

  const dataUpdate = async () => {
    const temp = await fetch(`http://localhost:5010/userNotes/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ userId }),
    });

    const temp2 = await temp.json();

    updatePages(temp2["result"]);
  };

  useEffect(() => {
    dataUpdate();
  }, [pageId]);

  const modalRef = useRef(null);

  return (
    <>
      {pageId && (
        <Modal
          onClose={() => {
            updatePageId();
          }}
          showOnCenter
          parentRef={modalRef}
        >
          <RCE pageId={pageId} />
        </Modal>
      )}

      <View
        style={{
          bgColor: "lightyellow",
          flexWrap: "wrap",
          padding: 10,
          overflow: "scroll",
          overflowX: "hidden"
        }}
      >
        {pages ? (
          pages.map((value, index) => {
            const { _id, updatedon, pinned, background, heading, note } = value;

            return (
              <View
                style={{
                  margin: 10,
                  bgColor: "yellow",
                  padding: 10,
                  borderRadius: 10,
                  cursor: "pointer",
                  flexDirection: "column",
                }}
                key={`notes${index}`}
                onClick={() => {
                  updatePageId(_id);
                }}
              >
                <View>{heading ? <View>{heading}</View> : void 0}</View>
                <View style={{ flexDirection: "column" }}>
                  {note &&
                    note.map(({ data }, index) => (
                      <View key={`page${index}`}>{data}</View>
                    ))}
                </View>
              </View>
            );
          })
        ) : (
          <View>No data</View>
        )}
      </View>

      <View
        onClick={async () => {
          const temp = await fetch("http://localhost:5010/notes", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              createdBy: userId,
              note: [{ types: "", data: "" }],
            }),
          });

          const temp2 = await temp.json();

          // console.log("temp2", temp2["result"]);
          updatePageId(temp2["result"]);
        }}
      >
        Clich here for new
      </View>
    </>
  );
};

export default Notes;
