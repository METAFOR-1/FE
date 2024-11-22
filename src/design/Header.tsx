import { cn } from "fast-jsx/util";
import { FiSearch, FiMenu } from "react-icons/fi";

export default function Header() {
  const container = {
    positions: "relative",
    sizes: "h-[80px] w-full",
    displays: "flex items-center justify-between",
    paddings: "px-10",
    colors: "black",
    shadows: "shadow-md",
  };

  const logo = {
    fonts: "text-2xl font-bold",
    colors: "text-black", // 로고 글자색을 검정으로 설정
  };

  const menu = {
    displays: "flex items-center gap-x-10",
    fonts: "font-medium text-base",
  };

  const menuItem = {
    hover: " cursor-pointer",
  };

  const authButtons = {
    container: "flex items-center gap-x-8",
    signup:
      "border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-100 transition",
    login:
      "bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition",
  };

  const searchBar = {
    container: "flex items-center w-[700px] h-10 border border-gray-300 rounded-full pl-4 pr-2 bg-white shadow-sm",
    input:
      "w-full border-none outline-none text-gray-500 placeholder-gray-400",
    icon: "text-gray-400 w-5 h-5",
  };

  const menuIcon = {
    sizes: "w-6 h-6",
    colors: "text-black cursor-pointer hover:text-gray-700",
    margins: "mx-8", 
  };


  return (
    <header className={cn(container)}>
      {/* 로고 */}
      <div className={cn(logo)}>AI TRIP</div>

      {/* 검색창 */}
      <div className={cn(searchBar.container)}>
        <input
          type="text"
          placeholder="Search..."
          className={cn(searchBar.input)}
        />
        <FiSearch className={cn(searchBar.icon)} />
      </div>

      {/* 메뉴 */}
      <nav className={cn(menu)}>
        <div className={cn(menuItem, "text-orange-500 font-bold")}>홈</div>
        <div className={cn(menuItem)}>업데이트</div>
        <div className={cn(menuItem)}>고객 지원</div>
        <div className={cn(menuItem)}>문의하기</div>
      </nav>

      {/* 회원가입/로그인 버튼 */}
      <div className="flex items-center gap-x-4">
        <div className={authButtons.container}>
          {/* 회원가입 버튼 */}
          <button className={authButtons.signup}>회원가입</button>
          {/* 로그인 버튼 */}
          <button className={authButtons.login}>로그인</button>
        </div>
        {/* 햄버거 메뉴 아이콘 */}
        <FiMenu className={cn(menuIcon)} />
      </div>
    </header>
  );
}
