import React from "react";
import { ReactComponent as SmokeLogo } from "../assets/Group2.svg";

export default function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal_background"
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(false);
            }}
          >
            <div
              className="relative w-auto my-6 mx-auto max-w-3xl"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-w-md min-w-[480px] rounded-3xl">
                {/*header*/}
                <div className="flex items-start justify-center p-5 ">
                  <SmokeLogo />
                </div>
                <div className="relative p-6 flex-auto flex-col px-20">
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-xs text-[#464B4E] font-semibold"
                    >
                      Email
                    </label>
                    <input className="border-b-2 border-[#464B4E] h-10" />
                  </div>
                  <div className="flex flex-col mt-4">
                    <label
                      htmlFor="password"
                      className="text-xs text-[#464B4E] font-semibold"
                    >
                      Password
                    </label>
                    <input className="border-b-2 border-[#464B4E] h-10" />
                  </div>
                  <div className="pt-5">
                    <p className="text-xs text-[#464B4E]">
                      {"Forgot Your Password?"}
                    </p>
                  </div>
                  <div className="pt-7">
                    <button className="w-full bg-[#464B4E] text-white font-bold py-4 rounded-md">
                      {"Enter"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
