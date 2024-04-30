
import { HiOutlineUser } from "react-icons/hi";
import DarkModeToggle from "../ui/DarkModeToggle";
import Logout from "../features/authentication/Logout";
import useUser from "../features/authentication/useUser";
import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import FREELANCER_PIC from "../../public/images/free.webp"
function Home() {
  const { isLoading, user } = useUser();
git a  return (
    <div className="h-screen bg-secondary-0">
      <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
        <div
          className={`container xl:max-w-screen-lg flex items-center justify-between gap-x-8
      ${isLoading ? "blur-sm opacity-50" : ""}
      `}
        >

          <div className=""></div>
          <h1 className="text-secondary-900">به سایت فریلنسر خوش آمدید.</h1>
          <ul className="flex gap-x-4 items-center">
            <li className="flex">
              <Link to={`${user?.role === "FREELANCER" ? "/freelancer" : user?.role === "OWNER" ? "/owner" : "/admin"}`}> <HiOutlineUser className="w-5 h-5 text-primary-900" /> </Link>
            </li>
            <li className="flex">
              <DarkModeToggle />
            </li>
            <li className="flex">
              {user ? <Logout /> : <Link to="/auth"><LuLogIn className="w-5 h-5 text-secondary-500" /></Link>}


            </li>
          </ul>

        </div>

      </div>
      <div className="container mt-20 text-secondary-900 flex justify-around items-center">
        <div className="">

          <ul className="space-y-5">
            <li>          بهترین فریلنسرها را برای هر شغلی به صورت آنلاین استخدام کنید.
            </li>
            <li>          بزرگترین بازار آزاد دنیا
            </li>
            <li>هر شغلی که بتوانید به آن فکر کنید</li>
            <li>          تا 90٪ صرفه جویی کنید و به صورت رایگان قیمت دریافت کنید
            </li>
            <li>          فقط زمانی پرداخت کنید که 100% راضی باشید
            </li>
          </ul>
          <div className="">
            <Link className="mt-8 inline-block btn btn--outline " to="/auth">ثبت نام کنید</Link>
          </div>
        </div>
        <div className="w-[400px] h-[400px]">

          <img src={FREELANCER_PIC} alt="freelancer picture" className="w-full h-full rounded-full bg-cover" />
        </div>
      </div>
    </div>
  );
}
export default Home;
