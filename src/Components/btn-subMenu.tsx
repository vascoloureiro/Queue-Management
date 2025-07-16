import { useRef, useState, useEffect, ReactNode } from "react"

// Styles
import './CSS/btnSubMenu.css'

type BtnSubMenuProps = {
  icon?: ReactNode;
  btnName: string;
  options: string[];
  onClick?: (option: string) => void;
}

export default function Btn_SubMenu({
  icon,
  btnName,
  options,
  onClick
}: BtnSubMenuProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const subMenu = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (subMenu.current && !subMenu.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (<>
    <div className="main-container-btn">
      <button
        className="btn-header-submenu "
        onClick={() => { setIsOpen(!isOpen) }}
      >
        
          {btnName}
          {icon}
     
      </button>
      {isOpen && (
        <div
          ref={subMenu}
          className="sub-menu-btn-opts-header "
        >
          {options.map((content, key) => (
            <button
              key={key}
              className="btn-submenu-opts-header "
              onClick={() =>
                onClick?.(content)
              }
            >
              {content}
            </button>
          ))}
        </div>
      )}

    </div>

  </>)
}