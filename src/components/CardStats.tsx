import { FC } from "react";
import { Content } from "../data/data";

interface Props {
  content: Content;
}

const CardStats: FC<Props> = ({ content }: Props) => {
  const { name, logo, count, percent } = content;
  return (
    <div className="card-stats bg-light-grayish-blue p-6 rounded-lg max-w-sm w-full dark:bg-dark-desatured-blue">
      <h3 className="text-dark-grayish-blue text-lg dark:text-dark-desatured-blue">
        {name}
      </h3>
      <img src={logo} className="justify-self-end" />
      <p className="text-3xl font-bold">{count}</p>
      <p
        className={`${
          percent > 1 ? "text-lime-green" : "text-bright-red"
        } flex items-center justify-center font-bold gap-2`}
      >
        <img
          src={`${
            percent > 1 ? "/assets/icon-up.svg" : "/assets/icon-down.svg"
          }`}
        />
        {percent}%
      </p>
    </div>
  );
};

export default CardStats;
