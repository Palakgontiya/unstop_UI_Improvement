const TagComp = ({ hashtags }) => {
  return (
    <>
      {hashtags.map((tag, index) => (
        <button key={index} className="bg-[#F6F8FA] rounded-xl text-[#315788] text-[0.8rem] px-2 py-1 font-semibold">{tag}</button>
      ))}
    </>
  );
};

export default TagComp;
