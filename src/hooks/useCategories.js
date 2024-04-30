import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoyService";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  // {_id, title, enTitle, ....}
  const { categories: rawCategories = [] } = data || {};

  // {value, label}
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const categoriess = rawCategories.map((item) => ({
    title: item.title,
    id: item._id,
    desc:item.description
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories,categoriess, transformedCategories };
}
