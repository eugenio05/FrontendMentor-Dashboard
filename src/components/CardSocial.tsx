import { FC } from "react";
import { SocialNetwork } from "../data/data";

interface Props {
  social: SocialNetwork;
}

const CardSocial: FC<Props> = ({ social }: Props) => {
  const { user, followers, name, newFollowers, logo } = social;
  let styleOptional: string = "";
  if (name === "Facebook") {
    styleOptional = `bg-light-grayish-blue rounded-lg py-8 px-4 space-y-6 w-full max-w-md relative before:absolute
    before:inset-x-0 before:top-0 before:h-2 before:bg-facebook before:rounded-t-lg text-dark-grayish-blue dark:bg-dark-desatured-blue 
    dark:text-desaturated-blue`;
  }

  if (name === "Twitter") {
    styleOptional = `bg-light-grayish-blue rounded-lg py-8 px-4 space-y-6 w-full max-w-md relative before:absolute
    before:inset-x-0 before:top-0 before:h-2 before:bg-twitter before:rounded-t-lg text-dark-grayish-blue dark:bg-dark-desatured-blue 
    dark:text-desaturated-blue`;
  }
  if (name === "Instagram") {
    styleOptional = `bg-light-grayish-blue rounded-lg py-8 px-4 space-y-6 w-full max-w-md relative before:absolute
    before:inset-x-0 before:top-0 before:h-2 before:bg-gradient-to-r before:from-instagram-first before:to-instagram-second
     before:rounded-t-lg text-dark-grayish-blue dark:bg-dark-desatured-blue 
    dark:text-desaturated-blue`;
  }
  if (name === "Youtube") {
    styleOptional = `bg-light-grayish-blue rounded-lg py-8 px-4 space-y-6 w-full max-w-md relative before:absolute
    before:inset-x-0 before:top-0 before:h-2 before:bg-youtube
     before:rounded-t-lg text-dark-grayish-blue dark:bg-dark-desatured-blue 
    dark:text-desaturated-blue`;
  }

  return (
    <div className={styleOptional}>
      <p className="flex items-center justify-center gap-2 font-bold">
        <img src={logo} />
        {user}
      </p>
      <div className="text-center">
        <h3 className="text-4xl text-very-dark-blue mb-2 dark:text-white">
          {followers}
        </h3>
        <p className="text-xl uppercase">Followers</p>
      </div>
      <p
        className={`${
          newFollowers > 1 ? "text-lime-green" : "text-bright-red"
        } flex items-center justify-center font-bold gap-2`}
      >
        <img
          src={
            newFollowers > 1 ? "/assets/icon-up.svg" : "/assets/icon-down.svg"
          }
        />
        {newFollowers} Today
      </p>
    </div>
  );
};

export default CardSocial;
