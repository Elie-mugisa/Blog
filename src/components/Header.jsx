/* eslint-disable no-unused-vars */
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="text-3xl font-black wh  itespace-nowrap  text-sky-400 dark:text-white"
      >
        Fongo
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search.."
          rightIcon={AiOutlineSearch}
          className="hidden md:inline"
        />
      </form>
      <Button className=" lg:hidden" color="gray" pill>
        <AiOutlineSearch className="" />
      </Button>
      <div className="flex gap-2 md:order-2 ">
        <Button className="  w-12 h-10 hidden sm:inline" color="gray">
          <FaMoon />
        </Button>
        <Link to={"/signIn"}>
          <Button gradientDuoTone={"purpleToBlue"} className="hidden sm:inline">
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} className="" as={"div"}>
          <Link to={"/"}>Blog</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to={"/projects"}>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
