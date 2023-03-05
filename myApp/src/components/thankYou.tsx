import * as React from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
type Props = {};
export const ThankYou = (props: Props) => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <section className=" font-Poppin bg-red-500 opacity-75 self-center rounded-xl p-6">
        <div className="flex scale-150 ring-slate-400   p-6 justify-center w-full">
          <MdOutlineDoneOutline className="h-10" />
        </div>
        <h3 className="m-3 font-bold text-center text-2xl text-white ">
          You Done Regestration
        </h3>
        <p className="text-center font-semibold ">
          please Check you Inbox Email
        </p>
        <div className="flex w-full justify-center">
          <button
            type="button"
            className="border-rose-900 hover:text-white hover:bg-rose-600  flex-1 text-center items-center border-[.5px] p-4 rounded-xl outline-none font-semibold my-4 "
          >
            Done
          </button>
        </div>
      </section>
    </div>
  );
};
