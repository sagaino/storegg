/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemPros {
  title: string;
  icon:
    | "overview"
    | "card"
    | "transaction"
    | "reward"
    | "logout"
    | "setting"
    | "message";
  active?: boolean;
  href?: string;
  onClick?: () => void;
}
export default function MenuItem(props: Partial<MenuItemPros>) {
  const {
    title, icon, active, href = '/', onClick,
  } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a role="button" className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
