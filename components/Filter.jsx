"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "./ui/Button";
import qs from "query-string";
import { cn } from "@/lib/utils";

const Filter = ({ valueKey, name, data }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get(valueKey);

  const handleClick = (id) => {
    const currentValue = qs.parse(searchParams.toString());

    const query = {
      ...currentValue,
      [valueKey]: id,
    };

    if (currentValue[valueKey] === id) query[valueKey] = null;
    const url = qs.stringifyUrl({
      url: window.location.href,
      query: query,
    });
    router.push(url);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((item) => (
          <Button
            className={cn(
              "border border-gray-500 rounded-lg p-2 py-1",
              selectedValue === item.id
                ? "text-white bg-black"
                : "text-black bg-white"
            )}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
