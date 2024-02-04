import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

          
              <h1>About Us</h1>
              <p>
                Welcome to Furry Friends, where our passion for the well-being of all animals drives our mission. At the heart of our endeavors is a commitment to enhancing the lives of both domestic and stray animals alike. Our unique approach includes a cutting-edge treatment portal, secured by MongoDB, ensuring confidential and personalized care for wounded animals while prioritizing data privacy.
              </p>
              <p>
                Dedicated to creating loving homes, our adoption platform connects compassionate individuals with stray animals seeking a second chance at happiness. Through our donation and food portal, we empower users to contribute directly to the nourishment and sustenance of these furry friends, leaving no paw unfed.
              </p>
              <p>
                Discover a range of shelter options, from adoption services to government shelters, as we strive to provide every animal with a safe and loving home. Our user-friendly complaint section empowers individuals to report instances of animal cruelty promptly, championing the cause of those who cannot speak for themselves.
              </p>
              <p>
                Join us at Furry Friends, where compassion meets action, and together, we nurture lives, one paw at a time.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.jpeg"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};