import { MdArrowDropDownCircle } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { MdArrowBackIosNew } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";
import { CgEditBlackPoint } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

export const DropDownIcon = () => (
  <MdArrowDropDownCircle className="text-secondaryDark" />
);
export const CategoryIcon = () => <BiCategory />;
export const BackIcon = () => <MdArrowBackIosNew />;
export const DeleteIcon = () => <AiFillDelete className="text-secondaryDark" />;
export const EditIcon = () => (
  <MdModeEditOutline className="text-secondaryDark" />
);
export const AddIcon = () => (
  <BiAddToQueue className="h-6 w-6 text-secondaryDark" />
);
export const BulletPointIcon = () => (
  <CgEditBlackPoint className="text-secondaryDark" />
);
export const LogoutIcon = () => <FiLogOut className="h-4 w-4" />;
