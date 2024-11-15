import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from 'react-icons/bs';
const SocialsDiv = () => {
  return (
    <div className="flex gap-3 my-3 text-2xl ml-1">
      <a target="_blank" href="https://www.linkedin.com/in/vivek-sanghvi/">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/wickedvic">
        <BsGithub />
      </a>
      <a target="_blank" href="https://www.facebook.com/vivek.sanghvi.94">
        <BsFacebook />
      </a>
      <a target="_blank" href="https://www.instagram.com/vivek1019/">
        <BsInstagram />
      </a>

    </div>
  );
};

export default SocialsDiv;
