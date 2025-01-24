import { useEffect, useState } from "react";
import Axios from "../axois/apiClient";

interface MenuItem {
  title: string;
}

interface Item {
  _id: string;
  title: string;
  category: string;
  price: number;
  menuItems: MenuItem[];
}

interface UseGetItemsReturn {
  food: Item[];
  drinks: Item[];
  brunchCocktails: Item[];
  error: Error | null;
}

export const useGetItems = (): UseGetItemsReturn => {
  const [food, setFood] = useState<Item[]>([]);
  const [drinks, setDrinks] = useState<Item[]>([]);
  const [brunchCocktails, setBrunchCocktails] = useState<Item[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await Axios.get<{ data: Item[] }>("/api/items");
        const data = response.data.data;

        setFood(data.filter((item) => item.category === "FOOD"));
        setDrinks(data.filter((item) => item.category === "DRINKS"));
        setBrunchCocktails(
          data.filter((item) => item.category === "BRUNCH COCKTAILS")
        );
      } catch (error: any) {
        console.error("Error fetching items:", error);
        setError(error);
      }
    };

    fetchItems();
  }, []);

  return { food, drinks, brunchCocktails, error };
};
