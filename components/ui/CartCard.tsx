import Slider from "./slider";

export default function CartCard() {
  return (
    <>
      <div className="uppercase flex w-full justify-center rounded-xl p-2 bg-zinc-400 ">
        <Slider name={["Самовывоз", "Доставка"]} />
      </div>
      <div className="text-black flex flex-col items-center w-full gap-2">
        <input
          type="text"
          className="w-full rounded-lg p-2 "
          placeholder="Имя"
        />
        <input
          type="text"
          className="w-full rounded-lg p-2"
          placeholder="Телефон"
        />
      </div>
      <div className="flex w-full justify-center rounded-xl p-2 bg-zinc-400">
        <Slider name={["Как можно быстрее", "Ко времени"]} />
      </div>
      <div className="flex w-full justify-center rounded-xl p-2 bg-zinc-400">
        <Slider name={["Оплата на месте", "Оплатить сейчас"]} />
      </div>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        maxLength={256}
        className="w-full h-24 p-4 rounded-xl text-black"
        placeholder="Комментарий к заказу"
      />

      <p className="">
        <input
          type="checkbox"
          name="acception"
          id=""
          className=" align-middle self-center w-5 h-5 cursor-pointer"
        />
        <label htmlFor="acception" className="text-black">
          {" "}
          Я ознакомлен с{" "}
          <span className="underline">пользовательским соглашением</span> и даю
          согласие на обработку моих{" "}
          <span className="underline">персональных данных</span>
        </label>
      </p>
      <button className="p-2 bg-red-500 rounded-xl px-6">Оплатить</button>
    </>
  );
}
