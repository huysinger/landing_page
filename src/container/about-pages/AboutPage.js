import Header from "../../components/headers/Header";
import "./AboutPage.css";
import { menuHeader } from "../../components/headers/Header";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer/Footer";

const AboutPage = (userInfo) => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Header
        menu={menuHeader}
        userInfo={userInfo}
      />
      <div className="about-body">
        <img
          src="https://media.loveitopcdn.com/3807/dong-phuc-cellphones-01.jpg"
          alt="staff"
          className="staff-img"
        />
        <div className="about-name">
          <h1>About Us</h1>
        </div>
        <div className="about-description">
          <p style={{ textAlign: "center" }}>
            CellphoneS - Điện thoại, laptop, tablet, phụ kiện chính hãng!
          </p>{" "}
          <p>
            Welcome to CellphoneS, where imagination knows no bounds and dreams
            come to life! We are your go-to destination for all things fun and
            play. Step into a world of enchanting toys that will delight
            children of all ages and ignite the inner child in adults.
          </p>{" "}
          At CellphoneS, we take great pride in curating a diverse and
          captivating collection of toys from around the globe. Whether you're
          searching for classic toys that have stood the test of time or the
          latest innovative playthings, we have it all. From cuddly plushies
          that make perfect companions to educational toys that spark creativity
          and learning, our extensive range ensures there's something for
          everyone. Quality and safety are our top priorities. We partner with
          renowned toy manufacturers who adhere to the strictest safety
          standards, ensuring that each item we offer is safe, durable, and
          built to withstand hours of playtime. Step into our whimsical store,
          where bright colors and cheerful displays invite you to explore every
          nook and cranny. Our friendly and knowledgeable staff are always on
          hand to guide you through our vast selection and help you find that
          special toy that will bring endless joy to your loved ones. Looking
          for a gift that will leave a lasting impression? Our gift-wrapping
          service adds a touch of magic to any present, making it a joy to
          receive and unwrap. Whether it's a birthday, holiday, or just a token
          of appreciation, our thoughtfully wrapped packages will make your
          gesture truly unforgettable. If you prefer the convenience of online
          shopping, our user-friendly website is designed to make your browsing
          experience effortless. With secure payment options and swift delivery,
          bringing the wonder of Toylandia straight to your doorstep has never
          been easier. Join us on a journey filled with laughter, adventure, and
          discovery.
          <p>
            {" "}
            CellphoneS is more than just a toy shop; it's a place where memories
            are made and cherished for a lifetime. Come, be a part of our
            vibrant community, and let your imagination run wild! Experience the
            joy of play at Toylandia - where happiness comes wrapped in toys!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
