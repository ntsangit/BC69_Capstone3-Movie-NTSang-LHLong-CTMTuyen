import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

type Props = {
  total: number | undefined;
  current: number;
  numberPost: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

export const Paginate = (props: Props) => {
  const { total, current, setCurrent, numberPost } = props;

  const numberPage = total && Math.ceil(total / numberPost);

  let listPage: number[] = [];
  if (numberPage) {
    for (let i = 1; i <= numberPage; i++) {
      listPage.push(i);
    }
  }

  return (
      <ul className="flex gap-2 paginate">
        {listPage.map((item) => (
          <li key={item}>
            <Link
              to={"#"}
              className={cn(
                "!flex items-center justify-center bg-white w-8 h-8 rounded-sm",
                {
                  active: item === current,
                }
              )}
              onClick={() => {
                setCurrent(item);
              }}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
  );
};
