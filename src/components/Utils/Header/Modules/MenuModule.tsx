import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useOnClickOutside } from "../../../../lib/hooks/useOnClickOutside";
import { useToggleContext } from "../../../../lib/context/ToggleContext";
import { animated, useTransition, config } from "react-spring";

const MenuModule: React.FC<{}> = () => {
  const { dispatch } = useToggleContext();
  const { asPath: pathFromRouter } = useRouter();

  const wrapper = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapper, () => dispatch({ type: "ALL_FALSE" }));

  const links = [
    { href: "/", asPath: undefined, label: "Home" },
    { href: "/product", asPath: undefined, label: "All Products" },
    { href: "/lookbook", asPath: undefined, label: "Lookbook" },
    { href: "/about", asPath: undefined, label: "About" },
    { href: "/blog", asPath: undefined, label: "Blog" }
  ];

  const transitions = useTransition(links, item => item.label, {
    config: config.gentle,
    from: { opacity: 0, transform: "translateY(50%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(50%)" },
    trail: 150
  });

  return (
    <div ref={wrapper} className="module-content" role="menu">
      {transitions.map(({ item, props, key }) => (
        <Link key={key} href={item.href} as={item.asPath} passHref>
          <animated.button
            title={item.label}
            style={props}
            autoFocus={item.label === "Home" ? true : false}
            className={
              item.href === pathFromRouter
                ? "main-link main-link_active"
                : "main-link"
            }
          >
            {item.label}
          </animated.button>
        </Link>
      ))}

      <style jsx global>{`
        .module-content {
          margin-top: -1px;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          align-content: baseline;
          padding: 5px 0px 0px 0px;
        }
      `}</style>
    </div>
  );
};

export default MenuModule;
