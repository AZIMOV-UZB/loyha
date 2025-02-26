import { BiLogOut } from "react-icons/bi";
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaInternetExplorer } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LuSave } from "react-icons/lu";
import { MdOutlinePeople, MdPostAdd } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import img from "../../assets/login.svg";
import { useGetProfilQuery } from "../../redux/api/user-api";

const Snper = () => {
  const { data } = useGetProfilQuery({});
  console.log(data);

  return (
    <div className="h-screen">
      <div className="w-[270px] flex flex-col bg-[#09090A] gap-[24px] py-[47px] px-[24px] ">
        <div className="container mx-auto flex items-center  mt-[42px]">
          <img src={img} alt="" />
          <p className="text-[28px] font-[600] text-[#fff]">Snapgram</p>
        </div>

        <div key={data?._id} className="flex gap-[10px] mb-[44px]">
          <div className="w-[56px] h-[56px] rounded-full border ">
            <img src={data?.photo} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="text-[#EFEFEF] text-[18px] font-[600]">
              {data?.username}
            </p>
            <p className="text-[14px] text-[#7878A3]">{data?.email}</p>
          </div>
        </div>

        <NavLink to={"/"}>
          <div className="flex gap-[16px] items-center">
            <IoHomeOutline className="text-[20px] text-[#877EFF]" />
            <p className="text-[#EFEFEF] text-[18px] font-[600]">Home</p>
          </div>
        </NavLink>
        <div className="flex gap-[16px] items-center">
          <FaInternetExplorer className="text-[20px] text-[#877EFF]" />
          <p className="text-[#EFEFEF] text-[18px] font-[600]">Explore</p>
        </div>
        <div className="flex gap-[16px] items-center">
          <MdOutlinePeople className="text-[20px] text-[#877EFF]" />
          <p className="text-[#EFEFEF] text-[18px] font-[600]">People</p>
        </div>
        <div className="flex gap-[16px] items-center">
          <LuSave className="text-[20px] text-[#877EFF]" />
          <p className="text-[#EFEFEF] text-[18px] font-[600]">Saved</p>
        </div>
        <div className="flex gap-[16px] items-center">
          <PiFilmReelFill className="text-[20px] text-[#877EFF]" />
          <p className="text-[#EFEFEF] text-[18px] font-[600]">Reels</p>
        </div>
        <div className="flex gap-[16px] items-center">
          <BsChatSquareTextFill className="text-[20px] text-[#877EFF]" />
          <p className="text-[#EFEFEF] text-[18px] font-[600]">Chats</p>
        </div>
        <div className="flex gap-[16px] items-center mb-[123px]">
          <MdPostAdd className="text-[20px] text-[#877EFF]" />
          <p className="text-[#EFEFEF] text-[18px] font-[600]">Create Post</p>
        </div>
        <div className="flex gap-[16px] items-center">
          <BiLogOut className="text-[20px] text-[#877EFF]" />
          <p className="text-[#EFEFEF] text-[18px] font-[600]">Logout</p>
        </div>
        <div className="flex gap-[16px] items-center">
          <IoMdSettings className="text-[20px] text-[#877EFF]" />
          <p className="text-[#EFEFEF] text-[18px] font-[600]">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Snper;
