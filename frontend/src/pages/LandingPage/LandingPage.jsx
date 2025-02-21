import styles from "./LandingPage.module.css";
import { useState, useEffect } from "react";

const SparklesIcon=()=>{
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-sparkles w-6 h-6"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    <path d="M20 3v4"></path>
    <path d="M22 5h-4"></path>
    <path d="M4 17v2"></path>
    <path d="M5 18H3"></path>
  </svg>
  )
}
const LandingPage = () => {
  const [cardContent, setCardContent] = useState([
    {
      title: "Custom Calendar",
      content:
        "Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.",
      imageURL: "https://justliv.org/assets/images/laptop.png",
    },
    {
      title:"Tailored to Your Interests",
      content:"Filters let you choose activities by age, category, price, and more. Social features help you sync schedules with friends and see what they’re attending.",
      imageURL:"https://justliv.org/assets/images/child.png"
    },
    {
      title:"Stress-Free Bulk Booking",
      content:"Book all your child’s activities in just a few clicks. Our platform handles the details so you don’t have to.",
      imageURL:"https://justliv.org/assets/images/mother1.png"
    }
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
          <SparklesIcon/>
            Join the waiting list
          </button>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <h1>Why JustLiv?</h1>
        <div className={styles.gridContainer}>
          <ul>
            {cardContent.map((card,index)=>{
              return(
                <li key={index}>
                <div className = {styles.icon}><SparklesIcon/></div>
                <h1>{card.title}</h1>
                <p>{card.content}</p>
                <img src={card.imageURL} alt="image" />
              </li>
              )
              
            })}
          </ul>
        </div>
      </div>
      <div>
        <div className = {styles.howItWorksContainer}>
          
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
