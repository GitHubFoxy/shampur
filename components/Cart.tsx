import CartCard from "./ui/CartCard";

export default function Cart() {
  return (
    <div className="grid grid-cols-2 pt-4 ">
      <div>summery of items</div>

      <div className=" text-white flex gap-2 flex-col p-4 bg-zinc-300 max-w-sm items-center rounded-xl">
        <CartCard />
      </div>
    </div>
  );
}
