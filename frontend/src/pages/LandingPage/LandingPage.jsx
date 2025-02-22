import styles from "./LandingPage.module.css";
import { useState, useEffect } from "react";

const IconSVG = ({ type, color }) => {
  return (
    <>
      {type === "sparkle" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sparkles w-6 h-6"
        >
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
          <path d="M20 3v4"></path>
          <path d="M22 5h-4"></path>
          <path d="M4 17v2"></path>
          <path d="M5 18H3"></path>
        </svg>
      )}
      {type === "search" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-search text-white h-6 w-6"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      )}
      {type === "calender" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-calendar text-white h-6 w-6"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
      )}
      {type === "heart" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-heart text-white h-6 w-6"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      )}
      {type === "redHearts" && (
        <svg
          width="45"
          height="49"
          viewBox="0 0 45 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0497 45.5727C28.4988 38.654 29.8625 31.4818 27.5505 27.607C25.2385 23.7322 19.3963 24.1961 17.0432 27.8665C16.9546 23.5074 12.2157 20.0595 8.21977 22.1553C4.22389 24.2512 1.63929 31.0791 12.0497 45.5727Z"
            fill="#FF8197"
          ></path>
          <path
            d="M36.308 27.9505C44.9503 21.7783 44.802 17.4359 42.952 15.4895C41.102 13.5431 37.7713 14.5781 36.8863 17.0172C36.2636 14.4983 33.0607 13.1177 31.0156 14.8581C28.9706 16.5985 28.365 20.901 36.308 27.9505Z"
            fill="#FF8197"
          ></path>
          <path
            d="M25.4004 9.84594C31.9953 8.27897 32.9534 5.67652 32.3286 4.08047C31.7039 2.48443 29.4859 2.29404 28.3753 3.52267C28.6139 1.88379 27.0531 0.296399 25.4252 0.832616C23.7973 1.36883 22.4031 3.76616 25.4004 9.84594Z"
            fill="#FF8197"
          ></path>
        </svg>
      )}
    </>
  );
};

const LandingPage = () => {
  const [cardContent, setCardContent] = useState([
    {
      title: "Custom Calendar",
      content:
        "Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.",
      imageURL: "https://justliv.org/assets/images/laptop.png",
    },
    {
      title: "Tailored to Your Interests",
      content:
        "Filters let you choose activities by age, category, price, and more. Social features help you sync schedules with friends and see what they’re attending.",
      imageURL: "https://justliv.org/assets/images/child.png",
    },
    {
      title: "Stress-Free Bulk Booking",
      content:
        "Book all your child’s activities in just a few clicks. Our platform handles the details so you don’t have to.",
      imageURL: "https://justliv.org/assets/images/mother1.png",
    },
  ]);

  const [hiwList, setHiwList] = useState([
    {
      h1: "Browse",
      h2: "Discover activities from our partner booking providers.",
      iconType: "search",
      imageURL: "https://justliv.org/assets/images/downArrow.png",
    },
    {
      h1: "Build",
      h2: "Share your child’s interests, schedule, and preferences. Watch as JustLiv creates the perfect calendar filled with activities.",
      iconType: "calender",
      imageURL: "https://justliv.org/assets/images/twistedArrow.png",
    },
    {
      h1: "Book",
      h2: "Finalize your selections with one click and enjoy peace of mind.",
      iconType: "heart",
      imageURL: "",
    },
  ]);

  return (
    <section className={styles.LandingPage}>
      <div className={styles.bannerContainer}>
        <img
          className={styles.banner}
          src="https://justliv.org/assets/images/hero.png"
          alt="hero"
        />

        <div className={styles.content}>
          <h1>Your Child's Perfect Schedule in Just a Few Clicks</h1>
          <p>Less Planning, More Living.</p>
          <button className={styles.waitingListButton}>
            <IconSVG type="sparkle" />
            Join the waiting list
          </button>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <h1>Why JustLiv?</h1>
        <div className={styles.gridContainer}>
          <ul>
            {cardContent.map((card, index) => {
              return (
                <li key={index}>
                  <div className={styles.icon}>
                    <IconSVG type="sparkle" />
                  </div>
                  <h1>{card.title}</h1>
                  <p>{card.content}</p>
                  <img src={card.imageURL} alt="image" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.howItWorksContainer}>
        <h2>How it works</h2>
        <div className={styles.contentHowItWorks}>
          {hiwList.map((item, index) => (
            <>
              <span key={index}>
                <div className={styles.hiwIconBox}>
                  <IconSVG type={item.iconType} color="white" />
                </div>
                <div className={styles.hiwColContent}>
                  <h1>{item.h1}</h1>
                  <h2>{item.h2}</h2>
                </div>
              </span>
              <img
                className={styles[`image${index}`]}
                src={item.imageURL}
                alt=""
              />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
