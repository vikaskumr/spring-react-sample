import { useAsyncDebounce } from "react-table";
import { useForm, FieldValues } from "react-hook-form";
import { SearchProps } from "./Search";
import { useState } from "react";

export const useSearchEffects = ({ debounceTime = 300 }: SearchProps) => {
  const [filter, setFilter] = useState("");

  const onFilterChange = useAsyncDebounce((value: string) => {
    setFilter(value || "");
  }, debounceTime);

  const { register, reset, watch } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues: { search: filter },
  });

  const field = {
    name: "search",
    inputProps: {
      placeholder: "Search",
    },
  };

  const inputProps = register(field.name);
  const value = watch(field.name);

  const handleReset = () => {
    onFilterChange("");
    reset({ search: "" });
  };

  return {
    field,
    handleReset,
    onFilterChange,
    inputProps,
    value,
  };
};
