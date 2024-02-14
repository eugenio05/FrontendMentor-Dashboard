import { useEffect, useState } from "react";
import CardSocial from "./components/CardSocial";
import CardStats from "./components/CardStats";
import { data, content } from "./data/data";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
function App(): JSX.Element {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: string = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={theme}>
      <div
        className="bg-white before:absolute before:inset-x-0 before:0 before:h-96 before:bg-very-pale-blue before:-z-10
    text-very-dark-blue dark:bg-very-dark-blue dark:before:bg-very-dark-blue-top dark:text-white"
      >
        <main className="w-[90%] max-w-screen-xl mx-auto overflow-hidden py-16">
          <h1 className="text-3xl md:text-4xl">Social Media Dashboard</h1>
          <p className="text-dark-grayish-blue font-bold mt-3 pb-6 border-b-2 dark:text-desaturated-blue md:text-xl">
            Total Followers: 23,004
          </p>
          <div className="flex items-center justify-between pt-6">
            <p className="text-dark-grayish-blue font-bold dark:text-desaturated-blue md:text-xl">
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </p>
            {theme === "dark" ? (
              <MdDarkMode
                className="cursor-pointer"
                onClick={toggleTheme}
                size={30}
              />
            ) : (
              <MdOutlineDarkMode
                className="cursor-pointer"
                onClick={toggleTheme}
                size={30}
              />
            )}
          </div>
          <section className="py-16 grid justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.map((social) => (
              <CardSocial key={social.id} social={social} />
            ))}
          </section>

          <section className="pt-8">
            <h2 className="text-3xl md:text-4xl mb-8">Overview - Today</h2>
            <div className="grid gap-6 justify-items-center md:grid-cols-3 lg:grid-cols-4">
              {content.map((content) => (
                <CardStats key={content.id} content={content} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
