import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

const socialIcon = [
  {
    id: 1,
    icon: facebook,
  },
  {
    id: 2,
    icon: instagram,
  },
  {
    id: 3,
    icon: twitter,
  },
  {
    id: 4,
    icon: youtube,
  },
];

const footerLink = [
  {
    id: 1,
    text: "Conditions of Use",
  },
  {
    id: 2,
    text: "Privacy & Policy",
  },
  {
    id: 3,
    text: "Press Room",
  },
];

const Footer = () => {
  return (
    <>
      <div className=" relative">
        <div className="w-[90vw] max-w-6xl mx-auto mt-[100px]">
          <div className=" flex items-center justify-center gap-12">
            {socialIcon.map((social) => {
              return (
                <div key={social.id}>
                  <img src={social.icon} alt="social icon" />
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-6 lg:gap-12 mt-9">
            {footerLink.map((item) => {
              return (
                <p
                  key={item.id}
                  className=" text-xs md:text-base lg:text-lg font-bold"
                >
                  {item.text}
                </p>
              );
            })}
          </div>
          <p className=" text-sm md:text-base lg:text-lg font-bold text-[#6B7280] mt-9 text-center">
            © 2021 MovieBox by Adriana Eka Prayudha
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
