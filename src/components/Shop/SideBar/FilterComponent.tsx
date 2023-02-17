import React from 'react';
import { BsCheck, BsStarFill, BsStar } from 'react-icons/bs';

interface CheckBoxList {
  id: string;
  title: string;
}

const FilterComponent: React.FC<{
  filterItems: CheckBoxList[];
  filterTitle: string;
  isRating: boolean;
  isColor: boolean;
  value: string;
  setValue: (value: string) => void;
  name: string;
}> = ({
  filterItems,
  isRating,
  isColor,
  filterTitle,
  value,
  setValue,
  name,
}) => {
  // const [isChecked, setIsChecked] = useState<boolean>(false);

  // is checked or not
  const checkedStat = (e: { target: HTMLInputElement }) => {
    if (e.target.checked) {
      setValue(e.target.value);
      // setIsChecked(true);
      return;
    }

    setValue('');
    // setIsChecked(false);
  };

  return (
    <div className="w-full">
      <span className="text-lg font-josefin font-bold text-primaryNavyBlue  border-b-[1px] border-b-primaryNavyBlue">
        {filterTitle}
      </span>
      <ul
        className={`w-full gap-2 mt-2 ${
          !isColor ? 'flex flex-col' : 'grid grid-cols-3 gap-x-1'
        }`}
      >
        {filterItems.map((list: CheckBoxList) => (
          <li
            className="w-full text-sm font-lato flex items-center gap-2 text-primaryBlue/70 font-thin"
            key={list.id}
          >
            {!isRating && !isColor && (
              <>
                <div
                  className={`w-3 h-3 border-[1px] border-black/10 flex relative ${
                    filterTitle === 'Product Brand'
                      ? 'bg-primaryBlue/40'
                      : 'bg-primaryPink/40'
                  }`}
                >
                  <input
                    type="radio"
                    id={list.id}
                    onChange={checkedStat}
                    name={name}
                    value={list.id}
                    className="absolute top-0 left-0 opacity-0 cursor-pointer"
                  />
                  {value === list.id && (
                    <BsCheck className="text-xs m-auto text-primaryPink" />
                  )}
                </div>
                <label htmlFor={list.id} className="cursor-pointer">
                  {list.title}
                </label>
              </>
            )}
            {isRating && !isColor && (
              <>
                <div className="w-3 h-3 border-[1px] border-black/10 flex relative bg-[#D0A32D]/40 ">
                  <input
                    type="radio"
                    onChange={checkedStat}
                    id={list.id}
                    name={name}
                    value={list.title}
                    className="absolute top-0 left-0 opacity-0 cursor-pointer"
                  />
                  {value === list.id && (
                    <BsCheck className="text-[#D0A32D] text-xs m-auto" />
                  )}
                </div>
                <span className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((rat: number) => (
                    <span key={rat}>
                      {rat <= parseInt(list.title) ? (
                        <BsStarFill className="text-[#D0A32D]" />
                      ) : (
                        <BsStar className="text-[#D0A32D]" />
                      )}
                    </span>
                  ))}
                </span>
                <label htmlFor={list.id} className="cursor-pointer">
                  {list.title}
                </label>
              </>
            )}
            {!isRating && isColor && (
              <>
                <div
                  className={`w-3 h-3 rounded-full ${
                    value === list.id
                      ? 'border-[2px] border-black/80'
                      : 'border-[1px] border-black/10'
                  } cursor-pointer`}
                  style={{ backgroundColor: `${list.id}` }}
                  onClick={() => setValue(list.id)}
                />
                <span>{list.title}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(FilterComponent);
