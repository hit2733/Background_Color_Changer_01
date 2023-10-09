import Button from "../Buttons/Button";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setcolor }) => {
  return (
    <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2  bg-black mx-10 rounded-full">
      <Button setcolor={setcolor} />
    </div>
  );
};

export default Navbar;
