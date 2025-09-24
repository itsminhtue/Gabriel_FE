import { useEffect, useState } from "react";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenre = () =>{
    const [data, setData] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
       setLoading(true);

       const timer = setTimeout(() => {
        try{
            setData(genres);
            setLoading(false);
        } catch (error: any) {
            setError(error.message || "Failed to fetch genres");
            setLoading(false);
        }
       }, 2000);

       return () => clearTimeout(timer);
    }, []);

    return({data,loading,error,})
} 

export default useGenre;