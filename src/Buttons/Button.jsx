// eslint-disable-next-line react/prop-types
const Button = ({ setcolor }) => {
  return (
    <>
      <button
        className="flex flex-wrap justify-center gap-3 bg-red-600 text-white p-1 px-14 m-3 rounded-full cursor-pointer transition hover:bg-white duration-30 
  hover:text-red-600 hover:font-bold font-sans"
        onClick={() => setcolor("rgb(220 38 38)")}
      >
        RED
      </button>
      <button
        className="flex flex-wrap justify-center gap-3 bg-blue-600 text-white p-1 px-14 m-3 rounded-full transition hover:bg-white duration-30 
  hover:text-blue-600 hover:font-bold font-sans"
        onClick={() => setcolor("rgb(37 99 235)")}
      >
        BLUE
      </button>
      <button
        className="flex flex-wrap justify-center gap-3 bg-lime-500 text-white p-1 px-14 m-3 rounded-full transition hover:bg-white duration-30 
  hover:text-lime-950 hover:font-bold font-sans"
        onClick={() => setcolor("rgb(132 204 22)")}
      >
        LIME
      </button>
      <button
        className="flex flex-wrap justify-center gap-3 bg-yellow-600 text-white p-1 px-14 m-3 rounded-full transition hover:bg-white duration-30 
  hover:text-yellow-600 hover:font-bold"
        onClick={() => setcolor("rgb(202 138 4)")}
      >
        YELLOW
      </button>
      <button
        className="flex flex-wrap justify-center gap-3 bg-green-600 text-white p-1 px-14 m-3 rounded-full transition hover:bg-white duration-30 
  hover:text-green-600 hover:font-bold font-sans"
        onClick={() => setcolor("rgb(22 163 74)")}
      >
        GREEN
      </button>
      <button
        className="flex flex-wrap justify-center gap-3 bg-pink-600 text-white p-1 px-14 m-3 rounded-full transition hover:bg-white duration-30 
  hover:text-pink-600 hover:font-bold"
        onClick={() => setcolor("rgb(219 39 119)")}
      >
        PINK
      </button>
      <button
        className="flex flex-wrap justify-center gap-3 bg-purple-600 text-white p-1 px-14 m-3 rounded-full transition hover:bg-white duration-30 
  hover:text-purple-600 hover:font-bold font-sans"
        onClick={() => setcolor("rgb(147 51 234")}
      >
        PURPLE
      </button>
    </>
  );
};

export default Button;
