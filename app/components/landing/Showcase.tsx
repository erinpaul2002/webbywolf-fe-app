export function Showcase() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-[rgba(34,34,34,1)] text-[42px] font-bold tracking-[-0.84px] text-center uppercase self-center w-[655px] mt-40 max-md:max-w-full max-md:mt-10">
        Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
      </h2>
      
      <img
        src="/showcase.png"
        className="aspect-[2.72] object-contain w-full self-center z-10 max-w-[1112px] mt-[110px] max-md:max-w-full max-md:mt-10"
        alt="showcase"
      />
    </section>
  );
}