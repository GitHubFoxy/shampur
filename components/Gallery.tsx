import Image from "next/image";

export default function Gallery() {
  return (
    <div className='container mx-auto py-14 '>
      <main className='grid grid-cols-1 grid-rows-2 sm:grid-cols-6 sm:grid-rows-4 sm:max-h-1/3 sm:max-w-1/3'>
        <Image
          className='row-start-1 col-start-1 row-end-2 col-end-2 place-self-center sm:row-end-3 sm:col-end-3 rounded-xl'
          src='/first_image.webp'
          alt='shampur building'
          width={330}
          height={330}
        />

        <Image
          className='rounded-xl row-start-2 col-start-2 row-end-2 col-end-1 place-self-center sm:row-start-1 sm:col-start-3 sm:col-end-5 sm:row-end-3'
          src='/second_image.webp'
          alt='shampur building'
          width={330}
          height={330}
        />
        <Image
          className='rounded-xl row-start-1 col-start-5 row-end-3 col-end-7 place-self-center hidden sm:block'
          src='/third_image.webp'
          alt='shampur building'
          width={330}
          height={330}
        />
        <Image
          className='rounded-xl row-start-3 col-start-1 row-end-5 col-end-3 place-self-center hidden sm:block'
          src='/second_image.webp'
          alt='shampur building'
          width={330}
          height={330}
        />
        <Image
          className='rounded-xl row-start-3 col-start-3 row-end-5 col-end-5 place-self-center hidden sm:block'
          src='/third_image.webp'
          alt='shampur building'
          width={330}
          height={330}
        />
        <Image
          className='rounded-xl row-start-3 col-start-5 row-end-5 col-end-7 place-self-center hidden sm:block'
          src='/first_image.webp'
          alt='shampur building'
          width={330}
          height={330}
        />
      </main>
    </div>
  );
}
