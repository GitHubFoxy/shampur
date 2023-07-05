import Image from "next/image";

export default function Gallery() {
  return (
    <div className="container mx-auto py-8 ">
      <main className="grid grid-cols-1 grid-rows-2 gap-1 sm:grid-cols-6 sm:grid-rows-4 sm:h-5/6">
        <div className="row-start-1 col-start-1 row-end-2 col-end-2 place-self-center sm:row-end-3 sm:col-end-3">
          <Image
            className="rounded-xl"
            src="/first_image.webp"
            alt="shampur building"
            width={330}
            height={330}
          />
        </div>
        <div className="row-start-2 col-start-2 row-end-2 col-end-1 place-self-center sm:row-start-1 sm:col-start-3 sm:col-end-5 sm:row-end-3">
          <Image
            className="rounded-xl"
            src="/second_image.webp"
            alt="shampur building"
            width={330}
            height={330}
          />
        </div>
        <div className="row-start-1 col-start-5 row-end-3 col-end-7 place-self-center hidden sm:block">
          <Image
            className="rounded-xl"
            src="/third_image.webp"
            alt="shampur building"
            width={330}
            height={330}
          />
        </div>
        <div className="row-start-3 col-start-1 row-end-5 col-end-3 place-self-center hidden sm:block">
          <Image
            className="rounded-xl"
            src="/second_image.webp"
            alt="shampur building"
            width={330}
            height={330}
          />
        </div>
        <div className="row-start-3 col-start-3 row-end-5 col-end-5 place-self-center hidden sm:block">
          <Image
            className="rounded-xl"
            src="/third_image.webp"
            alt="shampur building"
            width={330}
            height={330}
          />
        </div>
        <div className="row-start-3 col-start-5 row-end-5 col-end-7 place-self-center hidden sm:block">
          <Image
            className="rounded-xl"
            src="/first_image.webp"
            alt="shampur building"
            width={330}
            height={330}
          />
        </div>
      </main>
    </div>
  );
}
