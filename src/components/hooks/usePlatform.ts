import { useEffect, useState } from "react";
import platformsData from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const flattenPlatforms = () => {
  return platformsData.flatMap((group: any) => group.platforms.map((p: any) => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
  })));
};

const usePlatform = () => {
  const [data, setData] = useState<Platform[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(flattenPlatforms());
      setLoading(false);
    } catch (error: any) {
      setError(error.message || "Failed to fetch platforms");
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};

export default usePlatform;
