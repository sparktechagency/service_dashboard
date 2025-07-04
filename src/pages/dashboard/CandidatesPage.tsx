import CandidateList from "../../components/candidate/CandidateList";

const CandidatesPage = () => {
  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <CandidateList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidatesPage;
