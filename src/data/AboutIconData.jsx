import Setting from '../assets/icons/setting-icon.svg';
import Repair from '../assets/icons/repair-icon.svg';
import Responsive from '../assets/icons/mobile-icon.svg';
import Doc from '../assets/icons/doc-icon.svg';
import Quality from '../assets/icons/star-icon.svg';
import Support from '../assets/icons/user.svg';

export const AboutIconData = [
  {
    icon: <img src={Setting} alt="Setting" />,
    text: "Clean Code",
    class: "setting"
  },
  {
    icon: <img src={Repair} alt="Repair" />,
    text: "Support Technique",
    class: "maintenance"
  },
  {
    icon: <img src={Responsive} alt="Responsive" />,
    text: "Responsive",
    class: "responsive"
  },
  {
    icon: <img src={Doc} alt="Documentation" />,
    text: "Documentation",
    class: "doc"
  },
  {
    icon: <img src={Quality} alt="Quality" />,
    text: "Quality",
    class: "quality"
  },
  {
    icon: <img src={Support} alt="Support" />,
    text: "Support",
    class: "support"
  },
];