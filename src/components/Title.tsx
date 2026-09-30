interface Props {
  title: string;
  des: string;
}

const Title = ({ title, des }: Props) => {
  return (
    <div className="flex flex-col gap-2.5 sm:gap-4 font-titleFont mb-8 sm:mb-14">
      <h3 className="text-xs sm:text-sm uppercase font-light text-designColor tracking-wider sm:tracking-widest">
        {title}
      </h3>
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;
