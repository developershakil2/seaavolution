import React, { useContext, useState, useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { ContextApi } from "./utilities/ContextApi";

const Details = () => {
  const { allVote, doVote, noVote } = useContext(ContextApi);
  const [selectedId, setSelectedId] = useState('');
  const [totalVote, setTotalVote] = useState('');
  const [novote, setNovote] = useState('');
  useEffect(() => {
    const actualUrl = new URL(window.location.href);
    const id = actualUrl.searchParams.get('id');
    const vote = actualUrl.searchParams.get('vote');
    const novote = actualUrl.searchParams.get('novote');
    setNovote(novote)
    setTotalVote(vote);
    setSelectedId(id);
  }, []);

  const selectedVote = allVote.find((el, ind) => ind === parseInt(selectedId, 10));

  return (
    <>
      <Nav />
      {selectedVote && (
        <div className="details_wrapper w-[80%] mx-auto">
          <div className="inner_wrapper p-5 mx-auto shadow-2xl w-[600px] py-6">
            <h2 className="text-xl font-black">Hi regards from {selectedVote.name}</h2>
            <hr />
            <h3 className="my-3 text-xl font-black">{selectedVote.title}</h3>
            <hr />
            <p className="mb-3 text-sm font-black">
              {selectedVote.description}
            </p>
          


            <h3 className="mt-2 text-sm text-[#00e5ff] font-black">
              Do Your Vote by clicking YES or NO
            </h3>
            <div className="vote_btn_wrapper">
            <button
                onClick={() => doVote(selectedId)}
                className="w-[50%] mx-auto h-[40px] rounded-xl mt-2 font-black text-white bg-[#14ab2b] outline-none border-none "
              >
                YES
              </button>

              <button
                onClick={() => noVote(selectedId)}
                className="w-[50%] mx-auto h-[40px] rounded-xl mt-2 font-black text-white bg-[#ab3014] outline-none border-none "
              >
               NO
              </button>
              </div>
           
            <p className="font-black text-lg">Total YES Vote : {totalVote}</p>
            <p className="font-black text-lg">Total NO vote : {novote}</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Details;
