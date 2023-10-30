import SideBar from "@/components/SideBar";
import SearchRow from "@/components/search/SearchRow";

const Voting = () => {
  return (
    <div className="flex justify-between tablet:justify-center">
      <div className="tablet:hidden">
        <SideBar />
      </div>
      <div className="flex justify-end pt-[30px] pb-[30px] mr-[30px] min-h-screen tablet:mr-0">
        <div className="flex flex-col space-y-[10px] min-w-[680px]">
          <SearchRow />

        </div>
      </div>
    </div>
  );
};

export default Voting;
