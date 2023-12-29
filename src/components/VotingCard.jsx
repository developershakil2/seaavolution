import React, { useState, useContext, useEffect } from 'react';
import { ContextApi } from '../utilities/ContextApi';
import { Link } from 'react-router-dom';

const VotingCard = () => {
  const { allVote, doVote, noVote, getallVoters, getallVoters2 } = useContext(ContextApi);
  const [formattedVotes, setFormattedVotes] = useState([]);
  const [novote, setNovote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedVotesArray = await Promise.all(
          allVote.map(async (el, ind) => {
            const totalVotes = await getallVoters(ind);
            return { id: ind, totalVotes: totalVotes ? totalVotes.toNumber().toString() : 'N/A' };
          })
        );

        setFormattedVotes(formattedVotesArray);
      } catch (error) {
        console.log(error);
        // Handle error gracefully, you might want to show an error message
      }
    };

    const fetchData2 = async () => {
      try {
        const formattedVotesArray = await Promise.all(
          allVote.map(async (el, ind) => {
            const getno = await getallVoters2(ind);
            return { id: ind, getno: getno ? getno.toNumber().toString() : 'N/A' };
          })
        );

        setNovote(formattedVotesArray);
      } catch (error) {
        console.log(error);
        // Handle error gracefully, you might want to show an error message
      }
    };

    fetchData();
    fetchData2();
  }, [allVote, getallVoters, getallVoters2]);

  return (
    <div className="my-[100px] card_main_wrapper w-[90%] mx-auto ">
      <h1 className="my-5 w-full font-black text-3xl text-center">Explore Elections and Vote for Them</h1>

      <div className="card_wrapper gap-2 w-full flex justify-between flex-wrap">
        {formattedVotes.map(({ id, totalVotes }) => {
          const { getno } = novote.find((item) => item.id === id) || {};
          return (
            <div key={id} className="card p-3 w-[32%] h-[425px] rounded-xl bg-[#111]">
              <img src="images/vote.gif" alt="seaevolution" className="w-[130px] mx-auto h-[130px]" />
              <h2 className="text-white font-black text-center text-xl my-3">
                { allVote[id].title?.slice(0, 35) }
              </h2>
              <Link to={`/details?id=${id}&&vote=${totalVotes}&&novote=${getno}`} className="  ">
                <div className="w-[100%] h-[40px] rounded-xl font-black text-white bg-[#1454ab] flex justify-center items-center">
                  <span>Election Details</span>
                </div>
              </Link>
            {
              allVote[id].status != false ?   <h3 className="mt-2 text-sm text-[#00e5ff] font-black">
              Do Your Vote by clicking YES or NO
            </h3>:''
            }
            {
              allVote[id].status != false?   <div className="vote_btn_wrapper">
              <button
                onClick={() => doVote(id)}
                className="w-[50%] mx-auto h-[40px] rounded-xl mt-2 font-black text-white bg-[#14ab2b] outline-none border-none "
              >
                YES
              </button>

              <button
                onClick={() => noVote(id)}
                className="w-[50%] mx-auto h-[40px] rounded-xl mt-2 font-black text-white bg-[#ab3014] outline-none border-none "
              >
                NO
              </button>
            </div>:<h2  className="text-[red] bg-white p-4 mt-4 font-black">This Election Are Not Available to vote</h2>
            }
              <h3 className="mt-2 text-white">Total Current YES Vote: {totalVotes}</h3>
              <h3 className="mt-2 text-white">Total Current NO Vote: {getno}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VotingCard;
