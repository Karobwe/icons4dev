import { useId } from "react";

export default function Switch({ isChecked, onChange, label }) {
    const id = useId()

    return (
      <div className="relative isolate flex items-center">
        <input
          type="checkbox"
          id={id}
          className={`
            w-6 h-6 z-10
            bg-white 
            rounded-full border-4 border-slate-600 
            appearance-none cursor-pointer 
            checked:translate-x-8 
            duration-500
          `}
          checked={isChecked}
          onChange={onChange}
        />
        <label htmlFor={id} className="absolute left-0 flex items-center gap-4">
            <span className="">
                {label}
            </span>

            <div className="-order-1 w-12 h-4 bg-slate-600 rounded-full"></div>
        </label>
      </div>
    );
}