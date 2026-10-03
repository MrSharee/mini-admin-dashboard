import { FiUser } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";
function Header() {
  return (
    <>
      <header className="bg-surface w-5/6  py-5 border-border border-b-2 flex flex-row justify-start items-center px-9 ">
        <div className="flex flex-row text-text  items-center justify-center gap-2.5">
          <FiUser className="text-2xl " />
          <FaChevronDown className="text-xs font-medium" />
          <h2 className="text-sm">هادی شرعی</h2>
        </div>
      </header>
    </>
  );
}

export default Header;
